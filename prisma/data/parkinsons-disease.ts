import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "parkinsons-disease",
  title: "Parkinson's Disease",
  category: "Neurological",
  description:
    "Basal ganglia pathophysiology, cardinal signs, on/off medication phenomena, cueing and amplitude-based training, falls prevention and exercise prescription for Parkinson's disease.",
  difficulty: "Intermediate",
  estMinutes: 26,
  icon: "brain-circuit",
  keyTakeaways: [
    "Parkinson's disease results from degeneration of dopaminergic neurons in the substantia nigra, impairing the basal ganglia's ability to scale and automate movement.",
    "The cardinal motor signs are bradykinesia, rigidity, resting tremor and (later) postural instability — bradykinesia is required for diagnosis.",
    "Non-motor features (sleep disturbance, constipation, depression, cognitive change, hypotension) often precede and outweigh the motor signs.",
    "Time therapy for the levodopa \"on\" phase, and assess patients in both on and off states where possible.",
    "Movements are not just slow — they are small: hypokinesia underlies shuffling gait, micrographia and quiet speech.",
    "External cues (auditory, visual) bypass the faulty internal timing of the basal ganglia and can dramatically improve gait and freezing.",
    "Amplitude-based training (the LSVT BIG concept) recalibrates the perception of movement size — think BIG.",
    "Falls prevention combines balance training, freezing strategies, medication review and environmental modification; exercise is disease-management, not an optional extra.",
  ],
  sections: [
    {
      slug: "pathophysiology",
      title: "Basal Ganglia & Dopamine Pathophysiology",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Parkinson's disease (PD) is a progressive neurodegenerative condition caused primarily by loss of dopamine-producing neurons in the substantia nigra pars compacta, with alpha-synuclein aggregates (Lewy bodies) as the pathological hallmark. By the time motor symptoms appear, roughly 50–60% of these neurons have already been lost.",
        },
        { kind: "image", illustration: "nervous-system", caption: "The basal ganglia sit deep within the brain and modulate cortical motor output — dopamine loss disrupts their ability to select, scale and automate movement." },
        {
          kind: "paragraph",
          text: "The basal ganglia act as a gate and amplifier for movement. Dopamine facilitates the \"go\" (direct) pathway and inhibits the \"stop\" (indirect) pathway. When dopamine is depleted, the net output of the basal ganglia becomes excessively inhibitory: movements are hard to initiate, under-scaled in size, and lose their automaticity — well-learned sequences like walking, writing and speaking must be run under conscious control.",
        },
        { kind: "image", illustration: "brain", caption: "Deep within the brain, the substantia nigra of the midbrain supplies dopamine to the striatum — degeneration of this nigrostriatal pathway is the core lesion of Parkinson's disease." },
        {
          kind: "keypoints",
          title: "Functional consequences",
          items: [
            "Difficulty initiating movement (akinesia) and slowness (bradykinesia)",
            "Under-scaling of movement amplitude (hypokinesia): small steps, small handwriting, quiet voice",
            "Loss of automaticity — dual-tasking degrades gait markedly",
            "Internal cueing/timing fails while response to external cues is preserved — the key therapeutic loophole",
          ],
        },
        {
          kind: "pearls",
          items: [
            "PD patients do not have a movement execution problem so much as a movement scaling and initiation problem — the motor programmes are intact but under-energised.",
            "Preserved cortical and cerebellar routes explain paradoxical kinesia: a person who cannot walk may still catch a thrown ball or climb stairs over painted lines.",
          ],
        },
      ],
    },
    {
      slug: "cardinal-signs",
      title: "Cardinal Motor Signs",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "cards",
          items: [
            { title: "Bradykinesia", text: "Slowness of movement with progressive reduction in speed and amplitude on repetition (sequence effect). Essential for diagnosis. Test with rapid finger taps — watch for decrement, not just slowness.", icon: "timer" },
            { title: "Rigidity", text: "Velocity-independent resistance to passive movement in both directions — \"lead-pipe\", or \"cogwheel\" when tremor superimposes. Distinguish from spasticity, which is velocity-dependent.", icon: "lock" },
            { title: "Resting tremor", text: "4–6 Hz \"pill-rolling\" tremor most obvious at rest, suppressed by voluntary movement, worsened by stress and distraction. Absent in about 20–30% of patients.", icon: "waves" },
            { title: "Postural instability", text: "Impaired righting reactions and retropulsion — usually a later feature. Its early prominence suggests an alternative diagnosis (e.g. progressive supranuclear palsy).", icon: "alert-triangle" },
          ],
        },
        {
          kind: "paragraph",
          text: "Motor signs typically begin unilaterally and remain asymmetrical. The classic gait picture combines stooped posture, reduced arm swing (often the first sign), short shuffling steps, en-bloc turning and, in later disease, festination (involuntary hastening with shortening steps) and freezing of gait.",
        },
        {
          kind: "table",
          headers: ["Feature", "Parkinsonian rigidity", "Spasticity (UMN)"],
          rows: [
            ["Velocity dependence", "No — resistance similar at all speeds", "Yes — resistance increases with speed"],
            ["Direction", "Both directions (flexors and extensors)", "Direction-dependent (e.g. clasp-knife)"],
            ["Distribution", "Often asymmetric, proximal and axial involvement", "Antigravity pattern (arm flexors, leg extensors)"],
            ["Associated signs", "Bradykinesia, tremor, hypokinesia", "Hyperreflexia, clonus, Babinski sign"],
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Diagnosis requires bradykinesia plus rigidity and/or resting tremor",
            "Bradykinesia is slowness plus decrement — repetition makes it visible",
            "Early, severe falls or symmetrical onset should prompt review for atypical parkinsonism",
          ],
        },
      ],
    },
    {
      slug: "motor-nonmotor",
      title: "Motor vs Non-Motor Features",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "PD is far more than a movement disorder. Non-motor symptoms frequently precede diagnosis by years (constipation, REM-sleep behaviour disorder, loss of smell, depression) and often dominate quality of life in later disease. Physiotherapists must recognise them because they change how — and when — therapy is delivered.",
        },
        {
          kind: "cards",
          items: [
            { title: "Autonomic", text: "Orthostatic hypotension (worsened by levodopa — check standing BP before intensive standing work), constipation, urinary urgency, drooling.", icon: "heart" },
            { title: "Neuropsychiatric", text: "Depression and anxiety (very common and treatable), apathy, hallucinations, impulse-control disorders with dopamine agonists.", icon: "cloud-rain" },
            { title: "Cognitive", text: "Executive dysfunction early (planning, dual-tasking), with dementia risk rising in later disease — keep instructions single-channel and concrete.", icon: "brain" },
            { title: "Sleep & fatigue", text: "REM-sleep behaviour disorder, fragmented sleep, daytime somnolence and prominent fatigue — schedule therapy at the patient's best time of day.", icon: "moon" },
            { title: "Sensory & pain", text: "Loss of smell (early), musculoskeletal and dystonic pain, restless legs.", icon: "hand" },
            { title: "Speech & swallowing", text: "Hypophonia (quiet monotone voice), dysarthria and dysphagia — refer to speech and language therapy; aspiration risk rises in later disease.", icon: "mic" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Ask about mood, sleep and blood pressure symptoms at every review — patients rarely volunteer them and each has management options.",
            "Executive dysfunction means dual-task interference is not just a gait problem; keep early motor learning single-task, then train dual-tasking deliberately.",
          ],
        },
      ],
    },
    {
      slug: "medication-timing",
      title: "Medication & the On/Off Phenomenon",
      estMinutes: 2,
      difficulty: "Intermediate",
      content: [
        {
          kind: "paragraph",
          text: "Levodopa remains the most effective symptomatic treatment: it replaces dopamine and dramatically improves bradykinesia and rigidity. With disease progression, the response window narrows and fluctuates — patients cycle between \"on\" periods (medication working, movement freer, sometimes with involuntary dyskinesias) and \"off\" periods (medication effect gone, slow, stiff, freezing-prone). End-of-dose wearing-off is the most common pattern.",
        },
        {
          kind: "keypoints",
          title: "Why this matters for physiotherapy",
          items: [
            "Schedule active therapy and outcome measures for the patient's \"on\" phase — typically 30–60 minutes after a levodopa dose",
            "Assess falls and function in the \"off\" state too when planning safety at home: the off state is when many falls occur",
            "Record medication timing alongside every outcome measure — otherwise change scores are uninterpretable",
            "Dyskinesias (involuntary writhing movements) are an \"on\" phenomenon — do not confuse them with tremor",
          ],
        },
        {
          kind: "warning",
          title: "Medication-related cautions",
          items: [
            "Late or missed doses in hospital can cause severe off states and even swallowing compromise — protect medication timing fiercely",
            "Orthostatic hypotension is common and worsened by dopaminergic drugs — check lying/standing BP before intensive upright work",
            "Sudden withdrawal of dopaminergic medication is dangerous — flag any inability to take medication (e.g. fasting, dysphagia) to the medical team",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Always note \"tested ON\" or \"tested OFF\" in your documentation — a Berg score in the off state can differ by many points from the on state.",
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
          text: "Assessment focuses on gait, balance, transfers, falls history and freezing — the domains physiotherapy can change — interpreted against medication state and disease stage (Hoehn & Yahr provides a quick staging shorthand from unilateral disease to wheelchair/bed dependency).",
        },
        {
          kind: "steps",
          items: [
            { title: "Falls & freezing history", text: "Number, circumstances and injuries from falls in the past year; near-misses; fear of falling. Screen freezing with a specific question (\"Do your feet ever feel glued to the floor?\") and provoke it: turns, doorways, dual-tasks, tight spaces, gait initiation." },
            { title: "Timed Up and Go (TUG)", text: "Stand from a chair, walk 3 m, turn, return, sit. Times over ~12–14 seconds flag elevated falls risk; add a cognitive dual-task (counting backwards) to expose dual-task cost." },
            { title: "Gait analysis", text: "Step length, arm swing, speed (10 m walk test), turning strategy (count steps in a 360° turn), festination and freezing episodes. Observe with and without cues." },
            { title: "Balance & transfers", text: "Berg Balance Scale or Mini-BESTest (better for reactive postural control), retropulsion test with proper guarding, sit-to-stand ability, bed mobility, floor-rise ability." },
            { title: "Context", text: "Medication state and timing, cognition and mood, orthostatic symptoms, home environment and footwear, carer support, patient goals." },
          ],
        },
        {
          kind: "table",
          headers: ["Common freezing triggers", "Assessment/practice value"],
          rows: [
            ["Gait initiation (\"start hesitation\")", "Observe the first steps from standing"],
            ["Turning, especially in tight spaces", "Count steps to turn 360°; narrow-space turns"],
            ["Doorways and narrow passages", "Walk a route through doorways"],
            ["Dual-tasking (talking, carrying, phone)", "TUG-cognitive; walking while carrying a cup"],
            ["Time pressure and stress", "Note behaviour when hurried (e.g. answering a door)"],
            ["Reaching a destination (chair, lift)", "Watch the approach and the stop"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "Freezing rarely appears in a spacious, calm gym — you must deliberately provoke it with turns, doorways and dual-tasks to assess it honestly.",
            "A festinating patient accelerates with shrinking steps; a freezing patient's feet stop while the trunk keeps moving — both demand different immediate strategies but share falls risk.",
          ],
        },
      ],
    },
    {
      slug: "cueing-strategies",
      title: "Cueing Strategies",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Cueing is the signature physiotherapy technique in PD. Because the basal ganglia's internal cueing of movement fails while externally guided movement pathways remain intact, an external rhythm or target can bypass the deficit and immediately normalise step length and rhythm.",
        },
        { kind: "image", illustration: "gait-cycle", caption: "The gait cycle in PD shows shortened step length and prolonged double support — external cues restore step amplitude and rhythm, the two parameters most disrupted by festination and freezing." },
        {
          kind: "cards",
          items: [
            { title: "Auditory cues", text: "Metronome, music with a strong beat, or rhythmic counting set at or slightly above (~10%) baseline cadence. Best for regulating rhythm and reducing festination.", icon: "music" },
            { title: "Visual cues", text: "Transverse lines on the floor, laser-line devices on walkers, or stepping targets. Best for increasing step length and breaking freezing episodes.", icon: "eye" },
            { title: "Attentional/cognitive cues", text: "Internal self-instruction: \"take BIG steps\", \"heel first\", mental rehearsal before moving. Useful anywhere but costly under dual-task conditions.", icon: "message-square" },
            { title: "Somatosensory cues", text: "Rhythmic vibration or tapping (e.g. tapping the thigh to initiate stepping); weight-shift rocking to break a freeze.", icon: "hand" },
          ],
        },
        {
          kind: "steps",
          items: [
            { title: "Freezing rescue sequence (teach it before it is needed)", text: "Stop — don't fight the freeze. Stand tall and reset. Shift weight side to side. Then step BIG, on a cue (count \"1-2-step\", step over an imagined line, or use a laser line)." },
            { title: "Train cues in context", text: "Practise cued walking in the situations that actually trigger problems: doorways, turns, dual-tasks and outdoor routes — specificity applies to cueing too." },
            { title: "Plan for carry-over", text: "Fade continuous cues towards on-demand use, involve the carer, and set up the home environment (remove clutter that narrows passages; consider tape lines at known freezing spots)." },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Never pull a frozen patient forward — it provokes falls. Cue a weight shift and a big step instead.",
            "Trying to \"push through\" a freeze with faster small steps worsens it; the counter-intuitive fix is to stop, reset, and restart with one large cued step.",
          ],
        },
      ],
    },
    {
      slug: "amplitude-training",
      title: "Amplitude-Based Training (LSVT BIG Concept)",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "People with PD systematically under-scale movement but perceive their small movements as normal — a calibration problem, not just a motor one. Amplitude-based training (the concept behind LSVT BIG) retrains this: patients practise deliberately exaggerated, high-effort, large-amplitude movements with intensive repetition and feedback until \"big\" starts to feel normal. The speech equivalent (LSVT LOUD) applies the same logic to voice volume.",
        },
        {
          kind: "keypoints",
          title: "Core ingredients",
          items: [
            "Single target: amplitude — \"think BIG\" applied to every movement",
            "High effort (at least moderate-to-high perceived exertion) and high repetition",
            "Intensive dosing in the formal protocol: 4 sessions/week for 4 weeks plus daily home practice",
            "Recalibration through feedback: show patients how big \"big\" really needs to feel",
            "Carry-over into functional tasks: big steps, big turns, big reaching, big writing",
          ],
        },
        {
          kind: "exercise",
          name: "BIG walking (amplitude gait drill)",
          purpose: "Recalibrate step length and arm swing towards normal amplitude.",
          position: "Open walkway; floor lines or targets optional in early practice.",
          execution: "Walk with deliberately exaggerated long steps and large reciprocal arm swings — \"walk like you're crossing puddles\" — maintaining upright posture and heel-first contact. The therapist gives amplified feedback (\"bigger!\") and models the size.",
          dosage: "Bouts of 1–2 minutes × 5–8 within a session, daily home practice.",
          progression: "Add turns with wide arcs and big steps, then doorways, then dual-tasks; fade external feedback towards self-cueing (\"think BIG\").",
          precautions: "Guard closely at first — exaggerated gait challenges balance; check orthostatic symptoms before starting.",
        },
        {
          kind: "exercise",
          name: "Multidirectional large-amplitude reaching",
          purpose: "Train big, whole-body movement patterns combining trunk rotation, reaching and weight shift.",
          position: "Standing (or sitting for less able patients), targets set high, low and diagonally around the patient.",
          execution: "Reach with maximal amplitude to each target — full arm extension, trunk rotation and weight transfer — holding each end position for 2–3 seconds with high effort.",
          dosage: "8–10 reaches per direction × 2 sets, daily.",
          progression: "Increase reach distance and speed, add stepping to targets, hold light weights.",
          precautions: "Position a stable surface within reach; watch for retropulsion when reaching high.",
        },
        {
          kind: "pearls",
          items: [
            "Expect patients to report that big movements feel \"ridiculous\" or \"drunk\" — that sensation is the recalibration working; video feedback is persuasive.",
          ],
        },
      ],
    },
    {
      slug: "balance-falls",
      title: "Balance Training & Falls Prevention",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Around 60% of people with PD fall each year, and many fall repeatedly. Falls arise from the disease itself (postural instability, freezing, orthostatic hypotension), from dual-task overload, and from ordinary environmental hazards — so prevention must be multifactorial. Highly challenging, progressive balance training reduces fall risk and is a guideline-recommended core intervention.",
        },
        {
          kind: "exercise",
          name: "Progressive standing balance circuit",
          purpose: "Challenge the limits of stability, weight shifting and anticipatory postural control.",
          position: "Standing stations near a plinth or wall: narrow stance, tandem stance, single-leg stance, reaching outside the base, standing on foam.",
          execution: "Work at each station to the hardest level that can just be controlled — balance training only works when it is genuinely challenging. Include voluntary large weight shifts in all directions and controlled leaning to the limits of stability.",
          dosage: "20–30 minutes, 2–3×/week, progressed weekly.",
          progression: "Reduce hand support, narrow the base, add head turns, then add cognitive or manual dual-tasks (counting backwards, carrying objects).",
          precautions: "Guard appropriately — training must be challenging but supervised; time sessions for the on phase; check standing BP first.",
        },
        {
          kind: "exercise",
          name: "Stepping and turning practice",
          purpose: "Train the fall-prone situations directly: rapid steps, direction changes and turns.",
          position: "Open space with visual targets; later, realistic environments (doorways, corridors, kitchen circuit).",
          execution: "Practise voluntary rapid steps in all directions on command, wide-arc \"clock\" turns with big steps (avoid pivoting en bloc), and figure-of-eight walking. Rehearse the freezing rescue sequence within the circuit.",
          dosage: "10–15 minutes within balance sessions, 2–3×/week.",
          progression: "Add time pressure carefully, dual-tasks, narrower turning spaces and outdoor practice.",
          precautions: "Turning is the highest-risk moment — position yourself on the turn side; never rush a patient who freezes.",
        },
        {
          kind: "warning",
          title: "Multifactorial falls checklist",
          items: [
            "Medication: review timing, off-state falls and orthostatic hypotension with the medical team",
            "Environment: clear clutter and loose rugs, light the night route to the bathroom, consider grab rails",
            "Footwear: firm, thin-soled, well-fitting shoes; avoid backless slippers",
            "Bone health and fear of falling: flag for medical review; teach floor-rise techniques and consider alarm systems for those who fall",
          ],
        },
        {
          kind: "redflags",
          items: [
            "Recurrent unexplained falls very early in the disease — consider atypical parkinsonism (e.g. PSP) and refer back for specialist review",
            "Falls with loss of consciousness or significant head injury — medical assessment before resuming therapy",
            "Rapid deterioration in mobility over days — look for infection, medication error or another acute cause, not disease progression",
          ],
        },
      ],
    },
    {
      slug: "exercise-prescription",
      title: "Exercise Prescription",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Exercise is a cornerstone of PD management, with evidence that regular, sufficiently intense exercise improves motor symptoms, gait, balance and quality of life — and growing evidence that higher-intensity aerobic exercise may influence disease trajectory. Prescribe it with the same seriousness as medication.",
        },
        {
          kind: "table",
          headers: ["Component", "Prescription", "Notes"],
          rows: [
            ["Aerobic", "3×/week or more, 30+ minutes, moderate-to-vigorous intensity (e.g. treadmill, cycling, brisk walking)", "Higher intensities appear most beneficial where safe; monitor BP and fatigue"],
            ["Strength", "2–3×/week, major muscle groups, emphasising extensors (anti-gravity) and power (faster concentric work)", "Counters flexed posture and sarcopenia; power relates to function"],
            ["Balance", "2–3×/week, highly challenging and progressive", "The falls-prevention core; supervise appropriately"],
            ["Amplitude & flexibility", "Daily BIG-style practice; trunk rotation and extension mobility work", "Counters stooped, rotation-poor posture"],
            ["Dual-task training", "Integrate gradually once single-task gait is stable", "Train — don't just avoid — dual-task situations, matched to cognition"],
          ],
        },
        {
          kind: "exercise",
          name: "Aerobic interval training (stationary bike or treadmill)",
          purpose: "Cardiovascular conditioning at intensities associated with the greatest symptomatic benefit.",
          position: "Stationary bike (a good option when balance limits treadmill safety) or treadmill with rails/harness as needed.",
          execution: "After a 5-minute warm-up, alternate 1–3 minutes at somewhat-hard-to-hard effort (RPE 13–16) with equal easy recovery, for 20–30 minutes total; cool down 5 minutes.",
          dosage: "3×/week, on-phase timing.",
          progression: "Lengthen work intervals, raise intensity, progress towards 30 minutes of continuous moderate-to-vigorous work.",
          precautions: "Screen cardiovascular status and orthostatic hypotension; supervise treadmill use in anyone with freezing or postural instability.",
        },
        {
          kind: "keypoints",
          items: [
            "Exercise adherence beats exercise perfection — build a sustainable weekly mix the patient enjoys",
            "Group classes (dance, boxing-style, tai chi) add salience, rhythm and social reinforcement — all therapeutically active ingredients in PD",
            "Time sessions for the on phase and the patient's best time of day",
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
            "Dopaminergic loss in the substantia nigra → basal ganglia fail to scale and automate movement",
            "Cardinal signs: bradykinesia (essential, with decrement), rigidity (velocity-independent), resting tremor, later postural instability",
            "Non-motor features are universal — mood, sleep, cognition, orthostatic hypotension, constipation",
            "Treat in the \"on\" phase; document medication state with every measure; protect medication timing",
            "Assess: falls and freezing history, TUG (± dual-task), 10 m walk, Berg/Mini-BESTest, provoked freezing (turns, doorways, dual-task)",
            "Cueing bypasses the internal timing deficit: auditory for rhythm, visual for step length; freeze rescue = stop, reset, weight shift, BIG step",
            "Amplitude training: intensive, high-effort, exaggerated movements to recalibrate perceived size",
            "Prescribe aerobic + strength + highly challenging balance + amplitude work; falls prevention is multifactorial",
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
      text: "Degeneration of which structure is primarily responsible for the motor features of Parkinson's disease?",
      options: [
        "Cerebellar vermis",
        "Substantia nigra pars compacta",
        "Primary motor cortex",
        "Anterior horn cells of the spinal cord",
      ],
      correctIndex: 1,
      explanation:
        "PD is caused primarily by loss of dopaminergic neurons in the substantia nigra pars compacta, depriving the basal ganglia of dopamine. Roughly 50–60% of these neurons are lost before motor symptoms emerge. The cortex, cerebellum and anterior horn cells are structurally intact in idiopathic PD.",
      difficulty: "Easy",
      tags: ["anatomy", "pathology"],
      sectionSlug: "pathophysiology",
    },
    {
      text: "Which cardinal sign is essential for a diagnosis of Parkinson's disease?",
      options: ["Resting tremor", "Bradykinesia", "Postural instability", "Rigidity"],
      correctIndex: 1,
      explanation:
        "Diagnostic criteria require bradykinesia (slowness with progressive decrement of amplitude/speed), plus rigidity and/or resting tremor. Tremor is absent in 20–30% of patients, and prominent early postural instability actually suggests an atypical parkinsonian syndrome.",
      difficulty: "Easy",
      tags: ["assessment", "pathology"],
      sectionSlug: "cardinal-signs",
    },
    {
      text: "How is parkinsonian rigidity distinguished from spasticity on examination?",
      options: [
        "Rigidity increases with movement speed; spasticity does not",
        "Rigidity is velocity-independent and present in both movement directions; spasticity is velocity-dependent",
        "Rigidity only affects the legs; spasticity only affects the arms",
        "They are the same phenomenon with different names",
      ],
      correctIndex: 1,
      explanation:
        "Rigidity offers similar \"lead-pipe\" resistance regardless of movement speed and in both directions, sometimes with a cogwheel quality when tremor superimposes. Spasticity is velocity-dependent and follows an antigravity distribution with hyperreflexia — a distinct upper motor neuron sign.",
      difficulty: "Easy",
      tags: ["assessment", "pathology"],
      sectionSlug: "cardinal-signs",
    },
    {
      text: "The term \"hypokinesia\" in Parkinson's disease refers to:",
      options: [
        "Complete absence of movement",
        "Reduced amplitude of movement — small steps, small handwriting, quiet voice",
        "Involuntary writhing movements",
        "Rapid uncontrolled acceleration during walking",
      ],
      correctIndex: 1,
      explanation:
        "Hypokinesia is under-scaling of movement amplitude — the basis of shuffling gait, micrographia and hypophonia. Akinesia is difficulty initiating movement, dyskinesias are involuntary movements (usually a levodopa \"on\" phenomenon), and festination is the hastening gait pattern.",
      difficulty: "Easy",
      tags: ["pathology"],
      sectionSlug: "pathophysiology",
    },
    {
      text: "A patient reports being mobile and independent an hour after each levodopa dose but slow, stiff and freezing-prone before the next dose is due. This pattern is best described as:",
      options: [
        "Disease progression over the day",
        "End-of-dose wearing-off with on/off fluctuation",
        "Levodopa-induced dyskinesia",
        "Orthostatic hypotension",
      ],
      correctIndex: 1,
      explanation:
        "Cycling between mobile \"on\" periods after dosing and impaired \"off\" periods as the dose wears off is the classic wearing-off fluctuation of longer-term levodopa therapy. Dyskinesias are involuntary movements during the on phase, not slowness before doses.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "medication-timing",
    },
    {
      text: "When should active physiotherapy sessions generally be scheduled for a person with fluctuating Parkinson's disease?",
      options: [
        "First thing in the morning before any medication",
        "During the levodopa \"on\" phase, typically 30–60 minutes after a dose",
        "Immediately before the next dose when the patient is most \"off\"",
        "Timing is irrelevant to therapy outcomes",
      ],
      correctIndex: 1,
      explanation:
        "Motor performance and learning are best in the on phase, so active training is scheduled for it. The off state is still assessed deliberately (falls often happen then), but training and outcome measures are usually timed on — and the medication state must always be documented.",
      difficulty: "Easy",
      tags: ["management", "assessment"],
      sectionSlug: "medication-timing",
    },
    {
      text: "Why must lying and standing blood pressure be checked before intensive upright exercise in PD?",
      options: [
        "Hypertension is a cardinal sign of PD",
        "Orthostatic hypotension is common in PD and worsened by dopaminergic medication, creating syncope and falls risk",
        "Blood pressure measurement improves tremor",
        "Levodopa always causes dangerous hypertension on standing",
      ],
      correctIndex: 1,
      explanation:
        "Autonomic dysfunction causes orthostatic hypotension in many people with PD, and dopaminergic drugs exaggerate it. A significant postural drop can cause light-headedness, syncope and falls during standing work, so screening and monitoring are essential precautions.",
      difficulty: "Medium",
      tags: ["precautions", "assessment"],
      sectionSlug: "motor-nonmotor",
    },
    {
      text: "Which assessment approach gives the most honest picture of freezing of gait?",
      options: [
        "Straight-line walking in a spacious, quiet gym",
        "Deliberately provoking it with turns, doorways, tight spaces, gait initiation and dual-tasks",
        "Asking the carer to describe the gait pattern only",
        "Measuring grip strength",
      ],
      correctIndex: 1,
      explanation:
        "Freezing is context-dependent and rarely appears during open, unhurried straight-line walking. Valid assessment reproduces its known triggers — turning, doorways, narrow spaces, starting to walk, dual-tasking and time pressure — alongside a specific screening question about feet feeling \"glued to the floor\".",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "assessment",
    },
    {
      text: "In the Timed Up and Go test, what does adding a cognitive task (e.g. counting backwards) reveal in PD?",
      options: [
        "Cardiovascular endurance",
        "The dual-task cost — deterioration in mobility when automaticity is lost and attention is divided",
        "Peripheral nerve conduction speed",
        "Nothing — dual-tasking does not affect gait in PD",
      ],
      correctIndex: 1,
      explanation:
        "Because basal ganglia dysfunction robs gait of its automaticity, walking in PD consumes attention. A concurrent cognitive task exposes this: the TUG time lengthens and freezing may emerge. Dual-task cost predicts real-world falls better than single-task performance alone.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "assessment",
    },
    {
      text: "Why do external cues (metronome beats, floor lines) improve parkinsonian gait so effectively?",
      options: [
        "They strengthen the leg muscles directly",
        "They bypass the defective internal cueing of the basal ganglia by recruiting externally driven movement pathways that remain intact",
        "They increase dopamine production in the substantia nigra",
        "They distract the patient from walking",
      ],
      correctIndex: 1,
      explanation:
        "The basal ganglia normally provide internal timing and scaling cues for automatic movement — this fails in PD. Externally guided movement uses relatively preserved cortical and cerebellar routes, so an external rhythm or visual target can immediately normalise cadence and step length. This is the neurological basis of cueing therapy.",
      difficulty: "Hard",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "cueing-strategies",
    },
    {
      text: "Which cue type is generally most effective for increasing step length in a patient with shuffling gait?",
      options: [
        "Visual cues such as transverse floor lines or stepping targets",
        "Loud verbal commands to hurry up",
        "Cold-water immersion",
        "Reducing lighting to improve focus",
      ],
      correctIndex: 0,
      explanation:
        "Visual-spatial cues (lines to step over, targets, laser lines) specify amplitude, making them the cue of choice for step length and for breaking freezes; auditory rhythmic cues chiefly regulate cadence and rhythm. Hurrying a person with PD typically shortens steps and provokes festination or freezing.",
      difficulty: "Medium",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "cueing-strategies",
    },
    {
      text: "A patient freezes in a doorway. Which immediate strategy is correct?",
      options: [
        "Pull them firmly forward by the hand to keep momentum",
        "Tell them to take faster, smaller steps to push through",
        "Cue them to stop, stand tall, shift weight side to side, then take one big cued step",
        "Ask them to close their eyes and try again",
      ],
      correctIndex: 2,
      explanation:
        "Pulling a frozen patient or urging faster small steps both provoke falls — the feet are \"glued\" while the trunk travels. The rescue sequence is: stop and reset posture, shift weight laterally to unload a leg, then initiate one large, cued step (count, imagined line, or laser cue).",
      difficulty: "Easy",
      tags: ["management", "precautions"],
      sectionSlug: "cueing-strategies",
    },
    {
      text: "What is the central premise of amplitude-based training (the LSVT BIG concept)?",
      options: [
        "Movements should be practised as fast as possible regardless of size",
        "Patients under-scale movement but perceive it as normal, so intensive practice of exaggerated large movements recalibrates perceived amplitude",
        "Passive stretching restores normal movement size",
        "Small precise movements should be practised before large ones",
      ],
      correctIndex: 1,
      explanation:
        "PD creates a calibration error: small movements feel normal to the patient. Amplitude training drives high-effort, deliberately exaggerated movements with intensive repetition and feedback until larger amplitudes are recalibrated as \"normal\". Patients typically report big movements feel absurd at first — evidence of the miscalibration.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "pathology"],
      sectionSlug: "amplitude-training",
    },
    {
      text: "The formal LSVT BIG protocol is delivered at approximately what intensity?",
      options: [
        "One session per month for a year",
        "Four sessions per week for four consecutive weeks, plus daily home practice",
        "A single education session with a leaflet",
        "Two sessions per year at annual review",
      ],
      correctIndex: 1,
      explanation:
        "The standardised protocol is 16 one-hour sessions — 4 per week over 4 weeks — with daily home exercises and functional carry-over tasks. The intensity and repetition are considered active ingredients, consistent with plasticity principles, although pragmatic modified schedules are also used clinically.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "amplitude-training",
    },
    {
      text: "Approximately what proportion of people with Parkinson's disease fall each year?",
      options: ["5%", "20%", "60%", "100%"],
      correctIndex: 2,
      explanation:
        "Around 60% of people with PD fall annually and a large share fall recurrently — among the highest rates of any neurological condition. Postural instability, freezing, off-state deterioration, orthostatic hypotension and dual-task overload all contribute, which is why prevention must be multifactorial.",
      difficulty: "Hard",
      tags: ["assessment", "pathology"],
      sectionSlug: "balance-falls",
    },
    {
      text: "Which principle makes balance training effective for falls prevention in PD?",
      options: [
        "It must be highly challenging, progressive and sufficiently dosed — comfortable balance work changes little",
        "It should always be performed seated for safety",
        "It works only if performed on unstable surfaces with eyes closed from day one",
        "Balance cannot be trained in PD",
      ],
      correctIndex: 0,
      explanation:
        "Evidence supports balance training that genuinely challenges the limits of stability, progressed over time and delivered at adequate dose, ideally with supervision matched to risk. Training that never approaches the patient's limits does not drive adaptation; equally, difficulty must be built progressively, not maximally from the start.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "balance-falls",
    },
    {
      text: "Recurrent unexplained falls within the first year of parkinsonian symptoms should make you consider:",
      options: [
        "Normal idiopathic PD progression",
        "An atypical parkinsonian syndrome such as progressive supranuclear palsy — refer for specialist review",
        "Poor footwear as the only cause",
        "That the patient is exaggerating",
      ],
      correctIndex: 1,
      explanation:
        "In idiopathic PD, postural instability and falls are typically later features. Early, prominent falls — especially backwards — are a red flag for atypical parkinsonism such as PSP, which carries different prognosis and management. Flag the pattern to the medical team rather than assuming typical PD.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "precautions"],
      sectionSlug: "balance-falls",
    },
    {
      text: "Which exercise prescription best reflects current guidance for Parkinson's disease?",
      options: [
        "Gentle stretching only, avoiding exertion",
        "Aerobic training 3+×/week at moderate-to-vigorous intensity, strength work 2–3×/week, highly challenging balance training, plus amplitude practice",
        "Bed rest during off periods and no structured exercise",
        "Balance training only, since falls are the main problem",
      ],
      correctIndex: 1,
      explanation:
        "Guidelines recommend a multi-component programme: moderate-to-vigorous aerobic work (with evidence favouring meaningful intensity), progressive strengthening emphasising extensors and power, highly challenging balance training, and amplitude/flexibility work — timed for the on phase and sustained long-term as core disease management.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "exercise-prescription",
    },
    {
      text: "In hospital, a patient with PD misses two levodopa doses while fasting for a procedure. Why does this matter urgently?",
      options: [
        "It does not matter — doses can simply be doubled later",
        "Missed doses can cause a severe off state with immobility and swallowing compromise; abrupt dopaminergic withdrawal is dangerous",
        "Levodopa only affects tremor, which is cosmetic",
        "Fasting improves levodopa absorption, so symptoms will improve",
      ],
      correctIndex: 1,
      explanation:
        "Medication timing is critical in PD: missed or delayed doses can precipitate severe off states with immobility, falls, aspiration-prone swallowing and distress, and abrupt withdrawal of dopaminergic therapy risks serious complications. Physiotherapists should advocate fiercely for on-time medication and flag any interruption to the medical team.",
      difficulty: "Hard",
      tags: ["precautions", "management"],
      sectionSlug: "medication-timing",
    },
  ],
  flashcards: [
    { front: "Primary pathology of Parkinson's disease?", back: "Progressive loss of dopaminergic neurons in the substantia nigra pars compacta, with Lewy body (alpha-synuclein) deposition; ~50–60% lost before motor symptoms appear." },
    { front: "The four cardinal motor signs of PD?", back: "Bradykinesia (essential for diagnosis), rigidity, resting tremor (4–6 Hz pill-rolling), and postural instability (usually later)." },
    { front: "Rigidity vs spasticity?", back: "Rigidity: velocity-independent, both directions, lead-pipe/cogwheel. Spasticity: velocity-dependent, antigravity pattern, with hyperreflexia." },
    { front: "What is hypokinesia and its everyday signatures?", back: "Under-scaled movement amplitude — shuffling steps, micrographia (small handwriting) and hypophonia (quiet voice)." },
    { front: "What are on/off phenomena?", back: "Fluctuation between mobile \"on\" periods when levodopa is working (sometimes with dyskinesias) and impaired \"off\" periods as it wears off; schedule therapy for the on phase and document medication state." },
    { front: "Name five common freezing-of-gait triggers.", back: "Gait initiation, turning, doorways/narrow spaces, dual-tasking, time pressure/stress (also approaching a destination)." },
    { front: "Freezing rescue sequence?", back: "Stop and reset posture → shift weight side to side → take one BIG step on a cue (count, line or laser). Never pull the patient forward." },
    { front: "Best cue types for rhythm vs step length?", back: "Auditory/rhythmic cues (metronome, music) regulate cadence; visual-spatial cues (floor lines, targets, laser) increase step length and break freezes." },
    { front: "Core idea of LSVT BIG?", back: "Recalibrate under-scaled movement by intensive, high-effort practice of exaggerated large-amplitude movements — 4 sessions/week × 4 weeks plus daily home practice in the formal protocol." },
    { front: "Key physiotherapy assessment battery for PD?", back: "Falls and freezing history, TUG (± cognitive dual-task), 10 m walk test, Berg or Mini-BESTest, provoked freezing observation, lying/standing BP." },
    { front: "Annual fall rate in PD?", back: "Roughly 60% of people with PD fall each year; many are recurrent fallers — falls prevention must be multifactorial." },
    { front: "Exercise prescription pillars in PD?", back: "Moderate-to-vigorous aerobic 3+×/week, strength 2–3×/week (extensors, power), highly challenging balance training, daily amplitude/flexibility work, graded dual-task training." },
  ],
};

export default topic;
