import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/user";

const schema = z.object({
  topicSlug: z.string().min(1),
  seconds: z.number().int().min(1).max(300),
});

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  try {
    const { topicSlug, seconds } = schema.parse(await req.json());
    await prisma.studySession.create({ data: { userId: user.id, topicSlug, seconds } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
