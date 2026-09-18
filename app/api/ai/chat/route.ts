import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { getAIProvider } from "@/lib/ai";

const schema = z.object({
  // Omitted for the global tutor (e.g. on the dashboard); present on study pages.
  topicSlug: z.string().min(1).optional(),
  sectionTitle: z.string().max(200).optional(),
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(4000),
      })
    )
    .min(1)
    .max(30),
});

/**
 * Tutor chat endpoint. Streams the reply as plain text so the UI can render
 * it in real time; the offline fallback returns the full text at once.
 */
export async function POST(req: NextRequest) {
  let body: z.infer<typeof schema>;
  try {
    body = schema.parse(await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Trusted, app-generated context (never user input) for the system prompt.
  let context: string;
  if (body.topicSlug) {
    const topic = await prisma.topic.findFirst({
      where: { slug: body.topicSlug, enabled: true },
      include: { sections: { orderBy: { order: "asc" }, select: { title: true } } },
    });
    if (!topic) return NextResponse.json({ error: "Topic not found." }, { status: 404 });
    const takeaways = (JSON.parse(topic.keyTakeaways) as string[])
      .map((t) => `- ${t}`)
      .join("\n");
    context =
      `The student is currently studying the topic "${topic.title}" (${topic.category})` +
      (body.sectionTitle ? `, section "${body.sectionTitle}"` : "") +
      `.\nTopic sections: ${topic.sections.map((s) => s.title).join("; ")}.\n` +
      `Key takeaways of this topic:\n${takeaways}`;
  } else {
    const topics = await prisma.topic.findMany({
      where: { enabled: true },
      select: { title: true },
      orderBy: { order: "asc" },
    });
    context =
      `The student is browsing the platform (not inside a specific topic). ` +
      `Answer general physiotherapy study questions. Topics available on the platform: ` +
      topics.map((t) => t.title).join("; ") +
      `. When relevant, suggest which of these topics to study.`;
  }

  try {
    const provider = getAIProvider();
    const result = await provider.chat(context, body.messages);

    if (typeof result === "string") {
      return new Response(result, {
        headers: { "content-type": "text/plain; charset=utf-8", "x-ai-provider": provider.name },
      });
    }
    return new Response(result, {
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "x-ai-provider": provider.name,
        "cache-control": "no-store",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "The tutor is unavailable right now. Please try again." },
      { status: 500 }
    );
  }
}
