import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";

const schema = z.object({
  questionId: z.string().min(1),
  selectedIndex: z.number().int().min(0).max(3),
});

/** Answer the Question of the Day — correctness is checked server-side. */
export async function POST(req: NextRequest) {
  try {
    const { questionId, selectedIndex } = schema.parse(await req.json());
    const q = await prisma.question.findUnique({
      where: { id: questionId },
      select: { correctIndex: true, explanation: true },
    });
    if (!q) return NextResponse.json({ error: "Question not found." }, { status: 404 });
    return NextResponse.json({
      correct: selectedIndex === q.correctIndex,
      correctIndex: q.correctIndex,
      explanation: q.explanation,
    });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
