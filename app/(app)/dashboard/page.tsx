import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Clock,
  Flame,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { getCurrentUser } from "@/lib/user";
import { getDashboardStats, getWeakAreas } from "@/lib/analytics";
import { getContinueLearning, getTodayQuestionCount } from "@/lib/progress";
import { getSettings } from "@/lib/settings";
import { prisma } from "@/lib/db";
import { Badge, ButtonLink, Card, EmptyState, ProgressBar } from "@/components/ui";
import { formatDate, formatDuration } from "@/lib/utils";
import { Hero3D } from "@/components/three/hero-3d";
import { CountUp, FadeIn, StaggerGrid, StaggerItem } from "@/components/motion";
import { TodoWidget } from "@/components/widgets/todo-widget";
import { ClockFocusWidget } from "@/components/widgets/clock-focus";
import { QotdWidget } from "@/components/widgets/qotd";
import { DailyTip } from "@/components/widgets/daily-tip";
import { SectionGrid } from "@/components/section-grid";
import { Greeting } from "@/components/greeting";

export const metadata: Metadata = { title: "Dashboard" };
export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  const [stats, weakAreas, continueLearning, todayQuestions, settings, recentAttempts] =
    await Promise.all([
      getDashboardStats(user.id),
      getWeakAreas(user.id),
      getContinueLearning(user.id),
      getTodayQuestionCount(user.id),
      getSettings(),
      prisma.quizAttempt.findMany({
        where: { userId: user.id, status: "completed" },
        orderBy: { completedAt: "desc" },
        take: 5,
        include: { topic: { select: { title: true, slug: true } } },
      }),
    ]);

  const dailyGoal = Number(settings.dailyGoalQuestions) || 20;
  const goalPercent = Math.min(100, Math.round((todayQuestions / dailyGoal) * 100));

  // Widgets: to-dos, question of the day, section counts
  const [todos, questionCount, gridCounts] = await Promise.all([
    prisma.todo.findMany({ where: { userId: user.id }, orderBy: { createdAt: "asc" }, take: 50 }),
    prisma.question.count({ where: { enabled: true } }),
    Promise.all([
      prisma.topic.count({ where: { enabled: true } }),
      prisma.flashcard.count(),
      prisma.bookmark.count({ where: { userId: user.id } }),
      prisma.note.count({ where: { userId: user.id } }),
      prisma.userAchievement.count({ where: { userId: user.id } }),
    ]),
  ]);

  // Deterministic daily question (same for the whole day, cycles the bank)
  let qotd = null;
  if (questionCount > 0) {
    const dayIndex = Math.floor(Date.now() / 86400000);
    const skip = (dayIndex * 37) % questionCount;
    const q = await prisma.question.findFirst({
      where: { enabled: true },
      orderBy: { id: "asc" },
      skip,
      include: { topic: { select: { title: true } } },
    });
    if (q) {
      qotd = {
        id: q.id,
        text: q.text,
        options: JSON.parse(q.options) as string[],
        topicTitle: q.topic.title,
        difficulty: q.difficulty,
      };
    }
  }

  const statCards = [
    { label: "Topics studied", value: stats.topicsStudied, icon: BookOpen },
    { label: "Topics completed", value: stats.topicsCompleted, icon: CheckCircle2 },
    { label: "Quizzes completed", value: stats.quizzesCompleted, icon: ClipboardList },
    { label: "Average score", value: stats.averageScore !== null ? `${stats.averageScore}%` : "—", icon: TrendingUp },
    { label: "Best score", value: stats.bestScore !== null ? `${stats.bestScore}%` : "—", icon: Trophy },
    { label: "Day streak", value: stats.streak, icon: Flame },
    { label: "Study time", value: `${stats.totalStudyMinutes}m`, icon: Clock },
    { label: "XP earned", value: stats.xp, icon: Sparkles },
  ];

  return (
    <div className="space-y-8">
      {/* Hero */}
      <FadeIn>
        <Card className="medical-grid relative overflow-hidden p-6 sm:p-10 md:min-h-72">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-soft blur-3xl"
            aria-hidden="true"
          />
          <Hero3D />
          <div className="relative max-w-2xl md:max-w-[52%]">
            <Greeting name={user.displayName} />
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Master Physiotherapy. <span className="text-accent-strong">One Topic at a Time.</span>
            </h1>
            <p className="mt-3 text-sm text-muted sm:text-base">
              Study concepts, explore clinical knowledge, test yourself, and identify exactly where
              you need to improve.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/topics" size="lg" className="shimmer relative overflow-hidden">
                Start Learning <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/progress" variant="outline" size="lg">
                View Progress
              </ButtonLink>
            </div>
          </div>
        </Card>
      </FadeIn>

      {/* Widgets */}
      <FadeIn delay={0.05}>
        <section aria-label="Widgets" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-12">
          <div className="xl:col-span-3">
            <ClockFocusWidget />
          </div>
          <div className="xl:col-span-5">
            <TodoWidget
              initial={todos.map((t) => ({
                id: t.id,
                title: t.title,
                dueAt: t.dueAt ? t.dueAt.toISOString() : null,
                completed: t.completed,
              }))}
            />
          </div>
          {qotd && (
            <div className="sm:col-span-2 xl:col-span-4">
              <QotdWidget question={qotd} />
            </div>
          )}
          <div className="sm:col-span-2 xl:col-span-12">
            <DailyTip />
          </div>
        </section>
      </FadeIn>

      {/* Stats */}
      <section aria-label="Learning statistics">
        <StaggerGrid className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {statCards.map((s) => (
            <StaggerItem key={s.label}>
              <Card className="p-4 transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">{s.label}</p>
                  <s.icon className="h-4 w-4 text-accent-strong" aria-hidden="true" />
                </div>
                <p className="mt-2 text-2xl font-extrabold">
                  <CountUp value={s.value} />
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <SectionGrid
        counts={{
          topics: gridCounts[0],
          flashcards: gridCounts[1],
          quizzes: stats.quizzesCompleted,
          bookmarks: gridCounts[2],
          notes: gridCounts[3],
          achievements: gridCounts[4],
        }}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Continue learning */}
        <section aria-label="Continue learning">
          <h2 className="mb-3 text-lg font-bold">Continue Learning</h2>
          {continueLearning ? (
            <Card className="p-5">
              <Badge variant="accent">{continueLearning.topic.category}</Badge>
              <h3 className="mt-2 text-xl font-bold">{continueLearning.topic.title}</h3>
              <div className="mt-4 flex items-center gap-3">
                <ProgressBar value={continueLearning.progress.percent} className="flex-1" />
                <span className="text-sm font-bold text-accent-strong">
                  {continueLearning.progress.percent}%
                </span>
              </div>
              <p className="mt-1 text-xs text-muted">
                {continueLearning.progress.done} of {continueLearning.progress.total} sections
                completed
              </p>
              <ButtonLink href={`/learn/${continueLearning.topic.slug}`} className="mt-4">
                Continue <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </Card>
          ) : (
            <EmptyState
              icon={<BookOpen aria-hidden="true" />}
              title="Nothing studied yet"
              text="Pick your first topic from the knowledge library to begin."
              action={<ButtonLink href="/topics">Browse Topics</ButtonLink>}
            />
          )}

          {/* Daily goal */}
          <Card className="mt-4 p-5">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-bold">
                <Target className="h-4 w-4 text-accent-strong" aria-hidden="true" />
                Today&apos;s Goal
              </h3>
              <span className="text-sm font-bold text-accent-strong">{goalPercent}%</span>
            </div>
            <p className="mt-1 text-sm text-muted">
              Answer {dailyGoal} questions — {todayQuestions} done so far.
            </p>
            <ProgressBar value={goalPercent} className="mt-3" tone={goalPercent >= 100 ? "success" : "accent"} />
            {goalPercent < 100 && (
              <ButtonLink href={continueLearning ? `/quiz/setup/${continueLearning.topic.slug}` : "/topics"} variant="outline" size="sm" className="mt-4">
                Continue
              </ButtonLink>
            )}
          </Card>
        </section>

        {/* Recent results */}
        <section aria-label="Recent results">
          <h2 className="mb-3 text-lg font-bold">Recent Results</h2>
          {recentAttempts.length === 0 ? (
            <EmptyState
              icon={<ClipboardList aria-hidden="true" />}
              title="No quizzes yet"
              text="Your first assessment is waiting."
              action={<ButtonLink href="/topics">Take Your First Quiz</ButtonLink>}
            />
          ) : (
            <div className="space-y-2.5">
              {recentAttempts.map((a) => (
                <Link key={a.id} href={`/results/${a.id}`} className="block">
                  <Card className="flex items-center gap-4 p-4 transition-colors hover:border-accent">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold ${
                        a.passed ? "bg-success-soft text-success" : "bg-danger-soft text-danger"
                      }`}
                    >
                      {Math.round(a.percentage ?? 0)}%
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold">{a.topic.title}</p>
                      <p className="text-xs text-muted">
                        {a.score}/{a.questionCount} correct · {formatDuration(a.totalTimeSec ?? 0)} ·{" "}
                        {a.completedAt ? formatDate(a.completedAt) : ""}
                      </p>
                    </div>
                    <Badge variant={a.passed ? "success" : "danger"}>
                      {a.passed ? "PASS" : "RETRY"}
                    </Badge>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {/* Weak areas / recommendations */}
          <h2 className="mb-3 mt-6 text-lg font-bold">Areas to Improve</h2>
          {weakAreas.length === 0 ? (
            <Card className="p-5 text-sm text-muted">
              No weak areas detected yet — complete a few quizzes and personalised recommendations
              will appear here.
            </Card>
          ) : (
            <div className="space-y-2.5">
              {weakAreas.map((w) => (
                <Card key={w.tag} className="flex items-center gap-4 p-4">
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">{w.label}</p>
                    <p className="text-xs text-muted">
                      {w.accuracy}% accuracy ({w.correct}/{w.total})
                      {w.topicTitle ? ` · mostly in ${w.topicTitle}` : ""}
                    </p>
                    <ProgressBar value={w.accuracy} tone={w.accuracy < 50 ? "danger" : "warning"} className="mt-2" />
                  </div>
                  {w.topicSlug && (
                    <ButtonLink href={`/learn/${w.topicSlug}`} variant="outline" size="sm">
                      Study this
                    </ButtonLink>
                  )}
                </Card>
              ))}
            </div>
          )}
        </section>
      </div>

      <p className="text-center text-[11px] text-muted">
        Educational content only. This platform is not a substitute for professional clinical
        assessment, diagnosis, or medical advice.
      </p>
    </div>
  );
}
