import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "rheumatoid-arthritis",
  title: "Rheumatic Diseases & RA",
  category: "Musculoskeletal",
  description:
    "Autoimmune inflammatory arthritis for physiotherapists: RA pathology and presentation, how it differs from OA, the wider rheumatic disease family, and safe, effective exercise and joint-protection management.",
  difficulty: "Intermediate",
  estMinutes: 28,
  icon: "hand",
  keyTakeaways: [
    "RA is a systemic autoimmune disease in which the immune system attacks the synovium — fundamentally different from the load-related degeneration of OA.",
    "The classic picture: symmetrical small-joint pain and swelling (hands, wrists, feet) with morning stiffness lasting over 60 minutes and systemic features like fatigue.",
    "Persistent synovitis forms pannus, which erodes cartilage and bone — early medical treatment (DMARDs) within the 'window of opportunity' prevents irreversible damage.",
    "Exercise is safe and beneficial in RA: it improves strength, fitness, function and fatigue without worsening disease activity or joint damage.",
    "Physiotherapy adjusts, not abandons, exercise during flares: shorter levers, isometrics, range work and pacing.",
    "Joint protection and energy conservation strategies reduce hand pain and preserve function in daily tasks.",
    "The rheumatic family also includes ankylosing spondylitis, psoriatic arthritis, gout, lupus and fibromyalgia — each with a distinct pattern worth recognising.",
    "Atlantoaxial instability is the RA red flag every physiotherapist must know: no end-range cervical mobilisation or manipulation, and screen before airway procedures or vigorous techniques.",
  ],
  sections: [
    {
      slug: "inflammatory-vs-degenerative",
      title: "Inflammatory vs Degenerative Arthritis",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Arthritis divides into two great families. Degenerative arthritis (osteoarthritis) is a local, load-related joint disease. Inflammatory arthritis — with rheumatoid arthritis (RA) as its archetype — is a systemic immune-mediated disease that happens to show itself in joints. Telling them apart early changes lives, because inflammatory arthritis needs prompt medical treatment.",
        },
        {
          kind: "table",
          headers: ["Feature", "Rheumatoid arthritis (inflammatory)", "Osteoarthritis (degenerative)"],
          rows: [
            ["Underlying process", "Autoimmune synovitis — the immune system attacks the joint lining", "Failed load–repair balance in cartilage, bone and synovium"],
            ["Typical onset", "Any age, peak 30–60; often over weeks to months", "Usually over 45; gradual over years"],
            ["Joint pattern", "Symmetrical, small joints first — MCPs, PIPs, wrists, MTPs (DIPs typically spared)", "Weight-bearing and hand joints — knees, hips, spine, DIPs, thumb base; often asymmetrical"],
            ["Morning stiffness", "Prolonged — more than 60 minutes", "Short — under 30 minutes"],
            ["Effect of activity/rest", "Stiffness eases with movement; worse after rest", "Pain worsens with loading; eases with rest (early disease)"],
            ["Systemic features", "Fatigue, malaise, low-grade fever, weight loss; extra-articular organ involvement", "None — a local joint condition"],
            ["Swelling character", "Soft, warm, boggy synovial swelling", "Bony enlargement (osteophytes); intermittent effusions"],
            ["Blood tests", "Raised inflammatory markers; rheumatoid factor / anti-CCP often positive", "Normal"],
            ["Core medical management", "Early DMARDs to suppress the disease", "No disease-modifying drug — education, exercise, weight management"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "The single best screening question: \"How long does your morning stiffness last?\" Over 60 minutes with small-joint swelling is inflammatory until proven otherwise.",
            "New persistent synovitis (swollen, tender joints > 6 weeks) warrants prompt rheumatology referral — do not sit on it while trialling exercise.",
          ],
        },
      ],
    },
    {
      slug: "pathophysiology",
      title: "RA Pathophysiology: Synovitis & Pannus",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "RA arises when genetic susceptibility (e.g. HLA-DR4 shared epitope) meets environmental triggers — smoking being the best established — producing autoantibodies such as rheumatoid factor and anti-CCP, sometimes years before the first swollen joint. The disease then declares itself as persistent synovitis.",
        },
        {
          kind: "steps",
          items: [
            { title: "1. Immune activation", text: "Autoreactive T cells, B cells and macrophages infiltrate the synovium, releasing pro-inflammatory cytokines — TNF-alpha and interleukins — the very molecules targeted by biologic drugs." },
            { title: "2. Synovitis", text: "The normally thin synovial membrane becomes thickened, hypervascular and inflamed, pouring out excess fluid: the warm, boggy, swollen joint of active RA." },
            { title: "3. Pannus formation", text: "Chronically inflamed synovium organises into pannus — an invasive, tumour-like sheet of tissue that creeps across the joint surface." },
            { title: "4. Erosion & destruction", text: "Pannus releases enzymes that degrade cartilage and activates osteoclasts that erode peri-articular bone (visible as erosions on X-ray). Capsule and ligaments stretch and fail." },
            { title: "5. Deformity & secondary damage", text: "Lost ligamentous support and tendon rupture produce the classic late deformities — ulnar deviation at the MCPs, swan-neck and boutonniere fingers, Z-thumb — now far less common with modern early treatment." },
          ],
        },
        {
          kind: "keypoints",
          title: "Why early treatment matters",
          items: [
            "Erosions can appear within months of onset and do not reverse",
            "The first 3–6 months are the therapeutic 'window of opportunity': early DMARD treatment (e.g. methotrexate) dramatically improves long-term outcomes",
            "Treat-to-target care aims for remission or low disease activity, reviewed objectively and often",
          ],
        },
        {
          kind: "pearls",
          items: [
            "RA is systemic: the same inflammation drives fatigue, anaemia, rheumatoid nodules, lung and eye disease, and roughly doubles cardiovascular risk — another reason aerobic exercise belongs in every RA programme.",
          ],
        },
      ],
    },
    {
      slug: "presentation",
      title: "Clinical Presentation of RA",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "The typical story is a woman aged 30–60 (RA is 2–3 times more common in women) with weeks to months of painful, swollen hands and feet, profound morning stiffness and disabling fatigue. Onset can also be abrupt, or begin in one large joint before spreading.",
        },
        {
          kind: "cards",
          items: [
            { title: "Symmetrical small-joint synovitis", text: "MCPs, PIPs, wrists and MTPs on both sides — soft, warm, tender swelling. DIP joints are characteristically spared (they belong to OA and psoriatic arthritis).", icon: "hand" },
            { title: "Morning stiffness > 60 min", text: "Prolonged, generalised stiffness on waking or after rest ('gelling') that slowly eases with movement — a marker of active inflammation.", icon: "sunrise" },
            { title: "Systemic features", text: "Fatigue that patients often rate as their worst symptom, malaise, low-grade fever, weight loss, anaemia.", icon: "battery-low" },
            { title: "Functional loss", text: "Weak grip, dropping objects, difficulty with jars, buttons and keys; painful forefeet — 'walking on pebbles'.", icon: "alert-circle" },
            { title: "Extra-articular disease", text: "Rheumatoid nodules over pressure points, dry eyes/mouth (secondary Sjögren's), interstitial lung disease, carpal tunnel syndrome, vasculitis in severe disease.", icon: "globe" },
            { title: "Flare pattern", text: "A relapsing–remitting course: flares of hot swollen joints, stiffness and fatigue on a background that treatment aims to keep quiet.", icon: "activity" },
          ],
        },
        {
          kind: "keypoints",
          title: "Useful examination findings",
          items: [
            "Squeeze tenderness across the MCP or MTP row (positive 'squeeze test') suggests synovitis",
            "Boggy soft-tissue swelling — feel the difference from bony OA enlargement",
            "Reduced grip strength and painful, limited wrist extension are early functional signs",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Fatigue is a disease feature, not laziness or deconditioning alone — name it, measure it, and treat it (graded exercise genuinely helps).",
          ],
        },
      ],
    },
    {
      slug: "other-rheumatic-conditions",
      title: "The Wider Rheumatic Disease Family",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "RA sits within a family of rheumatic conditions a physiotherapist must recognise, because they walk into musculoskeletal clinics looking like ordinary back pain, tendon pain or joint pain.",
        },
        {
          kind: "table",
          headers: ["Condition", "Who & pattern", "Key features for physiotherapists"],
          rows: [
            ["Ankylosing spondylitis (axial spondyloarthritis)", "Young adults, often male, onset < 45", "Inflammatory back pain: insidious onset, night pain, morning stiffness > 30 min, better with exercise, worse with rest; sacroiliitis; risk of progressive spinal fusion — exercise is a cornerstone of treatment"],
            ["Psoriatic arthritis", "People with psoriasis (skin may precede or follow joints)", "Asymmetrical arthritis, DIP involvement, dactylitis ('sausage digit'), enthesitis, nail pitting; check skin and nails in unexplained arthritis"],
            ["Gout", "Middle-aged+ men, metabolic risk factors, diuretics", "Sudden, exquisitely painful hot red joint — classically the 1st MTP overnight; urate crystal arthropathy; settles in days–weeks; exclude septic arthritis in any acute hot joint"],
            ["Systemic lupus erythematosus (SLE)", "Women of childbearing age", "Multisystem autoimmune disease: fatigue, malar (butterfly) rash, photosensitivity, non-erosive joint pain, renal and haematological involvement"],
            ["Polymyalgia rheumatica", "Adults over 50", "Bilateral shoulder and pelvic-girdle aching and marked morning stiffness; dramatic steroid response; linked to giant cell arteritis — new headache/visual symptoms are an emergency"],
            ["Fibromyalgia", "Any age, more women", "Chronic widespread pain with fatigue, unrefreshing sleep and cognitive symptoms; a pain-processing (nociplastic) condition, not inflammatory — no swelling, normal bloods; managed with education, graded exercise and sleep strategies"],
          ],
        },
        {
          kind: "warning",
          title: "Patterns that should trigger referral for medical assessment",
          items: [
            "Inflammatory back pain features in an adult under 45 — average diagnostic delay in axial spondyloarthritis is still many years",
            "Any acute hot, swollen joint — gout is likely, but septic arthritis must be excluded medically",
            "Widespread pain plus systemic features (rash, fever, weight loss) — think systemic rheumatic disease before 'chronic pain'",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Inflammatory back pain improves with exercise and NOT with rest — the mirror image of most mechanical back pain histories.",
          ],
        },
      ],
    },
    {
      slug: "assessment",
      title: "Physiotherapy Assessment in RA",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Physiotherapy assessment in RA has two extra dimensions beyond a standard MSK assessment: gauging current disease activity (is this a flare or stable disease?) and understanding the impact on function, fatigue and participation. Treatment intensity is then matched to disease state.",
        },
        {
          kind: "steps",
          items: [
            { title: "Disease state & medical context", text: "Ask about current flare vs stable phase, recent disease-activity scores from rheumatology (e.g. DAS28), medication (DMARDs, biologics, steroids) and recent changes. Long-term steroid use flags osteoporosis and fragile skin." },
            { title: "Joint assessment", text: "Count tender and swollen joints; assess active range, deformity and stability. Handle inflamed joints gently — assess, don't provoke." },
            { title: "Function & strength", text: "Grip strength (dynamometer), pinch, sit-to-stand, gait and footwear check (forefoot pain is near-universal), hand function in real tasks (jars, buttons, keys)." },
            { title: "Fatigue, sleep & mood", text: "Screen fatigue severity and pattern, sleep quality and mood — they shape pacing and exercise dosing as much as the joints do.", },
            { title: "Cervical spine screening", text: "Before manual techniques or positions of sustained neck flexion: ask about neck pain, arm or leg neurological symptoms, and handle the upper cervical spine with care in long-standing disease (see red flags)." },
            { title: "Outcome measures", text: "HAQ (Health Assessment Questionnaire) for function, patient-reported pain and fatigue scales, grip strength, 30-second chair stand and walk tests to track physical capacity." },
          ],
        },
        {
          kind: "keypoints",
          title: "Flare vs stable disease — why it matters",
          items: [
            "Flare: hot swollen joints, stiffness and fatigue up — reduce load, protect joints, keep gentle movement going",
            "Stable/remission: push progressive strengthening and aerobic conditioning like any other patient",
            "The plan must swing between these modes — teach the patient to self-adjust",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Ask to see the shoes: metatarsal pain, callus patterns and worn-out footwear tell you more about RA feet than most tests.",
          ],
        },
      ],
    },
    {
      slug: "physio-management",
      title: "Physiotherapy Management Principles",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Medical treatment controls the disease; physiotherapy restores and protects the person's function. The historical fear that exercise would inflame joints has been decisively overturned: exercise in RA is safe, does not increase disease activity or radiographic damage, and improves strength, aerobic fitness, function and fatigue.",
        },
        {
          kind: "steps",
          items: [
            { title: "1. Education & self-management", text: "Explain the disease, the flare–remission pattern, and the safety of exercise. Build confidence to stay active and to self-adjust load during flares rather than stopping." },
            { title: "2. Exercise therapy", text: "The core intervention: progressive strengthening, aerobic conditioning and range-of-movement work, individualised to disease state and joint involvement (details in the next section)." },
            { title: "3. Joint protection & energy conservation", text: "Alter task methods to reduce hand-joint stress, distribute load over larger joints, pace activity across the day and week, and use assistive devices where they preserve valued activity." },
            { title: "4. Flare management", text: "During flares: relative rest of the hot joints, isometrics and gentle range to maintain movement, cold packs for comfort, resume progressive loading as the flare settles. Never immobilise completely for long periods." },
            { title: "5. Adjuncts & the MDT", text: "Splinting (with OT), footwear advice and orthoses for the forefoot, heat/cold for symptom relief, hydrotherapy as a comfortable exercise entry point. Liaise with rheumatology, OT, podiatry and nursing — RA is a team sport." },
          ],
        },
        {
          kind: "warning",
          title: "Common management mistakes",
          items: [
            "Advising rest as the default — deconditioning compounds the disease's own muscle loss (rheumatoid cachexia)",
            "Ignoring cardiovascular risk — RA roughly doubles it; aerobic training is not optional",
            "Aggressive stretching or forceful mobilisation of inflamed or unstable joints",
            "Treating the joints while missing fatigue, feet and hands — the things patients actually struggle with daily",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Time exercise for the person's best part of the day — usually late morning, after stiffness has eased and before fatigue peaks.",
            "Hydrotherapy is a superb entry point when many joints are involved: warmth plus buoyancy allows strengthening the person before loading the joints.",
          ],
        },
      ],
    },
    {
      slug: "exercise-programme",
      title: "Exercise Programme: ROM, Strength & Aerobic",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "A complete RA programme has three strands — daily range-of-movement work, progressive strengthening 2–3 times per week, and moderate aerobic exercise building towards 150 minutes per week — dialled up in stable disease and dialled down (never off) during flares.",
        },
        {
          kind: "image",
          illustration: "resistance-band",
          caption: "Elastic bands allow finely graded resistance for small and large joints alike — ideal in RA, where load must be adjusted joint by joint and week by week.",
        },
        {
          kind: "exercise",
          name: "Daily hand range-of-movement sequence",
          purpose: "Maintain finger and wrist mobility and tendon glide; reduce morning stiffness.",
          position: "Sitting, forearms supported on a table; ideally after warming the hands (shower, wax bath or warm water).",
          execution: "Move slowly through: full finger fists (straight → hook → full fist), finger spreads, thumb opposition to each fingertip, wrist circles and gentle wrist extension.",
          dosage: "5–10 repetitions of each movement, 1–2×/day, every day — including during flares.",
          progression: "Add gentle putty squeezing and pinch work in stable disease.",
          precautions: "Move to comfortable end-range without forcing; in a flare, reduce repetitions but do not stop.",
        },
        {
          kind: "exercise",
          name: "Grip strengthening with soft putty or ball",
          purpose: "Improve grip strength — a strong predictor of hand function and independence in RA.",
          position: "Sitting, forearm supported, wrist in slight extension (avoid gripping with a flexed, ulnar-deviated wrist).",
          execution: "Squeeze soft therapy putty or a foam ball smoothly, hold 3 seconds, release fully. Include pinch variations (pad-to-pad).",
          dosage: "8–12 squeezes × 2–3 sets, 3–4×/week in stable disease.",
          progression: "Firmer putty grades; functional tasks (jar practice with adapted technique).",
          precautions: "Skip resistance work on acutely inflamed hand days — keep the range sequence instead.",
        },
        {
          kind: "exercise",
          name: "Sit-to-stand and step-up circuit",
          purpose: "Strengthen the legs for transfers, stairs and walking — protecting independence and countering rheumatoid cachexia.",
          position: "Firm chair for sit-to-stands; low step (10–15 cm) with hand support for step-ups.",
          execution: "Stand up and sit down slowly with even weight; step up leading with each leg alternately, lowering with control.",
          dosage: "8–12 reps of each × 2–3 sets, 2–3×/week.",
          progression: "Lower chair, add small hand weights or a backpack, raise the step.",
          precautions: "Check footwear and forefoot comfort first; use hand support rather than gripping hard with painful hands.",
        },
        {
          kind: "exercise",
          name: "Resistance-band strengthening (shoulders, elbows, hips, knees)",
          purpose: "Progressive whole-body strengthening with joint-by-joint adjustable load.",
          position: "Sitting or standing; band anchored under feet or to a fixed point. Loop the band around the wrist or forearm if gripping is painful.",
          execution: "Rows, shoulder external rotation, elbow flexion/extension, hip abduction and knee extension — smooth 2 seconds out, 3 seconds back.",
          dosage: "8–12 reps × 2–3 sets per movement, 2–3×/week, at an effort of about 5–7/10.",
          progression: "Thicker bands or shorter lever; progress towards free weights or machines in remission.",
          precautions: "Work in pain-free or minimally uncomfortable range; reduce band grade during flares.",
        },
        {
          kind: "exercise",
          name: "Aerobic conditioning: walking, cycling or water-based",
          purpose: "Cardiovascular risk reduction, fatigue management and general conditioning.",
          position: "Choose by joint comfort: cycling or water-based work offloads painful feet and knees; walking with good footwear if feet allow.",
          execution: "Moderate intensity — able to talk but slightly breathless — in bouts of 10 or more minutes.",
          dosage: "Build towards 150 minutes/week of moderate aerobic activity, e.g. 30 minutes 5×/week, or accumulated shorter bouts on fatigue-heavy days.",
          progression: "Extend duration first, then intensity; interval formats help on variable days.",
          precautions: "During systemic flares (fever, severe fatigue) scale right back to gentle movement and rebuild afterwards.",
        },
        {
          kind: "keypoints",
          title: "Dosing in RA",
          items: [
            "Stable disease: train like anyone else — progressive overload applies",
            "Flare days: keep the daily range sequence, switch strengthening to isometrics, shorten aerobic bouts",
            "Use the 24-hour rule: joint pain or swelling clearly worse the next day means trim the dose, not the programme",
            "Morning stiffness responds to warmth plus movement — build both into the routine",
          ],
        },
      ],
    },
    {
      slug: "joint-protection",
      title: "Joint Protection & Energy Conservation",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Joint protection is not avoidance — it is doing the same activities with less joint stress, so the person keeps doing them for decades. Taught properly (with practice, not just leaflets), it reduces hand pain and improves function.",
        },
        {
          kind: "cards",
          items: [
            { title: "Use larger joints", text: "Carry bags on the forearm or shoulder rather than fingers; push doors with the shoulder or hip; lift pans with two hands.", icon: "shield" },
            { title: "Avoid tight, sustained grips", text: "Enlarge handles (foam tubing, chunky pens), use jar openers, tap turners and lever taps rather than white-knuckle grip and twist.", icon: "hand" },
            { title: "Respect pain", text: "Pain lasting well after an activity means the method, load or duration needs changing — modify the task rather than abandoning it.", icon: "alert-triangle" },
            { title: "Avoid positions of deformity", text: "Limit sustained pressure pushing the fingers towards ulnar deviation (e.g. wringing cloths); use flat-hand or two-handed methods.", icon: "corner-down-right" },
            { title: "Pacing & energy conservation", text: "Alternate heavy and light tasks, break jobs into chunks, sit for tasks where possible, plan the week around fatigue patterns — spend energy like a budget.", icon: "battery-charging" },
            { title: "Assistive devices & splints", text: "Working wrist splints for heavy tasks, resting splints in flares (with OT), and gadgets that keep valued activities possible.", icon: "tool" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "The goal is participation: a jar opener that keeps someone cooking independently is a better outcome than a perfect grip measurement.",
            "Introduce joint protection early, while habits are forming — not after deformity has arrived.",
          ],
        },
      ],
    },
    {
      slug: "red-flags",
      title: "Red Flags: The Cervical Spine & Systemic Illness",
      estMinutes: 2,
      difficulty: "Advanced",
      content: [
        {
          kind: "paragraph",
          text: "The most important physiotherapy-specific danger in RA sits at the top of the neck. The atlantoaxial joint (C1–C2) is stabilised by the transverse ligament holding the odontoid peg against the anterior arch of C1 — and that ligament and its synovial joints are exactly the kind of tissue RA erodes. Longstanding disease can produce atlantoaxial subluxation: instability that threatens the spinal cord.",
        },
        {
          kind: "image",
          illustration: "spine",
          caption: "The upper cervical spine — in RA, erosive synovitis can weaken the transverse ligament at C1–C2, so end-range neck movements and manipulative techniques are avoided and instability symptoms are actively screened.",
        },
        {
          kind: "redflags",
          items: [
            "Atlantoaxial instability symptoms: new or worsening deep neck/occipital pain, a feeling of the head 'slipping' or instability on flexion, electric-shock sensations down the spine or limbs (Lhermitte's sign)",
            "Cervical myelopathy signs: bilateral hand clumsiness or paraesthesiae, gait deterioration, hyperreflexia, new bladder or bowel changes — urgent medical referral",
            "NEVER perform cervical manipulation or forceful end-range mobilisation in RA; avoid sustained end-range flexion; flag the neck before intubation or any procedure positioning the head",
            "Any acutely hot, swollen single joint that is disproportionate to the usual pattern — exclude septic arthritis (immunosuppressed patients are higher risk and may not mount a fever)",
            "Systemic illness: fever, night sweats, new breathlessness or chest pain (interstitial lung disease, pericarditis, cardiovascular events), painful red eye — escalate medically",
            "Sudden loss of active movement in a finger — consider extensor tendon rupture, a surgical referral",
          ],
        },
        {
          kind: "warning",
          title: "Medication-related cautions for physiotherapists",
          items: [
            "Long-term corticosteroids: osteoporosis (fracture risk with loading and falls), thin fragile skin, and blunted infection signs",
            "Immunosuppression (DMARDs/biologics): infections present atypically — a 'minor' hot joint or wound deserves respect",
            "Report suspected flares and new systemic symptoms to the rheumatology team — treat-to-target care depends on it",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Think of the RA neck like a suspected unstable ankle: assess function in mid-range, and let imaging and the medical team clear stability before anything vigorous.",
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
            "RA = systemic autoimmune synovitis: symmetrical small joints (MCP/PIP/wrist/MTP, DIPs spared), morning stiffness > 60 min, fatigue and systemic features",
            "Pathology: synovitis → pannus → cartilage and bone erosion → deformity; early DMARDs in the window of opportunity prevent damage",
            "vs OA: OA is local, load-related, stiffness < 30 min, bony swelling, normal bloods",
            "Family: ankylosing spondylitis (inflammatory back pain, better with exercise), psoriatic arthritis (DIPs, dactylitis, nails), gout (acute hot 1st MTP), lupus (multisystem, young women), PMR (girdle stiffness > 50s), fibromyalgia (widespread pain, non-inflammatory)",
            "Assessment: disease state (flare vs stable), joint counts, grip and function, fatigue, feet, cervical screening, HAQ",
            "Exercise is safe and beneficial: daily ROM, strengthening 2–3×/wk, aerobic towards 150 min/wk — adjust, don't stop, in flares",
            "Joint protection: larger joints, bigger handles, pacing, splints and gadgets that preserve participation",
            "Red flags: atlantoaxial subluxation (no end-range/manipulative neck techniques; myelopathy signs → urgent referral), septic arthritis, systemic illness, tendon rupture",
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
      text: "Which feature most reliably distinguishes rheumatoid arthritis from osteoarthritis?",
      options: [
        "Presence of any joint pain",
        "Morning stiffness lasting more than 60 minutes with symmetrical small-joint swelling",
        "Crepitus on movement",
        "Pain that worsens with activity",
      ],
      correctIndex: 1,
      explanation:
        "Prolonged morning stiffness (> 60 minutes) with symmetrical soft swelling of small joints (MCPs, PIPs, wrists, MTPs) points to inflammatory arthritis. OA stiffness lasts under 30 minutes, swelling is bony, and pain is load-related. Crepitus and activity-related pain are typical OA features.",
      difficulty: "Easy",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "inflammatory-vs-degenerative",
    },
    {
      text: "Which joints are characteristically SPARED in rheumatoid arthritis?",
      options: [
        "Metacarpophalangeal (MCP) joints",
        "Wrists",
        "Distal interphalangeal (DIP) joints",
        "Metatarsophalangeal (MTP) joints",
      ],
      correctIndex: 2,
      explanation:
        "RA targets MCPs, PIPs, wrists and MTPs but characteristically spares the DIP joints. DIP involvement suggests osteoarthritis (Heberden's nodes) or psoriatic arthritis instead — a genuinely useful pattern-recognition point.",
      difficulty: "Easy",
      tags: ["anatomy", "assessment"],
      sectionSlug: "presentation",
    },
    {
      text: "What is pannus in rheumatoid arthritis?",
      options: [
        "A benign fatty deposit within the joint capsule",
        "Invasive, chronically inflamed synovial tissue that erodes cartilage and bone",
        "A protective fibrous layer that seals off inflammation",
        "Calcified cartilage at the joint margin",
      ],
      correctIndex: 1,
      explanation:
        "Pannus is organised, chronically inflamed synovium that behaves invasively: it spreads across the joint surface, releases degradative enzymes and activates osteoclasts, producing the cartilage loss and peri-articular bony erosions that define destructive RA. Preventing pannus damage is why early DMARD treatment matters.",
      difficulty: "Easy",
      tags: ["pathology"],
      sectionSlug: "pathophysiology",
    },
    {
      text: "Why is the first 3–6 months after RA onset called the \"window of opportunity\"?",
      options: [
        "Symptoms always resolve spontaneously in this period",
        "Early DMARD treatment during this window substantially improves long-term outcomes before irreversible erosions establish",
        "Physiotherapy is only effective in this period",
        "Blood tests are only accurate early in the disease",
      ],
      correctIndex: 1,
      explanation:
        "Erosive joint damage can begin within months and does not reverse. Starting disease-modifying drugs (e.g. methotrexate) early — within the first months — leads to better disease control, less joint destruction and better function years later, which is why prompt recognition and referral of new persistent synovitis is so important.",
      difficulty: "Medium",
      tags: ["pathology", "management"],
      sectionSlug: "pathophysiology",
    },
    {
      text: "A patient with psoriasis presents with a diffusely swollen \"sausage-shaped\" finger and pitted nails. Which condition does this suggest?",
      options: [
        "Rheumatoid arthritis",
        "Psoriatic arthritis with dactylitis",
        "Gout",
        "Osteoarthritis",
      ],
      correctIndex: 1,
      explanation:
        "Dactylitis (uniform sausage-like swelling of a whole digit), nail pitting, DIP involvement and an asymmetrical pattern in someone with psoriasis point to psoriatic arthritis. RA swelling is joint-centred and symmetrical, gout is an acute monoarthritis, and OA produces bony nodes.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "other-rheumatic-conditions",
    },
    {
      text: "A 55-year-old man wakes with an exquisitely painful, hot, red first metatarsophalangeal joint. What is the most likely diagnosis — and what must be excluded?",
      options: [
        "RA flare; exclude osteoarthritis",
        "Gout; exclude septic arthritis",
        "Fibromyalgia; exclude tendinopathy",
        "Osteoarthritis; exclude bursitis",
      ],
      correctIndex: 1,
      explanation:
        "Sudden overnight onset of a severely painful, hot, red 1st MTP in a middle-aged man is the classic presentation of gout (urate crystal arthropathy). However, every acute hot swollen joint requires medical assessment to exclude septic arthritis, which can look identical and is a joint-destroying emergency.",
      difficulty: "Easy",
      tags: ["clinical-reasoning", "precautions"],
      sectionSlug: "other-rheumatic-conditions",
    },
    {
      text: "Which back pain pattern suggests ankylosing spondylitis rather than mechanical low back pain?",
      options: [
        "Sudden onset after lifting, eased by rest",
        "Insidious onset before age 45, prolonged morning stiffness, night pain, improved by exercise and not by rest",
        "Pain only on prolonged sitting, no morning stiffness",
        "Unilateral leg pain worse with coughing",
      ],
      correctIndex: 1,
      explanation:
        "Inflammatory back pain — insidious onset under 45, morning stiffness over 30 minutes, waking in the second half of the night, improvement with exercise but not rest — suggests axial spondyloarthritis. Recognising it matters: diagnostic delay is notoriously long, and exercise plus rheumatology care changes the disease course.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "other-rheumatic-conditions",
    },
    {
      text: "How does fibromyalgia fundamentally differ from rheumatoid arthritis?",
      options: [
        "Fibromyalgia causes more joint erosions",
        "Fibromyalgia is a disorder of pain processing without inflammation, joint swelling or raised inflammatory markers",
        "Fibromyalgia only affects the spine",
        "Fibromyalgia responds well to DMARDs",
      ],
      correctIndex: 1,
      explanation:
        "Fibromyalgia is a nociplastic condition — amplified central pain processing producing chronic widespread pain, fatigue, unrefreshing sleep and cognitive symptoms — with no synovitis, no erosions and normal inflammatory markers. Management is education, graded exercise and sleep/stress strategies, not immunosuppression. The two can coexist, complicating RA assessment.",
      difficulty: "Medium",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "other-rheumatic-conditions",
    },
    {
      text: "What does current evidence say about exercise in rheumatoid arthritis?",
      options: [
        "Exercise accelerates joint erosion and should be minimised",
        "Only range-of-movement exercise is safe; resistance training is contraindicated",
        "Appropriately dosed strengthening and aerobic exercise are safe, do not increase disease activity, and improve strength, function and fatigue",
        "Exercise is safe only during flares",
      ],
      correctIndex: 2,
      explanation:
        "Trials consistently show that progressive resistance and aerobic training in RA improve strength, aerobic capacity, function and fatigue without worsening disease activity or radiographic damage. The old advice to rest inflamed patients caused deconditioning on top of rheumatoid cachexia. Exercise is adjusted — not stopped — around flares.",
      difficulty: "Easy",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "physio-management",
    },
    {
      text: "During an acute flare with several hot, swollen joints, which exercise strategy is most appropriate?",
      options: [
        "Suspend all exercise until inflammatory markers normalise",
        "Continue the full progressive resistance programme unchanged",
        "Maintain gentle daily range of movement and isometrics, reduce resistance and aerobic load, and rebuild as the flare settles",
        "Switch to high-impact aerobic work to \"burn off\" the inflammation",
      ],
      correctIndex: 2,
      explanation:
        "Flare management is relative rest, not immobilisation: gentle range work keeps joints mobile, isometrics maintain muscle activation without stressing inflamed synovium, and aerobic work is scaled to fatigue. Complete rest costs strength and function; unchanged heavy loading aggravates hot joints.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management", "precautions"],
      sectionSlug: "physio-management",
    },
    {
      text: "Why does aerobic exercise deserve particular emphasis in RA management?",
      options: [
        "It is the only exercise type that reduces joint erosions",
        "RA roughly doubles cardiovascular risk, and aerobic training addresses this alongside fatigue and conditioning",
        "It eliminates the need for medication",
        "Aerobic exercise increases rheumatoid factor clearance",
      ],
      correctIndex: 1,
      explanation:
        "Systemic inflammation makes cardiovascular disease the leading cause of excess mortality in RA — the risk is roughly doubled. Moderate aerobic training (building towards 150 minutes/week) targets this risk directly and also improves fatigue and general conditioning. It complements, never replaces, disease-modifying medication.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "exercise-programme",
    },
    {
      text: "Which is a correct joint-protection principle for rheumatoid hands?",
      options: [
        "Carry shopping bags hooked on the fingers to strengthen them",
        "Use enlarged handles and carry loads on the forearm or larger joints instead of a tight grip",
        "Wring cloths firmly to maintain wrist mobility",
        "Avoid all use of the hands during daily tasks",
      ],
      correctIndex: 1,
      explanation:
        "Joint protection redistributes stress: enlarged/built-up handles reduce grip force, loads are carried on the forearm, shoulder or two hands, and sustained positions pushing towards ulnar deviation (like wringing) are modified. The aim is continued participation with less joint stress — not avoidance of activity.",
      difficulty: "Easy",
      tags: ["management", "precautions"],
      sectionSlug: "joint-protection",
    },
    {
      text: "What is the anatomical basis of atlantoaxial subluxation in RA?",
      options: [
        "Osteophyte overgrowth fusing C1 to C2",
        "Erosive synovitis weakening the transverse ligament that holds the odontoid peg against the anterior arch of C1",
        "Disc degeneration at C5–C6",
        "Congenital absence of the odontoid peg",
      ],
      correctIndex: 1,
      explanation:
        "The C1–C2 articulation is stabilised chiefly by the transverse ligament restraining the odontoid peg. RA's erosive synovitis attacks the surrounding synovial joints and bursae, weakening the ligament and eroding the peg, allowing C1 to slide forward on C2 — especially in flexion — and threatening the spinal cord.",
      difficulty: "Medium",
      tags: ["anatomy", "pathology"],
      sectionSlug: "red-flags",
    },
    {
      text: "Which cervical technique decision is correct for a patient with long-standing RA and neck stiffness?",
      options: [
        "High-velocity cervical manipulation to restore rotation",
        "Sustained end-range flexion stretches at home",
        "No manipulative or forceful end-range techniques; gentle mid-range movement with screening for instability and myelopathy signs",
        "Strong manual traction in flexion",
      ],
      correctIndex: 2,
      explanation:
        "With possible atlantoaxial and subaxial instability, cervical manipulation and forceful end-range techniques (especially flexion) are contraindicated in RA. Care stays in comfortable mid-range with active screening: occipital pain, a sense of the head slipping, Lhermitte's phenomenon, bilateral hand symptoms or gait change all demand urgent medical review.",
      difficulty: "Medium",
      tags: ["precautions", "management"],
      sectionSlug: "red-flags",
    },
    {
      text: "A patient with RA reports progressive clumsiness in both hands, a deteriorating gait and electric-shock sensations down the back on neck flexion. What do these findings suggest?",
      options: [
        "A routine RA flare of the hand joints",
        "Cervical myelopathy from atlantoaxial subluxation — urgent medical referral required",
        "Bilateral carpal tunnel syndrome only",
        "Fibromyalgia-related sensory disturbance",
      ],
      correctIndex: 1,
      explanation:
        "Bilateral hand clumsiness, gait deterioration and Lhermitte's phenomenon are cord signs. In RA the prime suspect is atlantoaxial subluxation compressing the cervical cord. This is an urgent medical situation: stop provocative assessment and refer for imaging and specialist review. Carpal tunnel syndrome (also common in RA) does not explain legs or Lhermitte's.",
      difficulty: "Hard",
      tags: ["precautions", "clinical-reasoning", "assessment"],
      sectionSlug: "red-flags",
    },
    {
      text: "Why must physiotherapists be extra vigilant about infection in RA patients on biologic drugs?",
      options: [
        "Biologics have no effect on the immune system",
        "Immunosuppression can mask or mute classic infection signs, so a septic joint or wound infection may present atypically",
        "Infections cannot occur on biologic therapy",
        "Biologics cause fever in all patients",
      ],
      correctIndex: 1,
      explanation:
        "Biologics (e.g. TNF inhibitors) and other DMARDs suppress the immune responses that produce classic signs like high fever and marked inflammation. A modest-looking hot joint or wound in an immunosuppressed patient can hide serious infection — maintain a low threshold for medical escalation, and remember septic arthritis risk is already elevated in RA.",
      difficulty: "Hard",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "red-flags",
    },
    {
      text: "Which outcome measure is the classic patient-reported instrument for functional disability in RA?",
      options: [
        "KOOS",
        "The Health Assessment Questionnaire (HAQ)",
        "VISA-A",
        "Berg Balance Scale",
      ],
      correctIndex: 1,
      explanation:
        "The HAQ measures self-reported difficulty across everyday domains (dressing, eating, gripping, walking) and is the standard functional disability measure in RA, tracking meaningfully with disease activity and long-term outcomes. KOOS is knee-specific, VISA-A is Achilles tendinopathy-specific, and the Berg assesses balance.",
      difficulty: "Medium",
      tags: ["assessment"],
      sectionSlug: "assessment",
    },
    {
      text: "What is rheumatoid cachexia and what is its main implication for physiotherapy?",
      options: [
        "Fat gain caused by steroid treatment; implication — dietary referral only",
        "Inflammation-driven loss of muscle mass despite stable body weight; implication — resistance training is essential",
        "Bone erosion at the joint margins; implication — avoid all loading",
        "Fluid retention in the joints; implication — compression garments",
      ],
      correctIndex: 1,
      explanation:
        "Chronic inflammatory cytokines drive muscle protein breakdown, so RA patients lose muscle (often with stable or increased fat mass) — rheumatoid cachexia. It compounds weakness from pain and inactivity. Progressive resistance training is the effective counter-measure, which is one more reason rest-based management fails these patients.",
      difficulty: "Hard",
      tags: ["pathology", "exercise-therapy"],
      sectionSlug: "physio-management",
    },
    {
      text: "A patient with RA suddenly cannot actively extend her ring finger, though passive extension is full and pain is modest. What should you suspect?",
      options: [
        "A flare of MCP synovitis",
        "Extensor tendon rupture requiring surgical referral",
        "Early Dupuytren's contracture",
        "Fibromyalgia",
      ],
      correctIndex: 1,
      explanation:
        "Sudden loss of active extension with preserved passive range suggests extensor tendon rupture — in RA, tendons fray over eroded, roughened bone (classically the ulnar head) and can rupture sequentially from the little finger inwards. This needs prompt surgical referral; a synovitis flare would not abolish active extension selectively.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning", "precautions"],
      sectionSlug: "red-flags",
    },
  ],
  flashcards: [
    { front: "Core clinical picture of RA?", back: "Symmetrical small-joint synovitis (MCPs, PIPs, wrists, MTPs — DIPs spared), morning stiffness > 60 minutes, fatigue and systemic features, relapsing–remitting course." },
    { front: "RA vs OA: three fastest discriminators?", back: "Stiffness duration (> 60 min vs < 30 min), swelling type (boggy synovial vs bony), and distribution (symmetrical small joints vs weight-bearing joints and DIPs)." },
    { front: "Define pannus.", back: "Invasive, chronically inflamed synovial tissue that spreads over the joint surface, releasing enzymes and activating osteoclasts — the agent of cartilage loss and bony erosion in RA." },
    { front: "Why do DMARDs need to start early in RA?", back: "Erosions form within months and are irreversible. Treatment in the first 3–6 months — the window of opportunity — gives markedly better long-term disease control and function." },
    { front: "Which joints does RA typically spare, and who claims them instead?", back: "The DIP joints — DIP disease suggests osteoarthritis (Heberden's nodes) or psoriatic arthritis." },
    { front: "Hallmarks of inflammatory back pain (axial spondyloarthritis)?", back: "Onset < 45, insidious, morning stiffness > 30 min, night pain, better with exercise, not better with rest." },
    { front: "Classic gout presentation, and the diagnosis you must always exclude?", back: "Sudden overnight hot, red, exquisitely painful 1st MTP joint; always exclude septic arthritis in any acute hot joint." },
    { front: "Is exercise safe in RA?", back: "Yes — progressive strengthening and aerobic exercise improve strength, function and fatigue without increasing disease activity or joint damage. Adjust (don't stop) during flares." },
    { front: "The three strands of an RA exercise programme?", back: "Daily range-of-movement work (hands especially), progressive strengthening 2–3×/week, and moderate aerobic exercise building to ~150 minutes/week." },
    { front: "Four joint-protection principles for rheumatoid hands?", back: "Use larger joints to carry load, enlarge handles/avoid tight sustained grips, avoid positions of deformity (ulnar-deviating stress), and pace activity across the day." },
    { front: "Atlantoaxial subluxation in RA — mechanism and physio rule?", back: "Erosive synovitis weakens the transverse ligament holding the dens, letting C1 slip on C2. Rule: no cervical manipulation or forced end-range (especially flexion); screen for cord signs." },
    { front: "Cord signs that demand urgent referral in an RA neck?", back: "Bilateral hand clumsiness/paraesthesiae, gait deterioration, Lhermitte's electric-shock sign, hyperreflexia, new bladder or bowel symptoms." },
  ],
};

export default topic;
