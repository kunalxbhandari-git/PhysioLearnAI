import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/user";

const schema = z.object({ sectionId: z.string().min(1) });

/** Toggle a bookmark on a section. */
export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  let sectionId: string;
  try {
    ({ sectionId } = schema.parse(await req.json()));
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const section = await prisma.section.findUnique({
    where: { id: sectionId },
    select: { id: true, topicId: true },
  });
  if (!section) return NextResponse.json({ error: "Section not found." }, { status: 404 });

  const existing = await prisma.bookmark.findUnique({
    where: { userId_sectionId: { userId: user.id, sectionId } },
  });

  if (existing) {
    await prisma.bookmark.delete({ where: { id: existing.id } });
    return NextResponse.json({ bookmarked: false });
  }
  await prisma.bookmark.create({
    data: { userId: user.id, sectionId, topicId: section.topicId },
  });
  return NextResponse.json({ bookmarked: true });
}
