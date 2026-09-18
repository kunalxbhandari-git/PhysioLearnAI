import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "pediatric-development",
  title: "Pediatric Development & Assessment",
  category: "Pediatric",
  description:
    "Gross motor milestones, red flags for referral, primitive reflexes, common infant presentations and gait development — the foundations of paediatric physiotherapy assessment.",
  difficulty: "Beginner",
  estMinutes: 29,
  icon: "heart-pulse",
  keyTakeaways: [
    "Milestones are ranges, not deadlines — most variation is normal, but every range has a limit that triggers assessment.",
    "Regression — losing a previously achieved skill — is always a red flag, at any age.",
    "Key referral triggers: no head control by 4 months, not sitting independently by 9 months, not walking by 18 months, hand dominance before 12 months.",
    "Primitive reflexes should integrate on schedule; persistence or asymmetry suggests neurological concern.",
    "Typical development shows rich movement variety; stereotyped, asymmetrical or obligatory movement is the worry, not slow movement.",
    "Congenital muscular torticollis responds well to early positioning, handling and stretching — and tummy time helps both torticollis and plagiocephaly.",
    "Asymmetric thigh creases, limited hip abduction or a 'clunking' hip need DDH screening; clubfoot is managed with the Ponseti method.",
    "Toddler gait is normally wide-based and flat-footed; most in-toeing and out-toeing resolves without treatment on a predictable timeline.",
  ],
  sections: [
    {
      slug: "overview",
      title: "How Development Works",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Gross motor development is the progressive acquisition of postural control and movement skill through the interaction of a maturing nervous system, a growing body, and rich opportunities to practise. It generally proceeds cephalocaudal (head control before trunk control before legs) and proximal-to-distal — but it is driven by exploration and practice, not by a rigid internal timetable.",
        },
        {
          kind: "paragraph",
          text: "Two ideas anchor everything in this topic. First, milestones are ranges: healthy children reach the same skill months apart, and single 'late' skills in an otherwise well child are usually benign. Second, the pattern matters more than the date: quality and variety of movement, symmetry, and continued forward progress are more informative than any single milestone box.",
        },
        {
          kind: "keypoints",
          title: "Principles of typical development",
          items: [
            "Cephalocaudal and proximal-to-distal overall direction, with plenty of individual variation",
            "Skills emerge from practice and opportunity — environment and positioning genuinely matter",
            "Variability is healthy; stereotyped or obligatory movement patterns are the concern",
            "Development should always move forward — loss of skills (regression) is never normal",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Correct for prematurity when judging milestones until around 2 years of age — a baby born 2 months early is assessed against their corrected age.",
            "Bottom-shuffling babies often walk later and may skip crawling entirely — a recognised normal variant, particularly with a family history.",
          ],
        },
      ],
    },
    {
      slug: "gross-motor-milestones",
      title: "Gross Motor Milestones",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "The table below gives typical ages and the usual range for the major gross motor milestones. Learn the typical sequence and the outer limits — the outer limit is what drives referral decisions.",
        },
        {
          kind: "table",
          headers: ["Milestone", "Typical age", "Usual range", "What it tells you"],
          rows: [
            ["Head control in prone (lifts head 45–90°)", "2–3 months", "1–4 months", "Emerging antigravity extension; the foundation of all later postural control"],
            ["Head steady when held upright", "3–4 months", "2–4 months", "No head lag on pull-to-sit by ~4 months"],
            ["Rolling (front↔back)", "4–6 months", "3–7 months", "Trunk rotation and the first independent change of position"],
            ["Independent sitting", "6–8 months", "5–9 months", "Trunk control against gravity; frees the hands for play"],
            ["Crawling (hands and knees)", "8–10 months", "6–11 months (some skip it)", "Reciprocal limb coordination; bottom-shuffling is a normal variant"],
            ["Pull-to-stand", "9–10 months", "8–12 months", "Lower-limb weight-bearing and antigravity strength"],
            ["Cruising along furniture", "10–12 months", "9–13 months", "Lateral weight shift — the bridge to independent walking"],
            ["Independent walking", "12–14 months", "9–18 months", "The headline milestone; investigate if not walking by 18 months"],
            ["Running", "18–24 months", "16–30 months", "A flight phase appears; early running is stiff and wide-based"],
            ["Jumping (two feet off the floor)", "24–30 months", "22–36 months", "Bilateral power and landing control"],
          ],
        },
        {
          kind: "paragraph",
          text: "By age 3 most children climb stairs step-to-step and pedal a tricycle; by 4 they descend stairs reciprocally and hop; by 5 they skip and stand briefly on one leg. Beyond the pre-school years, refinement (speed, coordination, ball skills) matters more than new categories of skill.",
        },
        {
          kind: "keypoints",
          title: "Using the table well",
          items: [
            "Judge the trajectory across several milestones, not one date in isolation",
            "Correct for prematurity to around 2 years",
            "A skill at the late end of the range in an otherwise typical child usually needs monitoring, not alarm",
            "A skill beyond the outer limit, or several late skills together, needs assessment",
          ],
        },
      ],
    },
    {
      slug: "red-flags-referral",
      title: "Red Flags for Referral",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Red flags convert 'watchful waiting' into 'assess now'. They combine hard age limits with qualitative warnings that apply at any age.",
        },
        {
          kind: "table",
          headers: ["Red flag", "Age threshold", "Why it matters"],
          rows: [
            ["No head control / persistent head lag", "By 4 months", "Suggests significant hypotonia or neurological involvement"],
            ["Not sitting independently", "By 9 months", "Outer limit for trunk control; common early sign in cerebral palsy and global delay"],
            ["Not walking independently", "By 18 months", "Investigate: consider cerebral palsy, muscular dystrophy (check for Gowers' sign in boys), hip pathology, global delay"],
            ["Hand dominance", "Before 12 months", "Early strong hand preference often means the other side is impaired — think hemiplegia, not 'early handedness'"],
            ["Persistent primitive reflexes or obligatory asymmetry", "Beyond expected integration ages", "Suggests upper motor neurone pathology"],
            ["Persistent fisting, scissoring of legs, stiffness or marked floppiness", "Any age", "Tone abnormalities suggesting neurological cause"],
            ["Regression — loss of any previously achieved skill", "ANY age", "Always abnormal; needs prompt medical assessment (neurodegenerative and metabolic causes must be excluded)"],
          ],
        },
        {
          kind: "redflags",
          items: [
            "Loss of previously achieved skills at any age — always refer promptly",
            "Strong hand preference before 12 months — screen the neglected side",
            "Not sitting by 9 months or not walking by 18 months",
            "Asymmetry of posture, movement or reflexes at any age",
            "Parental concern — parents detect real problems early; take it seriously even when screening tools look reassuring",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Frame the referral positively to families: \"an extra pair of eyes early\" — early intervention capitalises on the young brain's plasticity.",
            "A boy not walking by 18 months should have creatine kinase checked by the medical team to screen for Duchenne muscular dystrophy.",
          ],
        },
      ],
    },
    {
      slug: "primitive-reflexes",
      title: "Primitive Reflexes & Their Integration",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Primitive reflexes are brainstem-mediated movement patterns present at (or before) birth. As the cortex matures they are integrated — inhibited and absorbed into voluntary control — on a fairly predictable schedule. Their value in assessment is double-ended: absence or asymmetry in early infancy, and persistence beyond the expected age, both signal neurological concern.",
        },
        { kind: "image", illustration: "brain", caption: "Primitive reflexes are generated by the brainstem; maturation of the cortex progressively inhibits them. Persistence suggests the cortex is not exerting normal control — a hallmark of cerebral palsy." },
        {
          kind: "table",
          headers: ["Reflex", "Stimulus & response", "Typically integrates by", "Significance of persistence"],
          rows: [
            ["Moro", "Sudden head drop → arms extend and abduct, then embrace; often a cry", "4–6 months", "Persistence suggests neurological pathology; asymmetry suggests brachial plexus injury or clavicle fracture"],
            ["Asymmetrical tonic neck reflex (ATNR)", "Head turned to one side → 'fencing posture': face-side limbs extend, skull-side limbs flex", "4–6 months", "Persistent or obligatory ATNR blocks rolling, midline hand play and reaching — classic in cerebral palsy"],
            ["Stepping (automatic walking)", "Held upright, feet on surface → alternating stepping movements", "~2 months (as an automatic response)", "Its early presence is normal; its persistence matters less than most — but it should not dominate supported standing in later infancy"],
            ["Palmar grasp", "Pressure in palm → fingers close", "4–6 months", "Persistence prevents voluntary grasp and release"],
            ["Rooting/sucking", "Cheek stroke → head turns, mouth opens", "3–4 months", "Persistence beyond infancy suggests neurological immaturity"],
          ],
        },
        {
          kind: "keypoints",
          title: "Assessment logic",
          items: [
            "Early infancy: the reflex should be present and symmetrical — absence or asymmetry is the concern",
            "Later infancy: the reflex should be gone — persistence is the concern",
            "'Obligatory' responses (the baby is stuck in the pattern and cannot move out of it) are abnormal at any age",
            "Alongside primitive reflex integration, postural reactions (head righting, protective extension, parachute by ~9–10 months) should be emerging",
          ],
        },
        {
          kind: "pearls",
          items: [
            "An infant who cannot bring hands to midline or to mouth may be trapped by a persisting ATNR — watch what happens when the head turns.",
            "The parachute reaction (arms extend protectively when tipped forwards) appears around 9 months and persists for life — its absence or asymmetry is as informative as any primitive reflex.",
          ],
        },
      ],
    },
    {
      slug: "movement-variety",
      title: "Typical vs Atypical Movement",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Healthy infants are gloriously variable movers: they wriggle, squirm, try a skill six different ways, and abandon strategies as better ones emerge. Atypical development often shows the opposite — a poverty of variety, with stereotyped, repetitive or obligatory patterns.",
        },
        {
          kind: "cards",
          items: [
            { title: "Typical: variety", text: "Many movement strategies for the same goal; smooth, fluent transitions; symmetrical use of both sides; patterns change week to week.", icon: "shuffle" },
            { title: "Atypical: stereotypy", text: "The same few patterns repeated regardless of context; effortful, jerky or 'stuck' movement; strong persistent asymmetry.", icon: "repeat" },
            { title: "Typical: midline play", text: "Hands together, hands to mouth, hands to knees and feet by 4–6 months — the building blocks of body awareness.", icon: "hand" },
            { title: "Atypical: obligatory patterns", text: "Head turn always producing the full ATNR posture, legs always extending and scissoring on being lifted, persistent fisting beyond ~3–4 months.", icon: "lock" },
          ],
        },
        {
          kind: "paragraph",
          text: "This is why experienced assessors watch spontaneous movement before handling the baby: the richness and symmetry of self-generated movement carries more information than any provoked response. Formal tools built on this insight (such as general movements assessment in high-risk infants) are among the best early predictors of cerebral palsy.",
        },
        {
          kind: "keypoints",
          items: [
            "Assess variety, symmetry and fluency — not just whether a milestone box is ticked",
            "Watch spontaneous movement first, handle second",
            "Slow but varied and symmetrical usually reassures; on-time but stereotyped and asymmetrical does not",
          ],
        },
      ],
    },
    {
      slug: "torticollis-plagiocephaly",
      title: "Torticollis & Plagiocephaly",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Congenital muscular torticollis (CMT) is shortening or tightness of one sternocleidomastoid (SCM), producing the classic posture of lateral flexion towards and rotation away from the affected side. It typically presents in the first weeks to months of life, sometimes with a palpable pseudotumour in the muscle, and is strongly associated with deformational plagiocephaly — asymmetrical head flattening from persistent positioning on one side.",
        },
        {
          kind: "steps",
          items: [
            { title: "Assess", text: "Observe resting head posture and spontaneous active rotation to each side; measure passive cervical rotation and lateral flexion; palpate the SCM for tightness or a mass; screen the hips (CMT carries an increased association with DDH) and check for plagiocephaly." },
            { title: "Position & environment", text: "Restructure the day so the baby wants to turn the restricted way: cot orientation, feeding sides, carrying positions and toy placement all biased towards the limited side." },
            { title: "Handling & stretching", text: "Teach parents gentle sustained passive stretches (into rotation towards, and lateral flexion away from, the tight SCM) integrated into daily routines — plus active rotation encouraged through play and tracking toys." },
            { title: "Strengthen & monitor", text: "Encourage righting reactions towards the non-preferred side (carried side-lying, supported tilting). Monitor head shape and rotation range; escalate if not improving — persistent cases may need specialist review, and a true failure to correct should prompt reconsideration of the diagnosis (ocular, bony or neurological causes)." },
          ],
        },
        {
          kind: "paragraph",
          text: "Deformational plagiocephaly itself is a cosmetic, positional issue in most cases: it improves with repositioning, treating any underlying torticollis, and — crucially — supervised tummy time, which takes pressure off the flattened area while building the neck and shoulder extensors. Parents can be reassured that positional flattening does not affect brain development.",
        },
        {
          kind: "keypoints",
          title: "Tummy time",
          items: [
            "Awake, supervised prone play from the first weeks — little and often (a few minutes, several times daily), building towards an accumulated 30–60+ minutes across the day by 3–4 months",
            "Builds antigravity neck, shoulder and trunk extension — the engine of early motor development",
            "Treats and prevents both plagiocephaly and positional preference",
            "Always 'back to sleep, tummy to play': prone positioning is for awake, supervised time only",
          ],
        },
        {
          kind: "warning",
          title: "Do not miss",
          items: [
            "Always screen the hips in torticollis — the association with DDH is well recognised",
            "Head tilt appearing later in childhood, or with abnormal eye movements, vomiting or neurological signs, is not CMT — refer for medical assessment",
            "A sternocleidomastoid mass that is hard, fixed or enlarging needs medical review, not just stretching",
          ],
        },
      ],
    },
    {
      slug: "hips-feet",
      title: "DDH & Clubfoot Awareness",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Developmental dysplasia of the hip (DDH) covers a spectrum from a shallow acetabulum to a dislocatable or dislocated hip. Detected early, it is usually managed simply and successfully with a harness; detected late, it may need surgery and risks lifelong problems — which is why every infant contact is a screening opportunity.",
        },
        {
          kind: "cards",
          items: [
            { title: "Risk factors", text: "Breech presentation, family history, female sex, firstborn, oligohydramnios — and swaddling with the legs forced straight. Risk factors trigger ultrasound screening in many pathways.", icon: "search" },
            { title: "Clinical clues", text: "Asymmetric thigh or gluteal creases, apparent leg-length difference (Galeazzi sign — one knee lower in crook lying), limited hip abduction on one side, a 'clunky' hip, and later a painless limp or waddling gait.", icon: "alert-triangle" },
            { title: "Screening tests", text: "Ortolani (relocating a dislocated hip) and Barlow (provoking a dislocatable hip) manoeuvres are performed in newborn screening by trained practitioners; ultrasound confirms. A benign ligamentous 'click' without instability is common — a true 'clunk' or restricted abduction is the worry.", icon: "stethoscope" },
            { title: "Management concept", text: "Early DDH: Pavlik harness holding the hips flexed and abducted while the acetabulum remodels. Late or failed cases: orthopaedic management. Physiotherapy advice: hip-healthy positioning — avoid tight straight-leg swaddling; carrying with hips flexed and abducted is favourable.", icon: "baby" },
          ],
        },
        {
          kind: "paragraph",
          text: "Congenital talipes equinovarus (clubfoot) is a structural deformity present at birth: the foot is fixed in equinus, varus and adductus and cannot be passively corrected to neutral — distinguishing it from flexible 'positional talipes', which corrects easily with gentle handling and resolves with simple stretches.",
        },
        {
          kind: "keypoints",
          title: "Ponseti method awareness",
          items: [
            "The international standard of care: serial weekly manipulation and casting from the first weeks of life, correcting the deformity progressively",
            "Most feet then need a minor Achilles tenotomy to correct residual equinus",
            "Followed by a boots-and-bar abduction brace — initially near-full-time, then nights/naps for several years",
            "Bracing adherence is the single biggest determinant of relapse — supporting families with the bracing phase is a key therapy role",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Any restriction of hip abduction in an infant is DDH until proven otherwise — refer for imaging rather than stretching it.",
            "Positional talipes: fully correctable, improves in weeks. Structural clubfoot: rigid, needs Ponseti referral promptly — ideally within the first weeks of life.",
          ],
        },
      ],
    },
    {
      slug: "gait-development",
      title: "Gait Development & Rotational Variants",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "New walkers do not walk like small adults. Expect a wide base, arms held high in 'high guard', flat-foot initial contact, short quick steps and frequent falls. Over the following two to three years the base narrows, reciprocal arm swing appears, heel-strike develops (usually by around age 2), and by roughly 7 years the gait pattern is essentially adult in form.",
        },
        { kind: "image", illustration: "gait-cycle", caption: "The adult gait cycle. Children converge on this pattern gradually — heel-strike and reciprocal arm swing are acquisitions of the second and third year, not of the first steps." },
        {
          kind: "paragraph",
          text: "Rotational 'variants' — in-toeing and out-toeing — are among the commonest reasons families seek help, and the overwhelming majority are benign, symmetrical, painless and self-resolving on a predictable timeline.",
        },
        {
          kind: "table",
          headers: ["Variant", "Usual cause & age", "Typical course"],
          rows: [
            ["In-toeing (infant)", "Metatarsus adductus — curved forefoot from intrauterine position", "Flexible forms resolve spontaneously in the first 1–2 years; rigid forms need review"],
            ["In-toeing (toddler)", "Internal tibial torsion — commonest cause age 1–3", "Resolves with growth, usually by 4–5 years"],
            ["In-toeing (child)", "Femoral anteversion — child sits in 'W', runs with legs swinging in; commonest age 3–8", "Improves through childhood, largely by 8–10 years"],
            ["Out-toeing", "External rotation contracture of infancy; sometimes external tibial torsion", "Most resolves in the second year of life"],
            ["Flat feet", "Flexible paediatric flat foot with a fat pad; arch appears with growth", "Typically develops an arch by ~5–6 years; flexible, painless flat feet need no treatment"],
          ],
        },
        {
          kind: "paragraph",
          text: "Toe-walking deserves its own note. Intermittent toe-walking is common in new walkers and usually fades within months. Persistent toe-walking beyond about age 2–3 — 'idiopathic toe-walking' — is a diagnosis of exclusion: it is only idiopathic once neurological and muscular causes have been ruled out.",
        },
        {
          kind: "redflags",
          items: [
            "Asymmetrical, painful, progressive or stiff rotational profiles — these are not benign variants",
            "Toe-walking that is unilateral, new-onset after normal gait, or accompanied by tight calves, weakness or delayed milestones — screen for cerebral palsy, Duchenne muscular dystrophy and spinal pathology",
            "A limp is never a normal variant — painful limp needs urgent medical assessment (consider hip pathology at every age)",
            "Regression of walking ability at any age",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Most rotational variants need explanation and a timeline, not treatment — braces, insoles and 'corrective' shoes do not change the natural history of benign variants.",
            "Examine the whole rotational profile (hip rotation, thigh-foot angle, forefoot shape) so you can tell the family exactly where the turn comes from and when it should fade.",
          ],
        },
      ],
    },
    {
      slug: "family-centred-therapy",
      title: "Family-Centred, Play-Based Therapy",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Children do not do exercise programmes — they play. And children spend a handful of minutes with a therapist against thousands of waking hours with their families. Effective paediatric physiotherapy therefore works through the family and through play, coaching carers to weave developmental opportunities into ordinary daily routines.",
        },
        {
          kind: "cards",
          items: [
            { title: "Family as partners", text: "Parents are the experts on their child and the agents of change. Set goals with the family, in their words, around routines that matter to them.", icon: "users" },
            { title: "Play is the method", text: "Motivating toys, games and songs produce hundreds of repetitions that drills never would. The skill is engineering the environment so the target movement is the fun option.", icon: "puzzle" },
            { title: "Practice in real life", text: "Skills are practised where they will be used — floor, cot, high chair, playground — little and often, embedded in dressing, feeding, bathing and play.", icon: "home" },
            { title: "Strengths-based coaching", text: "Show carers what the child can do and build from it. Confidence-eroding correction of parents is a therapy failure; coaching and modelling are the tools.", icon: "trending-up" },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Goals: functional, family-chosen, embedded in daily routines",
            "High practice frequency through play beats low-frequency formal 'therapy exercises'",
            "Teach the 'why' so families can adapt activities themselves",
            "Celebrate variability and effort, not just milestone achievement",
          ],
        },
      ],
    },
    {
      slug: "activity-blocks",
      title: "Developmental Activity Ideas",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "These activity 'prescriptions' show how developmental targets translate into playful daily routines that families can own. Doses are deliberately framed as little-and-often.",
        },
        {
          kind: "exercise",
          name: "Tummy time progression",
          purpose: "Build antigravity head, neck and shoulder control; prevent and treat plagiocephaly and positional preference.",
          position: "Awake and supervised: start chest-to-chest on a reclined parent, progress to prone over a rolled towel under the chest, then flat on a firm mat.",
          execution: "Get face-to-face at the baby's eye level; use voice, mirrors and high-contrast toys to encourage head lifting and turning to both sides.",
          dosage: "A few minutes, several times a day from the first weeks, accumulating 30–60+ minutes daily by 3–4 months.",
          progression: "Chest-to-chest → towel-supported prone → flat prone → prone reaching for toys → pivoting in prone.",
          precautions: "Awake and supervised only — babies always sleep on their backs. Stop and retry later if the baby is distressed; short happy bouts beat long protests.",
        },
        {
          kind: "exercise",
          name: "Midline reaching play",
          purpose: "Encourage midline hand play, visual tracking and symmetrical use of both arms (especially valuable in torticollis and positional preference).",
          position: "Supine on a firm mat, or semi-reclined in the carer's lap; toys presented at chest level in midline.",
          execution: "Dangle a motivating toy in midline just within reach; encourage both hands to touch it; slowly track it towards the less-preferred side to draw rotation that way.",
          dosage: "2–5 minutes, several times a day, built into nappy changes and play.",
          progression: "Midline → across midline → hands to knees and feet → reaching in supported sitting and side-lying.",
          precautions: "Bias toy presentation towards the restricted side in torticollis; keep sessions playful, never forced.",
        },
        {
          kind: "exercise",
          name: "Cruising circuit",
          purpose: "Develop standing balance, lateral weight shift and stepping — the bridge from pulling-to-stand to walking.",
          position: "Standing at a stable sofa or low table (knee-to-chest height), motivating toys spaced along the surface.",
          execution: "Place toys progressively further along the furniture so the child side-steps to reach them; then create a small gap to a second stable surface to invite a transfer between supports.",
          dosage: "Frequent short play bouts daily, led by the child's interest.",
          progression: "Side-steps both directions → wider toy spacing → crossing a gap between surfaces → push-along walker play on safe flooring.",
          precautions: "Stable, tip-proof furniture and a clear, cushioned floor; supervise closely. Avoid baby walkers (seated ring walkers) — they add risk without helping walking develop.",
        },
        {
          kind: "exercise",
          name: "Toddler balance play",
          purpose: "Challenge balance reactions, single-leg control and landing skills in the established walker.",
          position: "Floor-level obstacle play: cushions, a line of tape, a low step, chalk circles.",
          execution: "Games — walk the 'tightrope' tape line, step over cushion 'rocks', step up and jump down from a low step with hands held, kick a ball, stand like a flamingo during songs.",
          dosage: "5–10 minutes of game-based play daily, woven into normal play time.",
          progression: "Hands held → one hand → free; flat line → cushions → slopes and grass; two-foot jump → jump for distance → hop.",
          precautions: "Match the challenge to the child — success most of the time with occasional wobbles is the right difficulty; falls onto safe surfaces are part of learning.",
        },
        {
          kind: "pearls",
          items: [
            "Prescribe activities by attaching them to existing routines ('after every nappy change') — routines survive; separate exercise lists do not.",
            "The best 'equipment' is usually the family's own furniture, floor and favourite toys — it is what the child will actually practise with all week.",
          ],
        },
      ],
    },
    {
      slug: "quick-revision",
      title: "Quick Revision Summary",
      estMinutes: 2,
      content: [
        {
          kind: "keypoints",
          title: "60-second summary",
          items: [
            "Milestone anchors: head control ~3m, sitting ~6–8m, pull-to-stand ~9–10m, walking ~12–14m (range 9–18m), running ~18–24m, jumping ~2 years",
            "Referral triggers: no head control by 4m, not sitting by 9m, not walking by 18m, hand dominance <12m, and regression at ANY age",
            "Primitive reflexes (Moro, ATNR, palmar) integrate by ~4–6 months; persistence, asymmetry or obligatory patterns are the concern",
            "Typical development = variety and symmetry; atypical = stereotyped, obligatory, asymmetrical",
            "Torticollis: position + stretch + tummy time; always screen hips. Plagiocephaly: repositioning and tummy time",
            "DDH clues: asymmetric creases, limited abduction, Galeazzi, 'clunk' → ultrasound. Clubfoot → Ponseti (casting, tenotomy, boots-and-bar)",
            "Toddler gait: wide base, flat feet, high guard — normal. Most in-/out-toeing resolves by mid-childhood; asymmetry, pain, stiffness or regression do not",
            "Therapy = family-centred, play-based, embedded in daily routines",
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
      text: "At what age does a typically developing infant achieve independent sitting?",
      options: ["3–4 months", "6–8 months", "10–12 months", "14–16 months"],
      correctIndex: 1,
      explanation:
        "Independent sitting typically emerges at 6–8 months (usual range roughly 5–9 months). Not sitting independently by 9 months is a recognised red flag warranting developmental assessment.",
      difficulty: "Easy",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "gross-motor-milestones",
    },
    {
      text: "By what age should independent walking be achieved before investigation is warranted?",
      options: ["12 months", "14 months", "18 months", "24 months"],
      correctIndex: 2,
      explanation:
        "Although the typical age for first independent steps is 12–14 months, the normal range extends to 18 months. Not walking by 18 months is the standard threshold for investigation — considering cerebral palsy, muscular dystrophy (creatine kinase in boys), hip pathology and global delay.",
      difficulty: "Easy",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "red-flags-referral",
    },
    {
      text: "A 10-month-old strongly prefers her right hand and rarely uses her left. How should this be interpreted?",
      options: [
        "Early handedness — a sign of advanced development",
        "Normal variation requiring no action",
        "A red flag — hand dominance before 12 months suggests the other side may be impaired (e.g. hemiplegia)",
        "A sign she will be right-handed, nothing more",
      ],
      correctIndex: 2,
      explanation:
        "Hand dominance does not normally establish until well after 12 months (often 2–4 years). A strong early preference usually means reduced function on the neglected side — classically hemiplegic cerebral palsy — and warrants assessment of the less-used arm and referral.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "red-flags-referral",
    },
    {
      text: "Which developmental finding is ALWAYS abnormal, regardless of age?",
      options: [
        "Skipping crawling and bottom-shuffling instead",
        "Walking at 17 months",
        "Loss of previously achieved skills (regression)",
        "Preferring to roll one direction",
      ],
      correctIndex: 2,
      explanation:
        "Development may be slow or take variant routes (bottom-shuffling is a normal variant; 17-month walking is within range), but it should always move forward. Regression — losing skills the child previously had — is never normal and requires prompt medical assessment to exclude neurodegenerative, metabolic and other serious causes.",
      difficulty: "Easy",
      tags: ["assessment", "precautions"],
      sectionSlug: "red-flags-referral",
    },
    {
      text: "What is the response seen in the asymmetrical tonic neck reflex (ATNR)?",
      options: [
        "Sudden head drop causes the arms to extend then embrace",
        "Turning the head to one side causes extension of the face-side limbs and flexion of the skull-side limbs",
        "Stroking the cheek causes the head to turn with mouth opening",
        "Pressure in the palm causes finger flexion",
      ],
      correctIndex: 1,
      explanation:
        "The ATNR is the 'fencing posture': with the head turned, the limbs on the face side extend while those on the skull side flex. The embrace response to head drop is the Moro; cheek-stroke head turning is rooting; palm pressure flexion is the palmar grasp.",
      difficulty: "Easy",
      tags: ["assessment", "anatomy"],
      sectionSlug: "primitive-reflexes",
    },
    {
      text: "By what age should the Moro and ATNR reflexes normally have integrated?",
      options: ["By 1 month", "By 4–6 months", "By 12 months", "By 2 years"],
      correctIndex: 1,
      explanation:
        "Both the Moro and the ATNR typically integrate by around 4–6 months as cortical control matures. Persistence beyond this — especially if the response is obligatory — suggests upper motor neurone pathology such as cerebral palsy, and blocks development of rolling, midline play and reaching.",
      difficulty: "Medium",
      tags: ["assessment", "pathology"],
      sectionSlug: "primitive-reflexes",
    },
    {
      text: "Why is a persistent, obligatory ATNR such a significant barrier to motor development?",
      options: [
        "It prevents the baby from sleeping on the back",
        "Every head turn locks the limbs into the fencing pattern, blocking rolling, midline hand play and visually guided reaching",
        "It causes hip dislocation",
        "It only affects the legs",
      ],
      correctIndex: 1,
      explanation:
        "If the ATNR is obligatory, the baby cannot dissociate head movement from limb posture: looking at a toy extends the arm on that side and flexes the other, preventing hands-together midline play, hand-to-mouth activity, rolling and reaching towards what they see. This functional blockade — not the reflex itself — is why persistence matters so much clinically.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "pathology"],
      sectionSlug: "primitive-reflexes",
    },
    {
      text: "Which observation most supports TYPICAL motor development in a 4-month-old?",
      options: [
        "Varied, symmetrical spontaneous movements with hands coming together in midline",
        "The same repetitive extension pattern every time the baby is excited",
        "Consistently fisted hands with the thumb inside",
        "Strong preference for keeping the head turned to the right",
      ],
      correctIndex: 0,
      explanation:
        "Typical development is characterised by variety, symmetry and fluent spontaneous movement, with midline hand play emerging around 3–4 months. Stereotyped repetitive patterns, persistent fisting beyond 3–4 months, and a fixed head preference are all atypical features warranting assessment.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "movement-variety",
    },
    {
      text: "A baby with right congenital muscular torticollis will typically hold the head in which posture?",
      options: [
        "Lateral flexion to the right with rotation to the left",
        "Lateral flexion to the left with rotation to the right",
        "Flexion with rotation to the right",
        "Extension with no rotation",
      ],
      correctIndex: 0,
      explanation:
        "The sternocleidomastoid laterally flexes the head to the same side and rotates it to the opposite side. A tight right SCM therefore holds the head side-flexed right and rotated left — and treatment stretches into left lateral flexion and right rotation, with the environment arranged to encourage active turning to the right.",
      difficulty: "Medium",
      tags: ["anatomy", "assessment"],
      sectionSlug: "torticollis-plagiocephaly",
    },
    {
      text: "Which additional screening is essential in every infant diagnosed with congenital muscular torticollis?",
      options: ["Vision testing", "Hip assessment for DDH", "Hearing screening", "Renal ultrasound"],
      correctIndex: 1,
      explanation:
        "CMT carries a well-recognised association with developmental dysplasia of the hip — both relate to intrauterine positioning. Every baby with torticollis should have the hips examined and referred for imaging according to local screening pathways.",
      difficulty: "Medium",
      tags: ["assessment", "precautions"],
      sectionSlug: "torticollis-plagiocephaly",
    },
    {
      text: "What is the correct guidance for tummy time?",
      options: [
        "Prone positioning for sleep to round the head shape",
        "Awake, supervised prone play — little and often from the first weeks, accumulating across the day",
        "A single daily 60-minute prone session from birth",
        "Only start after 6 months of age",
      ],
      correctIndex: 1,
      explanation:
        "The rule is 'back to sleep, tummy to play': babies always sleep supine (for safe sleeping), while awake, supervised prone time starts in the first weeks — a few minutes several times daily, building towards an accumulated 30–60+ minutes by 3–4 months. It develops antigravity extension and prevents/treats plagiocephaly and positional preference.",
      difficulty: "Easy",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "torticollis-plagiocephaly",
    },
    {
      text: "Which set of findings most suggests developmental dysplasia of the hip in a 4-month-old?",
      options: [
        "Symmetrical thigh creases and full abduction with a soft click",
        "Asymmetric thigh creases, limited hip abduction on one side, and one knee lower in crook lying (Galeazzi sign)",
        "Bilateral flexible flat feet",
        "In-toeing when supported in standing",
      ],
      correctIndex: 1,
      explanation:
        "Asymmetric creases, unilaterally restricted abduction and a positive Galeazzi sign are the classic clinical clues to DDH beyond the newborn period and mandate ultrasound referral. An isolated soft ligamentous click with full symmetric movement is common and usually benign — a 'clunk' or restricted abduction is the concern. Flat feet and in-toeing are unrelated normal variants at this age.",
      difficulty: "Hard",
      tags: ["assessment", "special-tests"],
      sectionSlug: "hips-feet",
    },
    {
      text: "What distinguishes structural clubfoot (congenital talipes equinovarus) from positional talipes?",
      options: [
        "Structural clubfoot affects only the toes",
        "Positional talipes is rigid, structural clubfoot is flexible",
        "Structural clubfoot is rigid and cannot be passively corrected to neutral; positional talipes corrects easily with gentle handling",
        "There is no difference in management",
      ],
      correctIndex: 2,
      explanation:
        "Structural clubfoot is a fixed deformity (equinus, varus, adductus) that cannot be passively corrected and needs prompt referral for Ponseti serial casting, usually with Achilles tenotomy and years of boots-and-bar bracing. Positional talipes from intrauterine moulding is fully correctable with gentle handling and resolves with simple stretches and time.",
      difficulty: "Medium",
      tags: ["assessment", "management"],
      sectionSlug: "hips-feet",
    },
    {
      text: "In the Ponseti pathway, what is the single biggest determinant of clubfoot relapse?",
      options: [
        "The number of casts used",
        "Adherence to the boots-and-bar abduction bracing programme",
        "The age at which walking begins",
        "The brand of footwear used after treatment",
      ],
      correctIndex: 1,
      explanation:
        "After correction by serial casting (and usually tenotomy), the boots-and-bar brace — near-full-time initially, then nights and naps for several years — maintains the correction. Non-adherence to bracing is the strongest predictor of relapse, so supporting and troubleshooting bracing with families is a central therapy role.",
      difficulty: "Hard",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "hips-feet",
    },
    {
      text: "Which features are NORMAL in a newly independent 13-month-old walker?",
      options: [
        "Wide base, arms in high guard, flat-foot contact and frequent falls",
        "Narrow base with reciprocal arm swing",
        "Consistent unilateral toe-walking",
        "Heel-strike with adult push-off",
      ],
      correctIndex: 0,
      explanation:
        "New walkers show a wide base, high-guard arms, flat-foot initial contact, short quick steps and frequent falls. Heel-strike typically develops around age 2 and reciprocal arm swing follows; the gait pattern approximates adult form by about 7 years. Unilateral toe-walking is never a normal variant.",
      difficulty: "Easy",
      tags: ["assessment", "anatomy"],
      sectionSlug: "gait-development",
    },
    {
      text: "A 4-year-old in-toes, W-sits, and runs with the legs appearing to swing inwards. Examination shows markedly greater internal than external hip rotation, symmetrical and painless. What is the most likely explanation and management?",
      options: [
        "Internal tibial torsion — needs derotation braces",
        "Femoral anteversion — benign, typically improving by age 8–10; explanation and monitoring, no braces or insoles",
        "Bilateral DDH — urgent surgery",
        "Spastic diplegia — start serial casting",
      ],
      correctIndex: 1,
      explanation:
        "Increased femoral anteversion is the commonest cause of in-toeing at ages 3–8, classically with W-sitting and 'egg-beater' running, and increased internal hip rotation on examination. It is symmetrical, painless and improves through childhood, largely by 8–10 years. Braces, insoles and corrective shoes do not change the natural history of benign rotational variants — families need a clear explanation and timeline.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "gait-development",
    },
    {
      text: "Which pattern of toe-walking most warrants further neurological and muscular assessment?",
      options: [
        "Intermittent bilateral toe-walking in a 14-month-old new walker",
        "Occasional toe-walking during excited play in a 2-year-old who can stand heel-down",
        "Unilateral toe-walking, or toe-walking that appears after a period of normal gait",
        "Toe-walking that disappears when the child concentrates",
      ],
      correctIndex: 2,
      explanation:
        "Intermittent, bilateral toe-walking in new walkers is common and usually fades. Unilateral toe-walking suggests hemiplegia or a localised problem, and toe-walking emerging after normal gait raises concern about progressive conditions (e.g. Duchenne muscular dystrophy) or spinal pathology. 'Idiopathic' toe-walking is a diagnosis of exclusion made only after neurological and muscular causes are ruled out.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "precautions"],
      sectionSlug: "gait-development",
    },
    {
      text: "Which approach best reflects family-centred, play-based paediatric physiotherapy?",
      options: [
        "A printed set of daily exercises for the parent to perform on the child",
        "Therapist-delivered hands-on treatment in clinic, with the family observing quietly",
        "Coaching the family to embed motivating, play-based practice of functional goals into daily routines",
        "Postponing therapy until the child can follow verbal instructions",
      ],
      correctIndex: 2,
      explanation:
        "Children learn through high-frequency, motivating practice, and families deliver the thousands of hours that clinics cannot. Family-centred practice sets functional goals in partnership with the family and coaches carers to engineer play and routines so the target skill is practised all week — the therapist's main product is a capable, confident family, not a clinic session.",
      difficulty: "Medium",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "family-centred-therapy",
    },
    {
      text: "Parents ask whether a seated baby walker will help their 9-month-old walk sooner. What is the best advice?",
      options: [
        "Yes — walkers accelerate walking by strengthening the legs",
        "Walkers do not help walking develop and add safety risk; floor play, cruising practice at furniture and supervised standing are better",
        "Walkers help but only after 12 months",
        "Only expensive walkers with speed control are beneficial",
      ],
      correctIndex: 1,
      explanation:
        "Seated baby walkers do not accelerate walking and are associated with injuries; the seated posture bypasses exactly the balance and weight-shift practice walking requires. Recommend floor play, pulling to stand, cruising along stable furniture and push-along toys under supervision instead.",
      difficulty: "Medium",
      tags: ["management", "precautions"],
      sectionSlug: "activity-blocks",
    },
  ],
  flashcards: [
    { front: "Typical ages: independent sitting, pull-to-stand, walking?", back: "Sitting 6–8 months (range 5–9), pull-to-stand 9–10 months, walking 12–14 months (range 9–18)." },
    { front: "The four headline age-based red flags for referral?", back: "No head control by 4 months; not sitting by 9 months; not walking by 18 months; hand dominance before 12 months." },
    { front: "The one developmental red flag that applies at ANY age?", back: "Regression — loss of previously achieved skills. Always abnormal; prompt medical referral." },
    { front: "Describe the ATNR and its integration age.", back: "Head turn → face-side limbs extend, skull-side limbs flex ('fencing'). Integrates by ~4–6 months; persistent/obligatory ATNR blocks rolling, midline play and reaching — classic in cerebral palsy." },
    { front: "Moro reflex: stimulus, response, integration?", back: "Sudden head drop → arms extend/abduct then embrace, often a cry. Integrates by ~4–6 months. Asymmetry suggests brachial plexus injury or clavicle fracture." },
    { front: "Typical vs atypical infant movement in one line each?", back: "Typical: varied, symmetrical, fluent, changing strategies. Atypical: stereotyped, obligatory, asymmetrical, poverty of variety." },
    { front: "Head posture in right congenital muscular torticollis, and treatment principles?", back: "Side-flexed right, rotated left (tight right SCM). Treat with positioning/environmental setup, gentle stretches, active rotation through play, tummy time — and screen the hips for DDH." },
    { front: "Clinical clues to DDH after the newborn period?", back: "Asymmetric thigh/gluteal creases, limited unilateral hip abduction, Galeazzi sign (one knee lower), hip 'clunk'; later a painless limp. Refer for ultrasound." },
    { front: "Outline the Ponseti method for clubfoot.", back: "Weekly serial manipulation and casting from the first weeks → Achilles tenotomy in most → boots-and-bar brace (full-time, then nights/naps for years). Bracing adherence prevents relapse." },
    { front: "Normal features of early toddler gait?", back: "Wide base, high-guard arms, flat-foot contact, short quick steps, frequent falls. Heel-strike ~age 2; adult-form gait by ~7 years." },
    { front: "Typical resolution timeline for in-toeing causes?", back: "Metatarsus adductus (infant): 1–2 years. Internal tibial torsion (toddler): by ~4–5 years. Femoral anteversion (child): largely by 8–10 years. Benign variants need explanation, not braces." },
    { front: "When is toe-walking a worry?", back: "Unilateral, new-onset after normal gait, with tight calves/weakness/delay, or persisting beyond ~2–3 years — exclude cerebral palsy, Duchenne and spinal pathology before calling it idiopathic." },
  ],
};

export default topic;
