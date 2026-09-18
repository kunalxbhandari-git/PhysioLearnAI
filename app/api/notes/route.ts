import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/user";

const schema = z.object({
  topicSlug: z.string().min(1),
  content: z.string().max(20_000),
});

/** Upsert the user's note for a topic (empty content deletes it). */
export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  let topicSlug: string, content: string;
  try {
    ({ topicSlug, content } = schema.parse(await req.json()));
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const topic = await prisma.topic.findUnique({ where: { slug: topicSlug }, select: { id: true } });
  if (!topic) return NextResponse.json({ error: "Topic not found." }, { status: 404 });

  if (content.trim() === "") {
    await prisma.note.deleteMany({ where: { userId: user.id, topicId: topic.id } });
    return NextResponse.json({ ok: true, deleted: true });
  }

  await prisma.note.upsert({
    where: { userId_topicId: { userId: user.id, topicId: topic.id } },
    create: { userId: user.id, topicId: topic.id, content },
    update: { content },
  });
  return NextResponse.json({ ok: true });
}
