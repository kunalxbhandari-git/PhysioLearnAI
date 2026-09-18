import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "ankle-sprain",
  title: "Lateral Ankle Sprain",
  category: "Musculoskeletal",
  description:
    "Learn the ligament anatomy, grading, Ottawa rules, PEACE & LOVE early management and the rehabilitation progression that prevents chronic ankle instability after the most common sporting injury.",
  difficulty: "Beginner",
  estMinutes: 25,
  icon: "footprints",
  keyTakeaways: [
    "Lateral ankle sprains are the most common musculoskeletal injury in sport — and the anterior talofibular ligament (ATFL) is injured most often.",
    "The typical mechanism is inversion with the ankle plantarflexed — the position in which the ATFL is taut and the joint least stable.",
    "The Ottawa ankle rules decide who needs an X-ray, with near-perfect sensitivity for clinically significant fracture.",
    "Grading (I–III) reflects the extent of ligament damage and guides expected recovery, but function guides progression more than grade.",
    "Early management follows PEACE & LOVE: protect and load optimally, avoid anti-inflammatories and ice-reliance early, and prioritise education, exercise and confidence.",
    "Rehabilitation progresses ROM → strength → proprioception/balance → agility and sport-specific loading.",
    "Up to 40% of people develop chronic ankle instability after a sprain — usually because rehabilitation stopped too early.",
    "Balance training and external supports (brace or tape) during at-risk activity substantially reduce re-sprain risk.",
  ],
  sections: [
    {
      slug: "ligament-anatomy",
      title: "Lateral Ligament Anatomy",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "The ankle (talocrural) joint is a hinge between the tibia, fibula and talus, most stable in dorsiflexion when the wide anterior talus is wedged into the mortise. Its lateral side is stabilised by three distinct ligaments running from the lateral malleolus, collectively called the lateral collateral ligament complex.",
        },
        { kind: "image", illustration: "ankle-joint", caption: "The ankle joint and its lateral ligaments — ATFL, CFL and PTFL — running from the lateral malleolus to the talus and calcaneus." },
        {
          kind: "cards",
          items: [
            { title: "ATFL — anterior talofibular", text: "From the anterior lateral malleolus to the talar neck. The weakest of the three and taut in plantarflexion — injured in roughly two-thirds to three-quarters of lateral sprains.", icon: "alert-triangle" },
            { title: "CFL — calcaneofibular", text: "From the malleolar tip down to the calcaneus, crossing both the ankle and subtalar joints. Resists inversion in neutral/dorsiflexion; injured with the ATFL in more severe sprains.", icon: "link" },
            { title: "PTFL — posterior talofibular", text: "From the malleolar fossa to the posterior talus. The strongest of the three; rarely injured except in major trauma or dislocation.", icon: "shield" },
            { title: "Medial (deltoid) ligament", text: "A strong fan-shaped medial complex — so strong that eversion forces often avulse the medial malleolus rather than tear it. Medial sprains are uncommon.", icon: "layers" },
            { title: "Syndesmosis", text: "The distal tibiofibular ligaments and interosseous membrane binding tibia to fibula. 'High ankle sprains' here follow external rotation/dorsiflexion trauma and recover far more slowly.", icon: "git-merge" },
            { title: "Peroneal (fibularis) muscles", text: "Peroneus longus and brevis evert the foot — the primary dynamic defence against inversion and a key rehabilitation target.", icon: "dumbbell" },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Injury order with increasing force: ATFL first, then CFL, then (rarely) PTFL",
            "The ankle is least stable in plantarflexion — the narrow posterior talus sits loosely in the mortise",
            "The peroneal muscles are the dynamic lateral stabilisers; their reaction speed matters as much as their strength",
          ],
        },
      ],
    },
    {
      slug: "mechanism",
      title: "Mechanism of Injury",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "The classic lateral sprain occurs when the ankle rolls into inversion while plantarflexed — landing on another player's foot, stepping on an uneven surface, or cutting sharply. In this position the ATFL lies almost parallel to the line of force and takes the load first.",
        },
        {
          kind: "steps",
          items: [
            { title: "Plantarflexion + inversion", text: "The narrow posterior talus sits loosely in the mortise and the ATFL is taut — the vulnerable position." },
            { title: "ATFL overload", text: "The inverting force exceeds the ATFL's capacity — it stretches or tears first as the weakest lateral ligament." },
            { title: "Escalation with force", text: "Greater energy recruits the CFL, and only severe trauma reaches the PTFL. The joint capsule and peroneal tendons may also be injured." },
            { title: "Failure of dynamic defence", text: "The peroneal muscles cannot react fast enough (~60–90 ms reaction vs ~80–100 ms to full inversion) — why proprioceptive training aims to sharpen automatic responses." },
          ],
        },
        {
          kind: "cards",
          items: [
            { title: "Risk factors", text: "Previous sprain (the strongest predictor), poor balance, reduced dorsiflexion range, inadequate rehabilitation of earlier sprains, sport type (court and field sports), and unstable footwear or surfaces.", icon: "list" },
            { title: "Other patterns", text: "Eversion injuries (deltoid) and external-rotation injuries (syndesmosis) are less common but slower to recover — identify them, don't assume every sprain is lateral.", icon: "help-circle" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "A previous poorly rehabilitated sprain is the single biggest risk factor for the next one — complete rehab is the best prevention.",
          ],
        },
      ],
    },
    {
      slug: "grading",
      title: "Grading of Ligament Injury",
      estMinutes: 2,
      content: [
        {
          kind: "table",
          headers: ["Grade", "Ligament damage", "Clinical findings", "Typical recovery"],
          rows: [
            ["Grade I (mild)", "Stretch/microscopic tearing, no laxity", "Mild swelling and tenderness, full or near-full weight-bearing, no mechanical instability", "1–3 weeks"],
            ["Grade II (moderate)", "Partial tear with mild-moderate laxity", "Moderate swelling and bruising, painful weight-bearing, some laxity with a firm end-point", "3–6 weeks"],
            ["Grade III (severe)", "Complete rupture (usually ATFL ± CFL)", "Marked swelling and bruising, unable to bear weight comfortably, clear laxity with soft/absent end-point", "6–12+ weeks"],
          ],
        },
        { kind: "image", illustration: "ligament-grades", caption: "Grades I–III of lateral ligament injury: progressive fibre disruption from microscopic tearing to complete rupture, with the end-feel on stress testing softening as the grade rises." },
        {
          kind: "paragraph",
          text: "Grading guides expectations and early protection, but it does not dictate the programme: rehabilitation progresses on function — swelling, range, strength, balance — rather than grade. Even complete lateral ligament ruptures are managed functionally in most patients; a short period of bracing beats both rigid immobilisation and early surgery.",
        },
        {
          kind: "pearls",
          items: [
            "Acute laxity testing is unreliable in the first days because of pain and swelling — the anterior drawer performs better when repeated at 4–5 days post-injury.",
            "Extensive bruising tracking into the foot and toes reflects capsular bleeding, not necessarily a worse prognosis.",
          ],
        },
      ],
    },
    {
      slug: "ottawa-rules",
      title: "Ottawa Ankle Rules",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "The Ottawa ankle rules are a validated clinical decision tool that identifies who needs an X-ray after ankle trauma. Their sensitivity for clinically significant fracture approaches 100%, and applying them safely reduces unnecessary imaging by around a third.",
        },
        {
          kind: "keypoints",
          title: "An ankle X-ray series is required if there is malleolar-zone pain PLUS any of:",
          items: [
            "Bone tenderness over the posterior edge or tip of the distal 6 cm of the lateral malleolus",
            "Bone tenderness over the posterior edge or tip of the distal 6 cm of the medial malleolus",
            "Inability to bear weight (four steps) both immediately after injury AND in the clinic/ED",
          ],
        },
        {
          kind: "keypoints",
          title: "A foot X-ray series is required if there is midfoot-zone pain PLUS any of:",
          items: [
            "Bone tenderness at the base of the fifth metatarsal",
            "Bone tenderness over the navicular",
            "Inability to bear weight (four steps) both immediately after injury AND in the clinic/ED",
          ],
        },
        {
          kind: "warning",
          title: "Applying the rules well",
          items: [
            "Palpate the entire distal 6 cm of each malleolus — posterior edge included, not just the tip",
            "Four limping steps still count as weight-bearing",
            "Use caution in patients under 18, intoxication, diminished sensation, or multiple painful injuries — the rules are less reliable",
            "Always palpate the fifth metatarsal base and navicular — avulsion fractures here classically accompany inversion injuries",
            "Tenderness over the proximal fibula after an ankle injury suggests a Maisonneuve fracture — X-ray the whole fibula",
          ],
        },
      ],
    },
    {
      slug: "assessment",
      title: "Clinical Assessment",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Assessment excludes fracture and syndesmosis injury, estimates the extent of ligament damage, and establishes baselines for rehabilitation. In the very acute ankle, keep testing gentle and repeat the ligament tests a few days later when they are more accurate.",
        },
        {
          kind: "steps",
          items: [
            { title: "History", text: "Mechanism (inversion-plantarflexion vs external rotation), pop or tearing sensation, immediate ability to weight-bear, swelling onset, previous sprains and their rehab, sport and functional demands." },
            { title: "Observation & palpation", text: "Swelling and bruising distribution; systematic palpation of the ATFL, CFL, malleoli (Ottawa), fifth metatarsal base, navicular, syndesmosis and proximal fibula." },
            { title: "Range & function", text: "Active/passive dorsiflexion, plantarflexion, inversion, eversion; single-leg stance; gait quality. Compare with the other side." },
            { title: "Anterior drawer test", text: "Ankle in slight plantarflexion; stabilise the tibia and glide the calcaneus/talus forward. Increased translation or a soft end-point suggests ATFL rupture — most accurate at day 4–5." },
            { title: "Talar tilt test", text: "Ankle in neutral; invert the calcaneus and compare tilt with the other side. Excessive tilt implicates the CFL (with the ATFL)." },
            { title: "Syndesmosis screening", text: "Squeeze test (compress tibia-fibula at mid-calf), external rotation (Kleiger) test, and palpation over the anterior syndesmosis — positive findings mean a longer, more cautious pathway." },
          ],
        },
        {
          kind: "table",
          headers: ["Test", "Structure", "Positive finding"],
          rows: [
            ["Anterior drawer", "ATFL", "Increased anterior talar translation, soft/absent end-point vs other side"],
            ["Talar tilt (inversion stress)", "CFL (± ATFL)", "Increased inversion tilt compared with the uninjured side"],
            ["Squeeze test", "Syndesmosis", "Distal tibiofibular pain on mid-calf compression"],
            ["External rotation (Kleiger) test", "Syndesmosis / deltoid", "Anterolateral ankle pain on external rotation of the foot in neutral dorsiflexion"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "Assess balance early — single-leg stance deficits are measurable within days and predict re-injury if left untreated.",
            "Pain out of proportion, midfoot bruising, or inability to push off should prompt review for fracture, Lisfranc or syndesmosis injury.",
          ],
        },
      ],
    },
    {
      slug: "early-management",
      title: "Early Management: PEACE & LOVE",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "The contemporary framework for acute soft-tissue injury is PEACE & LOVE — protecting the ankle briefly, then loading it optimally, while avoiding the things that impair healing. It replaces older protocols (RICE/PRICE) that centred on rest and ice.",
        },
        {
          kind: "steps",
          items: [
            { title: "P — Protect", text: "Unload or restrict aggravating movement for the first 1–3 days: relative rest, a brace or tape if needed, crutches only while weight-bearing is genuinely painful. Protection is short — prolonged rest harms." },
            { title: "E — Elevate", text: "Elevate the ankle above heart level as often as practical to limit swelling." },
            { title: "A — Avoid anti-inflammatories", text: "Inflammation is part of healing — routine NSAIDs (and ice used to 'kill' inflammation) may slow tissue repair. Ice can still be used briefly for pain relief." },
            { title: "C — Compress", text: "An elastic bandage or sleeve limits swelling and provides comfort and awareness." },
            { title: "E — Educate", text: "Explain the good natural history, the active plan, and why passive-therapy-only approaches and over-imaging are unhelpful." },
            { title: "L — Load", text: "Resume walking and normal activity as soon as symptoms allow — early progressive loading speeds recovery and is safe with pain kept tolerable." },
            { title: "O — Optimism", text: "Confidence and expectations genuinely influence outcomes; fear of re-injury delays return." },
            { title: "V — Vascularisation", text: "Pain-free cardiovascular activity (cycling, swimming, brisk walking as able) promotes blood flow and maintains fitness." },
            { title: "E — Exercise", text: "Begin mobility, strengthening and balance work early — exercise is the treatment with the strongest evidence for recovery and re-sprain prevention." },
          ],
        },
        {
          kind: "warning",
          title: "Early-phase mistakes",
          items: [
            "Prolonged immobilisation or non-weight-bearing for routine sprains — stiffness and weakness follow",
            "Relying on ice and NSAIDs as the 'treatment' rather than brief symptom relief",
            "Skipping fracture screening (Ottawa rules) before loading advice",
            "Declaring the ankle 'fine' once walking is comfortable — this is where rehab usually stops and shouldn't",
          ],
        },
      ],
    },
    {
      slug: "rehabilitation",
      title: "Rehabilitation Progression",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Rehabilitation follows an overlapping sequence — restore range, rebuild strength, retrain balance and proprioception, then return to agility and sport. Progression is criteria-led: each stage is earned with settling swelling, improving control and tolerable symptoms.",
        },
        {
          kind: "steps",
          items: [
            { title: "Stage 1 — Range of movement (days 1–7+)", text: "Active ankle circles, alphabet writing, gentle knee-to-wall dorsiflexion; restore walking quality. Dorsiflexion recovery is the priority — it is the range most often lost and most needed for gait and squatting." },
            { title: "Stage 2 — Strength (week 1 onwards)", text: "Resistance-band work in all four directions with eversion emphasised, progressing to weight-bearing calf raises and single-leg loading." },
            { title: "Stage 3 — Proprioception & balance (week 2 onwards)", text: "Single-leg balance progressions from firm surface to foam, eyes closed, and perturbations — the stage with the strongest evidence for preventing recurrence." },
            { title: "Stage 4 — Agility & return to sport (weeks 3–6+)", text: "Hopping, jumping and landing, direction changes, sport-specific drills; graded return to training before competition. Brace or tape for at-risk sport in the first months." },
          ],
        },
        {
          kind: "keypoints",
          title: "Return-to-sport indicators",
          items: [
            "Full, pain-free range of movement, dorsiflexion symmetrical to the other side (knee-to-wall)",
            "Calf and eversion strength comparable to the uninjured side (e.g. single-leg heel raise repetitions)",
            "Confident single-leg balance including eyes-closed and unstable-surface conditions",
            "Pain-free hopping, cutting and sport-specific drills at full speed",
            "No episodes of giving way, and psychological confidence in the ankle",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Most sprains feel 'fine' for walking within 1–2 weeks — but balance and strength deficits persist for months if untrained. This gap is where chronic ankle instability is born.",
          ],
        },
      ],
    },
    {
      slug: "exercise-programme",
      title: "Exercise Programme",
      estMinutes: 3,
      content: [
        {
          kind: "exercise",
          name: "Ankle alphabet & active range",
          purpose: "Restore movement, reduce swelling via the muscle pump, and maintain motor pathways in the acute phase.",
          position: "Sitting or long sitting with the leg supported, heel free.",
          execution: "Trace the letters of the alphabet in the air with the big toe, moving from the ankle, through as much comfortable range as possible.",
          dosage: "The full alphabet 2–3× per session, 3–4 sessions daily in the first week.",
          progression: "Add gentle over-pressure into dorsiflexion; progress to knee-to-wall stretches.",
          precautions: "Work within tolerable pain; no forcing into inversion in the first days.",
        },
        {
          kind: "exercise",
          name: "Knee-to-wall dorsiflexion",
          purpose: "Regain dorsiflexion — the range most commonly lost after a sprain and essential for gait, stairs and squatting.",
          position: "Facing a wall, injured foot a few centimetres away, hands on the wall.",
          execution: "Keeping the heel firmly down, drive the knee forward over the toes towards the wall until a stretch is felt at the front of the ankle or in the calf. Hold 3–5 seconds, return.",
          dosage: "10–15 reps × 3 sets daily; track progress by measuring the maximum toe-to-wall distance.",
          progression: "Move the foot further from the wall as range improves; aim for symmetry with the other side.",
          precautions: "A pinching block at the front of the ankle rather than a stretch may need joint mobilisation — flag it to the clinician.",
        },
        {
          kind: "exercise",
          name: "Resisted eversion with band",
          purpose: "Strengthen the peroneal muscles — the primary dynamic defence against the inversion mechanism.",
          position: "Long sitting, resistance band looped around the forefoot and anchored (or held) towards the midline.",
          execution: "Keeping the leg still, turn the sole of the foot outward against the band, pause 2 seconds, and return slowly over 3 seconds.",
          dosage: "10–15 reps × 3 sets, daily initially, then 3–4×/week; also train inversion, dorsiflexion and plantarflexion.",
          progression: "Thicker band, slower eccentric phase, then progress to weight-bearing and reactive lateral work.",
          precautions: "Move through comfortable range; sharp lateral pain over the peroneal tendons warrants review.",
        },
        { kind: "image", illustration: "resistance-band", caption: "A resistance band anchored towards the midline loads the peroneals in eversion — the key strengthening direction after lateral ankle sprain, progressed by band thickness and eccentric tempo." },
        {
          kind: "exercise",
          name: "Single-leg heel raises",
          purpose: "Rebuild calf strength and stiffness for push-off, hopping and running.",
          position: "Standing on the injured leg near a wall or bench for fingertip support.",
          execution: "Push up onto the ball of the foot as high as possible, pause, and lower slowly over 3 seconds.",
          dosage: "8–15 reps × 3 sets, 3–4×/week; compare max reps with the other side as a progress test.",
          progression: "Start double-leg if needed → single-leg → add load or perform off a step through full range.",
          precautions: "Keep the ankle vertical — do not let the heel drift inward or outward.",
        },
        {
          kind: "exercise",
          name: "Single-leg balance progression",
          purpose: "Retrain proprioception and peroneal reaction speed — the strongest evidence-based intervention for preventing recurrent sprains.",
          position: "Standing on the injured leg, knee soft, near support.",
          execution: "Balance for 30 seconds with good control. Progress through: eyes closed → foam or folded towel → catching and throwing a ball → controlled reaches with the free leg (star excursion pattern).",
          dosage: "3–5 × 30-second efforts per level, daily, for at least 6 weeks.",
          progression: "Combine challenges (foam + eyes closed), then add hopping and landing to balance holds.",
          precautions: "Have support within reach; wobble is the training stimulus, but repeated giving way means the level is too hard.",
        },
        {
          kind: "keypoints",
          title: "Programme principles",
          items: [
            "Restore dorsiflexion early; strengthen eversion hardest; train balance longest",
            "At least 6 weeks of balance training is the evidence-based dose for re-sprain prevention",
            "Progress each exercise by one variable at a time and let next-day symptoms guide dose",
          ],
        },
      ],
    },
    {
      slug: "chronic-instability",
      title: "Chronic Ankle Instability & Prevention",
      estMinutes: 2,
      difficulty: "Intermediate",
      content: [
        {
          kind: "paragraph",
          text: "Up to 40% of people develop chronic ankle instability (CAI) after a lateral sprain: recurrent sprains, episodes of giving way, and persistent lack of confidence lasting beyond a year. CAI combines mechanical laxity, sensorimotor deficits and fear — and it is largely a disease of incomplete rehabilitation.",
        },
        {
          kind: "cards",
          items: [
            { title: "Mechanical insufficiency", text: "Residual ligament laxity and altered joint mechanics after healing in a lengthened position.", icon: "unlock" },
            { title: "Sensorimotor deficits", text: "Impaired proprioception, slowed peroneal reaction, altered hip and balance strategies — trainable with targeted rehabilitation.", icon: "radio" },
            { title: "Perceived instability", text: "Fear and avoidance of uneven ground and cutting tasks — address with graded exposure and confidence-building.", icon: "brain" },
          ],
        },
        {
          kind: "steps",
          items: [
            { title: "Prevent it", text: "Complete the full rehabilitation pathway — including 6+ weeks of balance training — even after the ankle feels normal for walking." },
            { title: "Protect at-risk exposure", text: "A semi-rigid brace or taping during at-risk sport for the first 6–12 months substantially reduces re-sprain risk in people with a previous sprain, without impairing performance." },
            { title: "Treat established CAI", text: "Structured balance, strength and hopping programmes reduce giving way; joint mobilisation can help restore dorsiflexion. Refractory mechanical instability may merit surgical opinion (e.g. Broström-type lateral ligament repair)." },
          ],
        },
        {
          kind: "redflags",
          items: [
            "Inability to bear weight with positive Ottawa findings at any stage — return for imaging",
            "Persistent deep ankle pain, catching or locking months after a sprain — consider osteochondral lesion of the talus: refer for imaging",
            "Syndesmosis pattern (pain on squeeze/external rotation, pain pushing off) — slower pathway and possible orthopaedic review",
            "Numbness, colour change, or pain out of proportion — review for nerve injury or other serious pathology",
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
            "Mechanism: inversion + plantarflexion; ATFL torn first, then CFL; PTFL rarely",
            "Ottawa rules: malleolar/midfoot pain + bone tenderness (malleoli, 5th MT base, navicular) or inability to take 4 steps → X-ray",
            "Grades I–III by laxity and function; even grade III is usually managed functionally with brief brace protection",
            "Tests: anterior drawer (ATFL — best at day 4–5), talar tilt (CFL), squeeze/external rotation (syndesmosis)",
            "Early care: PEACE & LOVE — protect briefly, elevate, avoid NSAID-reliance, compress, educate; then load, optimism, vascularisation, exercise",
            "Rehab: ROM (dorsiflexion first) → strength (eversion emphasis) → balance 6+ weeks → agility and sport",
            "Up to 40% develop chronic ankle instability — complete rehab and brace/tape during at-risk sport to prevent it",
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
      text: "Which ligament is most commonly injured in a lateral ankle sprain?",
      options: [
        "Calcaneofibular ligament (CFL)",
        "Anterior talofibular ligament (ATFL)",
        "Posterior talofibular ligament (PTFL)",
        "Deltoid ligament",
      ],
      correctIndex: 1,
      explanation:
        "The ATFL is the weakest lateral ligament and is taut in plantarflexion — the position of the classic inversion injury — so it fails first and is involved in roughly two-thirds to three-quarters of lateral sprains. Greater force recruits the CFL; the PTFL is rarely injured; the deltoid is the medial ligament.",
      difficulty: "Easy",
      tags: ["anatomy", "pathology"],
      sectionSlug: "ligament-anatomy",
    },
    {
      text: "Why is the ankle least stable in plantarflexion?",
      options: [
        "The deltoid ligament slackens completely",
        "The narrower posterior part of the talus sits in the mortise, allowing more play",
        "The peroneal muscles cannot contract in plantarflexion",
        "The fibula moves away from the tibia",
      ],
      correctIndex: 1,
      explanation:
        "The talus is wedge-shaped — wider anteriorly. In dorsiflexion the wide part jams into the mortise, maximising bony stability; in plantarflexion the narrow posterior talus sits loosely, so stability depends on ligaments. Combined with the ATFL being taut in this position, it explains the classic plantarflexion-inversion mechanism.",
      difficulty: "Medium",
      tags: ["anatomy", "clinical-reasoning"],
      sectionSlug: "ligament-anatomy",
    },
    {
      text: "Which muscles provide the primary dynamic defence against the inversion sprain mechanism?",
      options: [
        "Gastrocnemius and soleus",
        "Tibialis anterior and extensor hallucis longus",
        "Peroneus (fibularis) longus and brevis",
        "Flexor digitorum longus and tibialis posterior",
      ],
      correctIndex: 2,
      explanation:
        "The peroneal (fibularis) muscles evert the foot and are the main dynamic lateral stabilisers — they fire to counter sudden inversion. Their strength and, critically, their reaction speed are core rehabilitation targets, trained through resisted eversion and balance/perturbation work.",
      difficulty: "Easy",
      tags: ["anatomy", "exercise-therapy"],
      sectionSlug: "ligament-anatomy",
    },
    {
      text: "According to the Ottawa ankle rules, which finding after an inversion injury requires an ankle X-ray?",
      options: [
        "Swelling over the lateral ligament",
        "Bone tenderness over the posterior edge of the distal 6 cm of the lateral malleolus",
        "Tenderness over the ATFL itself",
        "Bruising spreading into the toes",
      ],
      correctIndex: 1,
      explanation:
        "The Ottawa ankle rules require an X-ray for malleolar-zone pain plus bone tenderness over the posterior edge or tip of the distal 6 cm of either malleolus, or inability to take four steps both immediately and when assessed. Soft-tissue swelling, ligament tenderness and tracking bruising are common in sprains and do not themselves trigger imaging.",
      difficulty: "Easy",
      tags: ["assessment", "precautions"],
      sectionSlug: "ottawa-rules",
    },
    {
      text: "Which two bony sites in the FOOT must be palpated when applying the Ottawa rules?",
      options: [
        "First metatarsal head and cuboid",
        "Base of the fifth metatarsal and the navicular",
        "Calcaneal tuberosity and talar dome",
        "All five metatarsal shafts",
      ],
      correctIndex: 1,
      explanation:
        "The foot component of the Ottawa rules requires palpation of the base of the fifth metatarsal (avulsed by peroneus brevis in inversion injuries) and the navicular. Midfoot-zone pain plus tenderness at either site, or inability to take four steps, mandates a foot X-ray series.",
      difficulty: "Medium",
      tags: ["assessment", "precautions"],
      sectionSlug: "ottawa-rules",
    },
    {
      text: "A patient limps painfully for four steps in the emergency department after an ankle injury. How does this affect the Ottawa ankle rules?",
      options: [
        "They fail the weight-bearing criterion and need an X-ray",
        "Limping steps still count as weight-bearing — this criterion alone does not trigger an X-ray",
        "The rules cannot be applied to limping patients",
        "They need a CT scan instead",
      ],
      correctIndex: 1,
      explanation:
        "The Ottawa criterion is inability to take four steps, immediately after injury and at assessment — limping steps count as weight-bearing. Provided there is no malleolar or midfoot bone tenderness, this patient does not meet imaging criteria. Precise application keeps the rules' sensitivity near 100% while cutting unnecessary X-rays.",
      difficulty: "Hard",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "ottawa-rules",
    },
    {
      text: "Which clinical findings characterise a grade III lateral ankle sprain?",
      options: [
        "Mild tenderness with full weight-bearing and no laxity",
        "Moderate swelling with a firm end-point on anterior drawer",
        "Marked swelling and bruising, difficulty weight-bearing, and clear laxity with a soft or absent end-point",
        "Isolated posterior calf tightness",
      ],
      correctIndex: 2,
      explanation:
        "Grade III indicates complete rupture (usually ATFL ± CFL): marked swelling and bruising, poor weight-bearing tolerance and clear laxity with a soft or absent end-point on stress testing. Grade I has no laxity; grade II has partial tearing with some laxity but a firm end-point.",
      difficulty: "Medium",
      tags: ["assessment", "pathology"],
      sectionSlug: "grading",
    },
    {
      text: "Why is the anterior drawer test for the ATFL more accurate when repeated 4–5 days after injury?",
      options: [
        "The ligament has healed enough to test by then",
        "Acute pain, swelling and muscle guarding mask laxity in the first days",
        "The test is only valid once bruising appears",
        "Laxity increases every day for the first week",
      ],
      correctIndex: 1,
      explanation:
        "In the first days, pain, effusion and protective muscle guarding prevent the talus translating, hiding true laxity — the test has poor sensitivity acutely. Re-examining at day 4–5, when the acute reaction has settled, markedly improves accuracy. This 'delayed physical examination' is standard practice for grading lateral sprains.",
      difficulty: "Hard",
      tags: ["special-tests", "assessment"],
      sectionSlug: "assessment",
    },
    {
      text: "The talar tilt (inversion stress) test primarily assesses which structure?",
      options: [
        "Deltoid ligament",
        "Calcaneofibular ligament",
        "Syndesmosis",
        "Achilles tendon",
      ],
      correctIndex: 1,
      explanation:
        "With the ankle in neutral, inverting the calcaneus stresses the calcaneofibular ligament (with a contribution from the ATFL); excessive tilt compared with the other side implicates CFL injury — that is, a more severe sprain. The deltoid is tested with eversion stress and the syndesmosis with squeeze and external rotation tests.",
      difficulty: "Easy",
      tags: ["special-tests"],
      sectionSlug: "assessment",
    },
    {
      text: "A positive squeeze test and pain on external rotation of the foot after an ankle injury suggest which diagnosis?",
      options: [
        "Standard ATFL sprain",
        "Syndesmosis ('high ankle') injury",
        "Achilles rupture",
        "Plantar fasciitis",
      ],
      correctIndex: 1,
      explanation:
        "Compressing the tibia and fibula at mid-calf (squeeze test) and externally rotating the foot (Kleiger test) stress the distal tibiofibular syndesmosis. Positive findings indicate a high ankle sprain — typically from an external-rotation/dorsiflexion mechanism — which recovers much more slowly than a lateral sprain and may need orthopaedic review.",
      difficulty: "Medium",
      tags: ["special-tests", "clinical-reasoning"],
      sectionSlug: "assessment",
    },
    {
      text: "In the PEACE & LOVE framework, why are routine anti-inflammatory drugs discouraged in the first days after an ankle sprain?",
      options: [
        "They have no analgesic effect on ligaments",
        "The inflammatory response is a necessary phase of tissue healing, and blunting it may impair repair",
        "They always cause bleeding into the joint",
        "They mask fractures on X-ray",
      ],
      correctIndex: 1,
      explanation:
        "Inflammation initiates the healing cascade — recruiting the cells that clear debris and rebuild tissue. Routinely suppressing it with NSAIDs (the 'A — Avoid anti-inflammatories' in PEACE) may delay or impair ligament healing. Short-term use for severe pain is a clinical judgement; ice remains acceptable briefly for analgesia rather than to 'kill' inflammation.",
      difficulty: "Hard",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "early-management",
    },
    {
      text: "What does the 'L — Load' element of PEACE & LOVE recommend?",
      options: [
        "Strict non-weight-bearing for three weeks",
        "Resuming walking and normal activity as soon as symptoms allow, using pain to guide progression",
        "Maximal strength training from day one",
        "Loading only after imaging confirms healing",
      ],
      correctIndex: 1,
      explanation:
        "Early, progressive, symptom-guided loading — returning to walking and normal activity as tolerated — speeds recovery, maintains tissue capacity and beats prolonged rest or immobilisation for routine sprains. Protection lasts only the first days; mechanical load then becomes the stimulus for organised ligament healing.",
      difficulty: "Easy",
      tags: ["management"],
      sectionSlug: "early-management",
    },
    {
      text: "Why is dorsiflexion the priority range to restore after a lateral ankle sprain?",
      options: [
        "It is the only movement the ATFL controls",
        "It is the range most commonly lost, and it is essential for normal gait, stairs and squatting; restricted dorsiflexion also predicts re-injury",
        "Plantarflexion is impossible to train",
        "Dorsiflexion stretches the peroneal muscles",
      ],
      correctIndex: 1,
      explanation:
        "Post-sprain stiffness most consistently affects dorsiflexion (often with restricted posterior talar glide), and normal walking, stair descent and squatting all demand it. Reduced dorsiflexion is also an identified risk factor for future sprains. Knee-to-wall stretching — with joint mobilisation where needed — targets it directly and measurably.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "rehabilitation",
    },
    {
      text: "Which rehabilitation component has the strongest evidence for preventing recurrent ankle sprains?",
      options: [
        "Ultrasound therapy",
        "Balance and proprioceptive training over at least 6 weeks",
        "Calf stretching alone",
        "Rigid immobilisation for 6 weeks",
      ],
      correctIndex: 1,
      explanation:
        "Balance/proprioceptive training programmes of around 6+ weeks substantially reduce re-sprain risk — the best-supported active intervention after ankle sprain. They retrain the sensorimotor deficits (slowed peroneal reactions, impaired position sense) that persist after pain resolves. Passive modalities and prolonged immobilisation do not prevent recurrence.",
      difficulty: "Easy",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "rehabilitation",
    },
    {
      text: "Why does the exercise programme emphasise resisted EVERSION over other directions?",
      options: [
        "Eversion is the only movement lost after a sprain",
        "The evertors (peroneals) directly oppose the inversion mechanism of injury and protect the healing lateral ligaments",
        "The invertors are always torn in a lateral sprain",
        "Eversion strengthening improves dorsiflexion range",
      ],
      correctIndex: 1,
      explanation:
        "The peroneal evertors are the dynamic brake on inversion — the exact mechanism of the injury. Strengthening them (and later training their reaction speed through perturbation work) directly addresses re-sprain risk. All four directions are trained, but eversion carries the greatest protective rationale.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "anatomy"],
      sectionSlug: "exercise-programme",
    },
    {
      text: "Approximately what proportion of people develop chronic ankle instability after a lateral ankle sprain?",
      options: ["Under 5%", "About 10%", "Up to 40%", "Over 90%"],
      correctIndex: 2,
      explanation:
        "Up to 40% of people report chronic ankle instability — recurrent sprains, giving way and persistent lack of confidence — after a lateral sprain. The dominant modifiable cause is incomplete rehabilitation: most people stop once walking is comfortable, leaving sensorimotor deficits untreated.",
      difficulty: "Medium",
      tags: ["pathology", "management"],
      sectionSlug: "chronic-instability",
    },
    {
      text: "An athlete returning to netball three months after a moderate lateral sprain asks about prevention. Which advice is evidence-based?",
      options: [
        "Nothing further is needed once pain has resolved",
        "Continue balance training and use a semi-rigid brace or taping during sport for the coming months",
        "Avoid all jumping sports permanently",
        "Wear a rigid cast during matches",
      ],
      correctIndex: 1,
      explanation:
        "For athletes with a previous sprain, continued balance/neuromuscular training plus a semi-rigid brace or taping during at-risk sport significantly reduces re-sprain risk over the following 6–12 months without meaningfully impairing performance. Doing nothing leaves the strongest risk factor — a prior sprain — unmanaged.",
      difficulty: "Medium",
      tags: ["management", "precautions"],
      sectionSlug: "chronic-instability",
    },
    {
      text: "Four months after an ankle sprain, a patient reports persistent deep ankle pain with intermittent catching and locking. What should the clinician suspect?",
      options: [
        "Normal ligament healing symptoms",
        "An osteochondral lesion of the talar dome — refer for imaging",
        "Delayed-onset muscle soreness",
        "Plantar fasciitis",
      ],
      correctIndex: 1,
      explanation:
        "Persistent deep joint pain, catching or locking months after a sprain suggests an osteochondral lesion of the talus — cartilage and subchondral bone damage from talar impaction during the inversion injury. It will not respond to ligament rehabilitation alone and warrants imaging (MRI) and orthopaedic opinion. Mechanical symptoms are the clue.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "precautions", "pathology"],
      sectionSlug: "chronic-instability",
    },
    {
      text: "Tenderness over the PROXIMAL fibula after an ankle external-rotation injury should prompt what action?",
      options: [
        "Reassurance — the fibula is not involved in ankle injuries",
        "X-ray of the entire fibula to exclude a Maisonneuve fracture",
        "Immediate calf massage",
        "A standard ankle rehabilitation programme",
      ],
      correctIndex: 1,
      explanation:
        "A Maisonneuve injury is a proximal fibular fracture with tearing of the syndesmosis/interosseous membrane transmitted from an ankle external-rotation injury — an unstable pattern that is easily missed if only the ankle is imaged. Proximal fibular tenderness after ankle trauma therefore mandates full-length fibula imaging and orthopaedic review.",
      difficulty: "Hard",
      tags: ["precautions", "assessment", "clinical-reasoning"],
      sectionSlug: "ottawa-rules",
    },
  ],
  flashcards: [
    { front: "Name the three lateral ankle ligaments in order of injury frequency.", back: "ATFL (most injured, weakest), then CFL, then PTFL (strongest, rarely injured) — all from the lateral malleolus." },
    { front: "Classic mechanism of lateral ankle sprain?", back: "Inversion with the ankle plantarflexed — the position where the ATFL is taut and the narrow posterior talus makes the joint least stable." },
    { front: "Ottawa ankle rules — when is an ankle X-ray required?", back: "Malleolar-zone pain plus bone tenderness over the distal 6 cm posterior edge/tip of either malleolus, or inability to take 4 steps immediately and at assessment." },
    { front: "Ottawa foot series — which two bones are palpated?", back: "Base of the fifth metatarsal and the navicular." },
    { front: "Grade III lateral sprain — key features?", back: "Complete rupture (ATFL ± CFL): marked swelling/bruising, poor weight-bearing, clear laxity with soft/absent end-point; managed functionally with brief brace protection." },
    { front: "Anterior drawer vs talar tilt — which ligament does each test?", back: "Anterior drawer → ATFL (best at day 4–5); talar tilt (inversion stress) → CFL." },
    { front: "How is a syndesmosis injury screened clinically?", back: "Squeeze test (mid-calf compression) and external rotation (Kleiger) test — positives suggest a high ankle sprain with slower recovery." },
    { front: "What does PEACE & LOVE stand for?", back: "Protect, Elevate, Avoid anti-inflammatories, Compress, Educate & Load, Optimism, Vascularisation, Exercise." },
    { front: "Why avoid routine NSAIDs early after a sprain?", back: "Inflammation initiates healing; blunting it may impair ligament repair — reserve NSAIDs for severe pain, use ice briefly for analgesia only." },
    { front: "The four rehabilitation stages after ankle sprain?", back: "Range of movement (dorsiflexion first) → strength (eversion emphasis) → proprioception/balance (6+ weeks) → agility and return to sport." },
    { front: "How common is chronic ankle instability after a sprain?", back: "Up to 40% — driven by incomplete rehabilitation; prevented by full rehab plus brace/tape during at-risk sport for 6–12 months." },
    { front: "Persistent deep pain, catching or locking months after a sprain suggests…", back: "An osteochondral lesion of the talar dome — refer for imaging and orthopaedic opinion." },
  ],
};

export default topic;
