# PhysioLearn AI

**Learn. Practice. Assess. Improve.**

An interactive physiotherapy education and assessment platform: a password-protected learning
center with structured study modules, timed quizzes (2 minutes per question, enforced
server-side), performance analysis, weak-area detection, flashcards, progress analytics and
gamification.

> Educational content only. This platform is not a substitute for professional clinical
> assessment, diagnosis, or medical advice.

## Tech stack

- **Next.js 15** (App Router) + **TypeScript** + **React 19**
- **Tailwind CSS v4** — custom medical design system (light + dark)
- **Prisma ORM** with **SQLite** (zero-setup local database; switch the datasource provider to
  PostgreSQL for hosted deployments)
- **Framer-motion-free micro-animations** via CSS, **Recharts** for analytics, **Lucide** icons
- **Zod** for API validation
- Dependency-free session auth (HMAC-signed cookie, Web-Crypto so it runs in Edge middleware)
- AI provider abstraction (`lib/ai`) with a deterministic local fallback — every feature works
  fully offline; add an Anthropic API key to upgrade the narrative features
- Image provider abstraction (`lib/images`) backed by curated educational SVG illustrations

## What's included

- **13 seeded topics** across Anatomy, Musculoskeletal, Neurological, Cardiopulmonary,
  Clinical Assessment and Exercise Therapy — **133 study sections, 258 exam-quality MCQs,
  156 flashcards**, all written as structured content in `prisma/data/`
- Password gate → dashboard → topic library → study module → quiz → results → analysis →
  improvement plan → retake: the whole loop works end to end
- Exam mode (strict, no feedback until the end) and Practice mode (instant explanations)
- Per-question 2-minute timer **validated on the server** — refreshing never grants extra time;
  expired questions are auto-marked as timed out
- Server-side scoring, configurable pass mark (default 70%), full answer review
- Weak-area engine (accuracy per clinical tag), personalised revision plan, retake comparison
- Streaks, XP, achievements, personal scoreboard (schema ready for multi-user leaderboards)
- Bookmarks, per-topic notes, flashcard player, global ⌘K search, print/export of results
- Admin area: pass-mark configuration, topic enable/disable, content statistics
- Fully responsive (bottom nav + thumb-friendly quiz on mobile), light/dark/system theme,
  reduced-motion and larger-text accessibility options, PWA manifest

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env
#    → set APP_PASSWORD (the site password) and SESSION_SECRET (any long random string:
#      openssl rand -hex 32)

# 3. Create the database and load all content
npx prisma db push
npm run db:seed

# 4. Run
npm run dev          # development, http://localhost:3000
npm run build && npm start   # production
```

## Environment variables

| Variable            | Required | Purpose                                                        |
| ------------------- | -------- | -------------------------------------------------------------- |
| `DATABASE_URL`      | yes      | SQLite file path (default `file:./dev.db`)                     |
| `APP_PASSWORD`      | yes      | Password for the site gate (validated server-side only)        |
| `SESSION_SECRET`    | yes      | Signs the session cookie                                       |
| `AI_PROVIDER`       | no       | `local` (default), `ollama` (free local AI), or `anthropic`    |
| `OLLAMA_MODEL`      | no       | Local model name (default `llama3.2`)                          |
| `OLLAMA_URL`        | no       | Ollama endpoint (default `http://localhost:11434`)             |
| `ANTHROPIC_API_KEY` | no       | Alternative AI provider (paid)                                 |
| `IMAGE_PROVIDER`    | no       | `local` (default) — curated SVG illustrations                  |

### The free AI (Ollama — runs on your own computer)

The AI tutor chat, "Explain Simply" and AI quiz feedback run on **Ollama**: a completely free
AI that runs locally. No account, no API key, no usage costs, and nothing you type ever leaves
your machine.

Setup (once):

```bash
brew install ollama          # or download the app from https://ollama.com
ollama pull llama3.2         # downloads the free model (~2 GB)
```

Keep the Ollama service running (`ollama serve`, or just open the Ollama app). With
`AI_PROVIDER="ollama"` in `.env`, the site streams real-time AI answers; if Ollama isn't
running, every AI feature falls back to the built-in offline mode instead of erroring.

Never commit `.env`.

## Content authoring

All educational content lives in typed TypeScript files under `prisma/data/` (one per topic,
schema in `types.ts`). Edit or add a topic file, register it in `prisma/seed.ts`, then:

```bash
npm run db:seed
```

Reseeding is idempotent: content is updated in place and user progress/quiz history is preserved.

## Deployment (Vercel)

1. Switch `prisma/schema.prisma` datasource to `postgresql` and point `DATABASE_URL` at a hosted
   Postgres (e.g. Neon/Supabase); run `npx prisma db push && npm run db:seed` once.
2. Set `APP_PASSWORD` and `SESSION_SECRET` in Vercel project settings.
3. `npm run build` already runs `prisma generate` — deploy as a standard Next.js app.

(SQLite works great locally but is not persistent on serverless platforms.)

## Project structure

```
app/            routes (gate, dashboard, topics, learn, quiz, results, progress, …)
app/api/        auth, quiz engine, study progress, notes, bookmarks, search, admin, AI
components/     UI kit, app shell, study content renderer, illustrations
lib/            auth/session, quiz engine + scoring + analysis, analytics, achievements,
                AI + image provider abstractions, settings
prisma/         schema, seed script, and all topic content (prisma/data/*.ts)
```
