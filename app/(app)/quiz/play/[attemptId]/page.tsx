import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/user";
import { getPlayState } from "@/lib/quiz/engine";
import { QuizPlayer } from "./quiz-player";

export const metadata: Metadata = { title: "Assessment" };
export const dynamic = "force-dynamic";

export default async function QuizPlayPage({
  params,
}: {
  params: Promise<{ attemptId: string }>;
}) {
  const { attemptId } = await params;
  const user = await getCurrentUser();

  let state;
  try {
    state = await getPlayState(attemptId, user.id);
  } catch {
    notFound();
  }

  if (state.status === "completed") redirect(`/results/${attemptId}`);

  return <QuizPlayer initialState={state} />;
}
