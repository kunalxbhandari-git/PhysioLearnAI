export const QUESTION_SECONDS = 120; // 2 minutes per question
export const GRACE_SECONDS = 3; // network grace before a late answer counts as timeout
export const QUIZ_LENGTHS = [10, 20, 30] as const;

export const TAG_LABELS: Record<string, string> = {
  anatomy: "Anatomy",
  pathology: "Pathology",
  assessment: "Clinical Assessment",
  "special-tests": "Special Tests",
  "exercise-therapy": "Exercise Therapy",
  management: "Physiotherapy Management",
  precautions: "Precautions & Red Flags",
  "clinical-reasoning": "Clinical Reasoning",
};

export function tagLabel(tag: string): string {
  return TAG_LABELS[tag] ?? tag.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
