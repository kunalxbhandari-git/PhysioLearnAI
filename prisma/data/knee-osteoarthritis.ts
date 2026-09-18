import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "knee-osteoarthritis",
  title: "Knee Osteoarthritis",
  category: "Musculoskeletal",
  description:
    "Understand pathology, symptoms, assessment, physiotherapy management and exercise progression for the most common degenerative joint condition.",
  difficulty: "Intermediate",
  estMinutes: 26,
  icon: "bone",
  keyTakeaways: [
    "Knee OA is a whole-joint disease involving cartilage, bone, synovium and periarticular muscles — not just \"wear and tear\".",
    "Age, obesity, previous knee injury and occupational loading are the strongest risk factors.",
    "Clinical diagnosis can usually be made without imaging: activity-related pain, morning stiffness under 30 minutes, and age over 45.",
    "Exercise therapy is a first-line treatment with evidence comparable to analgesics — strengthening, aerobic and neuromuscular work all help.",
    "Quadriceps weakness is both a consequence and a predictor of knee OA progression.",
    "Education, weight management and exercise form the core of management; passive modalities are only adjuncts.",
    "Flare-ups are managed by modifying load, not by stopping activity completely.",
    "Persistent night pain, rapid unexplained swelling, or systemic symptoms are red flags requiring medical review.",
  ],
  sections: [
    {
      slug: "definition",
      title: "Definition & Overview",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Knee osteoarthritis (OA) is a chronic, progressive joint condition in which the articular cartilage of the knee gradually breaks down while the underlying bone remodels. It is the most common form of arthritis and a leading cause of pain and disability in adults over 45.",
        },
        {
          kind: "paragraph",
          text: "Modern understanding has moved away from the old \"wear and tear\" model. OA is now viewed as a whole-joint disease: cartilage, subchondral bone, synovium, menisci, ligaments and the surrounding muscles are all involved, and low-grade inflammation plays a genuine role.",
        },
        {
          kind: "keypoints",
          title: "Core definition",
          items: [
            "Degenerative, whole-joint condition — not purely mechanical wear",
            "Most commonly affects the medial tibiofemoral and patellofemoral compartments",
            "Characterised by pain, stiffness, and progressive functional limitation",
            "Structural change on imaging often correlates poorly with symptoms",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Radiographic severity and pain severity frequently do not match — treat the patient, not the X-ray.",
            "Many people over 50 have radiographic OA with no symptoms at all.",
          ],
        },
      ],
    },
    {
      slug: "knee-anatomy",
      title: "Relevant Knee Anatomy",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "The knee is a modified hinge joint made up of two articulations inside one capsule: the tibiofemoral joint (between femoral condyles and tibial plateau) and the patellofemoral joint (between the patella and the femoral trochlea).",
        },
        { kind: "image", illustration: "knee-joint", caption: "Simplified anatomy of the knee joint: femur, tibia, patella, menisci and major ligaments." },
        {
          kind: "cards",
          items: [
            { title: "Articular cartilage", text: "Smooth hyaline cartilage covering joint surfaces; distributes load and allows near-frictionless movement. It is avascular and aneural, so it heals poorly.", icon: "layers" },
            { title: "Menisci", text: "Medial and lateral fibrocartilage discs that deepen the tibial surface, absorb shock and transmit up to 50–70% of joint load.", icon: "disc" },
            { title: "Ligaments", text: "ACL and PCL control anteroposterior translation; MCL and LCL resist valgus/varus stress. Stability loss accelerates degeneration.", icon: "link" },
            { title: "Quadriceps", text: "Primary knee extensor and the knee's main dynamic shock absorber. Quadriceps weakness is strongly associated with OA onset and progression.", icon: "dumbbell" },
          ],
        },
        {
          kind: "paragraph",
          text: "The medial compartment carries roughly 60–70% of load during walking, which is why medial tibiofemoral OA is the most common pattern and why varus (\"bow-leg\") alignment increases risk of progression.",
        },
        {
          kind: "keypoints",
          items: [
            "Two joints in one capsule: tibiofemoral and patellofemoral",
            "Cartilage is aneural — early cartilage damage itself is painless; pain arises from bone, synovium, capsule and soft tissues",
            "Medial compartment is loaded most and affected most often",
          ],
        },
      ],
    },
    {
      slug: "pathophysiology",
      title: "Pathophysiology",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "OA begins when the balance between cartilage breakdown and repair tips towards breakdown. Chondrocytes initially respond to abnormal load by increasing matrix production, but over time degradative enzymes (matrix metalloproteinases) dominate, and the cartilage softens, fibrillates and thins.",
        },
        {
          kind: "steps",
          items: [
            { title: "Cartilage matrix failure", text: "Loss of proteoglycans and disruption of the collagen network → cartilage softening (chondromalacia), surface fibrillation, then focal erosions." },
            { title: "Subchondral bone response", text: "Bone beneath the cartilage stiffens and remodels: sclerosis, bone marrow lesions and cyst formation. Stiffer bone transmits more load back to remaining cartilage." },
            { title: "Osteophyte formation", text: "New bone forms at joint margins — an attempt to increase surface area and stabilise the joint, but it can restrict movement." },
            { title: "Synovial inflammation", text: "Cartilage breakdown products irritate the synovium → low-grade synovitis, effusion and further enzyme release." },
            { title: "Muscle & neural changes", text: "Arthrogenic muscle inhibition weakens the quadriceps; proprioception declines; the joint becomes progressively less protected against load." },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Pain sources in OA: subchondral bone, synovium, capsule, ligaments and muscle — not the cartilage itself.",
            "The cycle of pain → inactivity → weakness → increased joint load is exactly where physiotherapy intervenes.",
          ],
        },
      ],
    },
    {
      slug: "risk-factors",
      title: "Causes & Risk Factors",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Knee OA results from an interaction between systemic vulnerability and local mechanical factors. No single cause is sufficient on its own.",
        },
        {
          kind: "cards",
          items: [
            { title: "Age", text: "Strongest non-modifiable factor — prevalence rises steeply after 45–50 as cartilage repair capacity declines.", icon: "clock" },
            { title: "Obesity", text: "Each extra kilogram adds roughly 3–4 kg of load per step at the knee; adipose tissue also releases inflammatory mediators.", icon: "scale" },
            { title: "Previous injury", text: "ACL rupture, meniscal tears or intra-articular fracture markedly increase lifetime OA risk — often 10–20 years later.", icon: "alert-triangle" },
            { title: "Female sex", text: "Higher prevalence and severity in women, especially after menopause.", icon: "user" },
            { title: "Occupation & load", text: "Repetitive kneeling, squatting and heavy lifting increase risk; moderate recreational running does not.", icon: "briefcase" },
            { title: "Malalignment & weakness", text: "Varus/valgus alignment concentrates load on one compartment; quadriceps weakness reduces shock absorption.", icon: "move" },
            { title: "Genetics", text: "Family history contributes an estimated 40–65% of risk variance.", icon: "dna" },
          ],
        },
        {
          kind: "keypoints",
          title: "Modifiable vs non-modifiable",
          items: [
            "Modifiable: body weight, muscle strength, activity load, occupational exposures",
            "Non-modifiable: age, sex, genetics, previous joint injury",
            "Physiotherapy targets the modifiable factors",
          ],
        },
      ],
    },
    {
      slug: "signs-symptoms",
      title: "Signs & Symptoms",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "cards",
          items: [
            { title: "Activity-related pain", text: "Pain during or after weight-bearing activity, classically stairs (especially descending), walking distances and rising from sitting. Eases with rest in early disease.", icon: "trending-up" },
            { title: "Morning stiffness < 30 min", text: "Short-lived stiffness after waking or inactivity (\"gelling\") that eases with movement. Stiffness lasting over 30–60 minutes suggests inflammatory arthritis instead.", icon: "sunrise" },
            { title: "Crepitus", text: "Audible or palpable grating during movement — common and not by itself a sign of severity.", icon: "volume-2" },
            { title: "Swelling", text: "Intermittent effusion during flares; bony enlargement around joint margins in later disease.", icon: "droplet" },
            { title: "Reduced ROM", text: "Loss of terminal flexion and extension; a fixed flexion deformity may develop in advanced OA.", icon: "minimize-2" },
            { title: "Instability / buckling", text: "A sense of the knee \"giving way\", usually reflecting quadriceps weakness or pain inhibition rather than ligament rupture.", icon: "alert-octagon" },
          ],
        },
        {
          kind: "paragraph",
          text: "Symptoms typically fluctuate, with flares triggered by unaccustomed activity. In later disease, pain occurs at rest and at night, and walking distance progressively shortens.",
        },
        {
          kind: "redflags",
          items: [
            "Constant, severe night pain unrelieved by position change",
            "Rapid unexplained swelling, hot red joint, or fever — consider septic arthritis or gout",
            "History of cancer, unexplained weight loss, or systemic illness",
            "Sudden inability to bear weight after trauma — consider fracture",
          ],
        },
      ],
    },
    {
      slug: "clinical-assessment",
      title: "Clinical Assessment",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "NICE and international guidelines support a clinical diagnosis of knee OA — without imaging — when a person is 45 or older, has activity-related joint pain, and has either no morning stiffness or stiffness lasting under 30 minutes.",
        },
        { kind: "image", illustration: "goniometer", caption: "A universal goniometer aligned along the femur and fibula to measure knee flexion — record active and passive range on both sides, since capsular restriction in OA typically costs flexion first." },
        {
          kind: "steps",
          items: [
            { title: "Subjective history", text: "Pain behaviour (location, aggravating/easing factors, 24-hour pattern), stiffness duration, function (stairs, walking distance, sit-to-stand), falls, goals, beliefs and fears about the joint." },
            { title: "Observation", text: "Gait (antalgic pattern, varus thrust), alignment (varus/valgus), quadriceps bulk (VMO wasting), swelling, walking aids." },
            { title: "Palpation", text: "Joint-line tenderness, warmth, effusion (sweep test / patellar tap), bony margin enlargement." },
            { title: "Movement testing", text: "Active and passive ROM with overpressure as tolerated; note end-feel, painful arc and crepitus. Compare with the other knee." },
            { title: "Strength testing", text: "Quadriceps and hip abductor strength (MMT or dynamometry); observe sit-to-stand quality." },
            { title: "Functional measures", text: "30-second chair stand test, 40 m fast-paced walk, stair-climb test — the OARSI-recommended core set." },
          ],
        },
        {
          kind: "table",
          headers: ["Outcome measure", "What it captures"],
          rows: [
            ["KOOS / WOMAC", "Patient-reported pain, symptoms, function and quality of life"],
            ["30-s chair stand", "Functional lower-limb strength and sit-to-stand capacity"],
            ["40 m fast-paced walk", "Walking capacity and speed"],
            ["Stair-climb test", "Stair function — usually the earliest and most persistent complaint"],
            ["NPRS", "Pain intensity, tracked over time"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "X-rays are not needed for diagnosis in a typical presentation — reserve imaging for atypical features or surgical planning.",
            "Assess the hip as well: hip OA can refer pain to the knee, and hip weakness alters knee loading.",
          ],
        },
      ],
    },
    {
      slug: "differential-considerations",
      title: "Differential Considerations",
      estMinutes: 2,
      difficulty: "Advanced",
      content: [
        {
          kind: "table",
          headers: ["Condition", "Distinguishing features"],
          rows: [
            ["Inflammatory arthritis (RA, psoriatic)", "Morning stiffness > 30–60 min, multiple joints, systemic symptoms, marked synovitis"],
            ["Gout / pseudogout", "Sudden severe onset, hot red swollen joint, often first MTP history (gout); consider crystal arthropathy in acute flares"],
            ["Septic arthritis", "Acute hot swollen joint, fever, severe pain with any movement — medical emergency"],
            ["Referred pain from hip", "Knee pain with normal knee exam; hip ROM (especially internal rotation) reproduces symptoms"],
            ["Meniscal tear", "Mechanical locking or true giving-way, joint-line pain after twisting injury; commonly coexists with OA in older adults"],
            ["Patellofemoral pain", "Anterior knee pain in younger patients, worse with stairs and prolonged sitting"],
            ["Pes anserine bursitis", "Tenderness distal to the medial joint line on the proximal tibia; often coexists with OA"],
          ],
        },
        {
          kind: "warning",
          title: "Do not miss",
          items: [
            "A hot, acutely swollen knee is septic arthritis until proven otherwise — urgent medical referral.",
            "Degenerative meniscal tears found on MRI in over-50s are usually incidental; treat the clinical picture, not the scan.",
          ],
        },
      ],
    },
    {
      slug: "physiotherapy-management",
      title: "Physiotherapy Management",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Every major guideline (NICE, OARSI, ACR) places the same three interventions at the core of knee OA care: education, exercise therapy and weight management. Everything else is an adjunct.",
        },
        { kind: "image", illustration: "walking-aids", caption: "Common walking aids from single-point stick to wheeled frame — for knee OA a cane held in the hand opposite the painful knee reduces joint load while preserving an even gait rhythm." },
        {
          kind: "steps",
          items: [
            { title: "1. Education & self-management", text: "Explain that OA is not inevitable decline, that movement is safe and beneficial, and that pain during sensible exercise does not mean damage. Address fear-avoidance directly." },
            { title: "2. Exercise therapy", text: "Individualised strengthening (quadriceps, hip), aerobic conditioning and neuromuscular/balance training. Effect sizes for pain match or exceed common analgesics." },
            { title: "3. Weight management", text: "In patients with overweight, ≥5% body-weight loss produces meaningful symptom improvement; ≥10% produces large improvement, especially combined with exercise." },
            { title: "4. Load & activity modification", text: "Temporarily reduce — not eliminate — aggravating load during flares. Pacing, footwear advice, and walking aids (cane in the opposite hand) when needed." },
            { title: "5. Adjuncts", text: "Manual therapy short-term for pain and ROM alongside exercise; heat for comfort; TENS may help some patients. None replace active treatment." },
          ],
        },
        {
          kind: "paragraph",
          text: "A useful flare rule: pain up to 5/10 during exercise that settles to baseline within 24 hours is acceptable. Persisting or escalating pain means the load was too high — reduce, don't stop.",
        },
        {
          kind: "warning",
          title: "Common management mistakes",
          items: [
            "Prescribing rest as the main treatment — deconditioning accelerates decline",
            "Relying on passive modalities (ultrasound, TENS) as primary care",
            "Progressing exercise too fast during a flare, or abandoning it entirely",
            "Failing to address weight, fear of movement, or comorbidities",
          ],
        },
        {
          kind: "pearls",
          items: [
            "\"Motion is lotion\" — regular loading nourishes cartilage via synovial fluid diffusion.",
            "Referral for surgical opinion is appropriate when substantial symptoms persist despite a genuine, well-dosed 3–6 month conservative programme.",
          ],
        },
      ],
    },
    {
      slug: "exercise-therapy",
      title: "Exercise Therapy & Progression",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "An effective programme combines strengthening (2–3×/week), aerobic exercise (walking, cycling, water-based) and neuromuscular control work, progressed over at least 8–12 weeks.",
        },
        {
          kind: "exercise",
          name: "Quadriceps setting (quad sets)",
          purpose: "Re-activate the quadriceps and reduce arthrogenic inhibition; safe entry point during flares.",
          position: "Long sitting or supine, knee extended, small towel roll under the knee.",
          execution: "Push the back of the knee down into the towel, tightening the thigh and lifting the heel slightly. Hold 5 seconds, relax fully.",
          dosage: "10–15 reps × 3 sets, daily.",
          progression: "Progress to straight-leg raise, then to loaded knee extension.",
          precautions: "Should be essentially pain-free; avoid breath-holding.",
        },
        {
          kind: "exercise",
          name: "Sit-to-stand",
          purpose: "Functional quadriceps and gluteal strengthening directly transferring to daily life.",
          position: "Sitting on a firm chair, feet hip-width apart, slightly back under the knees.",
          execution: "Lean forward from the hips and stand up without using hands, then lower slowly over 3 seconds.",
          dosage: "8–12 reps × 2–3 sets, 2–3×/week.",
          progression: "Lower the seat height, add a weighted backpack, or progress to single-leg emphasis.",
          precautions: "Keep the knee tracking over the foot; use hands for assistance only as needed.",
        },
        {
          kind: "exercise",
          name: "Step-ups",
          purpose: "Build stair capacity — usually the most limited function in knee OA.",
          position: "Facing a low step (10–15 cm), hand support available.",
          execution: "Step up leading with the affected leg, control the descent slowly. Keep the pelvis level and the knee over the foot.",
          dosage: "8–10 reps each leg × 2–3 sets.",
          progression: "Increase step height, add load, or slow the eccentric phase.",
          precautions: "Pain up to ~5/10 that settles within 24 h is acceptable; reduce height if pain persists.",
        },
        {
          kind: "exercise",
          name: "Stationary cycling",
          purpose: "Aerobic conditioning and joint nutrition with low compressive load.",
          position: "Saddle height allowing ~25–30° knee flexion at the bottom of the pedal stroke.",
          execution: "Cycle at comfortable resistance, building from 10 to 30 minutes at moderate intensity (able to talk, slightly breathless).",
          dosage: "20–30 min, 3–5×/week.",
          progression: "Increase duration first, then resistance.",
          precautions: "Raise the saddle slightly if patellofemoral pain occurs.",
        },
        {
          kind: "exercise",
          name: "Single-leg balance",
          purpose: "Neuromuscular control and falls-risk reduction; proprioception declines in OA.",
          position: "Standing near a counter for support.",
          execution: "Stand on the affected leg for up to 30 seconds, tall posture, soft knee.",
          dosage: "3–5 holds each leg, daily.",
          progression: "Eyes closed, unstable surface, or add head turns / arm reaches.",
          precautions: "Ensure support is within reach for patients with falls risk.",
        },
        {
          kind: "keypoints",
          title: "Progression principles",
          items: [
            "Progress one variable at a time: reps → sets → load → complexity",
            "Use the 24-hour symptom response to judge dose",
            "Strength gains need 8–12 weeks minimum — set expectations early",
            "Water-based exercise is a valuable entry point when land-based loading is too painful",
          ],
        },
      ],
    },
    {
      slug: "patient-education",
      title: "Patient Education & Self-Management",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "What patients believe about their knee strongly predicts outcome. Beliefs like \"bone on bone\", \"exercise wears it out faster\" and \"I need a replacement eventually\" drive avoidance and disability, and each can be respectfully challenged.",
        },
        {
          kind: "cards",
          items: [
            { title: "Reframe the condition", text: "\"Your joint is sensitive and deconditioned, not worn out. Joints adapt to gradual load just like muscles do.\"", icon: "message-circle" },
            { title: "Pain ≠ damage", text: "Explain that flare pain reflects sensitivity and inflammation, not new structural damage, and that guided exercise is safe.", icon: "shield" },
            { title: "Pacing", text: "Break activity into manageable chunks; build up walking gradually rather than boom-and-bust cycles.", icon: "timer" },
            { title: "Weight & lifestyle", text: "Link weight loss, sleep and general activity to symptom control; refer on for dietetic support where appropriate.", icon: "heart" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Avoid the phrase \"bone on bone\" — it is rarely accurate and strongly nocebic.",
            "A written, personalised flare plan reduces fear and unplanned appointments.",
          ],
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
          title: "Exercise precautions",
          items: [
            "Acutely inflamed, hot, swollen joint: reduce load, use isometrics and unloaded movement until the flare settles",
            "Significant effusion inhibits the quadriceps — address swelling alongside strengthening",
            "Comorbidities (cardiovascular disease, diabetes) may require modified aerobic prescription",
            "High-impact loading (jumping, deep loaded squats) is usually poorly tolerated in advanced OA",
          ],
        },
        {
          kind: "redflags",
          items: [
            "Hot, red, acutely swollen joint with fever — possible septic arthritis: urgent medical referral",
            "Constant unremitting night pain, unexplained weight loss, or history of malignancy",
            "Sudden loss of weight-bearing ability after trauma — exclude fracture",
            "Rapidly progressive deformity or neurological signs",
          ],
        },
        {
          kind: "paragraph",
          text: "These situations require onward medical referral before or alongside physiotherapy. Educational content on this platform supports learning and does not replace clinical judgement or medical assessment.",
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
            "Whole-joint degenerative disease; medial compartment most affected",
            "Diagnose clinically: age ≥ 45 + activity-related pain + morning stiffness < 30 min",
            "Core assessment: gait, alignment, ROM, quadriceps strength, chair-stand / walk / stair tests, KOOS or WOMAC",
            "First-line management: education + exercise + weight management",
            "Exercise: quadriceps and hip strengthening, aerobic work, balance training, 8–12+ weeks",
            "Flare rule: ≤5/10 pain settling within 24 h is acceptable load",
            "Red flags: hot swollen joint, fever, night pain, trauma, systemic features",
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
      text: "Which structural feature explains why early cartilage damage in knee OA is painless?",
      options: [
        "Cartilage has a rich nerve supply that adapts quickly",
        "Articular cartilage is avascular and aneural",
        "The synovium blocks pain signals from cartilage",
        "Subchondral bone absorbs all mechanical stimuli",
      ],
      correctIndex: 1,
      explanation:
        "Hyaline articular cartilage contains no blood vessels or nerves, so damage to the cartilage itself cannot generate pain. Pain in OA arises from innervated structures: subchondral bone, synovium, capsule and periarticular soft tissues.",
      difficulty: "Easy",
      tags: ["anatomy", "pathology"],
      sectionSlug: "knee-anatomy",
    },
    {
      text: "Which compartment of the knee is most commonly affected by osteoarthritis?",
      options: ["Lateral tibiofemoral", "Medial tibiofemoral", "Patellofemoral", "Superior tibiofibular"],
      correctIndex: 1,
      explanation:
        "The medial tibiofemoral compartment carries roughly 60–70% of load during gait, making it the most commonly affected compartment. Varus alignment further concentrates medial load.",
      difficulty: "Easy",
      tags: ["anatomy"],
      sectionSlug: "knee-anatomy",
    },
    {
      text: "A 58-year-old reports knee pain when climbing stairs and stiffness for about 15 minutes each morning. According to clinical guidelines, what is required to confirm the diagnosis of knee OA?",
      options: [
        "Weight-bearing X-ray showing joint space narrowing",
        "MRI to grade the cartilage loss",
        "No imaging — the clinical picture is sufficient",
        "Diagnostic arthroscopy",
      ],
      correctIndex: 2,
      explanation:
        "Guidelines (e.g. NICE) support a clinical diagnosis in patients ≥45 with activity-related joint pain and morning stiffness lasting less than 30 minutes. Imaging is reserved for atypical presentations or surgical planning.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "clinical-assessment",
    },
    {
      text: "Morning stiffness lasting more than 60 minutes in a patient with knee pain most strongly suggests which alternative diagnosis?",
      options: ["Meniscal tear", "Inflammatory arthritis", "Patellofemoral pain syndrome", "Pes anserine bursitis"],
      correctIndex: 1,
      explanation:
        "OA-related stiffness typically resolves within 30 minutes. Prolonged morning stiffness (>30–60 minutes), especially with multiple joint involvement or systemic symptoms, points to inflammatory arthritis such as rheumatoid arthritis.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "differential-considerations",
    },
    {
      text: "Which combination of tests forms the OARSI-recommended core set for measuring physical function in knee OA?",
      options: [
        "Timed up-and-go, 6-minute walk, single-leg hop",
        "30-second chair stand, 40 m fast-paced walk, stair-climb test",
        "Star excursion balance test, vertical jump, 10 m sprint",
        "Berg balance scale, 2-minute walk, grip strength",
      ],
      correctIndex: 1,
      explanation:
        "OARSI recommends the 30-second chair stand test, 40 m fast-paced walk test and a stair-climb test as the minimal core set of performance measures for hip and knee OA.",
      difficulty: "Hard",
      tags: ["assessment"],
      sectionSlug: "clinical-assessment",
    },
    {
      text: "Which of the following is the strongest MODIFIABLE risk factor for knee OA progression?",
      options: ["Age over 60", "Female sex", "Obesity", "Family history of OA"],
      correctIndex: 2,
      explanation:
        "Age, sex and genetics are non-modifiable. Obesity is the key modifiable factor: each additional kilogram of body mass adds roughly 3–4 kg of load per step, and adipose tissue contributes systemic inflammation. Weight loss of ≥5% meaningfully improves symptoms.",
      difficulty: "Easy",
      tags: ["pathology", "management"],
      sectionSlug: "risk-factors",
    },
    {
      text: "Approximately how much additional knee-joint load per step results from each extra kilogram of body weight?",
      options: ["1 kg", "3–4 kg", "8–10 kg", "0.5 kg"],
      correctIndex: 1,
      explanation:
        "Due to joint lever mechanics, each extra kilogram of body mass produces roughly 3–4 kg of additional compressive load at the knee during walking — the basis for weight management as a core intervention.",
      difficulty: "Medium",
      tags: ["pathology"],
      sectionSlug: "risk-factors",
    },
    {
      text: "During a flare, a patient's knee is warm with a moderate effusion. What is the most appropriate exercise strategy?",
      options: [
        "Stop all exercise until the knee is completely pain-free",
        "Continue the full loaded programme unchanged to avoid deconditioning",
        "Reduce load temporarily and use isometrics and unloaded movement",
        "Switch entirely to passive modalities such as ultrasound",
      ],
      correctIndex: 2,
      explanation:
        "Flares are managed by modifying load, not eliminating it. Isometric quadriceps work, unloaded ROM and low-load activity (cycling, water-based exercise) maintain conditioning while irritability settles. Complete rest accelerates weakness; unchanged loading prolongs the flare.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management", "precautions"],
      sectionSlug: "physiotherapy-management",
    },
    {
      text: "Which finding in a patient with knee pain requires urgent medical referral rather than physiotherapy management?",
      options: [
        "Crepitus during squatting",
        "A hot, red, acutely swollen joint with fever",
        "Morning stiffness lasting 20 minutes",
        "Pain of 4/10 during step-ups that settles overnight",
      ],
      correctIndex: 1,
      explanation:
        "An acutely hot, red, swollen joint with systemic features is septic arthritis until proven otherwise — a medical emergency requiring urgent referral. Crepitus, brief stiffness and acceptable exercise-related pain are all consistent with routine OA care.",
      difficulty: "Easy",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "precautions",
    },
    {
      text: "What is the primary rationale for quadriceps strengthening in knee OA?",
      options: [
        "It regrows articular cartilage",
        "It restores dynamic shock absorption and reduces joint load per step",
        "It removes osteophytes through repeated loading",
        "It prevents synovial fluid production",
      ],
      correctIndex: 1,
      explanation:
        "The quadriceps act as the knee's main dynamic shock absorber. Strengthening improves load attenuation, reduces pain, and improves function. Quadriceps weakness both predicts and results from OA. Exercise does not regrow cartilage or remove osteophytes.",
      difficulty: "Easy",
      tags: ["exercise-therapy", "anatomy"],
      sectionSlug: "exercise-therapy",
    },
    {
      text: "A patient reports 4/10 pain during sit-to-stand exercise, settling to baseline by the next morning. Using standard flare guidance, what should you advise?",
      options: [
        "Stop the exercise — any pain indicates joint damage",
        "Continue — this response indicates acceptable loading",
        "Halve the repetitions and add ice after every session",
        "Replace it with passive stretching only",
      ],
      correctIndex: 1,
      explanation:
        "The widely used 24-hour rule accepts pain up to about 5/10 during exercise provided symptoms return to baseline within 24 hours. This response indicates appropriate, adaptive loading and the programme can continue or progress.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "exercise-therapy",
    },
    {
      text: "Which advice about walking aids is correct for a patient with painful right knee OA?",
      options: [
        "Use a cane in the right hand to support the right knee directly",
        "Use a cane in the left hand to reduce load on the right knee",
        "Avoid walking aids as they always cause dependence",
        "Use bilateral crutches for all community walking",
      ],
      correctIndex: 1,
      explanation:
        "A cane is used in the hand opposite the painful limb. During right stance phase, pushing down through the left-held cane creates a counter-moment that reduces the demand on right hip and knee structures and offloads the joint.",
      difficulty: "Medium",
      tags: ["management"],
      sectionSlug: "physiotherapy-management",
    },
    {
      text: "Which statement about imaging in knee OA is most accurate?",
      options: [
        "Radiographic severity correlates closely with pain severity",
        "MRI is required before starting exercise therapy",
        "Many adults over 50 show radiographic OA without any symptoms",
        "A normal X-ray excludes osteoarthritis",
      ],
      correctIndex: 2,
      explanation:
        "Structural change on imaging correlates poorly with symptoms: many people with radiographic OA are asymptomatic, and early symptomatic OA may show little on X-ray. Treatment decisions are based on the clinical presentation.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "definition",
    },
    {
      text: "In the pathophysiology of OA, what is the significance of subchondral bone sclerosis?",
      options: [
        "It softens the bone and reduces load on cartilage",
        "Stiffer bone transmits more load back to the remaining cartilage, accelerating breakdown",
        "It is protective and halts disease progression",
        "It only occurs in inflammatory arthritis",
      ],
      correctIndex: 1,
      explanation:
        "As subchondral bone remodels and stiffens (sclerosis), it loses compliance. The stiffer bone plate absorbs less energy, transferring greater stress to the overlying cartilage and contributing to further degeneration — one of several vicious cycles in OA.",
      difficulty: "Hard",
      tags: ["pathology"],
      sectionSlug: "pathophysiology",
    },
    {
      text: "What is arthrogenic muscle inhibition (AMI) in the context of knee OA?",
      options: [
        "Voluntary avoidance of exercise due to fear",
        "Reflex inhibition of the quadriceps caused by joint effusion and abnormal afferent input",
        "Muscle fibrosis caused by osteophytes",
        "Nerve root compression weakening the quadriceps",
      ],
      correctIndex: 1,
      explanation:
        "AMI is a reflex (non-voluntary) inhibition of muscle activation caused by altered sensory input from a swollen or damaged joint. Even a small effusion measurably inhibits quadriceps activation — a key reason to manage swelling alongside strengthening.",
      difficulty: "Hard",
      tags: ["pathology", "exercise-therapy"],
      sectionSlug: "pathophysiology",
    },
    {
      text: "Which exercise prescription best reflects guideline-based care for knee OA?",
      options: [
        "Passive stretching only, daily for 2 weeks",
        "Strengthening 2–3×/week plus aerobic exercise, progressed over 8–12+ weeks",
        "High-impact plyometrics 5×/week for 4 weeks",
        "Bed rest with isometrics until pain-free, then return to normal activity",
      ],
      correctIndex: 1,
      explanation:
        "Guidelines recommend individualised programmes combining strengthening (2–3 sessions/week), aerobic conditioning and neuromuscular work, sustained for at least 8–12 weeks. High-impact loading is usually poorly tolerated, and rest-based approaches promote deconditioning.",
      difficulty: "Easy",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "exercise-therapy",
    },
    {
      text: "A patient says: \"My knee is bone on bone — exercise will wear it out faster.\" What is the best physiotherapy response?",
      options: [
        "Agree and switch to passive treatment to protect the joint",
        "Explain that joints adapt to gradual load, that exercise is safe and reduces pain, and address the fear directly",
        "Tell them the X-ray is wrong",
        "Recommend they rest until they can see a surgeon",
      ],
      correctIndex: 1,
      explanation:
        "Nocebic beliefs like \"bone on bone\" drive fear-avoidance and disability. Best practice is respectful reframing: cartilage and joints adapt to progressive load, exercise has analgesic effect sizes comparable to medication, and avoidance worsens outcomes. Education is itself a first-line treatment.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "patient-education",
    },
    {
      text: "Why should the hip be examined in every patient presenting with knee pain?",
      options: [
        "Hip OA can refer pain to the knee, and hip weakness alters knee loading",
        "The hip and knee share a single joint capsule",
        "Knee OA always begins in the hip",
        "Hip examination replaces the need for knee examination",
      ],
      correctIndex: 0,
      explanation:
        "Hip pathology (especially hip OA) commonly refers pain to the anterior thigh and knee via the obturator and femoral nerves, and proximal (hip abductor) weakness changes frontal-plane knee loading. A knee assessment is incomplete without screening the hip.",
      difficulty: "Medium",
      tags: ["assessment", "anatomy", "clinical-reasoning"],
      sectionSlug: "clinical-assessment",
    },
    {
      text: "What percentage of body-weight loss is associated with meaningful symptom improvement in overweight patients with knee OA?",
      options: ["1%", "At least 5%", "At least 25%", "Weight loss has no effect on symptoms"],
      correctIndex: 1,
      explanation:
        "Loss of ≥5% of body weight produces clinically meaningful improvement in pain and function, with ≥10% giving substantially larger benefit — greatest when combined with exercise (as shown in the IDEA trial).",
      difficulty: "Medium",
      tags: ["management"],
      sectionSlug: "physiotherapy-management",
    },
    {
      text: "Which finding is a typical sign of knee OA rather than a red flag?",
      options: [
        "Fever with a hot, swollen joint",
        "Constant night pain unrelieved by position change",
        "Crepitus with intermittent activity-related effusion",
        "Rapidly progressive deformity over weeks",
      ],
      correctIndex: 2,
      explanation:
        "Crepitus and intermittent, activity-related effusion are common benign findings in OA. Fever with acute swelling (infection), unremitting night pain (malignancy/serious pathology) and rapid deformity all require medical review.",
      difficulty: "Easy",
      tags: ["precautions", "assessment"],
      sectionSlug: "signs-symptoms",
    },
    {
      text: "During gait observation, a lateral \"thrust\" of the knee into varus during stance phase suggests what?",
      options: [
        "Patellofemoral maltracking",
        "Dynamic overload of the medial compartment with ligamentous laxity",
        "Normal gait variation requiring no attention",
        "Isolated ankle instability",
      ],
      correctIndex: 1,
      explanation:
        "A varus thrust is a visible lateral shift of the knee into varus during weight acceptance. It indicates dynamic medial-compartment overload and is associated with markedly increased odds of medial OA progression — an important observational finding.",
      difficulty: "Hard",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "clinical-assessment",
    },
    {
      text: "Which adjunct treatment statement is consistent with current guidelines for knee OA?",
      options: [
        "Therapeutic ultrasound is a recommended primary treatment",
        "Manual therapy may provide short-term benefit but only alongside exercise",
        "TENS should replace exercise in older patients",
        "Passive modalities are superior to active treatment for long-term outcomes",
      ],
      correctIndex: 1,
      explanation:
        "Passive adjuncts (manual therapy, heat, TENS) may offer short-term symptom relief but only as additions to the active core of education, exercise and weight management. No passive modality changes long-term outcomes on its own.",
      difficulty: "Medium",
      tags: ["management"],
      sectionSlug: "physiotherapy-management",
    },
    {
      text: "For stationary cycling prescription in knee OA, the saddle height should allow approximately what knee angle at the bottom of the pedal stroke?",
      options: ["0° (full extension)", "25–30° flexion", "60° flexion", "90° flexion"],
      correctIndex: 1,
      explanation:
        "A saddle height producing about 25–30° of knee flexion at the bottom of the pedal stroke minimises both patellofemoral compression and hamstring strain, making cycling comfortable and joint-friendly. A saddle set too low increases patellofemoral load.",
      difficulty: "Hard",
      tags: ["exercise-therapy"],
      sectionSlug: "exercise-therapy",
    },
    {
      text: "A degenerative medial meniscal tear is found on MRI in a 62-year-old with typical knee OA symptoms. What is the most evidence-based interpretation?",
      options: [
        "Urgent arthroscopic meniscectomy is indicated",
        "The tear is likely an incidental finding; exercise therapy remains first-line",
        "All exercise must stop until the meniscus heals",
        "The patient should avoid weight-bearing for 6 weeks",
      ],
      correctIndex: 1,
      explanation:
        "Degenerative meniscal tears are extremely common incidental findings in adults over 50 and trials show arthroscopic surgery offers no benefit over exercise therapy for this presentation. The clinical picture — not the scan — guides management.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "management"],
      sectionSlug: "differential-considerations",
    },
  ],
  flashcards: [
    { front: "What are the two articulations of the knee joint?", back: "The tibiofemoral joint and the patellofemoral joint, sharing one joint capsule." },
    { front: "Which knee compartment is most commonly affected by OA and why?", back: "The medial tibiofemoral compartment — it carries about 60–70% of load during walking." },
    { front: "Clinical diagnostic criteria for knee OA (no imaging needed)?", back: "Age ≥ 45, activity-related joint pain, and morning stiffness absent or lasting < 30 minutes." },
    { front: "Why is early cartilage damage painless?", back: "Articular cartilage is avascular and aneural; OA pain comes from bone, synovium, capsule and soft tissues." },
    { front: "Name the OARSI core set of functional tests for knee OA.", back: "30-second chair stand test, 40 m fast-paced walk test, and a stair-climb test." },
    { front: "What are the three first-line treatments for knee OA?", back: "Education/self-management, exercise therapy, and weight management." },
    { front: "State the 24-hour flare rule for exercise dosing.", back: "Pain up to ~5/10 during exercise is acceptable if symptoms settle back to baseline within 24 hours." },
    { front: "How much knee load does each extra kg of body weight add per step?", back: "Roughly 3–4 kg of additional compressive load." },
    { front: "What is arthrogenic muscle inhibition?", back: "Reflex inhibition of the quadriceps caused by joint effusion/abnormal afferent input — manage swelling to restore strength." },
    { front: "Which hand should hold a cane for right knee OA?", back: "The left hand (contralateral side) — it creates a counter-moment that offloads the right knee." },
    { front: "Red flags in a painful knee?", back: "Hot red swollen joint ± fever (septic arthritis), constant night pain, unexplained weight loss, trauma with inability to weight-bear, rapid deformity." },
    { front: "Morning stiffness > 60 minutes suggests…", back: "Inflammatory arthritis (e.g. rheumatoid) rather than osteoarthritis." },
  ],
};

export default topic;
