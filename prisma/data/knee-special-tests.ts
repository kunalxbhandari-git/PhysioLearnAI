import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "knee-special-tests",
  title: "Knee Special Tests",
  category: "Clinical Assessment",
  description:
    "Learn to perform and interpret the key ligament, meniscal, patellofemoral and effusion tests of the knee — and to reason with sensitivity, specificity and test clusters like a clinician.",
  difficulty: "Advanced",
  estMinutes: 29,
  icon: "stethoscope",
  keyTakeaways: [
    "No special test is used in isolation: pre-test probability from the history plus clusters of tests beat any single manoeuvre.",
    "SnNout: a highly Sensitive test that is Negative helps rule a condition out. SpPin: a highly Specific test that is Positive helps rule it in.",
    "The Lachman test is the most sensitive clinical test for ACL rupture — performed at 20–30° flexion, judged on translation and end-feel.",
    "The pivot shift is highly specific for ACL rupture but hard to elicit in the awake, guarded patient.",
    "Valgus and varus stress tests are done at both 0° and 30°: laxity at 30° isolates the collateral; laxity at 0° implies additional capsuloligamentous or cruciate injury.",
    "Joint-line tenderness is sensitive but not specific for meniscal tears; Thessaly and McMurray add specificity, and combinations improve accuracy.",
    "Clarke's test (patellar grind) has poor validity with frequent false positives — do not base a patellofemoral diagnosis on it.",
    "Choose the effusion test by size: sweep/brush test for small effusions, patellar tap for moderate to large ones.",
  ],
  sections: [
    {
      slug: "principles",
      title: "Principles: Making Tests Useful",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "A special test does not diagnose anything by itself — it shifts probability. Before your hands touch the knee, the history has already set a pre-test probability (mechanism of injury, pop, immediate swelling, locking, giving way). The job of testing is to move that probability up or down enough to change management.",
        },
        {
          kind: "cards",
          items: [
            { title: "Sensitivity", text: "The proportion of people WITH the condition who test positive. A highly sensitive test misses few cases — so a negative result argues against the condition.", icon: "search" },
            { title: "Specificity", text: "The proportion of people WITHOUT the condition who test negative. A highly specific test rarely false-alarms — so a positive result argues for the condition.", icon: "target" },
            { title: "SnNout", text: "Sensitive test, Negative → rules OUT. Example: a truly negative Lachman makes complete ACL rupture unlikely.", icon: "x-circle" },
            { title: "SpPin", text: "Specific test, Positive → rules IN. Example: a clear pivot shift strongly supports ACL rupture.", icon: "check-circle" },
          ],
        },
        {
          kind: "paragraph",
          text: "Because individual tests are imperfect, clusters outperform single tests. Combining history features with two or three concordant tests (for example joint-line tenderness plus a positive Thessaly plus a mechanical history for meniscal tears) produces far better diagnostic accuracy than any lone manoeuvre.",
        },
        {
          kind: "keypoints",
          title: "Interpreting any test",
          items: [
            "History first: pre-test probability determines what a positive or negative result actually means",
            "Sensitive tests are best for ruling out (SnNout); specific tests for ruling in (SpPin)",
            "Always compare with the uninjured side — 'laxity' is only meaningful relative to the patient's normal",
            "Pain and guarding degrade every test; test early after injury or after the acute reaction settles",
          ],
        },
        {
          kind: "pearls",
          items: [
            "A test performed on a guarded, painful knee tells you mostly about guarding. Position the patient comfortably and repeat key tests at the end of the session if needed.",
            "Report end-feel, not just excursion: a soft or absent end-point often matters more than millimetres of translation.",
          ],
        },
      ],
    },
    {
      slug: "acl-tests",
      title: "ACL Tests: Lachman, Anterior Drawer, Pivot Shift",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "The classic ACL history is a non-contact pivoting or deceleration injury with an audible pop, immediate swelling (haemarthrosis within hours) and a feeling of instability. Three tests dominate clinical examination.",
        },
        { kind: "image", illustration: "knee-joint", caption: "Knee anatomy relevant to ligament testing: cruciate and collateral ligaments, menisci and joint lines." },
        {
          kind: "steps",
          items: [
            { title: "Lachman test — position", text: "Patient supine, knee flexed 20–30°. Stabilise the distal femur with one hand; grasp the proximal tibia with the other, thumb on the joint line." },
            { title: "Lachman — execution", text: "Apply a brisk anterior translation force to the tibia. Judge the amount of translation compared with the other side AND the quality of the end-point (firm vs soft/absent)." },
            { title: "Lachman — grading", text: "Grade 1: 3–5 mm increased translation; Grade 2: 5–10 mm; Grade 3: >10 mm. A soft or absent end-feel at any grade strongly suggests rupture." },
            { title: "Anterior drawer — execution", text: "Knee flexed to 90°, foot flat and stabilised (sit gently on it), hamstrings relaxed. Draw the tibia forward with both hands behind the proximal tibia. Less sensitive acutely because 90° flexion is painful, hamstring spasm resists translation, and a displaced meniscal fragment can block movement." },
            { title: "Pivot shift — execution", text: "From extension, apply valgus and internal rotation while flexing the knee. In an ACL-deficient knee the anteriorly subluxed lateral tibial plateau visibly and palpably reduces at about 20–40° flexion with a clunk. Requires a relaxed patient — most reliable under anaesthesia." },
          ],
        },
        {
          kind: "table",
          headers: ["Test", "Best property", "Clinical use"],
          rows: [
            ["Lachman", "Most sensitive ACL test (high sensitivity, good specificity)", "Best single test to rule OUT ACL rupture when clearly negative"],
            ["Anterior drawer", "Moderate accuracy; better in chronic than acute injuries", "Supplementary — never sufficient alone in the acute knee"],
            ["Pivot shift", "Highly specific; poor sensitivity awake", "A positive result strongly rules IN ACL rupture and correlates with functional instability"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "The Lachman works where the drawer fails because at 20–30° flexion the hamstrings have poor line of pull to resist anterior translation, and the position is tolerable for a swollen knee.",
            "Rapid swelling within 2 hours of a pivoting injury is haemarthrosis until proven otherwise — ACL rupture is the most common cause in that picture.",
          ],
        },
      ],
    },
    {
      slug: "pcl-tests",
      title: "PCL Tests: Posterior Drawer & Sag",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "PCL injuries typically follow a posteriorly directed force on the proximal tibia — the dashboard injury in a car accident, or a fall onto the flexed knee with the foot plantarflexed. They are commonly missed, and a missed posterior sag makes every anterior test misleading.",
        },
        {
          kind: "steps",
          items: [
            { title: "Posterior sag sign (Godfrey's)", text: "Supine, hips and knees flexed to 90°, heels supported. View the tibial profiles from the side: in PCL deficiency gravity drops the tibia posteriorly, flattening the normal anterior step of the tibial tuberosity." },
            { title: "Posterior drawer — position", text: "Knee flexed to 90°, foot stabilised, as for the anterior drawer. First confirm the neutral starting position — the medial tibial plateau should sit about 1 cm anterior to the femoral condyle." },
            { title: "Posterior drawer — execution", text: "Push the proximal tibia posteriorly. Grade by the position of the plateau relative to the condyle: Grade 1 (0–5 mm, step reduced), Grade 2 (5–10 mm, plateau flush), Grade 3 (>10 mm, plateau behind the condyle — suspect combined injury)." },
            { title: "Quadriceps active test", text: "In the same position ask for a gentle quadriceps contraction (attempting to slide the foot down the plinth): in PCL deficiency the sagged tibia visibly shifts anteriorly back to neutral." },
          ],
        },
        {
          kind: "warning",
          title: "The classic trap",
          items: [
            "If the tibia is already sagged posteriorly, pulling it forward to neutral feels like a positive anterior drawer — the PCL injury masquerades as an ACL injury.",
            "Always check the sag and the tibial step-off BEFORE interpreting any drawer test.",
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Mechanism: posterior force on the proximal tibia (dashboard) or fall on the flexed knee",
            "Posterior drawer is the most accurate clinical PCL test; sag sign and quadriceps active test support it",
            "Grade 3 posterior laxity suggests combined injury (e.g. posterolateral corner) — needs orthopaedic review",
          ],
        },
      ],
    },
    {
      slug: "collateral-tests",
      title: "Collateral Ligament Stress Tests",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "The MCL is injured by valgus force (a blow to the outside of the knee), the LCL by varus force. Stress testing is performed at two angles for a reason: at 30° flexion the capsule and cruciates slacken so the collateral is isolated; in full extension the posterior capsule and cruciates share the load, so laxity at 0° means more than an isolated collateral tear.",
        },
        { kind: "image", illustration: "ligament-grades", caption: "Ligament injury grades I–III as felt on stress testing: pain without laxity, laxity with a firm end-point, then gross laxity with a soft or absent end-point — grade III is often the least painful." },
        {
          kind: "steps",
          items: [
            { title: "Valgus stress at 30°", text: "Supine, knee over the edge of the plinth or supported in 30° flexion. One hand on the lateral joint line as fulcrum, the other on the distal tibia; apply a valgus (abduction) force. Assess gapping and end-feel versus the other side — isolates the MCL." },
            { title: "Valgus stress at 0°", text: "Repeat in full extension. Gapping here implies MCL plus posteromedial capsule and possible cruciate involvement — a more serious injury pattern." },
            { title: "Varus stress at 30° and 0°", text: "Mirror-image technique with an adduction force and a medial fulcrum. Laxity at 30° isolates the LCL; laxity at 0° suggests LCL plus posterolateral corner ± cruciates." },
            { title: "Grading", text: "Grade I: pain, no laxity; Grade II: laxity with a firm end-point; Grade III: gross laxity with a soft or absent end-point (often surprisingly little pain because the ligament is completely torn)." },
          ],
        },
        {
          kind: "pearls",
          items: [
            "A grade III sprain can hurt LESS on stress testing than a grade II — a completely ruptured ligament has no intact fibres left to strain.",
            "Varus laxity in extension should always trigger assessment of the common peroneal nerve — posterolateral corner injuries put it at risk.",
          ],
        },
        {
          kind: "keypoints",
          items: [
            "30° flexion isolates the collateral being tested",
            "Laxity at 0° = collateral + capsule ± cruciate involvement",
            "Grade by gapping AND end-feel, always against the other side",
          ],
        },
      ],
    },
    {
      slug: "meniscal-tests",
      title: "Meniscal Tests",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "The meniscal history is twisting on a loaded, flexed knee, delayed (24–48 hour) effusion, joint-line pain, and mechanical symptoms — clicking, catching, or true locking. Tests aim to compress or shear the menisci between tibia and femur.",
        },
        {
          kind: "steps",
          items: [
            { title: "Joint-line tenderness", text: "Flex the knee to about 45–90° to expose the joint lines and palpate systematically from anterior to posterior on each side. Sensitive but not specific — many other structures (collaterals, fat pad, capsule) are tender at the joint line." },
            { title: "McMurray's test", text: "Supine, hip and knee fully flexed. For the medial meniscus: externally rotate the tibia, apply gentle valgus, and extend the knee while palpating the medial joint line. For the lateral meniscus: internal rotation ± varus. Positive: a palpable or audible thud/click over the joint line, classically with pain. Pain alone, without the mechanical finding, is a weaker positive." },
            { title: "Thessaly test", text: "Patient stands on the affected leg holding your hands, knee flexed about 20°, and rotates the trunk and knee internally and externally three times. Positive: joint-line pain or a sense of catching/locking. A weight-bearing test with good overall accuracy — but avoid it in an acutely injured or locked knee." },
            { title: "Apley's compression–distraction", text: "Prone, knee flexed to 90°. Compress axially through the heel while rotating the tibia — pain suggests meniscus. Then distract while rotating — pain now suggests ligament rather than meniscus. The comparison between phases is the point of the test." },
          ],
        },
        {
          kind: "table",
          headers: ["Test", "Character", "Note"],
          rows: [
            ["Joint-line tenderness", "Sensitive, poorly specific", "Good for ruling out when clearly absent; weak for ruling in"],
            ["McMurray", "Specific when a true thud/click is felt; modest sensitivity", "A negative McMurray does not exclude a tear"],
            ["Thessaly", "Good overall accuracy in the subacute knee", "Functional, loaded position; contraindicated in locked knees"],
            ["Apley", "Modest accuracy", "Its value is the compression vs distraction comparison"],
            ["Combination + history", "Best accuracy", "Clusters outperform every individual test"],
          ],
        },
        {
          kind: "warning",
          title: "Interpretation cautions",
          items: [
            "In adults over 50, degenerative meniscal tears are extremely common incidental findings — a positive test does not automatically mean the tear is the pain source.",
            "A truly locked knee (springy block to extension) needs orthopaedic review — do not force extension or perform Thessaly.",
          ],
        },
      ],
    },
    {
      slug: "patellofemoral-tests",
      title: "Patellofemoral Tests",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Patellofemoral assessment separates two different questions: is the patella unstable (subluxation/dislocation history), and is the patellofemoral joint the pain source (anterior knee pain with stairs, squatting, prolonged sitting)?",
        },
        {
          kind: "steps",
          items: [
            { title: "Patellar apprehension test", text: "Supine, knee in slight flexion (~20–30°) over your thigh or a roll. Glide the patella laterally. Positive: the patient becomes apprehensive, grimaces or contracts the quadriceps to stop the movement — reproducing the sensation of impending dislocation. Useful for lateral patellar instability, particularly after a dislocation episode." },
            { title: "Patellar glide and tilt assessment", text: "Assess medial and lateral passive glide (in quadrants) and tilt to profile mobility and lateral retinacular tightness. These findings guide treatment rather than diagnose a lesion." },
            { title: "Clarke's test (patellar grind)", text: "Compress the patella distally while the patient contracts the quadriceps. Described as a patellofemoral pain test — but it has poor validity: it provokes pain in many asymptomatic knees (frequent false positives) and should not be relied on for diagnosis." },
          ],
        },
        {
          kind: "paragraph",
          text: "Patellofemoral pain remains a predominantly clinical diagnosis built on the symptom pattern — anterior or retropatellar pain aggravated by loaded knee flexion (stairs, squatting, running) and prolonged sitting — with tests contributing surprisingly little.",
        },
        {
          kind: "keypoints",
          items: [
            "Apprehension test → lateral patellar instability, especially post-dislocation",
            "Clarke's test has poor validity: frequent false positives — say so in your reasoning, and do not hang a diagnosis on it",
            "Patellofemoral pain is diagnosed on the symptom pattern, not a single special test",
          ],
        },
      ],
    },
    {
      slug: "effusion-tests",
      title: "Effusion Tests",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Detecting and sizing an effusion matters: its timing after injury narrows the diagnosis (haemarthrosis within hours vs synovial effusion over a day), and even small effusions inhibit the quadriceps.",
        },
        {
          kind: "steps",
          items: [
            { title: "Sweep (brush) test — small effusions", text: "Knee extended and relaxed. Stroke upward along the medial side of the patella two or three times to empty the medial gutter, then sweep down the lateral side. Positive: a visible fluid wave bulges on the medial side within seconds. Detects small effusions that the tap test misses." },
            { title: "Patellar tap (ballottement) — moderate to large effusions", text: "Empty the suprapatellar pouch by sliding one hand down the distal thigh, then push the patella posteriorly with two fingers. Positive: the patella sinks through fluid and 'taps' against the femur before rebounding. In a dry knee it is already resting on the femur — no tap." },
          ],
        },
        {
          kind: "table",
          headers: ["Effusion timing after injury", "Likely nature", "Think of"],
          rows: [
            ["Within 2 hours, tense", "Haemarthrosis", "ACL rupture (most common), patellar dislocation, osteochondral or peripheral meniscal injury"],
            ["Over 24–48 hours", "Synovial effusion", "Meniscal tear, chondral irritation, OA flare"],
            ["Recurrent with activity", "Reactive synovitis", "Degenerative pathology, overload"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "Choose the test by size: sweep for subtle effusions, tap for obvious ones. A tense effusion can make both equivocal — the sweep gutter never empties.",
            "Persisting effusion inhibits the quadriceps (arthrogenic muscle inhibition) — manage swelling as part of rehabilitation, not just diagnosis.",
          ],
        },
      ],
    },
    {
      slug: "test-selection",
      title: "Test Selection & Clinical Reasoning",
      estMinutes: 3,
      difficulty: "Advanced",
      content: [
        {
          kind: "paragraph",
          text: "Expert examiners do not run every test on every knee. They generate hypotheses from the history, then choose the few tests whose result — positive or negative — will genuinely change what they do next.",
        },
        {
          kind: "table",
          headers: ["History pattern", "Leading hypothesis", "Test cluster of choice"],
          rows: [
            ["Non-contact pivot, pop, swelling within hours", "ACL rupture", "Lachman (rule out if negative) ± pivot shift (rule in if positive); check collaterals and menisci for combined injury"],
            ["Dashboard blow or fall on flexed knee", "PCL injury", "Sag sign first, then posterior drawer and quadriceps active test"],
            ["Blow to lateral knee, medial pain", "MCL sprain", "Valgus stress at 30° then 0°; joint-line palpation to separate MCL from medial meniscus"],
            ["Twist on loaded knee, delayed swelling, catching", "Meniscal tear", "Joint-line tenderness + McMurray + Thessaly (if not locked) as a cluster"],
            ["Lateral patellar dislocation episode", "Patellar instability", "Apprehension test, glide/tilt assessment"],
            ["Anterior pain with stairs and sitting, no trauma", "Patellofemoral pain", "Diagnosis by symptom pattern; tests mainly exclude other sources"],
          ],
        },
        {
          kind: "steps",
          items: [
            { title: "1. Set pre-test probability", text: "Mechanism, speed of swelling, mechanical symptoms, instability episodes, age and activity level." },
            { title: "2. Screen the basics first", text: "Observation, effusion tests, ROM and a neurovascular check come before provocative testing — they change how (and whether) you stress the knee." },
            { title: "3. Test to change management", text: "Choose sensitive tests to rule out what you must not miss, specific tests to confirm what you suspect." },
            { title: "4. Interpret the cluster", text: "Concordant history + two or more agreeing tests carries weight; one isolated positive against the clinical picture usually does not." },
          ],
        },
        {
          kind: "redflags",
          items: [
            "Inability to bear weight plus bony tenderness (Ottawa knee rule criteria: age ≥55, patellar or fibular head tenderness, cannot flex to 90°, cannot take 4 steps) — X-ray before stress testing",
            "Knee dislocation or gross multidirectional laxity — vascular emergency: check pulses, urgent medical referral",
            "Locked knee with a springy block to extension — orthopaedic review",
            "Hot, red, swollen knee with fever — possible septic arthritis: do not stress test, refer urgently",
          ],
        },
      ],
    },
    {
      slug: "common-errors",
      title: "Common Errors in Knee Testing",
      estMinutes: 2,
      content: [
        {
          kind: "warning",
          title: "Technique errors",
          items: [
            "Testing an anxious, guarded patient without positioning for relaxation — muscle guarding masks laxity, especially in the anterior drawer",
            "Forgetting to check the posterior sag before drawer testing — a PCL injury then reads as a false-positive anterior drawer",
            "Performing valgus/varus stress only at one angle — you lose the ability to distinguish isolated collateral injury from combined injury",
            "Judging the Lachman only on translation and ignoring end-feel",
            "Failing to compare with the uninjured knee — 'normal' laxity varies enormously between individuals",
          ],
        },
        {
          kind: "warning",
          title: "Interpretation errors",
          items: [
            "Treating a single positive test as a diagnosis instead of weighing the cluster against the history",
            "Relying on Clarke's test for patellofemoral pain despite its frequent false positives",
            "Over-calling degenerative meniscal 'positives' in older adults where tears are common incidental findings",
            "Using pain alone as a positive McMurray when the defined positive is a palpable joint-line thud or click",
            "Stress-testing a knee that should first have been imaged (Ottawa criteria) or referred (hot swollen joint, suspected dislocation)",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Order matters: observation → effusion → ROM → neurovascular screen → then provocative tests, least painful first, so guarding does not wreck the rest of your exam.",
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
            "SnNout rules out, SpPin rules in; clusters + history beat any single test",
            "ACL: Lachman at 20–30° (most sensitive; grade 1: 3–5 mm, 2: 5–10 mm, 3: >10 mm); pivot shift specific; drawer supplementary",
            "PCL: check the sag FIRST, then posterior drawer and quadriceps active test",
            "Collaterals: stress at 30° isolates the ligament; laxity at 0° = combined injury; grade III can be less painful than grade II",
            "Meniscus: joint-line tenderness (sensitive) + McMurray (thud = positive) + Thessaly at 20° — as a cluster",
            "Patella: apprehension for instability; Clarke's test has poor validity — avoid relying on it",
            "Effusion: sweep test for small, patellar tap for larger; swelling within 2 h of injury = haemarthrosis, think ACL",
            "Red flags before stress testing: Ottawa criteria, locked knee, suspected dislocation, hot swollen joint",
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
      text: "A test with high sensitivity is most useful clinically for which purpose?",
      options: [
        "Ruling IN a condition when positive",
        "Ruling OUT a condition when negative",
        "Grading the severity of a ligament tear",
        "Replacing the need for a patient history",
      ],
      correctIndex: 1,
      explanation:
        "A highly sensitive test misses few true cases, so when it is negative the condition becomes unlikely — SnNout (Sensitive, Negative, rules out). Ruling in is the strength of highly specific tests (SpPin). No test replaces the history, which sets the pre-test probability.",
      difficulty: "Easy",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "principles",
    },
    {
      text: "Why do clusters of tests outperform single special tests at the knee?",
      options: [
        "Clusters are quicker to perform than single tests",
        "Each test in a cluster stresses exactly the same structure",
        "Combining history and multiple concordant tests shifts probability further than any one imperfect test can",
        "Clusters eliminate the need to compare with the other knee",
      ],
      correctIndex: 2,
      explanation:
        "Every individual test has imperfect sensitivity and specificity. When history features and two or three independent tests agree, the post-test probability moves much further than any single result can achieve — the basis of cluster-based assessment. Side-to-side comparison is still always required.",
      difficulty: "Easy",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "principles",
    },
    {
      text: "In what position is the Lachman test performed, and what two things are assessed?",
      options: [
        "90° knee flexion; range of motion and pain",
        "20–30° knee flexion; amount of anterior translation and quality of the end-feel",
        "Full extension; varus gapping and crepitus",
        "Prone with 90° flexion; rotation and compression pain",
      ],
      correctIndex: 1,
      explanation:
        "The Lachman is performed at 20–30° flexion, stabilising the femur and translating the tibia anteriorly. Both the excursion (compared with the other side) and the end-feel are judged — a soft or absent end-point strongly suggests ACL rupture even when translation is hard to quantify.",
      difficulty: "Easy",
      tags: ["special-tests", "assessment"],
      sectionSlug: "acl-tests",
    },
    {
      text: "Which statement about the pivot shift test is correct?",
      options: [
        "It is the most sensitive test for ACL rupture in the awake patient",
        "It is highly specific — a clear positive strongly rules in ACL rupture",
        "It is performed with the knee fixed at 90° flexion",
        "It primarily tests the posterior cruciate ligament",
      ],
      correctIndex: 1,
      explanation:
        "The pivot shift reproduces the subluxation–reduction event of the ACL-deficient knee (valgus + internal rotation moving from extension into flexion). It is highly specific — a definite clunk rules the diagnosis in — but sensitivity is poor in awake, guarded patients, which is why the sensitive Lachman is the better rule-out test.",
      difficulty: "Medium",
      tags: ["special-tests", "clinical-reasoning"],
      sectionSlug: "acl-tests",
    },
    {
      text: "Why is the anterior drawer test less reliable than the Lachman in an acutely injured knee?",
      options: [
        "It cannot be performed on a swollen knee at all",
        "At 90° flexion hamstring spasm resists translation, the position is painful, and a meniscal fragment can block movement",
        "The ACL is completely slack at 90° so no test is possible",
        "The femur cannot be stabilised at 90° flexion",
      ],
      correctIndex: 1,
      explanation:
        "The 90° position required for the drawer is painful for a swollen knee, the hamstrings gain a line of pull that resists anterior translation when they guard, and a displaced meniscal fragment can mechanically block the drawer. At 20–30° (Lachman position) these problems largely disappear — hence its superior sensitivity.",
      difficulty: "Medium",
      tags: ["special-tests", "clinical-reasoning"],
      sectionSlug: "acl-tests",
    },
    {
      text: "A Lachman test shows about 7 mm more anterior translation than the other side with a soft end-feel. How is this graded?",
      options: ["Grade 1", "Grade 2", "Grade 3", "Normal physiological laxity"],
      correctIndex: 1,
      explanation:
        "Lachman grading: grade 1 = 3–5 mm increased translation, grade 2 = 5–10 mm, grade 3 = more than 10 mm. Seven millimetres is grade 2, and the soft end-feel adds strong support for a complete rupture regardless of the millimetre count.",
      difficulty: "Hard",
      tags: ["special-tests", "assessment"],
      sectionSlug: "acl-tests",
    },
    {
      text: "Before interpreting any drawer test, why must the examiner first check for a posterior sag?",
      options: [
        "The sag position stretches the ACL and invalidates testing",
        "A posteriorly sagged tibia pulled forward to neutral mimics a positive anterior drawer, so a PCL injury can masquerade as an ACL injury",
        "The sag sign is a test for meniscal displacement",
        "A sag indicates an effusion that must be aspirated first",
      ],
      correctIndex: 1,
      explanation:
        "In PCL deficiency gravity lets the tibia sag posteriorly at 90° flexion. If the examiner starts the drawer from this sagged position, drawing the tibia forward to its true neutral feels like excessive anterior translation — a false-positive anterior drawer. Confirming the tibial step-off and sag first prevents this classic error.",
      difficulty: "Medium",
      tags: ["special-tests", "clinical-reasoning"],
      sectionSlug: "pcl-tests",
    },
    {
      text: "Which mechanism of injury most typically damages the posterior cruciate ligament?",
      options: [
        "Non-contact pivoting with the foot planted",
        "A posteriorly directed force on the proximal tibia, as in a dashboard injury",
        "A valgus blow to the lateral side of the knee",
        "Hyperflexion of the hip with the knee extended",
      ],
      correctIndex: 1,
      explanation:
        "The PCL resists posterior tibial translation, so it is injured when the proximal tibia is driven backwards — classically the flexed knee striking a dashboard, or a fall onto the flexed knee with the foot plantarflexed. Non-contact pivoting is the ACL mechanism; a lateral valgus blow injures the MCL.",
      difficulty: "Easy",
      tags: ["special-tests", "pathology"],
      sectionSlug: "pcl-tests",
    },
    {
      text: "Valgus stress testing shows laxity at 30° of flexion but a stable knee in full extension. What does this indicate?",
      options: [
        "An isolated MCL injury",
        "Combined MCL and cruciate injury",
        "Lateral collateral ligament rupture",
        "A false-positive test caused by guarding",
      ],
      correctIndex: 0,
      explanation:
        "At 30° flexion the posterior capsule and cruciates are slack, so valgus gapping isolates the MCL. Stability in full extension means the secondary restraints (posteromedial capsule, cruciates) are intact — the pattern of an isolated MCL injury. Gapping at 0° as well would imply a combined, more severe injury.",
      difficulty: "Medium",
      tags: ["special-tests", "clinical-reasoning"],
      sectionSlug: "collateral-tests",
    },
    {
      text: "Why can a grade III collateral ligament sprain produce LESS pain on stress testing than a grade II sprain?",
      options: [
        "Grade III injuries always destroy the joint's nerve supply",
        "A completely ruptured ligament has no intact fibres left to be strained by the stress test",
        "Grade III sprains occur only in patients with high pain thresholds",
        "The examiner cannot apply enough force to stress a grade III injury",
      ],
      correctIndex: 1,
      explanation:
        "Stress testing hurts when partially torn fibres are stretched. In a complete (grade III) rupture there are no continuous fibres to tension, so the knee gaps grossly with a soft end-feel but may be surprisingly comfortable. Never equate low pain with low severity — the laxity and end-feel tell the story.",
      difficulty: "Medium",
      tags: ["special-tests", "pathology", "clinical-reasoning"],
      sectionSlug: "collateral-tests",
    },
    {
      text: "What constitutes a classically positive McMurray's test for a medial meniscal tear?",
      options: [
        "Any medial knee pain during squatting",
        "A palpable or audible thud/click over the medial joint line during extension with tibial external rotation and valgus",
        "Apprehension when the patella is pushed laterally",
        "Pain on tibial distraction with rotation in prone",
      ],
      correctIndex: 1,
      explanation:
        "McMurray's for the medial meniscus combines full flexion, tibial external rotation and valgus while the knee is extended, palpating the medial joint line. The defined positive is a palpable or audible thud or click, classically painful, as the torn fragment is caught. Pain alone without the mechanical finding is a much weaker positive. Distraction-rotation in prone describes Apley's; lateral patellar apprehension tests instability.",
      difficulty: "Medium",
      tags: ["special-tests", "assessment"],
      sectionSlug: "meniscal-tests",
    },
    {
      text: "How is the Thessaly test performed?",
      options: [
        "Supine, the examiner rotates the tibia while compressing through the heel",
        "Standing on the affected leg with the knee flexed about 20°, the patient rotates the trunk and knee internally and externally",
        "Prone, the knee is flexed to 90° and distracted",
        "Side-lying, a varus force is applied at 30° flexion",
      ],
      correctIndex: 1,
      explanation:
        "Thessaly is a weight-bearing test: the patient stands on the symptomatic leg holding the examiner's hands, flexes the knee to about 20°, and rotates the body and knee three times each way. Joint-line pain or catching/locking is positive. Loading the meniscus in a functional position gives it good overall accuracy, but it is avoided in an acutely locked knee.",
      difficulty: "Easy",
      tags: ["special-tests", "assessment"],
      sectionSlug: "meniscal-tests",
    },
    {
      text: "In Apley's test, pain during compression-rotation that disappears during distraction-rotation suggests which structure?",
      options: ["Collateral ligament", "Meniscus", "Patellofemoral joint", "Pes anserine bursa"],
      correctIndex: 1,
      explanation:
        "Apley's logic is the comparison: axial compression with rotation grinds the menisci between the joint surfaces (meniscal pain), while distraction with rotation unloads the menisci and instead tensions the capsule and ligaments (ligamentous pain). Pain on compression but not distraction therefore points to the meniscus.",
      difficulty: "Medium",
      tags: ["special-tests", "clinical-reasoning"],
      sectionSlug: "meniscal-tests",
    },
    {
      text: "Which statement about Clarke's test (patellar grind) reflects the evidence?",
      options: [
        "It is the definitive test for patellofemoral pain syndrome",
        "It has poor validity with frequent false positives and should not be relied on for diagnosis",
        "It is highly specific for patellar instability",
        "A negative Clarke's test excludes all anterior knee pain",
      ],
      correctIndex: 1,
      explanation:
        "Clarke's test provokes pain in a large proportion of asymptomatic knees — compressing the patella during quadriceps contraction is simply uncomfortable — giving it poor validity. Patellofemoral pain is diagnosed on the symptom pattern (anterior pain with stairs, squatting, prolonged sitting), not on this test.",
      difficulty: "Easy",
      tags: ["special-tests", "assessment"],
      sectionSlug: "patellofemoral-tests",
    },
    {
      text: "A patient becomes anxious and contracts the quadriceps when you glide their patella laterally at 20–30° of knee flexion. What does this finding indicate?",
      options: [
        "Patellofemoral osteoarthritis",
        "Lateral patellar instability — a positive apprehension test",
        "A medial meniscal tear",
        "Quadriceps tendinopathy",
      ],
      correctIndex: 1,
      explanation:
        "The patellar apprehension test reproduces the sensation of impending lateral dislocation. Apprehension, grimacing or protective quadriceps contraction during lateral glide is positive and supports lateral patellar instability — most meaningful in patients with a history of dislocation or subluxation episodes.",
      difficulty: "Medium",
      tags: ["special-tests", "assessment"],
      sectionSlug: "patellofemoral-tests",
    },
    {
      text: "Which effusion test is most appropriate for detecting a small knee effusion?",
      options: ["Patellar tap test", "Sweep (brush) test", "McMurray's test", "Quadriceps active test"],
      correctIndex: 1,
      explanation:
        "The sweep test milks fluid out of the medial gutter and watches for a returning fluid wave — sensitive enough for small effusions. The patellar tap needs a moderate to large effusion to float the patella off the femur; with little fluid there is nothing to tap through.",
      difficulty: "Easy",
      tags: ["special-tests", "assessment"],
      sectionSlug: "effusion-tests",
    },
    {
      text: "A footballer's knee swells tensely within 90 minutes of a non-contact twisting injury. What is the most likely explanation?",
      options: [
        "Synovial effusion from meniscal irritation",
        "Haemarthrosis, most commonly from ACL rupture",
        "Prepatellar bursitis",
        "Septic arthritis",
      ],
      correctIndex: 1,
      explanation:
        "Swelling within about two hours of injury indicates bleeding into the joint — haemarthrosis — because synovial effusions take 24–48 hours to accumulate. ACL rupture is the most common cause of traumatic haemarthrosis; patellar dislocation and osteochondral or peripheral meniscal injuries are the other classics. This history alone raises ACL pre-test probability before any special test.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "pathology"],
      sectionSlug: "effusion-tests",
    },
    {
      text: "According to the Ottawa knee rules, which finding indicates the need for radiography BEFORE proceeding with stress testing after acute trauma?",
      options: [
        "Age 40 with full knee flexion",
        "Ability to walk normally into the clinic",
        "Inability to flex the knee to 90° or to take four weight-bearing steps",
        "Mild joint-line tenderness with full range of motion",
      ],
      correctIndex: 2,
      explanation:
        "Ottawa knee rule criteria after acute injury: age 55 or over, isolated patellar tenderness, fibular head tenderness, inability to flex to 90°, or inability to bear weight for four steps both immediately and at assessment. Any one criterion warrants an X-ray to exclude fracture before the knee is stressed with provocative testing.",
      difficulty: "Hard",
      tags: ["precautions", "assessment", "clinical-reasoning"],
      sectionSlug: "test-selection",
    },
    {
      text: "A 63-year-old with typical degenerative knee pain has a 'positive' McMurray's test. What is the most appropriate interpretation?",
      options: [
        "A meniscal tear is confirmed and arthroscopy should be arranged",
        "Degenerative tears are common incidental findings at this age — weigh the result against the whole clinical picture before attributing symptoms to the meniscus",
        "The test must be repeated until it becomes negative",
        "The result proves the pain is patellofemoral in origin",
      ],
      correctIndex: 1,
      explanation:
        "In older adults degenerative meniscal tears are extremely common and frequently asymptomatic, so a positive meniscal test has a high chance of being a true-positive for a tear that is nevertheless not the pain source. Management follows the clinical picture — and trials show exercise therapy matches arthroscopy for degenerative tears.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "special-tests", "management"],
      sectionSlug: "common-errors",
    },
    {
      text: "Which sequence best reflects a well-reasoned knee examination after acute injury?",
      options: [
        "Provocative ligament tests first, then history, then effusion assessment",
        "Observation, effusion and ROM screen with a neurovascular check, then selected provocative tests, least painful first",
        "All available special tests in alphabetical order to avoid bias",
        "Imaging for every patient before any physical examination",
      ],
      correctIndex: 1,
      explanation:
        "Screening basics come first: observation, effusion testing, range of motion and a neurovascular check identify red flags (dislocation, fracture criteria, gross instability) and set the context for testing. Provocative tests are then selected by hypothesis and ordered least-painful-first so guarding does not invalidate later tests. Testing everything indiscriminately adds pain and false positives, not information.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "test-selection",
    },
  ],
  flashcards: [
    { front: "What do SnNout and SpPin stand for?", back: "Sensitive test, Negative → rules OUT. Specific test, Positive → rules IN." },
    { front: "Position and grading of the Lachman test?", back: "20–30° knee flexion; grade 1 = 3–5 mm, grade 2 = 5–10 mm, grade 3 = >10 mm increased translation; soft/absent end-feel suggests rupture." },
    { front: "Which is the most sensitive clinical test for ACL rupture?", back: "The Lachman test — a clearly negative Lachman makes complete ACL rupture unlikely." },
    { front: "What makes the pivot shift valuable despite poor sensitivity?", back: "High specificity — a definite subluxation-reduction clunk strongly rules IN ACL rupture and reflects functional instability." },
    { front: "Why check the posterior sag before drawer testing?", back: "A PCL-deficient tibia sags posteriorly; drawing it forward to neutral mimics a positive anterior drawer — a classic false positive." },
    { front: "Meaning of valgus laxity at 30° vs 0°?", back: "Laxity at 30° isolates the MCL; laxity also at 0° implies combined injury (capsule ± cruciates)." },
    { front: "Classic positive finding of McMurray's test?", back: "A palpable or audible thud/click over the joint line during the extension-rotation manoeuvre — classically with pain; pain alone is weaker evidence." },
    { front: "Describe the Thessaly test.", back: "Single-leg stance on the affected leg, knee flexed ~20°, patient rotates trunk and knee three times each way; joint-line pain or catching is positive. Avoid in a locked knee." },
    { front: "Which effusion test for which size of effusion?", back: "Sweep/brush test for small effusions; patellar tap (ballottement) for moderate to large effusions." },
    { front: "Swelling within 2 hours of a twisting knee injury suggests…", back: "Haemarthrosis — most commonly ACL rupture; also patellar dislocation and osteochondral or peripheral meniscal injury." },
    { front: "Why is Clarke's test unreliable?", back: "It provokes pain in many asymptomatic knees (frequent false positives) — poor validity, so never base a patellofemoral diagnosis on it." },
    { front: "Name the Ottawa knee rule criteria.", back: "Age ≥55, isolated patellar tenderness, fibular head tenderness, cannot flex to 90°, or cannot bear weight for 4 steps — any one indicates X-ray." },
  ],
};

export default topic;
