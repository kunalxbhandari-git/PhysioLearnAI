import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "gait-assessment",
  title: "Gait Analysis & Assessment",
  category: "Clinical Assessment",
  description:
    "Understand the gait cycle, spatiotemporal parameters and joint kinematics, recognise the classic pathological patterns, and measure walking with validated outcome tools.",
  difficulty: "Intermediate",
  estMinutes: 28,
  icon: "footprints",
  keyTakeaways: [
    "One gait cycle runs from initial contact of one foot to the next initial contact of the same foot: about 60% stance and 40% swing at comfortable speed.",
    "The cycle divides into 8 sub-phases: initial contact, loading response, midstance, terminal stance, pre-swing, initial swing, mid-swing and terminal swing.",
    "Normal comfortable walking speed in healthy adults is roughly 1.2–1.4 m/s, with a cadence around 100–120 steps per minute.",
    "Gait speed is called the 'sixth vital sign' — speeds below about 1.0 m/s predict adverse health outcomes in older adults.",
    "Each classic pathological pattern maps to an impairment: antalgic to pain, Trendelenburg to hip abductor weakness, steppage to foot drop, circumduction to functional leg length problems.",
    "Observational gait analysis is systematic: one joint, one plane, one phase at a time — never 'just watch them walk'.",
    "Core outcome measures: 10-metre walk test (speed), 6-minute walk test (endurance), Timed Up and Go (mobility and falls risk, with cutoffs around 12–13.5 s).",
    "Walking aids are prescribed with purpose: correct height (wrist crease/greater trochanter, ~20–30° elbow flexion) and a cane held in the hand opposite the affected leg.",
  ],
  sections: [
    {
      slug: "gait-cycle-phases",
      title: "The Gait Cycle & Its Phases",
      estMinutes: 4,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Walking is a cyclic activity, so it is analysed as a cycle: from initial contact of one foot to the next initial contact of the same foot. At comfortable speed the cycle divides into roughly 60% stance (foot on the ground) and 40% swing (foot in the air). Because both feet spend part of the cycle on the ground together, there are two periods of double support, each about 10% of the cycle — double support shrinks as speed rises and disappears entirely at the transition to running.",
        },
        { kind: "image", illustration: "gait-cycle", caption: "The gait cycle: stance (60%) and swing (40%) with the eight sub-phases from initial contact to terminal swing." },
        {
          kind: "steps",
          items: [
            { title: "1. Initial contact (0–2%)", text: "The foot — normally the heel — strikes the ground. The hip is flexed about 30°, the knee near extension, the ankle neutral. Begins the first rocker (heel rocker)." },
            { title: "2. Loading response (2–12%)", text: "Weight transfers rapidly onto the limb. The knee flexes to about 15–20° as a shock absorber, controlled eccentrically by the quadriceps; the ankle plantarflexes to foot-flat, controlled eccentrically by the dorsiflexors." },
            { title: "3. Midstance (12–31%)", text: "The body advances over the stationary foot (ankle rocker). The contralateral limb is in swing, so the stance-side hip abductors work hard to keep the pelvis level." },
            { title: "4. Terminal stance (31–50%)", text: "The heel rises and the body moves ahead of the foot (forefoot rocker). The hip reaches its peak extension (~10–20°) and the ankle its peak dorsiflexion (~10°) before push-off begins." },
            { title: "5. Pre-swing (50–62%)", text: "Rapid ankle plantarflexion (to ~15–20°) as the calf pushes off, the knee flexes to about 40°, and weight transfers to the other limb — the second double-support period." },
            { title: "6. Initial swing (62–75%)", text: "The foot leaves the ground; hip and knee flex to shorten the limb and begin clearing the toe." },
            { title: "7. Mid-swing (75–87%)", text: "The limb passes the stance leg. Knee flexion peaks near 60–65°; the ankle dorsiflexes to neutral for toe clearance — the critical moment revealed by foot drop." },
            { title: "8. Terminal swing (87–100%)", text: "The knee extends fully in preparation for contact while the hamstrings decelerate the limb eccentrically; the ankle holds neutral." },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Cycle = initial contact to same-foot initial contact; stance 60%, swing 40%",
            "Two double-support periods of ~10% each; double support disappears when running begins",
            "Stance sub-phases: initial contact, loading response, midstance, terminal stance, pre-swing",
            "Swing sub-phases: initial, mid- and terminal swing",
          ],
        },
      ],
    },
    {
      slug: "spatiotemporal-parameters",
      title: "Spatiotemporal Parameters",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Spatiotemporal parameters are the measurable 'numbers' of gait — simple to collect with a stopwatch and a marked walkway, yet powerful for tracking change and predicting outcomes.",
        },
        {
          kind: "table",
          headers: ["Parameter", "Definition", "Typical adult value"],
          rows: [
            ["Step length", "Distance from one foot's initial contact to the other foot's initial contact", "~70–80 cm"],
            ["Stride length", "Distance between successive initial contacts of the SAME foot (= two steps)", "~1.4–1.6 m"],
            ["Cadence", "Steps per minute", "~100–120 steps/min"],
            ["Comfortable walking speed", "Distance ÷ time at self-selected pace", "~1.2–1.4 m/s"],
            ["Step width (base of support)", "Mediolateral distance between heel centres", "~8–10 cm"],
            ["Double support time", "Both feet on the ground", "~20% of cycle total (2 × 10%)"],
          ],
        },
        {
          kind: "paragraph",
          text: "Speed = cadence × step length (walking faster means taking longer steps, quicker steps, or both). Symmetry matters as much as magnitude: comparing left and right step length and single-support time exposes unilateral problems that averages hide.",
        },
        {
          kind: "pearls",
          items: [
            "Gait speed is the 'sixth vital sign': below ~1.0 m/s flags increased risk of adverse outcomes in older adults, and roughly 1.1–1.2 m/s is often needed to cross signalised pedestrian crossings comfortably.",
            "A widened step width suggests a balance strategy (ataxia, fear of falling); a narrow or crossing pattern (scissoring) suggests adductor spasticity.",
            "An elderly patient who slows down mainly by shortening steps and lengthening double support is showing a cautious, balance-driven gait — treat the balance, not just the speed.",
          ],
        },
      ],
    },
    {
      slug: "joint-kinematics",
      title: "Joint Kinematics Through the Cycle",
      estMinutes: 4,
      difficulty: "Intermediate",
      content: [
        {
          kind: "paragraph",
          text: "Knowing the normal sagittal-plane angles at each phase lets you name deviations precisely — 'reduced knee flexion in loading response' is a finding you can treat; 'walks funny' is not.",
        },
        {
          kind: "table",
          headers: ["Phase", "Hip", "Knee", "Ankle"],
          rows: [
            ["Initial contact", "~30° flexion", "0–5° flexion", "Neutral"],
            ["Loading response", "Flexion reducing", "15–20° flexion (shock absorption)", "5–10° plantarflexion to foot-flat"],
            ["Midstance", "Moving to neutral", "Extending towards ~5°", "Dorsiflexing as tibia advances"],
            ["Terminal stance", "10–20° extension (peak)", "Near full extension", "~10° dorsiflexion (peak)"],
            ["Pre-swing", "Moving to neutral", "~40° flexion", "15–20° plantarflexion (push-off)"],
            ["Mid-swing", "~25–30° flexion", "Peak ~60–65° flexion", "Neutral (clearance)"],
            ["Terminal swing", "~30° flexion held", "Extending to ~0–5°", "Neutral"],
          ],
        },
        {
          kind: "cards",
          items: [
            { title: "Quadriceps", text: "Work eccentrically in loading response to control knee flexion — weakness produces a knee that collapses, or a compensatory knee hyperextension thrust.", icon: "dumbbell" },
            { title: "Hip abductors", text: "Stabilise the pelvis in single support (midstance) — weakness produces the Trendelenburg pattern.", icon: "move" },
            { title: "Plantarflexors", text: "Control tibial advancement eccentrically in stance, then power push-off in pre-swing — weakness shortens the contralateral step and flattens push-off.", icon: "trending-up" },
            { title: "Dorsiflexors", text: "Lower the foot eccentrically after initial contact (preventing foot slap) and hold the ankle neutral in swing (clearance) — weakness gives foot slap plus steppage.", icon: "corner-right-up" },
            { title: "Hamstrings", text: "Decelerate the swinging limb eccentrically in terminal swing — a common site of sprinting injury for the same reason.", icon: "rewind" },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Peak knee flexion (~60–65°) occurs in initial-to-mid swing, for clearance",
            "Peak hip extension and peak dorsiflexion both occur in terminal stance",
            "Much of gait muscle work is eccentric — control, not propulsion",
            "Roughly 40° of total knee excursion problems show first at loading response and mid-swing",
          ],
        },
      ],
    },
    {
      slug: "determinants-efficiency",
      title: "Determinants of Efficient Gait",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Efficient walking minimises the excursion of the body's centre of mass (COM), which normally traces a smooth sinusoid of only about 4–5 cm vertically and laterally. The classic 'determinants of gait' describe the mechanisms that flatten and smooth this path; although the original model has been refined, the concepts remain clinically useful for reasoning about energy cost.",
        },
        {
          kind: "list",
          items: [
            "Pelvic rotation in the horizontal plane lengthens the step without extra COM drop",
            "Pelvic list (slight drop on the swing side) shaves the COM peak in midstance",
            "Stance-phase knee flexion (~15–20°) absorbs the COM peak",
            "Coordinated ankle rockers (heel, ankle, forefoot) smooth the transitions",
            "Physiological knee-ankle coupling smooths COM pathway at weight transfers",
            "Narrow step width limits lateral COM sway",
          ],
        },
        {
          kind: "paragraph",
          text: "Every pathological gait raises energy cost by exaggerating COM movement — vaulting, circumduction and hip hiking all lift or swing mass that normal mechanics would keep low. This is why patients with gait deviations fatigue quickly, and why restoring near-normal mechanics (or providing an aid) reduces the oxygen cost of walking.",
        },
        {
          kind: "pearls",
          items: [
            "Think in terms of COM economy: ask 'what is this deviation doing to the centre of mass, and what impairment makes it necessary?' — the deviation is usually the solution, not the problem.",
          ],
        },
      ],
    },
    {
      slug: "pathological-patterns",
      title: "Common Pathological Gait Patterns",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Each classic pattern is a recognisable strategy around an underlying impairment. Learn the pattern, but always name the impairment behind it — that is what physiotherapy treats.",
        },
        {
          kind: "cards",
          items: [
            { title: "Antalgic gait", text: "Pain-avoidance pattern: shortened stance time on the painful limb with a correspondingly quick, short contralateral step. The most common abnormal gait — cause ranges from OA to fracture.", icon: "frown" },
            { title: "Trendelenburg gait", text: "Hip abductor weakness: the contralateral pelvis drops in single support, with a compensatory lateral trunk lean TOWARDS the weak stance side. Bilateral involvement produces a waddling gait.", icon: "move" },
            { title: "Circumduction", text: "The limb swings in a lateral arc — used when the leg is functionally too long to clear: stiff knee, extensor spasticity, foot drop or true leg length differences.", icon: "rotate-cw" },
            { title: "Steppage (high-stepping)", text: "Foot drop from dorsiflexor weakness (e.g. common peroneal nerve palsy): exaggerated hip and knee flexion lift the dropped foot to clear it, often with a slap at contact.", icon: "arrow-up" },
            { title: "Hemiplegic gait", text: "Post-stroke pattern: extensor synergy with equinus foot, stiff extended knee and circumduction of the affected limb; arm often held flexed. Speed and symmetry are both reduced.", icon: "activity" },
            { title: "Parkinsonian gait", text: "Hypokinetic pattern: short shuffling steps, reduced arm swing, flexed posture, festination (involuntary quickening with forward-leaning), difficulty initiating and turning en bloc; freezing in doorways.", icon: "pause" },
            { title: "Ataxic gait", text: "Cerebellar or sensory ataxia: wide-based, irregular, unsteady steps with variable timing and placement. Sensory ataxia worsens markedly with eyes closed or in the dark; cerebellar ataxia does not improve with vision.", icon: "shuffle" },
          ],
        },
        {
          kind: "table",
          headers: ["Observation", "Pattern", "Underlying impairment"],
          rows: [
            ["Short stance on one side, hurried opposite step", "Antalgic", "Pain in the loaded limb"],
            ["Pelvis drops on swing side, trunk leans to stance side", "Trendelenburg", "Stance-side hip abductor weakness (e.g. gluteus medius, superior gluteal nerve)"],
            ["Leg swings out in an arc", "Circumduction", "Functionally long limb: stiff knee, spasticity, foot drop"],
            ["High knee lift with foot slap", "Steppage", "Dorsiflexor weakness / common peroneal palsy"],
            ["Short shuffling steps that speed up", "Festination (parkinsonian)", "Basal ganglia hypokinesia"],
            ["Wide base, irregular placement", "Ataxic", "Cerebellar or proprioceptive deficit"],
          ],
        },
        {
          kind: "warning",
          title: "Pattern-reading cautions",
          items: [
            "Compensations can dominate the picture: a vaulting sound-side push-off may be the most visible feature of a contralateral stiff knee.",
            "The lateral trunk lean of compensated Trendelenburg is towards the WEAK side — students frequently reverse this.",
            "Sudden gait change in an older adult is a red flag in itself: consider neurological events, fracture, infection or medication effects before labelling the pattern.",
          ],
        },
      ],
    },
    {
      slug: "observational-analysis",
      title: "Observational Gait Analysis Framework",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Instrumented laboratories quantify gait precisely, but the clinic relies on structured observation. Unstructured 'watching' has poor reliability; a systematic framework makes it a legitimate assessment tool — video on a phone, played at slow speed, improves it further.",
        },
        {
          kind: "steps",
          items: [
            { title: "1. Set up the observation", text: "Adequate walkway (ideally 6–10 m), suitable clothing to see the joints, patient's usual footwear and aid. Observe from the side (sagittal plane) and from front/behind (frontal plane), over several passes." },
            { title: "2. Get the global picture first", text: "Speed, symmetry, rhythm, arm swing, obvious deviations, confidence and safety. Does the pattern match a classic type?" },
            { title: "3. Analyse systematically", text: "One joint, one plane, one phase at a time. Convention: start distally (foot/ankle) and work up (knee, hip, pelvis, trunk), covering stance then swing on each side." },
            { title: "4. Name deviations against normal", text: "Describe each finding against expected values, e.g. 'no heel-first contact', 'absent knee flexion in loading response', 'pelvic drop in right midstance'." },
            { title: "5. Hypothesise the impairment", text: "Link each deviation to candidate causes — weakness, restriction, pain, spasticity, sensory loss — and test the hypothesis on the plinth (strength, ROM, tone, sensation)." },
            { title: "6. Quantify and re-test", text: "Add spatiotemporal measures and outcome tools so change with treatment can be demonstrated objectively." },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Watch several complete cycles before deciding anything — the first steps after standing are unrepresentative.",
            "Ask for a dual task (walking while talking or counting backwards): marked deterioration flags increased fall risk and reduced automaticity.",
            "The plinth confirms or refutes what the walkway suggested — observational analysis generates hypotheses, impairment testing tests them.",
          ],
        },
      ],
    },
    {
      slug: "outcome-measures",
      title: "Gait & Mobility Outcome Measures",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Standardised measures turn walking into numbers you can compare across sessions, clinicians and the literature. Three tests cover most clinical needs: one for speed, one for endurance, one for functional mobility and falls risk.",
        },
        {
          kind: "steps",
          items: [
            { title: "10-Metre Walk Test (10MWT)", text: "Time the middle 6 or 10 m of a walkway, usually with a flying start (acceleration and deceleration zones excluded), at comfortable then fast pace. Report speed in m/s. Comfortable speed ~1.2–1.4 m/s in healthy adults; <1.0 m/s flags elevated risk in older adults; ~0.1 m/s change is commonly taken as clinically meaningful." },
            { title: "6-Minute Walk Test (6MWT)", text: "Distance covered in 6 minutes on a marked course at self-selected pace, rests allowed; standardised phrases only. Measures walking endurance/aerobic capacity. Healthy adults typically cover roughly 400–700 m depending on age and sex." },
            { title: "Timed Up and Go (TUG)", text: "From sitting in a standard chair with armrests: stand, walk 3 m at a comfortable safe pace, turn, walk back and sit down. Healthy older adults usually complete it in about 10 s or less; times of ≥12 s (CDC guidance) to ≥13.5 s (community-dwelling research cutoff) indicate increased fall risk, and longer times mean increasing dependence." },
          ],
        },
        {
          kind: "table",
          headers: ["Measure", "Construct", "Key values to remember"],
          rows: [
            ["10MWT", "Gait speed", "Normal ~1.2–1.4 m/s; <1.0 m/s adverse-outcome flag; Δ~0.1 m/s meaningful"],
            ["6MWT", "Walking endurance", "Healthy adults roughly 400–700 m; track change against baseline"],
            ["TUG", "Functional mobility & falls risk", "≤10 s typical healthy older adult; ≥12–13.5 s increased fall risk"],
            ["Dynamic Gait Index / FGA", "Gait adaptability & balance", "Useful when instability during walking, not speed, is the problem"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "Use the same instructions, course and footwear every time — small protocol changes swamp real change, especially in the 6MWT where encouragement inflates distance.",
            "Pick the measure that matches the complaint: 'I'm slow' → 10MWT; 'I can't walk far' → 6MWT; 'I'm unsteady and have fallen' → TUG plus a balance-focused measure.",
          ],
        },
      ],
    },
    {
      slug: "walking-aids",
      title: "Walking Aids & Prescription Basics",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Walking aids widen the base of support, offload painful or weak limbs and provide sensory feedback — but the wrong aid, height or technique can worsen gait. Prescription is an assessment-based clinical decision, not a retail one.",
        },
        { kind: "image", illustration: "walking-aids", caption: "The common walking aids compared: support increases from single-point stick to walking frame, but so does disruption to normal gait rhythm — prescribe the least aid that meets the stability need." },
        {
          kind: "table",
          headers: ["Aid", "Support offered", "Typical use"],
          rows: [
            ["Single-point cane/stick", "Least — balance and modest offloading", "Mild balance deficit, painful hip or knee (held in the OPPOSITE hand)"],
            ["Quad (four-point) cane", "More stable base than single-point, but slower", "Greater unilateral support needs, e.g. hemiplegia"],
            ["Elbow crutches (pair)", "Substantial offloading, graded weight-bearing", "Lower limb injury/surgery with weight-bearing restrictions"],
            ["Standard walking frame", "Maximum stability; lifted, so slow and non-rhythmic", "Marked balance or weakness problems indoors"],
            ["Wheeled walker / rollator", "High stability with continuous, more normal gait rhythm", "Older adults with balance or endurance limits; parkinsonian gait (wheeled preferred — lifting a frame worsens freezing)"],
          ],
        },
        {
          kind: "steps",
          items: [
            { title: "Fit the height", text: "With the patient standing tall, arms relaxed, the handgrip should sit at the wrist crease (or greater trochanter), giving about 20–30° of elbow flexion when the aid is held." },
            { title: "Cane technique", text: "Hold the cane in the hand OPPOSITE the affected limb; advance cane and affected leg together, then the sound leg. This mimics normal reciprocal pattern and creates a counter-moment that offloads the affected hip and knee." },
            { title: "Crutch gait patterns", text: "Choose by weight-bearing status: three-point for non/partial weight bearing (both crutches + affected leg, then sound leg); two- and four-point reciprocal patterns for bilateral weakness with permitted loading." },
            { title: "Stairs", text: "'Up with the good, down with the bad': lead upstairs with the sound leg, lead downstairs with the affected leg and the aid." },
            { title: "Review and wean", text: "An aid is a treatment with a dose — reassess whether it is still needed, and progress to less supportive options as impairment resolves." },
          ],
        },
        {
          kind: "warning",
          title: "Prescription errors to avoid",
          items: [
            "Cane in the same-side hand — increases load and abductor demand on the painful limb instead of reducing it",
            "Aid too high (shrugged shoulders, flexed elbows) or too low (stooped trunk)",
            "A lifted frame for a patient with festination or freezing — a wheeled walker preserves rhythm and is safer",
            "Ignoring wrist, hand or upper limb problems that make crutches unsuitable",
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
            "Cycle: stance 60% (IC, loading response, midstance, terminal stance, pre-swing) + swing 40% (initial, mid, terminal); double support 2 × ~10%",
            "Normals: speed ~1.2–1.4 m/s, cadence ~100–120 steps/min, stride ~1.4–1.6 m; <1.0 m/s = risk flag",
            "Kinematic peaks: knee flexion ~60–65° in swing; hip extension and ankle dorsiflexion peak in terminal stance",
            "Patterns: antalgic = pain; Trendelenburg = abductor weakness (lean to weak side); steppage = foot drop; circumduction = functionally long leg; festination = parkinsonian; wide-based irregular = ataxic",
            "Observe systematically: global picture → joint by joint, phase by phase, distal to proximal → hypothesise impairment → test on the plinth",
            "Measures: 10MWT (speed), 6MWT (endurance), TUG (falls risk ≥12–13.5 s)",
            "Aids: handgrip at wrist crease (20–30° elbow flexion); cane in the opposite hand; up with the good, down with the bad",
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
      text: "At comfortable walking speed, what are the approximate proportions of stance and swing in one gait cycle?",
      options: ["50% stance, 50% swing", "60% stance, 40% swing", "40% stance, 60% swing", "70% stance, 30% swing"],
      correctIndex: 1,
      explanation:
        "One gait cycle runs from initial contact of a foot to the next initial contact of the same foot, divided at comfortable speed into roughly 60% stance and 40% swing, including two double-support periods of about 10% each. The proportions shift with speed — double support shortens as walking speeds up and vanishes at the run.",
      difficulty: "Easy",
      tags: ["assessment", "anatomy"],
      sectionSlug: "gait-cycle-phases",
    },
    {
      text: "What biomechanical event defines the transition from walking to running?",
      options: [
        "Cadence exceeding 140 steps per minute",
        "Loss of the double-support period — replaced by a flight phase",
        "Stride length exceeding 2 metres",
        "Heel strike changing to forefoot strike",
      ],
      correctIndex: 1,
      explanation:
        "Walking always includes periods when both feet are on the ground (double support). As speed increases double support shortens, and running begins when it disappears entirely — replaced by flight phases in which neither foot touches the ground. Cadence, stride length and foot-strike pattern vary widely without defining the transition.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "gait-cycle-phases",
    },
    {
      text: "During loading response, the knee flexes to about 15–20°. What is the purpose of this movement and how is it controlled?",
      options: [
        "It lengthens the step; controlled concentrically by the hamstrings",
        "It absorbs shock; controlled eccentrically by the quadriceps",
        "It aids toe clearance; controlled by the hip flexors",
        "It initiates push-off; controlled concentrically by the calf",
      ],
      correctIndex: 1,
      explanation:
        "Stance-phase knee flexion in loading response is the limb's main shock absorber, smoothing the descent of the centre of mass as weight transfers onto the leg. The quadriceps pay out eccentrically to control it. Quadriceps weakness abolishes this mechanism — patients land with a stiff or hyperextending knee instead.",
      difficulty: "Medium",
      tags: ["anatomy", "assessment"],
      sectionSlug: "joint-kinematics",
    },
    {
      text: "In which phase of the gait cycle do peak hip extension and peak ankle dorsiflexion both occur?",
      options: ["Loading response", "Midstance", "Terminal stance", "Mid-swing"],
      correctIndex: 2,
      explanation:
        "In terminal stance the body advances ahead of the planted foot: the hip reaches its peak extension (~10–20°) and the ankle its peak dorsiflexion (~10°) just before push-off. This is why hip flexion contractures and calf tightness both truncate terminal stance and shorten the contralateral step.",
      difficulty: "Medium",
      tags: ["anatomy", "assessment"],
      sectionSlug: "joint-kinematics",
    },
    {
      text: "What is the definition of stride length?",
      options: [
        "The distance between initial contacts of opposite feet",
        "The distance between successive initial contacts of the same foot",
        "The mediolateral distance between the two heels",
        "The distance walked in one minute",
      ],
      correctIndex: 1,
      explanation:
        "Stride length is measured from one foot's initial contact to the next initial contact of that SAME foot — equivalent to two step lengths (~1.4–1.6 m in adults). Step length is the distance between contacts of opposite feet; step width is the mediolateral separation.",
      difficulty: "Easy",
      tags: ["assessment"],
      sectionSlug: "spatiotemporal-parameters",
    },
    {
      text: "Which set of values is typical for a healthy adult walking at comfortable pace?",
      options: [
        "Speed 0.6 m/s, cadence 70 steps/min",
        "Speed 1.2–1.4 m/s, cadence 100–120 steps/min",
        "Speed 2.5 m/s, cadence 160 steps/min",
        "Speed 1.0 m/s, cadence 180 steps/min",
      ],
      correctIndex: 1,
      explanation:
        "Comfortable adult walking speed averages about 1.2–1.4 m/s with a cadence of roughly 100–120 steps per minute and a stride of 1.4–1.6 m. Knowing these normals lets you interpret measured values — a comfortable speed below ~1.0 m/s in an older adult is a recognised marker of increased risk of adverse outcomes.",
      difficulty: "Easy",
      tags: ["assessment"],
      sectionSlug: "spatiotemporal-parameters",
    },
    {
      text: "Why is gait speed described as the 'sixth vital sign'?",
      options: [
        "It is measured with the same equipment as blood pressure",
        "Slower speeds predict falls, hospitalisation, disability and mortality in older adults",
        "It changes minute-to-minute like heart rate",
        "It is a legal requirement of every assessment",
      ],
      correctIndex: 1,
      explanation:
        "Comfortable gait speed is a simple, reliable global indicator of health in older adults: speeds below about 1.0 m/s are associated with higher rates of falls, hospitalisation, functional decline and mortality, while improvements of ~0.1 m/s are linked to better outcomes. It condenses strength, balance, cardiorespiratory fitness and confidence into one number.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "spatiotemporal-parameters",
    },
    {
      text: "A patient's pelvis drops on the left during right single-leg stance, and the trunk leans to the right. What is the underlying impairment?",
      options: [
        "Left hip abductor weakness",
        "Right hip abductor weakness",
        "Right hip adductor spasticity",
        "Left quadriceps weakness",
      ],
      correctIndex: 1,
      explanation:
        "In single support the STANCE-side hip abductors hold the opposite pelvis level. A left pelvic drop during right stance therefore indicates right (stance-side) abductor weakness — the Trendelenburg sign — and the compensatory trunk lean is towards the weak right stance side to bring the centre of mass over the hip and reduce abductor demand.",
      difficulty: "Medium",
      tags: ["assessment", "anatomy", "clinical-reasoning"],
      sectionSlug: "pathological-patterns",
    },
    {
      text: "A patient walks with exaggerated hip and knee flexion on the left, and the left forefoot slaps the ground at contact. Which gait pattern and cause does this suggest?",
      options: [
        "Antalgic gait from knee pain",
        "Steppage gait from dorsiflexor weakness (e.g. common peroneal nerve palsy)",
        "Trendelenburg gait from gluteus medius weakness",
        "Festinating gait from Parkinson's disease",
      ],
      correctIndex: 1,
      explanation:
        "Foot drop prevents ankle dorsiflexion in swing, so the patient lifts the limb high (steppage) to clear the dangling foot, and the unrestrained foot slaps down at contact because the dorsiflexors cannot lower it eccentrically. Common peroneal nerve palsy — the nerve is vulnerable at the fibular head — is a classic cause.",
      difficulty: "Easy",
      tags: ["assessment", "pathology"],
      sectionSlug: "pathological-patterns",
    },
    {
      text: "Which feature best distinguishes SENSORY ataxic gait from cerebellar ataxic gait?",
      options: [
        "Sensory ataxia produces a narrow base of support",
        "Sensory ataxia worsens markedly with eyes closed or in the dark; cerebellar ataxia does not improve with vision",
        "Cerebellar ataxia only appears when running",
        "Sensory ataxia causes festination",
      ],
      correctIndex: 1,
      explanation:
        "Both produce a wide-based, irregular, unsteady gait. In sensory (proprioceptive) ataxia, vision substitutes for the lost joint-position sense, so removing vision — eyes closed, darkness, the Romberg situation — causes marked deterioration, and patients often watch their feet and stamp. Cerebellar ataxia is a coordination problem that vision cannot fix.",
      difficulty: "Hard",
      tags: ["assessment", "pathology", "clinical-reasoning"],
      sectionSlug: "pathological-patterns",
    },
    {
      text: "What is festination in parkinsonian gait?",
      options: [
        "A complete inability to initiate walking",
        "Involuntary quickening of short shuffling steps as the trunk leans progressively forward",
        "A lateral trunk lean over the stance leg",
        "High-stepping to clear a dropped foot",
      ],
      correctIndex: 1,
      explanation:
        "Festination is the involuntary hurrying of progressively shorter, shuffling steps, as if chasing the body's own forward-drifting centre of mass — a hypokinetic basal-ganglia feature accompanied by reduced arm swing, flexed posture, en-bloc turning and freezing episodes. Inability to initiate is freezing, a related but distinct phenomenon.",
      difficulty: "Easy",
      tags: ["assessment", "pathology"],
      sectionSlug: "pathological-patterns",
    },
    {
      text: "A patient swings the right leg outward in a lateral arc during swing. Which impairment list could explain this circumduction?",
      options: [
        "Right hip abductor weakness only",
        "A functionally long right limb: stiff or extended knee, extensor spasticity, foot drop, or true leg-length difference",
        "Right dorsiflexor overactivity",
        "Excessive right knee flexion in swing",
      ],
      correctIndex: 1,
      explanation:
        "Circumduction is a clearance strategy: when the limb cannot be functionally shortened (knee stiffness or extensor spasticity, equinus/foot drop) or is genuinely longer, the patient swings it around rather than through. The observation is one pattern with several possible impairments — plinth assessment identifies which. Excess knee flexion would aid clearance, not hinder it.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "pathological-patterns",
    },
    {
      text: "Why do pathological gaits typically increase the energy cost of walking?",
      options: [
        "They increase cadence beyond efficient ranges",
        "They exaggerate centre-of-mass excursion, which normal determinants of gait are designed to minimise",
        "They lengthen double support, which is the most costly phase",
        "They increase arm swing amplitude",
      ],
      correctIndex: 1,
      explanation:
        "Efficient gait keeps the centre of mass on a smooth, low-amplitude path (~4–5 cm excursion) using pelvic rotation and list, stance knee flexion, the ankle rockers and a narrow base. Deviations such as vaulting, hip hiking and circumduction repeatedly lift or swing body mass outside this economical path, raising oxygen cost — a key reason patients with gait deviations fatigue early.",
      difficulty: "Hard",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "determinants-efficiency",
    },
    {
      text: "Which approach reflects good observational gait analysis practice?",
      options: [
        "Form an overall impression from the first two steps and move on",
        "Watch several cycles, then analyse one joint, one plane and one phase at a time, and confirm hypothesised impairments on the plinth",
        "Focus only on the painful joint the patient reports",
        "Rely on the patient's own description instead of observing",
      ],
      correctIndex: 1,
      explanation:
        "Unstructured observation has poor reliability. A systematic approach — adequate walkway, sagittal and frontal views, multiple cycles, joint-by-joint and phase-by-phase analysis (conventionally distal to proximal), naming deviations against normal values — generates impairment hypotheses that are then tested with strength, ROM, tone and sensory assessment on the plinth. Slow-motion video further improves reliability.",
      difficulty: "Easy",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "observational-analysis",
    },
    {
      text: "In the 10-metre walk test, why is a 'flying start' protocol with timed middle metres commonly used?",
      options: [
        "It makes the test quicker to administer",
        "It excludes acceleration and deceleration so the recorded time reflects steady-state gait speed",
        "It allows the patient to run part of the distance",
        "It removes the need for a measured walkway",
      ],
      correctIndex: 1,
      explanation:
        "Patients need a few metres to reach steady speed and to slow down safely. Timing only the middle section (commonly the central 6 m of a 10 m path) excludes these transients, so the calculated m/s represents true steady-state walking speed and is comparable across sessions and studies.",
      difficulty: "Medium",
      tags: ["assessment"],
      sectionSlug: "outcome-measures",
    },
    {
      text: "A 78-year-old completes the Timed Up and Go in 16 seconds. How should this be interpreted?",
      options: [
        "Normal performance for her age",
        "Above common cutoffs (~12–13.5 s) — indicates increased fall risk and warrants balance and mobility intervention",
        "Meaningless without a 6MWT on the same day",
        "Diagnostic of Parkinson's disease",
      ],
      correctIndex: 1,
      explanation:
        "Healthy older adults typically complete the TUG (stand, walk 3 m, turn, return, sit) in about 10 seconds or less. Times at or above ~12 s (CDC) to ~13.5 s (community-dwelling cutoff) indicate elevated fall risk. Sixteen seconds therefore flags meaningful mobility impairment and should trigger falls-risk assessment and intervention — but no single time diagnoses a disease.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning", "precautions"],
      sectionSlug: "outcome-measures",
    },
    {
      text: "Which outcome measure best captures walking ENDURANCE rather than speed or falls risk?",
      options: ["10-metre walk test", "6-minute walk test", "Timed Up and Go", "Single-leg stance time"],
      correctIndex: 1,
      explanation:
        "The 6MWT records the distance a patient can cover in six minutes at self-selected pace with rests permitted — a submaximal test of walking endurance and aerobic capacity, widely used in cardiorespiratory and deconditioned populations. The 10MWT measures speed over metres; the TUG measures basic functional mobility and falls risk.",
      difficulty: "Easy",
      tags: ["assessment"],
      sectionSlug: "outcome-measures",
    },
    {
      text: "How should a single-point cane be fitted and used for a patient with a painful left hip?",
      options: [
        "In the left hand, moving with the right leg",
        "In the right hand, with the handgrip at the wrist crease giving ~20–30° elbow flexion, advancing with the left leg",
        "In either hand, held as high as the elbow allows",
        "In the right hand, but only used on stairs",
      ],
      correctIndex: 1,
      explanation:
        "The cane goes in the hand OPPOSITE the affected limb — right hand for a painful left hip — with the grip at the level of the wrist crease/greater trochanter so the elbow rests in about 20–30° flexion. Cane and affected leg advance together: downward force through the right-held cane during left stance generates a counter-moment that substantially reduces left hip abductor and joint load.",
      difficulty: "Medium",
      tags: ["management", "assessment"],
      sectionSlug: "walking-aids",
    },
    {
      text: "Why is a wheeled walker generally preferred over a standard lift-and-place frame for a patient with parkinsonian gait?",
      options: [
        "Wheeled walkers are cheaper and lighter",
        "The stop–start pattern of lifting a frame disrupts rhythm and can worsen freezing, while wheels allow continuous rhythmic stepping",
        "Standard frames cannot be used indoors",
        "Wheeled walkers correct festination by speeding the patient up",
      ],
      correctIndex: 1,
      explanation:
        "Parkinsonian gait depends heavily on maintaining rhythm; the lift–place–step sequence of a standard frame imposes exactly the stop–start interruptions that provoke freezing and festination. A wheeled walker permits continuous progression and supports external cueing strategies. It does not cure festination — brakes and training remain important for safety.",
      difficulty: "Hard",
      tags: ["management", "clinical-reasoning", "precautions"],
      sectionSlug: "walking-aids",
    },
    {
      text: "A previously well 80-year-old presents with a gait that has become markedly worse over one week. What is the most appropriate first step?",
      options: [
        "Prescribe a rollator and review in a month",
        "Begin a strengthening programme immediately",
        "Screen for underlying medical causes — sudden gait change is a red flag (neurological event, fracture, infection, medication effects) before labelling the pattern",
        "Reassure that gait naturally varies week to week",
      ],
      correctIndex: 2,
      explanation:
        "Gait deteriorates gradually with ageing and chronic disease; a rapid change over days to weeks signals something acute — stroke or other neurological events, occult fracture, infection and delirium, or new medication (sedatives, antihypertensives) among others. Screening for these and referring appropriately precedes any pattern-based physiotherapy plan or aid prescription.",
      difficulty: "Hard",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "pathological-patterns",
    },
  ],
  flashcards: [
    { front: "Define one gait cycle and its stance/swing split.", back: "Initial contact of one foot to the next initial contact of the same foot; ~60% stance and 40% swing at comfortable speed, with two ~10% double-support periods." },
    { front: "Name the 8 sub-phases of the gait cycle.", back: "Initial contact, loading response, midstance, terminal stance, pre-swing (stance); initial swing, mid-swing, terminal swing (swing)." },
    { front: "Normal adult values: speed, cadence, stride length?", back: "Speed ~1.2–1.4 m/s; cadence ~100–120 steps/min; stride ~1.4–1.6 m (step ~70–80 cm)." },
    { front: "When does peak knee flexion occur in gait, and how much?", back: "About 60–65° in initial-to-mid swing — for toe clearance." },
    { front: "What controls knee flexion in loading response, and why?", back: "Eccentric quadriceps — the 15–20° flexion acts as the limb's shock absorber." },
    { front: "Trendelenburg gait: what drops, and which way does the trunk lean?", back: "The pelvis drops on the SWING side; a compensated pattern leans the trunk TOWARDS the weak stance side (the side of abductor weakness)." },
    { front: "Steppage gait indicates what impairment?", back: "Dorsiflexor weakness/foot drop (e.g. common peroneal nerve palsy) — high hip/knee flexion for clearance, often with foot slap." },
    { front: "What is festination?", back: "Involuntary quickening of short shuffling steps with forward-leaning posture — a parkinsonian feature, with reduced arm swing and en-bloc turning." },
    { front: "TUG protocol and fall-risk cutoff?", back: "Stand from a chair, walk 3 m, turn, return, sit; ≥12 s (CDC) to ≥13.5 s (community-dwelling cutoff) indicates increased fall risk." },
    { front: "Which test for speed, which for endurance?", back: "10-metre walk test = gait speed (m/s, flying start); 6-minute walk test = endurance (distance in 6 min)." },
    { front: "Correct cane height and hand?", back: "Handgrip at the wrist crease/greater trochanter, elbow ~20–30° flexed; held in the hand OPPOSITE the affected leg, advancing with the affected leg." },
    { front: "Stairs rule with an affected limb?", back: "Up with the good (sound leg leads upstairs), down with the bad (affected leg and aid lead downstairs)." },
  ],
};

export default topic;
