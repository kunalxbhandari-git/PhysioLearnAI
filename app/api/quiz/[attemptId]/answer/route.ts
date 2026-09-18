import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getCurrentUser } from "@/lib/user";
import { getPlayState, submitAnswer } from "@/lib/quiz/engine";

const schema = z.object({
  order: z.number().int().min(0).max(99),
  // null = the client's 2-minute timer expired (the server re-validates timing)
  selectedIndex: z.number().int().min(0).max(3).nullable(),
});

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ attemptId: string }> }
) {
  const { attemptId } = await params;
  const user = await getCurrentUser();
  try {
    const { order, selectedIndex } = schema.parse(await req.json());
    const result = await submitAnswer(attemptId, user.id, order, selectedIndex);
    const state = await getPlayState(attemptId, user.id);
    return NextResponse.json({ ...result, state });
  } catch {
    return NextResponse.json({ error: "Could not record the answer." }, { status: 400 });
  }
}
