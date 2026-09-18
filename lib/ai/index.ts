import type { AIProvider } from "./types";
import { localProvider } from "./local";
import { anthropicProvider } from "./anthropic";
import { ollamaProvider } from "./ollama";

export function getAIProvider(): AIProvider {
  const name = process.env.AI_PROVIDER ?? "local";
  // Ollama runs locally and needs no key; it falls back gracefully per call
  // if the Ollama service isn't running.
  if (name === "ollama") return ollamaProvider;
  if (name === "anthropic" && process.env.ANTHROPIC_API_KEY) return anthropicProvider;
  return localProvider;
}

export type { AIProvider };
