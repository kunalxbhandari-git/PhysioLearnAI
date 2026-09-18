import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "tennis-elbow",
  title: "Tennis Elbow (Lateral Epicondylalgia)",
  category: "Musculoskeletal",
  description:
    "Learn the anatomy of the common extensor origin, the degenerative nature of tendinopathy, key special tests, and evidence-based progressive loading management for lateral elbow pain.",
  difficulty: "Beginner",
  estMinutes: 26,
  icon: "hand",
  keyTakeaways: [
    "Tennis elbow is a tendinopathy of the common extensor origin — most often the extensor carpi radialis brevis (ECRB).",
    "The pathology is degenerative (failed healing), not inflammatory — which is why the modern term is lateral epicondylalgia, not epicondylitis.",
    "Most cases occur in non-tennis players aged 35–55 doing repetitive gripping and wrist extension at work.",
    "Diagnosis is clinical: lateral epicondyle pain reproduced by resisted wrist extension, gripping, and palpation.",
    "Always screen the cervical spine and consider radial tunnel syndrome as differentials.",
    "Progressive tendon loading (isometric → isotonic/eccentric → functional grip) is the cornerstone of treatment.",
    "Corticosteroid injection gives short-term relief but worse outcomes at 6–12 months than physiotherapy or wait-and-see.",
    "Natural history is favourable — most cases resolve within 12 months — but education and load management shorten the course.",
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
          text: "Tennis elbow, better termed lateral epicondylalgia (LE), is a painful overuse condition of the tendons that attach to the lateral epicondyle of the humerus. It is the most common cause of lateral elbow pain, affecting 1–3% of adults per year, with a peak between 35 and 55 years of age.",
        },
        {
          kind: "paragraph",
          text: "Despite its name, fewer than 10% of people with the condition play tennis. The typical patient is a worker whose job involves repetitive gripping, lifting or wrist extension — manual trades, keyboard-heavy roles, and assembly work are all classic settings.",
        },
        {
          kind: "keypoints",
          title: "Core definition",
          items: [
            "Tendinopathy of the common extensor origin, most commonly involving ECRB",
            "\"Epicondylalgia\" (pain) is preferred over \"epicondylitis\" because histology shows degeneration, not inflammation",
            "Occupational overuse is a far more common cause than racquet sports",
            "Usually self-limiting over 6–12 months, but recurrence is common without addressing load",
          ],
        },
        {
          kind: "pearls",
          items: [
            "The terminology matters clinically: telling a patient the tendon is \"degenerate but adaptable\" supports loading; \"inflamed\" invites rest and anti-inflammatories, which do not fix the problem.",
          ],
        },
      ],
    },
    {
      slug: "anatomy",
      title: "Anatomy of the Common Extensor Origin",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "The lateral epicondyle of the humerus is the shared proximal attachment (the common extensor origin) for the superficial wrist and finger extensors. These muscles extend the wrist and fingers, but just as importantly they stabilise the wrist during gripping — every strong grip demands strong isometric wrist extensor activity.",
        },
        { kind: "image", illustration: "muscle-fiber", caption: "Tendon and muscle-fibre architecture: in tendinopathy the organised collagen of the tendon becomes disorganised, with increased ground substance and neovascularisation." },
        {
          kind: "cards",
          items: [
            { title: "Extensor carpi radialis brevis (ECRB)", text: "The key tendon in tennis elbow. Its deep, anterior fibres attach directly to the epicondyle and are compressed against the capitellum during wrist flexion with elbow extension.", icon: "target" },
            { title: "Extensor digitorum communis (EDC)", text: "Shares the common origin; involved in a proportion of cases, especially where resisted middle-finger extension is painful.", icon: "hand" },
            { title: "Extensor carpi radialis longus (ECRL)", text: "Arises mainly from the lateral supracondylar ridge above the epicondyle; less commonly implicated.", icon: "move-up" },
            { title: "Radial nerve & PIN", text: "The radial nerve divides near the elbow; its deep branch (posterior interosseous nerve) passes through the supinator arch 3–5 cm distal to the epicondyle — the site of radial tunnel syndrome, a key differential.", icon: "zap" },
          ],
        },
        {
          kind: "paragraph",
          text: "ECRB is particularly vulnerable for mechanical reasons: it has a small origin footprint transmitting high force, its undersurface rubs against the lateral edge of the capitellum during elbow extension, and it works hardest in the very position most gripping tasks demand — wrist extension with a loaded grip.",
        },
        {
          kind: "keypoints",
          items: [
            "The wrist extensors are grip stabilisers — gripping pain is an extensor-loading problem",
            "ECRB is the most commonly affected tendon",
            "The PIN pierces the supinator just distal to the epicondyle — remember it for differentials",
          ],
        },
      ],
    },
    {
      slug: "pathology",
      title: "Pathology: Degenerative, Not Inflammatory",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Histological studies of surgically removed ECRB tissue consistently show an absence of acute inflammatory cells. Instead they show \"angiofibroblastic hyperplasia\": disorganised collagen, increased ground substance, fibroblast proliferation and neovascularisation with accompanying nerve ingrowth. This is a degenerative, failed-healing response to cumulative overload.",
        },
        {
          kind: "steps",
          items: [
            { title: "Overload exceeds capacity", text: "Repetitive gripping and wrist extension load the tendon faster than it can adapt — especially after a spike in unaccustomed activity (new job task, DIY weekend, new racquet)." },
            { title: "Failed matrix repair", text: "Tenocytes respond with increased ground substance and immature type III collagen; the organised parallel collagen architecture breaks down." },
            { title: "Neovascularisation & nerve ingrowth", text: "New vessels and sensory nerve fibres grow into the degenerate tissue, contributing to local pain sensitivity." },
            { title: "Sensitisation", text: "In persistent cases, changes in the nervous system (lowered pressure-pain thresholds, sometimes bilaterally) amplify pain — the problem is no longer purely in the tendon." },
          ],
        },
        {
          kind: "pearls",
          items: [
            "No inflammatory cells means anti-inflammatory strategies (rest, NSAIDs, cortisone) do not address the underlying pathology.",
            "Tendons adapt to progressive load — this is the biological rationale for exercise-based treatment.",
            "Widespread sensitisation in chronic cases explains why some patients have cold hyperalgesia and bilateral tenderness.",
          ],
        },
      ],
    },
    {
      slug: "risk-factors",
      title: "Risk Factors & Presentation",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "cards",
          items: [
            { title: "Repetitive manual work", text: "Forceful, repetitive gripping and wrist movements for more than ~2 hours/day — trades, assembly lines, meat processing, prolonged mouse/keyboard use.", icon: "wrench" },
            { title: "Age 35–55", text: "Peak incidence in mid-life as tendon adaptive capacity declines while occupational demands remain high.", icon: "clock" },
            { title: "Sudden load spikes", text: "Unaccustomed activity — a weekend of DIY, gardening, or a return to sport after a break — commonly precedes onset.", icon: "trending-up" },
            { title: "Sporting technique & equipment", text: "In tennis players: faulty backhand technique, incorrect grip size, and high string tension increase extensor load.", icon: "activity" },
            { title: "Smoking & metabolic factors", text: "Smoking, diabetes and obesity are associated with tendinopathy and slower recovery.", icon: "alert-circle" },
          ],
        },
        {
          kind: "paragraph",
          text: "Typical presentation: gradual-onset pain over the lateral epicondyle, sometimes radiating down the dorsal forearm. Pain is provoked by gripping (kettle, handshake, jar lids), lifting with the palm down, and repetitive wrist extension. Morning stiffness of the elbow region is common. Severity ranges from a nuisance during heavy tasks to pain with any grip and measurable grip-strength loss.",
        },
        {
          kind: "keypoints",
          items: [
            "Classic triad: lateral epicondyle pain on palpation, on gripping, and on resisted wrist extension",
            "Pain-free grip strength is typically reduced on the affected side",
            "Night pain and rest pain are unusual — if dominant, rethink the diagnosis",
          ],
        },
      ],
    },
    {
      slug: "assessment",
      title: "Clinical Assessment & Special Tests",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Diagnosis is clinical. The aim of assessment is to reproduce the patient's pain with tests that load the common extensor origin, quantify the deficit (pain-free grip), and exclude the cervical spine, radial nerve and elbow joint as sources.",
        },
        {
          kind: "steps",
          items: [
            { title: "Subjective history", text: "Occupational and sporting load history, onset (spike in activity?), aggravating grips and lifts, 24-hour pattern, neck or nerve symptoms, previous episodes and treatments (including injections)." },
            { title: "Observation & palpation", text: "Usually unremarkable to look at. Palpate the lateral epicondyle and 1–2 cm distally over the ECRB — focal tenderness is expected. Palpate the radial tunnel (3–5 cm distal, over supinator) to compare." },
            { title: "Cozen's test", text: "Elbow slightly flexed, forearm pronated, wrist extended and radially deviated, fist clenched. The examiner resists wrist extension. Reproduction of lateral epicondyle pain is positive." },
            { title: "Maudsley's test", text: "Resisted extension of the middle finger with the elbow extended. Loads ECRB (which stabilises the third metacarpal base) — lateral epicondyle pain is positive. Note: forearm pain here can also suggest radial tunnel involvement." },
            { title: "Mill's test", text: "Passive wrist flexion and pronation with the elbow extended stretches the extensor origin; lateral pain is positive." },
            { title: "Grip dynamometry", text: "Measure pain-free grip strength with the elbow extended, comparing sides. A deficit of 5–10%+ is typical; pain-free grip is a sensitive, responsive outcome measure to track recovery." },
            { title: "Screen neck and nerve", text: "Cervical active movements with overpressure, spurling-type provocation if indicated, and radial neurodynamic testing to exclude referred or neural sources." },
          ],
        },
        {
          kind: "table",
          headers: ["Measure", "What it captures"],
          rows: [
            ["Pain-free grip strength (dynamometer, elbow extended)", "The single most useful objective marker — sensitive to change"],
            ["Patient-Rated Tennis Elbow Evaluation (PRTEE)", "Patient-reported pain and function specific to lateral elbow pain"],
            ["NPRS for worst gripping task", "Pain intensity tracked over time"],
            ["Maximum grip vs pain-free grip ratio", "Degree of pain inhibition during grip"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "Test grip with the elbow extended: extension tensions ECRB over the capitellum, so grip is typically weaker and more painful than with the elbow flexed — a useful diagnostic pattern.",
            "Imaging (ultrasound/MRI) is not needed for a typical presentation; structural changes are common in asymptomatic tendons.",
          ],
        },
      ],
    },
    {
      slug: "differentials",
      title: "Differential Diagnosis",
      estMinutes: 2,
      difficulty: "Intermediate",
      content: [
        {
          kind: "table",
          headers: ["Condition", "Distinguishing features"],
          rows: [
            ["Radial tunnel syndrome (PIN entrapment)", "Aching pain 3–5 cm distal to the epicondyle over the supinator; worse with resisted supination; night ache common; grip tests may be negative; can coexist with LE in ~5% of cases"],
            ["Cervical radiculopathy (C5–C7 referral)", "Neck pain or stiffness, dermatomal symptoms, positive cervical provocation tests, neurological signs; elbow palpation may be unremarkable"],
            ["Posterolateral rotatory instability", "History of trauma or dislocation, clicking/giving way, apprehension with pivot-shift-type loading"],
            ["Radiocapitellar joint OA / plica", "Deeper joint-line pain, loss of extension, crepitus or catching; pain with passive joint loading rather than resisted muscle tests"],
            ["Osteochondritis dissecans of capitellum", "Adolescent throwing/gymnastic athletes with lateral pain, effusion and possible locking — needs imaging"],
            ["Referred myofascial pain", "Trigger points in supinator/extensors reproducing forearm ache; less focal epicondyle tenderness"],
          ],
        },
        {
          kind: "warning",
          title: "Think beyond the tendon when…",
          items: [
            "Pain is maximal distal to the epicondyle over the supinator rather than on it — consider radial tunnel syndrome",
            "There are neck symptoms, dermatomal paraesthesia, or reduced reflexes — screen the cervical spine properly",
            "There is true locking, marked stiffness or an effusion — think intra-articular pathology",
            "Onset followed trauma or dislocation — consider instability and fracture",
          ],
        },
        {
          kind: "redflags",
          items: [
            "Constant, non-mechanical pain or night pain unrelieved by position — consider serious pathology",
            "Significant unexplained swelling, mass or deformity around the elbow",
            "Systemic features: fever, weight loss, history of malignancy",
            "Acute hot swollen elbow — exclude septic arthritis or crystal arthropathy",
          ],
        },
      ],
    },
    {
      slug: "management",
      title: "Management Principles",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "The evidence-based core of management is education, load management and progressive exercise. The condition has a favourable natural history, but simply waiting is slower and recurrence-prone; well-dosed loading improves pain, grip strength and function.",
        },
        {
          kind: "steps",
          items: [
            { title: "1. Education", text: "Explain the degenerative (not inflammatory) nature, the good prognosis, and that the tendon needs graded loading — not complete rest. Address the belief that pain equals damage." },
            { title: "2. Load management", text: "Identify and temporarily modify the provocative loads: reduce grip force and duration, lift palm-up (supinated) instead of palm-down, split heavy tasks, adjust workstation or racquet setup. Modify — do not eliminate — activity." },
            { title: "3. Progressive exercise", text: "Isometric wrist extension for pain modulation early, progressing to slow heavy isotonic/eccentric loading, then functional and grip-specific loading (see the exercise section)." },
            { title: "4. Adjuncts", text: "Counterforce (epicondylalgia) brace can reduce pain during unavoidable gripping tasks; manual therapy (elbow lateral glide / Mulligan MWM) can give short-term pain relief and enable exercise. Neither replaces loading." },
            { title: "5. Review and escalate sensibly", text: "Most improve over 6–12 weeks of loading. Persistent cases: re-check diagnosis (radial tunnel, neck), review load compliance, consider psychosocial factors. Surgery is a last resort after 6–12 months of genuine conservative care." },
          ],
        },
        {
          kind: "warning",
          title: "Common management mistakes",
          items: [
            "Prescribing complete rest — the tendon deconditions and pain returns on re-loading",
            "Stretching aggressively into wrist flexion early — this compresses ECRB against the capitellum and can irritate",
            "Relying on passive modalities (ultrasound, laser) as primary treatment",
            "Repeated corticosteroid injections for short-term relief at the cost of long-term outcome",
          ],
        },
        {
          kind: "pearls",
          items: [
            "\"Lift palm up\" is the simplest, highest-value piece of load advice — supination shifts load away from the extensor origin.",
            "A counterforce brace placed 2–3 fingerbreadths distal to the epicondyle disperses load away from the tendon origin during gripping.",
          ],
        },
      ],
    },
    {
      slug: "loading-programme",
      title: "Progressive Loading Programme",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Loading is progressed in stages guided by irritability: isometrics for pain modulation and early loading, then slow heavy isotonic work emphasising the eccentric phase, then functional grip and task-specific loading. Pain up to about 5/10 during exercise that settles by the next day is acceptable.",
        },
        { kind: "image", illustration: "resistance-band", caption: "Elastic bands allow finely graded wrist-extensor loading between isometric holds and free weights — choose a grade that makes the final repetitions effortful while keeping pain at or below 5/10." },
        {
          kind: "exercise",
          name: "Isometric wrist extension",
          purpose: "Early tendon loading and pain modulation when the elbow is irritable.",
          position: "Forearm supported on a table, palm down, wrist in slight extension over the edge. Hold a light weight (0.5–2 kg) or resist with the other hand.",
          execution: "Hold the wrist still in slight extension against the load — no movement. Hold 30–45 seconds, breathing normally, then rest.",
          dosage: "4–5 holds with 1–2 minutes rest, 1–2×/day.",
          progression: "Increase load towards a heavy-but-tolerable hold, then progress to isotonic wrist extension.",
          precautions: "Pain during the hold should be ≤5/10 and settle quickly afterwards.",
        },
        {
          kind: "exercise",
          name: "Isotonic wrist extension with eccentric emphasis",
          purpose: "Progressive strengthening of the wrist extensors — the core rehabilitation exercise.",
          position: "Forearm supported palm-down on a table or knee, wrist over the edge, holding a dumbbell (start 1–2 kg).",
          execution: "Lift the wrist up over 2 seconds (concentric), then lower slowly over 3–4 seconds into flexion (eccentric). If the concentric phase is too painful, use the other hand to assist the lift and perform only the slow lower.",
          dosage: "3 sets of 8–12 reps, every other day.",
          progression: "Increase weight when 12 reps feel easy with acceptable pain; progress towards 3 sets of 8 at a challenging load over 8–12 weeks.",
          precautions: "Avoid end-range wrist flexion under heavy load early on (compressive for ECRB); progress range as symptoms allow.",
        },
        {
          kind: "exercise",
          name: "Forearm rotation with a hammer (pronation–supination)",
          purpose: "Load the rotation component of forearm function, including supinator and extensor control.",
          position: "Sitting, forearm supported, holding a hammer or weighted stick vertically, elbow at 90°.",
          execution: "Slowly rotate the forearm palm-down then palm-up through comfortable range, controlling the weight of the hammer head throughout.",
          dosage: "3 sets of 10 reps each direction, every other day.",
          progression: "Grip the handle further from the head to lengthen the lever, or add wrist deviation work.",
          precautions: "Keep the movement slow and controlled; sharp lateral pain means the lever is too long.",
        },
        {
          kind: "exercise",
          name: "Grip strengthening",
          purpose: "Restore pain-free grip — the key functional deficit in tennis elbow.",
          position: "Elbow flexed at first (less ECRB tension), forearm neutral, using a soft ball, putty or adjustable gripper.",
          execution: "Squeeze steadily to a firm but acceptable effort, hold 5 seconds, release slowly.",
          dosage: "10 reps × 3 sets, daily.",
          progression: "Increase resistance, then repeat gripping with the elbow progressively straighter, and finally grip during lifting and carrying tasks.",
          precautions: "Track pain-free grip with a dynamometer where available — it should climb steadily.",
        },
        {
          kind: "exercise",
          name: "Functional and task-specific loading",
          purpose: "Bridge the gap between gym-style loading and the patient's actual job or sport.",
          position: "Task-dependent: lifting, carrying, tool use, or racquet drills.",
          execution: "Rebuild the specific provocative tasks gradually: start palm-up or with lighter tools, then reintroduce pronated-grip lifting, sustained tool use, and finally high-repetition or impact tasks (e.g. backhand drills with attention to technique).",
          dosage: "2–3 sessions/week, progressing one variable at a time (load, repetitions, grip position).",
          progression: "Full unrestricted work/sport once tasks are pain-free (or minimally symptomatic and settling within 24 hours) at required volumes.",
          precautions: "Load spikes cause relapses — plan the return-to-task volume rather than \"testing it\" on a heavy day.",
        },
        {
          kind: "keypoints",
          title: "Loading principles",
          items: [
            "Stage 1: isometrics — pain modulation and entry-level load",
            "Stage 2: slow heavy isotonic/eccentric wrist extension — build capacity over 8–12 weeks",
            "Stage 3: grip and task-specific loading — restore function and prevent recurrence",
            "Use the 24-hour rule: ≤5/10 pain that settles by next day is acceptable",
            "Expect meaningful strength change over weeks, not days — set expectations early",
          ],
        },
      ],
    },
    {
      slug: "injections-evidence",
      title: "Why Cortisone Falls Short",
      estMinutes: 2,
      difficulty: "Intermediate",
      content: [
        {
          kind: "paragraph",
          text: "Corticosteroid injection reliably reduces lateral elbow pain for around 4–6 weeks. The problem is what happens afterwards. High-quality randomised trials comparing injection, physiotherapy and wait-and-see found that by 6 and 12 months the injection groups had worse outcomes: lower success rates and roughly double the recurrence rate compared with physiotherapy or even doing nothing.",
        },
        {
          kind: "cards",
          items: [
            { title: "Wrong target", text: "Steroid suppresses inflammation — but the pathology is degenerative. There is little inflammation to treat, so the mechanism does not match the disease.", icon: "crosshair" },
            { title: "Tissue effects", text: "Corticosteroid inhibits tenocyte activity and collagen synthesis, potentially weakening already-degenerate tissue.", icon: "trending-down" },
            { title: "Behavioural rebound", text: "Short-term relief invites a rapid return to full load on an unconditioned tendon — a setup for recurrence.", icon: "rotate-ccw" },
            { title: "Delayed recovery", text: "Trial data show injection recipients fare worse at 12 months than wait-and-see, effectively delaying natural recovery.", icon: "clock" },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Short-term benefit (weeks), worse outcomes and higher recurrence at 6–12 months",
            "If an injection is used at all, it should be paired with load management and a graded loading programme",
            "Educate patients asking for \"the injection\" about this trade-off honestly",
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
            "Degenerative tendinopathy of the common extensor origin — ECRB most involved",
            "Peak age 35–55; occupational gripping loads far outnumber tennis as the cause",
            "Diagnose clinically: epicondyle tenderness + pain on gripping + positive Cozen's/Maudsley's/Mill's",
            "Track pain-free grip strength with a dynamometer",
            "Differentials: radial tunnel syndrome, cervical referral, intra-articular pathology",
            "Treat with education, load modification (lift palm-up) and staged loading: isometric → eccentric/isotonic → functional grip",
            "Cortisone: short-term relief, worse 6–12 month outcomes, high recurrence",
            "Most cases resolve within 12 months; recurrence prevention = managing load spikes",
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
      text: "Which structure is most commonly the primary site of pathology in tennis elbow?",
      options: [
        "Extensor carpi radialis longus (ECRL)",
        "Extensor carpi radialis brevis (ECRB)",
        "Extensor carpi ulnaris (ECU)",
        "Anconeus",
      ],
      correctIndex: 1,
      explanation:
        "The ECRB tendon at the common extensor origin is the most commonly affected structure. Its small origin footprint, high force transmission, and undersurface contact against the capitellum during elbow extension make it mechanically vulnerable.",
      difficulty: "Easy",
      tags: ["anatomy", "pathology"],
      sectionSlug: "anatomy",
    },
    {
      text: "Why is \"lateral epicondylalgia\" now preferred over \"lateral epicondylitis\"?",
      options: [
        "The condition affects the medial epicondyle more often",
        "Histology shows degenerative change without acute inflammatory cells",
        "The condition is purely neurological in origin",
        "The suffix -itis is reserved for joint conditions",
      ],
      correctIndex: 1,
      explanation:
        "Surgical histology consistently shows angiofibroblastic hyperplasia — disorganised collagen, increased ground substance and neovascularisation — with no acute inflammatory infiltrate. \"-algia\" (pain) describes the condition accurately; \"-itis\" (inflammation) does not.",
      difficulty: "Easy",
      tags: ["pathology"],
      sectionSlug: "pathology",
    },
    {
      text: "Which patient profile is most typical for tennis elbow?",
      options: [
        "A 19-year-old competitive tennis player",
        "A 45-year-old tradesperson doing repetitive gripping work",
        "A 70-year-old with morning stiffness in multiple joints",
        "A 12-year-old gymnast with elbow locking",
      ],
      correctIndex: 1,
      explanation:
        "Fewer than 10% of cases occur in tennis players. The peak incidence is age 35–55 in people doing repetitive, forceful gripping and wrist work. Multiple stiff joints suggests inflammatory arthritis, and a locking elbow in a young gymnast suggests osteochondritis dissecans.",
      difficulty: "Easy",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "risk-factors",
    },
    {
      text: "How is Cozen's test performed?",
      options: [
        "Passive wrist flexion and pronation with the elbow extended",
        "Resisted middle-finger extension with the elbow extended",
        "Resisted wrist extension with the forearm pronated and fist clenched",
        "Resisted forearm supination with the elbow flexed to 90°",
      ],
      correctIndex: 2,
      explanation:
        "Cozen's test resists wrist extension with the forearm pronated, wrist radially deviated and fist clenched; reproduction of lateral epicondyle pain is positive. Passive wrist flexion/pronation describes Mill's test, and resisted middle-finger extension describes Maudsley's test.",
      difficulty: "Easy",
      tags: ["special-tests", "assessment"],
      sectionSlug: "assessment",
    },
    {
      text: "Maudsley's test loads ECRB preferentially because resisted middle-finger extension…",
      options: [
        "Stretches the ECRB across the wrist joint",
        "Demands stabilisation of the third metacarpal base, where ECRB inserts",
        "Compresses the radial head against the capitellum",
        "Activates only the finger flexors",
      ],
      correctIndex: 1,
      explanation:
        "ECRB inserts on the base of the third metacarpal. Resisting middle-finger extension requires ECRB to stabilise the third metacarpal, loading the tendon and reproducing pain at its origin when tendinopathic. Note that pain over the supinator during this test can also occur in radial tunnel syndrome.",
      difficulty: "Hard",
      tags: ["special-tests", "anatomy"],
      sectionSlug: "assessment",
    },
    {
      text: "Which objective measure is most useful for tracking recovery in tennis elbow?",
      options: [
        "Elbow flexion range of motion",
        "Pain-free grip strength measured with a dynamometer",
        "Forearm circumference",
        "Shoulder abduction strength",
      ],
      correctIndex: 1,
      explanation:
        "Pain-free grip strength (measured with the elbow extended) is sensitive, responsive and directly reflects the key functional deficit. Elbow range of motion is usually normal in tennis elbow, and the other measures are not specific to the condition.",
      difficulty: "Easy",
      tags: ["assessment"],
      sectionSlug: "assessment",
    },
    {
      text: "Why is grip typically weaker and more painful with the elbow extended than flexed in tennis elbow?",
      options: [
        "The biceps cannot assist grip with the elbow extended",
        "Elbow extension increases tension and compressive contact of ECRB over the capitellum",
        "The radial nerve is stretched only in flexion",
        "The wrist extensors are inactive in elbow flexion",
      ],
      correctIndex: 1,
      explanation:
        "In elbow extension, ECRB is tensioned and its undersurface contacts the lateral edge of the capitellum, increasing load through the pathological tissue. This is why grip testing is performed with the elbow extended and why patients often prefer lifting with a bent elbow.",
      difficulty: "Hard",
      tags: ["anatomy", "clinical-reasoning"],
      sectionSlug: "anatomy",
    },
    {
      text: "A patient has a deep aching pain 4 cm distal to the lateral epicondyle over the supinator, worse with resisted supination, and a nagging night ache. Grip testing is only mildly provocative. The most likely diagnosis is:",
      options: [
        "Classic lateral epicondylalgia",
        "Radial tunnel syndrome",
        "Cervical radiculopathy",
        "Posterolateral rotatory instability",
      ],
      correctIndex: 1,
      explanation:
        "Pain located distal to the epicondyle over the radial tunnel, provocation with resisted supination, and night ache are hallmarks of radial tunnel syndrome (posterior interosseous nerve entrapment at the supinator arch). Classic tennis elbow is maximally tender on or just distal to the epicondyle and is grip-provoked.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "differentials",
    },
    {
      text: "Which finding should prompt cervical spine screening in a patient with lateral elbow pain?",
      options: [
        "Pain on gripping a jar lid",
        "Focal tenderness on the lateral epicondyle",
        "Dermatomal paraesthesia into the forearm and hand with neck stiffness",
        "Pain on Cozen's test",
      ],
      correctIndex: 2,
      explanation:
        "Dermatomal symptoms, neck pain or stiffness, and neurological signs suggest cervical radiculopathy (C5–C7) referring to the lateral elbow. Grip pain, focal epicondyle tenderness and positive Cozen's are all consistent with local tendinopathy.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "differentials",
    },
    {
      text: "What is the primary rationale for using isometric wrist extension in the early, irritable stage?",
      options: [
        "Isometrics stretch the tendon back to normal length",
        "Isometrics provide tendon load and can modulate pain without provocative movement",
        "Isometrics increase inflammation to restart healing",
        "Isometrics are the only exercise that increases muscle bulk",
      ],
      correctIndex: 1,
      explanation:
        "Sustained isometric holds load the tendon in a controlled, non-provocative way and can reduce pain in the short term, providing an entry point into a loading programme when isotonic work is too irritable. They are a stage, not the whole programme.",
      difficulty: "Medium",
      tags: ["exercise-therapy"],
      sectionSlug: "loading-programme",
    },
    {
      text: "A patient can now perform 3×12 isotonic wrist extensions with 2 kg with only 2/10 pain settling by the next morning. What is the most appropriate progression?",
      options: [
        "Stop strengthening — the tendon is healed",
        "Increase the load and continue, then add grip and task-specific work",
        "Switch entirely to passive stretching",
        "Reduce to isometrics only to be safe",
      ],
      correctIndex: 1,
      explanation:
        "Symptoms within the 24-hour rule at an easy load indicate the tissue is ready for more. Progressive overload — increasing weight, then adding grip and functional task loading — continues to build tendon and muscle capacity, which is what prevents recurrence.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "loading-programme",
    },
    {
      text: "Which piece of load-modification advice is most useful for a patient whose pain is triggered by lifting?",
      options: [
        "Lift with the palm facing up (supinated grip) where possible",
        "Lift only with the affected arm to build tolerance quickly",
        "Stop all lifting for 6 weeks",
        "Always lift with the wrist fully flexed",
      ],
      correctIndex: 0,
      explanation:
        "A supinated (palm-up) grip shifts load towards the flexors and off the extensor origin, allowing continued function with less provocation. Complete rest deconditions the tendon; lifting with a flexed wrist under load increases compressive strain on ECRB.",
      difficulty: "Easy",
      tags: ["management"],
      sectionSlug: "management",
    },
    {
      text: "Where should a counterforce brace be positioned?",
      options: [
        "Directly over the lateral epicondyle",
        "Around the wrist joint",
        "2–3 fingerbreadths distal to the epicondyle over the extensor muscle bulk",
        "Above the elbow around the distal humerus",
      ],
      correctIndex: 2,
      explanation:
        "The counterforce brace sits over the proximal extensor muscle bulk, a few centimetres distal to the epicondyle. It disperses contractile forces so that less load is transmitted to the tendon origin during gripping. Placing it on the epicondyle itself compresses the painful tissue.",
      difficulty: "Medium",
      tags: ["management"],
      sectionSlug: "management",
    },
    {
      text: "In landmark randomised trials, what happened to patients who received corticosteroid injection for tennis elbow compared with physiotherapy at 12 months?",
      options: [
        "Injection patients maintained superior outcomes at every time point",
        "Injection patients had worse success rates and higher recurrence despite early relief",
        "There was no difference at any time point",
        "Injection patients recovered faster with no downside",
      ],
      correctIndex: 1,
      explanation:
        "Trials (e.g. Bisset et al., Coombes et al.) showed corticosteroid injection produced superior short-term relief (~6 weeks) but significantly worse outcomes at 6–12 months, with recurrence rates far higher than physiotherapy or wait-and-see. Early relief comes at a long-term cost.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "injections-evidence",
    },
    {
      text: "Which mechanism best explains the poor long-term outcomes after corticosteroid injection?",
      options: [
        "Steroids permanently block pain nerves in the tendon",
        "The pathology is degenerative, steroid inhibits tenocyte/collagen activity, and early relief invites reloading an unconditioned tendon",
        "The injection increases tendon inflammation",
        "The injection causes immediate tendon rupture in most patients",
      ],
      correctIndex: 1,
      explanation:
        "Steroid targets inflammation that is largely absent, suppresses tenocyte activity and collagen synthesis in already-degenerate tissue, and the temporary analgesia encourages patients to resume full load without rebuilding capacity — a combination that drives recurrence.",
      difficulty: "Hard",
      tags: ["pathology", "management"],
      sectionSlug: "injections-evidence",
    },
    {
      text: "What histological findings characterise the tendinopathic ECRB tendon?",
      options: [
        "Dense neutrophil infiltration and pus formation",
        "Disorganised collagen, increased ground substance, fibroblast proliferation and neovascularisation",
        "Normal tendon architecture with joint capsule thickening",
        "Calcium pyrophosphate crystal deposition",
      ],
      correctIndex: 1,
      explanation:
        "The classic finding is angiofibroblastic hyperplasia: immature disorganised collagen, increased ground substance, fibroblast proliferation and vascular/neural ingrowth — degeneration and failed healing rather than acute inflammation (no neutrophil infiltrate).",
      difficulty: "Medium",
      tags: ["pathology"],
      sectionSlug: "pathology",
    },
    {
      text: "During early rehabilitation, why is aggressive stretching into full wrist flexion with the elbow extended best avoided?",
      options: [
        "Stretching permanently lengthens the tendon within days",
        "This position compresses the ECRB undersurface against the capitellum and can increase irritation",
        "Wrist flexion has no effect on the extensor tendons",
        "It causes immediate radial nerve palsy",
      ],
      correctIndex: 1,
      explanation:
        "Combined wrist flexion and elbow extension places the ECRB under tensile load while its undersurface is compressed against the lateral capitellum. In an irritable tendon this combined tensile-compressive load can flare symptoms, so end-range stretching is introduced cautiously and later.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "anatomy", "precautions"],
      sectionSlug: "loading-programme",
    },
    {
      text: "Which statement about the natural history of tennis elbow is correct?",
      options: [
        "It is relentlessly progressive without surgery",
        "Most cases resolve within about 12 months, but load management shortens the course and reduces recurrence",
        "It never recurs once symptoms settle",
        "It always resolves within 2 weeks with rest",
      ],
      correctIndex: 1,
      explanation:
        "Tennis elbow is usually self-limiting over 6–12 months. However, unmanaged cases recover more slowly and recur with load spikes. Education plus progressive loading improves pain and function sooner and builds the capacity that protects against recurrence.",
      difficulty: "Medium",
      tags: ["management", "pathology"],
      sectionSlug: "management",
    },
    {
      text: "A patient with 3 months of lateral elbow pain now reports constant pain unrelieved by rest or position, night pain, and recent unexplained weight loss. What is the correct action?",
      options: [
        "Progress the loading programme as planned",
        "Add a counterforce brace and review in 6 weeks",
        "Refer for medical review — this pattern is a red-flag presentation",
        "Perform a corticosteroid injection",
      ],
      correctIndex: 2,
      explanation:
        "Tennis elbow is a mechanical, load-related condition; constant non-mechanical pain, night pain and systemic features such as weight loss are red flags for serious pathology and require onward medical referral before continuing physiotherapy management.",
      difficulty: "Easy",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "differentials",
    },
    {
      text: "Which exercise sequence best reflects an evidence-based loading progression for tennis elbow?",
      options: [
        "Functional grip tasks → isometrics → rest",
        "Isometric wrist extension → slow isotonic/eccentric wrist extension → grip and task-specific loading",
        "Eccentric loading only, performed to maximal pain daily",
        "Passive stretching → ultrasound → massage",
      ],
      correctIndex: 1,
      explanation:
        "The programme is staged by irritability and capacity: isometrics for early load and pain modulation, slow heavy isotonic work with eccentric emphasis to build tendon capacity over 8–12 weeks, then grip and task-specific loading to restore function. Passive modalities are adjuncts at best.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "loading-programme",
    },
  ],
  flashcards: [
    { front: "Which tendon is primarily affected in tennis elbow?", back: "Extensor carpi radialis brevis (ECRB) at the common extensor origin on the lateral epicondyle." },
    { front: "Why \"epicondylalgia\" rather than \"epicondylitis\"?", back: "Histology shows degeneration (angiofibroblastic hyperplasia) with no acute inflammatory cells — it is a failed-healing tendinopathy, not inflammation." },
    { front: "Describe Cozen's test.", back: "Resisted wrist extension with forearm pronated, wrist radially deviated and fist clenched; lateral epicondyle pain is positive." },
    { front: "Describe Maudsley's test.", back: "Resisted middle-finger extension with the elbow extended — loads ECRB via its insertion on the third metacarpal base." },
    { front: "Describe Mill's test.", back: "Passive wrist flexion with forearm pronation and elbow extension — stretches the common extensor origin; lateral pain is positive." },
    { front: "Best objective outcome measure for tennis elbow?", back: "Pain-free grip strength measured by dynamometer with the elbow extended (plus the PRTEE questionnaire)." },
    { front: "Key features of radial tunnel syndrome vs tennis elbow?", back: "Tenderness 3–5 cm distal to the epicondyle over supinator, pain on resisted supination, night ache; less grip provocation." },
    { front: "The three stages of the loading programme?", back: "1) Isometric wrist extension, 2) slow isotonic/eccentric wrist extension, 3) grip and task-specific functional loading." },
    { front: "Why do corticosteroid injections perform poorly long term?", back: "They target absent inflammation, impair tenocyte/collagen activity, and early relief invites reloading an unconditioned tendon — worse 6–12 month outcomes and high recurrence." },
    { front: "Simplest load-modification advice for painful lifting?", back: "Lift palm-up (supinated grip) to shift load off the extensor origin; split heavy tasks and avoid sudden load spikes." },
    { front: "Where does a counterforce brace go?", back: "Over the extensor muscle bulk, 2–3 fingerbreadths distal to the lateral epicondyle — not on the epicondyle itself." },
    { front: "Acceptable pain during tendon-loading exercise?", back: "Up to about 5/10 during exercise, provided symptoms settle back to baseline within 24 hours." },
  ],
};

export default topic;
