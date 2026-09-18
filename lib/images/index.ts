/**
 * Image provider abstraction. The local provider serves curated educational
 * SVG illustrations (components/illustrations.tsx). A generative provider can
 * be added later by implementing this interface and switching IMAGE_PROVIDER.
 */

export interface ImageRef {
  kind: "local-illustration";
  name: string;
}

export interface ImageProvider {
  readonly name: string;
  generateAnatomyImage(subject: string): Promise<ImageRef>;
  generateExerciseIllustration(subject: string): Promise<ImageRef>;
  generateConditionIllustration(subject: string): Promise<ImageRef>;
}

const SUBJECT_MAP: [RegExp, string][] = [
  [/knee/i, "knee-joint"],
  [/shoulder|rotator|cuff/i, "shoulder-joint"],
  [/spine|back|lumbar|vertebra/i, "spine"],
  [/ankle|foot/i, "ankle-joint"],
  [/gait|walk/i, "gait-cycle"],
  [/nerve|neuro|stroke|brain|parkinson/i, "nervous-system"],
  [/lung|copd|breath|pulmon/i, "lungs"],
  [/muscle|strength|exercise/i, "muscle-fiber"],
];

function match(subject: string): ImageRef {
  for (const [re, name] of SUBJECT_MAP) {
    if (re.test(subject)) return { kind: "local-illustration", name };
  }
  return { kind: "local-illustration", name: "muscle-fiber" };
}

export const localImageProvider: ImageProvider = {
  name: "local",
  async generateAnatomyImage(subject) {
    return match(subject);
  },
  async generateExerciseIllustration(subject) {
    return match(subject);
  },
  async generateConditionIllustration(subject) {
    return match(subject);
  },
};

export function getImageProvider(): ImageProvider {
  // Only the local provider ships today; env-based switch reserved for later.
  return localImageProvider;
}
