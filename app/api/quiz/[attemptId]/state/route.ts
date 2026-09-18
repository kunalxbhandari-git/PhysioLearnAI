import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/user";
import { getPlayState } from "@/lib/quiz/engine";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ attemptId: string }> }
) {
  const { attemptId } = await params;
  const user = await getCurrentUser();
  try {
    const state = await getPlayState(attemptId, user.id);
    return NextResponse.json(state);
  } catch {
    return NextResponse.json({ error: "Attempt not found." }, { status: 404 });
  }
}
