import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "frozen-shoulder",
  title: "Frozen Shoulder & Stiff Shoulder",
  category: "Musculoskeletal",
  description:
    "Adhesive capsulitis from pathology to prognosis: recognising the hallmark global loss of passive movement, staging by irritability, and managing a condition that takes months to years — honestly and effectively.",
  difficulty: "Intermediate",
  estMinutes: 23,
  icon: "circle-dot",
  keyTakeaways: [
    "Frozen shoulder (adhesive capsulitis) is fibrosis and contracture of the glenohumeral capsule, producing pain and a true global loss of both active AND passive range.",
    "The hallmark sign is marked loss of passive external rotation with the arm at the side — the single most useful examination finding.",
    "Rotator cuff pathology preserves passive range; frozen shoulder does not. This one distinction sorts most stiff, painful shoulders.",
    "It classically evolves through overlapping phases — painful (freezing), stiff (frozen) and recovery (thawing) — over a realistic timeframe of 1–3 years.",
    "Diabetes and thyroid disease markedly increase risk; the typical patient is 40–60 years old, and the condition is more common in women.",
    "A locked posterior shoulder dislocation can mimic frozen shoulder — X-ray any stiff shoulder with a trauma or seizure history before diagnosing capsulitis.",
    "Match treatment to irritability: education, gentle range work and consider corticosteroid injection when highly irritable; progressive stretching and mobilisation when irritability is low.",
    "Honest prognosis education is a core treatment — most patients improve substantially, but recovery is slow and some retain minor permanent stiffness.",
  ],
  sections: [
    {
      slug: "pathology",
      title: "What Is Frozen Shoulder?",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Frozen shoulder — adhesive capsulitis in the literature, though true \"adhesions\" are not the problem — is a condition in which the glenohumeral joint capsule becomes inflamed, then thickened, fibrotic and contracted. The normally loose capsular folds (especially the axillary fold and rotator interval) stiffen, the capsule loses volume, and the joint physically cannot move through full range.",
        },
        { kind: "image", illustration: "shoulder-joint", caption: "The glenohumeral joint relies on a loose, capacious capsule for its huge range of movement — in frozen shoulder this capsule becomes inflamed, fibrotic and contracted, mechanically blocking motion." },
        {
          kind: "paragraph",
          text: "Histologically the process resembles Dupuytren's disease of the hand: fibroblast proliferation, new collagen deposition and capsular contracture, with an early inflammatory and highly pain-sensitive phase. This is why early-stage frozen shoulder is dominated by pain (often severe and constant) and later stages by stiffness.",
        },
        {
          kind: "cards",
          items: [
            { title: "Primary (idiopathic)", text: "Arises without a clear trigger — the classic presentation in a 40–60-year-old, often beginning as insidious shoulder pain that steadily stiffens.", icon: "help-circle" },
            { title: "Secondary", text: "Follows trauma, surgery or a period of immobilisation (e.g. after a wrist fracture in a sling, breast surgery, or cardiac events) — the shoulder stiffens in the aftermath.", icon: "link" },
          ],
        },
        {
          kind: "keypoints",
          title: "Core pathology",
          items: [
            "Capsular inflammation → fibrosis → contracture: a mechanical block, not just pain inhibition",
            "Rotator interval and axillary fold are key sites of contracture — explaining early external rotation loss",
            "Early phase = inflammatory and pain-dominant; later phases = fibrotic and stiffness-dominant",
            "Self-limiting in most people, but over years rather than weeks",
          ],
        },
      ],
    },
    {
      slug: "natural-history",
      title: "Natural History & Phases",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Frozen shoulder classically evolves through three overlapping phases. The boundaries blur in real patients and durations vary widely, but the framework helps patients understand where they are and what comes next.",
        },
        {
          kind: "steps",
          items: [
            { title: "Freezing (painful) phase — ~2–9 months", text: "Increasingly severe pain, often worse at night and with sudden movements; range progressively restricts. Pain frequently precedes obvious stiffness, so early cases are commonly mislabelled as rotator cuff problems." },
            { title: "Frozen (stiff) phase — ~4–12 months", text: "Pain gradually eases but stiffness dominates. Range — especially external rotation and elevation — is markedly restricted; function (reaching behind the back, overhead, dressing) is the main complaint." },
            { title: "Thawing (recovery) phase — ~6–24 months", text: "Range and function gradually return. Recovery is real but slow, and a minority retain some permanent (usually minor) restriction." },
          ],
        },
        {
          kind: "keypoints",
          title: "Honest timeframes",
          items: [
            "Total course is realistically 1–3 years — telling patients \"a few weeks of physio will fix it\" sets everyone up to fail",
            "Most people regain good function; mild residual stiffness persists in a substantial minority and severe restriction in a small minority",
            "Phase durations overlap and vary — stage by presentation (pain vs stiffness dominance, irritability), not by the calendar",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Night pain that prevents lying on the affected side is characteristic of the freezing phase.",
            "The transition from \"pain-dominant\" to \"stiffness-dominant\" is the practical signal to shift from symptom-calming care toward progressive stretching and mobilisation.",
          ],
        },
      ],
    },
    {
      slug: "risk-factors",
      title: "Who Gets It: Risk Factors",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "cards",
          items: [
            { title: "Age 40–60", text: "The overwhelming majority of cases occur in this window — frozen shoulder under 40 is uncommon and over 70 should prompt a second look at the diagnosis.", icon: "clock" },
            { title: "Diabetes", text: "The strongest systemic risk factor: substantially higher lifetime risk, often more severe, more prolonged, more resistant to treatment, and more frequently bilateral.", icon: "droplet" },
            { title: "Thyroid disease", text: "Both hypo- and hyperthyroidism increase risk — worth asking about (and screening for) in a new frozen shoulder.", icon: "activity" },
            { title: "Female sex", text: "More common in women across most series.", icon: "user" },
            { title: "Immobilisation", text: "A shoulder rested in a sling after injury or surgery is a shoulder at risk — one reason prolonged unnecessary sling use is discouraged.", icon: "lock" },
            { title: "Other associations", text: "Dupuytren's disease, cardiac disease/surgery, stroke, and a previous frozen shoulder on the other side (contralateral recurrence is common; same-side recurrence is rare).", icon: "repeat" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "A new frozen shoulder is a reasonable prompt to check HbA1c and thyroid function if not recently done.",
            "In people with diabetes, warn that the course may be longer and both shoulders can be affected over time.",
          ],
        },
      ],
    },
    {
      slug: "hallmark-signs",
      title: "The Hallmark: Global Passive Restriction",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "The diagnostic heart of frozen shoulder is on passive testing: because the capsule itself is contracted, movement is lost whether the patient moves the arm or you do. External rotation with the arm at the side is affected earliest and most severely — a firm, capsular block often at 50% or less of the other side. Abduction and elevation are also markedly restricted; the shoulder shrugs (scapula substitutes) as the patient tries to lift the arm.",
        },
        {
          kind: "paragraph",
          text: "Contrast this with rotator cuff pathology, where the problem is the muscle-tendon unit: active movement is painful or weak, but when you passively move the relaxed arm, range is essentially full. This single distinction — passive range lost versus preserved — sorts most painful stiff shoulders in the clinic.",
        },
        {
          kind: "table",
          headers: ["Feature", "Frozen shoulder", "Rotator cuff pathology"],
          rows: [
            ["Passive ROM", "Globally restricted with a firm capsular end-feel — especially external rotation", "Essentially preserved (may be mildly limited by pain)"],
            ["Active ROM", "Restricted, mirroring the passive loss", "Restricted or painful, often exceeding what pain lets them show — passive exceeds active"],
            ["External rotation at the side", "Markedly reduced — the hallmark", "Usually full range, may be weak or painful"],
            ["Pain pattern", "Freezing phase: severe, constant, night-dominant; later: end-range stretching pain", "Load- and position-related (overhead, painful arc); night pain when lying on that side"],
            ["Strength (within available range)", "Largely preserved", "Weakness in the affected tendon's direction (e.g. empty-can, ER weakness)"],
            ["X-ray", "Normal glenohumeral joint (by definition)", "Usually normal or minor changes"],
          ],
        },
        {
          kind: "keypoints",
          title: "Making the diagnosis",
          items: [
            "Clinical diagnosis: progressive pain and stiffness + marked global PASSIVE restriction (ER worst) + a normal X-ray",
            "The normal X-ray matters: it excludes glenohumeral OA and locked posterior dislocation, the two great structural mimics",
            "If passive ER at the side is full and painless, it is almost certainly not frozen shoulder",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Test passive external rotation with the elbow tucked at the side and bent to 90° — the quickest, most reliable frozen-shoulder screen in the clinic.",
            "\"Can't reach the back pocket, bra strap or seatbelt\" — internal-rotation-behind-back is usually the most functionally missed movement.",
          ],
        },
      ],
    },
    {
      slug: "differentials",
      title: "Differentials & Red Flags",
      estMinutes: 2,
      difficulty: "Advanced",
      content: [
        {
          kind: "table",
          headers: ["Condition", "Distinguishing features"],
          rows: [
            ["Glenohumeral OA", "Same global stiffness pattern, but X-ray shows joint space loss and osteophytes — this is why imaging is part of the frozen shoulder work-up; more crepitus, older patients"],
            ["Locked posterior dislocation", "History of seizure, electric shock or significant trauma; arm fixed in internal rotation with a mechanical block to external rotation. Easily missed on a single AP view — insist on adequate X-ray views"],
            ["Rotator cuff pathology / cuff tear", "Passive range preserved; weakness in specific directions; painful arc"],
            ["Calcific tendinopathy (acute)", "Sudden severe pain, exquisite tenderness; X-ray shows the calcific deposit"],
            ["Cervical radiculopathy", "Neck pain, dermatomal arm symptoms, neurological signs; shoulder passive range full"],
            ["Malignancy (e.g. apical lung tumour, metastasis)", "Constant progressive pain unrelieved by rest or position, night pain with systemic features, weight loss, smoking history — a stiff painful shoulder can be the first sign"],
            ["Inflammatory arthritis / polymyalgia rheumatica", "Bilateral shoulder/hip girdle pain and stiffness in an older adult, prolonged morning stiffness, systemic symptoms — check inflammatory markers"],
          ],
        },
        {
          kind: "redflags",
          items: [
            "Trauma, first-time seizure or electric shock with a stiff shoulder — X-ray to exclude locked posterior dislocation before diagnosing frozen shoulder",
            "Constant, progressive, non-mechanical pain, night sweats, weight loss, or a cancer history — investigate for malignancy",
            "Fever, systemic illness or a hot swollen joint — possible septic arthritis",
            "Marked bilateral girdle stiffness in an older adult with raised inflammatory markers — consider polymyalgia rheumatica",
            "Neurological deficit in the arm — look to the cervical spine and brachial plexus",
          ],
        },
        {
          kind: "warning",
          title: "Do not miss",
          items: [
            "Every suspected frozen shoulder deserves an X-ray at some point: capsulitis cannot be distinguished from glenohumeral OA or a locked posterior dislocation by examination alone.",
            "Posterior dislocations are missed in a large proportion of cases at first presentation — the fixed internally rotated arm is the clue.",
          ],
        },
      ],
    },
    {
      slug: "management-by-stage",
      title: "Management by Irritability Stage",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "There is no treatment that reliably shortens the overall course of frozen shoulder, so management aims to control pain, maintain and then restore movement, and keep the person functioning — matched to irritability rather than delivered as one-size-fits-all.",
        },
        {
          kind: "steps",
          items: [
            { title: "High irritability (usually freezing phase)", text: "Pain dominates: education and reassurance, activity modification within comfort, gentle unloaded range work (pendulums, supported table slides) short of provocation, sleep advice (pillow support), simple analgesia via the GP. An intra-articular corticosteroid injection has good evidence for meaningful short-term pain relief in this phase and can unlock engagement with rehabilitation." },
            { title: "Moderate irritability", text: "Pain and stiffness share the stage: progress towards end-range but respectful stretching, add gentle joint mobilisation, begin strengthening within available range, and keep expectations anchored." },
            { title: "Low irritability (frozen/thawing phases)", text: "Stiffness dominates: progressive home stretching into firm end-range discomfort, higher-grade joint mobilisation, sustained holds (including pulley and stick work), and graded functional loading. Stretch intensity that would have been foolish in month two is appropriate now." },
          ],
        },
        {
          kind: "table",
          headers: ["Option", "Where it fits"],
          rows: [
            ["Education + home exercise", "Everyone, every stage — the foundation"],
            ["Intra-articular corticosteroid injection", "High-irritability pain, especially in the first months — good short-term relief, best combined with exercise"],
            ["Physiotherapy stretching + mobilisation", "Increasingly central as irritability falls"],
            ["Hydrodilatation (distension injection)", "An option for persistent stiffness — evidence broadly comparable to steroid injection"],
            ["Capsular release / manipulation under anaesthesia", "Persistent, function-limiting stiffness despite months of proper conservative care — surgical opinion"],
          ],
        },
        {
          kind: "warning",
          title: "Management mistakes",
          items: [
            "Aggressive end-range stretching in the highly irritable phase — it flares pain, erodes trust, and does not speed recovery",
            "Prescribing complete rest or a sling — immobilisation feeds stiffness",
            "Promising a quick fix — the timeframe conversation avoided early becomes the complaint later",
            "Endless passive treatment without a progressive home programme",
          ],
        },
      ],
    },
    {
      slug: "expectations",
      title: "Prognosis & Realistic Expectations",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Setting expectations IS treatment in frozen shoulder. Patients who understand the condition's slow arc stop chasing cures, sleep better, and engage with the unglamorous work of graded movement. Patients who expect a six-week fix cycle through practitioners, imaging and interventions, accumulating anxiety with each \"failure\".",
        },
        {
          kind: "cards",
          items: [
            { title: "The honest headline", text: "\"This condition is very real, very painful, and very slow — most people improve substantially, but over one to three years, and treatment manages the journey rather than shortcutting it.\"", icon: "message-circle" },
            { title: "What treatment can do", text: "Reduce pain (especially injection early), maintain function, restore movement faster in the later phases, and protect sleep and work.", icon: "check-circle" },
            { title: "What treatment cannot do", text: "No physiotherapy technique, injection or exercise has been shown to reliably shorten the total course. Beware anyone promising otherwise.", icon: "x-circle" },
            { title: "The long view", text: "Most regain good, functional shoulders. A substantial minority keep some minor stiffness (often unnoticed in daily life); severe long-term restriction is uncommon.", icon: "trending-up" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Review appointments spaced further apart with a strong home programme respect both the biology and the patient's wallet.",
            "In diabetes, set expectations for a longer, tougher course from the outset.",
          ],
        },
      ],
    },
    {
      slug: "exercise-blocks",
      title: "Key Exercises",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Exercise selection tracks irritability: pendulums and supported slides while pain dominates; progressively firmer external rotation and elevation stretching as stiffness takes over. Little and often beats occasional heroics — several short sessions daily.",
        },
        {
          kind: "exercise",
          name: "Pendulum exercises",
          purpose: "Gentle unloaded joint movement and pain modulation in the highly irritable phase.",
          position: "Standing, hinged forward at the hips, supporting the good arm on a table; the affected arm hangs relaxed.",
          execution: "Let the arm swing gently — forward-back, side-to-side and small circles — driven by body sway rather than shoulder muscles.",
          dosage: "1–2 minutes, 3–5×/day.",
          progression: "Slightly larger circles; this is a comfort exercise, not a stretching one.",
          precautions: "Should feel easing, not provoking; keep the arm truly relaxed.",
        },
        {
          kind: "exercise",
          name: "Table slides (flexion)",
          purpose: "Supported elevation range without the weight of the arm.",
          position: "Sitting at a table, forearm resting on a cloth or towel on the surface.",
          execution: "Slide the arm forward along the table, letting the trunk lean in, until a comfortable-to-firm stretch is felt at the shoulder; hold 5–15 seconds, slide back.",
          dosage: "8–10 reps, 2–3×/day.",
          progression: "Slide further into range and hold longer as irritability falls; progress to wall slides standing.",
          precautions: "In the irritable phase stay short of sharp pain; in the stiff phase a firm stretch sensation is the goal.",
        },
        {
          kind: "exercise",
          name: "External rotation stretch with a stick",
          purpose: "Targets the hallmark restriction — external rotation — using the good arm to assist.",
          position: "Standing or supine, affected elbow tucked into the side and bent to 90°, holding one end of a stick (walking stick, umbrella); the good hand holds the other end.",
          execution: "Push with the good arm so the affected forearm rotates outward, keeping the elbow pinned to the side; hold the stretch 15–30 seconds.",
          dosage: "4–5 holds, 2–3×/day (low irritability); shorter, gentler holds if moderately irritable.",
          progression: "Increase hold time and end-range pressure; add a small towel under the armpit to keep the elbow tucked.",
          precautions: "The elbow must stay at the side — letting it drift away fakes the movement and misses the capsule.",
        },
        {
          kind: "exercise",
          name: "Overhead pulley",
          purpose: "Assisted elevation range using the good arm — a staple of the stiff and thawing phases.",
          position: "Sitting under a door- or wall-mounted pulley, one handle in each hand.",
          execution: "Pull down with the good arm to raise the affected arm toward the comfortable-to-firm end of elevation range; hold briefly, lower with control.",
          dosage: "10–15 reps, 1–2×/day.",
          progression: "Longer end-range holds; work closer to the firm barrier as irritability allows.",
          precautions: "Avoid hiking the shoulder toward the ear — think \"long arm\", and keep it out of provocation in the irritable phase.",
        },
        {
          kind: "warning",
          title: "A note on the sleeper stretch",
          items: [
            "The sleeper stretch (side-lying internal rotation stretch) compresses and stretches an already inflamed capsule and is frequently too provocative in frozen shoulder — especially in irritable stages.",
            "If used at all, reserve it for the late, low-irritability phase, keep intensity gentle, and drop it if night pain worsens.",
            "Behind-back internal rotation with a towel is usually a better-tolerated way to restore internal rotation range.",
          ],
        },
        {
          kind: "keypoints",
          title: "Dosing by irritability",
          items: [
            "High irritability: frequent, short, comfortable movement — pain should settle quickly after each session",
            "Low irritability: fewer, longer, firmer end-range holds — stretching discomfort that settles is expected and acceptable",
            "Everything is done many times daily; a home programme, not a clinic programme",
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
            "Pathology: capsular inflammation → fibrosis → contracture (Dupuytren-like); rotator interval and axillary fold key sites",
            "Phases: freezing (pain, 2–9 mo) → frozen (stiffness, 4–12 mo) → thawing (recovery, 6–24 mo); total 1–3 years",
            "Risks: age 40–60, diabetes (worst), thyroid disease, female sex, immobilisation",
            "Hallmark: global PASSIVE restriction, external rotation worst — cuff pathology preserves passive range",
            "Always X-ray: excludes glenohumeral OA and locked posterior dislocation (post-seizure/trauma!)",
            "High irritability: education, gentle ROM, consider corticosteroid injection. Low irritability: progressive stretching + mobilisation",
            "Nothing reliably shortens the course — honest timeframes are a treatment",
            "Red flags: trauma/seizure history, constant non-mechanical pain, systemic features, neurological signs",
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
      text: "What is the underlying pathology of frozen shoulder?",
      options: [
        "Rupture of the supraspinatus tendon",
        "Inflammation, fibrosis and contracture of the glenohumeral joint capsule",
        "Osteophyte formation within the glenohumeral joint",
        "Compression of the brachial plexus",
      ],
      correctIndex: 1,
      explanation:
        "Frozen shoulder (adhesive capsulitis) is a capsular disease: the glenohumeral capsule becomes inflamed, then thickened, fibrotic and contracted — histologically similar to Dupuytren's disease — mechanically blocking movement. The rotator interval and axillary fold are key sites of contracture.",
      difficulty: "Easy",
      tags: ["pathology", "anatomy"],
      sectionSlug: "pathology",
    },
    {
      text: "Which movement loss is the hallmark examination finding of frozen shoulder?",
      options: [
        "Loss of active elevation with full passive range",
        "Marked loss of PASSIVE external rotation with the arm at the side",
        "Isolated loss of horizontal adduction",
        "Weak but full-range abduction",
      ],
      correctIndex: 1,
      explanation:
        "Because the capsule — especially the rotator interval — is contracted, passive external rotation with the elbow at the side is lost earliest and most severely, with a firm capsular end-feel. Movement is restricted whether the patient moves the arm or the examiner does; if passive ER is full, frozen shoulder is very unlikely.",
      difficulty: "Easy",
      tags: ["assessment", "special-tests"],
      sectionSlug: "hallmark-signs",
    },
    {
      text: "A patient has a painful shoulder with weakness on resisted external rotation, but when the examiner moves the relaxed arm, passive range is full. What does this pattern indicate?",
      options: [
        "Frozen shoulder",
        "Rotator cuff pathology rather than frozen shoulder",
        "Glenohumeral osteoarthritis",
        "Locked posterior dislocation",
      ],
      correctIndex: 1,
      explanation:
        "Preserved passive range with painful or weak active movement points to the muscle-tendon unit — rotator cuff pathology. In frozen shoulder the capsule itself is contracted, so passive and active range are both restricted. This passive-range distinction sorts most stiff painful shoulders.",
      difficulty: "Easy",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "hallmark-signs",
    },
    {
      text: "What is a realistic total timeframe to give a patient newly diagnosed with frozen shoulder?",
      options: ["2–6 weeks", "2–3 months", "1–3 years", "5–10 years in most cases"],
      correctIndex: 2,
      explanation:
        "Across the freezing (≈2–9 months), frozen (≈4–12 months) and thawing (≈6–24 months) phases, the realistic total course is one to three years. Setting this expectation honestly at the start is itself a treatment — it prevents cycles of 'failed' quick fixes and supports engagement with graded self-management.",
      difficulty: "Easy",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "natural-history",
    },
    {
      text: "Which systemic condition most increases the risk of frozen shoulder?",
      options: ["Hypertension", "Diabetes mellitus", "Asthma", "Osteoporosis"],
      correctIndex: 1,
      explanation:
        "Diabetes is the strongest systemic risk factor: substantially higher lifetime risk, often a more severe and prolonged course, greater treatment resistance and more frequent bilateral involvement. Thyroid disease (both hypo- and hyper-) also increases risk. A new frozen shoulder is a reasonable prompt to check HbA1c and thyroid function.",
      difficulty: "Easy",
      tags: ["pathology", "assessment"],
      sectionSlug: "risk-factors",
    },
    {
      text: "A 52-year-old presents with a stiff shoulder fixed in internal rotation after a first seizure. External rotation is mechanically blocked. What must be done before treating this as frozen shoulder?",
      options: [
        "Begin aggressive external rotation stretching",
        "X-ray (with adequate views) to exclude a locked posterior shoulder dislocation",
        "Corticosteroid injection into the joint",
        "Six weeks of pendulum exercises then review",
      ],
      correctIndex: 1,
      explanation:
        "A seizure, electric shock or significant trauma followed by a shoulder fixed in internal rotation with blocked external rotation is a locked posterior dislocation until proven otherwise. These are missed in a large proportion of first presentations, partly because a single AP X-ray view can look deceptively normal — adequate imaging is mandatory before any capsulitis management.",
      difficulty: "Medium",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "differentials",
    },
    {
      text: "Why is an X-ray part of the diagnostic work-up of a suspected frozen shoulder?",
      options: [
        "To visualise the capsular fibrosis directly",
        "To exclude the structural mimics — glenohumeral OA and locked posterior dislocation — which examination cannot reliably distinguish",
        "To measure the degree of external rotation loss",
        "X-rays are never indicated in shoulder pain",
      ],
      correctIndex: 1,
      explanation:
        "Frozen shoulder has a normal glenohumeral X-ray by definition. Glenohumeral OA produces the same global stiffness pattern but shows joint space loss and osteophytes, and a locked posterior dislocation mechanically blocks rotation — neither can be reliably separated from capsulitis by examination alone. The X-ray does not show the capsule; it rules out the mimics.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "differentials",
    },
    {
      text: "Which management approach is most appropriate for a HIGHLY irritable freezing-phase frozen shoulder?",
      options: [
        "Aggressive end-range stretching and high-grade mobilisation",
        "Complete rest in a sling for six weeks",
        "Education, gentle range-of-movement within comfort, sleep advice, and consideration of an intra-articular corticosteroid injection",
        "Immediate referral for capsular release surgery",
      ],
      correctIndex: 2,
      explanation:
        "In the pain-dominant phase, aggressive stretching flares symptoms without speeding recovery, and immobilisation feeds stiffness. The evidence-based package is education, comfortable movement (pendulums, supported slides), sleep positioning, simple analgesia — and an intra-articular corticosteroid injection, which has good evidence for meaningful short-term pain relief in the early phase. Surgery is reserved for persistent stiffness much later.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "management-by-stage",
    },
    {
      text: "When does progressively firm end-range stretching become the appropriate core of treatment?",
      options: [
        "From day one in every patient",
        "When irritability is low and stiffness dominates (frozen/thawing phases)",
        "Only after surgery",
        "Never — stretching is contraindicated throughout",
      ],
      correctIndex: 1,
      explanation:
        "Treatment is staged by irritability. Once pain has settled into an end-range stretching pattern and stiffness dominates, progressively firmer stretching, sustained holds and higher-grade joint mobilisation are appropriate and well tolerated — intensity that would have flared the shoulder badly in the early inflammatory phase.",
      difficulty: "Medium",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "management-by-stage",
    },
    {
      text: "Which statement about treatment effects on the course of frozen shoulder is accurate?",
      options: [
        "Corticosteroid injection cures the condition permanently",
        "Intensive physiotherapy halves the total duration in most patients",
        "No treatment reliably shortens the overall course; treatment manages pain and function along the way",
        "Manipulation under anaesthesia is first-line at diagnosis",
      ],
      correctIndex: 2,
      explanation:
        "No injection, exercise programme or physiotherapy technique has been shown to reliably shorten the total course. Injection provides good short-term pain relief early; stretching and mobilisation restore movement in later phases; surgery is a late option for persistent stiffness. Honest framing of what treatment can and cannot do is central to good care.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "expectations",
    },
    {
      text: "Why is the sleeper stretch used cautiously in frozen shoulder?",
      options: [
        "It only works in adolescent athletes",
        "It compresses and stretches an already inflamed, contracted capsule and is often too provocative, especially in irritable stages",
        "It stretches the wrong joint entirely",
        "It requires expensive equipment",
      ],
      correctIndex: 1,
      explanation:
        "Side-lying internal rotation stretching drives the humeral head into the sensitised capsule under body weight and is frequently too aggressive for irritable frozen shoulders — often worsening night pain. If used at all, it is reserved for late, low-irritability phases; behind-back towel stretches usually restore internal rotation with far better tolerance.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "precautions"],
      sectionSlug: "exercise-blocks",
    },
    {
      text: "In the external rotation stretch with a stick, why must the elbow stay tucked into the side?",
      options: [
        "To protect the wrist from strain",
        "Because letting the elbow drift away substitutes abduction for true external rotation and misses the capsular restriction",
        "To strengthen the biceps",
        "It makes the exercise harder for the good arm",
      ],
      correctIndex: 1,
      explanation:
        "The target is glenohumeral external rotation against the contracted rotator interval and anterior capsule. If the elbow drifts away from the side, the movement becomes abduction and trick motion, the stretch bypasses the restricted tissue, and range 'gains' are illusory. A towel held between elbow and trunk keeps the technique honest.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "anatomy"],
      sectionSlug: "exercise-blocks",
    },
    {
      text: "Which presentation should prompt investigation for malignancy rather than routine frozen shoulder care?",
      options: [
        "Night pain when lying on the affected shoulder that eases with repositioning",
        "Constant, progressive pain unrelieved by rest or position, with weight loss and a heavy smoking history",
        "Stiffness that is worst reaching behind the back",
        "Pain flaring for a day after firm stretching",
      ],
      correctIndex: 1,
      explanation:
        "Constant non-mechanical pain with systemic features (weight loss, night sweats) or relevant history (smoking, previous cancer) raises concern for malignancy — for example an apical lung tumour or metastatic disease can present as shoulder pain and stiffness. Mechanical night pain, capsular stiffness patterns and short-lived post-stretch flares are expected in frozen shoulder.",
      difficulty: "Hard",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "differentials",
    },
    {
      text: "A 58-year-old with a globally stiff shoulder has an X-ray showing glenohumeral joint space loss and osteophytes. What does this change?",
      options: [
        "Nothing — X-ray findings are irrelevant to stiffness",
        "The diagnosis is glenohumeral OA, not frozen shoulder, altering prognosis and management options",
        "It confirms adhesive capsulitis",
        "It indicates a rotator cuff tear",
      ],
      correctIndex: 1,
      explanation:
        "Frozen shoulder requires an essentially normal glenohumeral X-ray. Joint space narrowing and osteophytes indicate glenohumeral OA, which mimics capsulitis clinically but has a different trajectory (progressive, not self-limiting), different injection considerations and a possible arthroplasty endpoint — exactly why imaging belongs in the stiff-shoulder work-up.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "hallmark-signs",
    },
    {
      text: "During the freezing phase, what is the typical dominant complaint?",
      options: [
        "Painless stiffness",
        "Severe pain — often constant, night-dominant, and provoked by sudden movements — with progressively restricting range",
        "Isolated weakness without pain",
        "Numbness in the hand",
      ],
      correctIndex: 1,
      explanation:
        "The early inflammatory phase is pain-dominant: severe, often constant pain, characteristic night pain preventing lying on that side, and jolts of pain with sudden movement, while stiffness gradually accrues. Because pain precedes obvious stiffness, early cases are frequently mislabelled as rotator cuff problems — recheck passive ER as the picture evolves.",
      difficulty: "Medium",
      tags: ["pathology", "assessment"],
      sectionSlug: "natural-history",
    },
    {
      text: "What is the most appropriate exercise prescription philosophy for a highly irritable frozen shoulder?",
      options: [
        "One long, intense stretching session weekly",
        "Frequent short sessions of comfortable movement (pendulums, supported slides) that settle quickly afterwards",
        "Heavy resistance training to fatigue daily",
        "No movement at all until pain resolves",
      ],
      correctIndex: 1,
      explanation:
        "In high irritability, the aim is to keep the joint moving within comfort without provoking flares: little and often — pendulums and supported table slides several times daily, each session settling quickly. Firm end-range work waits for low irritability; complete rest feeds contracture.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "exercise-blocks",
    },
    {
      text: "Which feature of frozen shoulder in people with diabetes is important for expectation-setting?",
      options: [
        "The condition resolves twice as fast",
        "The course is often longer, more severe, more treatment-resistant, and both shoulders may be affected over time",
        "Injection therapy is contraindicated",
        "Passive range remains normal",
      ],
      correctIndex: 1,
      explanation:
        "Diabetic frozen shoulder tends to run a harder course: more severe restriction, slower resolution, poorer response to treatment and a higher rate of bilateral involvement (usually sequentially). Setting this expectation early — while still emphasising that most patients improve — protects the therapeutic relationship and adherence.",
      difficulty: "Hard",
      tags: ["management", "pathology"],
      sectionSlug: "risk-factors",
    },
    {
      text: "Bilateral shoulder and hip girdle pain with prolonged morning stiffness in a 68-year-old should prompt consideration of which differential?",
      options: [
        "Bilateral primary frozen shoulder",
        "Polymyalgia rheumatica — check inflammatory markers",
        "Bilateral rotator cuff tears from overuse",
        "Cervical radiculopathy",
      ],
      correctIndex: 1,
      explanation:
        "Symmetrical girdle pain and marked morning stiffness in an older adult is the classic presentation of polymyalgia rheumatica, typically with raised inflammatory markers and a dramatic response to low-dose corticosteroids. It is an important systemic mimic of bilateral shoulder stiffness and needs medical management, not a stretching programme.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "precautions"],
      sectionSlug: "differentials",
    },
    {
      text: "Which functional complaints most typically reflect the movement losses of frozen shoulder?",
      options: [
        "Difficulty gripping and carrying shopping bags",
        "Difficulty reaching the back pocket, fastening a bra, reaching the seatbelt and reaching overhead",
        "Pins and needles when texting",
        "Pain only when running",
      ],
      correctIndex: 1,
      explanation:
        "The capsular restrictions of external rotation, elevation and internal-rotation-behind-back translate into the classic functional losses: reaching behind the back (pocket, bra strap), across to a seatbelt, and overhead to shelves. Grip is preserved, and neurological symptoms suggest a different diagnosis.",
      difficulty: "Easy",
      tags: ["assessment", "anatomy"],
      sectionSlug: "hallmark-signs",
    },
  ],
  flashcards: [
    { front: "What is the pathology of frozen shoulder?", back: "Inflammation → fibrosis → contracture of the glenohumeral capsule (Dupuytren-like), especially the rotator interval and axillary fold. Early phase inflammatory/painful; later phases fibrotic/stiff." },
    { front: "Hallmark examination finding of frozen shoulder?", back: "Global loss of PASSIVE range with a firm capsular end-feel — external rotation at the side lost earliest and most severely." },
    { front: "How does rotator cuff pathology differ from frozen shoulder on examination?", back: "Cuff: passive range preserved, active movement painful/weak, direction-specific weakness. Frozen shoulder: passive AND active range restricted." },
    { front: "Name the three phases of frozen shoulder with rough durations.", back: "Freezing (painful) ~2–9 months; frozen (stiff) ~4–12 months; thawing (recovery) ~6–24 months. Total realistically 1–3 years." },
    { front: "Top risk factors for frozen shoulder?", back: "Age 40–60, diabetes (strongest systemic factor), thyroid disease, female sex, immobilisation after injury/surgery." },
    { front: "Stiff shoulder after a seizure, fixed in internal rotation — what must be excluded?", back: "Locked posterior shoulder dislocation — X-ray with adequate views; frequently missed on a single AP film." },
    { front: "Why does every suspected frozen shoulder need an X-ray?", back: "To exclude the structural mimics: glenohumeral OA (joint space loss, osteophytes) and locked posterior dislocation. Frozen shoulder's X-ray is normal by definition." },
    { front: "Management of HIGH-irritability (freezing phase) frozen shoulder?", back: "Education and honest prognosis, gentle comfortable ROM (pendulums, table slides), sleep advice, simple analgesia, and consider intra-articular corticosteroid injection for short-term pain relief." },
    { front: "Management of LOW-irritability (frozen/thawing) frozen shoulder?", back: "Progressive end-range stretching (ER with stick, pulley, slides), sustained holds, higher-grade joint mobilisation, graded functional loading." },
    { front: "Does any treatment shorten the total course of frozen shoulder?", back: "No treatment reliably shortens the overall course — treatment controls pain, protects function and restores movement along the way. Say so honestly." },
    { front: "Why is the sleeper stretch used cautiously in frozen shoulder?", back: "It compresses and stretches the inflamed capsule under body weight and often flares symptoms — reserve for late low-irritability stages, if at all; towel behind-back stretches are better tolerated." },
    { front: "Frozen shoulder in diabetes — what changes?", back: "Often longer, more severe, more treatment-resistant, and more commonly bilateral (sequentially). Set expectations accordingly." },
  ],
};

export default topic;
