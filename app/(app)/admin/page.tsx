import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/user";
import { getSettings } from "@/lib/settings";
import { Card, PageHeader } from "@/components/ui";
import { AdminPanel } from "./admin-panel";

export const metadata: Metadata = { title: "Admin" };
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const user = await getCurrentUser();
  if (user.role !== "ADMIN") redirect("/dashboard");

  const [settings, topics, counts] = await Promise.all([
    getSettings(),
    prisma.topic.findMany({
      // The mock-exam pseudo-topic is engine-managed and must stay hidden.
      where: { slug: { not: "mock-exam" } },
      orderBy: [{ category: "asc" }, { title: "asc" }],
      include: { _count: { select: { sections: true, questions: true, flashcards: true } } },
    }),
    Promise.all([
      prisma.section.count(),
      prisma.question.count(),
      prisma.flashcard.count(),
      prisma.quizAttempt.count({ where: { status: "completed" } }),
      prisma.attemptQuestion.count({ where: { answeredAt: { not: null } } }),
    ]),
  ]);

  const [sectionCount, questionCount, flashcardCount, attemptCount, answerCount] = counts;

  return (
    <div>
      <PageHeader
        title="Admin & Content Management"
        subtitle="Platform configuration and content overview. Content is seeded from prisma/data — edit those files and re-run the seed to update it."
      />

      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {[
          { label: "Topics", value: topics.length },
          { label: "Sections", value: sectionCount },
          { label: "Questions", value: questionCount },
          { label: "Flashcards", value: flashcardCount },
          { label: "Quizzes taken", value: `${attemptCount} (${answerCount} answers)` },
        ].map((s) => (
          <Card key={s.label} className="p-4 text-center">
            <p className="text-lg font-extrabold">{s.value}</p>
            <p className="text-xs font-semibold text-muted">{s.label}</p>
          </Card>
        ))}
      </div>

      <AdminPanel
        passingPercent={settings.passingPercent}
        topics={topics.map((t) => ({
          slug: t.slug,
          title: t.title,
          category: t.category,
          enabled: t.enabled,
          sections: t._count.sections,
          questions: t._count.questions,
          flashcards: t._count.flashcards,
        }))}
      />
    </div>
  );
}
