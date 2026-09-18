"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "@/components/ui";
import { cn } from "@/lib/utils";

interface ScorePoint {
  n: number;
  label: string;
  percentage: number;
  topic: string;
  passed: boolean;
}

interface TopicAccuracy {
  slug: string;
  topic: string;
  accuracy: number;
  attempts: number;
}

interface CalendarDay {
  date: string;
  active: boolean;
}

export function ProgressCharts({
  scoreHistory,
  topicAccuracy,
  calendar,
}: {
  scoreHistory: ScorePoint[];
  topicAccuracy: TopicAccuracy[];
  calendar: CalendarDay[];
}) {
  // Group calendar days into weeks (columns)
  const weeks: CalendarDay[][] = [];
  for (let i = 0; i < calendar.length; i += 7) weeks.push(calendar.slice(i, i + 7));

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="p-5">
        <h2 className="font-bold">Score Over Time</h2>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={scoreHistory} margin={{ top: 8, right: 8, bottom: 0, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="label" tick={{ fontSize: 11, fill: "var(--text-muted)" }} stroke="var(--border)" />
              <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: "var(--text-muted)" }} stroke="var(--border)" />
              <Tooltip
                contentStyle={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  fontSize: 12,
                  color: "var(--text)",
                }}
                formatter={(value) => [`${value}%`, "Score"]}
                labelFormatter={(_, payload) =>
                  payload?.[0] ? (payload[0].payload as ScorePoint).topic : ""
                }
              />
              <Line
                type="monotone"
                dataKey="percentage"
                stroke="var(--accent)"
                strokeWidth={2.5}
                dot={{ r: 4, fill: "var(--accent)" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-5">
        <h2 className="font-bold">Topic Accuracy</h2>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topicAccuracy} layout="vertical" margin={{ top: 8, right: 16, bottom: 0, left: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11, fill: "var(--text-muted)" }} stroke="var(--border)" />
              <YAxis
                type="category"
                dataKey="topic"
                width={130}
                tick={{ fontSize: 11, fill: "var(--text-muted)" }}
                stroke="var(--border)"
              />
              <Tooltip
                contentStyle={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  fontSize: 12,
                  color: "var(--text)",
                }}
                formatter={(value) => [`${value}%`, "Average"]}
              />
              <Bar dataKey="accuracy" fill="var(--accent)" radius={[0, 8, 8, 0]} barSize={16} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-5 lg:col-span-2">
        <h2 className="font-bold">Learning Activity</h2>
        <p className="text-sm text-muted">Days with study or quiz activity over the last 16 weeks.</p>
        <div className="mt-4 flex gap-1 overflow-x-auto pb-2" aria-label="Activity calendar">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1">
              {week.map((day) => (
                <div
                  key={day.date}
                  title={`${day.date}${day.active ? " — active" : ""}`}
                  className={cn(
                    "h-3.5 w-3.5 rounded-[4px]",
                    day.active ? "bg-accent" : "bg-surface-2"
                  )}
                />
              ))}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
