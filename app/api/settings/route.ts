import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/user";
import { setSetting } from "@/lib/settings";

const schema = z.object({
  displayName: z.string().min(1).max(40).optional(),
  dailyGoalQuestions: z.coerce.number().int().min(5).max(200).optional(),
  defaultQuizLength: z.enum(["10", "20", "30"]).optional(),
  defaultQuizMode: z.enum(["exam", "practice"]).optional(),
  preferredDifficulty: z.enum(["Mixed", "Beginner", "Intermediate", "Advanced"]).optional(),
});

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  let body: z.infer<typeof schema>;
  try {
    body = schema.parse(await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid settings." }, { status: 400 });
  }

  if (body.displayName) {
    await prisma.user.update({ where: { id: user.id }, data: { displayName: body.displayName } });
  }
  if (body.dailyGoalQuestions !== undefined)
    await setSetting("dailyGoalQuestions", String(body.dailyGoalQuestions));
  if (body.defaultQuizLength) await setSetting("defaultQuizLength", body.defaultQuizLength);
  if (body.defaultQuizMode) await setSetting("defaultQuizMode", body.defaultQuizMode);
  if (body.preferredDifficulty) await setSetting("preferredDifficulty", body.preferredDifficulty);

  return NextResponse.json({ ok: true });
}
