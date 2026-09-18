import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getCurrentUser } from "@/lib/user";
import { startQuiz } from "@/lib/quiz/engine";

const schema = z.object({
  topicSlug: z.string().min(1),
  count: z.union([z.literal(10), z.literal(20), z.literal(30)]),
  mode: z.enum(["exam", "practice"]),
});

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  try {
    const { topicSlug, count, mode } = schema.parse(await req.json());
    const result = await startQuiz(user.id, topicSlug, count, mode);
    return NextResponse.json(result);
  } catch (e) {
    const message = e instanceof Error ? e.message : "Could not start the quiz.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
