import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "traumatic-brain-injury",
  title: "Traumatic Brain Injury",
  category: "Neurological",
  description:
    "From injury mechanisms, GCS and PTA-based severity grading to Rancho Los Amigos levels, ICU positioning, motor retraining, higher-level balance work and graded return after concussion — physiotherapy across the TBI journey.",
  difficulty: "Advanced",
  estMinutes: 30,
  icon: "brain",
  keyTakeaways: [
    "TBI severity is graded by Glasgow Coma Scale (13–15 mild, 9–12 moderate, 3–8 severe) and by the duration of post-traumatic amnesia.",
    "Primary injury happens at the moment of impact and cannot be treated; secondary injury (hypoxia, hypotension, raised ICP, oedema) evolves over hours to days and is the target of acute care.",
    "TBI produces a mixed picture: motor impairments like hemiparesis and ataxia sit alongside cognitive deficits (memory, attention, executive function) and behavioural change.",
    "The Rancho Los Amigos scale describes the typical stages of cognitive recovery — the confused-agitated stage (level IV) demands a calm, structured, low-stimulation approach.",
    "In the ICU, physiotherapy contributes positioning, respiratory care and carefully dosed early mobility within ICP and blood pressure parameters.",
    "Post-acute motor retraining follows the same plasticity rules as stroke: task-specific, high-repetition, meaningful practice.",
    "Many TBI survivors walk again but retain subtle high-level deficits — measure them with demanding tools like the High-level Mobility Assessment Tool (HiMAT).",
    "After concussion, return to activity is graded and symptom-guided; a second impact before recovery can be catastrophic, and deterioration after any head injury is a medical emergency.",
  ],
  sections: [
    {
      slug: "mechanisms-severity",
      title: "Mechanisms & Severity Grading",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Traumatic brain injury (TBI) is an alteration in brain function caused by an external force — road traffic collisions, falls, assaults and sports injuries are the leading causes, with peaks in young adults (predominantly male) and in older adults who fall. The mechanical event determines the pattern of damage.",
        },
        { kind: "image", illustration: "brain", caption: "The brain within the rigid skull: acceleration–deceleration forces strain axons deep in the white matter, while the inner skull ridges bruise the frontal and temporal poles — explaining the classic mix of diffuse and focal injury in TBI." },
        {
          kind: "cards",
          items: [
            { title: "Focal injury", text: "Contusions and lacerations at the site of impact (coup) and opposite it (contrecoup), classically over the frontal and temporal poles where the brain strikes bony ridges. Haematomas (extradural, subdural, intracerebral) are focal mass lesions.", icon: "target" },
            { title: "Diffuse axonal injury", text: "Rapid acceleration–deceleration and rotation shear and stretch axons throughout the white matter. DAI underlies loss of consciousness at impact and much of the persisting cognitive and motor disability.", icon: "git-branch" },
            { title: "Penetrating injury", text: "An object breaches the skull and dura, causing focal tract damage along its path plus infection risk.", icon: "crosshair" },
          ],
        },
        {
          kind: "table",
          headers: ["Severity", "GCS (best in first 24 h)", "Post-traumatic amnesia", "Loss of consciousness"],
          rows: [
            ["Mild (concussion)", "13–15", "< 24 hours", "0–30 minutes"],
            ["Moderate", "9–12", "1–7 days", "30 minutes – 24 hours"],
            ["Severe", "3–8", "> 7 days", "> 24 hours"],
          ],
        },
        {
          kind: "keypoints",
          title: "Reading the severity markers",
          items: [
            "GCS sums eye opening (4), verbal (5) and motor (6) responses — 15 is normal, 3 is the minimum; GCS ≤ 8 defines coma and severe TBI",
            "Post-traumatic amnesia (PTA) is the period after injury with no continuous day-to-day memory — its duration is one of the best predictors of long-term outcome",
            "A patient is 'out of PTA' when orientation and continuous memory return, commonly tracked with serial tools such as the Westmead PTA scale",
          ],
        },
        {
          kind: "pearls",
          items: [
            "PTA duration usually predicts outcome better than the initial GCS — a brief low GCS from a treatable haematoma can carry a good prognosis once evacuated.",
            "Do not test new learning or expect carry-over of instructions while a patient is still in PTA — structure the environment instead.",
          ],
        },
      ],
    },
    {
      slug: "primary-secondary-injury",
      title: "Primary vs Secondary Injury",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Primary injury is the mechanical damage done at the moment of impact — contusion, laceration, axonal shearing, vessel rupture. It is complete within moments and cannot be reversed; prevention (helmets, restraints, falls prevention) is the only 'treatment'.",
        },
        {
          kind: "paragraph",
          text: "Secondary injury is the cascade that follows over hours to days: cerebral oedema and haematoma expansion raise intracranial pressure (ICP), which reduces cerebral perfusion; hypoxia, hypotension, hyper- and hypoglycaemia, seizures and infection all starve or further injure vulnerable tissue. Acute neurosurgical and ICU care exists almost entirely to limit secondary injury.",
        },
        {
          kind: "steps",
          items: [
            { title: "Raised ICP", text: "The rigid skull cannot accommodate swelling. As ICP rises, cerebral perfusion pressure (mean arterial pressure minus ICP) falls; severe rises cause herniation — a fixed dilated pupil and deteriorating consciousness are late, ominous signs." },
            { title: "Hypoxia & hypotension", text: "Even single episodes of low oxygen or low blood pressure after severe TBI measurably worsen outcome — a key reason therapy in the ICU respects strict physiological parameters." },
            { title: "The physiotherapy link", text: "Positioning (head up 15–30°, neck in neutral to aid venous drainage), timing interventions to ICP, and avoiding accumulated stimulation are how physiotherapists help limit secondary injury." },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Primary injury: instantaneous, mechanical, irreversible",
            "Secondary injury: evolving, physiological, and the target of everything we do acutely",
            "Every acute handling decision should ask: what will this do to ICP and perfusion?",
          ],
        },
      ],
    },
    {
      slug: "common-impairments",
      title: "Common Impairments: Motor, Cognitive, Behavioural",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Because TBI combines focal and diffuse damage, the impairment mix is broader and less predictable than in stroke. A useful habit is to profile each patient across three domains — motor, cognitive and behavioural — because the non-motor domains usually decide how therapy must be delivered.",
        },
        {
          kind: "cards",
          items: [
            { title: "Motor", text: "Hemiparesis or, after bilateral/diffuse injury, quadriparesis; spasticity that can be severe and early; cerebellar ataxia and tremor; bradykinesia; impaired balance and dual-tasking. Heterotopic ossification and contracture threaten immobile, hypertonic limbs.", icon: "activity" },
            { title: "Cognitive", text: "Reduced attention and processing speed, impaired new learning and memory, and executive dysfunction (planning, initiation, self-monitoring, flexibility) — classically frontal. These limit carry-over between sessions far more than weakness does.", icon: "brain" },
            { title: "Behavioural", text: "Agitation and restlessness in early recovery; later disinhibition, impulsivity, irritability, reduced insight and sometimes apathy. Reduced insight plus impulsivity is a high falls-risk combination.", icon: "alert-triangle" },
            { title: "Other", text: "Cranial nerve injuries (smell, vision, hearing, vestibular), post-traumatic epilepsy, fatigue, headache, and hormonal disturbance. Co-existing injuries — limb fractures, chest, spine — frequently constrain rehabilitation.", icon: "layers" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "In TBI, cognition and behaviour — not paresis — are usually the biggest barriers to community reintegration and return to work.",
            "Always check for orthopaedic 'passenger' injuries and their weight-bearing restrictions before mobilising a multi-trauma patient.",
            "Ataxia responds to practice too: weighting or resistance may damp tremor short-term, but repetitive task practice drives lasting gains.",
          ],
        },
      ],
    },
    {
      slug: "rancho-los-amigos",
      title: "Cognitive Recovery: the Rancho Los Amigos Levels",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "The Rancho Los Amigos Levels of Cognitive Functioning describe the typical sequence of cognitive-behavioural recovery after severe TBI, from no response through confusion to purposeful behaviour. They do not measure physical ability, but they tell you how to pitch every session.",
        },
        {
          kind: "table",
          headers: ["Level", "Label", "Therapy implication"],
          rows: [
            ["I–III", "No response → localised response", "Sensory stimulation and family education; positioning, respiratory care, ROM. Speak as if understood; watch for localising responses"],
            ["IV", "Confused–agitated", "Agitation is a stage, not misbehaviour. Low-stimulation environment, short familiar tasks, one instruction at a time, ensure safety, never argue or restrain unnecessarily"],
            ["V–VI", "Confused, inappropriate → confused, appropriate", "External structure works: consistent routines, same therapist/time/place, memory aids, simple goal-directed tasks with supervision"],
            ["VII–VIII", "Automatic → purposeful, appropriate", "Increasing independence; train higher-level mobility, dual tasks, community skills; address insight, fatigue and return to work/sport/driving"],
          ],
        },
        {
          kind: "warning",
          title: "Managing the agitated patient (Rancho IV)",
          items: [
            "Reduce stimulation: quiet single room, one person speaking, minimal equipment and interruptions",
            "Keep sessions short and flexible — follow the patient's tolerance, not the timetable",
            "Use familiar, automatic activities (walking, self-care) rather than novel cognitive challenges",
            "Do not take aggression personally and do not confront confabulation; redirect calmly",
            "Ensure 24-hour team consistency — a shared behavioural plan beats any individual technique",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Agitation usually signals emerging awareness in a confused brain — reframe it for families as a stage of recovery that typically passes.",
            "Restlessness can be purposeful in disguise: pacing a safe circuit with supervision is often better therapy than enforced sitting.",
          ],
        },
      ],
    },
    {
      slug: "assessment",
      title: "Physiotherapy Assessment Considerations",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Assessment in TBI is staged and opportunistic: what you can test depends on conscious level, PTA status and behaviour. Chart review comes first — mechanism, imaging, surgical procedures (craniectomy?), ICP course, other injuries and their restrictions, and current medical parameters.",
        },
        {
          kind: "steps",
          items: [
            { title: "Arousal & cognition first", text: "Note GCS trend, PTA status (e.g. Westmead), Rancho level, attention span and instruction-following. This determines whether standardised testing is even valid today." },
            { title: "Motor & sensory screen", text: "Tone (Modified Ashworth), selective movement, strength where testable, coordination (finger-nose, heel-shin for ataxia), sensation, and ROM — with a low threshold for suspecting contracture and heterotopic ossification (hot, painful, stiffening joint)." },
            { title: "Function", text: "Bed mobility, sitting balance, transfers, standing, gait with the needed assistance. In a craniectomy patient, confirm helmet requirements before upright activity." },
            { title: "Higher-level mobility", text: "Once independent walking emerges, test where the ceiling really is: HiMAT items such as running, hopping, bounding, stairs without a rail; add dual-task and balance measures (e.g. Berg early, then more demanding tools)." },
            { title: "Synthesis", text: "Map problems to the three domains (motor / cognitive / behavioural), agree goals with patient and family — insight allowing — and plan session structure as deliberately as exercise content." },
          ],
        },
        {
          kind: "table",
          headers: ["Tool", "What it tells you"],
          rows: [
            ["Glasgow Coma Scale", "Conscious level (eye 4 / verbal 5 / motor 6); trend matters more than a single score"],
            ["Westmead PTA Scale", "Serial orientation and memory testing to date emergence from PTA"],
            ["Rancho Los Amigos LOCF", "Stage of cognitive-behavioural recovery → how to structure therapy"],
            ["Modified Ashworth Scale", "Spasticity grading for serial comparison"],
            ["HiMAT", "High-level mobility (run, hop, bound, stairs) — detects deficits that walking tests miss"],
            ["10 m walk / 6-minute walk", "Gait speed and endurance once ambulant"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "Reassess often — TBI status changes week to week, and an assessment done in PTA underestimates true potential.",
            "Fatigue invalidates late-afternoon testing in many patients; standardise the time of day for serial measures.",
          ],
        },
      ],
    },
    {
      slug: "icu-early-phase",
      title: "ICU & Acute Phase: Positioning and Early Mobility",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "In the ICU the ventilated, sedated severe-TBI patient needs physiotherapy for respiratory care, positioning, maintenance of muscle length and — as stability allows — graded early mobilisation. Every intervention is planned around ICP and cerebral perfusion.",
        },
        {
          kind: "steps",
          items: [
            { title: "Positioning", text: "Head of bed elevated 15–30° with the neck in neutral (no tight tape or collars compressing jugular veins) to promote venous drainage and lower ICP. Regular turning schedule for pressure care and lung health, monitoring ICP response to each position." },
            { title: "Maintain length & joints", text: "Passive movements and positioning programmes for hypertonic limbs; splinting or casting where contracture threatens (classically plantarflexors, elbow flexors). Early hypertonicity plus immobility is the recipe for contracture and heterotopic ossification." },
            { title: "Respiratory care", text: "Ventilated patients need secretion management, but suctioning and manual techniques spike ICP — cluster care thoughtfully, allow recovery time between stimuli, and liaise about sedation cover when ICP is labile." },
            { title: "Graded mobilisation", text: "Once ICP is stable and the team agrees parameters: sitting on the edge of the bed, tilt table or standing hoist for early weight-bearing, then transfers and supported standing. Progress against agreed limits for ICP, CPP, MAP and saturations." },
          ],
        },
        {
          kind: "warning",
          title: "Hold or stop acute-phase intervention if",
          items: [
            "ICP rises above the medically set ceiling or fails to settle after stimulation",
            "Cerebral perfusion pressure or mean arterial pressure falls outside parameters",
            "New pupil changes, seizure activity, or a falling GCS — escalate immediately",
            "Unstable spine, unfixed fractures or drains/monitors that preclude the planned position — check every line before moving anyone",
          ],
        },
        {
          kind: "pearls",
          items: [
            "After decompressive craniectomy, no pressure over the bone flap defect — check positioning restrictions and whether a helmet is required for upright activity.",
            "'Cluster and cushion': group necessary stimuli together, then give genuine rest so ICP can recover.",
          ],
        },
      ],
    },
    {
      slug: "motor-retraining",
      title: "Post-acute Motor Retraining",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Once the patient is medically stable and emerging from PTA, motor rehabilitation follows the same experience-dependent plasticity rules as stroke: high-repetition, task-specific, meaningful practice at the edge of ability. The TBI twist is that cognition and behaviour set the dose and design.",
        },
        {
          kind: "steps",
          items: [
            { title: "Re-establish postural control", text: "Sitting balance → sit-to-stand → standing symmetry and weight shift. Use blocked, repetitive practice with consistent set-up while attention and learning are limited." },
            { title: "Task-specific gait practice", text: "High-repetition walking with the least assistance that is safe; treadmill or body-weight support to build volume; orthoses for foot clearance where needed. Count repetitions and steps, not minutes." },
            { title: "Manage tone alongside", text: "Spasticity management (positioning, casting where indicated, medical adjuncts such as botulinum toxin via the team) protects range so strength and task practice can proceed." },
            { title: "Grade the cognitive load", text: "Start with simple, closed environments; as attention improves, deliberately reintroduce complexity — busier gym, conversation while walking, variable surfaces — because real life is a dual task." },
          ],
        },
        {
          kind: "exercise",
          name: "Sit-to-stand repetition block",
          purpose: "Task-specific lower-limb strengthening and the most transferable transfer skill; ideal early because it is familiar and automatic even in confusion.",
          position: "Firm chair, feet back under the knees, affected or weaker foot deliberately loaded; therapist guarding as needed.",
          execution: "\"Nose over toes\", push through both legs to stand tall, pause, lower with control over 3 seconds. Use the same chair, place and cue each session while learning is impaired.",
          dosage: "3 sets of 10, building across the day; count total daily repetitions.",
          progression: "Lower seat height, remove hand support, add a light load, progress to standing reach tasks.",
          precautions: "Guard for impulsivity — patients with reduced insight may launch unsafely; agree a 'wait for me' cue and rehearse it every time.",
        },
        {
          kind: "exercise",
          name: "High-repetition stepping practice",
          purpose: "Restore walking through volume — stepping practice is the active ingredient of gait recovery.",
          position: "Overground with appropriate aid and guarding, or treadmill (± body-weight support harness) when overground volume is limited by safety.",
          execution: "Walk at the fastest safe speed in defined bouts, attending to step length symmetry and foot clearance. In PTA, keep the route fixed and familiar; later, vary surfaces, turns and distractions.",
          dosage: "Bouts totalling 20–30 minutes or a step-count target within each session, most days.",
          progression: "Reduce support and supervision, add speed, dual tasks (carrying, talking, counting backwards), ramps, kerbs and outdoor routes.",
          precautions: "Monitor fatigue and behaviour — deterioration in gait quality or rising agitation means the session, not the patient, has failed; shorten and repeat later.",
        },
        {
          kind: "keypoints",
          items: [
            "Same plasticity engine as stroke — repetition, specificity, salience — delivered inside a cognitive-behavioural framework",
            "Blocked, consistent practice while in PTA; variable, random practice once learning recovers",
            "Physical recovery often outstrips safety awareness — build judgement tasks into therapy, not just movement",
          ],
        },
      ],
    },
    {
      slug: "balance-higher-level",
      title: "Balance & Higher-level Mobility",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Many people after TBI recover independent walking yet cannot run for a bus, hop, carry a laden tray upstairs or negotiate a crowd — exactly the abilities a young, previously active population needs for work, sport and parenting. The High-level Mobility Assessment Tool (HiMAT) was developed for TBI precisely because standard walking measures ceiling out.",
        },
        {
          kind: "paragraph",
          text: "HiMAT items include walking fast, walking backwards, walking over obstacles, running, skipping, hopping, bounding on each leg and stairs without a rail. Training therefore has to go where walking tests do not: impact, flight phases, speed changes, and balance under real-world load.",
        },
        {
          kind: "exercise",
          name: "Dynamic balance circuit",
          purpose: "Train balance reactions under increasingly realistic demands — narrow bases, head movement, dual tasks and unexpected challenge.",
          position: "Circuit stations in a gym: line/tandem walking, foam surface, step-overs, ball catch-and-throw in single-leg stance.",
          execution: "Rotate stations in sets of 60–90 seconds, keeping difficulty at the point where occasional wobbles or protective steps occur — errorless practice does not train reactions.",
          dosage: "15–20 minutes within sessions, 3–5×/week.",
          progression: "Eyes-moving and head-turn variants, cognitive dual tasks (serial subtraction, conversation), unpredictable perturbations, cluttered or busy environments.",
          precautions: "Guard without gripping; screen for post-traumatic vestibular dysfunction if dizziness or visual motion sensitivity appears and treat it specifically.",
        },
        {
          kind: "exercise",
          name: "Running and bounding progression",
          purpose: "Rebuild the flight-phase skills (running, hopping, bounding) that define higher-level mobility and return to sport or physical work.",
          position: "Gym or track; supportive footwear; clear runway.",
          execution: "Progress jog–walk intervals → continuous jogging → acceleration/deceleration and direction change → low hops and bilateral bounds → single-leg hopping and bounding for distance.",
          dosage: "2–3 sessions/week, allowing recovery between; align with HiMAT retest items.",
          progression: "Speed, distance, uneven ground, sport-specific drills, fatigue-state practice.",
          precautions: "Confirm medical clearance (seizure status, cardiac, orthopaedic injuries); stop for symptom provocation such as headache or dizziness and reassess.",
        },
        {
          kind: "keypoints",
          items: [
            "Independent walking is the floor, not the ceiling, for a young TBI population",
            "HiMAT concept: run, hop, bound, stairs — measure and train above walking level",
            "Balance training must include error, perturbation and dual-task cost to transfer to real life",
          ],
        },
      ],
    },
    {
      slug: "cognitive-behavioural-strategies",
      title: "Working With Cognitive & Behavioural Factors",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "In TBI, how you run the session often matters more than which exercise you choose. Structure, consistency and communication style are active treatment ingredients — they compensate for impaired attention, memory and self-regulation until those functions recover.",
        },
        {
          kind: "cards",
          items: [
            { title: "Structure", text: "Same time, same place, same order of activities. Predictability lowers agitation and lets procedural learning work even when memory for events is absent.", icon: "layout" },
            { title: "Simplify communication", text: "One instruction at a time, short sentences, demonstration over explanation. Allow extra processing time and avoid open-ended choices early on.", icon: "message-circle" },
            { title: "Consistency across the team", text: "Everyone uses the same cues, the same behavioural plan and the same responses to agitation — inconsistency retrains confusion.", icon: "users" },
            { title: "Manage fatigue", text: "Cognitive fatigue is near-universal: schedule demanding tasks early in the session and day, use planned rests, and treat quality deterioration as a stop signal.", icon: "battery-low" },
            { title: "External memory aids", text: "Written programmes, photo sequences, diaries and phone alarms bridge impaired recall and build towards self-management.", icon: "notebook" },
            { title: "Motivation & insight", text: "Tie tasks to the patient's own goals; use video feedback and graded real-world challenges to build insight gently rather than by confrontation.", icon: "target" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Procedural (motor) learning is relatively preserved even in PTA — patients can improve at doing without remembering the session.",
            "If behaviour deteriorates mid-session, change the environment or the demand before blaming the patient.",
          ],
        },
      ],
    },
    {
      slug: "concussion-return",
      title: "Concussion & Graded Return to Activity",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Mild TBI (concussion) accounts for the great majority of brain injuries. Symptoms — headache, dizziness, visual disturbance, fogginess, poor concentration, sleep change, irritability — usually resolve within days to weeks, and current consensus favours 24–48 hours of relative rest followed by gradually reintroduced physical and cognitive activity, kept below symptom-exacerbation thresholds. Prolonged strict rest delays recovery.",
        },
        {
          kind: "steps",
          items: [
            { title: "1. Symptom-limited daily activity", text: "After 24–48 h relative rest: normal daily tasks that do not more than mildly and briefly exacerbate symptoms; limit screens early only as symptoms dictate." },
            { title: "2. Light aerobic exercise", text: "Walking or stationary cycling at an intensity below symptom threshold — sub-symptom aerobic exercise actively aids recovery." },
            { title: "3. Sport-specific exercise", text: "Running, drills without head-impact risk; add movement complexity." },
            { title: "4. Non-contact training", text: "Harder drills, resistance training, cognitive load of team practice." },
            { title: "5. Full-contact practice", text: "Only after medical clearance and being symptom-free at the previous stages — restores confidence and lets staff assess readiness." },
            { title: "6. Return to sport", text: "Normal competition. Each stage typically needs at least 24 h; symptom recurrence means dropping back a stage." },
          ],
        },
        {
          kind: "redflags",
          items: [
            "Deteriorating conscious level, increasing drowsiness or confusion after head injury — possible expanding haematoma: emergency",
            "Worsening or severe headache, repeated vomiting, seizure, or new focal signs (limb weakness, unequal pupils, slurred speech)",
            "Clear fluid or blood from nose or ear, marked neck pain, or high-risk mechanism in an anticoagulated or elderly patient",
            "Second impact before recovery from the first: risk of catastrophic cerebral swelling, especially in adolescents — no same-day return to play after any suspected concussion",
          ],
        },
        {
          kind: "pearls",
          items: [
            "\"When in doubt, sit them out\" — no suspected concussion returns to play the same day.",
            "Persisting symptoms beyond about 4 weeks warrant targeted assessment — cervical, vestibular-ocular and graded aerobic testing often reveal treatable drivers.",
          ],
        },
      ],
    },
    {
      slug: "quick-revision",
      title: "Quick Revision Summary",
      estMinutes: 2,
      difficulty: "Intermediate",
      content: [
        {
          kind: "keypoints",
          title: "60-second summary",
          items: [
            "Severity: GCS 13–15 mild / 9–12 moderate / 3–8 severe; PTA < 1 day mild, > 7 days severe — PTA is the stronger prognostic marker",
            "Primary injury is mechanical and fixed; secondary injury (ICP, hypoxia, hypotension) is the treatable enemy",
            "Impairment profile = motor + cognitive + behavioural; the non-motor domains dictate session design",
            "Rancho IV agitation: low stimulation, short familiar tasks, team consistency — it is a stage, not misbehaviour",
            "ICU: head up 15–30°, neck neutral, cluster care, mobilise within ICP/CPP parameters; mind the craniectomy flap",
            "Post-acute: high-repetition task-specific practice, blocked and consistent in PTA, variable later",
            "Measure above walking: HiMAT (run, hop, bound, stairs) for the young ambulant patient",
            "Concussion: 24–48 h relative rest then graded, sub-symptom return; deterioration or second impact = emergency thinking",
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
      text: "A patient opens eyes to speech, is confused in conversation and localises to pain. Their Glasgow Coma Scale score and severity band are:",
      options: ["GCS 15 — normal", "GCS 12 — moderate TBI", "GCS 7 — severe TBI", "GCS 3 — deep coma"],
      correctIndex: 1,
      explanation:
        "Eye opening to speech scores E3, confused conversation V4, and localising to pain M5, giving a total of 12 — within the moderate band (9–12). Mild TBI is 13–15 and severe is 3–8; coma is defined as GCS ≤ 8. Knowing the component scores lets you interpret and communicate a GCS precisely rather than as a bare number.",
      difficulty: "Hard",
      tags: ["assessment"],
      sectionSlug: "mechanisms-severity",
    },
    {
      text: "Which GCS range defines severe traumatic brain injury?",
      options: ["13–15", "9–12", "3–8", "0–2"],
      correctIndex: 2,
      explanation:
        "Severe TBI is GCS 3–8 (GCS ≤ 8 also defines coma); moderate is 9–12 and mild is 13–15. The scale cannot score below 3, because each component (eyes, verbal, motor) has a minimum score of 1.",
      difficulty: "Easy",
      tags: ["assessment", "pathology"],
      sectionSlug: "mechanisms-severity",
    },
    {
      text: "Post-traumatic amnesia (PTA) is best defined as:",
      options: [
        "Loss of memories from before the accident only",
        "The period after injury during which continuous day-to-day memory has not yet returned",
        "Permanent inability to form any new memories",
        "The time spent unconscious at the scene",
      ],
      correctIndex: 1,
      explanation:
        "PTA is the interval after injury in which the patient cannot lay down continuous memory and remains disoriented — tracked with serial tools such as the Westmead PTA Scale. Loss of pre-injury memories is retrograde amnesia; PTA duration (mild < 24 h, severe > 7 days) is one of the strongest predictors of long-term outcome.",
      difficulty: "Easy",
      tags: ["assessment", "pathology"],
      sectionSlug: "mechanisms-severity",
    },
    {
      text: "Which of the following is an example of SECONDARY brain injury?",
      options: [
        "Axonal shearing at the moment of impact",
        "Contusion of the temporal pole as the brain strikes the skull",
        "Rising intracranial pressure from cerebral oedema over the next 48 hours",
        "Laceration from a penetrating object",
      ],
      correctIndex: 2,
      explanation:
        "Primary injury (shearing, contusion, laceration) is mechanical and complete at impact. Secondary injury evolves afterwards — oedema and haematoma raising ICP, hypoxia, hypotension, seizures and infection — and is the target of acute medical, nursing and physiotherapy care because it is potentially preventable.",
      difficulty: "Easy",
      tags: ["pathology"],
      sectionSlug: "primary-secondary-injury",
    },
    {
      text: "Why is the head of the bed elevated 15–30° with the neck in neutral for a patient with raised ICP?",
      options: [
        "To stretch the hamstrings during bed rest",
        "To promote cerebral venous drainage and help lower intracranial pressure",
        "To prevent pressure sores on the occiput",
        "To improve appetite and swallowing",
      ],
      correctIndex: 1,
      explanation:
        "Head elevation with the neck in neutral (nothing kinking or compressing the jugular veins) assists venous outflow from the cranium, reducing intracranial blood volume and ICP while maintaining cerebral perfusion. Neck flexion, rotation or tight ties around the neck can obstruct drainage and spike ICP.",
      difficulty: "Medium",
      tags: ["management", "precautions"],
      sectionSlug: "icu-early-phase",
    },
    {
      text: "A severe-TBI patient in the ICU shows a sustained ICP rise above the set ceiling during chest physiotherapy. The correct response is to:",
      options: [
        "Continue — ICP always rises with treatment and it is harmless",
        "Pause the intervention, allow ICP to settle, and liaise with the team before proceeding",
        "Sit the patient straight out of bed to distract them",
        "Increase the vigour of techniques to finish faster",
      ],
      correctIndex: 1,
      explanation:
        "Transient stimulation-related ICP rises are common, but a sustained rise above agreed parameters risks secondary injury by reducing cerebral perfusion. Stop the stimulus, allow recovery, reassess the need and timing (consider sedation cover, clustering care differently) with the ICU team. Escalating stimulation is the opposite of safe practice.",
      difficulty: "Medium",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "icu-early-phase",
    },
    {
      text: "A patient two weeks after severe TBI is restless, shouts at staff, pulls at lines and cannot follow a two-step command. On the Rancho Los Amigos scale this best fits:",
      options: [
        "Level II — generalised response",
        "Level IV — confused-agitated",
        "Level VII — automatic, appropriate",
        "Level VIII — purposeful, appropriate",
      ],
      correctIndex: 1,
      explanation:
        "The confused-agitated stage (Rancho IV) features heightened, poorly purposeful activity, aggression and inability to cooperate with structured testing — reflecting emerging awareness in a still-confused brain. It typically passes, and management is environmental: low stimulation, short familiar tasks, consistent team approach.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "rancho-los-amigos",
    },
    {
      text: "Which session design is most appropriate for a patient in the confused-agitated (Rancho IV) stage?",
      options: [
        "A busy gym session with varied novel equipment to stimulate the brain",
        "A short session of familiar, automatic tasks in a quiet room, following the patient's tolerance",
        "Cancelling all therapy until agitation fully resolves",
        "Detailed education about their brain scan and prognosis",
      ],
      correctIndex: 1,
      explanation:
        "Agitated patients cannot filter stimulation or learn novel material, but they can often participate in familiar automatic activities (walking, simple transfers) in a calm environment. Complete rest wastes recovery time; overstimulation and confrontation escalate agitation; insight-focused education belongs later.",
      difficulty: "Easy",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "rancho-los-amigos",
    },
    {
      text: "In TBI rehabilitation, which factor most commonly limits community reintegration and return to work?",
      options: [
        "Residual hemiparesis",
        "Cognitive and behavioural impairments such as executive dysfunction and reduced insight",
        "Ankle plantarflexor tightness",
        "Reduced aerobic capacity",
      ],
      correctIndex: 1,
      explanation:
        "Most TBI survivors regain independent mobility, but impaired attention, memory, planning, self-monitoring, behavioural regulation and insight are the strongest barriers to work, relationships and independent living — which is why session structure and cognitive strategies are core physiotherapy business, not optional extras.",
      difficulty: "Medium",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "common-impairments",
    },
    {
      text: "Why does blocked, consistent practice (same task, same set-up, same cues) suit patients still in post-traumatic amnesia?",
      options: [
        "It maximally challenges their problem-solving",
        "Procedural motor learning can proceed despite absent day-to-day memory, and consistency lets it accumulate",
        "It prevents any learning from occurring, which is safer",
        "Variety is only for athletes",
      ],
      correctIndex: 1,
      explanation:
        "Declarative memory (remembering the session) is impaired in PTA, but procedural learning — getting better at doing through repetition — is relatively preserved. Consistent, blocked practice exploits this channel. Once continuous memory and attention recover, practice is deliberately made variable and random to build adaptable, transferable skill.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "motor-retraining",
    },
    {
      text: "The HiMAT was developed for the TBI population primarily because:",
      options: [
        "TBI patients cannot complete the Berg Balance Scale",
        "Standard walking measures ceiling out in young ambulant patients whose deficits appear in running, hopping and bounding",
        "It measures intracranial pressure during exercise",
        "It replaces the need for any other assessment",
      ],
      correctIndex: 1,
      explanation:
        "Many TBI survivors are young and recover independent walking yet cannot run, hop, bound, skip or manage stairs without a rail — abilities required for sport, work and parenting. Tools like the 10 m walk or Berg show ceiling effects in this group; the High-level Mobility Assessment Tool quantifies mobility above walking level and guides training.",
      difficulty: "Medium",
      tags: ["assessment"],
      sectionSlug: "balance-higher-level",
    },
    {
      text: "Which statement about balance retraining after TBI is most accurate?",
      options: [
        "Training should be errorless — any wobble means it is too hard",
        "Difficulty should sit where occasional wobbles or protective steps occur, because balance reactions must be challenged to improve",
        "Balance work is unnecessary once walking is independent",
        "Balance can only be trained on machines",
      ],
      correctIndex: 1,
      explanation:
        "Balance reactions are trained by challenge: practice pitched where the system is occasionally stressed into corrections (with guarding for safety) drives adaptation. Errorless practice does not train reactions, and independent walking often coexists with major deficits under dual-task, perturbation or high-level conditions.",
      difficulty: "Medium",
      tags: ["exercise-therapy"],
      sectionSlug: "balance-higher-level",
    },
    {
      text: "A footballer is suspected of concussion during a match but says he feels fine after 10 minutes. Best practice is:",
      options: [
        "Return him to play if he can jog on the sideline",
        "No same-day return to play — remove, assess, and begin a graded return only after 24–48 h relative rest",
        "Return to play but avoid heading the ball",
        "Immediate hospital admission for all concussions",
      ],
      correctIndex: 1,
      explanation:
        "Consensus guidance is unambiguous: any suspected concussion means removal from play with no same-day return, because early symptoms fluctuate and a second impact before recovery risks catastrophic cerebral swelling (second impact syndrome), particularly in adolescents. Recovery then follows a stepwise, symptom-guided return protocol.",
      difficulty: "Easy",
      tags: ["management", "precautions"],
      sectionSlug: "concussion-return",
    },
    {
      text: "During a graded return-to-sport protocol, symptoms recur at the non-contact training stage. The athlete should:",
      options: [
        "Push through — symptoms are irrelevant after stage 2",
        "Drop back to the previous symptom-free stage and progress again after at least 24 hours",
        "Abandon sport permanently",
        "Skip to full contact since non-contact clearly does not suit him",
      ],
      correctIndex: 1,
      explanation:
        "The graded protocol is symptom-limited: more than mild, brief exacerbation at any stage means returning to the previous tolerated stage, waiting at least 24 hours, and progressing again. This titrates load to recovery. Pushing through symptoms delays recovery; skipping stages defeats the protocol's purpose.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "concussion-return",
    },
    {
      text: "Six hours after a 'minor' head knock, a patient becomes increasingly drowsy and vomits twice. This picture suggests:",
      options: [
        "Normal post-concussion fatigue — advise sleep",
        "Possible expanding intracranial haematoma — an emergency requiring immediate medical assessment",
        "Simple dehydration",
        "Delayed-onset muscle soreness",
      ],
      correctIndex: 1,
      explanation:
        "Deteriorating conscious level and repeated vomiting after head injury are red flags for an expanding haematoma (classically extradural, which may follow a lucid interval) or evolving swelling. This demands emergency imaging and neurosurgical assessment — never attribute deterioration after head injury to fatigue.",
      difficulty: "Easy",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "concussion-return",
    },
    {
      text: "Diffuse axonal injury is best described as:",
      options: [
        "Bruising of the cortex directly under the impact site",
        "Shearing and stretching of white-matter axons caused by rapid acceleration–deceleration and rotational forces",
        "Bleeding between the skull and dura",
        "Infection tracking along a penetrating wound",
      ],
      correctIndex: 1,
      explanation:
        "DAI results from differential movement of brain tissue during rapid acceleration–deceleration and rotation, shearing axons throughout the white matter. It explains immediate loss of consciousness without a large focal lesion and contributes heavily to persisting cognitive and motor disability. Cortical bruising is contusion; blood between skull and dura is an extradural haematoma.",
      difficulty: "Medium",
      tags: ["pathology", "anatomy"],
      sectionSlug: "mechanisms-severity",
    },
    {
      text: "Which statement best captures the prognostic value of PTA duration versus initial GCS?",
      options: [
        "Initial GCS is always the definitive predictor of outcome",
        "PTA duration generally predicts long-term outcome better than the initial GCS",
        "Neither has any relationship to outcome",
        "Only imaging findings predict outcome",
      ],
      correctIndex: 1,
      explanation:
        "PTA duration integrates the evolving injury over days and correlates more strongly with long-term functional and cognitive outcome than a single early GCS reading, which can be depressed by transient, treatable factors (a surgically evacuated haematoma, intoxication, sedation). Both are used together, but PTA is the stronger single marker.",
      difficulty: "Hard",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "mechanisms-severity",
    },
    {
      text: "A patient recovering from severe TBI develops a hot, painful, rapidly stiffening elbow with hard end-feel weeks after injury. The most likely explanation to exclude is:",
      options: [
        "Normal spasticity requiring faster stretching",
        "Heterotopic ossification forming in the soft tissues around the joint",
        "Delayed-onset muscle soreness",
        "A flare of osteoarthritis",
      ],
      correctIndex: 1,
      explanation:
        "Heterotopic ossification — abnormal bone formation in soft tissue — is a recognised complication of severe TBI, favouring hips, elbows, shoulders and knees in immobile, hypertonic limbs. Warmth, pain, swelling and rapidly reducing ROM are typical; it needs medical review and modified (not aggressive) range work. Forceful stretching of an inflamed HO joint may worsen it.",
      difficulty: "Hard",
      tags: ["pathology", "precautions"],
      sectionSlug: "common-impairments",
    },
    {
      text: "After decompressive craniectomy, which precaution is essential during physiotherapy?",
      options: [
        "Avoid any pressure or positioning over the bone-flap defect and check helmet requirements for upright activity",
        "Keep the patient flat at all times",
        "Avoid all standing for six months",
        "Apply firm massage over the defect to aid healing",
      ],
      correctIndex: 0,
      explanation:
        "After craniectomy a section of skull is absent, leaving brain protected only by scalp and dura. The patient must not lie or be positioned on the defect, and many units require a protective helmet for mobilisation until cranioplasty. These restrictions must be confirmed before handling and upright activity.",
      difficulty: "Hard",
      tags: ["precautions", "management"],
      sectionSlug: "icu-early-phase",
    },
  ],
  flashcards: [
    { front: "GCS ranges for mild, moderate and severe TBI?", back: "Mild 13–15, moderate 9–12, severe 3–8 (GCS ≤ 8 = coma). Components: eyes /4, verbal /5, motor /6." },
    { front: "PTA duration bands for severity?", back: "Mild < 24 hours; moderate 1–7 days; severe > 7 days. PTA duration is one of the best predictors of long-term outcome." },
    { front: "Primary vs secondary brain injury?", back: "Primary: mechanical damage at impact (contusion, DAI, laceration) — irreversible. Secondary: evolving damage from raised ICP, oedema, hypoxia, hypotension, seizures — the target of acute care." },
    { front: "What is diffuse axonal injury?", back: "Shearing/stretching of white-matter axons from rapid acceleration–deceleration and rotation; causes immediate LOC and much persisting cognitive-motor disability." },
    { front: "Rancho Los Amigos level IV — key features and approach?", back: "Confused-agitated: heightened, poorly purposeful activity. Manage with low stimulation, short familiar tasks, one instruction at a time, total team consistency." },
    { front: "ICU positioning for raised ICP?", back: "Head of bed 15–30°, neck in neutral, nothing compressing jugular veins; cluster care and let ICP settle between stimuli; respect ICP/CPP/MAP parameters." },
    { front: "Post-craniectomy handling rules?", back: "No pressure or lying on the bone-flap defect; check whether a protective helmet is required before upright mobilisation." },
    { front: "What does the HiMAT assess and why?", back: "High-level mobility — running, hopping, bounding, skipping, stairs without rail — because walking measures ceiling out in young ambulant TBI patients." },
    { front: "Practice structure in vs after PTA?", back: "In PTA: blocked, consistent, familiar tasks (procedural learning is preserved). After PTA: increasingly variable, random and dual-task practice for transferable skill." },
    { front: "Concussion: initial management consensus?", back: "24–48 h relative (not strict) rest, then graded, symptom-limited return through daily activity → light aerobic → sport-specific → non-contact → contact → play; ≥24 h per stage." },
    { front: "Red flags after head injury?", back: "Falling conscious level, worsening headache, repeated vomiting, seizure, focal signs, unequal pupils, CSF from nose/ear — emergency. Never same-day return to play." },
    { front: "What is second impact syndrome?", back: "Catastrophic cerebral swelling when a second head injury occurs before recovery from the first — rare but often fatal, highest concern in adolescents; the rationale for graded return protocols." },
  ],
};

export default topic;
