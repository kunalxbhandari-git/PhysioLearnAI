import type { Metadata } from "next";
import { Award, Flame, Hash, Target, TrendingUp, Trophy } from "lucide-react";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/user";
import { getDashboardStats } from "@/lib/analytics";
import { ACHIEVEMENTS } from "@/lib/achievements";
import { Badge, ButtonLink, Card, EmptyState, PageHeader } from "@/components/ui";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = { title: "Scoreboard" };
export const dynamic = "force-dynamic";

export default async function ScoreboardPage() {
  const user = await getCurrentUser();
  const [stats, unlocked, bestAttempts] = await Promise.all([
    getDashboardStats(user.id),
    prisma.userAchievement.findMany({
      where: { userId: user.id },
      include: { achievement: true },
      orderBy: { unlockedAt: "desc" },
    }),
    prisma.quizAttempt.findMany({
      where: { userId: user.id, status: "completed" },
      orderBy: [{ percentage: "desc" }, { completedAt: "asc" }],
      take: 10,
      include: { topic: { select: { title: true } } },
    }),
  ]);

  const unlockedCodes = new Set(unlocked.map((u) => u.achievement.code));

  const highlights = [
    { label: "Best score", value: stats.bestScore !== null ? `${stats.bestScore}%` : "—", icon: Trophy },
    { label: "Average score", value: stats.averageScore !== null ? `${stats.averageScore}%` : "—", icon: Target },
    { label: "Quizzes completed", value: stats.quizzesCompleted, icon: Hash },
    { label: "Current streak", value: `${stats.streak} days`, icon: Flame },
    { label: "Longest streak", value: `${stats.longestStreak} days`, icon: TrendingUp },
    { label: "Total XP", value: stats.xp, icon: Award },
  ];

  return (
    <div>
      <PageHeader
        title="Personal Scoreboard"
        subtitle="Your records, achievements and experience points. Multi-user leaderboards can be enabled later — the data model already supports them."
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {highlights.map((h) => (
          <Card key={h.label} className="p-4 text-center">
            <h.icon className="mx-auto h-5 w-5 text-accent-strong" aria-hidden="true" />
            <p className="mt-2 text-xl font-extrabold">{h.value}</p>
            <p className="text-xs font-semibold text-muted">{h.label}</p>
          </Card>
        ))}
      </div>

      <h2 className="mb-3 mt-8 text-lg font-bold">Top Scores</h2>
      {bestAttempts.length === 0 ? (
        <EmptyState
          icon={<Trophy aria-hidden="true" />}
          title="No scores yet"
          text="Complete an assessment to claim the top of your scoreboard."
          action={<ButtonLink href="/topics">Start a Quiz</ButtonLink>}
        />
      ) : (
        <Card className="divide-y divide-border overflow-hidden">
          {bestAttempts.map((a, i) => (
            <div key={a.id} className="flex items-center gap-4 px-4 py-3">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${
                  i === 0
                    ? "bg-warning-soft text-warning"
                    : i < 3
                      ? "bg-accent-soft text-accent-strong"
                      : "bg-surface-2 text-muted"
                }`}
              >
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold">{a.topic.title}</p>
                <p className="text-xs text-muted">
                  {a.score}/{a.questionCount} · {a.completedAt ? formatDate(a.completedAt) : ""}
                </p>
              </div>
              <p className="text-lg font-extrabold">{Math.round(a.percentage ?? 0)}%</p>
              <Badge variant={a.passed ? "success" : "danger"}>{a.passed ? "PASS" : "FAIL"}</Badge>
            </div>
          ))}
        </Card>
      )}

      <h2 className="mb-3 mt-8 text-lg font-bold">Achievements</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {ACHIEVEMENTS.map((a) => {
          const isUnlocked = unlockedCodes.has(a.code);
          const row = unlocked.find((u) => u.achievement.code === a.code);
          return (
            <Card key={a.code} className={`p-4 ${isUnlocked ? "" : "opacity-50"}`}>
              <div className="flex items-center justify-between">
                <Award
                  className={`h-6 w-6 ${isUnlocked ? "text-warning" : "text-muted"}`}
                  aria-hidden="true"
                />
                <Badge variant={isUnlocked ? "success" : "default"}>
                  {isUnlocked ? "Unlocked" : "Locked"}
                </Badge>
              </div>
              <p className="mt-2 font-bold">{a.title}</p>
              <p className="text-xs text-muted">{a.description}</p>
              <p className="mt-1.5 text-xs font-semibold text-accent-strong">
                +{a.xp} XP{row ? ` · ${formatDate(row.unlockedAt)}` : ""}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
