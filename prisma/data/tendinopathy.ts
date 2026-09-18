import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "tendinopathy",
  title: "Tendon Disorders & Tendinopathy",
  category: "Musculoskeletal",
  description:
    "Understand how tendons respond to load, the continuum model of tendinopathy, why \"tendinitis\" is a misnomer, and how to build the progressive loading programmes that form the core of treatment.",
  difficulty: "Intermediate",
  estMinutes: 27,
  icon: "link",
  keyTakeaways: [
    "Tendinopathy is primarily a failed-healing, degenerative load-response problem — histology shows disorganised collagen and increased ground substance, not the inflammatory cell picture that \"tendinitis\" implies.",
    "The continuum model describes reactive tendinopathy, tendon dysrepair and degenerative tendinopathy as overlapping stages driven by the balance between load and capacity.",
    "The cardinal clinical features are localised pain that is load-related, a dose-dependent 24-hour response, and the warm-up phenomenon.",
    "Progressive loading is the treatment — isometrics for pain relief, heavy slow resistance to rebuild capacity, then energy-storage loading for spring-like function.",
    "Complete rest deconditions the tendon; symptoms often return the moment load resumes.",
    "Corticosteroid injection may relieve pain short-term but is associated with worse long-term outcomes than exercise-based care.",
    "Compression against bone aggravates insertional tendinopathies — avoid deep stretch positions early in gluteal, hamstring and insertional Achilles presentations.",
    "Sudden loss of function with a snap suggests rupture; systemic or inflammatory features suggest the problem is not a simple load-related tendinopathy.",
  ],
  sections: [
    {
      slug: "overview",
      title: "Overview: Tendons & Tendinopathy",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Tendons transmit muscle force to bone, and the big lower-limb tendons also act as biological springs, storing and releasing elastic energy during running and jumping. Tendinopathy — persistent tendon pain and dysfunction related to loading — is the umbrella term now preferred over \"tendinitis\".",
        },
        {
          kind: "paragraph",
          text: "Tendinopathy affects athletes and non-athletes alike: the jumping athlete's patellar tendon, the runner's Achilles, the desk worker's lateral elbow, and the post-menopausal woman's gluteal tendons. Across all of them the same principles apply — pain is load-related, and graded loading is the treatment.",
        },
        {
          kind: "keypoints",
          title: "Defining features of tendinopathy",
          items: [
            "Localised pain over the tendon that behaves in a dose-dependent way with load",
            "Pain with energy-storage activity (jumping, running, gripping) more than steady low load",
            "Often a \"warm-up phenomenon\" — pain eases during activity, returns after",
            "Morning pain and stiffness (classically the first steps in Achilles tendinopathy)",
          ],
        },
        {
          kind: "pearls",
          items: [
            "A tendon problem rarely hurts diffusely — well-localised, one-finger pain over a tendon is a strong pointer.",
          ],
        },
      ],
    },
    {
      slug: "tendon-structure",
      title: "Tendon Structure & Load Response",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "A healthy tendon is mostly densely packed type I collagen, arranged in parallel fibrils and bundles with a slight crimp, embedded in a small amount of ground substance (proteoglycans and water) maintained by sparse tenocytes. This architecture gives high tensile strength with a little elastic give.",
        },
        {
          kind: "cards",
          items: [
            { title: "Type I collagen", text: "The workhorse fibre — parallel bundles aligned with the direction of pull provide tensile strength.", icon: "align-justify" },
            { title: "Tenocytes", text: "Sparse resident cells that sense mechanical load (mechanotransduction) and continuously remodel the matrix in response.", icon: "cpu" },
            { title: "Ground substance", text: "Proteoglycans and water. Small amounts normally; markedly increased in pathological tendon.", icon: "droplet" },
            { title: "Blood supply", text: "Relatively poor, especially in mid-tendon regions (e.g. the Achilles 2–6 cm above insertion) — one reason tendon adapts and heals slowly.", icon: "heart" },
          ],
        },
        {
          kind: "paragraph",
          text: "Tendon is mechanoresponsive: appropriate progressive loading stimulates collagen synthesis and stiffens the tendon, while unloading (rest, immobilisation) rapidly reduces stiffness and load capacity. Adaptation is slow — tendon turnover is far slower than muscle — so both conditioning and rehabilitation are measured in months.",
        },
        {
          kind: "keypoints",
          title: "Types of tendon load",
          items: [
            "Tensile load: the pull of muscle contraction — the basic stimulus for adaptation",
            "Energy-storage load: rapid stretch–shorten cycles (jumping, sprinting) — the highest tendon loads and the usual provocateur of symptoms",
            "Compressive load: tendon pressed against bone near insertions (e.g. gluteal tendons over the greater trochanter) — a key aggravator in insertional tendinopathy",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Tendinopathy is fundamentally a mismatch between the load applied and the tendon's current capacity — usually a spike in energy-storage load after a period of doing less.",
          ],
        },
      ],
    },
    {
      slug: "continuum-model",
      title: "The Continuum Model of Tendon Pathology",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Cook and Purdam's continuum model describes tendon pathology as a spectrum of states along which a tendon can move, driven mainly by how it is loaded. It explains why the same diagnosis can look very different in a 19-year-old jumper and a 55-year-old runner, and why management differs by stage.",
        },
        {
          kind: "steps",
          items: [
            { title: "1. Reactive tendinopathy", text: "A short-term, non-inflammatory adaptive response to acute overload (a sudden spike in load or direct compression). Tenocytes proliferate and produce proteoglycans that bind water — the tendon swells and thickens diffusely but collagen remains largely intact. Fully reversible if load is reduced." },
            { title: "2. Tendon dysrepair", text: "With continued overload, the matrix becomes disorganised: increased ground substance, collagen separation, increased cellularity, and ingrowth of vessels and nerves. Some reversibility remains with well-structured loading." },
            { title: "3. Degenerative tendinopathy", text: "Areas of cell death, matrix breakdown and disorganised, non-load-bearing tissue within the tendon — typically in older or chronically overloaded tendons. These islands are probably not reversible; treatment builds the capacity of the healthy tissue around them (\"treat the doughnut, not the hole\")." },
          ],
        },
        {
          kind: "paragraph",
          text: "A clinically vital hybrid is the \"reactive-on-degenerative\" presentation: a chronically degenerative tendon whose remaining normal portion is acutely overloaded and becomes reactive — the typical acute flare in a middle-aged runner's Achilles.",
        },
        {
          kind: "keypoints",
          title: "Why \"tendinitis\" is a misnomer",
          items: [
            "Histology of painful chronic tendons shows degenerative change — disorganised collagen, increased ground substance, neovascularisation — with few or no inflammatory cells",
            "Calling it \"-itis\" leads patients (and clinicians) towards rest and anti-inflammatory treatment, which do not address the load-capacity problem",
            "\"Tendinopathy\" (clinical syndrome) and \"tendinosis\" (degenerative histology) are the preferred terms; some inflammatory signalling exists, but it is not classic inflammation",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Imaging shows the state of the tendon, not the source of pain: many degenerative tendons on ultrasound are painless. Treat the clinical presentation.",
          ],
        },
      ],
    },
    {
      slug: "common-sites",
      title: "Common Sites & Presentations",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "A handful of tendons account for most presentations. Each has a characteristic patient, aggravating load and pain location.",
        },
        {
          kind: "image",
          illustration: "rotator-cuff",
          caption: "The rotator cuff tendons converging on the humeral head — cuff-related shoulder pain is one of the most common tendinopathy presentations, aggravated by overhead load.",
        },
        {
          kind: "table",
          headers: ["Tendon", "Typical patient & trigger", "Hallmark features"],
          rows: [
            ["Mid-portion Achilles", "Runner, 30–60, after a spike in volume or hills", "Pain and morning stiffness 2–6 cm above the heel; fusiform thickening; warm-up phenomenon"],
            ["Insertional Achilles", "Runner or walker; hill running, tight footwear", "Pain at the heel-bone attachment; aggravated by dorsiflexion (compression) — avoid deep heel drops early"],
            ["Patellar", "Young jumping athlete (volleyball, basketball)", "One-finger pain at the inferior pole of the patella; worse with jumping, decline squat provocation"],
            ["Rotator cuff (supraspinatus)", "Overhead worker or athlete; middle age onwards", "Painful arc, pain with overhead load and lying on the shoulder; weakness in abduction/external rotation if severe"],
            ["Lateral elbow (extensor origin)", "Manual worker or desk worker 35–55; gripping load", "Pain at the lateral epicondyle with gripping and resisted wrist extension"],
            ["Gluteal (medius/minimus)", "Post-menopausal woman; sudden increase in walking or hills", "Lateral hip pain over the greater trochanter; worse lying on that side, crossing legs, standing on one leg"],
            ["Proximal hamstring", "Distance runner; hill work, stretching", "Deep buttock pain at the ischial tuberosity; worse sitting on hard surfaces, driving, deep hip flexion"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "Insertional presentations (Achilles insertion, gluteal, proximal hamstring) share a compression component — positions of stretch push the tendon against bone and aggravate them.",
            "\"Tennis elbow\" is rarely from tennis and \"jumper's knee\" pain almost never leaves the inferior pole of the patella — location is diagnostic gold.",
          ],
        },
      ],
    },
    {
      slug: "assessment",
      title: "Assessment of Tendinopathy",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Tendinopathy is a clinical diagnosis built on the load–pain relationship. The subjective history usually tells you the diagnosis; physical testing confirms the location and establishes baseline capacity to progress against.",
        },
        {
          kind: "steps",
          items: [
            { title: "History: find the load story", text: "Ask what changed in the 2–12 weeks before onset — training volume, new activity, hills, footwear, time off then sudden return. Establish the 24-hour pattern: pain during, after, and especially the next morning." },
            { title: "Localise the pain", text: "Ask the patient to point with one finger. Tendon pain stays local to the tendon; diffuse or spreading pain suggests another or an additional source." },
            { title: "Load tests (graded provocation)", text: "Reproduce pain with progressively higher tendon loads: e.g. Achilles — heel raise → hop; patellar — squat → single-leg decline squat; lateral elbow — resisted wrist extension/grip; gluteal — single-leg stance 30 s, resisted abduction; hamstring — long-lever bridge, deep hip flexion loading." },
            { title: "Assess capacity, not just pain", text: "Count single-leg heel raises, assess calf and quadriceps strength, hop tolerance — deficits define the rehab targets." },
            { title: "Track with a validated measure", text: "The VISA questionnaires (VISA-A for Achilles, VISA-P for patellar, VISA-G for gluteal) score pain, function and sporting activity out of 100 and are re-administered every few weeks to track progress." },
          ],
        },
        {
          kind: "paragraph",
          text: "The 24-hour response to load is the key monitoring tool: a stable or improving next-morning pain level means the current load is tolerable; a clear next-morning flare means the previous day exceeded capacity.",
        },
        {
          kind: "redflags",
          items: [
            "Sudden \"snap\" with immediate loss of function — suspect tendon rupture (positive calf squeeze/Thompson test for Achilles); urgent referral",
            "Marked weakness after trauma in the shoulder — consider full-thickness cuff tear, especially in older adults",
            "Bilateral tendon pain, systemic symptoms, psoriasis or inflammatory back pain — consider spondyloarthropathy or systemic disease rather than load-related tendinopathy",
            "Recent fluoroquinolone antibiotics or long-term corticosteroids — raised rupture risk; load cautiously and inform the medical team",
            "Unremitting night pain or a mass — not typical of tendinopathy; refer for investigation",
          ],
        },
        {
          kind: "pearls",
          items: [
            "If you cannot make the pain worse with tendon load and better with rest, question the diagnosis.",
          ],
        },
      ],
    },
    {
      slug: "management-principles",
      title: "Management: Progressive Loading Is King",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Every evidence-based pathway for tendinopathy has progressive loading at its centre. The aim is not to \"heal the hole\" on imaging but to rebuild the load capacity of the muscle–tendon unit and the confidence of the person attached to it.",
        },
        {
          kind: "steps",
          items: [
            { title: "Stage 1 — Settle: manage load + isometrics", text: "Reduce (not stop) aggravating energy-storage and compressive loads. Heavy isometric holds (e.g. 5 × 45 s at ~70% max) can reduce tendon pain for hours and maintain capacity — useful when the tendon is highly irritable or in-season." },
            { title: "Stage 2 — Rebuild: heavy slow resistance (HSR)", text: "Progressive heavy, slow isotonic strengthening (e.g. 3–4 sessions/week, working towards 3–4 sets of 6–8 reps at high load, ~3 s up / 3 s down). HSR and classic eccentric programmes both work; HSR tends to have better adherence and equal outcomes." },
            { title: "Stage 3 — Spring: energy-storage loading", text: "Reintroduce the stretch–shorten cycle progressively: heel-raise springs → skipping → hopping → jumping/sprinting for lower-limb tendons. Loads jump dramatically here, so space sessions 2–3 days apart initially." },
            { title: "Stage 4 — Return to sport", text: "Graduated return to full training and competition, monitored with the 24-hour rule, while maintaining a strength \"floor\" of 1–2 heavy sessions per week long-term." },
          ],
        },
        {
          kind: "keypoints",
          title: "Dosing rules of thumb",
          items: [
            "Pain up to ~3–4/10 during loading is acceptable if it settles and next-morning pain is not trending up",
            "Tendons like heavy and slow before fast and springy",
            "Adaptation takes months — meaningful change at 12 weeks, full programmes often 3–6+ months",
            "Never progress load and speed in the same week for an irritable tendon",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Isometrics are an analgesic tool, not a complete treatment — the middle of the programme (heavy slow strength) does the rebuilding.",
            "Education is half the treatment: patients who understand the load–capacity model stop rest-seeking and start training.",
          ],
        },
      ],
    },
    {
      slug: "loading-programme",
      title: "Loading Programme: Key Exercises",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "The exercises below illustrate the staged loading approach for the most common lower- and upper-limb tendinopathies. The principles — isometric to settle, heavy slow to rebuild, springs to return — transfer to any tendon.",
        },
        {
          kind: "image",
          illustration: "resistance-band",
          caption: "Elastic resistance is a convenient way to dose early isotonic and isometric tendon loading at home, before progressing to heavier gym-based slow resistance.",
        },
        {
          kind: "exercise",
          name: "Isometric wall sit / Spanish squat (patellar tendon)",
          purpose: "Analgesic, capacity-maintaining isometric load for reactive or in-season patellar tendinopathy.",
          position: "Standing with a rigid strap or band behind the knees anchored to a rack, or back against a wall; knees at ~70–90°.",
          execution: "Sit back against the strap keeping the trunk upright, quadriceps loaded, and hold.",
          dosage: "5 holds of 45 seconds at ~70% of maximal effort, 1–2×/day; 2 minutes rest between holds.",
          progression: "Increase depth or move to single-leg holds; transition to heavy slow resistance as irritability settles.",
          precautions: "Pain during holds should stay ≤3–4/10 and typically decreases across the set.",
        },
        {
          kind: "exercise",
          name: "Heavy slow resistance calf raise (mid-portion Achilles)",
          purpose: "Rebuild Achilles tendon and calf capacity with heavy, slow tensile load.",
          position: "Standing calf-raise or leg-press machine; full range through a step edge for mid-portion presentations, floor level only for insertional presentations.",
          execution: "Rise over 3 seconds, lower over 3 seconds — no bouncing. Work single-leg as soon as strength allows.",
          dosage: "3–4 sets of 6–8 reps at a genuinely heavy load, 3×/week.",
          progression: "Add load progressively (backpack, machine); progress to seated soleus work and then to spring loading.",
          precautions: "Next-morning pain and stiffness is the progression gauge — hold or reduce load if it trends upwards.",
        },
        {
          kind: "exercise",
          name: "Single-leg decline squat (patellar tendon, stage 2)",
          purpose: "Isolates knee-extensor loading on the patellar tendon through range.",
          position: "Standing on a 25° decline board on one leg, hand support nearby.",
          execution: "Squat slowly to ~60° knee flexion over 3 seconds, return over 3 seconds, trunk upright to keep load on the quadriceps.",
          dosage: "3–4 sets of 6–8, every second day; add load with a backpack or vest.",
          progression: "Increase load, then reintroduce jumping via low-amplitude pogo hops.",
          precautions: "Stable pain ≤3–4/10 during sets is acceptable; sharp escalating pain is not.",
        },
        {
          kind: "exercise",
          name: "Side-lying hip abduction with band (gluteal tendinopathy)",
          purpose: "Strengthen gluteus medius/minimus while avoiding compressive positions.",
          position: "Side-lying with the affected side up, body in slight hip abduction supported by pillows between the knees — never in adduction.",
          execution: "Raise the top leg 10–15 cm in line with the trunk (slight extension), lower with control. Keep the pelvis stacked.",
          dosage: "3 sets of 8–12, every other day; begin with low-load bridging and standing abduction against a band if side-lying is irritable.",
          progression: "Add ankle weight/band tension → standing single-leg loading → step-ups and loaded carries.",
          precautions: "Avoid hanging on one hip, crossing legs and stretching the ITB region — adduction compresses the tendons against the trochanter.",
        },
        {
          kind: "exercise",
          name: "Eccentric-concentric wrist extension (lateral elbow)",
          purpose: "Graded loading of the common extensor origin for lateral elbow tendinopathy.",
          position: "Forearm supported on a table, palm down, wrist over the edge, light dumbbell in hand.",
          execution: "Extend the wrist, then lower slowly over 3–4 seconds through full available range. Use the other hand to assist the lift if the concentric phase is too painful.",
          dosage: "3 sets of 10–15 daily, progressing to 3 sets of 8 with heavier load 3×/week.",
          progression: "Increase load, add grip endurance work, then task-specific loading (racquet, tools).",
          precautions: "Temporary counterforce bracing and modifying grip-heavy tasks can keep daily symptoms manageable while capacity builds.",
        },
        {
          kind: "keypoints",
          title: "Programme design essentials",
          items: [
            "One key loading exercise done well beats five done poorly — keep programmes simple and heavy",
            "Strength changes precede pain resolution in some patients and lag it in others; track both",
            "Reintroduce energy-storage loading before returning to sport, not instead of it",
          ],
        },
      ],
    },
    {
      slug: "what-doesnt-work",
      title: "What Doesn't Work Well",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "As important as knowing the treatment is knowing what fails. Most passive approaches either do nothing for capacity or actively undermine it.",
        },
        {
          kind: "cards",
          items: [
            { title: "Complete rest", text: "Unloading reduces tendon stiffness and capacity — pain often settles with rest and promptly returns with activity. Relative load management, not rest, is the strategy.", icon: "pause" },
            { title: "Corticosteroid injection", text: "Good short-term pain relief, but trials (notably in lateral elbow pain) show worse outcomes and higher recurrence at 6–12 months compared with exercise or even wait-and-see. Repeated injections weaken tendon tissue.", icon: "alert-triangle" },
            { title: "Anti-inflammatory reliance", text: "Since chronic tendinopathy is not primarily inflammatory, NSAIDs offer modest short-term analgesia at best and change nothing about capacity.", icon: "x-circle" },
            { title: "Passive modalities alone", text: "Ultrasound, friction massage and shockwave without a loading programme address neither the pathology nor the capacity deficit; shockwave may help selected cases only as an adjunct.", icon: "zap-off" },
            { title: "Aggressive stretching", text: "In insertional/compressive tendinopathies (gluteal, proximal hamstring, insertional Achilles), stretching adds compression at the enthesis and commonly aggravates symptoms.", icon: "minimize-2" },
          ],
        },
        {
          kind: "warning",
          title: "Common management mistakes",
          items: [
            "Prescribing rest until pain-free, then returning straight to the previous load — the classic flare cycle",
            "Chasing imaging findings — degenerative change on scan is common in painless tendons and does not dictate treatment",
            "Under-dosing the strength work — light, high-rep exercise rarely changes a tendon problem",
            "Skipping the energy-storage stage and returning to sport straight from gym work",
          ],
        },
        {
          kind: "pearls",
          items: [
            "If a patient has had three injections and no structured loading, they have not yet had first-line treatment.",
          ],
        },
      ],
    },
    {
      slug: "compression-factor",
      title: "Compression as an Aggravator",
      estMinutes: 2,
      difficulty: "Advanced",
      content: [
        {
          kind: "paragraph",
          text: "Insertional tendinopathies behave differently from mid-tendon ones because of compression: near its bony attachment, a tendon wrapping around bone experiences compressive as well as tensile load. Positions that lengthen the muscle–tendon unit press the tendon harder against the bone — combined tensile-plus-compressive load is the most provocative stimulus of all.",
        },
        {
          kind: "table",
          headers: ["Tendinopathy", "Compressive position to limit early", "Practical advice"],
          rows: [
            ["Gluteal (greater trochanter)", "Hip adduction — crossing legs, hanging on one hip, side-lying on the painful side, ITB stretches", "Sleep with a pillow between the knees; stand evenly; strengthen abductors in neutral"],
            ["Proximal hamstring (ischial tuberosity)", "Deep hip flexion — sitting on hard surfaces, forward bends, hamstring stretching, hill striding", "Cushioned or standing work options; load hamstrings initially in minimal hip flexion (bridges) before long-lever work"],
            ["Insertional Achilles (calcaneus)", "End-range dorsiflexion — heel drops below a step, uphill running, low-drop footwear", "Calf raises to floor level only at first; a small heel raise in shoes can settle symptoms"],
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Mid-portion tendinopathy tolerates and benefits from full-range loading; insertional tendinopathy needs compression managed first",
            "Reduce compressive positions early, then reintroduce range progressively as the tendon desensitises",
            "This is why generic \"stretch it\" advice frequently makes insertional presentations worse",
          ],
        },
        {
          kind: "pearls",
          items: [
            "For lateral hip pain, the humble pillow between the knees at night is often the single highest-value early intervention.",
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
            "Tendinopathy = load-related, well-localised tendon pain; histology is degenerative, not inflammatory — hence \"itis\" is a misnomer",
            "Continuum: reactive → dysrepair → degenerative; reactive-on-degenerative is the common clinical flare",
            "Hallmarks: dose-dependent load response, morning stiffness, warm-up phenomenon, one-finger localisation",
            "Assessment: load story, graded provocation tests, capacity measures, VISA questionnaires to track",
            "Treatment ladder: manage load + isometrics → heavy slow resistance → energy storage → return to sport",
            "Weak options: rest, long-term reliance on corticosteroid injection, passive modalities alone, stretching insertional tendons",
            "Compression aggravates insertional presentations — control adduction (gluteal), deep hip flexion (hamstring), end-range dorsiflexion (insertional Achilles)",
            "Red flags: sudden snap/rupture, systemic or inflammatory features, fluoroquinolone exposure",
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
      text: "Why is the term \"tendinitis\" considered a misnomer for chronic tendon pain?",
      options: [
        "Because tendons have no nerve supply and cannot be painful",
        "Because histology shows degenerative matrix change with few inflammatory cells",
        "Because the condition only affects muscle, not tendon",
        "Because all tendon pain comes from the surrounding bursa",
      ],
      correctIndex: 1,
      explanation:
        "Biopsy studies of chronic painful tendons show disorganised collagen, increased ground substance, increased cellularity and neovascularisation — a failed-healing, degenerative picture — with little classic inflammatory cell infiltrate. \"Tendinopathy\" is therefore preferred, and it explains why rest and anti-inflammatory strategies underperform.",
      difficulty: "Easy",
      tags: ["pathology"],
      sectionSlug: "continuum-model",
    },
    {
      text: "In the continuum model, what characterises reactive tendinopathy?",
      options: [
        "Irreversible cell death and matrix breakdown",
        "A short-term, largely reversible proliferative response with tendon swelling after acute overload",
        "Bony spur formation at the enthesis",
        "Rupture of more than 50% of tendon fibres",
      ],
      correctIndex: 1,
      explanation:
        "Reactive tendinopathy is a non-inflammatory adaptive response to a load spike or compression: tenocytes produce water-binding proteoglycans, thickening the tendon while collagen stays largely intact. With load management it is fully reversible — unlike the degenerative stage.",
      difficulty: "Easy",
      tags: ["pathology"],
      sectionSlug: "continuum-model",
    },
    {
      text: "\"Treat the doughnut, not the hole\" refers to which management concept in degenerative tendinopathy?",
      options: [
        "Surgically excising the degenerative core",
        "Building the capacity of the remaining healthy tendon tissue rather than trying to reverse the degenerative island",
        "Injecting the degenerative area to regenerate it",
        "Stretching the tendon to redistribute load into the hole",
      ],
      correctIndex: 1,
      explanation:
        "Degenerative islands within a tendon are probably not reversible, but they are surrounded by tissue that adapts normally. Progressive loading strengthens this healthy portion (the doughnut) so overall capacity exceeds demand — the hole itself does not need to change for the patient to recover.",
      difficulty: "Medium",
      tags: ["pathology", "management"],
      sectionSlug: "continuum-model",
    },
    {
      text: "Which type of load places the greatest demand on the Achilles and patellar tendons?",
      options: [
        "Sustained isometric load",
        "Slow concentric load",
        "Energy-storage load during rapid stretch–shorten activities like jumping and sprinting",
        "Passive stretch at rest",
      ],
      correctIndex: 2,
      explanation:
        "Energy-storage-and-release loading — the rapid stretch–shorten cycle of jumping, hopping and sprinting — generates the highest tendon forces. It is the usual symptom provocateur and therefore the final stage to be reintroduced in rehabilitation.",
      difficulty: "Easy",
      tags: ["pathology", "exercise-therapy"],
      sectionSlug: "tendon-structure",
    },
    {
      text: "A 52-year-old woman has lateral hip pain that is worse lying on that side at night and when standing with her weight hung on one hip. What is the most likely diagnosis?",
      options: [
        "Hip joint osteoarthritis",
        "Gluteal tendinopathy aggravated by compression in adduction",
        "L5 radiculopathy",
        "Femoral neck stress fracture",
      ],
      correctIndex: 1,
      explanation:
        "Lateral hip pain over the greater trochanter in a post-menopausal woman, aggravated by side-lying and adduction postures (hip hanging, crossing legs), is the classic presentation of gluteal (medius/minimus) tendinopathy. Adduction compresses the tendons against the trochanter — which is why management starts by controlling those positions.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "common-sites",
    },
    {
      text: "What is the primary clinical use of heavy isometric holds in tendinopathy management?",
      options: [
        "They reverse degenerative tissue change within weeks",
        "They provide pain relief and maintain load capacity when the tendon is irritable or in-season",
        "They replace the need for any other strengthening",
        "They stretch the tendon to full length",
      ],
      correctIndex: 1,
      explanation:
        "Heavy isometrics (e.g. 5 × 45-second holds at ~70% max) can reduce tendon pain for hours and keep some tensile load on the tissue without provoking it — ideal for irritable presentations and in-season athletes. They are an analgesic and holding strategy; heavy slow resistance does the rebuilding.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "management-principles",
    },
    {
      text: "Which prescription best represents heavy slow resistance (HSR) for mid-portion Achilles tendinopathy?",
      options: [
        "3 sets of 30 fast bodyweight heel bounces daily",
        "3–4 sets of 6–8 slow, heavy calf raises (about 3 s up, 3 s down), around 3 sessions per week",
        "Daily 20-minute calf stretching",
        "5-second submaximal holds once per week",
      ],
      correctIndex: 1,
      explanation:
        "HSR uses genuinely heavy loads at slow tempo — around 6–8 reps for 3–4 sets, ~3 seconds in each direction, 3×/week — to drive tendon adaptation. Light, fast or infrequent loading fails to provide an adaptive stimulus; stretching does not address capacity.",
      difficulty: "Medium",
      tags: ["exercise-therapy"],
      sectionSlug: "loading-programme",
    },
    {
      text: "Why should patients with insertional Achilles tendinopathy initially avoid heel drops below step level?",
      options: [
        "Below-level work only trains the soleus",
        "End-range dorsiflexion compresses the tendon against the calcaneus, combining compressive with tensile load",
        "The exercise is too easy to be useful",
        "It overstretches the plantar fascia",
      ],
      correctIndex: 1,
      explanation:
        "Near its insertion the Achilles wraps against the calcaneus; end-range dorsiflexion presses the tendon onto the bone. Combined compression plus tension is the most provocative load state, so insertional presentations are loaded to floor level first, with range reintroduced as symptoms allow — a small heel raise can help early.",
      difficulty: "Hard",
      tags: ["pathology", "exercise-therapy", "clinical-reasoning"],
      sectionSlug: "compression-factor",
    },
    {
      text: "What is the best single monitoring tool for judging whether tendon loading is being dosed correctly?",
      options: [
        "Pain intensity during the session only",
        "Weekly ultrasound imaging of tendon thickness",
        "The 24-hour (especially next-morning) symptom response to the previous day's load",
        "Skin temperature over the tendon",
      ],
      correctIndex: 2,
      explanation:
        "Tendon symptoms respond to load in a delayed, dose-dependent way: next-morning pain and stiffness reflect whether yesterday's total load exceeded capacity. Stable or improving 24-hour responses permit progression; a clear next-morning flare means reduce. Imaging does not track clinical progress.",
      difficulty: "Medium",
      tags: ["assessment", "management"],
      sectionSlug: "assessment",
    },
    {
      text: "What are the VISA questionnaires (e.g. VISA-A, VISA-P) designed to do?",
      options: [
        "Grade tendon degeneration on ultrasound",
        "Quantify pain, function and sporting activity for a specific tendinopathy as a trackable score out of 100",
        "Screen for inflammatory arthritis",
        "Measure isometric strength in newtons",
      ],
      correctIndex: 1,
      explanation:
        "The VISA family are condition-specific patient-reported outcome measures (Achilles, patellar, gluteal versions) scoring pain, function and activity out of 100. Re-administered every few weeks, they provide a standardised way to track rehabilitation progress — not an imaging or strength measure.",
      difficulty: "Easy",
      tags: ["assessment"],
      sectionSlug: "assessment",
    },
    {
      text: "A patient with lateral elbow pain asks for a corticosteroid injection because a previous one \"fixed it for a month\". What does the evidence show about corticosteroid injection for this condition?",
      options: [
        "It gives the best outcomes at every time point",
        "Short-term relief but worse outcomes and higher recurrence at 6–12 months than exercise or wait-and-see",
        "It permanently strengthens the tendon",
        "It works only if combined with complete rest",
      ],
      correctIndex: 1,
      explanation:
        "Trials in lateral elbow tendinopathy show corticosteroid injection wins at 6 weeks but loses by 6–12 months, with higher recurrence than physiotherapy or even wait-and-see. Repeated injections are also associated with tendon tissue weakening. The pattern — short-term relief, worse long-term course — is exactly what the patient described.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "what-doesnt-work",
    },
    {
      text: "Why does complete rest fail as a treatment for tendinopathy?",
      options: [
        "Because pain always increases during rest",
        "Because unloading further reduces tendon stiffness and capacity, so symptoms return when activity resumes",
        "Because rest increases inflammatory cell infiltration",
        "Because tendons only heal during exercise sessions",
      ],
      correctIndex: 1,
      explanation:
        "Tendon is mechanoresponsive in both directions: unloading rapidly decreases stiffness and load tolerance. Rest often eases pain temporarily, but the tendon returns to activity with less capacity than before — the classic settle-flare cycle. Management modifies load while maintaining a training stimulus.",
      difficulty: "Easy",
      tags: ["management", "pathology"],
      sectionSlug: "what-doesnt-work",
    },
    {
      text: "Which early advice is most appropriate for gluteal tendinopathy?",
      options: [
        "Daily ITB stretching in hip adduction",
        "Sleep with a pillow between the knees and avoid crossing the legs or hanging on one hip",
        "Side-lying directly on the painful hip to desensitise it",
        "Complete bed rest for two weeks",
      ],
      correctIndex: 1,
      explanation:
        "Adduction positions compress gluteus medius/minimus tendons against the greater trochanter. Early management removes sustained compression — pillow between knees at night, even standing, no leg crossing — combined with abductor loading in neutral. ITB stretching adds compression and typically aggravates.",
      difficulty: "Medium",
      tags: ["management", "precautions"],
      sectionSlug: "compression-factor",
    },
    {
      text: "A middle-aged runner reports a sudden snap in the back of the ankle while pushing off, followed by weak push-off and difficulty walking. What is the priority?",
      options: [
        "Begin isometric loading immediately",
        "Suspect Achilles rupture, perform a calf squeeze (Thompson) test and refer urgently",
        "Prescribe heel drops below a step",
        "Reassure and review in six weeks",
      ],
      correctIndex: 1,
      explanation:
        "A sudden audible/palpable snap with immediate functional loss is an Achilles rupture until proven otherwise. The calf squeeze (Thompson/Simmonds) test — absent plantarflexion on squeezing the calf — supports the diagnosis, and urgent referral is required for definitive management decisions. Loading programmes come much later.",
      difficulty: "Easy",
      tags: ["precautions", "special-tests", "clinical-reasoning"],
      sectionSlug: "assessment",
    },
    {
      text: "Which history finding should make you cautious about tendon loading and prompt communication with the medical team?",
      options: [
        "The patient runs three times per week",
        "Recent treatment with fluoroquinolone antibiotics",
        "Morning stiffness lasting five minutes",
        "A warm-up phenomenon during runs",
      ],
      correctIndex: 1,
      explanation:
        "Fluoroquinolones (e.g. ciprofloxacin) are associated with tendinopathy and tendon rupture, sometimes weeks after the course. Combined with corticosteroid use or older age the risk rises further — load such tendons cautiously and flag the history. The other options are routine tendinopathy features.",
      difficulty: "Hard",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "assessment",
    },
    {
      text: "In a jumping athlete, one-finger pain at the inferior pole of the patella that is worse with jumping and reproduced by a single-leg decline squat indicates:",
      options: [
        "Patellofemoral pain syndrome",
        "Patellar tendinopathy",
        "Fat pad impingement",
        "Osgood–Schlatter disease",
      ],
      correctIndex: 1,
      explanation:
        "Patellar tendinopathy presents with highly localised inferior-pole pain, load-related behaviour, and provocation on decline squatting (which biases knee-extensor load). Patellofemoral pain is more diffuse and anterior; Osgood–Schlatter affects the tibial tuberosity in adolescents; fat pad pain sits behind/beside the tendon and is often worse in extension.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "common-sites",
    },
    {
      text: "Which sequencing error most commonly leads to a flare when rehabilitating an irritable patellar tendon?",
      options: [
        "Performing isometrics on consecutive days",
        "Adding jumping (energy-storage) load before adequate heavy slow strength has been rebuilt",
        "Training the calf as well as the quadriceps",
        "Using a decline board for squats",
      ],
      correctIndex: 1,
      explanation:
        "Energy-storage loading multiplies tendon force and rate of loading. Reintroducing jumping before the tendon and muscle have rebuilt strength capacity — or progressing load and speed in the same week — is the classic flare trigger. The staged sequence (isometric → HSR → energy storage) exists precisely to prevent this.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "management-principles",
    },
    {
      text: "Bilateral Achilles pain in a young man with psoriasis and episodes of inflammatory low back pain should prompt consideration of:",
      options: [
        "Simple training overload",
        "A spondyloarthropathy causing enthesitis rather than load-related tendinopathy",
        "DOMS of the calf muscles",
        "Compartment syndrome",
      ],
      correctIndex: 1,
      explanation:
        "Bilateral enthesis pain with psoriasis, inflammatory back symptoms, uveitis or bowel disease suggests a seronegative spondyloarthropathy with enthesitis. This is a systemic inflammatory condition needing rheumatological assessment — loading programmes alone will not control the disease process.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "pathology", "precautions"],
      sectionSlug: "assessment",
    },
    {
      text: "What is the \"warm-up phenomenon\" in tendinopathy?",
      options: [
        "Pain that increases steadily throughout activity",
        "Pain that eases during activity as the tendon warms up, often returning afterwards or the next morning",
        "The need to heat the tendon before assessment",
        "Redness and heat over the tendon at rest",
      ],
      correctIndex: 1,
      explanation:
        "Tendinopathic pain typically improves as activity continues — athletes often report they can \"run through it\" — then recurs after cooling down and is prominent the next morning. This pattern supports the diagnosis, but also seduces athletes into repeatedly overloading the tendon.",
      difficulty: "Easy",
      tags: ["assessment", "pathology"],
      sectionSlug: "overview",
    },
  ],
  flashcards: [
    { front: "Why is \"tendinitis\" a misnomer?", back: "Chronic painful tendons show degenerative change — disorganised collagen, increased ground substance, neovascularisation — with few inflammatory cells. Preferred terms: tendinopathy (clinical), tendinosis (histological)." },
    { front: "Three stages of the tendon continuum model?", back: "Reactive tendinopathy (reversible swelling response to overload) → tendon dysrepair (matrix disorganisation) → degenerative tendinopathy (irreversible islands of cell death and breakdown)." },
    { front: "Cardinal clinical features of tendinopathy?", back: "Well-localised tendon pain, dose-dependent response to load, next-morning pain/stiffness, and the warm-up phenomenon." },
    { front: "The three types of tendon load?", back: "Tensile (muscle pull), energy-storage (rapid stretch–shorten — the highest loads), and compressive (tendon pressed against bone near insertions)." },
    { front: "Standard tendinopathy loading progression?", back: "Load management + isometrics (settle pain) → heavy slow resistance (rebuild capacity) → energy-storage loading (restore spring) → graduated return to sport." },
    { front: "Typical isometric dose for tendon pain relief?", back: "Around 5 holds of 45 seconds at ~70% of maximal effort, with ~2 minutes rest, once or twice daily." },
    { front: "Typical heavy slow resistance dose?", back: "3–4 sets of 6–8 reps at heavy load, ~3 seconds up and 3 seconds down, about 3 sessions per week — sustained for 12+ weeks." },
    { front: "What does the evidence show about corticosteroid injection for tendinopathy?", back: "Short-term pain relief but worse long-term outcomes and higher recurrence than exercise-based care; repeated injections weaken tendon." },
    { front: "Compressive positions to limit in gluteal tendinopathy?", back: "Hip adduction: crossing legs, hanging on one hip, side-lying on the affected side, ITB stretches. Use a pillow between the knees at night." },
    { front: "Why avoid below-step heel drops in insertional Achilles tendinopathy?", back: "End-range dorsiflexion compresses the tendon against the calcaneus — combined compression + tension is the most provocative load. Load to floor level first." },
    { front: "What do the VISA questionnaires measure?", back: "Condition-specific pain, function and sporting activity scored out of 100 (VISA-A Achilles, VISA-P patellar, VISA-G gluteal) — used to track progress over weeks." },
    { front: "Tendinopathy red flags?", back: "Sudden snap with loss of function (rupture), bilateral/systemic or inflammatory features (spondyloarthropathy), fluoroquinolone or corticosteroid exposure, night pain or mass." },
  ],
};

export default topic;
