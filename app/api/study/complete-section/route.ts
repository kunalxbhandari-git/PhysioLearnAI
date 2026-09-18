import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/user";
import { checkAchievements } from "@/lib/achievements";

const schema = z.object({ sectionId: z.string().min(1) });

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  let sectionId: string;
  try {
    ({ sectionId } = schema.parse(await req.json()));
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const section = await prisma.section.findUnique({ where: { id: sectionId } });
  if (!section) return NextResponse.json({ error: "Section not found." }, { status: 404 });

  await prisma.sectionProgress.upsert({
    where: { userId_sectionId: { userId: user.id, sectionId } },
    create: { userId: user.id, sectionId },
    update: {},
  });
  await prisma.user.update({ where: { id: user.id }, data: { xp: { increment: 10 } } });
  await checkAchievements(user.id);

  return NextResponse.json({ ok: true });
}
