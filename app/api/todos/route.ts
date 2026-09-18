import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/user";

const createSchema = z.object({
  title: z.string().min(1).max(200),
  dueAt: z.string().datetime().nullable().optional(),
});

const updateSchema = z.object({
  id: z.string().min(1),
  completed: z.boolean().optional(),
  title: z.string().min(1).max(200).optional(),
  dueAt: z.string().datetime().nullable().optional(),
});

const deleteSchema = z.object({ id: z.string().min(1) });

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  try {
    const body = createSchema.parse(await req.json());
    const todo = await prisma.todo.create({
      data: {
        userId: user.id,
        title: body.title,
        dueAt: body.dueAt ? new Date(body.dueAt) : null,
      },
    });
    return NextResponse.json({ todo });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}

export async function PATCH(req: NextRequest) {
  const user = await getCurrentUser();
  try {
    const body = updateSchema.parse(await req.json());
    const existing = await prisma.todo.findFirst({ where: { id: body.id, userId: user.id } });
    if (!existing) return NextResponse.json({ error: "Not found." }, { status: 404 });
    const todo = await prisma.todo.update({
      where: { id: body.id },
      data: {
        ...(body.completed !== undefined && { completed: body.completed }),
        ...(body.title !== undefined && { title: body.title }),
        ...(body.dueAt !== undefined && { dueAt: body.dueAt ? new Date(body.dueAt) : null }),
      },
    });
    return NextResponse.json({ todo });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  const user = await getCurrentUser();
  try {
    const body = deleteSchema.parse(await req.json());
    await prisma.todo.deleteMany({ where: { id: body.id, userId: user.id } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
