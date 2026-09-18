import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/user";

const schema = z.object({
  // The client must send the literal confirmation string typed by the user.
  confirm: z.literal("RESET"),
});

/**
 * Danger zone: wipes ALL learning data back to zero — study progress,
 * quiz history, achievements, XP, streak activity, bookmarks, notes and
 * to-dos. Topics/content are untouched. Irreversible.
 */
export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  try {
    schema.parse(await req.json());
  } catch {
    return NextResponse.json(
      { error: "Confirmation missing — type RESET to confirm." },
      { status: 400 }
    );
  }

  await prisma.$transaction([
    prisma.attemptQuestion.deleteMany({ where: { attempt: { userId: user.id } } }),
    prisma.quizAttempt.deleteMany({ where: { userId: user.id } }),
    prisma.sectionProgress.deleteMany({ where: { userId: user.id } }),
    prisma.studySession.deleteMany({ where: { userId: user.id } }),
    prisma.userAchievement.deleteMany({ where: { userId: user.id } }),
    prisma.bookmark.deleteMany({ where: { userId: user.id } }),
    prisma.note.deleteMany({ where: { userId: user.id } }),
    prisma.todo.deleteMany({ where: { userId: user.id } }),
    prisma.user.update({ where: { id: user.id }, data: { xp: 0 } }),
  ]);

  return NextResponse.json({ ok: true });
}
