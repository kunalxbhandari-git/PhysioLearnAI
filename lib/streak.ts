import { prisma } from "@/lib/db";

function dayKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** Compute the user's learning streak from real activity (study + quizzes). */
export async function computeStreak(userId: string): Promise<{ current: number; longest: number; activeDays: Set<string> }> {
  const [progress, attempts, sessions] = await Promise.all([
    prisma.sectionProgress.findMany({ where: { userId }, select: { completedAt: true } }),
    prisma.quizAttempt.findMany({ where: { userId }, select: { startedAt: true } }),
    prisma.studySession.findMany({ where: { userId }, select: { date: true } }),
  ]);

  const days = new Set<string>();
  for (const p of progress) days.add(dayKey(p.completedAt));
  for (const a of attempts) days.add(dayKey(a.startedAt));
  for (const s of sessions) days.add(dayKey(s.date));

  // Current streak: walk back from today (or yesterday, so today isn't required yet).
  let current = 0;
  const cursor = new Date();
  if (!days.has(dayKey(cursor))) cursor.setDate(cursor.getDate() - 1);
  while (days.has(dayKey(cursor))) {
    current += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  // Longest streak across all activity
  const sorted = [...days].sort();
  let longest = 0;
  let run = 0;
  let prev: Date | null = null;
  for (const key of sorted) {
    const [y, m, d] = key.split("-").map(Number);
    const date = new Date(y, m - 1, d);
    if (prev && date.getTime() - prev.getTime() === 86400000) run += 1;
    else run = 1;
    longest = Math.max(longest, run);
    prev = date;
  }

  return { current, longest, activeDays: days };
}
