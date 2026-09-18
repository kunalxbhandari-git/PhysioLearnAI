import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "multiple-sclerosis",
  title: "Multiple Sclerosis & Demyelinating Disorders",
  category: "Neurological",
  description:
    "Demyelination, MS types and symptoms — fatigue, heat sensitivity, spasticity, ataxia — plus the evidence for exercise, energy conservation, balance and gait training, and how Guillain-Barré syndrome differs.",
  difficulty: "Intermediate",
  estMinutes: 28,
  icon: "brain-circuit",
  keyTakeaways: [
    "MS is an immune-mediated disease that strips myelin from CNS axons, slowing or blocking conduction; plaques disseminated in time and space produce its varied, relapsing picture.",
    "About 85% of people start with relapsing-remitting MS (RRMS); many later transition to secondary progressive MS, while ~10–15% have primary progressive MS from onset.",
    "Fatigue is the most common and often the most disabling symptom — assess it, name it, and manage it deliberately.",
    "Exercise is safe and beneficial in MS: it does not trigger relapses, and the historic advice to rest and avoid exertion caused avoidable deconditioning.",
    "Uhthoff's phenomenon — temporary symptom worsening with raised body temperature — is managed with cooling strategies, not exercise avoidance.",
    "Energy conservation (the '4 Ps': prioritise, plan, pace, position) protects capacity for what matters most to the patient.",
    "Balance, gait and spasticity respond to targeted training; ataxia is the stubbornest impairment — practice still helps.",
    "New or rapidly worsening neurology needs triage: relapse, infection-driven pseudo-relapse, or progression each demand a different response. Contrast GBS: acute peripheral demyelination with ascending weakness where respiratory function must be monitored.",
  ],
  sections: [
    {
      slug: "pathophysiology",
      title: "Demyelination: What Goes Wrong",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Multiple sclerosis is a chronic immune-mediated disease of the central nervous system. Activated immune cells cross the blood-brain barrier and attack oligodendrocytes and the myelin they produce, leaving patches of inflammation and demyelination — plaques — scattered through the brain, optic nerves and spinal cord.",
        },
        { kind: "image", illustration: "nervous-system", caption: "The central nervous system under attack in MS: plaques of demyelination scattered through brain, optic nerves and spinal cord explain why symptoms are 'disseminated in time and space'." },
        {
          kind: "steps",
          items: [
            { title: "Myelin loss slows conduction", text: "Myelin allows fast saltatory conduction, with impulses jumping between nodes of Ranvier. Demyelinated axons conduct slowly, fatigably, or not at all — producing weakness, sensory change, visual loss, wherever the plaque sits." },
            { title: "Inflammation settles, some repair occurs", text: "Acute inflammation subsides and partial remyelination plus sodium-channel redistribution restore conduction — the biological basis of remission after a relapse." },
            { title: "Scarring and axon loss accumulate", text: "Repeated attacks leave gliotic scars (scleroses), and demyelinated axons eventually degenerate. Axon loss — not myelin loss — drives permanent, progressive disability." },
            { title: "Conduction is temperature-sensitive", text: "Demyelinated axons fail sooner as temperature rises, which is why a hot bath, fever or hard exercise can transiently reveal or worsen symptoms (Uhthoff's phenomenon)." },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "CNS only — peripheral nerves are spared (peripheral demyelination is the territory of GBS/CIDP)",
            "Diagnosis rests on lesions disseminated in time and space (clinical events plus MRI criteria)",
            "Onset is typically at 20–40 years, and women are affected roughly two to three times as often as men",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Two clinical hallmarks worth remembering: symptoms that vary with heat, and fatigue out of proportion to activity — both flow directly from demyelinated axon physiology.",
          ],
        },
      ],
    },
    {
      slug: "ms-types",
      title: "Types & Disease Course",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "MS follows recognisable course patterns, and knowing the patient's type frames prognosis, medical treatment and physiotherapy goals.",
        },
        {
          kind: "cards",
          items: [
            { title: "Relapsing-remitting (RRMS)", text: "About 85% of onset cases. Discrete relapses (new or worsening symptoms evolving over days, lasting more than 24 hours without fever) followed by full or partial remission and stability between attacks.", icon: "activity" },
            { title: "Secondary progressive (SPMS)", text: "After years of RRMS, many people shift into gradual worsening with or without superimposed relapses — disability accumulates independent of attacks.", icon: "trending-up" },
            { title: "Primary progressive (PPMS)", text: "About 10–15%: steady progression from onset without distinct relapses, typically presenting later (40s) with a progressive spastic gait disorder; sex ratio is roughly equal.", icon: "arrow-up-right" },
            { title: "Clinically isolated syndrome", text: "A first demyelinating episode (classically optic neuritis, brainstem or spinal cord syndrome) that may or may not go on to fulfil MS criteria.", icon: "flag" },
          ],
        },
        {
          kind: "keypoints",
          title: "Relapse vs pseudo-relapse vs progression",
          items: [
            "Relapse: new/worsening neurological symptoms lasting > 24 hours, without fever or infection — flag to the MS team (steroids may shorten it)",
            "Pseudo-relapse: old symptoms temporarily amplified by heat, infection (classically urinary), or fatigue — treat the trigger, not the 'relapse'",
            "Progression: slow worsening over months — a rehabilitation and disease-modification conversation, not an acute one",
          ],
        },
        {
          kind: "pearls",
          items: [
            "A 'sudden deterioration' with a temperature or new urinary symptoms is an infection screen first, relapse second.",
          ],
        },
      ],
    },
    {
      slug: "symptoms",
      title: "Common Symptoms & Impairments",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Because plaques can sit anywhere in the CNS, almost any neurological symptom is possible — but a familiar cluster dominates clinical practice, with fatigue at the top of the list.",
        },
        {
          kind: "cards",
          items: [
            { title: "Fatigue (#1)", text: "Reported by up to 80–90% and often ranked the most disabling symptom. A pervasive, disproportionate exhaustion — partly central (the disease itself), partly from deconditioning, poor sleep, mood, medications and heat.", icon: "battery-low" },
            { title: "Weakness", text: "Upper motor neuron pattern, typically worse in the legs, worsening with activity and heat as marginal demyelinated axons drop out — patients describe legs that 'run out'.", icon: "activity" },
            { title: "Spasticity", text: "Velocity-dependent hypertonia, commonest in the leg extensors and adductors; ranges from a useful 'splint' for weak legs to painful spasms disturbing sleep and hygiene.", icon: "zap" },
            { title: "Ataxia & tremor", text: "Cerebellar plaques cause intention tremor, dysmetria and a wide-based unsteady gait — among the most treatment-resistant impairments.", icon: "shuffle" },
            { title: "Sensory & visual", text: "Numbness, pins and needles, band-like tightness, Lhermitte's sign (electric shocks down the spine on neck flexion); optic neuritis (painful unilateral visual loss) is a classic first presentation.", icon: "eye" },
            { title: "Bladder, cognition, mood", text: "Urgency and frequency, impaired processing speed and memory, depression — all common, all relevant to how therapy is planned and delivered.", icon: "brain" },
          ],
        },
        {
          kind: "paragraph",
          text: "Uhthoff's phenomenon deserves its own mention: a transient worsening of symptoms (classically blurred vision, but also weakness or fatigue) when core temperature rises — hot weather, hot showers, fever or vigorous exercise. It reflects temperature-sensitive conduction failure in demyelinated axons, not new damage, and it reverses with cooling.",
        },
        {
          kind: "pearls",
          items: [
            "Ask specifically about fatigue and heat sensitivity — patients often do not volunteer them, yet they shape every exercise prescription.",
            "Uhthoff's is temporary and harmless: warn patients it may happen with exercise so they interpret it correctly instead of abandoning activity.",
          ],
        },
      ],
    },
    {
      slug: "assessment",
      title: "Physiotherapy Assessment",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Assessment in MS captures a moving target: impairments fluctuate with heat, fatigue, time of day and disease activity. Standardise conditions for serial measures, and always profile fatigue alongside the physical examination.",
        },
        {
          kind: "steps",
          items: [
            { title: "History", text: "Type and course, relapse frequency and recovery, disease-modifying therapy, dominant symptoms (ask fatigue, heat, bladder), falls, aids, daily energy pattern and the activities that matter most to the person." },
            { title: "Fatigue profiling", text: "Use a validated scale concept — e.g. the Fatigue Severity Scale or Modified Fatigue Impact Scale — plus a simple diary of daily energy peaks and troughs to guide scheduling and pacing." },
            { title: "Impairment examination", text: "Strength (worse in legs?), tone (Modified Ashworth), sensation and proprioception, coordination (finger-nose, heel-shin), vision and oculomotor screen where balance is affected." },
            { title: "Balance & gait", text: "Berg Balance Scale or Mini-BESTest; timed measures — Timed 25-Foot Walk, Timed Up and Go, and longer walks (2 or 6 minutes) because MS walking deteriorates with distance (motor fatigability), which short tests miss." },
            { title: "Patient-reported walking", text: "The MS Walking Scale (MSWS-12) concept captures the lived impact of walking limitation that clinic tests underestimate." },
          ],
        },
        {
          kind: "table",
          headers: ["Domain", "Useful measure", "Why"],
          rows: [
            ["Fatigue", "Fatigue Severity Scale / Modified Fatigue Impact Scale", "Quantifies the most disabling symptom; tracks response to management"],
            ["Walking speed", "Timed 25-Foot Walk", "Standard MS short-walk measure; sensitive to change"],
            ["Walking endurance", "6-minute walk (or 2-minute) test", "Reveals distance-dependent deterioration typical of MS"],
            ["Balance", "Berg Balance Scale / Mini-BESTest", "Falls risk profiling — over half of people with MS fall each year"],
            ["Global disability", "EDSS (concept)", "Neurologist-scored 0–10 scale, heavily weighted to walking ability — know roughly what the scores mean"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "Test at a consistent time of day and room temperature — an afternoon assessment in a warm gym can 'worsen' MS by a full grade.",
            "A long-distance walk test tells you more about community function than the best 10-metre performance.",
          ],
        },
      ],
    },
    {
      slug: "exercise-evidence",
      title: "Exercise Is Safe & Beneficial",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "For much of the twentieth century, people with MS were told to rest and avoid exertion, for fear that exercise would provoke relapses or accelerate the disease. The evidence says the opposite: exercise training improves aerobic fitness, strength, walking, balance, fatigue and mood, with no increase in relapse rate. The rest advice created a second disease — deconditioning — on top of the first.",
        },
        {
          kind: "keypoints",
          title: "What the evidence supports",
          items: [
            "Aerobic, resistance and balance training are all safe across disability levels when appropriately prescribed",
            "Exercise does not trigger relapses; temporary Uhthoff-type symptom flares with heat settle with cooling and do not signify damage",
            "Training reduces fatigue on average — the paradox patients need explained: spending energy wisely builds capacity",
            "Benefits are use-dependent: gains reverse with detraining, so sustainable routine beats heroic bursts",
          ],
        },
        {
          kind: "warning",
          title: "Prescription cautions",
          items: [
            "During a relapse: scale back to gentle activity as tolerated, resume progressive training as recovery begins",
            "Heat-sensitive patients need cooling strategies built into the plan, not discovered by accident",
            "Fatigue means dose carefully and schedule for the patient's best time of day — usually morning",
            "Sensory loss and balance deficits shape equipment choice (recumbent bike vs treadmill) and supervision needs",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Frame it explicitly: \"Exercise is treatment for MS, not a risk to it.\" Undoing the old rest message is often the first therapeutic act.",
          ],
        },
      ],
    },
    {
      slug: "fatigue-energy",
      title: "Fatigue Management & Energy Conservation",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "MS fatigue is managed on two fronts at once: build capacity with graded exercise, and spend the available energy deliberately through energy conservation. Neither works alone — conservation without training shrinks the world; training without pacing burns the week's energy on Tuesday.",
        },
        {
          kind: "cards",
          items: [
            { title: "Prioritise", text: "Decide what matters this day and week; give the best energy to the most valued activities and delegate or drop the rest guilt-free.", icon: "list-checks" },
            { title: "Plan", text: "Spread demanding tasks across the week, alternate heavy and light, prepare things the night before, and schedule around the personal energy curve (usually best in the morning).", icon: "calendar" },
            { title: "Pace", text: "Work in bouts with rests BEFORE exhaustion — the 'stop before the wall' rule. Boom-and-bust cycles are the enemy of a stable week.", icon: "timer" },
            { title: "Position & shortcuts", text: "Sit where standing is not needed, use trolleys, perching stools and labour-saving layouts; reduce trips and carrying. Efficiency is not laziness — it is reallocating watts to what matters.", icon: "armchair" },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Address the treatable contributors too: sleep disruption (often bladder-driven), mood, medication effects, deconditioning, and heat",
            "A fatigue diary for one or two weeks reveals patterns that surprise most patients — and turns pacing from theory into a schedule",
            "Rests are prescribed doses: short, planned, and taken before they are desperately needed",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Distinguish fatigability (performance falling off within a task) from the pervasive daily fatigue — timed long-walk tests capture the first, questionnaires the second, and both guide different fixes.",
          ],
        },
      ],
    },
    {
      slug: "heat-management",
      title: "Heat Sensitivity: Practical Strategies",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Because demyelinated axons fail as core temperature rises, many people with MS reliably worsen in the heat. The answer is engineering, not avoidance: keep the core cool and most can train and live fully.",
        },
        {
          kind: "keypoints",
          title: "Cooling toolkit",
          items: [
            "Pre-cooling before exercise: cool drink, cool shower, or 20–30 minutes in air conditioning lowers the starting temperature and extends exercise tolerance",
            "During exercise: fans, cold water sips, spray bottles, cooling vests or neck wraps for the markedly heat-sensitive",
            "Choose the environment: air-conditioned gyms, morning or evening outdoor sessions, and hydrotherapy in COOL water (ideally below ~28–30 °C — many hydrotherapy pools are too warm for MS)",
            "Everyday life: lukewarm rather than hot showers, light layered clothing, shade and hats in summer",
            "Educate: heat-provoked symptom flares (Uhthoff's) are temporary conduction failures that reverse with cooling — not relapses, not damage",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Fever is the most potent 'heat wave' of all — during infections, expect a pseudo-relapse and treat the infection.",
            "Interval formats (work : rest) inherently limit heat build-up and suit heat-sensitive exercisers.",
          ],
        },
      ],
    },
    {
      slug: "balance-gait-spasticity",
      title: "Balance, Gait & Spasticity Management",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Over half of people with MS fall in any given year, and walking limitation is the impairment they most fear. Balance and gait respond to specific, progressive training; spasticity management protects range, comfort and function around that training.",
        },
        {
          kind: "steps",
          items: [
            { title: "Balance training", text: "Progressive challenge across systems: narrowing bases, compliant surfaces, head movement and visual challenge, reactive stepping, and dual-task practice. Address the sensory mix — proprioceptive loss makes vision-dependent balancers vulnerable in the dark." },
            { title: "Gait training", text: "Task-specific walking practice with interval structure to respect fatigability; treadmill and overground both work. Address foot drop with an AFO or functional electrical stimulation — both improve safety and walking economy in MS." },
            { title: "Ataxia strategies", text: "Practise slower, deliberate movement with external focus; proximal stability work; weighted aids help selected patients. Progress is slower — set honest expectations and keep practising: intensity still pays." },
            { title: "Spasticity management", text: "Daily prolonged stretching and positioning of adductors, hamstrings and calves; standing programmes; remove aggravators (infection, pain, tight clothing, constipation); liaise over medical options (baclofen, botulinum toxin) when spasms limit function or care." },
          ],
        },
        {
          kind: "warning",
          title: "Spasticity nuances",
          items: [
            "Some patients stand and walk ON their extensor tone — abolishing it pharmacologically can abolish the walking; titrate with function in view",
            "A sudden increase in spasticity is a symptom, not a behaviour: hunt the trigger (UTI, ingrown nail, pressure area, constipation) before escalating treatment",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Falls in MS cluster around dual-tasking, turning, and fatigue states — train exactly those conditions, not just quiet standing.",
          ],
        },
      ],
    },
    {
      slug: "exercise-prescription",
      title: "Exercise Prescription Blocks",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "A rounded MS programme includes aerobic, resistance and balance elements, scheduled at the best-energy time of day, with cooling and pacing built in. Interval formats are the MS-friendly default: they deliver training load while limiting heat and fatigability.",
        },
        {
          kind: "exercise",
          name: "Aerobic interval cycling",
          purpose: "Build cardiorespiratory fitness and reduce fatigue while limiting heat build-up.",
          position: "Upright or recumbent stationary bike (recumbent if balance or sensory loss makes mounting/stability an issue); fan on, water within reach.",
          execution: "After a gentle warm-up, alternate 2–3 minutes at a somewhat-hard effort (able to speak in short sentences, roughly RPE 12–14) with 1–2 minutes easy spinning.",
          dosage: "Start with 4–6 work intervals (15–20 minutes total), 2–3×/week, building towards 20–30 minutes of accumulated moderate work.",
          progression: "Lengthen work intervals, shorten recoveries, then raise intensity — one variable at a time, guided by the 24-hour fatigue response.",
          precautions: "Pre-cool if heat-sensitive; stop for symptom flare and cool down — expect any Uhthoff symptoms to settle with rest and cooling.",
        },
        {
          kind: "exercise",
          name: "Progressive resistance training (lower limb focus)",
          purpose: "Counter leg weakness — the strongest physical predictor of walking decline — and support transfers and stairs.",
          position: "Machines or free weights per ability: leg press, sit-to-stand variants, step-ups, calf raises; seated machines suit those with balance deficits.",
          execution: "Work at a load allowing 8–12 controlled repetitions with the last two feeling hard; full rest (1–2 minutes) between sets — MS muscles refatigue quickly.",
          dosage: "2 sessions/week, 1–3 sets of 8–12 reps per exercise, on non-consecutive days.",
          progression: "Add load when 12 reps become comfortable; progress from machines towards functional loaded tasks.",
          precautions: "Schedule on alternate days from hard aerobic work; monitor next-day fatigue and trim volume before abandoning the programme.",
        },
        {
          kind: "exercise",
          name: "Balance & dual-task circuit",
          purpose: "Reduce falls by training balance under the real conditions in which people with MS fall — narrow bases, head turns, distraction and fatigue.",
          position: "Circuit stations near support: tandem stance and walking, foam surface, stepping over obstacles, reaching outside the base, walking with head turns.",
          execution: "60–90 seconds per station at a difficulty producing occasional wobbles; add a cognitive task (counting backwards, conversation) at stations already mastered.",
          dosage: "10–15 minutes, 2–3×/week, ideally alongside the resistance session.",
          progression: "Eyes closed (with guarding), softer surfaces, faster head movement, carrying objects, unpredictable cues.",
          precautions: "Set up guarding and clear floor space; progress dual tasks only on a base of safe single-task performance.",
        },
        {
          kind: "keypoints",
          items: [
            "Morning sessions, interval formats, fans and fluids — the MS prescription signature",
            "Judge dose by the 24-hour response: next-day exhaustion means trim volume, not stop",
            "Sustainability beats intensity: the best programme is the one still running in 12 months",
          ],
        },
      ],
    },
    {
      slug: "other-demyelinating",
      title: "Other Demyelinating Disorders: the GBS Contrast",
      estMinutes: 2,
      difficulty: "Advanced",
      content: [
        {
          kind: "paragraph",
          text: "Not all demyelination is MS. Guillain-Barré syndrome (GBS) is the essential contrast: an acute immune-mediated demyelinating polyneuropathy of the PERIPHERAL nervous system, often triggered by a recent infection, causing rapidly ascending, fairly symmetrical weakness with areflexia over days to about four weeks.",
        },
        {
          kind: "table",
          headers: ["Feature", "Multiple sclerosis", "Guillain-Barré syndrome"],
          rows: [
            ["Site of demyelination", "Central (brain, optic nerves, spinal cord)", "Peripheral nerves and roots"],
            ["Onset & course", "Relapsing or progressive over years", "Acute — nadir usually within 4 weeks, then gradual recovery in most"],
            ["Weakness pattern", "UMN: spasticity, brisk reflexes, extensor plantars", "LMN: flaccid, ASCENDING (feet upward), reflexes lost"],
            ["Key danger", "Long-term disability accumulation", "Respiratory failure and autonomic instability in the acute phase"],
            ["Physio emphasis", "Long-term exercise, fatigue and falls management", "Acute monitoring, positioning and ROM; then graded reconditioning without overworking regenerating nerves"],
          ],
        },
        {
          kind: "redflags",
          items: [
            "Suspected or evolving GBS: monitor respiratory function closely — serial vital capacity, not just oxygen saturation; a falling VC precedes failure and may need ICU-level support",
            "Autonomic instability in acute GBS: labile blood pressure and arrhythmias — mobilise cautiously with monitoring",
            "Rapidly ascending weakness with swallowing or breathing difficulty in ANY patient is an emergency referral",
          ],
        },
        {
          kind: "pearls",
          items: [
            "In GBS rehabilitation, avoid exhausting eccentric-heavy overwork of freshly reinnervating muscles — 'little and often' graded activity, respecting fatigue, serves recovery better.",
            "Most people with GBS make a good recovery over months; fatigue commonly persists longest.",
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
            "Immune attack on CNS myelin → plaques disseminated in time and space; axon loss drives permanent disability",
            "Types: RRMS (~85% at onset) → many to SPMS; PPMS ~10–15% progressive from the start",
            "Symptom headliners: fatigue (#1), leg weakness, spasticity, ataxia, sensory change, optic neuritis, heat sensitivity (Uhthoff's)",
            "Assess: fatigue scale + diary, Berg/Mini-BESTest, Timed 25-Foot Walk PLUS a long walk test for fatigability",
            "Exercise is safe and beneficial — the old rest advice is obsolete; interval formats, morning scheduling, cooling strategies",
            "Energy conservation: prioritise, plan, pace, position — rests before the wall, not after",
            "Sudden worsening: screen for infection/heat (pseudo-relapse) before calling it a relapse",
            "GBS contrast: acute PERIPHERAL demyelination, ascending flaccid weakness — monitor vital capacity; respiratory failure is the acute danger",
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
      text: "In multiple sclerosis, the primary immune target is:",
      options: [
        "The neuromuscular junction",
        "Myelin and oligodendrocytes within the central nervous system",
        "Schwann cells of peripheral nerves",
        "The muscle fibres themselves",
      ],
      correctIndex: 1,
      explanation:
        "MS is an immune-mediated attack on CNS myelin and the oligodendrocytes that produce it, creating plaques in the brain, optic nerves and spinal cord. Schwann-cell (peripheral) demyelination is the territory of Guillain-Barré syndrome and CIDP; the neuromuscular junction is the target in myasthenia gravis.",
      difficulty: "Easy",
      tags: ["pathology", "anatomy"],
      sectionSlug: "pathophysiology",
    },
    {
      text: "Which mechanism best explains why MS symptoms often partially resolve after a relapse?",
      options: [
        "The immune system permanently switches off",
        "Inflammation settles and partial remyelination with sodium-channel redistribution restores conduction",
        "New neurons replace those lost",
        "Scar tissue conducts impulses better than myelin",
      ],
      correctIndex: 1,
      explanation:
        "Remission reflects resolution of acute inflammation and oedema plus partial remyelination and adaptive redistribution of sodium channels along demyelinated segments, restoring conduction. Repair is incomplete and repeated attacks cause cumulative axon loss — the substrate of permanent disability. CNS neurons are not meaningfully replaced.",
      difficulty: "Hard",
      tags: ["pathology"],
      sectionSlug: "pathophysiology",
    },
    {
      text: "Which disease course describes about 85% of people with MS at onset?",
      options: ["Primary progressive", "Secondary progressive", "Relapsing-remitting", "Clinically isolated syndrome in perpetuity"],
      correctIndex: 2,
      explanation:
        "About 85% present with relapsing-remitting MS: discrete attacks with full or partial recovery and stability in between. A substantial proportion later transition to secondary progressive MS. Primary progressive MS (~10–15%) worsens steadily from onset, typically presenting later with a progressive spastic gait pattern.",
      difficulty: "Easy",
      tags: ["pathology"],
      sectionSlug: "ms-types",
    },
    {
      text: "A patient with RRMS reports their usual leg weakness and blurred vision is much worse today; they also mention burning on urination and feeling feverish. The most likely explanation is:",
      options: [
        "A true relapse requiring urgent steroids",
        "A pseudo-relapse driven by urinary tract infection and raised temperature",
        "Progression to secondary progressive MS",
        "Exercise-induced permanent damage",
      ],
      correctIndex: 1,
      explanation:
        "Infection and fever transiently worsen conduction in demyelinated axons, re-amplifying old symptoms — a pseudo-relapse. The urinary symptoms and fever point to a UTI: treat the infection and expect the neurology to settle. A true relapse involves new or clearly worsening symptoms lasting over 24 hours in the ABSENCE of fever or infection.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "ms-types",
    },
    {
      text: "The most commonly reported and often most disabling symptom in MS is:",
      options: ["Tremor", "Fatigue", "Visual loss", "Bladder urgency"],
      correctIndex: 1,
      explanation:
        "Fatigue affects up to 80–90% of people with MS and is frequently ranked the single most disabling symptom — a disproportionate exhaustion with central (disease-related) and secondary contributors (deconditioning, sleep, mood, medication, heat). Because patients often do not volunteer it, assessment must ask about it directly.",
      difficulty: "Easy",
      tags: ["assessment", "pathology"],
      sectionSlug: "symptoms",
    },
    {
      text: "Uhthoff's phenomenon refers to:",
      options: [
        "Electric-shock sensations down the spine on neck flexion",
        "Temporary worsening of symptoms as body temperature rises, reversing with cooling",
        "Permanent relapse triggered by exercise",
        "Loss of reflexes in the legs",
      ],
      correctIndex: 1,
      explanation:
        "Uhthoff's phenomenon is transient symptom worsening (classically blurred vision, also weakness or fatigue) with raised core temperature — hot baths, weather, fever or vigorous exercise — caused by temperature-sensitive conduction failure in demyelinated axons. It is reversible and harmless. Shock-like sensations on neck flexion describe Lhermitte's sign.",
      difficulty: "Easy",
      tags: ["pathology", "assessment"],
      sectionSlug: "symptoms",
    },
    {
      text: "Which statement about exercise in MS reflects current evidence?",
      options: [
        "Exercise increases relapse rate and should be minimised",
        "Exercise is safe, does not trigger relapses, and improves fitness, walking, balance and fatigue",
        "Only stretching is safe; aerobic work is contraindicated",
        "Exercise benefits are permanent after a single programme",
      ],
      correctIndex: 1,
      explanation:
        "Trials and meta-analyses show aerobic, resistance and balance training are safe across disability levels, do not increase relapse rate, and improve fitness, strength, walking, balance, fatigue and mood. The historical rest advice produced deconditioning on top of the disease. Gains are use-dependent and reverse with detraining, so sustainability matters.",
      difficulty: "Easy",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "exercise-evidence",
    },
    {
      text: "Why are interval formats a sensible default for aerobic training in MS?",
      options: [
        "They are more fashionable than continuous training",
        "Work-rest cycling limits heat build-up and accommodates fatigability while still delivering training load",
        "They avoid raising the heart rate at all",
        "Continuous exercise is impossible in MS",
      ],
      correctIndex: 1,
      explanation:
        "Two MS-specific problems — heat accumulation (Uhthoff's) and rapid fatigability of demyelinated pathways — are both mitigated by alternating work bouts with recovery, during which the body sheds heat and conduction recovers. The total training stimulus is preserved. Continuous training is not impossible, but intervals widen the tolerable window for many.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "exercise-prescription",
    },
    {
      text: "A heat-sensitive patient wants to use hydrotherapy. The best advice is:",
      options: [
        "Any pool is fine — water always helps MS",
        "Use a cool pool (below roughly 28–30 °C); standard warm hydrotherapy pools can provoke Uhthoff-type worsening",
        "Hydrotherapy is contraindicated in MS",
        "Only hot spa pools are therapeutic",
      ],
      correctIndex: 1,
      explanation:
        "Water exercise suits MS well — buoyancy assists weak limbs and falls are impossible — but water temperature is the catch: many hydrotherapy pools are heated to 32–35 °C, enough to trigger heat-related symptom worsening. Cooler pools (below about 28–30 °C) let heat-sensitive patients train comfortably; symptoms provoked by warmth settle on cooling.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "precautions"],
      sectionSlug: "heat-management",
    },
    {
      text: "The '4 Ps' of energy conservation stand for:",
      options: [
        "Push, persist, power, progress",
        "Prioritise, plan, pace, position",
        "Prevent, protect, prescribe, prolong",
        "Pills, physio, pools, pacing",
      ],
      correctIndex: 1,
      explanation:
        "Energy conservation teaches patients to prioritise valued activities, plan the day and week around their energy curve, pace with planned rests taken before exhaustion, and use positioning and labour-saving strategies to cut the energy cost of tasks — reallocating limited energy to what matters most, alongside (not instead of) capacity-building exercise.",
      difficulty: "Easy",
      tags: ["management"],
      sectionSlug: "fatigue-energy",
    },
    {
      text: "Why should MS walking assessment include a longer test (2- or 6-minute walk) and not just a short timed walk?",
      options: [
        "Short tests are unsafe in MS",
        "MS walking often deteriorates with distance (motor fatigability), which a brief test misses",
        "Long tests measure spasticity directly",
        "Insurance requires six-minute documentation",
      ],
      correctIndex: 1,
      explanation:
        "Fatigability is a hallmark of demyelinated pathways: a patient may post a normal Timed 25-Foot Walk yet show marked slowing, foot drop or dragging after several minutes of walking. Longer tests expose this distance-dependent decline, better reflect community walking, and guide interventions such as pacing, AFO/FES and interval gait training.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "assessment",
    },
    {
      text: "Which fatigue assessment approach is most useful for guiding an MS management plan?",
      options: [
        "Asking 'are you tired?' at the start of the session",
        "A validated scale (e.g. Fatigue Severity Scale concept) combined with a one-to-two-week fatigue diary",
        "Measuring resting heart rate only",
        "Fatigue cannot be assessed",
      ],
      correctIndex: 1,
      explanation:
        "A validated scale quantifies severity and impact and allows tracking over time, while a diary maps the daily and weekly energy pattern — when the peaks and troughs fall, and which activities cost most. Together they convert 'I'm always exhausted' into a schedule: demanding tasks and training at peak times, planned rests before troughs.",
      difficulty: "Medium",
      tags: ["assessment", "management"],
      sectionSlug: "assessment",
    },
    {
      text: "A patient with MS stands and transfers by 'hanging on' their stiff extended legs. Their spasticity is abolished with high-dose oral baclofen. A likely functional consequence is:",
      options: [
        "Immediate improvement in standing",
        "Loss of the extensor tone they relied on to stand — transfers may worsen",
        "No change, as tone and function are unrelated",
        "Permanent cure of the spasticity",
      ],
      correctIndex: 1,
      explanation:
        "Some patients use extensor spasticity as a functional 'splint' that compensates for underlying weakness. Abolishing that tone pharmacologically can unmask the weakness and degrade standing and transfers. Spasticity treatment is therefore titrated against function — the goal is comfort, hygiene, sleep and movement, not a normal Ashworth score.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "management"],
      sectionSlug: "balance-gait-spasticity",
    },
    {
      text: "A patient's spasticity and spasms suddenly worsen over two days without new weakness. The FIRST clinical action is to:",
      options: [
        "Double the stretching programme",
        "Search for a noxious trigger — urinary infection, constipation, pressure area, ingrown toenail — before escalating antispasticity treatment",
        "Refer immediately for botulinum toxin",
        "Stop all exercise for a month",
      ],
      correctIndex: 1,
      explanation:
        "A sudden rise in spasticity is commonly driven by noxious afferent input below-the-radar: UTI is the classic culprit, with constipation, skin breakdown, nail problems and ill-fitting orthoses close behind. Finding and treating the trigger frequently resolves the escalation — faster and safer than layering on antispasticity medication.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "precautions"],
      sectionSlug: "balance-gait-spasticity",
    },
    {
      text: "Cerebellar ataxia in MS is best addressed by:",
      options: [
        "Avoiding all challenging movement to prevent embarrassment",
        "Practice of slower, deliberate movements, proximal stability work and — for selected patients — weighted aids, accepting slower progress",
        "High-dose stretching of the arms",
        "It cannot be influenced by any intervention",
      ],
      correctIndex: 1,
      explanation:
        "Ataxia is the most treatment-resistant MS impairment, but it is not untrainable: task practice at deliberately controlled speeds, proximal (trunk and girdle) stability work, external-focus strategies and sometimes weighting of limbs or aids improve function. Expectations and dosage differ from weakness training — progress is slower but real.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "balance-gait-spasticity",
    },
    {
      text: "Which feature distinguishes Guillain-Barré syndrome from multiple sclerosis?",
      options: [
        "GBS demyelinates central pathways; MS demyelinates peripheral nerves",
        "GBS causes acute ascending flaccid weakness with lost reflexes; MS causes upper motor neuron signs with a relapsing or progressive course over years",
        "GBS is heat-sensitive; MS is not",
        "GBS affects only sensation",
      ],
      correctIndex: 1,
      explanation:
        "GBS is an acute immune-mediated demyelinating polyneuropathy of the PERIPHERAL nervous system: rapidly ascending, fairly symmetrical flaccid weakness with areflexia, reaching its nadir usually within four weeks, often after an infection. MS is central, producing UMN signs (spasticity, brisk reflexes) over a relapsing or progressive course of years.",
      difficulty: "Medium",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "other-demyelinating",
    },
    {
      text: "In acute Guillain-Barré syndrome, the most important physiotherapy-relevant monitoring is:",
      options: [
        "Daily Berg Balance Scale",
        "Serial vital capacity, because progressive respiratory muscle weakness can require ventilation before oxygen saturation falls",
        "Weekly grip strength only",
        "Pain scores alone",
      ],
      correctIndex: 1,
      explanation:
        "Ascending weakness can involve the diaphragm and other respiratory muscles; a falling vital capacity is the early warning that precedes hypoxia and signals impending respiratory failure needing ICU-level support. Oxygen saturation stays deceptively normal until late. Autonomic instability (labile BP, arrhythmias) also warrants caution during handling and mobilisation.",
      difficulty: "Hard",
      tags: ["precautions", "assessment"],
      sectionSlug: "other-demyelinating",
    },
    {
      text: "A previously sedentary patient with mild RRMS wants to start training. The most appropriate initial prescription is:",
      options: [
        "Daily maximal-effort continuous running at midday",
        "Morning interval sessions on a bike 2–3×/week plus twice-weekly resistance training, with cooling strategies and progression guided by the 24-hour fatigue response",
        "Bed rest with breathing exercises",
        "A single weekly 3-hour session to save energy",
      ],
      correctIndex: 1,
      explanation:
        "This prescription applies the MS signature: schedule at the patient's best-energy time (usually morning), use interval aerobic formats and standard progressive resistance dosing, build in cooling and hydration, and titrate progression against next-day fatigue. Maximal midday continuous work maximises heat and fatigability; heroic single sessions produce boom-and-bust.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "exercise-prescription",
    },
    {
      text: "Which mechanism underlies the fact that axon LOSS, rather than demyelination itself, determines long-term disability in MS?",
      options: [
        "Axons conduct better without myelin",
        "Demyelinated segments can be repaired or compensated, but degenerated CNS axons are not replaced, so their loss is permanent",
        "Myelin regrows completely after every relapse",
        "Axon loss only occurs in GBS",
      ],
      correctIndex: 1,
      explanation:
        "Conduction through a demyelinated but intact axon can recover via remyelination and sodium-channel redistribution — hence remission. But chronically demyelinated axons are vulnerable and eventually degenerate, and the adult CNS cannot replace them. Accumulating axonal loss therefore tracks with irreversible, progressive disability — the rationale for early disease-modifying treatment.",
      difficulty: "Hard",
      tags: ["pathology"],
      sectionSlug: "pathophysiology",
    },
  ],
  flashcards: [
    { front: "What is the core pathology of MS?", back: "Immune-mediated demyelination of CNS axons (brain, optic nerves, spinal cord) with plaques disseminated in time and space; cumulative axon loss drives permanent disability." },
    { front: "Name the three main MS disease courses.", back: "Relapsing-remitting (~85% at onset), secondary progressive (follows RRMS in many), primary progressive (~10–15%, steady worsening from onset)." },
    { front: "Most common and most disabling MS symptom?", back: "Fatigue — up to 80–90% of patients; assess with a validated scale (e.g. FSS) plus a fatigue diary." },
    { front: "What is Uhthoff's phenomenon?", back: "Transient worsening of symptoms as core temperature rises (exercise, hot weather, fever, hot baths); reverses with cooling — temporary conduction failure, not new damage." },
    { front: "What is Lhermitte's sign?", back: "An electric-shock sensation down the spine (and sometimes limbs) on neck flexion — from demyelination in the cervical dorsal columns." },
    { front: "Is exercise safe in MS?", back: "Yes — it does not trigger relapses and improves fitness, strength, walking, balance, fatigue and mood. The historic 'rest' advice caused harmful deconditioning." },
    { front: "The 4 Ps of energy conservation?", back: "Prioritise, Plan, Pace, Position — spend limited energy on valued activities, with planned rests before exhaustion." },
    { front: "Key cooling strategies for heat-sensitive patients?", back: "Pre-cooling before exercise, fans and cold drinks during, cooling vests, morning sessions, air conditioning, cool (not warm) pools below ~28–30 °C." },
    { front: "Relapse vs pseudo-relapse?", back: "Relapse: new/worse symptoms > 24 h without fever/infection. Pseudo-relapse: old symptoms amplified by heat, infection (classically UTI) or fatigue — treat the trigger." },
    { front: "Why include a 2- or 6-minute walk test in MS assessment?", back: "To expose distance-dependent deterioration (motor fatigability) that short timed walks miss — it better reflects community walking." },
    { front: "GBS vs MS in one line each?", back: "GBS: acute peripheral demyelination — ascending flaccid weakness, areflexia, nadir ≤ 4 weeks, watch vital capacity. MS: chronic central demyelination — UMN signs, relapsing/progressive over years." },
    { front: "Why titrate spasticity treatment against function?", back: "Some patients stand and transfer on their extensor tone; abolishing it can unmask weakness and worsen function — target comfort and function, not a normal Ashworth score." },
  ],
};

export default topic;
