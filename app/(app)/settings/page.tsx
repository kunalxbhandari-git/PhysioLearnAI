import type { Metadata } from "next";
import { getCurrentUser } from "@/lib/user";
import { getSettings } from "@/lib/settings";
import { PageHeader } from "@/components/ui";
import { SettingsForm } from "./settings-form";

export const metadata: Metadata = { title: "Settings" };
export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const user = await getCurrentUser();
  const settings = await getSettings();

  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader title="Settings" subtitle="Profile, learning preferences, accessibility and appearance." />
      <SettingsForm
        initial={{
          displayName: user.displayName,
          dailyGoalQuestions: settings.dailyGoalQuestions,
          defaultQuizLength: settings.defaultQuizLength,
          defaultQuizMode: settings.defaultQuizMode,
          preferredDifficulty: settings.preferredDifficulty,
        }}
      />
    </div>
  );
}
