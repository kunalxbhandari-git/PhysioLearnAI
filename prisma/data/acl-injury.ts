import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "acl-injury",
  title: "ACL Injury & Rehabilitation",
  category: "Musculoskeletal",
  description:
    "From injury mechanism and Lachman testing to criterion-based rehabilitation and return-to-sport decision-making — a complete guide to anterior cruciate ligament injury.",
  difficulty: "Advanced",
  estMinutes: 26,
  icon: "zap",
  keyTakeaways: [
    "The ACL is the primary restraint to anterior tibial translation and a key restraint to rotatory load — and a major proprioceptive organ of the knee.",
    "Around 70% of ACL ruptures are non-contact, classically a deceleration or landing with the knee near extension collapsing into valgus and rotation.",
    "The classic triad: an audible pop, rapid haemarthrosis within hours, and subsequent episodes of giving way.",
    "The Lachman test is the most sensitive clinical test for ACL rupture; the pivot shift is the most specific for rotatory instability.",
    "Management is a shared decision: structured rehabilitation alone, or reconstruction plus rehabilitation — early rehab is identical either way.",
    "Rehabilitation is criterion-based, not time-based: patients progress when they meet objective targets, though biological healing sets minimum timeframes.",
    "Return to sport requires limb symmetry index above 90% on strength and hop testing, completed on-field rehab, psychological readiness — and at least 9 months post-reconstruction.",
    "Re-injury risk is highest in the first year and in athletes under 20 returning before 9 months; secondary prevention programmes roughly halve ACL injury risk.",
  ],
  sections: [
    {
      slug: "acl-anatomy",
      title: "ACL Anatomy & Function",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "The anterior cruciate ligament (ACL) runs from the posteromedial aspect of the lateral femoral condyle downward, forward and medially to insert on the anterior intercondylar area of the tibia. It is intra-articular but extrasynovial, and comprises two functional bundles — anteromedial and posterolateral — named for their tibial insertions.",
        },
        { kind: "image", illustration: "knee-joint", caption: "The knee joint: the ACL crosses the joint centrally, restraining anterior tibial translation and rotatory load." },
        {
          kind: "cards",
          items: [
            { title: "Primary restraint", text: "The ACL resists about 85% of anterior tibial translation force — the reason its rupture produces a positive Lachman and anterior drawer.", icon: "shield" },
            { title: "Rotatory control", text: "Together with the anterolateral structures, it restrains internal rotation of the tibia and the coupled subluxation reproduced by the pivot shift test.", icon: "rotate-cw" },
            { title: "Two bundles", text: "The anteromedial bundle tightens in flexion; the posterolateral bundle tightens in extension — together providing restraint throughout range.", icon: "git-merge" },
            { title: "Proprioceptive organ", text: "Mechanoreceptors in the ligament feed the nervous system information about knee position and load. Rupture causes a sensorimotor deficit, not just a mechanical one.", icon: "radio" },
            { title: "Blood supply", text: "Mainly from the middle genicular artery — relatively poor, which is why complete ruptures rarely heal to restore stability spontaneously.", icon: "droplet" },
            { title: "Nerve supply", text: "From the posterior articular branch of the tibial nerve — the pathway for its proprioceptive role.", icon: "zap" },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Femoral origin: lateral femoral condyle (posteromedial aspect); tibial insertion: anterior intercondylar area",
            "Primary restraint to anterior tibial translation (~85%); secondary restraint to internal rotation and valgus",
            "Intra-articular but extrasynovial; poor healing capacity after complete rupture",
            "Rich in mechanoreceptors — rehabilitation must retrain the sensorimotor system, not just muscle strength",
          ],
        },
      ],
    },
    {
      slug: "injury-mechanism",
      title: "Injury Mechanism",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Roughly 70% of ACL ruptures are non-contact: the athlete plants, decelerates or lands, and the knee collapses without anyone touching them. Video analysis shows a consistent pattern occurring within about 50 milliseconds of ground contact — far too fast for voluntary correction, which is why prevention targets pre-programmed movement patterns.",
        },
        { kind: "image", illustration: "ligament-grades", caption: "Ligament injury grades I–III: the same valgus-collapse mechanism can produce anything from partial fibre disruption to the complete grade III rupture typical of the ACL, with MCL involvement in contact injuries." },
        {
          kind: "steps",
          items: [
            { title: "The at-risk position", text: "Knee near extension (0–30° flexion) at ground contact, dynamic valgus collapse (hip adduction and internal rotation, knee falling inward), tibial rotation, and weight shifted onto one leg with the trunk tilted or rotated." },
            { title: "Common scenarios", text: "Side-step cutting, sudden deceleration, landing from a jump on one leg, and pivoting with the foot fixed — the staple movements of football, netball, basketball, handball and skiing." },
            { title: "Contact mechanisms", text: "A direct valgus blow to the lateral knee (e.g. a tackle) can rupture the ACL together with the MCL and medial meniscus — the classic 'unhappy triad'." },
          ],
        },
        {
          kind: "cards",
          items: [
            { title: "Female athletes", text: "2–8× higher non-contact ACL injury rate in comparable sports — attributed to neuromuscular control patterns, anatomical factors (notch size, tibial slope) and hormonal influences. Neuromuscular training reduces this excess risk.", icon: "users" },
            { title: "Previous ACL injury", text: "The strongest risk factor of all — both graft rupture and contralateral ACL injury risk are elevated, especially in young athletes returning early.", icon: "repeat" },
            { title: "Modifiable factors", text: "Stiff, extended landings; poor hip and trunk control; quadriceps-dominant strategies with low hamstring co-activation; fatigue.", icon: "settings" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Because the injury happens in ~50 ms, prevention and late rehab train automatic movement quality under fatigue and unpredictability — not just conscious technique.",
          ],
        },
      ],
    },
    {
      slug: "presentation",
      title: "Clinical Presentation",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "cards",
          items: [
            { title: "Audible 'pop'", text: "Around two-thirds of patients hear or feel a pop at the moment of injury — a highly suggestive historical feature.", icon: "volume-2" },
            { title: "Rapid haemarthrosis", text: "The ACL is vascular enough to bleed: swelling within 2–6 hours of injury. About 70% of acute traumatic haemarthroses involve an ACL rupture.", icon: "droplet" },
            { title: "Immediate dysfunction", text: "Most cannot continue playing; weight-bearing feels unstable or untrustworthy immediately.", icon: "x-octagon" },
            { title: "Giving way", text: "Recurrent episodes of the knee buckling with twisting or turning after the acute phase settles — the hallmark of functional instability.", icon: "alert-triangle" },
            { title: "Loss of extension", text: "A locked or springy block to extension suggests an associated bucket-handle meniscal tear or a displaced ligament stump.", icon: "lock" },
            { title: "Quadriceps inhibition", text: "Rapid quadriceps shutdown from swelling and pain (arthrogenic muscle inhibition) — an early rehab priority.", icon: "battery-low" },
          ],
        },
        {
          kind: "paragraph",
          text: "Associated injuries are common: lateral meniscal tears in the acute injury, medial meniscal tears with chronic instability, MCL sprains, and bone bruises of the lateral femoral condyle and posterolateral tibia visible on MRI in the majority of ruptures — a fingerprint of the pivot-shift injury mechanism.",
        },
        {
          kind: "redflags",
          items: [
            "Gross multi-directional laxity after high-energy trauma — possible multi-ligament injury/knee dislocation: check distal pulses and nerve function urgently (popliteal artery injury risk)",
            "Inability to actively straight-leg raise — exclude extensor mechanism rupture or patellar fracture",
            "Marked bony tenderness after trauma — apply the Ottawa knee rules and X-ray if positive",
            "In adolescents, a suspected tibial spine avulsion fracture can mimic ACL rupture — image before load",
          ],
        },
      ],
    },
    {
      slug: "assessment",
      title: "Assessment & Special Tests",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "The history often makes the diagnosis: a non-contact pivoting injury, a pop, early swelling and instability is ACL rupture until proven otherwise. Clinical testing confirms it — best performed early (before guarding) or after the acute irritability settles.",
        },
        {
          kind: "table",
          headers: ["Test", "How it is done", "Interpretation"],
          rows: [
            ["Lachman test", "Knee in 20–30° flexion; stabilise the femur and draw the tibia forward", "Increased anterior translation with a soft or absent end-feel. The most SENSITIVE clinical test for ACL rupture and the best test in the acute knee"],
            ["Anterior drawer", "Knee at 90° flexion, foot stabilised; draw the tibia forward", "Increased translation vs the other side. Less sensitive acutely — hamstring guarding and the position mask laxity"],
            ["Pivot shift", "From extension, apply valgus and internal rotation while flexing the knee", "A clunk as the subluxed lateral tibial plateau reduces at ~20–30°. The most SPECIFIC test and the one that correlates best with functional instability, but hard to elicit in an awake, guarded patient"],
          ],
        },
        {
          kind: "steps",
          items: [
            { title: "Acute assessment", text: "Ottawa knee rules for fracture screening, effusion assessment, gentle Lachman, neurovascular check. Grade laxity: 1+ (3–5 mm), 2+ (6–10 mm), 3+ (>10 mm), and note the end-feel." },
            { title: "Associated structure testing", text: "Collateral ligaments (valgus/varus stress at 0° and 30°), posterior drawer/sag for PCL, joint-line palpation and McMurray's for meniscus, patellar apprehension." },
            { title: "Imaging", text: "X-ray to exclude fracture (including Segond fracture — a lateral capsular avulsion pathognomonic of ACL injury). MRI confirms the rupture and maps associated meniscal, chondral and ligamentous injury." },
            { title: "Later assessment", text: "Quadriceps and hamstring strength (dynamometry where available), single-leg balance, hop tests once appropriate, and psychological readiness (e.g. ACL-RSI scale)." },
          ],
        },
        { kind: "image", illustration: "goniometer", caption: "Goniometric measurement of knee range belongs in every ACL assessment — a loss of terminal extension compared with the other side may signal a displaced bucket-handle meniscal fragment and needs prompt review." },
        {
          kind: "pearls",
          items: [
            "In an acutely swollen, guarded knee the Lachman remains the test of choice — the anterior drawer and pivot shift both underperform acutely.",
            "Always examine the uninjured knee first: it relaxes the patient and gives you their normal laxity baseline.",
            "An acute haemarthrosis without fracture is an ACL rupture until proven otherwise — arrange definitive assessment rather than 'wait and see'.",
          ],
        },
      ],
    },
    {
      slug: "management-pathways",
      title: "Management Pathways: Conservative vs Surgical",
      estMinutes: 3,
      difficulty: "Advanced",
      content: [
        {
          kind: "paragraph",
          text: "ACL rupture is not an automatic ticket to surgery. High-quality trials (e.g. the KANON trial) show that many patients managed with structured rehabilitation and optional delayed reconstruction achieve outcomes similar to early reconstruction — roughly half in such trials never needed surgery. The decision is shared, based on instability, demands and goals.",
        },
        {
          kind: "table",
          headers: ["Factor", "Favours rehabilitation alone", "Favours reconstruction"],
          rows: [
            ["Sport & activity demands", "Straight-line activities (running, cycling, swimming)", "Pivoting/cutting sports (football, netball, basketball)"],
            ["Instability", "No giving way in daily life or chosen activities", "Recurrent giving way despite good rehabilitation"],
            ["Associated injury", "Isolated ACL rupture", "Repairable meniscal tear (often fixed with concurrent reconstruction), multi-ligament injury"],
            ["Occupation", "Sedentary or low-demand work", "Heavy manual or uneven-ground work"],
            ["Patient preference", "Prefers to avoid surgery; accepts activity modification", "Committed to returning to pivoting sport"],
          ],
        },
        {
          kind: "steps",
          items: [
            { title: "Either way: prehabilitation first", text: "The first weeks are identical for both pathways: settle the effusion, restore full extension and flexion, re-activate the quadriceps, normalise gait. Better pre-operative status predicts better post-operative outcomes." },
            { title: "Rehabilitation-first pathway", text: "A structured 3–6 month programme with review. Crossing over to delayed reconstruction later does not appear to worsen long-term outcomes for most — patients are not 'burning their boats'." },
            { title: "Surgical pathway", text: "Reconstruction with autograft (hamstring, bone–patellar tendon–bone, or quadriceps tendon). The graft remodels ('ligamentisation') over 12+ months — a biological timeline rehab must respect." },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Reconstruction restores mechanical stability but does not prevent post-traumatic knee osteoarthritis — long-term joint health depends more on meniscal status and load management.",
            "A 'coper' cannot be reliably identified on day one — a rehabilitation trial is itself the best screening test.",
          ],
        },
      ],
    },
    {
      slug: "rehab-phases",
      title: "Rehabilitation Phases",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Modern ACL rehabilitation is criterion-based: patients advance when they meet objective milestones, not when a calendar says so. Phases overlap and are individualised, but the sequence below is the accepted framework for both operative and non-operative pathways.",
        },
        {
          kind: "steps",
          items: [
            { title: "Phase 1 — Acute / early (weeks 0–4)", text: "Goals: eliminate the effusion, achieve full passive extension equal to the other side, flexion beyond 120°, quadriceps activation (straight leg raise without lag), and normal gait without crutches. Pain and swelling rules guide loading." },
            { title: "Phase 2 — Strength & control (months 1–4)", text: "Progressive resistance training: squats, leg press, lunges, hip and calf work; introduce open-chain knee extension within protocol limits. Bilateral → unilateral. Criteria to progress: minimal effusion, full ROM, and building limb symmetry on strength testing." },
            { title: "Phase 3 — Neuromuscular & running (months 3–6)", text: "Return to running once criteria are met (typically ~12 weeks post-op, effusion-free, adequate strength, pain-free hopping). Balance and perturbation training, landing mechanics, agility ladders, bilateral then unilateral plyometrics." },
            { title: "Phase 4 — Sport-specific training (months 6–9)", text: "Change of direction, cutting, sport drills with increasing speed, fatigue and unpredictability; on-field/court rehabilitation and graded return to team training." },
            { title: "Phase 5 — Return to sport & prevention (9+ months)", text: "Pass the full return-to-sport test battery, complete staged return to competition, and continue an injury-prevention programme — risk of a second ACL injury remains elevated for 1–2 years." },
          ],
        },
        {
          kind: "keypoints",
          title: "Return-to-sport criteria",
          items: [
            "Limb symmetry index (LSI) > 90% for quadriceps and hamstring strength",
            "LSI > 90% across a hop test battery (single, triple, crossover, 6 m timed)",
            "Quality of movement on landing and cutting tasks — no dynamic valgus, symmetrical loading",
            "Psychological readiness (e.g. ACL-RSI score) — fear of re-injury predicts both failure to return and re-injury",
            "Time: at least 9 months post-reconstruction — each earlier month markedly raises re-injury risk in young athletes",
          ],
        },
        {
          kind: "warning",
          title: "Why time AND criteria",
          items: [
            "Strength and hop symmetry can look 'ready' before the graft has biologically matured — passing tests early does not license early return",
            "Re-injury risk drops substantially for each month return is delayed up to 9 months in young athletes",
            "LSI can flatter the injured leg if the uninjured leg has detrained — compare against pre-injury or normative data where possible",
          ],
        },
      ],
    },
    {
      slug: "exercise-progression",
      title: "Key Exercises Through Rehabilitation",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "These five exercises illustrate the arc of ACL rehabilitation from day-one activation to late-stage landing control. Each is progressed by criteria — effusion response, pain, movement quality — under the supervising clinician's protocol.",
        },
        {
          kind: "exercise",
          name: "Quadriceps setting with straight leg raise",
          purpose: "Reverse arthrogenic quadriceps inhibition and restore active extension control from day one.",
          position: "Long sitting, knee straight, towel roll under the ankle to encourage full extension.",
          execution: "Tighten the thigh, pressing the knee down flat, hold 5 seconds. Once control returns, add a straight leg raise: lock the knee, lift the heel 20 cm, lower slowly — no quadriceps lag.",
          dosage: "10–15 reps × 3–4 sets daily in the early phase.",
          progression: "Add ankle weight to the straight leg raise; progress to loaded knee extension per protocol.",
          precautions: "A persistent extension lag signals the knee is not ready to progress; keep the effusion down.",
        },
        {
          kind: "exercise",
          name: "Double-leg squat to box",
          purpose: "Foundational closed-chain strengthening of quadriceps and glutes with controlled depth and shared load.",
          position: "Standing in front of a box or bench (initially ~knee height), feet shoulder-width apart.",
          execution: "Hinge at the hips and squat down to touch the box lightly, keeping knees tracking over the toes and heels down, then drive up. Tempo 3 seconds down, 1 second up.",
          dosage: "8–12 reps × 3 sets, 3×/week.",
          progression: "Lower the box, add external load (goblet → barbell), then shift towards single-leg variations (split squat, step-down).",
          precautions: "Watch for weight shift away from the injured leg — use mirror or video feedback; effusion the next morning means the dose was too high.",
        },
        {
          kind: "exercise",
          name: "Nordic hamstring curl (assisted)",
          purpose: "Eccentric hamstring strengthening — the hamstrings are the ACL's dynamic synergist, restraining anterior tibial translation.",
          position: "Kneeling on a pad, ankles fixed by a partner or under a secure bar, trunk upright.",
          execution: "Keeping hips extended, lower the trunk forward as slowly as possible, resisting with the hamstrings, catching with the hands and pushing back up lightly.",
          dosage: "3–6 reps × 2–3 sets, 1–2×/week, building gradually — expect soreness initially.",
          progression: "Reduce hand assistance, increase range and reps; combine with loaded hip-hinge patterns (Romanian deadlift).",
          precautions: "After hamstring-graft reconstruction, delay aggressive eccentric hamstring loading per the surgical protocol; significant delayed soreness is normal early — dose conservatively.",
        },
        {
          kind: "exercise",
          name: "Single-leg balance with perturbation",
          purpose: "Retrain the proprioceptive and reactive control lost with the ligament's mechanoreceptors.",
          position: "Standing on the injured leg, soft knee, near support initially.",
          execution: "Hold steady single-leg stance while adding challenges: eyes closed, head turns, ball catches and throws, or gentle unpredictable pushes from a partner.",
          dosage: "3–5 × 30-second holds per challenge, most days.",
          progression: "Firm surface → foam/wobble board; predictable → unpredictable perturbations; add sport-specific tasks (dribbling, passing) and fatigue.",
          precautions: "Quality over duration — a collapsing arch or valgus knee means the level is too hard.",
        },
        {
          kind: "exercise",
          name: "Drop-landing to hop progression",
          purpose: "Late-stage plyometric training of landing mechanics — the direct rehearsal of the injury situation, done well.",
          position: "Standing on a low box (20–30 cm), space to land and hop forward.",
          execution: "Step off and land softly on two feet: hips back, knees bent and tracking over toes, quiet landing. Progress to landing and immediately hopping forward, then to single-leg landings and hops in multiple directions.",
          dosage: "6–10 reps × 3–4 sets, 2×/week, fully recovered between sets.",
          progression: "Two-leg → single-leg; anticipated → reactive (respond to a call or light); fresh → fatigued; add cutting at increasing speed.",
          precautions: "Only enter this stage effusion-free, with adequate strength (approaching LSI 90%) and clean bilateral mechanics; stop the set when quality degrades.",
        },
      ],
    },
    {
      slug: "precautions",
      title: "Precautions & Red Flags",
      estMinutes: 2,
      content: [
        {
          kind: "warning",
          title: "Rehabilitation precautions",
          items: [
            "Respect the effusion: a swollen knee the morning after a session means the load exceeded current capacity — regress, don't push through",
            "Persistent loss of full extension is the enemy — it alters gait and loads the patellofemoral joint; address it aggressively and early",
            "Open-chain knee extension after reconstruction should follow protocol ranges and timing — introduce load progressively",
            "After hamstring-graft surgery, delay aggressive eccentric hamstring work per protocol; after patellar-tendon graft, monitor anterior knee pain with kneeling and loading",
            "Do not clear return to sport on time alone or test scores alone — both criteria and biological time must be met",
          ],
        },
        {
          kind: "redflags",
          items: [
            "Calf pain, swelling and warmth post-operatively — exclude deep vein thrombosis urgently",
            "Fever, wound redness or discharge, and disproportionate pain after surgery — possible infection: urgent surgical review",
            "A locked knee that will not fully extend — possible bucket-handle meniscal tear or cyclops lesion: surgical opinion",
            "Multi-ligament laxity after high-energy trauma with any vascular or neurological signs — emergency assessment (popliteal artery)",
            "Progressively worsening pain, stiffness and disproportionate sensitivity — consider complex regional pain or arthrofibrosis and escalate early",
          ],
        },
        {
          kind: "paragraph",
          text: "These situations require prompt medical or surgical review. This content supports learning and does not replace clinical judgement, surgical protocols or medical assessment.",
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
            "ACL: lateral femoral condyle → anterior intercondylar tibia; primary restraint (~85%) to anterior translation + rotatory control + proprioception",
            "~70% non-contact: deceleration/landing, knee near extension, valgus collapse + rotation, within ~50 ms",
            "Triad: pop + haemarthrosis within hours + giving way; haemarthrosis without fracture = ACL until proven otherwise",
            "Tests: Lachman (most sensitive, best acutely), anterior drawer (limited acutely), pivot shift (most specific, reflects functional instability)",
            "Pathways: structured rehab ± delayed reconstruction vs early reconstruction — shared decision; prehab benefits both",
            "Phases: settle & activate → strength → neuromuscular/running (~12 weeks) → sport-specific → return at 9+ months",
            "RTS criteria: LSI > 90% strength and hop battery, movement quality, psychological readiness, ≥9 months",
            "Prevention programmes (e.g. FIFA 11+ style neuromuscular warm-ups) roughly halve ACL injury risk",
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
      text: "What is the primary mechanical function of the ACL?",
      options: [
        "Resisting posterior tibial translation",
        "Resisting anterior tibial translation",
        "Resisting valgus stress in full extension",
        "Limiting knee flexion range",
      ],
      correctIndex: 1,
      explanation:
        "The ACL provides about 85% of the restraint to anterior translation of the tibia on the femur — its primary role — plus secondary restraint to internal rotation and valgus. The PCL resists posterior translation; the MCL is the primary valgus restraint.",
      difficulty: "Easy",
      tags: ["anatomy"],
      sectionSlug: "acl-anatomy",
    },
    {
      text: "The ACL runs from which femoral attachment to which tibial attachment?",
      options: [
        "Medial femoral condyle to posterior intercondylar area",
        "Lateral femoral condyle (posteromedial aspect) to anterior intercondylar area",
        "Femoral trochlea to tibial tuberosity",
        "Lateral epicondyle to fibular head",
      ],
      correctIndex: 1,
      explanation:
        "The ACL arises from the posteromedial aspect of the lateral femoral condyle and passes downward, forward and medially to the anterior intercondylar area of the tibia. The PCL runs from the medial femoral condyle to the posterior intercondylar area — the mirror image.",
      difficulty: "Easy",
      tags: ["anatomy"],
      sectionSlug: "acl-anatomy",
    },
    {
      text: "Why does ACL rupture create a sensorimotor deficit beyond mechanical laxity?",
      options: [
        "The rupture always damages the femoral nerve",
        "The ligament contains mechanoreceptors contributing to knee proprioception, which are lost with the rupture",
        "Swelling permanently destroys the joint capsule",
        "The hamstrings stop functioning after rupture",
      ],
      correctIndex: 1,
      explanation:
        "The ACL is richly innervated with mechanoreceptors feeding the CNS information about knee position, movement and load. Rupture removes this input, degrading proprioception and reflex muscle control — which is why balance, perturbation and neuromuscular training are core to rehabilitation, not optional extras.",
      difficulty: "Medium",
      tags: ["anatomy", "exercise-therapy"],
      sectionSlug: "acl-anatomy",
    },
    {
      text: "Which scenario best describes the classic non-contact ACL injury mechanism?",
      options: [
        "A hyperflexion injury during a deep squat",
        "Deceleration or landing with the knee near extension, collapsing into valgus with tibial rotation",
        "A direct blow to the anterior tibia with the knee flexed",
        "Gradual overuse from repetitive jogging",
      ],
      correctIndex: 1,
      explanation:
        "About 70% of ACL ruptures are non-contact: planting, cutting or landing with the knee near extension, dynamic valgus collapse and tibial rotation, occurring within ~50 ms of ground contact. A direct blow to the anterior tibia with a flexed knee is a PCL mechanism (dashboard injury).",
      difficulty: "Medium",
      tags: ["pathology"],
      sectionSlug: "injury-mechanism",
    },
    {
      text: "Why do ACL prevention and late-stage rehabilitation emphasise automatic movement control under fatigue and unpredictability rather than only conscious technique?",
      options: [
        "Conscious technique is impossible to teach",
        "The injury occurs within about 50 milliseconds of ground contact — too fast for voluntary correction",
        "Fatigue has no effect on injury risk",
        "Athletes prefer harder drills",
      ],
      correctIndex: 1,
      explanation:
        "Video analyses show the valgus-rotation collapse occurs within roughly 50 ms of ground contact — well below voluntary reaction time. Protective movement patterns must therefore be pre-programmed and robust to fatigue and surprise, which is why training progresses from anticipated drills to reactive, fatigued, sport-specific chaos.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "exercise-therapy"],
      sectionSlug: "injury-mechanism",
    },
    {
      text: "A footballer felt a pop while side-stepping, could not play on, and the knee swelled within three hours. What is the most likely diagnosis?",
      options: [
        "Medial meniscal tear",
        "ACL rupture",
        "Patellofemoral pain syndrome",
        "Quadriceps tendinopathy",
      ],
      correctIndex: 1,
      explanation:
        "The triad of a pivoting mechanism, an audible pop and rapid haemarthrosis (swelling within 2–6 hours) is classic for ACL rupture — around 70% of acute traumatic haemarthroses involve the ACL. Isolated meniscal tears usually swell more slowly (synovial effusion over 24+ hours); patellofemoral pain and tendinopathy are gradual-onset conditions.",
      difficulty: "Easy",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "presentation",
    },
    {
      text: "Which clinical test is the most SENSITIVE for detecting ACL rupture, particularly in the acute setting?",
      options: ["Anterior drawer", "Pivot shift", "Lachman test", "McMurray's test"],
      correctIndex: 2,
      explanation:
        "The Lachman test — anterior tibial translation at 20–30° flexion, judging displacement and end-feel — is the most sensitive clinical test for ACL rupture and performs best acutely, when hamstring guarding and effusion limit the 90°-flexed anterior drawer and make the pivot shift hard to elicit. McMurray's tests the menisci.",
      difficulty: "Easy",
      tags: ["special-tests", "assessment"],
      sectionSlug: "assessment",
    },
    {
      text: "What does a positive pivot shift test specifically indicate?",
      options: [
        "Meniscal locking",
        "Rotatory instability — subluxation-reduction of the lateral tibial plateau from loss of ACL restraint",
        "Patellar dislocation",
        "MCL rupture",
      ],
      correctIndex: 1,
      explanation:
        "The pivot shift reproduces the coupled anterior subluxation of the lateral tibial plateau in near-extension and its reduction (the clunk) at ~20–30° flexion under valgus and internal rotation. It is the most specific ACL test and correlates best with functional instability and outcomes — but requires a relaxed patient, so it often fails in acute, guarded knees.",
      difficulty: "Hard",
      tags: ["special-tests", "clinical-reasoning"],
      sectionSlug: "assessment",
    },
    {
      text: "Why is the anterior drawer test less reliable than the Lachman in an acutely injured knee?",
      options: [
        "It can only be performed under anaesthesia",
        "At 90° flexion, hamstring guarding and the position itself mask anterior laxity",
        "It tests the PCL rather than the ACL",
        "Swelling makes the knee too stiff to flex to 20°",
      ],
      correctIndex: 1,
      explanation:
        "The anterior drawer requires 90° of flexion — often painful acutely — and in that position protective hamstring contraction directly opposes anterior tibial translation, while the bony geometry also limits displacement. The Lachman at 20–30° minimises both problems, which is why it is the acute test of choice.",
      difficulty: "Medium",
      tags: ["special-tests", "assessment"],
      sectionSlug: "assessment",
    },
    {
      text: "A Segond fracture seen on knee X-ray after a twisting injury is significant because it is…",
      options: [
        "A common benign finding requiring no follow-up",
        "A lateral capsular avulsion fracture pathognomonic of ACL rupture",
        "Diagnostic of PCL injury",
        "Only seen in elderly osteoporotic patients",
      ],
      correctIndex: 1,
      explanation:
        "A Segond fracture is a small avulsion of the lateral tibial rim by the lateral capsule/anterolateral ligament complex. Its presence on plain film is pathognomonic of ACL rupture — the bony fragment is trivial, but the ligamentous injury it signals is not. It should prompt definitive assessment of the ACL.",
      difficulty: "Hard",
      tags: ["assessment", "pathology"],
      sectionSlug: "assessment",
    },
    {
      text: "Which statement about conservative (rehabilitation-first) management of ACL rupture is supported by trial evidence?",
      options: [
        "All ACL ruptures require reconstruction to return to any sport",
        "Many patients achieve good outcomes with structured rehabilitation and optional delayed reconstruction, with roughly half never needing surgery",
        "Conservative management leads to knee replacement within five years",
        "Rehabilitation alone restores mechanical continuity of the ligament in most adults",
      ],
      correctIndex: 1,
      explanation:
        "Trials such as KANON found that rehabilitation with optional delayed reconstruction produced outcomes similar to early reconstruction, and about half of the rehabilitation-first group never had surgery. The ligament rarely heals to restore mechanical stability, but many knees function well without it. The decision is shared, based on instability, demands and preference.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "management-pathways",
    },
    {
      text: "Which patient profile most favours early surgical reconstruction?",
      options: [
        "A 45-year-old recreational cyclist with no episodes of giving way",
        "A 20-year-old netball player with recurrent giving way who intends to return to competitive pivoting sport",
        "A sedentary office worker with an isolated ACL rupture and stable daily function",
        "A patient who prefers to avoid surgery and accepts modifying activity",
      ],
      correctIndex: 1,
      explanation:
        "Reconstruction is favoured by pivoting/cutting sport goals, recurrent instability despite rehabilitation, repairable meniscal injury, and heavy or unpredictable physical demands. Straight-line athletes and low-demand patients without giving way frequently do well with rehabilitation alone.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "management-pathways",
    },
    {
      text: "What are the key goals of Phase 1 (early) ACL rehabilitation?",
      options: [
        "Return to running and beginning plyometrics",
        "Eliminating the effusion, restoring full extension, activating the quadriceps and normalising gait",
        "Maximal strength testing and hop test battery",
        "Cutting and change-of-direction drills",
      ],
      correctIndex: 1,
      explanation:
        "Phase 1 targets the fundamentals: a dry joint (effusion drives quadriceps inhibition), full passive extension symmetrical to the other side, flexion beyond ~120°, straight leg raise without lag, and crutch-free normal gait. Everything later builds on these; loss of extension in particular predicts poor outcomes.",
      difficulty: "Easy",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "rehab-phases",
    },
    {
      text: "Which criterion set must be met before return to pivoting sport after ACL reconstruction?",
      options: [
        "Pain-free jogging and 6 months elapsed",
        "LSI > 90% on strength and hop tests, good movement quality, psychological readiness, and at least 9 months post-surgery",
        "Full range of movement and a stable Lachman test",
        "Surgeon clearance at 4 months with a brace",
      ],
      correctIndex: 1,
      explanation:
        "Contemporary return-to-sport batteries require limb symmetry above 90% for quadriceps/hamstring strength and across hop tests, quality landing and cutting mechanics, psychological readiness (e.g. ACL-RSI), and a minimum of about 9 months — earlier return in young athletes sharply increases re-injury. Time alone or tests alone are each insufficient.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning", "exercise-therapy"],
      sectionSlug: "rehab-phases",
    },
    {
      text: "Why can a limb symmetry index (LSI) of 90% overestimate recovery?",
      options: [
        "Hop tests cannot be measured reliably",
        "The uninjured limb may have detrained during rehabilitation, lowering the comparison standard",
        "LSI only measures flexibility",
        "Symmetry is irrelevant to sport",
      ],
      correctIndex: 1,
      explanation:
        "LSI compares the injured to the uninjured leg — but the uninjured leg commonly detrains during months of reduced activity, so 90% of a weakened limb can mask a genuine bilateral deficit. Comparing against pre-injury values or normative data where available guards against this flattery.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "rehab-phases",
    },
    {
      text: "What is the rationale for eccentric hamstring strengthening (e.g. Nordic curls) in ACL rehabilitation?",
      options: [
        "The hamstrings extend the knee, replacing quadriceps function",
        "The hamstrings act as dynamic synergists of the ACL, restraining anterior tibial translation",
        "Eccentric work reduces bone density around the graft tunnels",
        "Hamstring strength has no relation to ACL function",
      ],
      correctIndex: 1,
      explanation:
        "Contracting hamstrings pull the tibia posteriorly, directly opposing the anterior translation the ACL restrains — making them the ligament's key dynamic synergist. Strong hamstrings, particularly eccentrically, support both the rehabilitating knee and injury prevention. After hamstring-graft surgery, aggressive eccentric loading is delayed per protocol.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "anatomy"],
      sectionSlug: "exercise-progression",
    },
    {
      text: "During late-stage rehab, an athlete's knee is visibly swollen the morning after a plyometric session. What is the correct response?",
      options: [
        "Ignore it — swelling is expected throughout rehabilitation",
        "Treat it as an overload signal: reduce the load, let the effusion settle, then rebuild more gradually",
        "Stop all exercise for one month",
        "Progress to cutting drills to test the knee",
      ],
      correctIndex: 1,
      explanation:
        "The effusion is the knee's most honest load gauge: next-morning swelling means the session exceeded current capacity. Effusion also reflexively inhibits the quadriceps, undoing strength work. The response is regression and re-progression — not ignoring it, abandoning rehab, or escalating.",
      difficulty: "Medium",
      tags: ["precautions", "exercise-therapy", "clinical-reasoning"],
      sectionSlug: "precautions",
    },
    {
      text: "Three days after ACL reconstruction, a patient reports new calf pain and swelling with warmth. What must be excluded first?",
      options: [
        "Normal post-operative bruising",
        "Deep vein thrombosis",
        "Hamstring graft-site soreness",
        "Arthrofibrosis",
      ],
      correctIndex: 1,
      explanation:
        "Unilateral calf pain, swelling and warmth after lower-limb surgery is deep vein thrombosis until excluded — a recognised post-operative complication with risk of pulmonary embolism. It requires urgent medical assessment, not massage or exercise. Graft-site soreness and bruising are common but do not explain calf swelling and warmth.",
      difficulty: "Easy",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "precautions",
    },
    {
      text: "Which statement about long-term outcomes after ACL injury is accurate?",
      options: [
        "Reconstruction reliably prevents post-traumatic knee osteoarthritis",
        "Post-traumatic OA risk is elevated after ACL injury regardless of surgical or conservative management, and is worse with meniscal injury",
        "Conservatively managed knees never develop osteoarthritis",
        "Osteoarthritis after ACL injury appears only after age 65",
      ],
      correctIndex: 1,
      explanation:
        "ACL injury raises the risk of post-traumatic knee OA within 10–20 years whichever pathway is chosen; reconstruction restores stability but has not been shown to prevent OA. Concomitant meniscal injury or meniscectomy is the strongest accelerator — one reason meniscal preservation and lifelong load management matter.",
      difficulty: "Hard",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "management-pathways",
    },
  ],
  flashcards: [
    { front: "ACL attachments?", back: "Posteromedial aspect of the lateral femoral condyle → anterior intercondylar area of the tibia (running down, forward and medially)." },
    { front: "Primary function of the ACL?", back: "Primary restraint (~85%) to anterior tibial translation, plus rotatory control and proprioception via its mechanoreceptors." },
    { front: "Classic non-contact ACL mechanism?", back: "Deceleration/landing with the knee near extension, dynamic valgus collapse and tibial rotation — within ~50 ms of ground contact." },
    { front: "Clinical triad of acute ACL rupture?", back: "Audible pop, haemarthrosis within 2–6 hours, and subsequent giving-way episodes." },
    { front: "Most sensitive clinical test for ACL rupture?", back: "The Lachman test — anterior translation at 20–30° flexion; also the best test in the acute knee." },
    { front: "Most specific ACL test and what it shows?", back: "The pivot shift — reproduces rotatory subluxation-reduction; correlates best with functional instability." },
    { front: "What is a Segond fracture?", back: "Lateral tibial rim avulsion by the anterolateral capsule — pathognomonic of ACL rupture on X-ray." },
    { front: "Phase 1 ACL rehab goals?", back: "No effusion, full symmetrical extension, flexion >120°, quadriceps activation (SLR without lag), normal gait." },
    { front: "Return-to-sport criteria after ACL reconstruction?", back: "LSI >90% on strength and hop battery, quality movement, psychological readiness (ACL-RSI), and ≥9 months post-surgery." },
    { front: "Why delay return to sport to 9+ months even if tests are passed?", back: "Graft maturation lags test performance; in young athletes, re-injury risk falls substantially for each month of delay up to 9 months." },
    { front: "Why are hamstrings the ACL's dynamic synergist?", back: "Their contraction pulls the tibia posteriorly, opposing the anterior translation the ACL restrains." },
    { front: "Key post-operative red flags after ACL reconstruction?", back: "Calf pain/swelling/warmth (DVT), fever with wound redness or discharge (infection), locked knee (meniscal/cyclops lesion)." },
  ],
};

export default topic;
