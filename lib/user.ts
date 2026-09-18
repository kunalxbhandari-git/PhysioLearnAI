import { prisma } from "@/lib/db";

/**
 * PhysioLearn currently runs as a private single-learner platform behind the
 * password gate. All progress attaches to one User row; the schema already
 * supports multiple users so a future login system can be layered on.
 */
export async function getCurrentUser() {
  const existing = await prisma.user.findFirst({ orderBy: { createdAt: "asc" } });
  if (existing) return existing;
  return prisma.user.create({ data: { displayName: "Student", role: "ADMIN" } });
}
