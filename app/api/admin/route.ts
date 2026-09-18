import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/user";
import { setSetting } from "@/lib/settings";

const schema = z.object({
  passingPercent: z.coerce.number().int().min(1).max(100).optional(),
  toggleTopicSlug: z.string().optional(),
});

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  // Server-side role check — admin routes are never trusted from the client.
  if (user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  let body: z.infer<typeof schema>;
  try {
    body = schema.parse(await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.passingPercent !== undefined) {
    await setSetting("passingPercent", String(body.passingPercent));
  }
  if (body.toggleTopicSlug) {
    const topic = await prisma.topic.findUnique({ where: { slug: body.toggleTopicSlug } });
    if (!topic) return NextResponse.json({ error: "Topic not found." }, { status: 404 });
    await prisma.topic.update({ where: { id: topic.id }, data: { enabled: !topic.enabled } });
  }

  return NextResponse.json({ ok: true });
}
