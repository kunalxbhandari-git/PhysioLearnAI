import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "fracture-management",
  title: "Fractures & Bone Healing",
  category: "Musculoskeletal",
  description:
    "From bone biology and fracture classification through healing stages, reduce–hold–rehabilitate management, complications, and the physiotherapist's role during and after immobilisation.",
  difficulty: "Intermediate",
  estMinutes: 29,
  icon: "bone",
  keyTakeaways: [
    "Bone is living, constantly remodeling tissue — it adapts its architecture to the loads placed on it (Wolff's law).",
    "Fracture description follows a standard language: site, pattern, displacement, and whether the skin is broken (open vs closed).",
    "Secondary bone healing proceeds through haematoma, soft (fibrocartilage) callus, hard (bony) callus and remodeling — union takes roughly 6–12 weeks in adult long bones, faster in children.",
    "Management follows reduce → hold → rehabilitate: restore alignment, hold it with cast or fixation, then restore function.",
    "Physiotherapy starts during immobilisation: maintain adjacent joints, muscle activation, circulation and independence — not after the cast comes off.",
    "Weight-bearing status (NWB → PWB → FWB) is set by the managing team and progressed as healing allows; gait-aid instruction must match it exactly.",
    "Complications to know: delayed/non-union, malunion, avascular necrosis, CRPS, compartment syndrome, fat embolism and VTE — several are emergencies.",
    "Fragility fractures signal osteoporosis: treat the fracture, then address bone health, strength and falls risk to prevent the next one.",
  ],
  sections: [
    {
      slug: "overview",
      title: "Overview: Fractures in Physiotherapy Practice",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "A fracture is a break in the continuity of bone — from a hairline crack to a shattered, displaced injury. Physiotherapists meet fractures everywhere: on wards after surgical fixation, in fracture clinics during cast immobilisation, and in outpatient rehabilitation restoring movement, strength and confidence afterwards.",
        },
        {
          kind: "paragraph",
          text: "Two ideas anchor this topic. First, bone healing is a predictable biological sequence that sets the timeline for what rehabilitation can safely load. Second, the physiotherapist's job spans the whole journey — protecting healing while preventing the stiffness, weakness and deconditioning that immobilisation causes everywhere else in the body.",
        },
        {
          kind: "keypoints",
          title: "The physiotherapist's fracture questions",
          items: [
            "What bone, what pattern, and how is it being held (cast, plate, nail, external fixator)?",
            "Where is it in the healing timeline, and what is the current weight-bearing status?",
            "What can I safely load now, and what must I protect?",
            "What is happening to everything that is NOT fractured — adjacent joints, muscles, fitness, balance?",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Never guess weight-bearing status — read the operation note or clinic letter, and if unclear, ask the managing team.",
          ],
        },
      ],
    },
    {
      slug: "bone-structure",
      title: "Bone Structure & Remodeling",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Bone is a composite of collagen (giving tensile strength and flexibility) and mineral — hydroxyapatite — giving compressive strength and rigidity. Far from inert, it is richly vascularised, innervated, and continuously renewed throughout life.",
        },
        {
          kind: "cards",
          items: [
            { title: "Cortical (compact) bone", text: "The dense outer shell, thickest in long-bone shafts. Provides most of the mechanical strength.", icon: "shield" },
            { title: "Trabecular (cancellous) bone", text: "The honeycomb interior found at bone ends and in vertebrae. Metabolically active and the first site weakened by osteoporosis.", icon: "grid" },
            { title: "Periosteum", text: "The vascular, innervated membrane covering bone — a key source of bone-forming cells after fracture, and richer/thicker in children (faster healing).", icon: "layers" },
            { title: "Bone cells", text: "Osteoblasts build bone, osteocytes sense mechanical strain from within the matrix, osteoclasts resorb bone. Healthy bone is a balance of all three.", icon: "users" },
          ],
        },
        {
          kind: "paragraph",
          text: "Remodeling is the coupled cycle of osteoclastic resorption followed by osteoblastic formation, replacing several per cent of the skeleton each year. Its direction follows Wolff's law: bone adapts its mass and architecture to the mechanical demands placed on it. Load bone and it strengthens along the lines of stress; unload it (bed rest, immobilisation, space flight) and it demineralises within weeks.",
        },
        {
          kind: "keypoints",
          items: [
            "Wolff's law is the biological rationale for progressive loading in fracture rehab and for weight-bearing exercise in osteoporosis",
            "Blood supply is everything: fracture sites with precarious vascularity (scaphoid, femoral neck, talus) heal poorly and risk avascular necrosis",
            "Peak bone mass is reached around age 30; after menopause, accelerated resorption drives bone loss in women",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Muscle contraction is a major source of bone strain — strengthening work is bone medicine, not just muscle medicine.",
          ],
        },
      ],
    },
    {
      slug: "fracture-types",
      title: "Fracture Types & Classification",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Fractures are described in a standard sequence: which bone and where (proximal/shaft/distal), the fracture pattern, displacement and angulation, and whether the overlying skin is intact (closed) or breached (open/compound — a surgical urgency because of infection risk).",
        },
        {
          kind: "image",
          illustration: "fracture-types",
          caption: "Common fracture patterns: transverse, oblique, spiral, comminuted, greenstick and avulsion — the pattern reflects the mechanism and force of injury.",
        },
        {
          kind: "table",
          headers: ["Pattern", "Description", "Typical mechanism"],
          rows: [
            ["Transverse", "Break at right angles to the shaft", "Direct blow or pure bending force"],
            ["Oblique", "Angled break line", "Angulation with axial compression"],
            ["Spiral", "Helical fracture line winding around the shaft", "Twisting (rotational) force — e.g. sports, skiing"],
            ["Comminuted", "Three or more fragments", "High-energy trauma; harder to hold, slower to heal"],
            ["Segmental", "Fracture at two levels isolating a shaft segment", "High energy; vulnerable middle-segment blood supply"],
            ["Greenstick", "Incomplete break, one cortex bends", "Children — bone bends before it breaks"],
            ["Avulsion", "Fragment pulled off by tendon or ligament", "Sudden forceful contraction/traction (e.g. ASIS, base of 5th metatarsal)"],
            ["Impacted / compression", "Ends driven into each other; trabecular collapse in vertebrae", "Axial loading; vertebral compression classic in osteoporosis"],
            ["Stress fracture", "Micro-damage accumulating faster than repair", "Repetitive loading — training spikes in runners, military recruits"],
            ["Pathological", "Fracture through abnormally weak bone", "Minimal trauma through tumour, metastasis, severe osteoporosis"],
          ],
        },
        {
          kind: "warning",
          title: "Patterns that change the plan",
          items: [
            "Open fractures: contamination risk — urgent surgical care, antibiotics; rehab timelines lengthen",
            "Intra-articular fractures: the joint surface is involved — anatomical reduction matters and post-traumatic OA risk rises",
            "Growth-plate (physeal) injuries in children (Salter–Harris classification) can disturb growth — handled by specialist teams",
            "A fracture from trivial trauma in an older adult is a fragility fracture until proven otherwise — think osteoporosis",
          ],
        },
        {
          kind: "pearls",
          items: [
            "The pattern tells you the mechanism: a spiral tibial fracture means the leg was twisted — useful when the story and the injury don't match.",
          ],
        },
      ],
    },
    {
      slug: "fracture-healing",
      title: "Stages of Fracture Healing",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Most fractures heal by secondary (indirect) healing through a callus — the process described below. It requires some micromotion at the fracture site and a good blood supply. (Rigid anatomical fixation with absolute stability instead produces primary healing: direct osteonal remodeling across the fracture line, with no callus.)",
        },
        {
          kind: "steps",
          items: [
            { title: "1. Haematoma & inflammation (day 0 – ~1 week)", text: "Bleeding from bone and periosteum forms a fracture haematoma. Inflammatory cells clear debris and release signalling molecules that recruit repair cells; granulation tissue bridges the gap by the end of the first week." },
            { title: "2. Soft callus (weeks 2–3 onwards)", text: "Fibroblasts and chondroblasts convert granulation tissue into fibrocartilage — a soft callus that connects but cannot bear load. The fracture becomes 'sticky': less mobile and less painful." },
            { title: "3. Hard callus (weeks ~4–12)", text: "Osteoblasts mineralise the soft callus into woven bone (endochondral ossification), enlarging a visible callus on X-ray. Clinical union — no tenderness or movement at the site — is typically reached in this window: roughly 6–8 weeks for upper-limb and 8–12+ weeks for major lower-limb long bones in adults." },
            { title: "4. Remodeling (months to years)", text: "Disorganised woven bone is replaced by strong lamellar bone; the callus is trimmed and the medullary canal reforms, guided by mechanical loading (Wolff's law). Children can remodel remarkably large deformities; adults far less." },
          ],
        },
        {
          kind: "keypoints",
          title: "What changes the timeline",
          items: [
            "Faster: children, good blood supply, cancellous bone, anatomical reduction, controlled loading",
            "Slower: smoking (major, dose-related), diabetes, poor nutrition and vitamin D deficiency, NSAID overuse, infection, excessive movement or gap at the site, poor vascularity",
            "Rule of thumb: children ~ half adult healing times; lower limb longer than upper limb",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Controlled mechanical load stimulates callus — this is why surgeons often want early protected weight-bearing through a nailed femur or tibia, and why blanket rest is not 'safe'.",
            "Union is a clinical and radiological judgement made by the managing team — physiotherapy progressions hang off that decision.",
          ],
        },
      ],
    },
    {
      slug: "management-principles",
      title: "Management Principles: Reduce, Hold, Rehabilitate",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Orthopaedic fracture care follows three steps: reduce the fracture (restore acceptable alignment), hold the reduction until union, and rehabilitate the limb and person throughout. The choice of 'hold' method balances fracture stability against the costs of immobilisation.",
        },
        {
          kind: "steps",
          items: [
            { title: "Reduce", text: "Closed reduction: manipulation under anaesthesia/analgesia without opening the skin. Open reduction: surgical exposure to realign fragments — required when closed methods fail, or for displaced intra-articular fractures." },
            { title: "Hold", text: "Non-operative: casts, splints, braces and slings — cheap and non-invasive, but they immobilise joints and depend on the cast holding position. Operative fixation: ORIF with plates and screws, intramedullary nails, wires, or external fixation for severe soft-tissue injury." },
            { title: "Rehabilitate", text: "Runs in parallel from day one: swelling control, maintaining every joint that does not have to be immobilised, muscle activation, safe mobility with the correct weight-bearing status, then progressive restoration of range, strength, balance and function once the 'hold' allows." },
          ],
        },
        {
          kind: "table",
          headers: ["Approach", "Advantages", "Costs / considerations"],
          rows: [
            ["Cast / brace (conservative)", "Non-invasive, no surgical or anaesthetic risk, effective for stable, well-aligned fractures", "Joints above/below often immobilised → stiffness and atrophy; position can slip; cast care and pressure-area vigilance needed"],
            ["ORIF (plates/screws)", "Anatomical reduction, absolute stability, allows early joint movement — key for intra-articular fractures", "Surgical risks (infection, blood loss); metalwork sits under soft tissue; loading still limited until union"],
            ["Intramedullary nail", "Load-sharing internal splint for long-bone shafts; usually permits early protected weight-bearing", "Rotational control and entry-point pain issues; still requires progressive rehab"],
            ["External fixation", "Rapid stabilisation with severe soft-tissue injury, open or infected fractures", "Pin-site care and infection risk; bulky frame limits function"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "Fixation is not healing: a plated bone still has an unhealed fracture — metalwork buys stability for early movement, not permission for full load.",
            "The best 'hold' is the one that controls the fracture with the least immobilisation of everything else.",
          ],
        },
      ],
    },
    {
      slug: "complications",
      title: "Complications & Red Flags",
      estMinutes: 3,
      difficulty: "Advanced",
      content: [
        {
          kind: "paragraph",
          text: "Physiotherapists are often the clinicians who see the fracture patient most frequently — recognising complications early is a core professional responsibility.",
        },
        {
          kind: "table",
          headers: ["Complication", "What it is", "Clinical clues"],
          rows: [
            ["Delayed union / non-union", "Healing slower than expected, or a fracture that has stopped healing (non-union may form a false joint)", "Persistent fracture-site pain and tenderness on loading beyond the expected timeframe; mobility at the site; risk factors — smoking, infection, poor blood supply, gap"],
            ["Malunion", "Union in a poor position (angulation, rotation, shortening)", "Visible deformity, altered biomechanics, adjacent-joint overload"],
            ["Avascular necrosis (AVN)", "Bone death from lost blood supply", "Classic sites: femoral head after neck fracture, scaphoid proximal pole, talus. Persistent deep pain and stiffness months after injury"],
            ["Complex regional pain syndrome (CRPS)", "Disproportionate regional pain with vasomotor, sensory and motor changes, often after wrist or ankle fracture", "Pain out of proportion and beyond one nerve territory, swelling, colour and temperature change, sweating, allodynia, stiffness"],
            ["Post-traumatic OA / stiffness", "Joint degeneration and capsular restriction, especially after intra-articular fracture or long immobilisation", "Progressive joint pain and restricted range after apparently sound union"],
          ],
        },
        {
          kind: "redflags",
          items: [
            "Acute compartment syndrome — pain out of proportion, worse on passive stretch, tense compartment, paraesthesia (classic after tibial fracture, including in a cast): surgical emergency — call the team immediately, elevate to heart level only, split/remove circumferential dressings per local protocol",
            "Fat embolism syndrome — 24–72 h after long-bone/pelvic fracture: sudden breathlessness, hypoxia, confusion/agitation, petechial rash on chest, axillae and conjunctivae — medical emergency",
            "Venous thromboembolism — calf pain, swelling and warmth (DVT); sudden dyspnoea, pleuritic chest pain (PE) — urgent medical review",
            "Signs of infection after open fracture or surgery — increasing pain, fever, wound redness or discharge",
            "Cast danger signs — escalating pain, numbness, blue or white digits, inability to move fingers/toes: never ignore, never just reassure",
            "Suspected pathological fracture — fracture from minimal force, night pain, weight loss or cancer history",
          ],
        },
        {
          kind: "warning",
          title: "Early CRPS is treatable — look for it",
          items: [
            "Suspect it when pain, swelling and sensitivity are worsening at the stage they should be improving",
            "Management is active: education, graded motor imagery/desensitisation and progressive functional loading — not rest and avoidance",
            "Escalate early to the medical team for diagnosis and pain management support",
          ],
        },
        {
          kind: "pearls",
          items: [
            "\"Pain out of proportion\" is the single most useful phrase in fracture care — it opens the door to compartment syndrome, infection, AVN and CRPS.",
          ],
        },
      ],
    },
    {
      slug: "physio-immobilisation",
      title: "Physiotherapy During Immobilisation",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Rehabilitation does not wait for the cast to come off. While the fracture is protected, the physiotherapist manages everything around it: swelling, adjacent joints, muscle activation, fitness, and safe independent mobility.",
        },
        {
          kind: "cards",
          items: [
            { title: "Swelling control", text: "Elevation, active pumping exercises (fingers/toes, ankle pumps), and monitoring for cast tightness as swelling fluctuates.", icon: "arrow-up" },
            { title: "Adjacent joints", text: "Full active range for every joint not immobilised — shoulder and fingers with a wrist cast; hip, knee and toes with an ankle cast. Stiff shoulders after wrist fractures are common and preventable.", icon: "refresh-cw" },
            { title: "Muscle activation", text: "Isometric contractions inside the cast (quadriceps sets, gluteal sets, grip work) limit atrophy and maintain the neural drive to muscles.", icon: "zap" },
            { title: "Gait & aids", text: "Teach the prescribed weight-bearing status with the right aid — frame, crutches or stick — including stairs, sitting and transfers. Check aid height and safety at home.", icon: "navigation" },
            { title: "General fitness", text: "Maintain cardiovascular fitness and the uninjured limbs: single-leg cycling, upper-body ergometry, resistance work for the other three limbs. Cross-education even gives small strength benefits to the immobilised side.", icon: "heart" },
            { title: "Education", text: "Cast care, danger signs, smoking cessation (it genuinely delays union), nutrition, and what the healing timeline will look like.", icon: "book-open" },
          ],
        },
        {
          kind: "keypoints",
          title: "Weight-bearing terminology",
          items: [
            "NWB — non-weight-bearing: the limb must not touch the ground under load",
            "TTWB/TDWB — touch/toe-down for balance only, no real load",
            "PWB — partial weight-bearing: a prescribed fraction of body weight (teach with scales or biofeedback)",
            "WBAT — weight-bearing as tolerated: pain is the limit",
            "FWB — full weight-bearing without restriction",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Rehearse the weight-bearing restriction on stairs and transfers before discharge — that is where restrictions fail in real life.",
          ],
        },
      ],
    },
    {
      slug: "rehab-after-immobilisation",
      title: "Rehabilitation After Immobilisation & Key Exercises",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "When the cast comes off or fixation is deemed stable enough, the limb that emerges is stiff, weak, swollen and unfamiliar. Rehabilitation now restores, in rough order of emphasis: joint range and swelling control → strength and graded bone loading → balance and proprioception → full function, work and sport. Weight-bearing progresses NWB → PWB → FWB as the surgeon confirms healing.",
        },
        {
          kind: "steps",
          items: [
            { title: "Restore range & settle the tissues", text: "Active and active-assisted range into stiffness (not sharp fracture pain), swelling management, scar care after surgery, and re-normalising skin sensitivity." },
            { title: "Rebuild strength & bone load", text: "Progressive resistance for the whole limb and kinetic chain, moving from isometrics to isotonic bands and weights. Gradually increasing weight-bearing exercise loads the healing bone along functional lines of stress." },
            { title: "Re-train gait & balance", text: "Wean the walking aid as strength and confidence allow, retrain symmetrical gait, and add balance and proprioceptive work — essential after lower-limb fractures and for older adults at falls risk." },
            { title: "Return to full function", text: "Task-specific training for work, home and sport; impact and running progressions only once union is confirmed and strength is near-symmetrical." },
          ],
        },
        {
          kind: "exercise",
          name: "Isometric quadriceps sets (in or out of cast)",
          purpose: "Maintain quadriceps activation and limit atrophy during and immediately after lower-limb immobilisation.",
          position: "Long sitting, leg supported, knee as straight as the cast or comfort allows.",
          execution: "Tighten the thigh, pushing the knee down, hold 5 seconds, relax fully.",
          dosage: "10–15 reps × 3–4 sets, several times daily.",
          progression: "Add straight-leg raises, then resisted knee extension once permitted.",
          precautions: "Should not provoke fracture-site pain; keep within the prescribed weight-bearing rules.",
        },
        {
          kind: "exercise",
          name: "Ankle pumps and circles",
          purpose: "Circulation (DVT-risk reduction), swelling control and ankle mobility during lower-limb injury or bed rest.",
          position: "Long sitting or supine, leg elevated on a pillow.",
          execution: "Pump the ankle briskly up and down through full available range; add slow circles in both directions.",
          dosage: "20–30 pumps every waking hour during the immobilisation period.",
          progression: "Progress to resisted band dorsiflexion/plantarflexion once out of the cast.",
          precautions: "Report calf pain, heat or new swelling — do not exercise through suspected DVT symptoms.",
        },
        {
          kind: "exercise",
          name: "Wrist and forearm active range (after distal radius fracture)",
          purpose: "Restore wrist flexion/extension and forearm rotation — the ranges most limited after cast removal.",
          position: "Sitting, elbow bent to 90° and tucked at the side (isolates pronation/supination), forearm supported.",
          execution: "Slow active wrist flexion/extension, then palm-up/palm-down rotation, moving into firm stiffness and holding 3–5 seconds at end-range.",
          dosage: "10 reps each direction, 4–5×/day.",
          progression: "Add gentle overpressure with the other hand, then grip strengthening (putty, ball) and functional loading.",
          precautions: "Expect stretching discomfort, not sharp bony pain; watch for CRPS signs (disproportionate pain, swelling, colour change).",
        },
        {
          kind: "exercise",
          name: "Partial → full weight-bearing sit-to-stand",
          purpose: "Graded lower-limb bone and muscle loading that directly rebuilds transfer independence.",
          position: "Sitting on a firm chair, both feet on the floor, hands on armrests as needed.",
          execution: "Stand up sharing load between both legs according to the prescribed status (e.g. 50% PWB), lower slowly over 3 seconds.",
          dosage: "8–12 reps × 2–3 sets, daily.",
          progression: "Reduce hand support → even weight distribution → lower seat → single-leg emphasis once FWB and united.",
          precautions: "Load through the injured limb only to the prescribed level until the team confirms progression.",
        },
        {
          kind: "exercise",
          name: "Step-and-hold balance work",
          purpose: "Restore proprioception and single-leg confidence after lower-limb fracture; falls prevention in older patients.",
          position: "Standing at a counter or in parallel bars for support.",
          execution: "Step forward onto the affected leg and hold steady for 3–5 seconds before returning; progress to single-leg stance.",
          dosage: "8–10 reps × 2–3 sets, daily; build single-leg stance towards 30 seconds.",
          progression: "Reduce hand support → eyes closed → compliant surface → stepping in multiple directions.",
          precautions: "Only once weight-bearing status allows full load; guard against falls at all times.",
        },
        {
          kind: "keypoints",
          title: "Progression rules",
          items: [
            "Respect the surgeon's weight-bearing and range restrictions — they encode fracture stability you cannot see",
            "Stretching discomfort and stiffness pain are acceptable; sharp localised fracture pain on load is a stop sign",
            "Bone continues remodeling for months — keep progressive loading going well after 'discharge'",
          ],
        },
      ],
    },
    {
      slug: "osteoporosis-fragility",
      title: "Osteoporosis, Fragility Fractures & Falls",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Osteoporosis is a skeletal disease of reduced bone mass and degraded microarchitecture, leaving bone fragile. It is silent until a fragility fracture occurs — a fracture from a fall from standing height or less, most typically of the distal radius, vertebral body, or hip (proximal femur).",
        },
        {
          kind: "image",
          illustration: "walking-aids",
          caption: "Walking aids graded from stick to wheeled frame — after a fragility fracture, the right aid restores safe mobility while balance and strength are retrained to reduce the risk of the next fall.",
        },
        {
          kind: "paragraph",
          text: "A first fragility fracture is the strongest warning of the next: it should trigger bone-health assessment (DXA scanning, medical management) and a structured falls-risk review — because a fragility fracture needs two ingredients, fragile bone and a fall. Physiotherapy addresses both arms: bone loading and falls prevention.",
        },
        {
          kind: "cards",
          items: [
            { title: "Who is at risk", text: "Post-menopausal women, adults over 65, long-term corticosteroid use, low body weight, smoking and excess alcohol, previous fragility fracture, family history of hip fracture.", icon: "users" },
            { title: "Bone loading", text: "Progressive resistance training and weight-bearing impact exercise (as appropriate to fracture risk) stimulate bone via Wolff's law; walking alone is not a sufficient bone stimulus.", icon: "trending-up" },
            { title: "Falls prevention", text: "Strength and balance training (e.g. Otago-style programmes, tai chi) with adequate dose and challenge reduces falls; review footwear, vision, medication and home hazards in the MDT.", icon: "shield" },
            { title: "Vertebral fractures", text: "Often present only as height loss, increasing kyphosis or acute mid-line back pain. Emphasise back-extensor strengthening and hip-hinge technique; avoid repeated loaded end-range spinal flexion.", icon: "alert-triangle" },
          ],
        },
        {
          kind: "keypoints",
          title: "Hip fracture essentials",
          items: [
            "Surgical fixation or arthroplasty within 36–48 hours and mobilisation from day one post-op is the standard of care",
            "Early mobilisation reduces delirium, pneumonia, VTE and pressure injury — 'rest' is the enemy on a hip-fracture ward",
            "Roughly half of hip-fracture patients do not regain their previous mobility — intensity and duration of rehab matter",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Treat every low-trauma fracture in an over-50 as a system alarm: fix the fracture, then chase the bone health and the falls risk — that is secondary prevention.",
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
            "Bone remodels to load (Wolff's law); blood supply determines healing potential — beware scaphoid, femoral neck, talus",
            "Describe fractures by site, pattern (transverse/oblique/spiral/comminuted/greenstick/avulsion), displacement, open vs closed",
            "Healing: haematoma → soft callus (2–3 wk) → hard callus/union (~6–12 wk adult long bones) → remodeling (months–years); children heal about twice as fast",
            "Management = reduce → hold (cast or fixation) → rehabilitate from day one",
            "During immobilisation: swelling control, adjacent joints, isometrics, correct weight-bearing gait, fitness",
            "After: range → strength and graded bone loading → balance → function; progress NWB → PWB → FWB per the team",
            "Red flags: compartment syndrome, fat embolism, DVT/PE, infection, cast danger signs, pain out of proportion, CRPS",
            "Fragility fracture = osteoporosis alarm → bone-health referral + strength, balance and falls-prevention programme",
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
      text: "Wolff's law states that:",
      options: [
        "Bone healing always takes exactly six weeks",
        "Bone adapts its mass and architecture to the mechanical loads placed upon it",
        "Fractures must be immobilised until fully remodeled",
        "Cortical bone is replaced by trabecular bone with age",
      ],
      correctIndex: 1,
      explanation:
        "Wolff's law describes bone's adaptation to mechanical demand: loading strengthens bone along lines of stress, while unloading (bed rest, immobilisation) causes rapid demineralisation. It underpins progressive loading in fracture rehab and weight-bearing exercise in osteoporosis.",
      difficulty: "Easy",
      tags: ["anatomy", "pathology"],
      sectionSlug: "bone-structure",
    },
    {
      text: "A spiral fracture of the tibia most likely resulted from which mechanism?",
      options: [
        "A direct blow to the shin",
        "A twisting (rotational) force",
        "Pure axial compression",
        "Repetitive low-level loading",
      ],
      correctIndex: 1,
      explanation:
        "Spiral fractures wind helically around the shaft and are produced by rotational force — the foot fixed while the body twists, as in skiing or football. Direct blows produce transverse patterns, axial/angulated loads oblique patterns, and repetitive loading stress fractures.",
      difficulty: "Easy",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "fracture-types",
    },
    {
      text: "What is the correct sequence of secondary (callus) fracture healing?",
      options: [
        "Hard callus → soft callus → haematoma → remodeling",
        "Haematoma/inflammation → soft callus → hard callus → remodeling",
        "Remodeling → haematoma → callus → union",
        "Soft callus → haematoma → hard callus → remodeling",
      ],
      correctIndex: 1,
      explanation:
        "Secondary healing proceeds from fracture haematoma and inflammation, through a fibrocartilaginous soft callus (weeks 2–3), to a mineralised hard callus of woven bone (roughly weeks 4–12, when union occurs), and finally months to years of remodeling into lamellar bone.",
      difficulty: "Easy",
      tags: ["pathology"],
      sectionSlug: "fracture-healing",
    },
    {
      text: "Approximately how long does clinical union of a major adult lower-limb long-bone fracture typically take?",
      options: ["1–2 weeks", "3–4 weeks", "8–12 weeks or more", "12–18 months"],
      correctIndex: 2,
      explanation:
        "Adult lower-limb long bones (tibia, femur) typically unite over about 8–12+ weeks; upper-limb fractures are faster (~6–8 weeks) and children heal in roughly half adult times. Remodeling continues long after union — but union is the milestone that unlocks unrestricted loading.",
      difficulty: "Medium",
      tags: ["pathology", "management"],
      sectionSlug: "fracture-healing",
    },
    {
      text: "Which factor is most strongly associated with delayed union and non-union?",
      options: [
        "Early protected weight-bearing through a nailed fracture",
        "Smoking",
        "Isometric exercise within the cast",
        "Elevation of the limb",
      ],
      correctIndex: 1,
      explanation:
        "Smoking impairs fracture healing in a dose-related way — nicotine and carbon monoxide compromise the blood supply and osteoblast function that union depends on. Controlled loading, isometrics and elevation all support healing. Other non-union risks include infection, fracture gap and poor vascularity.",
      difficulty: "Medium",
      tags: ["pathology", "management"],
      sectionSlug: "fracture-healing",
    },
    {
      text: "In the \"reduce–hold–rehabilitate\" framework, what does \"reduce\" mean?",
      options: [
        "Reducing the patient's activity levels",
        "Restoring acceptable alignment of the fracture fragments",
        "Reducing swelling with compression",
        "Minimising analgesic use",
      ],
      correctIndex: 1,
      explanation:
        "Reduction is the restoration of acceptable bony alignment — closed (manipulation without surgery) or open (surgical exposure). The reduction is then held by cast, brace or fixation until union, with rehabilitation running alongside from the start.",
      difficulty: "Easy",
      tags: ["management"],
      sectionSlug: "management-principles",
    },
    {
      text: "What is the key rehabilitation advantage of ORIF for a displaced intra-articular fracture compared with casting?",
      options: [
        "The fracture heals within days of surgery",
        "Anatomical reduction and stable fixation allow early joint movement, protecting articular cartilage and preventing stiffness",
        "No weight-bearing restrictions apply after surgery",
        "Physiotherapy becomes unnecessary",
      ],
      correctIndex: 1,
      explanation:
        "Intra-articular fractures need anatomical joint-surface restoration, and stable internal fixation allows the joint to move early — reducing stiffness and post-traumatic OA risk that prolonged casting would invite. The fracture itself still needs normal healing time, and loading remains restricted until union.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "management-principles",
    },
    {
      text: "Six hours after a tibial fracture is casted, a patient reports severe escalating pain unrelieved by analgesia and worse on passive toe stretch, with tingling in the foot. What is the most appropriate action?",
      options: [
        "Reassure — pain is expected after fracture",
        "Elevate the limb high above the heart and review tomorrow",
        "Treat as suspected acute compartment syndrome — urgent escalation to the surgical team now",
        "Provide TENS for pain relief",
      ],
      correctIndex: 2,
      explanation:
        "Pain out of proportion, pain on passive stretch and paraesthesia in a casted tibia are hallmark features of acute compartment syndrome — a surgical emergency where rising pressure strangles muscle and nerve. Escalate immediately; keep the limb at heart level (excessive elevation lowers perfusion) and follow protocol on splitting circumferential casts. Delay costs muscle.",
      difficulty: "Medium",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "complications",
    },
    {
      text: "Two days after femoral shaft fracture fixation, a patient becomes acutely breathless, confused and hypoxic, with a petechial rash across the chest. What is the most likely diagnosis?",
      options: [
        "Complex regional pain syndrome",
        "Fat embolism syndrome",
        "Malunion",
        "Cast tightness",
      ],
      correctIndex: 1,
      explanation:
        "The triad of respiratory distress, neurological changes (confusion, agitation) and petechial rash 24–72 hours after a long-bone or pelvic fracture is fat embolism syndrome — marrow fat entering the circulation. It is a medical emergency requiring immediate escalation and supportive care.",
      difficulty: "Medium",
      tags: ["precautions", "pathology"],
      sectionSlug: "complications",
    },
    {
      text: "Avascular necrosis is a particular concern after fracture at which of the following sites?",
      options: [
        "Midshaft humerus",
        "Femoral neck, scaphoid and talus",
        "Distal fibula",
        "Clavicle midshaft",
      ],
      correctIndex: 1,
      explanation:
        "The femoral head, proximal scaphoid and talar body all have retrograde or precarious blood supplies that fracture can interrupt, causing bone death (AVN). This is why displaced femoral neck fractures in older adults are often replaced rather than fixed, and why scaphoid fractures are treated so cautiously.",
      difficulty: "Medium",
      tags: ["anatomy", "pathology"],
      sectionSlug: "complications",
    },
    {
      text: "Eight weeks after a distal radius fracture, a patient's hand is increasingly painful, swollen, shiny, sweaty and exquisitely sensitive to light touch, with pain far beyond the fracture site. What should you suspect?",
      options: [
        "Normal post-cast stiffness",
        "Complex regional pain syndrome",
        "Non-union of the radius",
        "Cast claustrophobia",
      ],
      correctIndex: 1,
      explanation:
        "Disproportionate regional pain with sensory changes (allodynia), vasomotor signs (colour, temperature), sudomotor changes (sweating) and swelling — worsening when it should be improving — is the classic picture of CRPS, most common after wrist and ankle fractures. Early recognition matters: management is active (education, desensitisation, graded functional loading) with prompt medical involvement.",
      difficulty: "Medium",
      tags: ["assessment", "precautions", "clinical-reasoning"],
      sectionSlug: "complications",
    },
    {
      text: "A patient is in a below-elbow cast for a distal radius fracture. Which physiotherapy priority is most important during the immobilisation period?",
      options: [
        "Passive wrist stretching through a window cut in the cast",
        "Full active range of the shoulder, elbow and fingers, plus swelling control",
        "Complete rest of the entire arm in a sling",
        "Grip strengthening against maximal resistance inside the cast",
      ],
      correctIndex: 1,
      explanation:
        "The joints above and below the cast stiffen fast if neglected — shoulder stiffness after wrist fracture is a classic preventable complication, especially in older adults. Active shoulder, elbow and finger range with elevation and pumping exercises is the core in-cast programme; the wrist itself stays protected.",
      difficulty: "Easy",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "physio-immobilisation",
    },
    {
      text: "\"PWB 50%\" on the operation note means the patient should:",
      options: [
        "Put no weight at all through the limb",
        "Touch the foot down for balance only",
        "Load approximately half of body weight through the limb, taught with scales or feedback",
        "Bear full weight but only for 50% of the day",
      ],
      correctIndex: 2,
      explanation:
        "Partial weight-bearing prescribes a fraction of body weight through the healing limb — here about 50% — usually with crutches or a frame taking the remainder. Patients cannot judge this intuitively, so it is taught with bathroom scales or biofeedback and rehearsed on stairs and transfers. NWB and touch-down are separate, stricter categories.",
      difficulty: "Easy",
      tags: ["management", "precautions"],
      sectionSlug: "physio-immobilisation",
    },
    {
      text: "Why do surgeons often permit early protected weight-bearing after intramedullary nailing of a tibial fracture?",
      options: [
        "The nail makes the bone permanently stronger than before",
        "The load-sharing nail provides stability while controlled loading stimulates callus formation",
        "Weight-bearing has no effect on bone healing either way",
        "The fracture is fully healed as soon as the nail is inserted",
      ],
      correctIndex: 1,
      explanation:
        "An intramedullary nail acts as a load-sharing internal splint: it maintains alignment while transmitting some load through the fracture. Controlled micromotion and axial load stimulate callus formation (mechanotransduction/Wolff's law), so early protected weight-bearing actively promotes union — the fixation buys stability, not healing.",
      difficulty: "Hard",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "management-principles",
    },
    {
      text: "After cast removal, which pain response should stop a rehabilitation exercise?",
      options: [
        "A stretching sensation at end-range that eases after the session",
        "Mild muscle ache the next day",
        "Sharp, well-localised pain at the fracture site during loading",
        "Stiffness on waking that eases with movement",
      ],
      correctIndex: 2,
      explanation:
        "Stiffness, stretch discomfort and mild muscle soreness are expected and acceptable after immobilisation. Sharp, localised bony pain at the fracture site under load suggests the healing bone is being overloaded (or union is incomplete) — stop, reduce load and review, liaising with the team if it persists.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "precautions", "clinical-reasoning"],
      sectionSlug: "rehab-after-immobilisation",
    },
    {
      text: "What defines a fragility fracture?",
      options: [
        "Any fracture in a person over 40",
        "A fracture sustained from a fall from standing height or less (low-energy trauma)",
        "A fracture that fails to unite within six weeks",
        "A fracture with more than three fragments",
      ],
      correctIndex: 1,
      explanation:
        "A fragility fracture results from forces that would not break healthy bone — classically a fall from standing height or less. Typical sites are the distal radius, vertebrae and hip. It signals underlying osteoporosis and should trigger bone-health assessment and falls-risk review to prevent the next, often more serious, fracture.",
      difficulty: "Easy",
      tags: ["pathology", "assessment"],
      sectionSlug: "osteoporosis-fragility",
    },
    {
      text: "Which exercise approach best stimulates bone in a patient with osteoporosis?",
      options: [
        "Swimming and aqua-aerobics only",
        "Progressive resistance training combined with weight-bearing/impact exercise appropriate to fracture risk",
        "Gentle unweighted range-of-movement exercises",
        "Prolonged slow walking as the sole exercise",
      ],
      correctIndex: 1,
      explanation:
        "Bone adapts to loads above habitual levels: progressive resistance training (muscle pull on bone) plus weight-bearing and appropriately-dosed impact loading provide that stimulus. Swimming is non-weight-bearing and walking alone is generally an insufficient bone stimulus, though both have other benefits. Balance work is added for falls prevention.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "osteoporosis-fragility",
    },
    {
      text: "Which movement strategy should be emphasised for a patient with osteoporotic vertebral compression fractures?",
      options: [
        "Repeated loaded end-range spinal flexion (toe-touch) exercises",
        "Hip-hinge technique for bending and back-extensor strengthening",
        "High-velocity twisting exercises",
        "Prolonged bed rest until pain resolves fully",
      ],
      correctIndex: 1,
      explanation:
        "Loaded end-range spinal flexion concentrates anterior compressive load on already-wedged vertebral bodies and is associated with further vertebral fractures in osteoporotic spines. Teaching hip-hinge bending, strengthening the back extensors and maintaining general activity is the recommended strategy; bed rest accelerates bone and muscle loss.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "precautions"],
      sectionSlug: "osteoporosis-fragility",
    },
    {
      text: "Why are hip-fracture patients mobilised from the first day after surgery?",
      options: [
        "To free up hospital beds sooner",
        "Because early mobilisation reduces delirium, pneumonia, VTE and pressure injuries and improves functional outcome",
        "Because the fracture is fully healed once fixed",
        "To avoid the need for any further physiotherapy",
      ],
      correctIndex: 1,
      explanation:
        "In frail older adults, every day of bed rest costs muscle, bone, orientation and respiratory function. Day-one mobilisation after hip-fracture surgery is standard of care because it reduces delirium, chest infection, thromboembolism and pressure damage, and improves the odds of regaining pre-fracture mobility — the fixation is designed to permit it.",
      difficulty: "Hard",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "osteoporosis-fragility",
    },
    {
      text: "A greenstick fracture is best described as:",
      options: [
        "A complete fracture with three or more fragments",
        "An incomplete fracture in a child where one cortex breaks and the other bends",
        "A fragment avulsed by a tendon",
        "A fracture through a bone tumour",
      ],
      correctIndex: 1,
      explanation:
        "Children's bone is more flexible and has a thicker periosteum, so it can bend and fail on one side only — the greenstick pattern, named after snapping a young branch. Comminuted, avulsion and pathological fractures are the other options described.",
      difficulty: "Easy",
      tags: ["pathology", "anatomy"],
      sectionSlug: "fracture-types",
    },
  ],
  flashcards: [
    { front: "State Wolff's law and its rehab implication.", back: "Bone adapts its mass and architecture to the loads placed on it — progressive loading strengthens healing and osteoporotic bone; unloading causes rapid demineralisation." },
    { front: "The four stages of secondary fracture healing?", back: "Haematoma/inflammation (day 0–~1 wk) → soft fibrocartilage callus (from ~2–3 wk) → hard bony callus/union (~6–12 wk adult long bones) → remodeling (months–years)." },
    { front: "Name six common fracture patterns.", back: "Transverse, oblique, spiral, comminuted, greenstick (children), avulsion — plus segmental, impacted/compression, stress and pathological." },
    { front: "The three steps of fracture management?", back: "Reduce (restore alignment, closed or open) → Hold (cast/brace or internal/external fixation) → Rehabilitate (from day one, throughout)." },
    { front: "Weight-bearing progression terminology?", back: "NWB → touch-down (TTWB) → partial (PWB, a set fraction taught with scales) → weight-bearing as tolerated (WBAT) → full (FWB)." },
    { front: "Physio priorities during cast immobilisation?", back: "Swelling control and elevation, full active range of all non-immobilised joints, isometrics inside the cast, correct weight-bearing gait with the right aid, general fitness, education." },
    { front: "Classic sites at risk of avascular necrosis after fracture?", back: "Femoral head (neck-of-femur fracture), proximal scaphoid, talus — all have precarious/retrograde blood supply." },
    { front: "Features of acute compartment syndrome?", back: "Pain out of proportion, worse on passive stretch, tense compartment, paraesthesia — surgical emergency; limb at heart level, urgent escalation." },
    { front: "Triad of fat embolism syndrome, and when?", back: "Respiratory distress + neurological changes (confusion) + petechial rash, typically 24–72 h after long-bone or pelvic fracture. Medical emergency." },
    { front: "Signs suggesting CRPS after wrist or ankle fracture?", back: "Disproportionate regional pain, allodynia, swelling, colour/temperature/sweating changes and stiffness — worsening when it should be improving. Manage actively and escalate early." },
    { front: "Definition and significance of a fragility fracture?", back: "Fracture from a fall at standing height or less (distal radius, vertebra, hip). Signals osteoporosis — triggers DXA/bone-health referral plus strength, balance and falls-prevention work." },
    { front: "Cast danger signs patients must know?", back: "Escalating pain, numbness or tingling, blue/white or cold digits, inability to move fingers or toes — seek urgent review, never wait it out." },
  ],
};

export default topic;
