import type { Metadata } from "next";
import { BarChart3 } from "lucide-react";
import { getCurrentUser } from "@/lib/user";
import {
  getActivityCalendar,
  getDashboardStats,
  getScoreHistory,
  getTagAccuracy,
  getTopicAccuracy,
} from "@/lib/analytics";
import { ButtonLink, Card, EmptyState, PageHeader, ProgressBar } from "@/components/ui";
import { ProgressCharts } from "./progress-charts";

export const metadata: Metadata = { title: "Progress" };
export const dynamic = "force-dynamic";

export default async function ProgressPage() {
  const user = await getCurrentUser();
  const [stats, scoreHistory, topicAccuracy, tagAccuracy, calendar] = await Promise.all([
    getDashboardStats(user.id),
    getScoreHistory(user.id),
    getTopicAccuracy(user.id),
    getTagAccuracy(user.id),
    getActivityCalendar(user.id),
  ]);

  if (scoreHistory.length === 0) {
    return (
      <div>
        <PageHeader title="Progress Analytics" />
        <EmptyState
          icon={<BarChart3 aria-hidden="true" />}
          title="No data to chart yet"
          text="Complete your first quiz and your progress analytics will appear here."
          action={<ButtonLink href="/topics">Start Learning</ButtonLink>}
        />
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title="Progress Analytics"
        subtitle={`${stats.quizzesCompleted} quizzes · ${stats.questionsAnswered} questions answered · ${stats.totalStudyMinutes} minutes studied`}
      />

      <ProgressCharts scoreHistory={scoreHistory} topicAccuracy={topicAccuracy} calendar={calendar} />

      {/* Weak areas sorted by accuracy */}
      <Card className="mt-6 p-5">
        <h2 className="font-bold">Accuracy by Area</h2>
        <p className="text-sm text-muted">Across every completed assessment, weakest first.</p>
        <div className="mt-4 space-y-3">
          {tagAccuracy.map((t) => (
            <div key={t.tag}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="font-semibold">{t.label}</span>
                <span className="text-muted">
                  {t.correct}/{t.total} · {t.accuracy}%
                </span>
              </div>
              <ProgressBar
                value={t.accuracy}
                tone={t.accuracy >= 80 ? "success" : t.accuracy >= 60 ? "warning" : "danger"}
              />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
