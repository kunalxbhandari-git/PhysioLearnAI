import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "spinal-cord-injury",
  title: "Spinal Cord Injury",
  category: "Neurological",
  description:
    "Classification with the ASIA scale, incomplete syndromes, what each key level enables, autonomic dysreflexia and other emergencies, respiratory care for high lesions, and rehabilitation from transfers and wheelchair skills to gait options and shoulder preservation.",
  difficulty: "Advanced",
  estMinutes: 27,
  icon: "zap",
  keyTakeaways: [
    "Tetraplegia (cervical lesions) affects all four limbs and trunk; paraplegia (thoracic, lumbar, sacral) spares the arms — the neurological level of injury drives everything.",
    "Complete versus incomplete is defined by sacral sparing: any sensory or motor function at S4–S5 makes the injury incomplete (ASIA B–D) with real recovery potential.",
    "Incomplete syndromes have signature patterns: central cord (arms worse than legs), Brown-Séquard (ipsilateral weakness, contralateral pain/temperature loss), anterior cord (motor and pain/temperature lost, proprioception spared).",
    "Key levels unlock function: C4 breathes, C6 tenodesis grip and transfers become possible, C7 triceps make transfers reliable, T1 gives a full hand, L2 adds hip flexion for gait options.",
    "Autonomic dysreflexia in lesions at or above T6 is a medical emergency: pounding headache and hypertension — sit the patient up and find and remove the trigger (usually a blocked catheter or bowel).",
    "Orthostatic hypotension, pressure injury and impaired respiratory function are daily physiotherapy business in high lesions.",
    "The wheelchair user's shoulders must last a lifetime — train transfer technique, balance pushing with pulling exercise, and protect the rotator cuff from day one.",
    "Standing and gait options range from stand frames and knee-ankle-foot orthoses to powered exoskeletons — energy cost, not possibility, usually decides what is used long-term.",
  ],
  sections: [
    {
      slug: "classification",
      title: "Causes & Classification",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Traumatic spinal cord injury follows road traffic collisions, falls (the leading cause in older adults), sport and violence; non-traumatic causes include tumour, infection, vascular events and degenerative canal stenosis. The injured segments stop transmitting between brain and body, so the level and completeness of the lesion define the clinical picture.",
        },
        { kind: "image", illustration: "nervous-system", caption: "The spinal cord as the brain's cable to the body: injury interrupts motor commands descending and sensation ascending below the lesion — the level of injury sets which functions survive." },
        {
          kind: "cards",
          items: [
            { title: "Tetraplegia", text: "Cervical lesions (C1–C8) impair arms, trunk, legs and pelvic organs, and often breathing. Formerly 'quadriplegia'.", icon: "user" },
            { title: "Paraplegia", text: "Thoracic, lumbar or sacral lesions (T1 and below) spare the upper limbs; trunk involvement depends on level.", icon: "user-check" },
            { title: "Complete injury", text: "No sensory or motor function preserved in the lowest sacral segments S4–S5 (ASIA A). Recovery of useful function below the level is uncommon.", icon: "x-circle" },
            { title: "Incomplete injury", text: "Any sacral sparing — sensation at the anal mucocutaneous junction, deep anal pressure, or voluntary anal contraction — means pathways cross the lesion and prognosis improves (ASIA B–D).", icon: "check-circle" },
          ],
        },
        {
          kind: "table",
          headers: ["ASIA grade", "Definition"],
          rows: [
            ["A", "Complete — no sensory or motor function in S4–S5"],
            ["B", "Sensory incomplete — sensory but no motor function below the level, including S4–S5"],
            ["C", "Motor incomplete — motor function below the level; more than half of key muscles below the level grade < 3"],
            ["D", "Motor incomplete — at least half of key muscles below the level grade ≥ 3 (antigravity)"],
            ["E", "Normal sensory and motor examination (in a person with a prior deficit)"],
          ],
        },
        {
          kind: "keypoints",
          items: [
            "The neurological level of injury is the most caudal segment with normal sensation and antigravity (grade ≥ 3) motor function, with normal function above",
            "Sacral sparing is the hinge between complete and incomplete — always examined, never assumed",
            "Spinal shock (transient areflexia below the lesion after injury) can mimic completeness early; classification firms up as it resolves",
          ],
        },
        {
          kind: "pearls",
          items: [
            "The skeletal (bony) level and the neurological level often differ — treat the neurological examination, not the X-ray.",
            "An ASIA D patient can walk into clinic; incomplete injuries are now the majority in many countries as falls in older adults rise.",
          ],
        },
      ],
    },
    {
      slug: "incomplete-syndromes",
      title: "Incomplete Cord Syndromes",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "When damage affects part of the cord's cross-section, the anatomy of the ascending and descending tracts produces recognisable syndromes. Knowing which tracts run where lets you predict the deficit — and the rehabilitation problem list — from the syndrome's name.",
        },
        {
          kind: "table",
          headers: ["Syndrome", "Typical cause", "Pattern"],
          rows: [
            ["Central cord", "Hyperextension injury in an older person with a stenotic canal", "Arms weaker than legs (arm fibres lie medially in the corticospinal tract); sacral sparing; hand function often the slowest to recover — many walk again"],
            ["Brown-Séquard (hemisection)", "Penetrating injury (stab, gunshot)", "Ipsilateral weakness and proprioception loss; contralateral pain and temperature loss (spinothalamic fibres cross near their entry level). Best gait prognosis of the syndromes"],
            ["Anterior cord", "Flexion injury or anterior spinal artery infarct", "Motor loss plus pain and temperature loss below the lesion; dorsal columns spared, so proprioception and light touch persist. Poor motor prognosis"],
            ["Cauda equina", "Compression below the conus (central disc, fracture, tumour)", "Lower motor neuron picture: flaccid legs, saddle anaesthesia, areflexic bladder and bowel — a surgical emergency when acute"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "Central cord syndrome is the most common incomplete pattern — picture the older patient who fell forward, hit their forehead, and now has burning, weak hands with walking legs.",
            "In Brown-Séquard, the leg that moves badly feels pain normally, and the leg that moves well does not — teach patients why, or skin checks get neglected on the 'good' side.",
          ],
        },
      ],
    },
    {
      slug: "level-function",
      title: "Level–Function Relationships",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Each preserved segment adds specific muscles, and with them specific functions. Learning the key levels turns the neurological examination into a functional prognosis and a goal-setting map. The classic milestones are C4, C6, C7, T1 and L2.",
        },
        {
          kind: "table",
          headers: ["Level", "Key muscles gained", "What it enables (complete injury, after rehabilitation)"],
          rows: [
            ["C4", "Diaphragm, trapezius", "Breathes without a ventilator (may need support early); head/shoulder-controlled power wheelchair; dependent for self-care"],
            ["C6", "Extensor carpi radialis (wrist extension), plus C5 biceps", "Tenodesis grip (wrist extension passively closes fingers); slide-board transfers may be achieved; manual wheelchair with rim projections on level ground; drives with adaptations"],
            ["C7", "Triceps", "Elbow extension makes lift transfers and pressure relief reliable; independent transfers and manual wheelchair use; largely independent self-care"],
            ["T1", "Intrinsic hand muscles (full upper limb)", "Full dexterous hand; fully independent wheelchair life; trunk control still limited (no abdominals until T6–T12)"],
            ["L2", "Hip flexors (iliopsoas)", "With quadriceps emerging at L3: potential for functional ambulation with orthoses and aids; wheelchair often still used for distance"],
          ],
        },
        {
          kind: "keypoints",
          title: "How to use this table",
          items: [
            "C6 tenodesis grip: never passively stretch the long finger flexors of a C6 patient into combined wrist and finger extension — preserved tightness IS the grip",
            "Triceps (C7) are the difference between assisted and independent transfers for most people",
            "Trunk (abdominal) innervation from T6 downward improves sitting balance, cough strength and pushing efficiency",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Give families level-based expectations early but flexibly — incomplete injuries can exceed the table, and complications can undercut it.",
            "Energy cost decides real-world use: many who CAN walk with KAFOs choose wheels for speed and shoulder economy — that is success, not failure.",
          ],
        },
      ],
    },
    {
      slug: "autonomic-dysreflexia",
      title: "Autonomic Dysreflexia — the SCI Emergency",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "In lesions at or above T6, a noxious stimulus below the level (most often a blocked catheter or distended bladder, next most often bowel impaction) triggers massive reflex sympathetic discharge that the brain can no longer inhibit, because the descending control pathways are interrupted. Blood pressure climbs dangerously while the heart slows reflexly; untreated, it can cause seizure, intracranial haemorrhage or death.",
        },
        {
          kind: "redflags",
          items: [
            "Sudden pounding headache in a patient with a lesion at or above T6 — assume autonomic dysreflexia until proven otherwise",
            "Hypertension well above the patient's (typically low) baseline, with bradycardia",
            "Flushing and sweating above the lesion; pale, cool, goose-fleshed skin below it; nasal congestion; anxiety",
            "ACT: sit the patient upright with legs dependent (orthostatic drop lowers BP), loosen tight clothing and straps, and find and remove the trigger — check catheter and drainage first, then bowel, then skin (pressure, ingrown nail, tight legbag strap)",
            "If the source cannot be found and pressure stays high, this is a medical emergency — urgent medical management (antihypertensives) is required",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Know the patient's baseline blood pressure — 120/80 may already be dysreflexic for someone who runs at 90/60.",
            "In the gym, kinked catheter tubing under a strap is a classic trigger — check drainage before and during every standing or FES session.",
            "Educate every T6-and-above patient (and their family) to recognise and direct their own emergency management.",
          ],
        },
      ],
    },
    {
      slug: "acute-precautions",
      title: "Acute Phase: Orthostatic Hypotension & Pressure Care",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Early after injury, the physiotherapist works within spinal stability precautions set by the surgical team (log-rolling, bracing, movement restrictions until fixation or clearance) while managing the consequences of lost autonomic and sensory function below the lesion.",
        },
        {
          kind: "cards",
          items: [
            { title: "Orthostatic hypotension", text: "Lost sympathetic vasoconstriction and absent muscle pump let blood pool when upright — expect dizziness or syncope on first sitting. Manage with graded elevation (tilt table, reclining chair), abdominal binder, compression garments, adequate hydration and slow position changes.", icon: "trending-down" },
            { title: "Pressure injury risk", text: "No sensation means no warning; no movement means no relief. Pressure injuries are among the most common, costly and preventable SCI complications — turning schedules in bed, pressure-relieving cushions, and trained pressure-relief manoeuvres for life.", icon: "alert-triangle" },
            { title: "Thermoregulation & DVT", text: "Poikilothermia below the lesion (impaired sweating and vasomotor control) and high early DVT risk — be alert to unilateral leg swelling and follow prophylaxis protocols.", icon: "thermometer" },
            { title: "Contracture prevention", text: "Daily range of movement and positioning — but respect the C6 tenodesis rule and any orthopaedic restrictions. Ankle plantarflexors, hip flexors and shoulders are priority ranges for future function.", icon: "move" },
          ],
        },
        {
          kind: "steps",
          items: [
            { title: "Pressure relief in the wheelchair", text: "Teach a routine early: forward lean or side-to-side lean (or push-up lift where triceps allow) for at least 1–2 minutes, every 15–30 minutes of sitting. Tilt-in-space does the job for those who cannot self-relieve." },
            { title: "Skin checks", text: "Twice-daily inspection (long-handled mirror) of sacrum, ischia, heels and trochanters becomes a lifelong habit — any non-blanching redness means offloading until fully resolved." },
            { title: "Graded verticalisation", text: "Progress head-up time in bed → reclined sitting → tilt table or standing frame, monitoring blood pressure and symptoms; binder and stockings on before upright work in high lesions." },
          ],
        },
        {
          kind: "warning",
          title: "Acute-phase cautions",
          items: [
            "Confirm spinal stability status and permitted movement before every treatment — restrictions change after surgery and imaging",
            "Never pull through the arms of a person with impaired trunk control during transfers without technique — protect shoulders from day one",
            "Symptoms of orthostatic intolerance (pallor, yawning, fading responses) mean recline first, ask questions after",
          ],
        },
      ],
    },
    {
      slug: "respiratory",
      title: "Respiratory Implications of High Lesions",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Breathing is muscular, and the muscles are segmental: diaphragm C3–C5, intercostals thoracic, abdominals T6–T12. The higher the lesion, the weaker the pump — respiratory complications are the leading cause of death after cervical SCI, so respiratory physiotherapy is core, not adjunct.",
        },
        { kind: "image", illustration: "lungs", caption: "The respiratory pump after SCI: a C4 lesion leaves the diaphragm working alone — inspiration survives, but without abdominals and intercostals the cough is weak and secretions accumulate." },
        {
          kind: "table",
          headers: ["Lesion level", "Respiratory consequence"],
          rows: [
            ["C1–C3", "Diaphragm denervated or unreliable — ventilator dependent (or phrenic/diaphragm pacing)"],
            ["C4–C5", "Diaphragm functions but is easily fatigued; reduced vital capacity; weak cough; may need ventilatory support early"],
            ["C6–T5", "Breathes independently; intercostal loss reduces chest wall stability; cough remains weak without abdominals"],
            ["T6–T12", "Progressively stronger cough as abdominal innervation returns; risk mainly with concurrent chest injury"],
          ],
        },
        {
          kind: "steps",
          items: [
            { title: "Assisted cough", text: "The signature SCI technique: hands below the ribcage deliver a firm inward-upward thrust timed with the patient's cough effort, substituting for absent abdominals. Teach carers and, where possible, self-assisted versions (arm sweep against a chair armrest)." },
            { title: "Secretion clearance & volume", text: "Positioning, manual techniques, breathing exercises, breath-stacking (via bag or glossopharyngeal breathing) and mechanical insufflation-exsufflation for those with very weak cough." },
            { title: "Inspiratory muscle training", text: "Progressive threshold loading strengthens the diaphragm and accessory muscles, improving vital capacity and endurance in cervical and high thoracic lesions." },
            { title: "Positioning insight", text: "Unlike most patients, many tetraplegics ventilate BETTER supine than upright: gravity holds the flaccid abdomen in, keeping the diaphragm domed and mechanically efficient — the logic behind abdominal binders for upright breathing." },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Monitor vital capacity serially in acute cervical lesions — a falling trend predicts fatigue and the need for support before blood gases change.",
            "An abdominal binder in sitting supports both blood pressure and breathing in high lesions — one tool, two problems.",
          ],
        },
      ],
    },
    {
      slug: "transfers-wheelchair",
      title: "Rehabilitation: Transfers & Wheelchair Skills",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "For most people with complete injuries, the wheelchair is the primary mobility for life — so transfer quality, wheelchair setup and advanced chair skills are to SCI rehab what gait retraining is to stroke. The prerequisites are sitting balance without full trunk innervation, arm strength, and problem-solving.",
        },
        {
          kind: "steps",
          items: [
            { title: "Mat foundation work", text: "Long-sitting and short-sitting balance, weight shifts, and moving the body with head-hips relationship (throwing the head one way swings the hips the other) — the biomechanical trick behind most SCI transfers." },
            { title: "Lift and slide-board transfers", text: "Progress from slide-board transfers (level, then car, toilet, shower chair) to lift transfers where triceps allow. Hands flat or on fists, shoulders depressed, lean well forward; move the head down and away from the direction the hips travel." },
            { title: "Wheelchair skills", text: "Efficient push technique (long smooth strokes, semicircular hand pattern), ramps and kerbs, back-wheel balance ('wheelie') for kerbs and rough ground, and floor-to-chair transfers for falls management." },
            { title: "Setup matters", text: "Seat dimensions, cushion, backrest height and rear-axle position change everything: an axle further forward makes the chair tippier but far more efficient to push and easier to wheelie." },
          ],
        },
        {
          kind: "exercise",
          name: "Seated push-up (pressure-relief lift)",
          purpose: "Build the depression strength for pressure relief and lift transfers.",
          position: "Sitting on a firm mat or in the chair, hands beside the hips (on push-up blocks or wheels), elbows extended where triceps allow.",
          execution: "Depress the shoulders to lift the buttocks clear of the surface, hold, and lower with control. Where triceps are absent (C6), use shoulder external rotation and elbow-locking strategies with forward head position.",
          dosage: "3–5 lifts of 15–30 seconds within sessions; functionally, 1–2 minutes of relief every 15–30 minutes of sitting.",
          progression: "Longer holds, lifting higher, transferring the lift across surfaces of increasing height difference.",
          precautions: "Shoulder pain during lifts is a warning sign — review technique and load before it becomes chronic.",
        },
        {
          kind: "pearls",
          items: [
            "Teach falls management, not just falls avoidance — getting from floor back to chair is a genuine independence skill.",
            "Video the patient's transfers: seeing their own head-hips mechanics accelerates learning more than any verbal cue.",
          ],
        },
      ],
    },
    {
      slug: "standing-gait",
      title: "Standing & Gait Options",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Standing and walking after SCI sit on a spectrum from therapeutic standing to community ambulation. The realistic option depends on level and completeness — and long-term use depends less on whether walking is possible than on its energy cost compared with wheeling.",
        },
        {
          kind: "cards",
          items: [
            { title: "Standing frames & tilt tables", text: "Therapeutic standing for bone loading, pressure relief, spasticity, bowel/bladder function and psychological benefit — appropriate at almost any level with cardiovascular tolerance.", icon: "align-vertical-justify-center" },
            { title: "Orthoses (KAFO / RGO)", text: "Knee-ankle-foot orthoses lock the knees for swing-to or swing-through gait with a walker or crutches; reciprocating gait orthoses link hip movement. Effective for paraplegia below ~T9–L1, but energy cost is several times normal walking — many use them for exercise, not transport.", icon: "brackets" },
            { title: "Powered exoskeletons", text: "Motorised hip-knee systems walk the wearer with crutch support. Benefits are being defined: current roles are exercise, standing time and stepping practice — speed and practicality still favour the wheelchair for daily mobility in complete lesions.", icon: "cpu" },
            { title: "Task-specific gait training", text: "For motor-incomplete injuries (ASIA C/D), intensive overground and treadmill-based stepping practice — with body-weight support and FES as enablers — drives genuine walking recovery. The principles mirror stroke: repetition, progression, task-specificity.", icon: "footprints" },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Incomplete (ASIA C/D) injuries: train walking as recovery — high-repetition task practice works",
            "Complete paraplegia: walking is orthotic/exoskeletal and mostly therapeutic — the wheelchair remains the mobility of choice for most",
            "Ambulation with L2-level function (hip flexors ± quadriceps) with orthoses and aids is a realistic functional goal in lumbar lesions",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Ask what the patient wants standing FOR — bone and bowel arguments matter, but eye-level conversation at a family barbecue is often the real goal.",
          ],
        },
      ],
    },
    {
      slug: "strength-shoulder-preservation",
      title: "Strength Training & Shoulder Preservation",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "A manual wheelchair user's shoulders do the work of legs — thousands of push strokes, transfers and pressure lifts daily, for decades. Shoulder pain and rotator cuff pathology eventually affect a large proportion of long-term users and can cost independence. Prevention is a training problem: balance the pushing-dominant life with pulling and external rotation strength, maintain flexibility, and optimise technique and equipment.",
        },
        {
          kind: "exercise",
          name: "Resistance-band rowing",
          purpose: "Strengthen the posterior shoulder and scapular retractors to balance the pushing-dominant demands of wheelchair life.",
          position: "Sitting tall in the chair, band anchored at chest height in front (door anchor or rail).",
          execution: "Pull the band handles towards the lower ribs, squeezing the shoulder blades together without shrugging, then release with control.",
          dosage: "2–3 sets of 10–15, 2–3×/week.",
          progression: "Thicker band, single-arm rows, adding scapular holds at end-range.",
          precautions: "Anchor securely; maintain trunk stability with the free hand or chair strap in higher lesions.",
        },
        {
          kind: "exercise",
          name: "External rotation with band",
          purpose: "Rotator cuff (infraspinatus/teres minor) strength — the key protective muscles against impingement in wheelchair users.",
          position: "Sitting, elbow bent 90° and tucked to the side (towel roll under the arm), band anchored to the side at elbow height.",
          execution: "Rotate the forearm outward, keeping the elbow pinned to the side, and return slowly.",
          dosage: "2–3 sets of 10–15 each arm, 2–3×/week.",
          progression: "Increase band resistance; progress to external rotation at 90° abduction only when pain-free and strong.",
          precautions: "Keep the movement pain-free; a pinching arc suggests impingement — modify range and get the shoulder assessed.",
        },
        {
          kind: "exercise",
          name: "Doorway pectoral stretch",
          purpose: "Counteract the anterior tightness that rounds shoulders forward and narrows the subacromial space.",
          position: "Facing a doorway edge or corner, forearm vertical against the frame, elbow at shoulder height.",
          execution: "Roll the chair (or turn the trunk) forward-away until a comfortable stretch is felt across the chest; keep ribs down and neck relaxed.",
          dosage: "3 × 30-second holds each side, daily.",
          progression: "Vary elbow height to bias different pectoral fibres.",
          precautions: "Stretch, not pain — avoid forcing an unstable or already-painful shoulder.",
        },
        {
          kind: "keypoints",
          title: "Shoulder-preservation habits",
          items: [
            "Minimise the number and height-difference of daily transfers; vary technique and lead arm",
            "Long, smooth push strokes with a semicircular recovery reduce peak forces; keep tyres pumped and the chair light",
            "Train pull twice as much as push — daily life already provides the pushing",
            "Treat new shoulder pain early and seriously: it threatens transfers, and transfers are independence",
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
            "Tetraplegia = cervical, paraplegia = T1 and below; complete vs incomplete decided by sacral sparing (S4–S5); ASIA A–E",
            "Syndromes: central cord (arms > legs), Brown-Séquard (ipsilateral motor/proprioception, contralateral pain/temperature), anterior cord (motor + pain/temp lost, proprioception spared)",
            "Key levels: C4 diaphragm, C6 wrist extension → tenodesis + possible transfers, C7 triceps → independent transfers, T1 full hand, L2 hip flexors → orthotic gait potential",
            "Autonomic dysreflexia (≥ T6): headache + hypertension + bradycardia → sit up, loosen, find the trigger (catheter, bowel, skin) — emergency",
            "Acute care: orthostatic hypotension (binder, graded verticalisation), pressure relief every 15–30 min, skin checks, DVT vigilance, C6 tenodesis rule",
            "High lesions: weak cough — assisted cough, breath-stacking, inspiratory muscle training; tetraplegics often breathe better supine",
            "Rehab: head-hips transfers, wheelchair skills including wheelies and floor recovery, incomplete lesions get intensive gait training",
            "Preserve the shoulders: pull > push training, external rotation strength, technique and equipment optimisation",
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
      text: "What single finding converts a spinal cord injury from 'complete' to 'incomplete' on ASIA classification?",
      options: [
        "Any movement in the arms",
        "Preserved sensory or motor function in the lowest sacral segments (S4–S5)",
        "Intact reflexes below the lesion",
        "Normal bladder filling sensation",
      ],
      correctIndex: 1,
      explanation:
        "Completeness is defined at S4–S5: any sacral sparing — sensation at the anal mucocutaneous junction, deep anal pressure, or voluntary anal sphincter contraction — proves some pathways cross the lesion, making the injury incomplete (ASIA B–D) with meaningfully better recovery potential. Reflexes below the lesion can persist in complete injuries.",
      difficulty: "Medium",
      tags: ["assessment", "pathology"],
      sectionSlug: "classification",
    },
    {
      text: "A lesion at C7 is classified as producing:",
      options: ["Paraplegia", "Tetraplegia", "Hemiplegia", "Cauda equina syndrome"],
      correctIndex: 1,
      explanation:
        "Cervical lesions (C1–C8) produce tetraplegia — impairment of arms, trunk, legs and pelvic organs. Paraplegia describes lesions from T1 down, which spare the upper limbs. Hemiplegia (one-sided) is a brain-lesion pattern, and cauda equina syndrome arises from compression below the conus.",
      difficulty: "Easy",
      tags: ["pathology", "anatomy"],
      sectionSlug: "classification",
    },
    {
      text: "An older adult falls, hyperextending the neck, and presents with markedly weak, burning hands but relatively preserved leg movement. This pattern is typical of:",
      options: ["Anterior cord syndrome", "Brown-Séquard syndrome", "Central cord syndrome", "Complete C5 tetraplegia"],
      correctIndex: 2,
      explanation:
        "Central cord syndrome — the most common incomplete pattern — typically follows hyperextension in a stenotic cervical canal. The central cord region carries the medially placed arm fibres of the corticospinal tract, so arms are weaker than legs, hand function recovers slowest, and many patients regain walking.",
      difficulty: "Easy",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "incomplete-syndromes",
    },
    {
      text: "After a stab wound causing right cord hemisection at T10, which examination pattern is expected below the lesion?",
      options: [
        "Right-sided weakness and proprioception loss with left-sided loss of pain and temperature",
        "Left-sided weakness with right-sided loss of pain and temperature",
        "Bilateral complete loss of all modalities",
        "Bilateral loss of proprioception only",
      ],
      correctIndex: 0,
      explanation:
        "Brown-Séquard syndrome: the corticospinal tract and dorsal columns run uncrossed in the cord (crossing higher), so weakness and proprioceptive loss are ipsilateral to the hemisection. Spinothalamic fibres cross near their level of entry, so pain and temperature are lost contralaterally. Of the incomplete syndromes it carries the best prognosis for walking.",
      difficulty: "Hard",
      tags: ["anatomy", "pathology"],
      sectionSlug: "incomplete-syndromes",
    },
    {
      text: "In anterior cord syndrome, which functions are typically PRESERVED below the lesion?",
      options: [
        "Voluntary movement and pain sensation",
        "Proprioception and light touch (dorsal column function)",
        "Pain and temperature sensation only",
        "No function is preserved",
      ],
      correctIndex: 1,
      explanation:
        "Anterior cord syndrome (flexion injury or anterior spinal artery compromise) damages the anterior two-thirds of the cord — corticospinal and spinothalamic tracts — causing motor loss and loss of pain/temperature. The posteriorly located dorsal columns are spared, preserving proprioception, vibration and light touch. Motor prognosis is poor.",
      difficulty: "Medium",
      tags: ["anatomy", "pathology"],
      sectionSlug: "incomplete-syndromes",
    },
    {
      text: "Which key muscle gained at C6 underpins the tenodesis grip?",
      options: ["Triceps brachii", "Extensor carpi radialis (wrist extensors)", "Flexor digitorum profundus", "Intrinsic hand muscles"],
      correctIndex: 1,
      explanation:
        "C6 brings radial wrist extension. Actively extending the wrist passively tensions the (deliberately shortened) long finger flexors, closing the fingers onto objects — the tenodesis grip. This is why the finger flexors of a C6 patient must never be stretched into combined wrist-and-finger extension: preserved tightness is the grip.",
      difficulty: "Medium",
      tags: ["anatomy", "management"],
      sectionSlug: "level-function",
    },
    {
      text: "Why is C7 such a functional watershed in complete tetraplegia?",
      options: [
        "It restores normal hand dexterity",
        "Triceps allow elbow-extension lift transfers and reliable pressure relief, making independence realistic",
        "It restores full trunk control",
        "It is the level at which walking returns",
      ],
      correctIndex: 1,
      explanation:
        "C7 adds triceps. Active elbow extension converts transfers from assisted slide-board efforts into reliable push-up lift transfers and makes pressure-relief lifts secure — the practical difference between needing help and independent wheelchair life. Full hand function needs T1; trunk control builds from T6 down; walking is not a complete-tetraplegia outcome.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "management"],
      sectionSlug: "level-function",
    },
    {
      text: "A person with L2-level motor function (hip flexors present, some quadriceps emerging) is most realistically working towards:",
      options: [
        "Ventilator weaning",
        "Functional ambulation with orthoses and walking aids",
        "Tenodesis grip training",
        "Power wheelchair with head controls",
      ],
      correctIndex: 1,
      explanation:
        "L2 preserves hip flexion, with quadriceps strengthening from L3 — enough proximal control to make ambulation with ankle-foot or knee-ankle-foot orthoses and aids a genuine functional goal, though many still use a wheelchair for distance and energy economy. The other options belong to cervical-lesion rehabilitation.",
      difficulty: "Easy",
      tags: ["clinical-reasoning", "management"],
      sectionSlug: "level-function",
    },
    {
      text: "A T4 complete paraplegic in the gym suddenly develops a pounding headache, flushed face and BP of 190/110 (baseline 100/65). Your FIRST actions are to:",
      options: [
        "Lie them flat and elevate the legs",
        "Sit them upright, loosen tight clothing and straps, and check the urinary catheter and drainage for blockage",
        "Give paracetamol and continue the session at lower intensity",
        "Start cool-down stretches and monitor for 30 minutes",
      ],
      correctIndex: 1,
      explanation:
        "This is autonomic dysreflexia — noxious stimulation below a lesion at or above T6 driving uncontrolled sympathetic discharge. Immediate management: sit upright with legs dependent (using orthostatic pooling to drop BP), remove tight garments, and hunt the trigger, checking bladder drainage first, then bowel and skin. Lying flat raises BP further. If the pressure will not settle, it is a medical emergency.",
      difficulty: "Medium",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "autonomic-dysreflexia",
    },
    {
      text: "Autonomic dysreflexia occurs in lesions at or above which level, and why?",
      options: [
        "T6 — above this, the major splanchnic sympathetic outflow is disconnected from brain control",
        "L2 — because the legs are paralysed",
        "C4 — because the diaphragm is affected",
        "S2 — because bladder reflexes are lost",
      ],
      correctIndex: 0,
      explanation:
        "The splanchnic vascular bed's sympathetic supply arises roughly T5–L2. With a lesion at or above T6, noxious input below the level triggers reflex sympathetic discharge that descending inhibition from the brainstem can no longer reach and restrain — so massive vasoconstriction and hypertension develop, with reflex bradycardia via the intact vagus.",
      difficulty: "Hard",
      tags: ["pathology", "anatomy"],
      sectionSlug: "autonomic-dysreflexia",
    },
    {
      text: "On first sitting a person with a recent cervical SCI over the edge of the bed, they become pale, yawning and faint. The cause and response are:",
      options: [
        "Autonomic dysreflexia — sit them up further",
        "Orthostatic hypotension from lost sympathetic vasoconstriction — recline them and elevate legs, then rebuild upright tolerance gradually",
        "A stroke — call a code",
        "Low blood sugar — give juice and continue",
      ],
      correctIndex: 1,
      explanation:
        "Loss of supraspinal sympathetic control plus absent leg muscle pump allows venous pooling on verticalisation — orthostatic hypotension is near-universal in early high lesions. Recline immediately, elevate legs, then progress upright tolerance gradually with abdominal binder, compression, hydration and graded tilt. Dysreflexia presents oppositely: hypertension with headache.",
      difficulty: "Easy",
      tags: ["precautions", "assessment"],
      sectionSlug: "acute-precautions",
    },
    {
      text: "Standard pressure-relief advice for a full-time wheelchair user is:",
      options: [
        "Relieve pressure once every 4 hours",
        "Relieve for at least 1–2 minutes every 15–30 minutes of sitting",
        "Pressure relief is unnecessary with a gel cushion",
        "Only relieve pressure when redness appears",
      ],
      correctIndex: 1,
      explanation:
        "Tissue ischaemia develops silently in the absence of sensation, and brief lifts are insufficient for reperfusion — the widely taught standard is a sustained relief (forward lean, side lean, push-up lift, or tilt-in-space) for at least 1–2 minutes, every 15–30 minutes. Cushions reduce but never remove risk; visible redness means damage has already begun.",
      difficulty: "Easy",
      tags: ["management", "precautions"],
      sectionSlug: "acute-precautions",
    },
    {
      text: "Why can a person with a complete C4 injury breathe without a ventilator, yet still cough very poorly?",
      options: [
        "Coughing is a voluntary skill that must be relearned",
        "The diaphragm (C3–C5) drives inspiration, but the abdominals (T6–T12) that power forced expiration are paralysed",
        "The lungs themselves are damaged by the injury",
        "The larynx is denervated at C4",
      ],
      correctIndex: 1,
      explanation:
        "Quiet inspiration is diaphragmatic (phrenic nerve, C3–C5) and survives at C4, though fatigable. An effective cough, however, needs a fast forced expiration generated mainly by the abdominal muscles (T6–T12) with intercostal support — all paralysed. Hence assisted-cough techniques, breath-stacking and mechanical insufflation-exsufflation are core management.",
      difficulty: "Medium",
      tags: ["anatomy", "pathology"],
      sectionSlug: "respiratory",
    },
    {
      text: "Which statement about breathing position in complete tetraplegia is correct?",
      options: [
        "Upright sitting always maximises ventilation, as in able-bodied people",
        "Many tetraplegics ventilate better supine, because gravity supports the flaccid abdomen and keeps the diaphragm domed — the rationale for abdominal binders in sitting",
        "Position has no effect on ventilation after SCI",
        "Prone is the only safe position",
      ],
      correctIndex: 1,
      explanation:
        "With paralysed abdominal muscles, sitting lets the abdominal contents sag forward, flattening the diaphragm into a mechanically poor starting position. Supine, gravity holds the contents up and the diaphragm domes, improving its length-tension relationship. An abdominal binder partially recreates this support in upright positions — helping blood pressure as well.",
      difficulty: "Hard",
      tags: ["pathology", "management"],
      sectionSlug: "respiratory",
    },
    {
      text: "The 'head-hips relationship' taught in SCI transfer training means:",
      options: [
        "The head must stay directly above the hips at all times",
        "Moving the head forcefully in one direction swings the hips in the opposite direction, substituting for absent trunk and leg muscles",
        "The hips should always lead and the head follow",
        "Transfers should be done with the neck extended",
      ],
      correctIndex: 1,
      explanation:
        "With paralysed trunk and legs, the body behaves like a see-saw about the shoulders: throwing the head down and away from the target surface swings the pelvis up and towards it. This biomechanical substitution — head down-and-away as the hips lift across — is the core motor skill inside most independent SCI transfers.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "transfers-wheelchair",
    },
    {
      text: "Why is passive stretching of the long finger flexors into combined wrist and finger extension avoided in a person with C6 tetraplegia?",
      options: [
        "It is too painful to attempt",
        "Preserved shortness of the finger flexors is required for the tenodesis grip — overstretching them destroys the grip",
        "It causes autonomic dysreflexia",
        "The finger flexors are already denervated and cannot tighten",
      ],
      correctIndex: 1,
      explanation:
        "The C6 tenodesis grip depends on passive tension in the long finger flexors: active wrist extension pulls the slightly shortened flexors taut, closing the fingers functionally. Range work therefore extends the fingers only with the wrist flexed (and vice versa), deliberately maintaining that flexor 'tightness'. Aggressive combined stretching permanently weakens the grip.",
      difficulty: "Hard",
      tags: ["precautions", "management"],
      sectionSlug: "acute-precautions",
    },
    {
      text: "For long-term shoulder preservation, a manual wheelchair user's strengthening programme should emphasise:",
      options: [
        "More pushing exercise, since pushing is their main activity",
        "Pulling movements and rotator cuff external rotation, to balance the pushing-dominant demands of daily life",
        "Heavy overhead pressing daily",
        "Avoiding all resistance training to rest the shoulders",
      ],
      correctIndex: 1,
      explanation:
        "Propulsion, transfers and pressure lifts already load the pushing muscles thousands of times daily, driving anterior dominance, posterior weakness and impingement-pattern rotator cuff overload. The corrective is programmed pulling (rows, retraction) and external rotation strength, plus anterior flexibility, efficient push technique and minimising transfer demands.",
      difficulty: "Easy",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "strength-shoulder-preservation",
    },
    {
      text: "Which statement best reflects the current place of walking options in COMPLETE paraplegia?",
      options: [
        "KAFO or exoskeleton walking usually replaces the wheelchair for daily mobility",
        "Orthotic and exoskeletal walking is mostly therapeutic — the high energy cost means the wheelchair remains the practical daily mobility for most",
        "Walking devices are contraindicated in complete lesions",
        "Exoskeletons restore normal cortical control of the legs",
      ],
      correctIndex: 1,
      explanation:
        "Swing-through KAFO gait costs several times the energy of normal walking, and current exoskeletons remain slow and supervision-dependent; both provide valuable standing, stepping and exercise benefits, but most people with complete paraplegia rationally choose wheels for daily life. In motor-incomplete injuries, by contrast, intensive gait training targets genuine walking recovery.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "standing-gait",
    },
    {
      text: "A rear axle positioned further forward on a manual wheelchair makes the chair:",
      options: [
        "More stable but harder to push",
        "Easier to push and to wheelie, but tippier backwards",
        "Heavier",
        "Impossible to transfer from",
      ],
      correctIndex: 1,
      explanation:
        "Moving the axle forward shifts more weight onto the large rear wheels: rolling resistance and push forces drop, the hand reaches more of the pushrim, and the front casters unweight easily for wheelies and kerbs — at the cost of rearward stability, which skilled users manage and new users train with anti-tips. Setup is therefore a progressive clinical decision, not a fixed spec.",
      difficulty: "Hard",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "transfers-wheelchair",
    },
    {
      text: "Which of the following is a red-flag presentation requiring urgent surgical review rather than routine rehabilitation?",
      options: [
        "Chronic ASIA A T10 paraplegia with stable examination",
        "New saddle anaesthesia, flaccid leg weakness and urinary retention after acute central lumbar disc prolapse",
        "Longstanding spastic catch in the plantarflexors",
        "Shoulder ache after a long day of pushing",
      ],
      correctIndex: 1,
      explanation:
        "Acute cauda equina syndrome — saddle anaesthesia, flaccid lower motor neuron leg weakness, and bladder dysfunction from compression below the conus — is a surgical emergency where decompression time affects bladder and neurological outcome. The other findings are expected features of chronic SCI life to manage, not emergencies.",
      difficulty: "Easy",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "incomplete-syndromes",
    },
  ],
  flashcards: [
    { front: "Tetraplegia vs paraplegia?", back: "Tetraplegia: cervical lesion (C1–C8) affecting all four limbs and trunk. Paraplegia: lesion T1 or below, sparing the upper limbs." },
    { front: "What defines a COMPLETE injury on ASIA classification?", back: "No sensory or motor function preserved at S4–S5 (no anal sensation, deep anal pressure or voluntary anal contraction) — ASIA A. Any sacral sparing = incomplete." },
    { front: "Central cord syndrome pattern and typical patient?", back: "Arms weaker than legs, hands slowest to recover; typically an older adult after cervical hyperextension on a stenotic canal. Most common incomplete syndrome; many walk again." },
    { front: "Brown-Séquard pattern below the lesion?", back: "Ipsilateral weakness and proprioception loss; contralateral pain and temperature loss (spinothalamic fibres cross near entry). Best walking prognosis of the syndromes." },
    { front: "Anterior cord syndrome — lost vs spared?", back: "Lost: motor, pain and temperature. Spared: dorsal columns (proprioception, vibration, light touch). Poor motor prognosis." },
    { front: "Function unlocked at C6? At C7?", back: "C6: wrist extension → tenodesis grip, possible slide-board transfers, manual chair on level ground. C7: triceps → lift transfers, reliable pressure relief, independence." },
    { front: "Autonomic dysreflexia — lesion level, signs, first actions?", back: "At/above T6. Pounding headache, hypertension above baseline, bradycardia, flushing above lesion. Sit upright, loosen clothing, find and remove the trigger — bladder first, then bowel, skin. Emergency if unresolved." },
    { front: "Most common trigger of autonomic dysreflexia?", back: "Bladder distension — typically a blocked or kinked urinary catheter; bowel impaction is next most common." },
    { front: "The C6 tenodesis rule for range of movement?", back: "Never stretch the long finger flexors into combined wrist AND finger extension — their preserved shortness is the grip. Extend fingers with the wrist flexed." },
    { front: "Why is cough weak in cervical/high thoracic lesions?", back: "Forced expiration relies on abdominals (T6–T12) and intercostals; the C3–C5 diaphragm can inspire, but cannot cough — hence assisted cough, breath-stacking, insufflation-exsufflation." },
    { front: "Pressure-relief prescription for wheelchair users?", back: "At least 1–2 minutes of relief (lean forward/sideways, push-up lift or tilt) every 15–30 minutes of sitting, plus twice-daily skin checks." },
    { front: "The head-hips relationship in transfers?", back: "Throwing the head down and away from the target swings the pelvis up and towards it — the see-saw mechanics that substitute for absent trunk and leg muscles." },
  ],
};

export default topic;
