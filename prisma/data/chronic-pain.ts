import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "chronic-pain",
  title: "Chronic Pain Science",
  category: "Musculoskeletal",
  description:
    "Understand modern pain neuroscience — why pain persists beyond tissue healing, how central sensitisation works, and how education, graded activity and exercise retrain a sensitised system.",
  difficulty: "Intermediate",
  estMinutes: 28,
  icon: "brain-circuit",
  keyTakeaways: [
    "Pain is an output of the brain produced to protect, not a direct read-out of tissue damage — nociception is neither sufficient nor necessary for pain.",
    "Chronic pain is usually defined as pain persisting or recurring beyond 3 months, often outlasting normal tissue healing time.",
    "Central sensitisation amplifies the pain system: allodynia (pain from normally non-painful input) and hyperalgesia (exaggerated pain from painful input) are its hallmarks.",
    "Sleep, stress, beliefs, mood and fear-avoidance genuinely change pain — the biopsychosocial model is the framework, not an add-on.",
    "Pain neuroscience education reduces fear and improves outcomes, especially when combined with movement.",
    "Graded exposure and pacing break the boom-bust cycle by building tolerance from a reliable baseline.",
    "Exercise is a first-line treatment for chronic pain — dose to irritability, progress on time or load, not on symptoms alone.",
    "Language matters: nocebic phrases (\"crumbling spine\", \"wear and tear\") worsen outcomes; every patient needs a written flare plan.",
  ],
  sections: [
    {
      slug: "acute-vs-chronic",
      title: "Acute vs Chronic Pain",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Acute pain is a useful alarm: it is closely tied to tissue threat, promotes protection, and settles as tissues heal. Chronic (persistent) pain is conventionally defined as pain that persists or recurs for more than 3 months — beyond expected tissue healing time — and it behaves differently: it correlates poorly with tissue state and is driven increasingly by changes within the nervous system itself.",
        },
        {
          kind: "table",
          headers: ["Feature", "Acute pain", "Chronic pain"],
          rows: [
            ["Duration", "Hours to weeks; settles with healing", "Persists or recurs > 3 months"],
            ["Relationship to tissue", "Fairly proportional to injury/threat", "Often disproportionate; tissues typically healed"],
            ["Primary driver", "Peripheral nociception", "Nervous system sensitivity + biopsychosocial factors"],
            ["Biological purpose", "Protective — promotes healing behaviour", "Protection has become overprotective and unhelpful"],
            ["Best management focus", "Protect, then progressively load", "Retrain the system: education, graded activity, exercise"],
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Chronic pain is a problem of an overprotective pain system, not ongoing damage in most cases",
            "IASP (2020) definition of pain: \"an unpleasant sensory and emotional experience associated with, or resembling that associated with, actual or potential tissue damage\"",
            "Chronic primary pain (e.g. fibromyalgia, chronic non-specific low back pain) is now classified as a condition in its own right in ICD-11",
          ],
        },
        {
          kind: "pearls",
          items: [
            "\"Hurt does not equal harm\" is the single most useful reframe in persistent pain — but it must be explained, not just stated.",
          ],
        },
      ],
    },
    {
      slug: "pain-neuroscience",
      title: "Pain Neuroscience Basics",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Nociception is the detection and transmission of potentially threatening stimuli by high-threshold sensory neurons (nociceptors). Pain is something else entirely: a conscious experience produced by the brain when, weighing all available information, it concludes the body needs protecting. Nociception is neither sufficient nor necessary for pain — soldiers with major wounds may feel nothing until safe, while a person can feel severe pain from a nail through a boot that never touched the skin.",
        },
        {
          kind: "image",
          illustration: "pain-pathway",
          caption: "The nociceptive pathway: peripheral nociceptor → dorsal horn synapse (a key site of modulation) → ascending spinothalamic tract → thalamus and cortical networks, with descending pathways able to amplify or dampen the signal at the dorsal horn.",
        },
        {
          kind: "steps",
          items: [
            { title: "Transduction", text: "Free nerve endings (A-delta and C fibres) convert mechanical, thermal or chemical stimuli into electrical signals. Inflammatory chemicals lower their firing threshold (peripheral sensitisation)." },
            { title: "Transmission", text: "Signals travel to the dorsal horn of the spinal cord. A-delta fibres carry fast, sharp, well-localised information; C fibres carry slow, dull, aching information." },
            { title: "Modulation", text: "The dorsal horn is a gate, not a cable. Descending pathways from the brainstem (periaqueductal grey, rostral ventromedial medulla) can inhibit or facilitate transmission — the basis of gate control theory and descending modulation." },
            { title: "Perception", text: "Widespread brain networks — somatosensory, insula, anterior cingulate, prefrontal cortex, amygdala — evaluate the signal in context. Pain emerges only if the brain concludes protection is needed." },
          ],
        },
        {
          kind: "keypoints",
          title: "Core concepts",
          items: [
            "Nociception ≠ pain: nociceptors are danger detectors, not \"pain fibres\"",
            "There is no single \"pain centre\" — pain is produced by distributed brain networks",
            "Context, attention, expectation and mood change pain because they change the brain's evaluation of threat",
            "Descending modulation means the CNS can turn nociceptive volume up or down at the spinal cord",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Useful patient phrase: \"Pain is your brain's alarm system. In persistent pain the alarm has become oversensitive — it goes off with less and less provocation.\"",
          ],
        },
      ],
    },
    {
      slug: "central-sensitisation",
      title: "Central Sensitisation",
      estMinutes: 3,
      difficulty: "Advanced",
      content: [
        {
          kind: "paragraph",
          text: "Central sensitisation is increased responsiveness of nociceptive neurons in the central nervous system to normal or sub-threshold input. Dorsal horn neurons become hyperexcitable: their thresholds drop, their receptive fields expand, and previously innocuous input (touch, movement, pressure) can now drive them. The result is pain that is amplified, widespread and easily provoked.",
        },
        {
          kind: "cards",
          items: [
            { title: "Allodynia", text: "Pain from a stimulus that is normally not painful — light touch, clothing, gentle movement. A hallmark of a sensitised system.", icon: "feather" },
            { title: "Hyperalgesia", text: "An exaggerated pain response to a normally painful stimulus. Primary hyperalgesia occurs at the injury site; secondary hyperalgesia spreads beyond it via central mechanisms.", icon: "zap" },
            { title: "Wind-up / temporal summation", text: "Repeated identical C-fibre input produces progressively bigger dorsal horn responses — pain that builds with repetition even though the stimulus does not change.", icon: "trending-up" },
            { title: "Expanded receptive fields", text: "Sensitised neurons respond to input from a wider body area, contributing to spreading, poorly localised pain.", icon: "maximize-2" },
          ],
        },
        {
          kind: "paragraph",
          text: "Mechanistically, sustained C-fibre input activates NMDA receptors in dorsal horn neurons, glial cells release pro-inflammatory mediators, and descending facilitation can outweigh descending inhibition. Clinically, suspect a dominant central mechanism when pain is disproportionate to tissue findings, widespread or mirrored, provoked unpredictably, and accompanied by hypersensitivity to non-mechanical stimuli (light, sound, stress, cold).",
        },
        {
          kind: "keypoints",
          title: "Clinical indicators of central sensitisation",
          items: [
            "Pain disproportionate to the nature or extent of injury/pathology",
            "Widespread, non-anatomical distribution; may be mirrored on the opposite side",
            "Allodynia and secondary hyperalgesia on examination",
            "High irritability: easily provoked, slow to settle",
            "Often co-exists with poor sleep, fatigue, low mood and cognitive \"fog\"",
          ],
        },
        {
          kind: "warning",
          title: "Interpretation cautions",
          items: [
            "Central sensitisation is a mechanism, not a diagnosis — nociceptive and neuropathic contributions can coexist and should still be assessed",
            "Do not tell patients their pain is \"in their head\" — sensitisation is real neurophysiology, and framing matters enormously",
          ],
        },
      ],
    },
    {
      slug: "biopsychosocial",
      title: "Biopsychosocial Contributors",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "The biopsychosocial model recognises that biological, psychological and social factors all shape the pain experience — not as separate silos but as interacting influences on one nervous system. In persistent pain, these factors often explain more of the disability than any tissue finding does.",
        },
        {
          kind: "cards",
          items: [
            { title: "Sleep", text: "Poor sleep lowers pain thresholds and impairs descending inhibition; pain in turn disrupts sleep. Breaking this cycle is a genuine treatment target.", icon: "moon" },
            { title: "Stress & mood", text: "Sustained stress, anxiety and depression facilitate nociceptive processing and reduce endogenous inhibition. Depression and chronic pain share neurobiology and each worsens the other.", icon: "cloud-rain" },
            { title: "Beliefs & expectations", text: "Believing the spine is fragile or that pain signals damage drives protective behaviour and amplifies threat. Expectation of benefit or harm measurably changes outcomes (placebo/nocebo).", icon: "message-circle" },
            { title: "Fear-avoidance", text: "Catastrophising → fear of movement (kinesiophobia) → avoidance → deconditioning, disability and low mood → more pain. The fear-avoidance model describes the descending spiral; graded exposure reverses it.", icon: "shield-off" },
            { title: "Social & work factors", text: "Job dissatisfaction, litigation/compensation issues, social isolation and low support all predict chronicity and poorer outcomes.", icon: "users" },
            { title: "General health", text: "Inactivity, smoking, obesity and comorbidities contribute to systemic inflammation and reduced capacity — all modifiable with the right support.", icon: "heart" },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Psychosocial factors are prognostic: they predict who develops chronic disability better than imaging does",
            "These factors change pain through real neurophysiology (descending modulation, sensitisation) — they are not \"imaginary\" contributors",
            "Assessment must screen them explicitly; treatment must address them explicitly",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Ask every persistent-pain patient about sleep — it is one of the most modifiable amplifiers and is often never mentioned spontaneously.",
            "The question \"What do you believe is causing your pain?\" reveals more about prognosis than most physical tests.",
          ],
        },
      ],
    },
    {
      slug: "pain-neuroscience-education",
      title: "Pain Neuroscience Education (PNE)",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Pain neuroscience education teaches patients how pain actually works — that pain is a protective output of a sensitised nervous system rather than a damage meter. Reconceptualising pain reduces its threat value, which itself dials down the system. Evidence shows PNE reduces pain catastrophising, kinesiophobia and disability, with the strongest effects when it is combined with exercise and graded activity rather than delivered alone.",
        },
        {
          kind: "steps",
          items: [
            { title: "Assess beliefs first", text: "Elicit the patient's own story: what they think is wrong, what they fear, what they expect. Education targets these specific beliefs, not a generic script." },
            { title: "Teach with metaphor", text: "Use accessible analogies: an oversensitive alarm system, an amplifier turned up, a protective brain that has become overprotective. Check understanding by having the patient explain it back." },
            { title: "Link to their experience", text: "Explain their own pattern — flare-ups with stress, pain with harmless movements, spreading symptoms — through the lens of sensitisation, so the model fits their reality." },
            { title: "Convert insight into action", text: "Immediately pair education with graded movement: \"Because your system is sensitive rather than damaged, we can retrain it safely with gradual exposure.\"" },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "PNE is a treatment, not just information-giving — its goal is reconceptualisation",
            "Combine PNE with movement: education alone has small effects; education + exercise is substantially better",
            "Avoid over-teaching anatomy and pathoanatomy — that often increases threat",
          ],
        },
        {
          kind: "pearls",
          items: [
            "A single question checks reconceptualisation: \"If you feel pain on bending tomorrow, what does it mean?\" The answer you want: \"My system is being protective — not that I've damaged something.\"",
          ],
        },
      ],
    },
    {
      slug: "graded-exposure-pacing",
      title: "Graded Exposure & Pacing",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Many people with persistent pain live in a boom-bust cycle: on good days they do everything (\"boom\"), flare badly, then rest for days (\"bust\"). Over time the busts get longer and the baseline shrinks. Pacing and graded exposure replace this with quota-based activity: a reliable baseline that grows on schedule, not on symptoms.",
        },
        {
          kind: "steps",
          items: [
            { title: "1. Find the baseline", text: "Measure current tolerance for the target activity (e.g. walking) on several days. Set the starting quota at roughly 70–80% of the average tolerated amount — deliberately below flare threshold." },
            { title: "2. Work to quota, not to pain", text: "Do the planned amount on good days AND bad days. Stopping early on bad days and overdoing it on good days both retrain the system in the wrong direction." },
            { title: "3. Progress on schedule", text: "Increase by a small, planned increment (commonly ~10% per week) regardless of daily symptoms, adjusting only for genuine flares." },
            { title: "4. Graded exposure for feared movements", text: "Build a hierarchy of feared/avoided activities (from a tool like the Photograph Series of Daily Activities or simply the patient's list), start with a mildly threatening one, and repeatedly perform it until fear and pain response habituate, then move up the hierarchy." },
          ],
        },
        {
          kind: "table",
          headers: ["Approach", "Governed by", "Best suited to"],
          rows: [
            ["Graded activity / pacing", "Time or quota-contingent progression", "Boom-bust patterns, deconditioning, widespread pain"],
            ["Graded exposure", "Fear hierarchy — confronting specific feared movements", "High kinesiophobia, specific avoided activities (bending, lifting)"],
          ],
        },
        {
          kind: "warning",
          title: "Common pacing mistakes",
          items: [
            "Using pacing as sophisticated avoidance — the quota must progress, not just limit",
            "Setting the baseline at best-day performance (guarantees early failure and reinforces fear)",
            "Letting pain scores dictate daily volume — that is symptom-contingent, the exact pattern being replaced",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Explain the boom-bust graph on paper — most patients instantly recognise themselves, which builds buy-in for quotas.",
          ],
        },
      ],
    },
    {
      slug: "exercise-for-chronic-pain",
      title: "Exercise for Chronic Pain",
      estMinutes: 5,
      content: [
        {
          kind: "paragraph",
          text: "Exercise is a first-line treatment across chronic pain conditions. Benefits come through multiple routes: exercise-induced hypoalgesia (activation of descending inhibition), improved sleep and mood, reduced fear through experiencing safe movement, and restored physical capacity. No single exercise type is clearly superior — the best exercise is one the patient will actually do, dosed to their irritability.",
        },
        {
          kind: "keypoints",
          title: "Dosing with irritability",
          items: [
            "High irritability (easily flared, slow to settle): start well within tolerance, shorter frequent bouts, emphasise novelty-free, rhythmic, low-threat movement",
            "Low irritability: dose closer to standard strength/aerobic guidelines and progress normally",
            "Some pain during and after exercise is acceptable and expected — agree an acceptable level (e.g. up to 4–5/10) that settles within 24 hours",
            "In sensitised states, exercise-induced hypoalgesia can be blunted early on — start with the least threatening modes and build gradually",
          ],
        },
        {
          kind: "exercise",
          name: "Graded walking programme",
          purpose: "Rebuild aerobic capacity and confidence with a quota-based, low-threat activity; walking is meaningful, measurable and easy to progress.",
          position: "Outdoors or treadmill; comfortable footwear; flat terrain initially.",
          execution: "Walk at a comfortable, rhythmic pace for the agreed quota (time or distance) established from baseline testing — the same amount on good and bad days.",
          dosage: "Start at ~70–80% of average tolerance (e.g. 8 minutes if tolerance is 10), once or twice daily, 5–7 days/week.",
          progression: "Increase duration by ~10% per week on schedule; later add gentle hills or pace variation.",
          precautions: "Resist the urge to do extra on good days — quota discipline is the treatment.",
        },
        {
          kind: "exercise",
          name: "Sit-to-stand strength circuit",
          purpose: "Functional lower-limb strengthening that doubles as graded exposure to loading for patients who fear \"wearing out\" their joints or spine.",
          position: "Firm chair, feet hip-width apart; hands on thighs or crossed on chest.",
          execution: "Stand up and sit down with control, breathing normally throughout (no breath-holding or bracing against the movement).",
          dosage: "Begin with 2 sets of 6–10 comfortable repetitions, 3×/week.",
          progression: "Add repetitions, lower the seat, slow the lowering phase, then add load (backpack) — one variable at a time.",
          precautions: "A temporary symptom increase settling within 24 hours is acceptable; persistent escalation means reduce one progression step.",
        },
        {
          kind: "exercise",
          name: "Feared-movement graded exposure (e.g. bending)",
          purpose: "Directly confront and habituate a specific feared movement, breaking the fear-avoidance cycle by proving safety through experience.",
          position: "Standing; start with the least threatening version from the patient's fear hierarchy (e.g. small-range bending with hand support).",
          execution: "Perform the movement slowly and repeatedly while relaxed and breathing — before, rate expected pain/harm; after, compare with what actually happened to update predictions.",
          dosage: "5–10 repetitions, 1–2×/day, staying at each hierarchy step until fear rating drops meaningfully (e.g. below 3/10).",
          progression: "Increase range, speed and load; remove support; progress to picking objects off the floor, then real-life tasks.",
          precautions: "Exposure must feel challenging but manageable — panic-level fear reinforces threat rather than habituating it.",
        },
        {
          kind: "exercise",
          name: "Relaxed diaphragmatic breathing",
          purpose: "Downregulate a threatened nervous system, reduce protective muscle guarding, and provide a portable flare-management tool.",
          position: "Supine with knees bent, or reclined sitting; one hand on chest, one on abdomen.",
          execution: "Breathe in slowly through the nose letting the abdomen rise, then exhale slowly and fully (exhale slightly longer than inhale). Keep shoulders and jaw soft.",
          dosage: "3–5 minutes, 2–3×/day and at the first sign of a flare.",
          progression: "Use during graded exposure and exercise to pair movement with a calm state.",
          precautions: "Avoid forceful over-breathing; mild light-headedness means slow down.",
        },
        {
          kind: "pearls",
          items: [
            "Frame every session as training the nervous system, not fixing a tissue — it changes how patients interpret post-exercise soreness.",
            "Preference matters: adherence, not exercise type, is the biggest determinant of outcome in chronic pain.",
          ],
        },
      ],
    },
    {
      slug: "flare-management",
      title: "Flare Management Plans",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Flares are a normal, expected part of persistent pain and of recovery — sensitised systems fluctuate with load, stress, sleep and life events. A written flare plan, made in advance, converts a frightening event into a managed one and prevents each flare from resetting progress to zero.",
        },
        {
          kind: "steps",
          items: [
            { title: "Normalise in advance", text: "Tell patients flares WILL happen and do not mean re-injury or failure. A flare is the alarm being touchy, not new damage." },
            { title: "Identify triggers", text: "Review recent load spikes, poor sleep, stress, illness. Often the trigger is cumulative and non-mechanical." },
            { title: "Scale, don't stop", text: "Drop activity to a pre-agreed reduced quota (e.g. 50% of current level) rather than resting completely; keep gentle movement, breathing and pacing going." },
            { title: "Use calming strategies", text: "Diaphragmatic breathing, heat, gentle rhythmic movement, relaxation, brief use of previously helpful strategies — chosen and written down in advance." },
            { title: "Return on schedule", text: "Rebuild towards the previous quota over days, not weeks. Contact the clinician only if the flare pattern is genuinely different (see red flags)." },
          ],
        },
        {
          kind: "redflags",
          items: [
            "New neurological deficit: progressive weakness, numbness, or bladder/bowel changes",
            "Constant, unremitting night pain that is new or escalating",
            "Unexplained weight loss, fever, or systemic illness with the flare",
            "Pain after significant new trauma",
            "These features are NOT a flare — they need medical review",
          ],
        },
        {
          kind: "pearls",
          items: [
            "A flare plan written on one card — \"What I'll do, for how long, when I'll restart building\" — measurably reduces panic, unscheduled appointments and setback duration.",
          ],
        },
      ],
    },
    {
      slug: "language-and-yellow-flags",
      title: "Language, Nocebo & Yellow Flags",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Words are a clinical intervention. Nocebo — harm from negative expectation — is produced daily in clinics through frightening language and catastrophic imaging reports. The same finding can be described in ways that build confidence or manufacture disability.",
        },
        {
          kind: "table",
          headers: ["Nocebic phrase", "Helpful alternative"],
          rows: [
            ["\"Wear and tear / degeneration\"", "\"Normal age-related changes — like grey hair on the inside\""],
            ["\"Your disc has slipped / is bulging\"", "\"Discs are strong and can't slip; these findings are common in pain-free people\""],
            ["\"Bone on bone\"", "\"The joint is sensitive and deconditioned — joints adapt to gradual load\""],
            ["\"Be careful — don't bend/lift\"", "\"Your back is strong; let's build it up gradually\""],
            ["\"Your core is weak / unstable\"", "\"Your muscles are guarding; we'll get them working confidently again\""],
          ],
        },
        {
          kind: "paragraph",
          text: "Yellow flags are psychosocial risk factors for developing chronic disability. They are screened early (tools such as the STarT Back or Örebro questionnaires operationalise this) because they identify who needs psychologically informed care, not just biomedical treatment.",
        },
        {
          kind: "cards",
          items: [
            { title: "Beliefs", text: "Pain means damage; activity is harmful; expectation that passive treatment will fix it.", icon: "message-square" },
            { title: "Emotions", text: "Fear of movement, catastrophising, low mood, anxiety, irritability.", icon: "frown" },
            { title: "Behaviours", text: "Extended rest, avoidance, boom-bust activity, over-reliance on aids and medication.", icon: "pause-circle" },
            { title: "Work & social", text: "Belief that work is harmful, low job satisfaction, unsupportive environment, compensation issues.", icon: "briefcase" },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Yellow flags predict disability better than most physical findings — screen them in every persistent-pain presentation",
            "High-risk patients benefit from psychologically informed physiotherapy and, where needed, multidisciplinary care",
            "Clinician language is itself a modifiable yellow flag: audit your own phrases",
          ],
        },
      ],
    },
    {
      slug: "quick-revision",
      title: "Quick Revision Summary",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "keypoints",
          title: "60-second summary",
          items: [
            "Pain is a brain-produced protective output; nociception ≠ pain",
            "Chronic pain: > 3 months, driven by nervous-system sensitivity more than tissue state",
            "Central sensitisation → allodynia, hyperalgesia, wind-up, spreading pain",
            "Biopsychosocial amplifiers: poor sleep, stress, unhelpful beliefs, fear-avoidance, social factors",
            "Treat with PNE + graded activity/exposure + exercise dosed to irritability",
            "Replace boom-bust with quota-based pacing progressed ~10%/week",
            "Written flare plan: scale don't stop; know the red flags that are NOT a flare",
            "Watch your language — avoid nocebo; screen yellow flags early",
          ],
        },
        {
          kind: "paragraph",
          text: "Ready to test yourself? Take the quiz to check your understanding and find your weak areas.",
        },
      ],
    },
  ],
  questions: [
    {
      text: "What is the conventional duration threshold for defining chronic pain?",
      options: ["2 weeks", "6 weeks", "3 months", "12 months"],
      correctIndex: 2,
      explanation:
        "Chronic (persistent) pain is conventionally defined as pain that persists or recurs for more than 3 months — a timeframe that generally exceeds expected tissue healing. ICD-11 uses this 3-month criterion for chronic pain classification.",
      difficulty: "Easy",
      tags: ["pathology"],
      sectionSlug: "acute-vs-chronic",
    },
    {
      text: "Which statement best describes the relationship between nociception and pain?",
      options: [
        "Nociception and pain are the same process measured differently",
        "Nociception always produces pain proportional to its intensity",
        "Nociception is neither sufficient nor necessary for the experience of pain",
        "Pain occurs only when nociceptors fire above a fixed threshold",
      ],
      correctIndex: 2,
      explanation:
        "Nociception is the neural encoding of potentially damaging stimuli; pain is a conscious experience produced by the brain. Severe injuries can be painless (e.g. battlefield analgesia) and severe pain can occur with minimal or no nociception — so nociception is neither sufficient nor necessary for pain.",
      difficulty: "Easy",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "pain-neuroscience",
    },
    {
      text: "A patient reports pain when clothing brushes against their forearm. What is this phenomenon called?",
      options: ["Hyperalgesia", "Allodynia", "Paraesthesia", "Wind-up"],
      correctIndex: 1,
      explanation:
        "Allodynia is pain produced by a stimulus that is normally non-painful, such as light touch from clothing. Hyperalgesia is an exaggerated response to a normally painful stimulus, paraesthesia is abnormal sensation like tingling, and wind-up is progressive amplification with repeated stimulation.",
      difficulty: "Easy",
      tags: ["pathology", "assessment"],
      sectionSlug: "central-sensitisation",
    },
    {
      text: "Which spinal cord region is the key site where nociceptive transmission is modulated (\"gated\")?",
      options: ["Anterior horn", "Dorsal horn", "Lateral corticospinal tract", "Dorsal columns"],
      correctIndex: 1,
      explanation:
        "The dorsal horn is where primary nociceptive afferents synapse and where transmission can be inhibited or facilitated — by local interneurons (gate control) and by descending pathways from the brainstem. It is a principal site of central sensitisation.",
      difficulty: "Medium",
      tags: ["anatomy", "pathology"],
      sectionSlug: "pain-neuroscience",
    },
    {
      text: "\"Wind-up\" (temporal summation) refers to which phenomenon?",
      options: [
        "Gradually increasing anxiety before movement",
        "Progressively larger dorsal horn responses to repeated identical C-fibre input",
        "Fatigue of nociceptors with repeated stimulation",
        "The spread of inflammation from joint to muscle",
      ],
      correctIndex: 1,
      explanation:
        "Wind-up is a form of activity-dependent plasticity: repeated identical C-fibre stimuli produce progressively bigger responses in dorsal horn neurons, partly via NMDA receptor activation. Clinically it appears as pain that builds with repetition of the same stimulus.",
      difficulty: "Medium",
      tags: ["pathology"],
      sectionSlug: "central-sensitisation",
    },
    {
      text: "Which clinical pattern most suggests a dominant central sensitisation mechanism?",
      options: [
        "Sharp, well-localised pain reproduced consistently by one movement",
        "Dermatomal pain with matching sensory loss and reduced reflexes",
        "Widespread, disproportionate pain that is unpredictable and easily provoked, with allodynia",
        "Pain only during weight-bearing that resolves immediately with rest",
      ],
      correctIndex: 2,
      explanation:
        "Central sensitisation typically presents with pain disproportionate to tissue findings, widespread or non-anatomical distribution, unpredictable provocation, high irritability and allodynia/hyperalgesia. Option A suggests a nociceptive mechanical pattern; option B suggests neuropathic radiculopathy.",
      difficulty: "Hard",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "central-sensitisation",
    },
    {
      text: "How does poor sleep influence persistent pain?",
      options: [
        "It has no measurable effect on pain processing",
        "It lowers pain thresholds and impairs descending inhibition",
        "It reduces pain by decreasing daytime activity",
        "It only matters if the patient sleeps less than 3 hours",
      ],
      correctIndex: 1,
      explanation:
        "Sleep deprivation measurably lowers pain thresholds and impairs endogenous descending inhibition, while pain disrupts sleep — a bidirectional cycle. Sleep is therefore a genuine treatment target in persistent pain, not a side issue.",
      difficulty: "Medium",
      tags: ["pathology", "management"],
      sectionSlug: "biopsychosocial",
    },
    {
      text: "In the fear-avoidance model, which sequence best describes the pathway to disability?",
      options: [
        "Injury → confrontation → recovery → return to activity",
        "Catastrophising → fear of movement → avoidance → deconditioning and disability",
        "Pain → immediate exercise → flare → recovery",
        "Avoidance → increased fitness → reduced pain",
      ],
      correctIndex: 1,
      explanation:
        "The fear-avoidance model describes how catastrophic interpretation of pain leads to kinesiophobia, avoidance and hypervigilance, producing deconditioning, depression and disability — which in turn amplify pain. Confrontation of feared movement (graded exposure) leads instead to recovery.",
      difficulty: "Medium",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "biopsychosocial",
    },
    {
      text: "What is the primary goal of pain neuroscience education (PNE)?",
      options: [
        "To teach patients detailed spinal anatomy",
        "To reconceptualise pain as a protective output of a sensitised system rather than a damage signal",
        "To convince patients their pain is psychological",
        "To replace exercise therapy in sensitive patients",
      ],
      correctIndex: 1,
      explanation:
        "PNE aims at reconceptualisation: understanding that pain reflects nervous-system sensitivity and perceived threat rather than tissue damage. This reduces the threat value of pain, decreasing catastrophising and kinesiophobia. It works best combined with movement, and detailed pathoanatomy teaching can increase threat.",
      difficulty: "Easy",
      tags: ["management"],
      sectionSlug: "pain-neuroscience-education",
    },
    {
      text: "Why should PNE be combined with exercise rather than delivered alone?",
      options: [
        "Education alone has large effects, so exercise is optional",
        "Combined education and movement produces better outcomes — patients need to experience safe movement, not just understand it",
        "Exercise distracts patients from difficult concepts",
        "PNE is only reimbursed when paired with exercise",
      ],
      correctIndex: 1,
      explanation:
        "Trials show PNE alone yields small effects; combining it with exercise or graded activity produces meaningfully better reductions in pain and disability. New beliefs must be confirmed by lived experience of moving safely — behaviour change consolidates the reconceptualisation.",
      difficulty: "Medium",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "pain-neuroscience-education",
    },
    {
      text: "A patient walks 30 minutes on good days, then is bedbound for two days afterwards. Which management approach directly targets this pattern?",
      options: [
        "Symptom-contingent activity — walk only until pain starts",
        "Complete rest until pain resolves",
        "Quota-based pacing from a sub-flare baseline, progressed on schedule",
        "Doubling the walking distance to build tolerance quickly",
      ],
      correctIndex: 2,
      explanation:
        "This is a classic boom-bust cycle. Pacing sets a quota at roughly 70–80% of measured average tolerance — performed on good AND bad days — then progresses by planned increments (~10%/week). Symptom-contingent activity is the pattern being replaced, and rest deepens deconditioning.",
      difficulty: "Medium",
      tags: ["management", "exercise-therapy", "clinical-reasoning"],
      sectionSlug: "graded-exposure-pacing",
    },
    {
      text: "What distinguishes graded exposure from graded activity?",
      options: [
        "Graded exposure progresses along a hierarchy of specifically feared movements; graded activity progresses general activity by time or quota",
        "Graded exposure is passive; graded activity is active",
        "They are identical approaches with different names",
        "Graded activity is only used for post-surgical patients",
      ],
      correctIndex: 0,
      explanation:
        "Graded activity/pacing builds overall activity tolerance using time- or quota-contingent progression. Graded exposure is a fear-focused approach: the patient repeatedly confronts specific feared movements from a personalised hierarchy until fear habituates. Exposure suits high kinesiophobia with specific avoided tasks.",
      difficulty: "Hard",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "graded-exposure-pacing",
    },
    {
      text: "When establishing a pacing baseline for walking, the starting quota should typically be set at:",
      options: [
        "The best distance achieved on a good day",
        "Roughly 70–80% of the average tolerated amount",
        "Double the current tolerance to accelerate progress",
        "Whatever distance produces 8/10 pain",
      ],
      correctIndex: 1,
      explanation:
        "The baseline is set deliberately below flare threshold — commonly ~70–80% of the measured average tolerance — so it can be achieved reliably on good and bad days. A best-day baseline guarantees early failure and reinforces the boom-bust pattern.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "graded-exposure-pacing",
    },
    {
      text: "What is exercise-induced hypoalgesia?",
      options: [
        "Loss of protective sensation after overtraining",
        "A temporary reduction in pain sensitivity following exercise, mediated partly by descending inhibition",
        "Numbness in the exercised limb",
        "The placebo effect of gym environments",
      ],
      correctIndex: 1,
      explanation:
        "Exercise-induced hypoalgesia is the normal reduction in pain sensitivity after exercise, mediated by endogenous opioid and non-opioid descending inhibitory mechanisms. In some sensitised states this response is initially blunted or even reversed, which is why early dosing must respect irritability.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "pathology"],
      sectionSlug: "exercise-for-chronic-pain",
    },
    {
      text: "For a patient with highly irritable widespread pain, the most appropriate initial exercise prescription is:",
      options: [
        "High-intensity interval training to maximise endorphin release",
        "Short, frequent bouts of low-threat rhythmic activity well within tolerance",
        "Heavy resistance training to failure, 3×/week",
        "No exercise until pain is below 2/10",
      ],
      correctIndex: 1,
      explanation:
        "High irritability calls for starting well within tolerance: shorter, more frequent bouts of familiar, rhythmic, low-threat movement (walking, cycling, water-based activity), progressed gradually. Waiting for pain to abolish before moving reinforces avoidance; aggressive loading flares a sensitised system.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "exercise-for-chronic-pain",
    },
    {
      text: "Which exercise principle is most important for long-term outcomes in chronic pain?",
      options: [
        "Choosing the single scientifically superior exercise type",
        "Adherence — matching the mode to patient preference and capacity",
        "Always exercising to complete fatigue",
        "Avoiding any exercise that reproduces symptoms",
      ],
      correctIndex: 1,
      explanation:
        "No exercise mode is consistently superior for chronic pain; benefits accrue across aerobic, strengthening and mind-body approaches. Adherence is the biggest determinant of outcome, so preference, accessibility and confidence guide selection. Some symptom reproduction within agreed limits is acceptable.",
      difficulty: "Easy",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "exercise-for-chronic-pain",
    },
    {
      text: "During a flare of longstanding non-specific low back pain, which response is most appropriate?",
      options: [
        "Complete bed rest until symptoms fully resolve",
        "Urgent re-imaging of the lumbar spine",
        "Scale activity to a pre-agreed reduced quota, use calming strategies, and rebuild over days",
        "Permanently reduce the exercise programme to pre-flare levels minus 50%",
      ],
      correctIndex: 2,
      explanation:
        "Flares are expected fluctuations of a sensitised system, not re-injury. The written flare plan scales activity down (e.g. to ~50% of current quota) rather than stopping, uses calming strategies, and rebuilds on schedule. Imaging and bed rest are not indicated without red flags.",
      difficulty: "Medium",
      tags: ["management", "precautions"],
      sectionSlug: "flare-management",
    },
    {
      text: "A patient with chronic back pain reports a flare accompanied by new difficulty initiating urination and numbness in the saddle region. What is the correct action?",
      options: [
        "Reassure them this is part of central sensitisation",
        "Continue the graded activity plan and review in a week",
        "Treat as a possible cauda equina syndrome — urgent same-day medical referral",
        "Prescribe pelvic floor relaxation exercises",
      ],
      correctIndex: 2,
      explanation:
        "New bladder dysfunction with saddle anaesthesia is a red-flag presentation for cauda equina syndrome, a surgical emergency. These features are never attributed to sensitisation or a flare — they require emergency medical assessment regardless of the chronicity of the background pain.",
      difficulty: "Easy",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "flare-management",
    },
    {
      text: "Telling a patient their spine is \"crumbling\" and they should avoid bending is most likely to produce which effect?",
      options: [
        "Improved caution and faster recovery",
        "A nocebo effect — increased threat, fear-avoidance and disability",
        "No effect, since words don't change physiology",
        "A placebo effect through demonstrating clinical expertise",
      ],
      correctIndex: 1,
      explanation:
        "Negative expectation causes measurable harm — the nocebo effect. Catastrophic language increases perceived threat, which amplifies pain via central mechanisms and drives fear-avoidance behaviour. Helpful alternatives reframe findings as common, age-normal and compatible with progressive loading.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "language-and-yellow-flags",
    },
    {
      text: "Which of the following is a yellow flag rather than a red flag?",
      options: [
        "Unexplained weight loss with night sweats",
        "Belief that activity will damage the spine, with high fear of movement",
        "New progressive lower-limb weakness",
        "Saddle anaesthesia with bladder changes",
      ],
      correctIndex: 1,
      explanation:
        "Yellow flags are psychosocial risk factors for chronic disability — unhelpful beliefs, fear-avoidance, catastrophising, low mood, and negative work factors. The other options are red flags suggesting possible serious pathology (malignancy/infection, neurological compromise, cauda equina).",
      difficulty: "Hard",
      tags: ["assessment", "precautions"],
      sectionSlug: "language-and-yellow-flags",
    },
  ],
  flashcards: [
    { front: "Define chronic pain by duration.", back: "Pain persisting or recurring for more than 3 months — usually beyond expected tissue healing time (ICD-11 criterion)." },
    { front: "Nociception vs pain — the key distinction?", back: "Nociception is neural encoding of potentially damaging stimuli; pain is a protective conscious experience produced by the brain. Nociception is neither sufficient nor necessary for pain." },
    { front: "Define allodynia.", back: "Pain from a stimulus that is normally non-painful (e.g. light touch, clothing) — a hallmark of central sensitisation." },
    { front: "Define hyperalgesia.", back: "An exaggerated pain response to a normally painful stimulus. Secondary hyperalgesia spreads beyond the injury site via central mechanisms." },
    { front: "What is wind-up (temporal summation)?", back: "Progressively larger dorsal horn neuron responses to repeated identical C-fibre input — pain that builds with repetition, partly NMDA-receptor mediated." },
    { front: "Name four biopsychosocial amplifiers of persistent pain.", back: "Poor sleep, stress/low mood, unhelpful beliefs (pain = damage), and fear-avoidance; plus social/work factors such as low support and job dissatisfaction." },
    { front: "What is the goal of pain neuroscience education?", back: "Reconceptualisation: pain reflects a sensitised, overprotective nervous system rather than tissue damage. Best combined with exercise/graded activity." },
    { front: "How is a pacing baseline set, and how is it progressed?", back: "Start at ~70–80% of measured average tolerance (below flare threshold), perform to quota on good and bad days, progress ~10% per week on schedule." },
    { front: "What is the boom-bust cycle?", back: "Overactivity on good days causing flares, followed by prolonged rest — with a progressively shrinking baseline. Replaced by quota-based pacing." },
    { front: "Core elements of a flare management plan?", back: "Normalise flares in advance; scale activity (don't stop) to a pre-agreed reduced quota; use calming strategies; rebuild on schedule; know which features are red flags, not flares." },
    { front: "Give two nocebic phrases and better alternatives.", back: "\"Wear and tear\" → \"normal age-related changes\"; \"bone on bone\" → \"a sensitive, deconditioned joint that adapts to gradual load\"." },
    { front: "What are yellow flags?", back: "Psychosocial risk factors for chronic disability: unhelpful beliefs, fear-avoidance, catastrophising, low mood, poor work/social factors. Screened with tools like STarT Back or Örebro." },
  ],
};

export default topic;
