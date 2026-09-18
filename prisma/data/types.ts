// Shared shapes for seed content. Every topic data file exports a `TopicSeed`.

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";
export type QuestionDifficulty = "Easy" | "Medium" | "Hard";

export type ContentBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "heading"; text: string }
  | { kind: "list"; items: string[]; ordered?: boolean }
  // Small info cards in a responsive grid (causes, symptoms, risk factors...)
  | { kind: "cards"; items: { title: string; text: string; icon?: string }[] }
  // Amber warning card — common mistakes, precautions
  | { kind: "warning"; title: string; items: string[] }
  // Red flags card — referral considerations
  | { kind: "redflags"; items: string[] }
  // Teal "clinical pearls" card
  | { kind: "pearls"; items: string[] }
  // Numbered phases/steps (e.g. management phases)
  | { kind: "steps"; items: { title: string; text: string }[] }
  // Structured exercise card
  | {
      kind: "exercise";
      name: string;
      purpose: string;
      position: string;
      execution: string;
      dosage?: string;
      progression?: string;
      precautions?: string;
    }
  | { kind: "table"; headers: string[]; rows: string[][] }
  // Highlighted key points box
  | { kind: "keypoints"; title?: string; items: string[] }
  // Educational illustration rendered by the local image provider
  | { kind: "image"; illustration: string; caption: string };

export interface SectionSeed {
  slug: string;
  title: string;
  estMinutes: number;
  difficulty?: Difficulty;
  content: ContentBlock[];
}

export interface QuestionSeed {
  text: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
  difficulty: QuestionDifficulty;
  /** tags drive the weak-area engine, e.g. "anatomy", "special-tests",
   *  "assessment", "exercise-therapy", "pathology", "management",
   *  "precautions", "clinical-reasoning" */
  tags: string[];
  sectionSlug?: string;
  learningGoal?: string;
}

export interface FlashcardSeed {
  front: string;
  back: string;
}

export interface TopicSeed {
  slug: string;
  title: string;
  category:
    | "Anatomy"
    | "Musculoskeletal"
    | "Neurological"
    | "Cardiopulmonary"
    | "Pediatric"
    | "Geriatric"
    | "Exercise Therapy"
    | "Electrotherapy"
    | "Clinical Assessment";
  description: string;
  difficulty: Difficulty;
  estMinutes: number;
  /** lucide-react icon name in kebab-case, e.g. "bone", "activity", "brain" */
  icon: string;
  keyTakeaways: string[];
  sections: SectionSeed[];
  questions: QuestionSeed[];
  flashcards: FlashcardSeed[];
}
