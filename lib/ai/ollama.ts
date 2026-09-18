import type { AIProvider, ChatMessage } from "./types";
import { TUTOR_SYSTEM_PROMPT } from "./types";
import { localProvider } from "./local";

/**
 * Ollama provider — a completely free AI that runs locally on this machine.
 * No account, no API key, no usage costs; nothing leaves the computer.
 * Requires the Ollama app/service (https://ollama.com) with a pulled model.
 */

function baseUrl(): string {
  return process.env.OLLAMA_URL || "http://localhost:11434";
}

function model(): string {
  return process.env.OLLAMA_MODEL || "llama3.2";
}

interface OllamaMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

function toMessages(system: string, messages: ChatMessage[]): OllamaMessage[] {
  return [{ role: "system", content: system }, ...messages];
}

async function complete(system: string, messages: ChatMessage[]): Promise<string | null> {
  try {
    const res = await fetch(`${baseUrl()}/api/chat`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        model: model(),
        messages: toMessages(system, messages),
        stream: false,
        options: { temperature: 0.4, num_predict: 900 },
      }),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { message?: { content?: string } };
    return data.message?.content?.trim() || null;
  } catch {
    return null;
  }
}

/** Streams the reply as plain text; Ollama emits NDJSON lines when streaming. */
async function streamChat(
  system: string,
  messages: ChatMessage[]
): Promise<ReadableStream<Uint8Array> | null> {
  try {
    const res = await fetch(`${baseUrl()}/api/chat`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        model: model(),
        messages: toMessages(system, messages),
        stream: true,
        options: { temperature: 0.5, num_predict: 1200 },
      }),
    });
    if (!res.ok || !res.body) return null;

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();
    let buffer = "";

    return new ReadableStream<Uint8Array>({
      async pull(controller) {
        const { done, value } = await reader.read();
        if (done) {
          controller.close();
          return;
        }
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed) continue;
          try {
            const json = JSON.parse(trimmed) as { message?: { content?: string }; done?: boolean };
            const chunk = json.message?.content;
            if (chunk) controller.enqueue(encoder.encode(chunk));
          } catch {
            // ignore malformed line
          }
        }
      },
      cancel() {
        void reader.cancel();
      },
    });
  } catch {
    return null;
  }
}

const SYSTEM_PROMPT =
  "You are an educational assistant for physiotherapy students on a learning platform. " +
  "Write medically structured, factually careful, beginner-friendly content. " +
  "Never fabricate references. Express uncertainty when appropriate. " +
  "This is educational material, not clinical advice — do not give patient-specific treatment instructions.";

export const ollamaProvider: AIProvider = {
  name: "ollama",

  async simplifyExplanation(topicTitle, sectionTitle, text) {
    const out = await complete(SYSTEM_PROMPT, [
      {
        role: "user",
        content: `Rewrite the following physiotherapy study content ("${sectionTitle}" from the topic "${topicTitle}") in much simpler language for a beginner student. Keep it accurate, keep the same facts, use short sentences and a warm teaching tone. Reply with only the rewritten explanation.\n\n${text}`,
      },
    ]);
    return out ?? localProvider.simplifyExplanation(topicTitle, sectionTitle, text);
  },

  async narrateAnalysis(topicTitle, analysis, percentage) {
    const out = await complete(SYSTEM_PROMPT, [
      {
        role: "user",
        content: `A student scored ${percentage}% on a "${topicTitle}" quiz. Tag-level accuracy: ${JSON.stringify(
          analysis.tagStats
        )}. Write 3-5 short, encouraging, specific study-advice sentences (plain text, one per line, no bullets or numbering).`,
      },
    ]);
    if (out) return out.split("\n").map((l) => l.trim()).filter(Boolean).slice(0, 5);
    return localProvider.narrateAnalysis(topicTitle, analysis, percentage);
  },

  async chat(context, messages) {
    const system = `${TUTOR_SYSTEM_PROMPT}\n\n${context}`;
    const stream = await streamChat(system, messages);
    if (stream) return stream;
    const text = await complete(system, messages);
    if (text) return text;
    return localProvider.chat(context, messages);
  },
};
