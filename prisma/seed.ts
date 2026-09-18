/**
 * Seed script — loads all topic content from prisma/data into the database.
 * Idempotent: re-running upserts topics by slug and replaces their content,
 * while user progress and quiz history are preserved.
 */
import { PrismaClient } from "@prisma/client";
import type { TopicSeed } from "./data/types";

import kneeOsteoarthritis from "./data/knee-osteoarthritis";
import rotatorCuffInjury from "./data/rotator-cuff-injury";
import lowBackPain from "./data/low-back-pain";
import aclInjury from "./data/acl-injury";
import ankleSprain from "./data/ankle-sprain";
import tennisElbow from "./data/tennis-elbow";
import strokeRehabilitation from "./data/stroke-rehabilitation";
import traumaticBrainInjury from "./data/traumatic-brain-injury";
import spinalCordInjury from "./data/spinal-cord-injury";
import multipleSclerosis from "./data/multiple-sclerosis";
import vestibularRehabilitation from "./data/vestibular-rehabilitation";
import parkinsonsDisease from "./data/parkinsons-disease";
import copdRehabilitation from "./data/copd-rehabilitation";
import shoulderAnatomy from "./data/shoulder-anatomy";
import kneeSpecialTests from "./data/knee-special-tests";
import gaitAssessment from "./data/gait-assessment";
import exercisePrescription from "./data/exercise-prescription";
import chronicPain from "./data/chronic-pain";
import amputationRehabilitation from "./data/amputation-rehabilitation";
import pelvicFloor from "./data/pelvic-floor";
import cervicalSpine from "./data/cervical-spine";
import muscleStrainInjuries from "./data/muscle-strain-injuries";
import tendinopathy from "./data/tendinopathy";
import fractureManagement from "./data/fracture-management";
import rheumatoidArthritis from "./data/rheumatoid-arthritis";
import peripheralNerveInjuries from "./data/peripheral-nerve-injuries";
import cerebralPalsy from "./data/cerebral-palsy";
import cardiacRehabilitation from "./data/cardiac-rehabilitation";
import neuromuscularConditions from "./data/neuromuscular-conditions";
import pediatricDevelopment from "./data/pediatric-development";
import pregnancyPostnatal from "./data/pregnancy-postnatal";
import returnToSport from "./data/return-to-sport";
import electrotherapyModalities from "./data/electrotherapy-modalities";
import fallsPrevention from "./data/falls-prevention";
import acuteCarePhysiotherapy from "./data/acute-care-physiotherapy";
import asthmaAirwayDisease from "./data/asthma-airway-disease";
import hipConditions from "./data/hip-conditions";
import patellofemoralPain from "./data/patellofemoral-pain";
import frozenShoulder from "./data/frozen-shoulder";
import footHeelPain from "./data/foot-heel-pain";

const prisma = new PrismaClient();

const TOPICS: TopicSeed[] = [
  shoulderAnatomy,
  kneeOsteoarthritis,
  rotatorCuffInjury,
  lowBackPain,
  aclInjury,
  ankleSprain,
  tennisElbow,
  strokeRehabilitation,
  traumaticBrainInjury,
  spinalCordInjury,
  multipleSclerosis,
  vestibularRehabilitation,
  parkinsonsDisease,
  copdRehabilitation,
  kneeSpecialTests,
  gaitAssessment,
  exercisePrescription,
  peripheralNerveInjuries,
  cerebralPalsy,
  cardiacRehabilitation,
  muscleStrainInjuries,
  tendinopathy,
  fractureManagement,
  rheumatoidArthritis,
  chronicPain,
  amputationRehabilitation,
  pelvicFloor,
  cervicalSpine,
  hipConditions,
  patellofemoralPain,
  frozenShoulder,
  footHeelPain,
  electrotherapyModalities,
  fallsPrevention,
  acuteCarePhysiotherapy,
  asthmaAirwayDisease,
  neuromuscularConditions,
  pediatricDevelopment,
  pregnancyPostnatal,
  returnToSport,
];

const ACHIEVEMENTS = [
  { code: "first-quiz", title: "First Assessment", description: "Complete your first quiz.", icon: "flag", xp: 25 },
  { code: "quizzes-10", title: "Ten Down", description: "Complete 10 quizzes.", icon: "layers", xp: 75 },
  { code: "score-90", title: "High Achiever", description: "Score 90% or higher on a quiz.", icon: "trending-up", xp: 50 },
  { code: "perfect-score", title: "Perfect Score", description: "Answer every question correctly in a quiz.", icon: "star", xp: 100 },
  { code: "streak-7", title: "Consistency", description: "Maintain a 7-day learning streak.", icon: "flame", xp: 100 },
  { code: "questions-100", title: "Century", description: "Answer 100 questions.", icon: "hash", xp: 75 },
  { code: "topic-explorer", title: "Topic Explorer", description: "Study sections in 5 different topics.", icon: "compass", xp: 50 },
  { code: "first-topic", title: "First Steps", description: "Complete every section of a topic.", icon: "book-open", xp: 50 },
];

async function seedTopic(seed: TopicSeed, order: number) {
  const topic = await prisma.topic.upsert({
    where: { slug: seed.slug },
    create: {
      slug: seed.slug,
      title: seed.title,
      category: seed.category,
      description: seed.description,
      difficulty: seed.difficulty,
      estMinutes: seed.estMinutes,
      icon: seed.icon,
      order,
      keyTakeaways: JSON.stringify(seed.keyTakeaways),
    },
    update: {
      title: seed.title,
      category: seed.category,
      description: seed.description,
      difficulty: seed.difficulty,
      estMinutes: seed.estMinutes,
      icon: seed.icon,
      order,
      keyTakeaways: JSON.stringify(seed.keyTakeaways),
    },
  });

  // Sections: upsert by (topicId, slug) so SectionProgress/Bookmarks survive reseeds.
  const keptSectionIds: string[] = [];
  for (const [i, s] of seed.sections.entries()) {
    const section = await prisma.section.upsert({
      where: { topicId_slug: { topicId: topic.id, slug: s.slug } },
      create: {
        topicId: topic.id,
        slug: s.slug,
        title: s.title,
        order: i,
        estMinutes: s.estMinutes,
        difficulty: s.difficulty ?? "Intermediate",
        content: JSON.stringify(s.content),
      },
      update: {
        title: s.title,
        order: i,
        estMinutes: s.estMinutes,
        difficulty: s.difficulty ?? "Intermediate",
        content: JSON.stringify(s.content),
      },
    });
    keptSectionIds.push(section.id);
  }
  await prisma.section.deleteMany({
    where: { topicId: topic.id, id: { notIn: keptSectionIds } },
  });

  // Questions: only insert missing ones (matched by text) so past attempts keep
  // their question references intact.
  const existingQuestions = await prisma.question.findMany({
    where: { topicId: topic.id },
    select: { id: true, text: true },
  });
  const existingByText = new Map(existingQuestions.map((q) => [q.text, q.id]));
  for (const q of seed.questions) {
    const data = {
      sectionSlug: q.sectionSlug ?? null,
      difficulty: q.difficulty,
      text: q.text,
      options: JSON.stringify(q.options),
      correctIndex: q.correctIndex,
      explanation: q.explanation,
      tags: JSON.stringify(q.tags),
      learningGoal: q.learningGoal ?? "",
    };
    const existingId = existingByText.get(q.text);
    if (existingId) {
      await prisma.question.update({ where: { id: existingId }, data });
    } else {
      await prisma.question.create({ data: { ...data, topicId: topic.id } });
    }
  }

  // Flashcards: full replace (no user data references them).
  await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  await prisma.flashcard.createMany({
    data: seed.flashcards.map((f, i) => ({
      topicId: topic.id,
      front: f.front,
      back: f.back,
      order: i,
    })),
  });
}

async function main() {
  console.log("Seeding PhysioLearn AI…");

  for (const [i, topic] of TOPICS.entries()) {
    await seedTopic(topic, i);
    console.log(
      `  ✓ ${topic.title} (${topic.sections.length} sections, ${topic.questions.length} questions, ${topic.flashcards.length} flashcards)`
    );
  }

  for (const a of ACHIEVEMENTS) {
    await prisma.achievement.upsert({ where: { code: a.code }, create: a, update: a });
  }
  console.log(`  ✓ ${ACHIEVEMENTS.length} achievements`);

  // Default settings
  const defaults: Record<string, string> = { passingPercent: "70", dailyGoalQuestions: "20" };
  for (const [key, value] of Object.entries(defaults)) {
    await prisma.setting.upsert({ where: { key }, create: { key, value }, update: {} });
  }

  // Ensure the single learner exists (role ADMIN so the admin area is reachable).
  const user = await prisma.user.findFirst();
  if (!user) {
    await prisma.user.create({ data: { displayName: "Student", role: "ADMIN" } });
    console.log("  ✓ default user created");
  }

  const totals = await Promise.all([
    prisma.topic.count(),
    prisma.section.count(),
    prisma.question.count(),
    prisma.flashcard.count(),
  ]);
  console.log(
    `Done: ${totals[0]} topics, ${totals[1]} sections, ${totals[2]} questions, ${totals[3]} flashcards.`
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
