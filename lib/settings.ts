import { prisma } from "@/lib/db";

const DEFAULTS: Record<string, string> = {
  passingPercent: "70",
  dailyGoalQuestions: "20",
  defaultQuizLength: "10",
  defaultQuizMode: "exam",
  preferredDifficulty: "Mixed",
  fontScale: "normal",
  reduceMotion: "false",
};

export async function getSetting(key: string): Promise<string> {
  const row = await prisma.setting.findUnique({ where: { key } });
  return row?.value ?? DEFAULTS[key] ?? "";
}

export async function getSettings(): Promise<Record<string, string>> {
  const rows = await prisma.setting.findMany();
  const out = { ...DEFAULTS };
  for (const r of rows) out[r.key] = r.value;
  return out;
}

export async function setSetting(key: string, value: string) {
  await prisma.setting.upsert({
    where: { key },
    create: { key, value },
    update: { value },
  });
}

export async function getPassingPercent(): Promise<number> {
  const v = Number(await getSetting("passingPercent"));
  return Number.isFinite(v) && v >= 1 && v <= 100 ? v : 70;
}
