import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "stroke-rehabilitation",
  title: "Stroke Rehabilitation",
  category: "Neurological",
  description:
    "From stroke types and MCA syndromes to neuroplasticity principles, standardised assessment, gait and upper-limb retraining, and shoulder care — the physiotherapist's guide to stroke rehabilitation.",
  difficulty: "Advanced",
  estMinutes: 25,
  icon: "brain",
  keyTakeaways: [
    "About 85% of strokes are ischaemic and 15% haemorrhagic — the distinction drives acute medical care, while rehabilitation principles are shared.",
    "The middle cerebral artery territory is most often affected, producing contralateral hemiparesis and sensory loss worse in the face and arm.",
    "Recovery is driven by neuroplasticity: it is experience-dependent, and demands repetition, intensity, task-specificity and salience.",
    "Very early mobilisation within 24 hours in high doses was harmful in the AVERT trial — early but not too early, and frequent short sessions, is the evidence-based approach.",
    "Core assessment: Modified Ashworth (tone), Fugl-Meyer (motor impairment), Berg (balance), Barthel-type indices (ADL function).",
    "Task-specific practice at high repetition is the foundation of both gait and upper-limb retraining.",
    "The subluxed hemiplegic shoulder must never be pulled — handle, position and support the arm carefully from day one.",
    "Learned non-use is preventable: engage the affected side early and constrain compensation where appropriate (CIMT concept).",
  ],
  sections: [
    {
      slug: "stroke-types",
      title: "Stroke Types & Mechanisms",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "A stroke is a sudden focal neurological deficit of vascular origin lasting more than 24 hours (or with imaging evidence of infarction). It is a leading cause of adult disability worldwide, and physiotherapy is central to recovery.",
        },
        { kind: "image", illustration: "brain", caption: "The brain and its arterial territories: where the occlusion or haemorrhage occurs determines the clinical syndrome, so linking lesion site to presenting deficits is the first step in interpreting a stroke." },
        {
          kind: "cards",
          items: [
            { title: "Ischaemic stroke (~85%)", text: "Occlusion of a cerebral vessel by thrombus or embolus starves brain tissue of oxygen. A core of tissue dies rapidly; the surrounding penumbra is salvageable if reperfused early — the basis for thrombolysis and thrombectomy.", icon: "droplet" },
            { title: "Haemorrhagic stroke (~15%)", text: "Rupture of a vessel (intracerebral or subarachnoid) damages tissue by direct disruption, mass effect and raised intracranial pressure. Hypertension is the biggest risk factor.", icon: "alert-triangle" },
            { title: "TIA", text: "Transient ischaemic attack — symptoms resolve fully within 24 hours (usually within an hour) without infarction. A TIA is a warning: stroke risk is highest in the following days.", icon: "clock" },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "\"Time is brain\" — around 1.9 million neurons are lost per minute of untreated large-vessel ischaemia",
            "Stroke type changes acute medical management (e.g. anticoagulation is contraindicated in haemorrhage) but rehabilitation principles are largely shared",
            "Risk factors: hypertension (the most important), atrial fibrillation, diabetes, smoking, hyperlipidaemia, physical inactivity",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Always know your patient's stroke type, date, and imaging findings before treating — they shape precautions (e.g. blood pressure parameters after haemorrhage).",
          ],
        },
      ],
    },
    {
      slug: "mca-syndrome",
      title: "Vascular Syndromes: the MCA & Friends",
      estMinutes: 2,
      difficulty: "Advanced",
      content: [
        {
          kind: "paragraph",
          text: "The clinical picture of a stroke reflects the vascular territory involved. The middle cerebral artery (MCA) supplies most of the lateral cerebral hemisphere — including the arm and face regions of the motor and sensory cortices, and (on the left in most people) the language areas — and is the most commonly affected vessel.",
        },
        {
          kind: "table",
          headers: ["Territory", "Classic features"],
          rows: [
            ["Middle cerebral artery (MCA)", "Contralateral hemiparesis and sensory loss, face and arm worse than leg; aphasia (dominant hemisphere) or neglect (non-dominant); gaze preference towards the lesion; homonymous hemianopia"],
            ["Anterior cerebral artery (ACA)", "Contralateral weakness leg worse than arm; behavioural change; urinary incontinence"],
            ["Posterior cerebral artery (PCA)", "Contralateral homonymous hemianopia; visual and perceptual deficits; memory involvement"],
            ["Vertebrobasilar / brainstem", "Crossed signs (ipsilateral cranial nerve + contralateral limb), ataxia, vertigo, dysphagia, diplopia; locked-in syndrome with basilar occlusion"],
            ["Lacunar (small deep vessels)", "Pure motor or pure sensory stroke, or ataxic hemiparesis, without cortical signs (no aphasia/neglect)"],
          ],
        },
        {
          kind: "keypoints",
          title: "Why the MCA pattern matters to physios",
          items: [
            "Arm and face weaker than leg — walking often recovers better than hand function",
            "Left MCA: expect aphasia — adapt communication; Right MCA: expect neglect — expect underestimation of deficits and higher falls risk",
            "The motor homunculus explains the pattern: leg area is ACA territory on the medial surface",
          ],
        },
      ],
    },
    {
      slug: "impairments",
      title: "Common Impairments After Stroke",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Stroke produces a mix of motor, sensory, cognitive, perceptual and communication impairments. Physiotherapy focuses on the motor and functional consequences, but every impairment shapes how you deliver therapy.",
        },
        { kind: "image", illustration: "nervous-system", caption: "The central nervous system: damage to motor pathways from cortex through the internal capsule produces contralateral weakness and, over time, altered tone." },
        {
          kind: "cards",
          items: [
            { title: "Hemiparesis", text: "Contralateral weakness — the dominant physical impairment. Initially often flaccid (low tone), evolving over days to weeks towards hypertonia in many patients.", icon: "activity" },
            { title: "Spasticity", text: "Velocity-dependent increase in resistance to passive stretch (an upper motor neuron sign). Typically flexor-dominant in the arm, extensor-dominant in the leg. Not the same as weakness — and weakness usually limits function more.", icon: "zap" },
            { title: "Sensory loss", text: "Reduced touch, proprioception and stereognosis impair motor learning and safety — patients cannot correct what they cannot feel.", icon: "hand" },
            { title: "Unilateral neglect", text: "Failure to attend to the contralesional (usually left) side despite intact vision. Common after right-hemisphere stroke; strongly linked to falls and poorer rehab outcomes.", icon: "eye-off" },
            { title: "Aphasia", text: "Impaired language (expressive, receptive or mixed) after dominant-hemisphere stroke. Use short phrases, demonstration and gesture; never assume comprehension loss equals cognitive loss.", icon: "message-circle" },
            { title: "Dysphagia & fatigue", text: "Swallowing impairment carries aspiration risk (screen before oral intake); post-stroke fatigue is near-universal and shapes session dosing.", icon: "battery-low" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Weakness, not spasticity, is usually the main barrier to function — strengthen without fear; strengthening does not worsen spasticity.",
            "For neglect: approach, position stimuli and cue towards the affected side; for aphasia: reduce your words, increase your demonstration.",
            "Tone often evolves: flaccid → emerging spasticity → (with good management) useful movement. Reassess regularly.",
          ],
        },
      ],
    },
    {
      slug: "neuroplasticity",
      title: "Neuroplasticity: the Engine of Recovery",
      estMinutes: 3,
      difficulty: "Advanced",
      content: [
        {
          kind: "paragraph",
          text: "Recovery after stroke depends on the brain's capacity to reorganise — surviving networks take on lost functions through synaptic strengthening, dendritic sprouting and cortical map changes. Crucially, this plasticity is experience-dependent: it is shaped by what the patient actually practises. Kleim and Jones' principles of experience-dependent plasticity translate directly into how we design therapy.",
        },
        {
          kind: "steps",
          items: [
            { title: "Use it or lose it", text: "Neural circuits not actively engaged degrade. Non-use of the paretic limb leads to further loss of its cortical representation — the basis of \"learned non-use\"." },
            { title: "Use it and improve it", text: "Training that drives a circuit strengthens it. Practice of movement improves the neural substrate of that movement." },
            { title: "Specificity", text: "The nature of the training dictates the nature of the change. Practising reaching improves reaching; cycling does not train walking. Task-specific practice beats general exercise for functional goals." },
            { title: "Repetition & intensity matter", text: "Plastic change requires hundreds of repetitions and sufficient challenge. Animal models use 400–600 reaches/day; typical therapy sessions deliver a few dozen — a gap we should actively close." },
            { title: "Time matters", text: "There is a window of heightened plasticity in the first weeks to months. Early (but appropriately dosed) rehabilitation exploits it; recovery continues afterwards but more slowly." },
            { title: "Salience matters", text: "Practice must matter to the patient. Meaningful, goal-directed tasks drive greater plastic change than rote movement." },
            { title: "Transference & interference", text: "Training one skill can facilitate related skills (transference) — but plasticity can also entrench bad habits: strongly practised compensations (interference) can block recovery of normal movement." },
          ],
        },
        {
          kind: "keypoints",
          title: "Clinical translation",
          items: [
            "Count repetitions — aim for high-dose practice, not just time in therapy",
            "Choose tasks the patient values and can attempt at the edge of ability",
            "Prevent learned non-use from day one: involve the hemiplegic side in everything",
            "Beware well-practised compensations becoming permanent",
          ],
        },
      ],
    },
    {
      slug: "acute-care",
      title: "Acute Care & Early Mobilisation",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "In the first days the priorities are medical stability, preventing complications (aspiration, pressure injury, DVT, contracture, shoulder trauma) and beginning carefully dosed activity. The landmark AVERT trial reshaped early mobilisation practice: very early (within 24 hours), high-dose, prolonged out-of-bed activity produced worse outcomes than usual care, whereas shorter, more frequent sessions were associated with better odds of favourable outcome.",
        },
        {
          kind: "keypoints",
          title: "Early mobilisation — current consensus",
          items: [
            "Do not routinely mobilise intensively within the first 24 hours",
            "After 24 hours, begin mobilisation as frequent, short sessions, dosed to tolerance",
            "Monitor blood pressure, oxygen saturation, heart rate and conscious level during early sessions",
            "Screen swallowing before any oral intake; manage the shoulder from the first handling",
          ],
        },
        {
          kind: "warning",
          title: "Hold or stop early mobilisation if",
          items: [
            "Deteriorating conscious level or new/progressing neurological signs",
            "Unstable blood pressure outside the medically set parameters",
            "Oxygen saturation falling or severe symptomatic postural hypotension",
            "Suspected untreated DVT/PE, unstable cardiac rhythm, or medical instability — liaise with the team",
          ],
        },
        {
          kind: "pearls",
          items: [
            "\"Early but not too early, little and often\" summarises the AVERT lesson.",
            "Positioning, respiratory care and passive/assisted movement still happen even when out-of-bed activity is deferred.",
          ],
        },
      ],
    },
    {
      slug: "assessment",
      title: "Assessment & Outcome Measures",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Standardised measures let you quantify impairment, track recovery, communicate across the team and set realistic goals. Learn one well-validated tool per domain.",
        },
        {
          kind: "table",
          headers: ["Domain", "Measure", "Key points"],
          rows: [
            ["Tone / spasticity", "Modified Ashworth Scale (MAS)", "Grades resistance to passive movement 0–4 (with 1+). Quick and universal, though reliability is moderate; test at consistent speed and position"],
            ["Motor impairment", "Fugl-Meyer Assessment (FMA)", "Scores reflexes, movement in and out of synergy, and coordination; upper limb /66, lower limb /34. The research-standard motor recovery measure, built on the concept of stereotyped synergy stages"],
            ["Balance", "Berg Balance Scale (BBS)", "14 functional tasks scored 0–4, total /56. Lower scores indicate greater falls risk; sensitive in sub-acute stroke, ceiling effect in mild deficits"],
            ["ADL / function", "Barthel Index concept (or FIM)", "Scores independence in self-care and mobility (feeding, transfers, toileting, walking, stairs). Tracks burden-of-care level and discharge readiness"],
            ["Walking", "10 m walk test; 6-minute walk test; Functional Ambulation Category", "Speed, endurance and level of assistance — community walking generally requires around 0.8 m/s or more"],
          ],
        },
        {
          kind: "steps",
          items: [
            { title: "History & chart review", text: "Stroke type, territory, imaging, thrombolysis/thrombectomy, medical restrictions (BP parameters), premorbid function, social situation and goals." },
            { title: "Impairment testing", text: "Tone (MAS), strength/selective movement (out-of-synergy control), sensation (light touch, proprioception), coordination, neglect screen (e.g. line bisection, behavioural observation), pushing behaviour." },
            { title: "Activity testing", text: "Bed mobility, sitting balance, sit-to-stand, transfers, standing balance (Berg items), gait (level of assistance, pattern, speed), stairs, upper-limb functional tasks." },
            { title: "Synthesis", text: "Identify the key limiting impairments for each functional problem, set SMART goals with the patient, and plan practice dosage explicitly." },
          ],
        },
        {
          kind: "pearls",
          items: [
            "On the MAS, a catch and release at a specific point in range scores 1+ — grade with the limb relaxed and at consistent speed.",
            "Neglect and pusher behaviour are stronger predictors of prolonged rehabilitation than weakness alone — screen for both early.",
          ],
        },
      ],
    },
    {
      slug: "gait-rehabilitation",
      title: "Gait Rehabilitation",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Recovery of walking is the most common patient goal. The evidence supports high-repetition, task-specific gait practice — walking itself, at meaningful intensity — over impairment-only approaches. Typical hemiplegic gait problems include reduced stance stability, poor foot clearance in swing (drop foot), reduced push-off, asymmetrical step length and slow speed.",
        },
        { kind: "image", illustration: "gait-cycle", caption: "The normal gait cycle: map each hemiplegic deficit onto its phase — poor weight acceptance in early stance, reduced push-off in terminal stance and impaired foot clearance in swing." },
        {
          kind: "steps",
          items: [
            { title: "Restore the prerequisites", text: "Sitting balance → sit-to-stand → standing symmetry and weight shift onto the hemiplegic leg. Weight acceptance on the affected side is the gateway to stance phase." },
            { title: "High-repetition stepping practice", text: "Overground walking with the right level of assistance, treadmill training (with body-weight support where needed to allow volume) and circuit-class group practice all increase stepping dose." },
            { title: "Target specific deficits", text: "Drop foot: an ankle-foot orthosis (AFO) or functional electrical stimulation restores clearance and safety immediately, enabling more practice. Weak push-off and hip control: task-relevant strengthening." },
            { title: "Progress towards community walking", text: "Speed, dual tasks, uneven surfaces, outdoor conditions, distance and confidence — community ambulation needs ~0.8 m/s and endurance, not just laps of a corridor." },
          ],
        },
        { kind: "image", illustration: "walking-aids", caption: "Aid selection after stroke: a quad cane offers a stable unilateral base for hemiplegia, but choose the least supportive aid that is safe, so the aid enables stepping practice rather than replacing recovery." },
        {
          kind: "exercise",
          name: "Weight transfer onto the hemiplegic leg",
          purpose: "Build weight acceptance and stance control on the affected side — the foundation of gait symmetry.",
          position: "Standing at a plinth or in parallel bars, feet hip-width apart, therapist guarding on the affected side.",
          execution: "Shift weight laterally onto the affected leg, keeping the pelvis level and the knee softly controlled (not snapping into hyperextension). Hold 3–5 seconds, return, repeat. Progress to stepping the sound leg onto a small block while the affected leg holds stance.",
          dosage: "2–3 sets of 10–15 shifts within gait-training sessions, most days.",
          progression: "Reduce hand support, add reaching outside the base, progress to single-leg stance and step-ups.",
          precautions: "Guard against knee hyperextension and ankle instability; watch for pusher behaviour or neglect-related falls risk.",
        },
        {
          kind: "exercise",
          name: "Sit-to-stand practice",
          purpose: "Task-specific lower-limb strengthening and the single most repeated transfer of daily life.",
          position: "Firm chair, both feet back under the knees, affected foot deliberately loaded (place it slightly behind the sound foot to enforce loading).",
          execution: "Lean forward (\"nose over toes\"), push through both legs — consciously through the affected side — to stand, then lower with control over 3 seconds.",
          dosage: "Aim high: 3 sets of 10, several times daily — count repetitions across the day.",
          progression: "Lower the seat, remove hand use, hold a load, or move towards single-leg emphasis.",
          precautions: "Ensure the affected foot does not slide; guard on the affected side.",
        },
        {
          kind: "exercise",
          name: "Treadmill walking (± body-weight support)",
          purpose: "Deliver a high dose of stepping repetitions safely, at a driven speed and symmetry.",
          position: "Treadmill with harness (body-weight support if needed for safety/volume), therapist at the hemiplegic side assisting swing or foot placement as required.",
          execution: "Walk at the fastest safe comfortable speed for defined bouts, focusing on step length symmetry and heel-first contact.",
          dosage: "Bouts totalling 20–30 minutes within a session, 3–5×/week where tolerated.",
          progression: "Reduce body-weight support, increase speed and bout length, then transfer gains to overground and outdoor walking.",
          precautions: "Monitor blood pressure, saturation and fatigue, especially sub-acutely; treadmill gains must be transferred overground.",
        },
        {
          kind: "keypoints",
          items: [
            "Dose is the active ingredient — count steps and repetitions, not minutes",
            "An AFO or FES for drop foot is an enabler of practice, not an admission of failure",
            "Speed and endurance targets (≥0.8 m/s, 6MWT distance) define community readiness",
          ],
        },
      ],
    },
    {
      slug: "upper-limb-rehab",
      title: "Upper Limb Rehabilitation",
      estMinutes: 3,
      difficulty: "Advanced",
      content: [
        {
          kind: "paragraph",
          text: "Upper-limb recovery lags behind the leg in MCA strokes, and the hand is often the slowest to return. The two evidence-based pillars are task-specific training at high repetition and — for patients with some active wrist and finger extension — constraint-induced movement therapy (CIMT).",
        },
        {
          kind: "cards",
          items: [
            { title: "Task-specific training", text: "Practise real tasks (reach, grasp, transport, release, manipulate) in high volumes, graded to the edge of ability. Meaningful objects and goals exploit salience.", icon: "target" },
            { title: "CIMT concept", text: "Constrain the sound hand (mitt) for most waking hours while intensively training the paretic arm with shaping tasks. Directly attacks learned non-use. Requires ~10° active wrist and finger extension and adequate cognition.", icon: "lock" },
            { title: "Adjuncts", text: "Mirror therapy, mental practice, electrical stimulation and robotics can add practice volume or prime the system — used alongside, not instead of, task practice.", icon: "layers" },
            { title: "Learned non-use", text: "Early failed attempts teach the patient to stop using the arm; the cortical map shrinks, confirming the disuse. Break the cycle with achievable, rewarded use from the start.", icon: "refresh-ccw" },
          ],
        },
        {
          kind: "exercise",
          name: "Task-specific reach-and-grasp training",
          purpose: "High-repetition retraining of the reach-grasp-transport-release cycle — the core of arm function.",
          position: "Sitting at a table, trunk free (not strapped) but with compensations monitored; objects of graded size and weight placed at varying distances and heights.",
          execution: "Reach for, grasp, lift, transport and release objects (cups, blocks, cutlery), progressing object difficulty and placement. Keep the task at a level where roughly 70–80% of attempts succeed.",
          dosage: "Aim for 100+ quality repetitions per session, most days.",
          progression: "Smaller objects, further/higher targets, added precision (stacking, pouring), speed, and two-handed tasks.",
          precautions: "Limit excessive trunk-lean compensation (use verbal cues or a light trunk reminder); stop shoulder work into pain.",
        },
        {
          kind: "exercise",
          name: "Modified CIMT programme",
          purpose: "Reverse learned non-use in patients with emerging distal activity.",
          position: "Sound hand in a padded mitt for an agreed number of waking hours daily; therapy sessions at a table with a graded task circuit.",
          execution: "Shaping: tasks broken into achievable steps, difficulty raised in small increments, effort praised and progress measured (e.g. blocks moved per minute). A behavioural \"transfer package\" (home diary, task contracts) drives carry-over.",
          dosage: "Common modified protocols: 2–3 hours training/day plus mitt wear, 5 days/week for 2 weeks.",
          progression: "Increase task precision and speed; transfer to self-care tasks (buttons, cutlery, keys).",
          precautions: "Requires ~10° active wrist/finger extension, adequate balance with the mitt on, and cognition/engagement to consent and participate safely.",
        },
        {
          kind: "keypoints",
          items: [
            "Some active wrist/finger extension is the practical entry ticket for CIMT",
            "Repetition counts in the hundreds, task salience, and shaping are the active ingredients",
            "For severe paresis: positioning, passive/assisted movement, electrical stimulation and mirror therapy maintain the limb and prime recovery",
          ],
        },
      ],
    },
    {
      slug: "shoulder-positioning",
      title: "The Hemiplegic Shoulder & Positioning",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "In the flaccid stage, the weight of the arm distracts the humeral head from the shallow glenoid because the rotator cuff and deltoid no longer hold it — glenohumeral subluxation. A subluxed, insensate shoulder is easily injured by traction and poor handling, and hemiplegic shoulder pain then obstructs the whole rehabilitation programme.",
        },
        {
          kind: "warning",
          title: "Shoulder precautions — non-negotiable",
          items: [
            "Never pull on the hemiplegic arm during transfers or repositioning — no lifting under the axilla by the arm",
            "Support the arm's weight at all times in the flaccid stage: lap tray or arm trough in sitting, supportive positioning in bed, consider a sling only for transfers/standing in the flaccid phase",
            "Avoid forced overhead range, especially without scapular mobility and external rotation — impingement risk",
            "Handle with the humeral head supported and the scapula guided; educate the whole team and family",
          ],
        },
        {
          kind: "steps",
          items: [
            { title: "Positioning in bed", text: "Lying on the affected side: scapula protracted, shoulder forward, arm supported. Supine: pillow under the scapula and arm, hand visible. Avoid the arm dangling or trapped." },
            { title: "Positioning in sitting", text: "Hips back in the chair, feet supported, affected arm supported forward on a table or trough — never hanging. This also counters neglect by bringing the arm into view." },
            { title: "Active management", text: "Electrical stimulation to supraspinatus/posterior deltoid can reduce subluxation in the flaccid phase; begin scapular mobilisation and supported active-assisted movement early." },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Measure subluxation by palpating the fingerbreadth gap between acromion and humeral head, comparing sides.",
            "Most hemiplegic shoulder pain is preventable — it tracks with handling quality more than with stroke severity.",
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
            "85% ischaemic, 15% haemorrhagic; MCA territory most common — face/arm-dominant contralateral hemiparesis, plus aphasia (left) or neglect (right)",
            "Plasticity principles: use it or lose it, specificity, repetition, intensity, time, salience",
            "AVERT: avoid intensive mobilisation in the first 24 h; then frequent short sessions",
            "Measures: MAS (tone), Fugl-Meyer (motor), Berg (balance), Barthel concept (ADL), 10 m/6MWT (gait)",
            "Gait: weight acceptance → high-repetition stepping → AFO/FES for drop foot → community speed ≥0.8 m/s",
            "Arm: task-specific practice in the hundreds of reps; CIMT if ~10° active wrist/finger extension",
            "Shoulder: never pull the arm, support it always in the flaccid phase, position carefully",
            "Screen and manage neglect, aphasia, dysphagia and fatigue — they shape everything else",
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
      text: "Approximately what proportion of strokes are ischaemic?",
      options: ["15%", "50%", "85%", "99%"],
      correctIndex: 2,
      explanation:
        "About 85% of strokes are ischaemic (thrombotic or embolic vessel occlusion) and roughly 15% are haemorrhagic. The distinction is critical for acute medical management, while rehabilitation principles are largely shared.",
      difficulty: "Easy",
      tags: ["pathology"],
      sectionSlug: "stroke-types",
    },
    {
      text: "A right-handed patient has right-sided weakness affecting the face and arm more than the leg, with expressive aphasia. Which vascular territory is most likely involved?",
      options: [
        "Right anterior cerebral artery",
        "Left middle cerebral artery",
        "Left posterior cerebral artery",
        "Right vertebrobasilar system",
      ],
      correctIndex: 1,
      explanation:
        "Face-and-arm-dominant contralateral weakness with aphasia is the classic left (dominant-hemisphere) MCA syndrome: the MCA supplies the lateral hemisphere including the arm/face motor cortex and the language areas. ACA strokes affect the leg more than the arm.",
      difficulty: "Medium",
      tags: ["anatomy", "clinical-reasoning"],
      sectionSlug: "mca-syndrome",
    },
    {
      text: "Why does an anterior cerebral artery stroke typically weaken the leg more than the arm?",
      options: [
        "The ACA supplies the medial hemisphere surface, where the leg area of the motor homunculus lies",
        "The leg has more motor neurons than the arm",
        "The ACA supplies the brainstem",
        "Leg weakness is psychological after ACA stroke",
      ],
      correctIndex: 0,
      explanation:
        "The motor homunculus places the lower limb representation on the medial surface of the hemisphere — ACA territory — while the face and arm areas lie on the lateral surface supplied by the MCA. Territory therefore predicts the pattern of weakness.",
      difficulty: "Hard",
      tags: ["anatomy"],
      sectionSlug: "mca-syndrome",
    },
    {
      text: "Which statement best defines spasticity?",
      options: [
        "A fixed shortening of muscle and connective tissue",
        "A velocity-dependent increase in resistance to passive stretch",
        "Voluntary overactivity of antagonist muscles",
        "Loss of all reflex activity below the lesion",
      ],
      correctIndex: 1,
      explanation:
        "Spasticity is a velocity-dependent increase in tonic stretch reflexes — resistance rises the faster you move the limb. Fixed shortening describes contracture (a complication of unmanaged spasticity and immobility), which no longer varies with speed.",
      difficulty: "Easy",
      tags: ["pathology", "assessment"],
      sectionSlug: "impairments",
    },
    {
      text: "A patient with a right MCA stroke repeatedly bumps their wheelchair into door frames on the left and eats food from only the right side of the plate. This most likely represents:",
      options: [
        "Left homonymous hemianopia only",
        "Unilateral spatial neglect",
        "Receptive aphasia",
        "Cerebellar ataxia",
      ],
      correctIndex: 1,
      explanation:
        "Failure to attend to and act in the contralesional (left) space despite adequate vision is unilateral neglect — classic after right-hemisphere (non-dominant) MCA stroke. It predicts falls and slower rehabilitation, and therapy should cue attention towards the affected side. Hemianopia can coexist, but the behavioural pattern of ignoring left space indicates neglect.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "impairments",
    },
    {
      text: "Which neuroplasticity principle is directly targeted by constraint-induced movement therapy?",
      options: [
        "Interference from cerebellar circuits",
        "Reversal of learned non-use through forced, shaped use of the paretic limb",
        "Passive stretching to reset spinal reflexes",
        "Cross-education from training the sound limb",
      ],
      correctIndex: 1,
      explanation:
        "CIMT constrains the sound hand and intensively trains the paretic arm, directly attacking learned non-use (\"use it or lose it\" in reverse). Training the sound limb is exactly what CIMT prevents, because well-practised compensation entrenches non-use of the affected arm.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "upper-limb-rehab",
    },
    {
      text: "Which set of principles correctly summarises experience-dependent neuroplasticity?",
      options: [
        "Rest, immobilisation, passive movement, low repetition",
        "Use it or lose it; specificity; repetition and intensity; salience; timing",
        "Stretching, icing, compression, elevation",
        "Random practice of unrelated movements at low effort",
      ],
      correctIndex: 1,
      explanation:
        "Kleim and Jones' principles: use it or lose it, use it and improve it, specificity, repetition matters, intensity matters, time matters, salience matters, plus transference and interference. They argue for high-dose, meaningful, task-specific practice delivered early.",
      difficulty: "Easy",
      tags: ["pathology", "exercise-therapy"],
      sectionSlug: "neuroplasticity",
    },
    {
      text: "What was the key finding of the AVERT trial on very early mobilisation after stroke?",
      options: [
        "Mobilising within 24 hours in high doses improved outcomes dramatically",
        "Very early, high-dose mobilisation reduced the odds of a favourable outcome; frequent short sessions were preferable",
        "Bed rest for 2 weeks was superior to any mobilisation",
        "Timing of mobilisation makes no difference at all",
      ],
      correctIndex: 1,
      explanation:
        "AVERT found that a very early (within 24 h), high-dose, prolonged mobilisation protocol reduced the odds of favourable outcome at 3 months compared with usual care, while dose–response analyses favoured shorter, more frequent sessions. The lesson: early but not too early, little and often.",
      difficulty: "Medium",
      tags: ["management", "precautions"],
      sectionSlug: "acute-care",
    },
    {
      text: "During an early mobilisation session, a sub-acute stroke patient becomes drowsy with new slurring of speech. What should you do?",
      options: [
        "Continue — drowsiness is normal fatigue",
        "Stop the session, return the patient to safety and alert the medical team immediately",
        "Increase the intensity to stimulate arousal",
        "Give the patient a sugary drink and continue",
      ],
      correctIndex: 1,
      explanation:
        "A deteriorating conscious level or new/progressing neurological signs during activity may indicate stroke extension, haemorrhagic transformation or another medical emergency. Stop, ensure safety, monitor, and escalate to the medical team urgently.",
      difficulty: "Easy",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "acute-care",
    },
    {
      text: "On the Modified Ashworth Scale, a clear catch followed by release at a specific point in the range, with minimal resistance through the rest of range, scores:",
      options: ["0", "1+", "3", "4"],
      correctIndex: 1,
      explanation:
        "MAS 1 is a catch and release or minimal resistance at end range; 1+ is a catch followed by minimal resistance through less than half the remaining range; 3 is considerable resistance with difficult passive movement; 4 is rigidity in flexion or extension. A catch-then-minimal-resistance pattern within the range scores 1+.",
      difficulty: "Hard",
      tags: ["assessment"],
      sectionSlug: "assessment",
    },
    {
      text: "The Fugl-Meyer Assessment primarily measures:",
      options: [
        "Independence in activities of daily living",
        "Motor impairment, including movement within and outside synergy patterns",
        "Walking endurance over six minutes",
        "Cognitive function after stroke",
      ],
      correctIndex: 1,
      explanation:
        "The FMA quantifies motor impairment — reflexes, volitional movement within synergies, movement combining and then outside synergy, and coordination (upper limb /66, lower limb /34). ADL independence is the Barthel/FIM domain; endurance is the 6MWT.",
      difficulty: "Hard",
      tags: ["assessment"],
      sectionSlug: "assessment",
    },
    {
      text: "Which walking speed is commonly used as an approximate threshold for community ambulation after stroke?",
      options: ["0.2 m/s", "0.4 m/s", "0.8 m/s", "2.5 m/s"],
      correctIndex: 2,
      explanation:
        "Around 0.8 m/s is the commonly cited threshold associated with community walking ability (crossing roads, shops); household ambulation sits below ~0.4 m/s. Speed from the 10 m walk test therefore stratifies walking status and sets goals.",
      difficulty: "Medium",
      tags: ["assessment", "management"],
      sectionSlug: "gait-rehabilitation",
    },
    {
      text: "What is the primary rehabilitation rationale for prescribing an ankle-foot orthosis (AFO) for post-stroke drop foot?",
      options: [
        "It cures the underlying dorsiflexor weakness within weeks",
        "It restores swing-phase clearance and safety immediately, enabling a higher dose of walking practice",
        "It prevents all future spasticity",
        "It replaces the need for gait training",
      ],
      correctIndex: 1,
      explanation:
        "An AFO (or functional electrical stimulation) compensates for absent dorsiflexion, restoring foot clearance, heel-first contact and safety at once. Its rehabilitation value is as an enabler: safer walking allows far more stepping repetitions, which is the active ingredient of gait recovery.",
      difficulty: "Medium",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "gait-rehabilitation",
    },
    {
      text: "Why does gait training emphasise weight transfer onto the hemiplegic leg early in rehabilitation?",
      options: [
        "It reduces the metabolic cost of sitting",
        "Weight acceptance on the affected side is the prerequisite for stance phase, step symmetry and safe walking",
        "It stretches the sound leg",
        "It prevents aphasia from worsening",
      ],
      correctIndex: 1,
      explanation:
        "Patients cannot step with the sound leg unless the hemiplegic leg can accept and control body weight in stance. Weight-shift training builds this foundation; without it, gait remains asymmetrical and assisted, and falls risk stays high.",
      difficulty: "Easy",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "gait-rehabilitation",
    },
    {
      text: "Which patient is the most appropriate candidate for constraint-induced movement therapy?",
      options: [
        "Flaccid arm with no active movement and severe neglect",
        "About 10° of active wrist and finger extension, adequate balance and cognition, motivated to participate",
        "Full arm recovery with normal hand function",
        "Severe receptive aphasia with no comprehension of instructions and dense hemiplegia",
      ],
      correctIndex: 1,
      explanation:
        "Classic CIMT criteria require roughly 10° of active wrist and finger extension (evidence of preserved corticospinal drive), plus sufficient balance to wear the mitt safely and the cognition and motivation for intensive shaping practice. A flaccid arm has nothing to shape; a fully recovered arm does not need it.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "upper-limb-rehab",
    },
    {
      text: "What is the mechanism of glenohumeral subluxation in the flaccid stage after stroke?",
      options: [
        "Spastic pectoralis major pulls the humerus forward out of the joint",
        "Loss of rotator cuff and deltoid activity allows the arm's weight to distract the humeral head from the glenoid",
        "The glenoid fossa fractures during the stroke",
        "Excessive exercise stretches the capsule in all patients",
      ],
      correctIndex: 1,
      explanation:
        "The glenohumeral joint depends on active muscular support — especially supraspinatus and deltoid — because the glenoid is shallow. In flaccid paralysis this support is lost, gravity distracts the humeral head inferiorly, and the capsule and supporting tissues are left vulnerable to traction injury.",
      difficulty: "Medium",
      tags: ["anatomy", "pathology"],
      sectionSlug: "shoulder-positioning",
    },
    {
      text: "Which handling instruction for the flaccid hemiplegic arm is correct?",
      options: [
        "Pull on the arm to assist the patient forward in transfers",
        "Let the arm hang free in sitting to encourage tone",
        "Never pull on the arm; support its weight on a tray or trough and guide transfers from the trunk and scapula",
        "Force full overhead range daily to prevent stiffness regardless of pain",
      ],
      correctIndex: 2,
      explanation:
        "Traction on a subluxed, unprotected shoulder is a principal cause of hemiplegic shoulder pain. The arm's weight must be supported (tray, trough, careful bed positioning), transfers guided proximally, and overhead range never forced — especially without scapular movement and external rotation.",
      difficulty: "Easy",
      tags: ["precautions", "management"],
      sectionSlug: "shoulder-positioning",
    },
    {
      text: "A patient consistently practises walking with a strong trunk-lean and hip-hitch compensation, which is becoming faster and more automatic each week. Through a plasticity lens, what is happening?",
      options: [
        "Nothing — compensations always disappear on their own",
        "The compensation itself is being learned and consolidated; entrenched abnormal patterns can interfere with recovering more normal movement",
        "Compensations cannot be learned because the brain is damaged",
        "Faster compensation always means better neurological recovery",
      ],
      correctIndex: 1,
      explanation:
        "Plasticity is not selective for \"good\" movement: whatever is repeated intensively is what gets encoded. Highly practised compensations become efficient and automatic, and interference means they can then compete with and block recovery of more normal strategies — so monitor what is actually being rehearsed, not just that walking is occurring.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "exercise-therapy", "pathology"],
      sectionSlug: "neuroplasticity",
    },
    {
      text: "The Berg Balance Scale involves:",
      options: [
        "14 functional balance tasks each scored 0–4, with a maximum of 56",
        "Timed walking over 10 metres",
        "Grading resistance to passive movement",
        "A questionnaire about fear of falling",
      ],
      correctIndex: 0,
      explanation:
        "The Berg Balance Scale scores 14 functional tasks (sitting and standing balance, transfers, reaching, turning, single-leg stance and more) from 0–4, totalling 56. Lower scores indicate greater balance impairment and falls risk; it is widely used in sub-acute stroke.",
      difficulty: "Easy",
      tags: ["assessment"],
      sectionSlug: "assessment",
    },
  ],
  flashcards: [
    { front: "Two main types of stroke and their proportions?", back: "Ischaemic (~85%, vessel occlusion by thrombus/embolus) and haemorrhagic (~15%, vessel rupture)." },
    { front: "Classic MCA stroke pattern?", back: "Contralateral hemiparesis and sensory loss, face and arm worse than leg; aphasia if dominant hemisphere, neglect if non-dominant; possible homonymous hemianopia." },
    { front: "Why is the leg spared relative to the arm in MCA stroke?", back: "The leg area of the motor homunculus lies on the medial hemisphere surface — anterior cerebral artery territory." },
    { front: "Define spasticity.", back: "A velocity-dependent increase in resistance to passive stretch — an upper motor neuron sign, distinct from fixed contracture." },
    { front: "List the key experience-dependent plasticity principles.", back: "Use it or lose it; use it and improve it; specificity; repetition matters; intensity matters; time matters; salience matters; transference and interference." },
    { front: "AVERT trial take-home message?", back: "Very early (<24 h), high-dose mobilisation worsened outcomes; after 24 hours, mobilise in frequent short sessions — early but not too early, little and often." },
    { front: "Standard measure for post-stroke tone?", back: "Modified Ashworth Scale (0, 1, 1+, 2, 3, 4) grading resistance to passive movement." },
    { front: "What does the Fugl-Meyer Assessment measure?", back: "Motor impairment — reflexes, movement within/combining/outside synergies and coordination; UL /66, LL /34." },
    { front: "Approximate walking speed for community ambulation?", back: "About 0.8 m/s or faster on the 10 m walk test." },
    { front: "Entry criteria for CIMT?", back: "Roughly 10° active wrist and finger extension, adequate balance with the mitt on, and sufficient cognition/motivation for intensive shaping practice." },
    { front: "Why does the hemiplegic shoulder sublux?", back: "Flaccid rotator cuff and deltoid no longer hold the humeral head in the shallow glenoid, so the arm's weight distracts it inferiorly." },
    { front: "Core shoulder precautions after stroke?", back: "Never pull on the arm, support its weight at all times in the flaccid stage, avoid forced overhead range, guide transfers from trunk and scapula." },
  ],
};

export default topic;
