import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "foot-heel-pain",
  title: "Foot & Heel Pain",
  category: "Musculoskeletal",
  description:
    "Plantar heel pain and its neighbours: arch anatomy and the windlass mechanism, first-step pain, the differentials you must not miss, and the loading, stretching and footwear strategies that actually help.",
  difficulty: "Beginner",
  estMinutes: 25,
  icon: "footprints",
  keyTakeaways: [
    "The plantar fascia supports the medial longitudinal arch and is tensioned by the windlass mechanism — big-toe extension winds the fascia tight and raises the arch.",
    "Plantar heel pain (plantar fasciopathy) classically causes sharp first-step pain under the medial heel after rest, easing with initial activity.",
    "It is a load-tolerance problem of a degenerative (not inflammatory) fascia — 'fasciopathy' describes it better than '-itis'.",
    "Load spikes, higher BMI, prolonged standing occupations and reduced ankle dorsiflexion/calf flexibility are the key risk factors.",
    "Fat pad irritation, calcaneal stress fracture, S1 radicular pain and Baxter's nerve entrapment are the differentials to actively exclude.",
    "Management combines load management with progressive calf and plantar fascia loading — high-load slow strengthening has trial support.",
    "Stretching, taping, and footwear or orthotic adjustments are useful adjuncts, especially early.",
    "Insertional Achilles problems are aggravated by compression in dorsiflexion — unlike midportion tendinopathy, avoid stretching into dorsiflexion and heel drops below level early on.",
  ],
  sections: [
    {
      slug: "arch-anatomy",
      title: "Arch Anatomy & the Windlass Mechanism",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "The foot manages a contradiction: it must be a compliant shock absorber at heel strike and a rigid lever at push-off. The medial longitudinal arch — maintained by bone shape, ligaments, the plantar fascia and the intrinsic and extrinsic foot muscles — is the structure that makes both possible.",
        },
        { kind: "image", illustration: "ankle-joint", caption: "The ankle and foot complex: load passes from tibia through the talus into the arch, with the plantar fascia spanning from calcaneus to toes as the arch's main passive tie-rod." },
        {
          kind: "cards",
          items: [
            { title: "Plantar fascia", text: "A thick fibrous band from the medial calcaneal tubercle to the bases of the toes. It acts as a tie-rod: arch flattening under load tensions the fascia, which stores and returns energy.", icon: "link" },
            { title: "Intrinsic foot muscles", text: "Small muscles within the foot that actively support the arch and share load with the fascia — trainable, and often neglected.", icon: "dumbbell" },
            { title: "Calf complex", text: "Gastrocnemius-soleus tension transmits directly into the plantar fascia via the calcaneus; tight or overloaded calves increase fascial load.", icon: "zap" },
            { title: "Heel fat pad", text: "A specialised shock-absorbing pad of fibrous septa and fat under the calcaneus — a separate structure with its own pathology.", icon: "shield" },
          ],
        },
        {
          kind: "paragraph",
          text: "The windlass mechanism is the key concept: because the fascia attaches to the toes, extending the big toe (as in late stance) winds the fascia around the metatarsal head like a cable on a winch. This tightens the fascia, raises the arch and stiffens the foot into a rigid lever for push-off — elegant, automatic, and the reason every step loads the fascia at its calcaneal origin.",
        },
        {
          kind: "keypoints",
          title: "Windlass essentials",
          items: [
            "Big-toe (1st MTP) extension → fascia winds tight → arch rises and foot stiffens",
            "The fascia experiences high tensile load every step, peaking at push-off",
            "This is also an assessment tool: passive great-toe extension tensions the fascia and may reproduce plantar heel pain (windlass test)",
            "And a treatment tool: loading the fascia in a wound-up (toes-extended) position targets it precisely",
          ],
        },
      ],
    },
    {
      slug: "plantar-heel-pain",
      title: "Plantar Heel Pain (Plantar Fasciopathy)",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Plantar heel pain — plantar fasciitis in common usage, better called plantar fasciopathy — is pain at the plantar fascia's origin on the medial calcaneal tubercle. Histology shows degenerative change and disorganised collagen rather than acute inflammation, mirroring tendinopathy. It is the most common cause of plantar heel pain and affects both runners and people in standing occupations.",
        },
        {
          kind: "cards",
          items: [
            { title: "First-step pain", text: "The signature symptom: sharp pain under the medial heel with the first steps after waking or after prolonged sitting, easing over minutes as the tissue warms up.", icon: "sunrise" },
            { title: "Post-load ache", text: "Pain often returns as an ache after long days on the feet or after (rather than during) runs — a classic load-response pattern.", icon: "clock" },
            { title: "Focal tenderness", text: "Well-localised tenderness at the medial calcaneal tubercle, sometimes with pain on passive great-toe extension (windlass test).", icon: "target" },
            { title: "Long but benign course", text: "Most cases resolve with conservative care, but honest timeframes are months (commonly 6–12), not weeks.", icon: "calendar" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Diagnosis is clinical — imaging is not needed in a typical presentation. Heel spurs on X-ray are common in pain-free feet and are not the pain source.",
            "First-step pain that eases with activity strongly favours fasciopathy; pain that worsens steadily with every step deserves a broader think (stress fracture, fat pad).",
          ],
        },
      ],
    },
    {
      slug: "risk-factors",
      title: "Risk Factors & Contributing Load",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Like most load-related conditions, plantar fasciopathy usually arises when cumulative load outstrips the fascia's current tolerance. Risk factors either raise the load or lower the tolerance.",
        },
        {
          kind: "cards",
          items: [
            { title: "Load spike", text: "A rapid increase in running volume, hill work, standing hours or unaccustomed barefoot/flat-shoe walking is the most common trigger in the history.", icon: "trending-up" },
            { title: "Higher BMI", text: "Consistently associated in non-athletic populations — more load per step, every step.", icon: "scale" },
            { title: "Reduced ankle dorsiflexion / calf tightness", text: "Limited dorsiflexion (often from calf tightness) increases fascial strain and is one of the strongest identified risk factors.", icon: "minimize-2" },
            { title: "Prolonged standing occupations", text: "Teachers, nurses, factory and retail workers — long daily hours on hard floors.", icon: "briefcase" },
            { title: "Foot posture extremes", text: "Both very flat (pronated) and very high-arched (cavus) feet may concentrate fascial load — though foot shape alone is a weak predictor.", icon: "footprints" },
            { title: "Calf and intrinsic weakness", text: "Weak plantar flexors and intrinsics shift load to passive structures, including the fascia.", icon: "battery-low" },
          ],
        },
        {
          kind: "keypoints",
          title: "Clinical translation",
          items: [
            "Ask what changed: shoes, surfaces, volume, standing hours, body weight",
            "Measure ankle dorsiflexion (knee-to-wall) — a modifiable target when restricted",
            "Address tolerance (strengthen calf and foot) and load (modify the spike) together",
          ],
        },
      ],
    },
    {
      slug: "assessment-differentials",
      title: "Assessment & Differentials",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Assessment confirms the fasciopathy pattern — first-step pain, focal medial calcaneal tenderness, positive windlass test — and actively excludes the mimics. Location, behaviour and a few targeted tests separate them.",
        },
        {
          kind: "steps",
          items: [
            { title: "History", text: "Onset and load history, first-step pain, 24-hour behaviour, occupation and footwear, paraesthesia (nerve), night pain or constant pain (red flags), back pain or leg symptoms (radicular)." },
            { title: "Palpation", text: "Medial calcaneal tubercle (fasciopathy) vs central heel pad (fat pad) vs medial heel with Tinel's (Baxter's/tibial nerve) vs calcaneal squeeze (stress fracture)." },
            { title: "Load tests", text: "Windlass test (passive great-toe extension), single-leg heel raise capacity, hopping tolerance in athletes." },
            { title: "Ankle & calf", text: "Knee-to-wall dorsiflexion range side-to-side; calf strength endurance (heel-raise repetitions)." },
            { title: "Screen proximally", text: "Lumbar spine and neurological screen when pain is diffuse, burning, or accompanied by back/leg symptoms." },
          ],
        },
        {
          kind: "table",
          headers: ["Condition", "Distinguishing features"],
          rows: [
            ["Plantar fasciopathy", "First-step pain, focal medial calcaneal tubercle tenderness, eases with warm-up, load-response pattern"],
            ["Fat pad irritation/atrophy", "Central heel pain, worse barefoot on hard floors and with prolonged standing; tender centrally; more common in older adults and after heel impact"],
            ["Calcaneal stress fracture", "Progressive pain worse with EVERY step and with impact, not first-step dominant; positive calcaneal squeeze test; history of sudden load increase or low bone density — needs imaging and offloading"],
            ["S1 radicular pain", "Heel/posterior leg pain with back pain, burning or shooting quality, positive neural tension (SLR), possible reduced ankle reflex or calf weakness; heel itself often non-tender"],
            ["Baxter's nerve entrapment (first branch of lateral plantar nerve)", "Burning medial-plantar heel pain, may radiate laterally; tenderness over the nerve deep to abductor hallucis rather than the tubercle; no classic first-step pattern; possible abductor digiti minimi weakness"],
            ["Systemic causes (spondyloarthropathy)", "Bilateral heel pain (enthesitis) in a younger person with inflammatory back stiffness, psoriasis or IBD — ask the screening questions"],
          ],
        },
        {
          kind: "redflags",
          items: [
            "Constant or night pain unrelieved by rest — exclude bone pathology or malignancy",
            "Progressive pain with every step plus positive calcaneal squeeze — stress fracture until proven otherwise",
            "Bilateral entheseal heel pain with inflammatory features (young adult, morning back stiffness, psoriasis, uveitis, IBD) — consider spondyloarthropathy",
            "Numbness, burning or weakness suggesting nerve involvement — assess neurologically",
            "Fever, systemic illness, or a hot swollen area — infection",
          ],
        },
      ],
    },
    {
      slug: "management-loading",
      title: "Management: Load & Strengthening",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "The core of management is the familiar pairing: trim the aggravating load to a tolerable level, then progressively rebuild the capacity of the calf-fascia system. Education about the condition's benign but slow nature keeps patients engaged for the months this takes.",
        },
        {
          kind: "steps",
          items: [
            { title: "1. Manage the load", text: "Cut the spike (volume, hills, standing hours where possible), break up long standing periods, temporarily swap some impact for cycling or swimming, and use supportive footwear rather than flat unsupportive shoes barefoot on hard floors." },
            { title: "2. Load the tissue", text: "Progressive calf and plantar fascia strengthening. High-load slow strengthening — heel raises performed slowly with a towel under the toes to engage the windlass — outperformed stretching alone at 3 months in trial evidence and builds the capacity that prevents recurrence." },
            { title: "3. Stretch what's tight", text: "Calf stretching (gastrocnemius and soleus) and specific plantar fascia stretching (toes extended against a wall or by hand) reduce symptoms, especially first-step pain." },
            { title: "4. Adjuncts as needed", text: "Low-Dye or similar taping for short-term relief; gel heel cups or prefabricated orthoses; night socks/splints for severe first-step pain (tolerance varies)." },
            { title: "5. Escalation options", text: "For persistent cases (6–12+ months of genuine loading): shockwave therapy has reasonable evidence; corticosteroid injection gives short-term relief but carries risks (fat pad atrophy, fascial rupture) and does not change long-term outcomes." },
          ],
        },
        {
          kind: "keypoints",
          title: "The high-load slow strengthening protocol (Rathleff-style)",
          items: [
            "Heel raise on a step with a rolled towel under the toes (toes extended = windlass engaged = fascia loaded)",
            "3 seconds up, 2 seconds pause, 3 seconds down — slow and heavy",
            "Start ~12RM × 3 sets every other day; progress load (backpack/weights) toward 8–10RM over weeks",
            "Expect months, not weeks — pain during exercise up to ~5/10 settling by next morning is acceptable",
          ],
        },
        {
          kind: "warning",
          title: "Management mistakes",
          items: [
            "Rest as the whole plan — symptoms settle then return with the first normal week on the feet",
            "Repeated corticosteroid injections — risk of fat pad atrophy and plantar fascia rupture",
            "Chasing the heel spur — spurs are common in asymptomatic feet and their removal is not the answer",
            "Ignoring body weight, standing hours and footwear while doing only exercises",
          ],
        },
      ],
    },
    {
      slug: "adjuncts-footwear",
      title: "Stretching, Taping, Footwear & Orthoses",
      estMinutes: 2,
      content: [
        {
          kind: "cards",
          items: [
            { title: "Plantar fascia stretch", text: "Pull the toes into extension with one hand and massage/stretch the fascia — before the first steps of the morning is the highest-value moment.", icon: "hand" },
            { title: "Calf stretching", text: "Wall stretches with knee straight (gastrocnemius) and bent (soleus), 3 × 30 seconds daily — targets the dorsiflexion restriction that drives fascial load.", icon: "move" },
            { title: "Low-Dye taping", text: "Anti-pronation taping can meaningfully reduce pain for days at a time — a good short-term bridge and a useful predictor that orthoses may help.", icon: "bandage" },
            { title: "Footwear", text: "Cushioned, supportive shoes with a modest heel raise reduce fascial and calf load; avoid prolonged barefoot walking on hard floors during the painful phase.", icon: "footprints" },
            { title: "Heel cups & orthoses", text: "Gel heel cups (fat pad and comfort) and prefabricated orthoses (arch support) provide short-term symptom relief for many; custom devices are rarely necessary first-line.", icon: "layers" },
            { title: "Night splints / socks", text: "Hold the ankle and toes toward dorsiflexion overnight, reducing first-step pain — evidence is mixed and tolerance limits use; worth trialling in severe morning pain.", icon: "moon" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "If taping clearly helps, an orthosis probably will too — a cheap in-clinic experiment.",
            "All adjuncts buy comfort and adherence; the loading programme builds durable capacity. Frame them in that order.",
          ],
        },
      ],
    },
    {
      slug: "achilles-note",
      title: "Achilles: Insertional vs Midportion",
      estMinutes: 2,
      difficulty: "Intermediate",
      content: [
        {
          kind: "paragraph",
          text: "Posterior heel pain is usually Achilles tendinopathy, and one distinction changes the exercise prescription: where the tendon hurts. Midportion tendinopathy (2–6 cm above the insertion) is a pure tensile overload problem. Insertional tendinopathy (at the calcaneus) adds a compressive element — in dorsiflexion the tendon is pressed against the calcaneus (and the retrocalcaneal bursa is squeezed), so end-range dorsiflexion is the aggravating position.",
        },
        {
          kind: "table",
          headers: ["Feature", "Midportion Achilles", "Insertional Achilles"],
          rows: [
            ["Pain location", "2–6 cm above the heel bone", "At the tendon-bone junction on the calcaneus"],
            ["Key mechanical driver", "Tensile energy-storage load", "Tensile load PLUS compression against the calcaneus in dorsiflexion"],
            ["Heel drops off a step", "Appropriate — full range including below level", "Avoid below level early — dorsiflexion compresses the insertion; work to floor level only"],
            ["Heel raise in shoes / heel lift", "Not usually needed", "Temporary heel raise reduces compression and often settles symptoms"],
            ["Aggravators", "Running volume/speed, hills", "Uphill walking, calf stretching into dorsiflexion, low-drop shoes, direct shoe counter pressure"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "The insertional rule generalises: tendinopathies with a compressive component (gluteal, insertional Achilles, proximal hamstring) are managed by limiting the compressive range early — load the tendon, spare the compression.",
            "Aggressive calf stretching often flares insertional Achilles pain — swap stretches for progressive loading in reduced dorsiflexion range early on.",
          ],
        },
      ],
    },
    {
      slug: "forefoot-basics",
      title: "Forefoot Basics: Neuroma & Hallux Valgus",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "cards",
          items: [
            { title: "Morton's neuroma", text: "Perineural fibrosis of an interdigital nerve, classically in the 3rd–4th web space: burning forefoot pain, toe tingling, and the feeling of a pebble in the shoe. Worse in narrow shoes and heels; Mulder's click may be felt on squeeze testing.", icon: "zap" },
            { title: "Neuroma management", text: "Wider toe-box footwear, reduced heel height and a metatarsal dome offload the nerve — successful for many; injection or surgery for persistent cases.", icon: "footprints" },
            { title: "Hallux valgus", text: "Progressive lateral deviation of the great toe with a medial bunion. Genetics and footwear both contribute. Pain comes from the bunion, altered load and later 1st MTP arthritis.", icon: "move" },
            { title: "Hallux valgus management", text: "Footwear with a wide toe box, pads/spacers for comfort, intrinsic and big-toe strengthening, and load management. Splints do not correct the deformity; surgery is for persistent pain, not cosmesis.", icon: "settings" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Squeeze the forefoot and press the web space: reproduction of burning/tingling with a palpable click (Mulder's) supports neuroma.",
            "In hallux valgus, remember the windlass: a painful, stiff or deviated great toe degrades push-off mechanics for the whole limb.",
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
          text: "The core programme for plantar heel pain: fascia-focused heavy loading, calf flexibility, symptom-modifying self-massage and intrinsic foot strengthening. Consistency over months is what works.",
        },
        {
          kind: "exercise",
          name: "Heel raises with towel under the toes",
          purpose: "High-load slow strengthening of the calf-fascia system with the windlass engaged — the best-evidenced loading exercise for plantar fasciopathy.",
          position: "Standing on a step with the forefoot, a rolled towel under the toes so they sit in extension; hands on a rail for balance.",
          execution: "Rise onto the toes over 3 seconds, pause 2 seconds at the top, lower over 3 seconds until the heel drops slightly below the step.",
          dosage: "Start ~12 reps (12RM effort) × 3 sets, every other day.",
          progression: "Add load in a backpack, progressing toward 8–10RM; progress two-leg → single-leg.",
          precautions: "Pain up to ~5/10 that settles by next morning is acceptable; morning first-step pain trending down over weeks is the success signal.",
        },
        {
          kind: "exercise",
          name: "Calf stretching (gastrocnemius & soleus)",
          purpose: "Restore ankle dorsiflexion — a key modifiable risk factor — and reduce fascial strain.",
          position: "Standing facing a wall, hands on the wall; target leg behind.",
          execution: "Knee straight, heel down, lean in until a calf stretch is felt (gastrocnemius); repeat with the back knee bent (soleus).",
          dosage: "30 seconds × 3 each position, daily.",
          progression: "Increase stretch tolerance; monitor knee-to-wall distance as the outcome.",
          precautions: "In INSERTIONAL Achilles pain, aggressive dorsiflexion stretching can flare symptoms — moderate range there.",
        },
        {
          kind: "exercise",
          name: "Plantar fascia rolling & morning stretch",
          purpose: "Short-term symptom modification, especially of first-step pain.",
          position: "Sitting; a firm ball or frozen bottle under the foot, or the foot crossed over the knee for the hand stretch.",
          execution: "Roll the sole slowly from heel to toes for 1–2 minutes; and/or pull the toes into extension with one hand, feeling the fascia tighten, holding 15–30 seconds.",
          dosage: "1–2 minutes rolling and 3 × 20–30 second stretches, daily — ideally before the first steps of the morning.",
          progression: "This is symptom management; progression lives in the loading exercise.",
          precautions: "Firm pressure is fine; avoid bruising force over the heel fat pad.",
        },
        {
          kind: "exercise",
          name: "Intrinsic foot strengthening (short-foot / towel work)",
          purpose: "Train the arch's active support system to share load with the fascia.",
          position: "Sitting, progressing to standing; foot flat on the floor.",
          execution: "Short-foot: draw the base of the big toe toward the heel, raising the arch without curling the toes; hold 5 seconds. Alternative: scrunch a towel toward you with the toes.",
          dosage: "8–12 holds × 2–3 sets, daily.",
          progression: "Sitting → standing → single-leg standing → during heel raises.",
          precautions: "Avoid gripping with the long toe flexors (curled toes) — the arch should dome, not claw.",
        },
        {
          kind: "keypoints",
          title: "Programme logic",
          items: [
            "Loading (heel raises) builds capacity; stretching and rolling manage symptoms; intrinsics add active support",
            "Every-other-day heavy loading; daily mobility and symptom work",
            "Track first-step pain each morning (0–10) — the most sensitive progress marker",
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
            "Windlass: big-toe extension winds the plantar fascia tight, raising the arch and stiffening the foot for push-off",
            "Plantar fasciopathy: first-step medial heel pain, focal tubercle tenderness, degenerative not inflammatory; heel spurs are bystanders",
            "Risks: load spike, higher BMI, reduced dorsiflexion/calf tightness, standing occupations",
            "Differentials: fat pad (central, barefoot on hard floors), calcaneal stress fracture (every-step pain, squeeze test → image), S1 radicular (back/leg symptoms, neural signs), Baxter's nerve (burning, neural tenderness)",
            "Management: load management + high-load slow heel raises with towel under toes + calf/fascia stretching",
            "Adjuncts: taping, heel cups/orthoses, footwear advice, night splints — comfort bridges, not cures",
            "Achilles: insertional = compression in dorsiflexion — avoid below-level heel drops and aggressive stretching early; midportion = full-range loading fine",
            "Red flags: night/constant pain, every-step progressive pain, bilateral enthesitis features, neurological deficit",
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
      text: "What happens to the plantar fascia when the big toe is extended?",
      options: [
        "It slackens, allowing the arch to flatten",
        "It winds tight around the metatarsal head, raising the arch and stiffening the foot (windlass mechanism)",
        "It detaches from the calcaneus",
        "Nothing — the fascia does not attach to the toes",
      ],
      correctIndex: 1,
      explanation:
        "The plantar fascia runs from the calcaneus to the bases of the toes, so great-toe extension winds it around the first metatarsal head like a cable on a winch — tensioning the fascia, elevating the arch and converting the foot into a rigid lever for push-off. This windlass mechanism underpins assessment (windlass test) and treatment (loading with toes extended).",
      difficulty: "Easy",
      tags: ["anatomy", "assessment"],
      sectionSlug: "arch-anatomy",
    },
    {
      text: "Which symptom pattern is the classic signature of plantar fasciopathy?",
      options: [
        "Pain that worsens progressively with every step of the day",
        "Sharp medial heel pain with the first steps after rest, easing as activity continues",
        "Burning pain radiating from the back to the heel",
        "Central heel pain only when barefoot",
      ],
      correctIndex: 1,
      explanation:
        "First-step pain — sharp pain under the medial heel on the first steps after waking or prolonged sitting, warming up over minutes — is the hallmark of plantar fasciopathy, often with a post-load ache after long days. Pain worsening with every step suggests stress fracture; central barefoot pain suggests fat pad; radiating burning pain suggests a neural source.",
      difficulty: "Easy",
      tags: ["assessment", "pathology"],
      sectionSlug: "plantar-heel-pain",
    },
    {
      text: "Why is \"plantar fasciopathy\" considered a more accurate term than \"plantar fasciitis\"?",
      options: [
        "Because the condition affects bone, not fascia",
        "Because histology shows degenerative, disorganised collagen rather than acute inflammation",
        "Because the fascia is always ruptured",
        "Because the pain actually comes from the heel spur",
      ],
      correctIndex: 1,
      explanation:
        "Like tendinopathy, chronic plantar heel pain shows degenerative change — collagen disorganisation and failed healing — rather than the inflammatory cell infiltrate that \"-itis\" implies. This matters clinically: the tissue responds to progressive loading, not to rest and anti-inflammatory strategies alone. Heel spurs are common in asymptomatic feet and are not the pain source.",
      difficulty: "Medium",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "plantar-heel-pain",
    },
    {
      text: "Which of the following is one of the strongest identified risk factors for plantar fasciopathy?",
      options: [
        "Excessive ankle dorsiflexion range",
        "Reduced ankle dorsiflexion (often from calf tightness)",
        "Low body weight",
        "Sedentary occupation with little standing",
      ],
      correctIndex: 1,
      explanation:
        "Reduced ankle dorsiflexion is among the strongest identified risk factors — a stiff ankle and tight calf increase strain transmitted through the fascia each step. Higher BMI, load spikes and prolonged standing occupations are the other key factors. Dorsiflexion is measurable (knee-to-wall) and modifiable, making it a treatment target.",
      difficulty: "Easy",
      tags: ["pathology", "assessment"],
      sectionSlug: "risk-factors",
    },
    {
      text: "A runner has progressive heel pain that worsens with every step and hurts on hopping. Squeezing the calcaneus from both sides reproduces the pain. What is the most appropriate next step?",
      options: [
        "Start high-load heel raises immediately",
        "Treat as plantar fasciopathy with taping",
        "Suspect calcaneal stress fracture — offload and refer for imaging",
        "Prescribe a night splint",
      ],
      correctIndex: 2,
      explanation:
        "Every-step progressive pain, impact pain and a positive calcaneal squeeze test point to calcaneal stress fracture rather than fasciopathy (which is first-step dominant and eases with warm-up). Loading a stress fracture risks progression — the correct action is relative offloading and imaging referral before any strengthening programme.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "precautions"],
      sectionSlug: "assessment-differentials",
    },
    {
      text: "Burning medial-plantar heel pain with tenderness deep to abductor hallucis (rather than at the calcaneal tubercle) and no first-step pattern suggests which diagnosis?",
      options: [
        "Classic plantar fasciopathy",
        "Entrapment of the first branch of the lateral plantar nerve (Baxter's nerve)",
        "Achilles tendinopathy",
        "Morton's neuroma",
      ],
      correctIndex: 1,
      explanation:
        "Baxter's nerve entrapment mimics plantar fasciopathy but declares itself with neural features: burning quality, tenderness over the nerve's course deep to abductor hallucis, sometimes radiation or abductor digiti minimi weakness, and the absence of the classic mechanical first-step pattern. It is a recognised cause of recalcitrant \"plantar fasciitis\".",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "anatomy"],
      sectionSlug: "assessment-differentials",
    },
    {
      text: "Heel pain accompanied by low back pain, shooting posterior leg symptoms and a positive straight-leg raise most suggests which source?",
      options: [
        "Fat pad atrophy",
        "S1 radicular pain referred from the lumbar spine",
        "Plantar fasciopathy",
        "Hallux valgus",
      ],
      correctIndex: 1,
      explanation:
        "The S1 nerve root refers to the posterior leg and heel: back pain, shooting or burning quality, positive neural tension tests, and possibly a diminished ankle reflex or calf weakness — typically with a non-tender heel. Every heel pain assessment includes a proximal screen when features don't fit the local mechanical pattern.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "assessment-differentials",
    },
    {
      text: "In the high-load slow strengthening protocol for plantar fasciopathy, why is a towel placed under the toes during heel raises?",
      options: [
        "For comfort on the step edge",
        "To keep the toes extended, engaging the windlass mechanism so the fascia is directly loaded",
        "To make balance easier",
        "To protect the toenails",
      ],
      correctIndex: 1,
      explanation:
        "With the toes extended over a rolled towel, the windlass winds the plantar fascia tight, so slow heavy heel raises load the fascia itself — not just the calf. In trial evidence this protocol (12RM × 3 sets, every other day, slow tempo) outperformed stretching alone at 3 months, and it builds the load tolerance that prevents recurrence.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "anatomy"],
      sectionSlug: "management-loading",
    },
    {
      text: "Which statement about heel spurs in plantar heel pain is correct?",
      options: [
        "The spur is the pain source and must be surgically removed",
        "Spurs are common in pain-free feet and are not the pain generator — treatment does not target the spur",
        "A spur on X-ray rules out plantar fasciopathy",
        "Spurs only occur in runners",
      ],
      correctIndex: 1,
      explanation:
        "Plantar calcaneal spurs are frequent incidental findings in asymptomatic feet, and their presence or size correlates poorly with symptoms. Imaging is not needed for a typical presentation, and \"chasing the spur\" — including surgical removal — is not the answer. The condition is a load-tolerance problem of the fascia, treated with load management and progressive strengthening.",
      difficulty: "Medium",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "plantar-heel-pain",
    },
    {
      text: "Why are repeated corticosteroid injections used cautiously in plantar heel pain?",
      options: [
        "They are too expensive for routine use",
        "They risk heel fat pad atrophy and plantar fascia rupture, and do not improve long-term outcomes",
        "They permanently cure the condition, removing the need for exercise",
        "They are only effective in athletes",
      ],
      correctIndex: 1,
      explanation:
        "Corticosteroid injection can give worthwhile short-term relief, but repeated injections carry recognised risks — atrophy of the specialised heel fat pad (creating a new, hard-to-treat pain source) and plantar fascia rupture — while long-term outcomes are no better than with loading-based care. It is an adjunct for selected persistent cases, not a routine treatment.",
      difficulty: "Hard",
      tags: ["management", "precautions"],
      sectionSlug: "management-loading",
    },
    {
      text: "What distinguishes INSERTIONAL Achilles tendinopathy from midportion tendinopathy in terms of mechanics?",
      options: [
        "Insertional problems involve compression of the tendon against the calcaneus in dorsiflexion, in addition to tensile load",
        "Insertional problems are purely tensile; midportion problems are compressive",
        "There is no mechanical difference",
        "Midportion tendinopathy only occurs in sedentary people",
      ],
      correctIndex: 0,
      explanation:
        "At the insertion, dorsiflexion presses the tendon (and retrocalcaneal bursa) against the calcaneus, adding a compressive element to the tensile load. Midportion tendinopathy (2–6 cm above the insertion) is a tensile overload problem. This is why insertional cases avoid below-level heel drops and aggressive dorsiflexion stretching early, and often settle with a temporary heel raise.",
      difficulty: "Medium",
      tags: ["pathology", "anatomy"],
      sectionSlug: "achilles-note",
    },
    {
      text: "Which early exercise modification is appropriate for insertional Achilles tendinopathy?",
      options: [
        "Full-range heel drops below step level from day one",
        "Heel raises performed only to floor level, avoiding end-range dorsiflexion, often with a temporary heel lift in shoes",
        "Aggressive calf stretching into maximum dorsiflexion three times daily",
        "Complete rest in a walking boot for three months in all cases",
      ],
      correctIndex: 1,
      explanation:
        "Because dorsiflexion compresses the insertion, early loading is done in reduced dorsiflexion range — raises to floor level rather than drops below a step — with a temporary in-shoe heel raise to cut compression during daily life. Range is restored progressively as symptoms settle. Aggressive stretching into dorsiflexion typically flares insertional cases.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "achilles-note",
    },
    {
      text: "A patient describes burning pain and tingling in the 3rd–4th toes with the sensation of a pebble in the shoe, worse in narrow footwear. What is the likely diagnosis?",
      options: ["Hallux valgus", "Morton's neuroma", "Plantar fasciopathy", "S1 radiculopathy"],
      correctIndex: 1,
      explanation:
        "Burning forefoot pain with toe tingling and a \"pebble in the shoe\" sensation, aggravated by narrow shoes and heels, is the classic story of Morton's neuroma — perineural fibrosis of an interdigital nerve, most often in the 3rd web space. A forefoot squeeze with web-space pressure may reproduce symptoms with a palpable Mulder's click. First-line care is wider toe-box footwear, lower heels and a metatarsal dome.",
      difficulty: "Easy",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "forefoot-basics",
    },
    {
      text: "Which management claim about hallux valgus is accurate?",
      options: [
        "Toe splints reliably correct the deformity if worn nightly",
        "Wide toe-box footwear, spacers for comfort and strengthening manage symptoms; splints do not correct the deformity and surgery is reserved for persistent pain",
        "Surgery is indicated for cosmetic improvement alone",
        "The condition never causes pain",
      ],
      correctIndex: 1,
      explanation:
        "Conservative care for hallux valgus targets symptoms and function: footwear with a wide toe box, pads or spacers for comfort, intrinsic and great-toe strengthening, and load management. No splint has been shown to correct the established deformity. Surgical referral is for persistent pain and functional limitation despite conservative care — not for appearance.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "forefoot-basics",
    },
    {
      text: "Bilateral heel pain in a 28-year-old with prolonged morning back stiffness and a history of psoriasis should raise suspicion of what?",
      options: [
        "Bilateral calcaneal stress fractures",
        "Enthesitis associated with spondyloarthropathy",
        "Simple bilateral plantar fasciopathy from overtraining",
        "Bilateral Morton's neuromas",
      ],
      correctIndex: 1,
      explanation:
        "Enthesitis — inflammation at tendon and fascia insertions, including the plantar fascia and Achilles — is a feature of spondyloarthropathies. Bilateral heel pain in a young adult with inflammatory features (morning back stiffness improving with movement, psoriasis, uveitis, IBD, family history) warrants rheumatological screening rather than a purely mechanical management plan.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "precautions"],
      sectionSlug: "assessment-differentials",
    },
    {
      text: "What is the primary purpose of \"short-foot\" intrinsic muscle exercises in plantar heel pain rehabilitation?",
      options: [
        "To stretch the plantar fascia",
        "To train the arch's active muscular support so load is shared with the plantar fascia",
        "To strengthen the quadriceps",
        "To directly shrink a heel spur",
      ],
      correctIndex: 1,
      explanation:
        "The intrinsic foot muscles are an active support system for the medial longitudinal arch. Training them (doming the arch without curling the toes, progressing from sitting to single-leg standing) improves the foot's capacity to share load that would otherwise fall on passive structures — including the fascia. It complements, but does not replace, the heavy calf-fascia loading work.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "anatomy"],
      sectionSlug: "exercise-blocks",
    },
    {
      text: "Which outcome marker is most useful for tracking week-to-week progress in plantar fasciopathy?",
      options: [
        "Size of the heel spur on repeat X-rays",
        "Morning first-step pain rated 0–10",
        "Daily body temperature",
        "Shoe size",
      ],
      correctIndex: 1,
      explanation:
        "First-step pain is the condition's signature symptom and its most responsive marker: patients rate the first steps of the morning 0–10 and track the trend weekly. A downward trend over weeks confirms the loading programme is dosed correctly. Imaging has no monitoring role — spurs don't change with recovery.",
      difficulty: "Easy",
      tags: ["assessment", "management"],
      sectionSlug: "exercise-blocks",
    },
    {
      text: "Central heel pad pain that is worst walking barefoot on hard floors, with tenderness in the middle of the heel rather than the medial tubercle, suggests what?",
      options: [
        "Fat pad irritation or atrophy",
        "Classic plantar fasciopathy",
        "Insertional Achilles tendinopathy",
        "Windlass dysfunction",
      ],
      correctIndex: 0,
      explanation:
        "The heel fat pad is a separate shock-absorbing structure: its irritation or age-related atrophy causes CENTRAL heel pain provoked by direct impact — barefoot on hard floors, hard-soled shoes — with central rather than medial-tubercle tenderness and no windlass reproduction. Management emphasises cushioning (gel heel cups, footwear) over fascia loading.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "assessment-differentials",
    },
    {
      text: "A patient with plantar fasciopathy asks how long recovery will take with a proper loading programme. Which answer sets accurate expectations?",
      options: [
        "\"Two or three sessions of treatment should fix it\"",
        "\"Most people improve substantially, but over months — commonly 6–12 — and consistency with loading is what gets you there\"",
        "\"It never gets better\"",
        "\"Only surgery can resolve it\"",
      ],
      correctIndex: 1,
      explanation:
        "Plantar fasciopathy has a benign but slow course: most cases resolve with conservative care, but over months rather than weeks, and trial protocols run 3+ months before full effects appear. Honest timeframes protect adherence to the every-other-day loading programme — the factor that most determines outcome — and prevent cycles of abandoned treatments.",
      difficulty: "Easy",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "management-loading",
    },
  ],
  flashcards: [
    { front: "Describe the windlass mechanism.", back: "Big-toe extension winds the plantar fascia around the metatarsal head, tensioning it — the arch rises and the foot stiffens into a rigid lever for push-off." },
    { front: "Signature symptom of plantar fasciopathy?", back: "First-step pain: sharp medial heel pain on the first steps after waking or prolonged sitting, easing as activity warms the tissue up." },
    { front: "Why 'fasciopathy' rather than 'fasciitis'?", back: "Histology shows degenerative, disorganised collagen (like tendinopathy), not acute inflammation — so treatment is progressive loading, not rest." },
    { front: "Key risk factors for plantar heel pain?", back: "Load spike, higher BMI, reduced ankle dorsiflexion/calf tightness, and prolonged standing occupations." },
    { front: "How do you screen for calcaneal stress fracture?", back: "Progressive every-step and impact pain (not first-step dominant) + positive calcaneal squeeze test → offload and image before loading." },
    { front: "Features suggesting Baxter's nerve entrapment?", back: "Burning medial-plantar heel pain, tenderness deep to abductor hallucis (not the tubercle), no classic first-step pattern, possible abductor digiti minimi weakness." },
    { front: "The best-evidenced loading exercise for plantar fasciopathy?", back: "Slow heavy heel raises with a rolled towel under the toes (windlass engaged): 3s up, 2s pause, 3s down, ~12RM × 3 sets every other day, progressing load." },
    { front: "Risks of repeated corticosteroid injection into the heel?", back: "Heel fat pad atrophy and plantar fascia rupture; short-term relief only, with no long-term outcome benefit." },
    { front: "Insertional vs midportion Achilles — key management difference?", back: "Insertional adds compression in dorsiflexion: avoid below-level heel drops and aggressive dorsiflexion stretching early; use a temporary heel raise. Midportion tolerates full-range loading." },
    { front: "Classic presentation of Morton's neuroma?", back: "Burning 3rd–4th web-space forefoot pain with toe tingling and a 'pebble in the shoe' feeling, worse in narrow shoes; Mulder's click on squeeze. Manage with wide toe box, lower heels, metatarsal dome." },
    { front: "Do heel spurs cause plantar heel pain?", back: "No — spurs are common incidental findings in pain-free feet and are not the pain generator; treatment never targets the spur." },
    { front: "Best week-to-week progress marker in plantar fasciopathy?", back: "Morning first-step pain rated 0–10 — a downward trend over weeks confirms correct load dosing." },
  ],
};

export default topic;
