import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "hip-conditions",
  title: "Hip Pain & Joint Replacement",
  category: "Musculoskeletal",
  description:
    "From groin pain and lateral hip pain to total hip replacement: anatomy, assessment, differential diagnosis, post-operative precautions and evidence-based rehabilitation.",
  difficulty: "Intermediate",
  estMinutes: 28,
  icon: "bone",
  keyTakeaways: [
    "True hip joint pain is classically felt in the groin and may refer to the anterior thigh and knee — buttock-dominant pain is more often lumbar or gluteal in origin.",
    "Loss of internal rotation is typically the earliest and most reliable movement sign of hip osteoarthritis.",
    "Gluteal tendinopathy (lateral hip pain) is aggravated by compression — crossing the legs, side-lying on either side, and hanging on one hip all load the tendon against the greater trochanter.",
    "FADIR is sensitive but not specific for intra-articular pathology: a negative test makes FAI/labral pathology unlikely, but a positive test does not confirm it.",
    "Exercise, education and weight management are first-line for hip OA, exactly as for the knee.",
    "Classic posterior THR precautions (no flexion > 90°, no adduction past midline, no internal rotation) are still widely taught, but many modern services relax them — always follow the surgeon's protocol.",
    "After joint replacement, early mobilisation, circulatory exercises and progressive strengthening drive outcomes; prolonged bed rest is harmful.",
    "Post-operative calf pain, breathlessness, wound discharge with fever, or sudden shortening and external rotation of the leg are emergencies — know the DVT/PE, infection and dislocation red flags.",
  ],
  sections: [
    {
      slug: "hip-anatomy",
      title: "Hip Anatomy & Pain Referral Patterns",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "The hip is a deep ball-and-socket joint between the femoral head and the acetabulum. The acetabular labrum — a fibrocartilage rim — deepens the socket, improves the suction seal and contributes to stability. A thick capsule reinforced by the iliofemoral, pubofemoral and ischiofemoral ligaments makes the hip one of the most inherently stable joints in the body.",
        },
        {
          kind: "cards",
          items: [
            { title: "Femoroacetabular joint", text: "Ball-and-socket synovial joint built for load transfer: forces reach 3–5× body weight during walking and much more during running and stairs.", icon: "circle" },
            { title: "Acetabular labrum", text: "Fibrocartilage rim that deepens the socket and maintains the fluid seal. Its outer edge has some blood supply; the inner articular edge heals poorly.", icon: "disc" },
            { title: "Capsule & ligaments", text: "The iliofemoral ligament (strongest in the body) resists extension and external rotation — one reason capsular pathology limits these motions.", icon: "link" },
            { title: "Gluteal muscles", text: "Gluteus medius and minimus insert on the greater trochanter and control the pelvis in single-leg stance. Their tendons are the usual source of lateral hip pain.", icon: "dumbbell" },
          ],
        },
        {
          kind: "paragraph",
          text: "Pain referral matters enormously at the hip. The joint is supplied mainly by branches of the femoral and obturator nerves, so intra-articular pathology is classically felt in the groin and anterior thigh and can refer as far as the knee — some patients with hip OA present with isolated knee pain. Conversely, buttock and posterior thigh pain more often arises from the lumbar spine, sacroiliac region or gluteal tendons than from the hip joint itself.",
        },
        {
          kind: "keypoints",
          title: "Referral patterns to remember",
          items: [
            "Groin and anterior thigh pain → think hip joint first",
            "The \"C-sign\" — patient cups the hand around the hip from groin to greater trochanter — suggests intra-articular pathology",
            "Lateral hip pain over the greater trochanter → think gluteal tendinopathy",
            "Buttock-dominant pain → screen the lumbar spine and SIJ before blaming the hip",
            "Hip pathology can present as isolated knee pain — always screen the hip in knee pain (and vice versa)",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Ask the patient to point to the pain with one finger — location is one of the most useful pieces of the hip history.",
            "True hip joint pain rarely extends below the knee; pain into the calf or foot points to the lumbar spine.",
          ],
        },
      ],
    },
    {
      slug: "hip-osteoarthritis",
      title: "Hip Osteoarthritis",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Hip OA follows the same whole-joint disease model as knee OA: cartilage breakdown, subchondral bone remodelling, osteophyte formation and low-grade synovitis, with the surrounding muscles weakening as pain and inactivity progress. It typically presents after 45 with activity-related groin pain, stiffness after rest, and progressive difficulty with socks, shoes, car transfers and stairs.",
        },
        {
          kind: "cards",
          items: [
            { title: "Groin pain", text: "The classic symptom — deep, activity-related pain in the groin, often referring to the anterior thigh and sometimes the knee.", icon: "target" },
            { title: "Internal rotation loss", text: "The capsular pattern of the hip begins with internal rotation: IR loss is usually the earliest and most reliable movement finding, later joined by flexion and abduction loss.", icon: "rotate-ccw" },
            { title: "Morning stiffness < 30–60 min", text: "Short-lived stiffness after waking or sitting that eases with movement, as in other osteoarthritic joints.", icon: "sunrise" },
            { title: "Functional loss", text: "Difficulty reaching the foot (socks, toenails), getting out of low chairs and cars, and shortening walking distance are typical early complaints.", icon: "footprints" },
          ],
        },
        {
          kind: "paragraph",
          text: "As with the knee, diagnosis is primarily clinical: age over 45, activity-related hip pain, and morning stiffness absent or under 30 minutes. Restricted, painful internal rotation strongly supports the diagnosis. Imaging is reserved for atypical presentations or surgical planning, and radiographic severity correlates poorly with symptoms.",
        },
        {
          kind: "keypoints",
          title: "Hip OA essentials",
          items: [
            "Groin pain + age > 45 + IR loss = hip OA until proven otherwise",
            "Internal rotation is lost first; end-range flexion-IR combinations become painful early",
            "First-line care: education, exercise therapy and weight management — surgery is for persistent, severe disease",
            "A well-dosed 3-month conservative programme is expected before surgical referral in most pathways",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Comparing internal rotation in prone or in 90° hip flexion side-to-side is a quick, sensitive screen for early hip OA.",
            "GLA:D-style structured education-plus-exercise programmes for hip and knee OA show clinically meaningful improvements in pain and function at scale.",
          ],
        },
      ],
    },
    {
      slug: "lateral-hip-pain",
      title: "Gluteal Tendinopathy & Lateral Hip Pain",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Lateral hip pain centred on the greater trochanter was long labelled \"trochanteric bursitis\", but imaging and surgical studies show the primary problem is usually tendinopathy of gluteus medius and minimus, with any bursal change secondary. The umbrella term is greater trochanteric pain syndrome (GTPS). It is most common in women over 40 and frequently disturbs sleep because side-lying compresses the tendons.",
        },
        {
          kind: "paragraph",
          text: "The key concept is compression. The gluteal tendons wrap around the greater trochanter, and positions of hip adduction press them against the bone. Compression combined with tensile load is what irritated tendons tolerate least — which explains the classic aggravating factors and the core of management.",
        },
        {
          kind: "cards",
          items: [
            { title: "Side-lying", text: "Lying on the painful side compresses the tendon directly; lying on the other side lets the top leg fall into adduction and compresses it too. A pillow between the knees helps.", icon: "moon" },
            { title: "Crossing the legs", text: "Sitting cross-legged holds the hip in sustained adduction — a habitual compressive load worth coaching out.", icon: "x" },
            { title: "\"Hanging on one hip\"", text: "Standing with the pelvis dropped and the hip in adduction compresses the tendon for minutes at a time.", icon: "user" },
            { title: "Stairs & hills", text: "Single-leg loading demands high gluteal force; combined with adduction collapse it provokes pain up and down stairs.", icon: "trending-up" },
          ],
        },
        {
          kind: "keypoints",
          title: "Management principles",
          items: [
            "Education to reduce compressive postures (leg crossing, hip hanging, sleeping position) is a treatment in itself",
            "Progressive gluteal loading — isometrics, then abduction strengthening avoiding deep adduction ranges — is first-line",
            "The LEAP trial found education plus exercise superior to corticosteroid injection and to wait-and-see at 12 months",
            "Stretching the ITB or gluteals into adduction usually aggravates GTPS — a common mistake",
          ],
        },
        {
          kind: "warning",
          title: "Common mistakes in lateral hip pain",
          items: [
            "Prescribing ITB or piriformis stretches that push the hip into adduction and compress the tendon further",
            "Relying on repeated corticosteroid injection — short-term relief, inferior long-term outcomes",
            "Ignoring sleep posture and habitual standing/sitting compression",
            "Missing referred lumbar pain masquerading as lateral hip pain — screen the spine",
          ],
        },
      ],
    },
    {
      slug: "fai-labral",
      title: "FAI & Labral Pathology (Concepts)",
      estMinutes: 2,
      difficulty: "Advanced",
      content: [
        {
          kind: "paragraph",
          text: "Femoroacetabular impingement (FAI) syndrome is a motion-related clinical disorder of the hip in which morphological variants — a cam (extra bone at the femoral head–neck junction) and/or a pincer (acetabular over-coverage) — contribute to abnormal contact during deep flexion and rotation. It typically affects younger, active adults and may injure the labrum and cartilage over time.",
        },
        {
          kind: "cards",
          items: [
            { title: "Cam morphology", text: "Aspherical femoral head–neck junction; common in athletes who loaded the hip heavily during adolescence. Contact occurs in flexion + internal rotation.", icon: "circle" },
            { title: "Pincer morphology", text: "Acetabular over-coverage; the rim and labrum are pinched at end-range. Often coexists with cam.", icon: "shield" },
            { title: "Labral tears", text: "Common on imaging even in pain-free hips — a labral tear on MRI is not automatically the pain source. Symptoms: groin pain, catching or clicking with deep flexion/pivoting.", icon: "alert-circle" },
          ],
        },
        {
          kind: "paragraph",
          text: "Diagnosis of FAI syndrome requires all three of: symptoms, positive clinical signs (typically anterior groin pain on FADIR) and imaging findings — morphology alone is not a diagnosis. First-line management is physiotherapist-led exercise targeting hip strength, movement control and activity modification; arthroscopic surgery is an option for selected patients who fail conservative care.",
        },
        {
          kind: "pearls",
          items: [
            "Cam and pincer shapes are common in asymptomatic athletes — treat the syndrome (symptoms + signs + imaging), not the X-ray shape.",
            "Deep squatting, pivoting sports and prolonged deep sitting are the classic aggravators to modify while building strength.",
          ],
        },
      ],
    },
    {
      slug: "hip-assessment",
      title: "Assessing the Hip",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Hip assessment aims to answer three questions: is the pain coming from the hip joint, from the lateral soft tissues, or from the lumbar spine? History (pain location, aggravating positions) does most of the work; examination then confirms the pattern.",
        },
        { kind: "image", illustration: "goniometer", caption: "A universal goniometer used to record hip range of motion — internal rotation measured in sitting or prone is the most informative single measurement, as it is lost earliest in hip OA." },
        {
          kind: "steps",
          items: [
            { title: "History & pain map", text: "Groin/anterior thigh (joint), lateral trochanteric (gluteal tendon), buttock (screen spine/SIJ). Ask about sleep (side-lying pain), socks and shoes, stairs, car transfers, and 24-hour pattern." },
            { title: "Gait & observation", text: "Antalgic gait (short stance on the painful side), Trendelenburg pattern, leg-length asymmetry, gluteal wasting." },
            { title: "Lumbar screen", text: "Active lumbar movements with overpressure, plus a neurological screen if symptoms extend below the knee — spinal referral is the great mimic of hip pain." },
            { title: "Range of motion", text: "Compare both sides, especially internal rotation (prone or in 90° flexion), flexion and abduction. Note the capsular pattern of OA: IR lost first, then flexion and abduction." },
            { title: "Special tests", text: "FABER and FADIR (below), resisted abduction and palpation of the greater trochanter for lateral hip pain, single-leg stance for Trendelenburg sign." },
            { title: "Strength & function", text: "Hip abductor and extensor strength, 30-second chair stand, 40 m walk, single-leg stance time." },
          ],
        },
        {
          kind: "table",
          headers: ["Test", "How", "What it suggests"],
          rows: [
            ["FABER (Patrick's)", "Flexion–ABduction–External Rotation: figure-4 position, gentle overpressure on the knee", "Groin pain → hip joint; posterior pain → SIJ region. A screening (provocation) test, not a specific diagnosis"],
            ["FADIR", "Flexion–ADduction–Internal Rotation at 90° hip flexion", "Anterior groin pain → intra-articular pathology (FAI, labrum). Highly sensitive, poorly specific — good for ruling out"],
            ["Trendelenburg sign", "Single-leg stance 30 s; observe the pelvis", "Contralateral pelvic drop → weak or inhibited hip abductors on the stance side"],
            ["Resisted abduction / single-leg stance 30 s", "Reproduce lateral hip pain", "Gluteal tendinopathy when pain localises over the greater trochanter"],
            ["Palpation of greater trochanter", "Direct tenderness", "Supports GTPS; absence makes it unlikely"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "Hip vs spine: hip joint pain is usually groin-based, aggravated by rotation and weight-bearing, with restricted IR; spinal referral often changes with lumbar posture, may pass below the knee, and hip ROM is full and painless.",
            "A negative FADIR makes significant intra-articular pathology unlikely — its value is as a rule-out test.",
          ],
        },
      ],
    },
    {
      slug: "total-hip-replacement",
      title: "Total Hip Replacement: Approaches & Precautions",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Total hip replacement (THR) replaces the femoral head with a stemmed prosthetic head and resurfaces the acetabulum with a cup. It is one of the most successful operations in medicine, offering reliable pain relief for end-stage hip OA. The surgical approach determines which structures are disturbed and traditionally which movement precautions follow.",
        },
        {
          kind: "cards",
          items: [
            { title: "Posterior approach", text: "The most common approach worldwide. The short external rotators and posterior capsule are divided, creating a historical risk of posterior dislocation in flexion–adduction–IR.", icon: "arrow-down-right" },
            { title: "Lateral (anterolateral)", text: "Splits gluteus medius/minimus; lower dislocation risk but risk of abductor weakness and persistent Trendelenburg gait.", icon: "arrow-right" },
            { title: "Anterior approach", text: "Intermuscular plane sparing major muscle division; typically fewer movement restrictions, but extension–external rotation is the theoretical dislocation direction.", icon: "arrow-up-right" },
          ],
        },
        {
          kind: "table",
          headers: ["Classic posterior precaution", "Everyday translation"],
          rows: [
            ["No hip flexion beyond 90°", "No low chairs or sofas, raised toilet seat, don't lean forward past the thighs in sitting"],
            ["No adduction across midline", "Don't cross the legs; pillow between the knees when lying on the side"],
            ["No internal rotation", "Don't pivot inward on the operated leg; don't turn the toes in"],
            ["Combined movements are the real danger", "Flexion + adduction + IR together — e.g. reaching across the body to the floor from sitting — is the classic dislocation mechanism"],
          ],
        },
        {
          kind: "paragraph",
          text: "Precautions are typically applied for the first 6–12 weeks while soft tissues heal, but practice is changing: several trials and cohort studies of modern implants and repair techniques show that relaxing or removing routine posterior precautions does not increase early dislocation, and rigid restrictions can slow functional recovery and increase fear. The clinical rule is simple — follow the operating surgeon's protocol, and coach safe movement rather than fear.",
        },
        {
          kind: "warning",
          title: "Precaution pitfalls",
          items: [
            "Applying posterior precautions to an anterior-approach THR (its vulnerable direction is extension–ER, not flexion–IR)",
            "Teaching precautions as permanent — most services lift them by 6–12 weeks",
            "Letting precautions become fear: patients who are terrified to move recover more slowly",
            "Assuming every service uses the same protocol — always check the local/surgeon guideline",
          ],
        },
      ],
    },
    {
      slug: "joint-replacement-rehab",
      title: "Rehabilitation after THR & TKR",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Modern joint replacement rehabilitation follows enhanced-recovery principles: mobilise on the day of surgery or day one, restore walking with an appropriate aid, and progress strengthening steadily over weeks to months. Prolonged bed rest increases DVT risk, accelerates deconditioning and delays discharge.",
        },
        { kind: "image", illustration: "walking-aids", caption: "Typical walking-aid progression after hip or knee replacement: frame or two crutches early, to one crutch or stick in the opposite hand, to unaided walking as strength and confidence return." },
        {
          kind: "steps",
          items: [
            { title: "Day 0–1: early mobilisation", text: "Circulatory exercises (ankle pumps), bed mobility and transfers, standing and short walks with a frame or crutches. Early movement is the single best DVT prevention a physiotherapist delivers." },
            { title: "Week 0–2: foundations", text: "THR: hip abduction, extension and safe-range mobility, gait re-education. TKR: early knee ROM (target ~90° flexion by around 2 weeks), full passive extension from day one, and quadriceps activation — quads sets, straight-leg raises — because arthrogenic inhibition is profound after knee surgery." },
            { title: "Weeks 2–6: build", text: "Progress walking distance, wean walking aids as gait normalises, sit-to-stand and step practice, stationary cycling once ROM allows (TKR usually ~90–100° flexion)." },
            { title: "Weeks 6–12: strengthen", text: "Progressive resistance for hip abductors, extensors and quadriceps; balance work; stairs reciprocally; return to driving typically ~6 weeks when safe and off strong analgesia (follow local guidance)." },
            { title: "3–12 months: restore capacity", text: "Ongoing strength gains and return to low-impact sport (walking, cycling, swimming, golf, doubles tennis). High-impact sport is generally discouraged on a replaced joint." },
          ],
        },
        {
          kind: "keypoints",
          title: "TKR rehab essentials",
          items: [
            "Full passive extension early is the priority — a fixed flexion contracture is much harder to correct late",
            "Roughly 90° of flexion by 2 weeks and ~110–120° by 12 weeks are common working milestones",
            "Quadriceps activation from day one; expect inhibition and swelling to suppress it",
            "Swelling management (ice, elevation, activity pacing) directly protects quads function",
            "Kneeling on a replaced knee is uncomfortable for many but not harmful once healed",
          ],
        },
        {
          kind: "pearls",
          items: [
            "The strongest predictors of poor ROM after TKR are pre-operative stiffness and delayed early motion — the first two weeks matter.",
            "After THR, persistent Trendelenburg gait usually reflects abductor weakness, not implant failure: strengthen before investigating.",
          ],
        },
      ],
    },
    {
      slug: "postop-red-flags",
      title: "Post-operative Red Flags",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Physiotherapists see joint replacement patients more often than any other clinician in the early weeks, so recognising post-operative complications is a core safety skill. Three groups matter most: venous thromboembolism, infection, and dislocation.",
        },
        {
          kind: "redflags",
          items: [
            "DVT: new calf pain, swelling, warmth or tenderness in the operated or opposite leg — urgent medical assessment, do not massage or vigorously exercise the calf",
            "PE: sudden breathlessness, pleuritic chest pain, haemoptysis, tachycardia or collapse — emergency (call emergency services)",
            "Infection: increasing wound redness, discharge, dehiscence, spreading warmth, fever/rigors, or escalating pain out of proportion after initial improvement",
            "Dislocation (THR): sudden severe pain with a clunk, inability to weight-bear, and a leg that appears shortened and rotated — do not attempt to move the limb; urgent orthopaedic review",
            "Periprosthetic fracture: fall or twist followed by new severe pain and inability to weight-bear",
            "Rapidly increasing night pain or systemic malaise at any stage — review",
          ],
        },
        {
          kind: "paragraph",
          text: "A classic examination point: after posterior dislocation of a THR the leg lies shortened, flexed, adducted and internally rotated. Compare with a femoral neck fracture, where the leg classically lies shortened and externally rotated.",
        },
        {
          kind: "pearls",
          items: [
            "Calf pain after joint replacement is DVT until proven otherwise — the threshold for referral is deliberately low.",
            "Escalating pain after the first week's improvement is the most useful early clue to deep infection.",
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
          text: "These four exercises cover the core needs across hip OA, gluteal tendinopathy and post-arthroplasty rehabilitation: gluteal strength, abductor control, functional lower-limb power and stair capacity. Dose them to the individual and progress one variable at a time.",
        },
        {
          kind: "exercise",
          name: "Bridging",
          purpose: "Gluteus maximus and hamstring strengthening with low joint compression; safe early after THR and TKR.",
          position: "Supine (crook lying), knees bent about 90°, feet hip-width apart.",
          execution: "Squeeze the glutes and lift the pelvis until shoulders, hips and knees form a straight line. Hold 3–5 seconds, lower with control.",
          dosage: "10–12 reps × 2–3 sets, daily to alternate days.",
          progression: "Feet closer / single-leg bridge, march in the bridge position, or add a band above the knees pressing gently outward.",
          precautions: "Keep the range comfortable after THR; avoid breath-holding.",
        },
        {
          kind: "exercise",
          name: "Side-lying / standing hip abduction",
          purpose: "Gluteus medius strengthening for pelvic control, Trendelenburg correction and gluteal tendinopathy loading.",
          position: "Side-lying with the body in one straight line (top hip slightly toward extension, NOT flexed), or standing with hand support.",
          execution: "Lift the top leg 20–30 cm keeping the toes facing forward and the trunk still, lower slowly over 3 seconds.",
          dosage: "8–12 reps × 2–3 sets, 3×/week.",
          progression: "Add an ankle weight or band; progress toward loaded single-leg stance work.",
          precautions: "In gluteal tendinopathy avoid dropping the leg into adduction (below the midline) between reps — start from neutral, not from a hanging position.",
        },
        {
          kind: "exercise",
          name: "Sit-to-stand",
          purpose: "Functional strengthening of quadriceps and hip extensors — the movement most patients need most.",
          position: "Firm chair, feet hip-width and drawn slightly back under the knees.",
          execution: "Lean forward from the hips (\"nose over toes\"), push evenly through both legs to stand, lower back down over 3 seconds.",
          dosage: "8–12 reps × 2–3 sets, daily.",
          progression: "Lower seat height, hold a weight at the chest, or shift weight toward the affected leg.",
          precautions: "Early after posterior THR keep a higher seat so hip flexion stays within the permitted range; use armrests as needed.",
        },
        {
          kind: "exercise",
          name: "Step-ups",
          purpose: "Single-leg strength and stair capacity for hip OA and late-stage arthroplasty rehab.",
          position: "Facing a step (start 10 cm), hand support available.",
          execution: "Step up leading with the affected leg, keep the pelvis level (no hip drop), lower down slowly with control.",
          dosage: "8–10 reps each leg × 2–3 sets, 3×/week.",
          progression: "Raise the step height, add load, slow the eccentric, or remove hand support.",
          precautions: "Watch for pelvic drop or the knee collapsing inward — quality before height. Pain up to ~5/10 settling within 24 h is acceptable.",
        },
        {
          kind: "keypoints",
          title: "Dosing reminders",
          items: [
            "Strength changes need 8–12+ weeks of consistent loading",
            "Use the 24-hour symptom response to judge whether the dose was right",
            "In gluteal tendinopathy, manage compression (positions) and load (exercise) together",
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
            "Groin pain = hip joint; lateral pain = gluteal tendon; buttock pain = screen the spine",
            "Hip OA: age > 45, activity-related groin pain, IR lost first — clinical diagnosis, exercise first-line",
            "Gluteal tendinopathy: compression is the enemy — fix sleep posture, leg crossing and hip hanging; load the abductors",
            "FAI syndrome = symptoms + signs + imaging morphology; FADIR is a rule-out test",
            "Posterior THR classic precautions: no flexion > 90°, no adduction past midline, no IR — but follow the surgeon's modern protocol",
            "TKR: full extension early, ~90° flexion by 2 weeks, relentless quadriceps activation",
            "Post-op red flags: calf pain (DVT), sudden breathlessness (PE), fever + wound changes (infection), clunk + shortened rotated leg (dislocation)",
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
      text: "A patient with intra-articular hip pathology is most likely to feel pain in which location?",
      options: ["Posterior buttock only", "Groin and anterior thigh", "Lateral calf", "Lumbar spine"],
      correctIndex: 1,
      explanation:
        "The hip joint is innervated mainly by branches of the femoral and obturator nerves, so intra-articular pathology classically produces groin and anterior thigh pain, sometimes referring to the knee. Buttock-dominant pain more often arises from the lumbar spine, SIJ or gluteal tendons.",
      difficulty: "Easy",
      tags: ["anatomy", "clinical-reasoning"],
      sectionSlug: "hip-anatomy",
    },
    {
      text: "Which movement is typically lost first in hip osteoarthritis?",
      options: ["External rotation", "Internal rotation", "Extension", "Abduction"],
      correctIndex: 1,
      explanation:
        "The capsular pattern of the hip begins with internal rotation — IR loss is the earliest and most reliable movement sign of hip OA, later joined by restriction of flexion and abduction. Comparing IR side-to-side in prone or 90° flexion is a quick, sensitive screen.",
      difficulty: "Easy",
      tags: ["assessment", "pathology"],
      sectionSlug: "hip-osteoarthritis",
    },
    {
      text: "What is the primary mechanical aggravating factor in gluteal tendinopathy?",
      options: [
        "Repetitive hip extension",
        "Compression of the tendons against the greater trochanter in hip adduction",
        "Excessive external rotation",
        "Prolonged hip flexion in sitting with the legs uncrossed",
      ],
      correctIndex: 1,
      explanation:
        "The gluteus medius and minimus tendons wrap around the greater trochanter, and adducted positions (crossing the legs, hanging on one hip, side-lying) compress them against the bone. Compression plus tensile load is what irritated tendons tolerate least, which drives both the aggravating factors and management.",
      difficulty: "Easy",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "lateral-hip-pain",
    },
    {
      text: "A patient with lateral hip pain reports waking at night when lying on either side. Which piece of advice is most appropriate?",
      options: [
        "Stretch the ITB firmly into adduction each night before bed",
        "Sleep on the unaffected side with a pillow between the knees to prevent adduction of the top leg",
        "Sleep sitting upright for six weeks",
        "Lie only on the painful side to desensitise the tendon",
      ],
      correctIndex: 1,
      explanation:
        "Lying on the painful side compresses the tendon directly, and lying on the other side lets the top leg fall into adduction, also compressing it. A pillow between the knees keeps the top hip near neutral. Adduction stretching increases compression and typically worsens GTPS.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "lateral-hip-pain",
    },
    {
      text: "In the LEAP trial for gluteal tendinopathy, which intervention produced the best outcomes at 12 months?",
      options: [
        "Corticosteroid injection",
        "Wait and see",
        "Education plus exercise",
        "Therapeutic ultrasound",
      ],
      correctIndex: 2,
      explanation:
        "The LEAP randomised trial compared education plus exercise, corticosteroid injection, and wait-and-see for gluteal tendinopathy: education plus exercise gave higher rates of global improvement than injection or wait-and-see at both 8 weeks and 12 months. Injection helped short-term but not long-term.",
      difficulty: "Hard",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "lateral-hip-pain",
    },
    {
      text: "Which statement about the FADIR test is most accurate?",
      options: [
        "It is highly specific — a positive test confirms a labral tear",
        "It is highly sensitive but poorly specific — most useful as a rule-out test for intra-articular pathology",
        "It tests hip abductor strength",
        "A positive test indicates lumbar radiculopathy",
      ],
      correctIndex: 1,
      explanation:
        "FADIR (flexion–adduction–internal rotation) is highly sensitive for intra-articular pathology such as FAI syndrome and labral tears, but many painless conditions can also make it positive. Its clinical value is as a rule-out test: a negative FADIR makes significant intra-articular pathology unlikely.",
      difficulty: "Medium",
      tags: ["special-tests", "clinical-reasoning"],
      sectionSlug: "hip-assessment",
    },
    {
      text: "During single-leg stance on the right leg, the patient's left side of the pelvis drops. What does this indicate?",
      options: [
        "Weak left hip abductors",
        "Weak or inhibited right hip abductors",
        "Right hip adductor tightness",
        "Left quadriceps weakness",
      ],
      correctIndex: 1,
      explanation:
        "A positive Trendelenburg sign is contralateral pelvic drop: the stance-side abductors (here, the right gluteus medius/minimus) are too weak or inhibited to hold the pelvis level, so the opposite side falls. It is seen in hip OA, gluteal tendinopathy and after some hip surgeries.",
      difficulty: "Medium",
      tags: ["special-tests", "assessment"],
      sectionSlug: "hip-assessment",
    },
    {
      text: "Which finding best helps differentiate hip joint pain from lumbar spine referral?",
      options: [
        "Pain that extends into the calf and foot with full, painless hip rotation",
        "Groin pain reproduced by hip internal rotation with restricted range",
        "Pain eased by changing lumbar posture",
        "A positive straight-leg raise",
      ],
      correctIndex: 1,
      explanation:
        "Groin pain reproduced by restricted hip rotation points to the hip joint. Pain below the knee, symptoms altered by lumbar posture and positive neural tests all point to the spine, especially when hip range is full and painless. Both regions must be screened in every hip presentation.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "hip-assessment",
    },
    {
      text: "For a diagnosis of femoroacetabular impingement (FAI) syndrome, what is required?",
      options: [
        "Cam morphology on X-ray alone",
        "A positive FADIR test alone",
        "Symptoms, positive clinical signs AND imaging findings together",
        "MRI evidence of a labral tear alone",
      ],
      correctIndex: 2,
      explanation:
        "By international consensus (Warwick Agreement), FAI syndrome is diagnosed only when symptoms, clinical signs and imaging morphology are all present. Cam/pincer shapes and labral tears are common in asymptomatic people, so morphology alone is never a diagnosis.",
      difficulty: "Hard",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "fai-labral",
    },
    {
      text: "Which combination of movements is classically avoided after a posterior-approach total hip replacement?",
      options: [
        "Extension, abduction and external rotation",
        "Flexion beyond 90°, adduction past midline and internal rotation",
        "Flexion to 45°, abduction and neutral rotation",
        "Extension and adduction only",
      ],
      correctIndex: 1,
      explanation:
        "The posterior approach divides the posterior capsule and short external rotators, so the historical dislocation direction is posterior — provoked by combined flexion beyond 90°, adduction across midline and internal rotation (e.g. reaching across the body to the floor from a low chair). Anterior approaches have the opposite theoretical risk direction (extension–ER).",
      difficulty: "Easy",
      tags: ["precautions", "management"],
      sectionSlug: "total-hip-replacement",
    },
    {
      text: "What is the current evidence trend regarding routine movement precautions after posterior THR?",
      options: [
        "Precautions must be maintained for life in all patients",
        "Several studies show relaxing routine precautions does not increase early dislocation with modern techniques, and many services now use fewer restrictions",
        "Precautions have been proven to double the dislocation rate",
        "Precautions are now applied only to anterior approaches",
      ],
      correctIndex: 1,
      explanation:
        "With modern implants (larger heads) and soft-tissue repair, trials and cohort studies show that removing or relaxing routine posterior precautions does not increase early dislocation rates, while rigid restrictions can slow recovery and increase fear. Practice varies, so the working rule is to follow the operating surgeon's protocol.",
      difficulty: "Hard",
      tags: ["precautions", "management", "clinical-reasoning"],
      sectionSlug: "total-hip-replacement",
    },
    {
      text: "A patient 10 days after posterior THR reaches from a low chair across their body toward the floor, feels a clunk and severe pain, and the leg now appears shortened and internally rotated. What has most likely happened?",
      options: [
        "Deep vein thrombosis",
        "Posterior dislocation of the prosthesis",
        "Normal post-operative soreness",
        "Wound infection",
      ],
      correctIndex: 1,
      explanation:
        "Reaching across the body from a low chair combines flexion, adduction and internal rotation — the classic posterior dislocation mechanism. Sudden pain with a clunk, inability to weight-bear and a shortened, internally rotated leg is a dislocated THR: do not move the limb; urgent orthopaedic review is required.",
      difficulty: "Medium",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "postop-red-flags",
    },
    {
      text: "Five days after a TKR, a patient develops new calf pain and swelling in the operated leg. What is the most appropriate action?",
      options: [
        "Massage the calf and apply heat",
        "Increase walking distance to pump the swelling away",
        "Urgent medical assessment for possible DVT; avoid massaging the calf",
        "Reassure that calf pain is normal and review in a week",
      ],
      correctIndex: 2,
      explanation:
        "New calf pain, swelling, warmth or tenderness after lower-limb joint replacement is DVT until proven otherwise. The correct response is urgent medical assessment (typically ultrasound); massage or vigorous calf exercise is avoided. If breathlessness or chest pain appear, treat as possible PE — an emergency.",
      difficulty: "Easy",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "postop-red-flags",
    },
    {
      text: "Which early rehabilitation priority is most important after total knee replacement?",
      options: [
        "Achieving full passive knee extension and activating the quadriceps from day one",
        "Avoiding all knee movement for two weeks to protect the wound",
        "Deep squatting by the end of week one",
        "Isolated hamstring curls only",
      ],
      correctIndex: 0,
      explanation:
        "Full passive extension early is the priority because a fixed flexion contracture is very difficult to correct later, and quadriceps activation must start immediately because arthrogenic inhibition and swelling profoundly suppress the muscle. Around 90° of flexion by two weeks is a common working milestone. Immobilisation is harmful.",
      difficulty: "Medium",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "joint-replacement-rehab",
    },
    {
      text: "Why is early mobilisation on day 0–1 after joint replacement so strongly emphasised?",
      options: [
        "It removes the need for analgesia",
        "It reduces DVT risk, prevents deconditioning and speeds functional recovery",
        "It allows immediate return to sport",
        "It is only done to free up hospital beds",
      ],
      correctIndex: 1,
      explanation:
        "Enhanced-recovery pathways mobilise patients on the day of surgery or day one because early movement is the best physiotherapy-delivered DVT prevention, limits deconditioning, improves pain and confidence, and shortens hospital stay. Prolonged bed rest increases complications without protecting the joint.",
      difficulty: "Easy",
      tags: ["management", "precautions"],
      sectionSlug: "joint-replacement-rehab",
    },
    {
      text: "In side-lying hip abduction for gluteal tendinopathy, which technique detail matters most?",
      options: [
        "Lifting the leg as high as possible into full abduction",
        "Starting from neutral and avoiding letting the leg drop into adduction between repetitions",
        "Flexing the top hip to 90° throughout",
        "Performing the exercise as fast as possible",
      ],
      correctIndex: 1,
      explanation:
        "The key in gluteal tendinopathy is to strengthen the abductors without compressive adduction: the body stays in one straight line and the leg starts from neutral rather than hanging below the midline. Height of lift matters far less than avoiding the adducted, compressed start position.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "precautions"],
      sectionSlug: "exercise-blocks",
    },
    {
      text: "Which clinical picture most supports hip OA rather than gluteal tendinopathy?",
      options: [
        "Pain on direct palpation of the greater trochanter with painful resisted abduction",
        "Groin pain with restricted internal rotation and difficulty putting on socks",
        "Lateral hip pain when lying on the affected side at night",
        "Pain provoked by standing \"hanging on one hip\"",
      ],
      correctIndex: 1,
      explanation:
        "Groin-based pain, restricted internal rotation and difficulty reaching the foot are the classic hip OA pattern. Trochanteric tenderness, painful resisted abduction, side-lying night pain and adduction-compression postures all point to gluteal tendinopathy (GTPS) instead.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "hip-osteoarthritis",
    },
    {
      text: "After a THR, a patient walks with persistent contralateral pelvic drop at 8 weeks. What is the most likely explanation and best response?",
      options: [
        "Implant loosening — urgent revision surgery",
        "Hip abductor weakness — progressive abductor strengthening and gait re-education",
        "Leg-length discrepancy that can only be treated surgically",
        "Normal permanent consequence of THR requiring no action",
      ],
      correctIndex: 1,
      explanation:
        "A persistent Trendelenburg pattern after THR usually reflects hip abductor weakness (especially after lateral approaches that split gluteus medius), compounded by pre-operative deconditioning. First-line management is progressive abductor strengthening with gait re-education; investigation is reserved for atypical or worsening presentations.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "exercise-therapy"],
      sectionSlug: "joint-replacement-rehab",
    },
    {
      text: "Which post-operative finding is the most useful early clue to deep infection after joint replacement?",
      options: [
        "Mild swelling that improves each week",
        "Bruising around the wound in week one",
        "Escalating pain, wound discharge and fever after an initial period of improvement",
        "Stiffness in the morning that eases with movement",
      ],
      correctIndex: 2,
      explanation:
        "Progressive improvement is the expected trajectory. Pain that escalates after initially improving, especially with wound redness, discharge or fever/rigors, is the classic pattern of deep prosthetic infection and requires urgent medical review. Mild resolving swelling and bruising are normal.",
      difficulty: "Hard",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "postop-red-flags",
    },
  ],
  flashcards: [
    { front: "Where is true hip joint pain classically felt?", back: "In the groin and anterior thigh, sometimes referring to the knee. Buttock-dominant pain suggests the lumbar spine, SIJ or gluteal tendons instead." },
    { front: "Earliest movement lost in hip OA?", back: "Internal rotation — the hip's capsular pattern starts with IR loss, followed by flexion and abduction." },
    { front: "What is the key mechanical driver of gluteal tendinopathy?", back: "Compression of the gluteus medius/minimus tendons against the greater trochanter in adducted positions (leg crossing, hip hanging, side-lying)." },
    { front: "Sleep advice for greater trochanteric pain syndrome?", back: "Lie on the unaffected side with a pillow between the knees so the top leg cannot drop into adduction; avoid lying directly on the painful side." },
    { front: "What did the LEAP trial show for gluteal tendinopathy?", back: "Education plus exercise beat corticosteroid injection and wait-and-see at 8 weeks and 12 months." },
    { front: "FADIR test — what is it good for?", back: "Ruling OUT intra-articular pathology: it is highly sensitive but poorly specific, so a negative test makes FAI/labral pathology unlikely." },
    { front: "What does a positive Trendelenburg sign look like and mean?", back: "The pelvis drops on the swing side during single-leg stance — indicating weak/inhibited hip abductors on the STANCE side." },
    { front: "Classic posterior THR precautions?", back: "No hip flexion beyond 90°, no adduction across midline, no internal rotation — especially combined. Modern practice often relaxes these; follow the surgeon's protocol." },
    { front: "Presentation of a posteriorly dislocated THR?", back: "Sudden pain with a clunk, unable to weight-bear, leg shortened, flexed, adducted and internally rotated. Do not move the limb — urgent orthopaedic review." },
    { front: "Two key early TKR rehab priorities?", back: "Full passive knee extension from day one, and quadriceps activation (quads sets, SLR) despite arthrogenic inhibition; ~90° flexion by about 2 weeks." },
    { front: "Post-op red flags for DVT and PE?", back: "DVT: new calf pain, swelling, warmth. PE: sudden breathlessness, pleuritic chest pain, tachycardia, collapse — emergency." },
    { front: "Requirements for a diagnosis of FAI syndrome?", back: "Symptoms + positive clinical signs (e.g. FADIR) + imaging morphology (cam/pincer). Morphology alone is not a diagnosis." },
  ],
};

export default topic;
