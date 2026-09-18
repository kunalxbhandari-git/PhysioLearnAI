import type { AIProvider } from "./types";
import type { AttemptAnalysis } from "@/lib/quiz/analysis";

/**
 * Deterministic local provider — keeps every AI-labelled feature fully
 * functional offline, working only from real data (never fabricating facts).
 */
export const localProvider: AIProvider = {
  name: "local",

  async simplifyExplanation(_topicTitle, _sectionTitle, text) {
    // Sentence-level simplification: shorter sentences, plain connectors.
    const sentences = text
      .replace(/;\s+/g, ". ")
      .replace(/\s+—\s+/g, ". ")
      .split(/(?<=\.)\s+/)
      .filter(Boolean);
    const simplified = sentences.map((s) =>
      s
        .replace(/\bcharacterised by\b/gi, "known for")
        .replace(/\bpathology\b/gi, "disease process")
        .replace(/\baetiology\b/gi, "cause")
        .replace(/\bprevalence\b/gi, "how common it is")
        .replace(/\bbilateral\b/gi, "both sides")
        .replace(/\bunilateral\b/gi, "one side")
        .replace(/\bproximal\b/gi, "closer to the body")
        .replace(/\bdistal\b/gi, "further from the body")
        .replace(/\banterior\b/gi, "front")
        .replace(/\bposterior\b/gi, "back")
    );
    return (
      "In simple terms: " +
      simplified.join(" ") +
      "\n\nKey idea — read each sentence slowly, and connect it to a patient you can imagine in front of you."
    );
  },

  async chat(context, messages) {
    const lastQuestion = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";
    // Pull the key-takeaway lines out of the app-generated context so the
    // offline reply is still grounded in the topic being studied.
    const takeaways = context
      .split("\n")
      .filter((l) => l.startsWith("- "))
      .slice(0, 6)
      .join("\n");
    return (
      `The live AI tutor isn't connected yet, so here's what I can offer offline.\n\n` +
      (takeaways
        ? `Key points from this topic that may help with "${lastQuestion.slice(0, 120)}":\n${takeaways}\n\n`
        : "") +
      `For full real-time AI answers, make sure the Ollama app is running on this computer ` +
      `(it starts automatically after setup) — see the README's AI section.`
    );
  },

  async narrateAnalysis(_topicTitle, analysis: AttemptAnalysis, percentage) {
    const lines: string[] = [];
    if (percentage >= 90) lines.push("Excellent result — your understanding of this topic is strong.");
    else if (percentage >= 70) lines.push("Solid pass — a focused review of the areas below will push you towards mastery.");
    else lines.push("This attempt highlighted clear gaps — that is exactly what practice testing is for.");
    lines.push(...analysis.patterns);
    if (analysis.weaknesses.length > 0) {
      lines.push(
        `Prioritise ${analysis.weaknesses
          .slice(0, 2)
          .map((w) => w.label.toLowerCase())
          .join(" and ")} before your next attempt.`
      );
    }
    return lines;
  },
};
