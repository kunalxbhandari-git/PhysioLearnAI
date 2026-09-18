import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { getAIProvider } from "@/lib/ai";
import type { ContentBlock } from "@/prisma/data/types";

const schema = z.object({
  topicSlug: z.string().min(1),
  sectionSlug: z.string().min(1),
});

export async function POST(req: NextRequest) {
  let topicSlug: string, sectionSlug: string;
  try {
    ({ topicSlug, sectionSlug } = schema.parse(await req.json()));
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const section = await prisma.section.findFirst({
    where: { slug: sectionSlug, topic: { slug: topicSlug } },
    include: { topic: { select: { title: true } } },
  });
  if (!section) return NextResponse.json({ error: "Section not found." }, { status: 404 });

  const blocks = JSON.parse(section.content) as ContentBlock[];
  const text = blocks
    .map((b) => {
      if (b.kind === "paragraph") return b.text;
      if (b.kind === "list" || b.kind === "keypoints" || b.kind === "pearls")
        return ("items" in b ? b.items : []).join(" ");
      if (b.kind === "steps") return b.items.map((s) => `${s.title}: ${s.text}`).join(" ");
      if (b.kind === "cards") return b.items.map((c) => `${c.title}: ${c.text}`).join(" ");
      return "";
    })
    .filter(Boolean)
    .join(" ")
    .slice(0, 4000);

  try {
    const provider = getAIProvider();
    const simplified = await provider.simplifyExplanation(section.topic.title, section.title, text);
    return NextResponse.json({ text: simplified, provider: provider.name });
  } catch {
    return NextResponse.json(
      { error: "Could not generate a simpler explanation right now." },
      { status: 500 }
    );
  }
}
