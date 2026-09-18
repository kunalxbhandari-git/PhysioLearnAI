import type { AIProvider } from "./types";
import { localProvider } from "./local";

const API_URL = "https://api.anthropic.com/v1/messages";
const MODEL = "claude-sonnet-5";

async function complete(system: string, user: string): Promise<string | null> {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return null;
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1024,
        system,
        messages: [{ role: "user", content: user }],
      }),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { content?: { type: string; text?: string }[] };
    const text = data.content?.find((c) => c.type === "text")?.text;
    return text ?? null;
  } catch {
    return null;
  }
}

const SYSTEM_PROMPT =
  "You are an educational assistant for physiotherapy students on a learning platform. " +
  "Write medically structured, factually careful, beginner-friendly content. " +
  "Never fabricate references. Express uncertainty when appropriate. " +
  "This is educational material, not clinical advice — do not give patient-specific treatment instructions.";

/** Anthropic-backed provider; every call gracefully falls back to the local provider. */
export const anthropicProvider: AIProvider = {
  name: "anthropic",

  async chat(context, messages) {
    const key = process.env.ANTHROPIC_API_KEY;
    if (!key) return localProvider.chat(context, messages);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": key,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: 1500,
          system: `${SYSTEM_PROMPT}\n\n${context}`,
          messages: messages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      if (!res.ok) return localProvider.chat(context, messages);
      const data = (await res.json()) as { content?: { type: string; text?: string }[] };
      const text = data.content?.find((c) => c.type === "text")?.text;
      return text ?? localProvider.chat(context, messages);
    } catch {
      return localProvider.chat(context, messages);
    }
  },

  async simplifyExplanation(topicTitle, sectionTitle, text) {
    const out = await complete(
      SYSTEM_PROMPT,
      `Rewrite the following physiotherapy study content ("${sectionTitle}" from the topic "${topicTitle}") in much simpler language for a beginner student. Keep it accurate, keep the same facts, use short sentences.\n\n${text}`
    );
    return out ?? localProvider.simplifyExplanation(topicTitle, sectionTitle, text);
  },

  async narrateAnalysis(topicTitle, analysis, percentage) {
    const out = await complete(
      SYSTEM_PROMPT,
      `A student scored ${percentage}% on a "${topicTitle}" quiz. Tag-level accuracy: ${JSON.stringify(
        analysis.tagStats
      )}. Write 3-5 short, encouraging, specific study-advice sentences (plain text, one per line).`
    );
    if (out) return out.split("\n").map((l) => l.trim()).filter(Boolean).slice(0, 5);
    return localProvider.narrateAnalysis(topicTitle, analysis, percentage);
  },
};
