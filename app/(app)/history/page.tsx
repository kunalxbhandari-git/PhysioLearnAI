import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList } from "lucide-react";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/user";
import { Badge, ButtonLink, Card, EmptyState, PageHeader } from "@/components/ui";
import { formatDateTime, formatDuration } from "@/lib/utils";

export const metadata: Metadata = { title: "Assessment History" };
export const dynamic = "force-dynamic";

export default async function HistoryPage() {
  const user = await getCurrentUser();
  const attempts = await prisma.quizAttempt.findMany({
    where: { userId: user.id, status: "completed" },
    orderBy: { completedAt: "desc" },
    include: { topic: { select: { slug: true, title: true } } },
  });

  return (
    <div>
      <PageHeader
        title="Assessment History"
        subtitle="Every completed quiz, newest first. Open any result to review answers and analysis."
      />

      {attempts.length === 0 ? (
        <EmptyState
          icon={<ClipboardList aria-hidden="true" />}
          title="No quizzes yet"
          text="Your first assessment is waiting."
          action={<ButtonLink href="/topics">Take Your First Quiz</ButtonLink>}
        />
      ) : (
        <>
          {/* Desktop table */}
          <Card className="hidden overflow-hidden md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-2 text-left text-xs font-bold uppercase tracking-wide text-muted">
                  <th className="px-4 py-3">Topic</th>
                  <th className="px-4 py-3">Mode</th>
                  <th className="px-4 py-3">Questions</th>
                  <th className="px-4 py-3">Score</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Time</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3" aria-label="Actions" />
                </tr>
              </thead>
              <tbody>
                {attempts.map((a) => (
                  <tr key={a.id} className="border-t border-border">
                    <td className="px-4 py-3 font-semibold">{a.topic.title}</td>
                    <td className="px-4 py-3 capitalize text-muted">{a.mode}</td>
                    <td className="px-4 py-3">{a.questionCount}</td>
                    <td className="px-4 py-3 font-bold">
                      {a.score}/{a.questionCount}{" "}
                      <span className="text-muted">({Math.round(a.percentage ?? 0)}%)</span>
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant={a.passed ? "success" : "danger"}>
                        {a.passed ? "PASS" : "FAIL"}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-muted">{formatDuration(a.totalTimeSec ?? 0)}</td>
                    <td className="px-4 py-3 text-muted">
                      {a.completedAt ? formatDateTime(a.completedAt) : "—"}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-3 text-xs font-bold">
                        <Link href={`/results/${a.id}`} className="text-accent-strong hover:underline">
                          View
                        </Link>
                        <Link href={`/quiz/setup/${a.topic.slug}`} className="text-muted hover:underline">
                          Retake
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          {/* Mobile cards */}
          <div className="space-y-3 md:hidden">
            {attempts.map((a) => (
              <Link key={a.id} href={`/results/${a.id}`} className="block">
                <Card className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold">{a.topic.title}</p>
                    <Badge variant={a.passed ? "success" : "danger"}>
                      {a.passed ? "PASS" : "FAIL"}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {a.score}/{a.questionCount} correct · {Math.round(a.percentage ?? 0)}% ·{" "}
                    {formatDuration(a.totalTimeSec ?? 0)}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">
                    {a.completedAt ? formatDateTime(a.completedAt) : ""} · {a.mode} mode
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
