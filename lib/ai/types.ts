import type { AttemptAnalysis } from "@/lib/quiz/analysis";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

/**
 * Provider abstraction for AI features. The UI never talks to a vendor SDK
 * directly — it calls these functions, so providers can be swapped via the
 * AI_PROVIDER env var without touching application code.
 */
export interface AIProvider {
  readonly name: string;

  /** Rewrite a study section in simpler, beginner-friendly language. */
  simplifyExplanation(topicTitle: string, sectionTitle: string, text: string): Promise<string>;

  /** Turn a deterministic analysis into narrative study advice. */
  narrateAnalysis(topicTitle: string, analysis: AttemptAnalysis, percentage: number): Promise<string[]>;

  /**
   * Tutor chat. Returns a byte stream of the reply (for real-time streaming
   * providers) or a plain string (for the offline fallback).
   * `context` is trusted app-generated topic context for the system prompt.
   */
  chat(context: string, messages: ChatMessage[]): Promise<ReadableStream<Uint8Array> | string>;
}

export const TUTOR_SYSTEM_PROMPT =
  "You are the friendly AI tutor inside PhysioLearn, an educational platform for physiotherapy students. " +
  "Answer questions clearly and accurately at a student level, using short paragraphs and plain language. " +
  "Ground answers in mainstream, guideline-consistent physiotherapy teaching. Never fabricate references or statistics; " +
  "say when something is uncertain or debated. This is educational content, not clinical advice — do not give " +
  "patient-specific treatment instructions, and remind the student to apply professional judgement where relevant. " +
  "If asked about something unrelated to physiotherapy or study skills, politely steer back to the topic.";
