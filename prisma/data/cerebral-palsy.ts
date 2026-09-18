import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "cerebral-palsy",
  title: "Cerebral Palsy & Developmental Physiotherapy",
  category: "Pediatric",
  description:
    "Understand cerebral palsy classification, motor development and red flags, common impairments including hip surveillance, and evidence-based, family-centred physiotherapy across the lifespan.",
  difficulty: "Intermediate",
  estMinutes: 27,
  icon: "heart-pulse",
  keyTakeaways: [
    "Cerebral palsy is caused by a non-progressive lesion of the developing brain — but the clinical presentation evolves as the child grows.",
    "Classification has three axes: motor type (spastic, dyskinetic, ataxic), distribution (unilateral vs bilateral), and function (GMFCS levels I–V).",
    "GMFCS level is largely stable after age 2 and is the single most useful descriptor for prognosis, equipment and surveillance planning.",
    "Know the typical milestones — head control 3–4 months, independent sitting 6–8 months, walking 12–18 months — and the red flags for referral.",
    "Hip displacement is common, silent and preventable: every child with CP needs radiographic hip surveillance, most intensively at GMFCS IV–V.",
    "Strength training does NOT worsen spasticity — weakness, not spasticity, is often the bigger functional problem.",
    "The best-evidenced interventions are goal-directed, task-specific practice at high doses — including constraint-induced movement therapy for hemiplegia.",
    "Goals are set with the family around the F-words: Function, Family, Fitness, Fun, Friends, Future.",
    "CP is a lifelong condition — planned transition to adult services, fitness and participation matter as much as childhood therapy.",
  ],
  sections: [
    {
      slug: "what-is-cp",
      title: "What is Cerebral Palsy?",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Cerebral palsy (CP) is a group of permanent disorders of movement and posture, causing activity limitation, attributed to non-progressive disturbances in the developing fetal or infant brain. It is the most common cause of physical disability in childhood, affecting roughly 2 per 1000 live births.",
        },
        {
          kind: "image",
          illustration: "brain",
          caption: "CP arises from injury to the developing brain — commonly periventricular white matter injury in preterm infants, or grey matter and basal ganglia injury around term. The lesion is static; the child is not.",
        },
        {
          kind: "paragraph",
          text: "The core paradox to grasp: the brain lesion does not progress, but the clinical picture changes as the child grows. A hypotonic infant may become a spastic toddler; contractures, hip displacement and bony deformity can develop over years; and adult life brings its own challenges of fatigue and declining mobility. Management therefore spans the lifespan.",
        },
        {
          kind: "cards",
          items: [
            { title: "Risk factors", text: "Prematurity and low birth weight are the strongest; also perinatal hypoxia-ischaemia, neonatal stroke, infection (chorioamnionitis, neonatal meningitis), multiple pregnancy and kernicterus.", icon: "alert-triangle" },
            { title: "Associated impairments", text: "The motor disorder is often accompanied by epilepsy, intellectual disability, visual and hearing impairment, communication difficulty, feeding problems and pain — assess the whole child.", icon: "users" },
            { title: "Early detection", text: "CP can now often be identified before 6 months corrected age by combining neuroimaging with the General Movements Assessment and the HINE — early referral enables early intervention.", icon: "search" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "\"Non-progressive lesion, evolving presentation\" — if motor abilities are being lost, question the diagnosis and refer back: regression suggests a progressive neurological disorder instead.",
            "Absent fidgety movements at 3–4 months on the General Movements Assessment is one of the strongest early predictors of CP.",
          ],
        },
      ],
    },
    {
      slug: "classification",
      title: "Classification: Motor Type, Distribution & GMFCS",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "A complete description of a child with CP uses three axes: the predominant motor type, the limb distribution, and the functional level on the Gross Motor Function Classification System (GMFCS).",
        },
        {
          kind: "cards",
          items: [
            { title: "Spastic (~80–85%)", text: "Velocity-dependent hypertonia and hyperreflexia from corticospinal (pyramidal) system injury. Presents as unilateral (hemiplegia) or bilateral (diplegia — legs more than arms; quadriplegia — four limbs and trunk).", icon: "zap" },
            { title: "Dyskinetic (~6–10%)", text: "Involuntary, uncontrolled movements from basal ganglia injury: dystonia (sustained twisting postures, fluctuating tone) and choreoathetosis (jerky, writhing movements). Tone varies with arousal and effort.", icon: "shuffle" },
            { title: "Ataxic (~5%)", text: "Cerebellar involvement: poor balance and coordination, intention tremor, dysmetria, wide-based unsteady gait, often hypotonia.", icon: "move" },
            { title: "Mixed", text: "Many children show mixed features — commonly spasticity with dystonia. Describe the dominant type and note the rest.", icon: "layers" },
          ],
        },
        {
          kind: "table",
          headers: ["GMFCS level", "Functional description (6–12 years)"],
          rows: [
            ["I", "Walks without limitations indoors and outdoors; runs and jumps but speed, balance and coordination are reduced"],
            ["II", "Walks in most settings but with limitations on uneven ground, distances and stairs; may use a rail; minimal running/jumping"],
            ["III", "Walks using a hand-held mobility device (crutches, walker) indoors; usually uses wheeled mobility for longer distances; may self-propel a wheelchair"],
            ["IV", "Self-mobility with limitations; uses powered mobility or is transported in the community; standing/stepping only with support for transfers"],
            ["V", "Transported in a manual wheelchair in all settings; limited head and trunk control; extensive assistive technology and full assistance required"],
          ],
        },
        {
          kind: "keypoints",
          title: "Why GMFCS matters",
          items: [
            "Levels are largely stable after about age 2 — GMFCS predicts future mobility more reliably than motor type",
            "It drives surveillance intensity (hip X-ray frequency rises with level), equipment planning and realistic goal setting",
            "It distinguishes what a child does (performance) in everyday settings, not their best on a good day",
            "Companion scales exist for hand use (MACS) and communication (CFCS)",
          ],
        },
        {
          kind: "pearls",
          items: [
            "GMFCS is a classification, not an outcome measure — children do not \"improve\" from level III to II with therapy; use the GMFM-66 to measure change within a level.",
            "Describing a child as \"spastic bilateral CP, GMFCS III\" communicates far more than \"moderate CP\".",
          ],
        },
      ],
    },
    {
      slug: "motor-milestones",
      title: "Motor Milestones & Red Flags for Delay",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Typical gross motor development follows a predictable sequence with a broad normal range. Knowing the typical windows lets you recognise meaningful delay — and asymmetry — early, when intervention has most to offer the developing brain.",
        },
        {
          kind: "table",
          headers: ["Milestone", "Typical age", "Refer if not achieved by"],
          rows: [
            ["Head control in supported sitting", "3–4 months", "4–5 months"],
            ["Rolling (both directions)", "4–6 months", "8 months"],
            ["Independent sitting", "6–8 months", "9–10 months"],
            ["Crawling / bottom shuffling (variable — some skip it)", "8–10 months", "—"],
            ["Pull to stand", "9–12 months", "12 months"],
            ["Independent walking", "12–18 months", "18 months"],
          ],
        },
        {
          kind: "warning",
          title: "Red flags at any age",
          items: [
            "Strong hand preference before 12 months — often the first sign of hemiplegia, not early talent",
            "Persistent primitive reflexes (Moro, ATNR) beyond 6 months, or obligatory ATNR at any age",
            "Stiffness on handling, scissoring of the legs when lifted, or persistent fisting beyond 3–4 months",
            "Marked floppiness (head lag, slipping through the hands) beyond the newborn period",
            "Not sitting by 9–10 months or not walking by 18 months",
            "Loss of previously achieved skills — regression always demands paediatric referral",
          ],
        },
        {
          kind: "keypoints",
          title: "Interpreting delay",
          items: [
            "Correct for prematurity until 2 years of age when judging milestones",
            "One late milestone in an otherwise typical child is common; delay across domains, quality abnormalities (asymmetry, stiffness) or red flags matter more",
            "Early referral is never wrong — waiting to \"see if they grow out of it\" costs intervention time in the period of greatest neuroplasticity",
          ],
        },
      ],
    },
    {
      slug: "common-impairments",
      title: "Common Impairments & Hip Surveillance",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "The primary brain lesion produces spasticity, weakness and impaired selective motor control. Growing on top of these come the secondary musculoskeletal consequences — muscle shortening, contracture, hip displacement and bony torsion — which are largely preventable or manageable if anticipated.",
        },
        {
          kind: "cards",
          items: [
            { title: "Spasticity & hypertonia", text: "Velocity-dependent resistance to stretch. It interferes with movement and comfort — but it is not the whole story, and reducing it does not automatically improve function.", icon: "zap" },
            { title: "Weakness", text: "Children with CP generate substantially less force than peers, and weakness correlates more strongly with functional limitation than spasticity does. It is a primary treatment target.", icon: "dumbbell" },
            { title: "Contracture risk", text: "Spastic muscle grows more slowly than the bone it spans. Gastrocnemius, hamstrings and hip adductors/flexors shorten progressively — monitor range at every review.", icon: "minimize-2" },
            { title: "Impaired selective control", text: "Difficulty isolating joint movements (e.g. dorsiflexion without hip flexion synergy) limits gait quality and fine skills independent of strength or tone.", icon: "git-branch" },
            { title: "Pain & fatigue", text: "Pain is common at every age and level and under-reported; walking is energy-costly, so fatigue shapes what children actually do.", icon: "battery-low" },
          ],
        },
        {
          kind: "paragraph",
          text: "Hip surveillance deserves special emphasis. Progressive lateral displacement of the femoral head (measured as migration percentage on X-ray) affects around a third of children with CP overall, and most children at GMFCS IV–V. It is silent until late — pain appears once the hip is already subluxed or dislocated — and a dislocated hip causes pain, seating difficulty and care problems that are far harder to fix than to prevent.",
        },
        {
          kind: "keypoints",
          title: "Hip surveillance essentials",
          items: [
            "Risk rises with GMFCS level: displacement is uncommon at level I but affects the majority at level V",
            "Non-walkers cannot be screened clinically — surveillance is radiographic (AP pelvis, migration percentage), on a schedule set by GMFCS level and age",
            "Warning signs between X-rays: progressive adductor tightness, asymmetric abduction, pain on hip movement or a change in sitting tolerance",
            "Migration percentage above ~30–40% triggers orthopaedic referral for consideration of preventive surgery",
          ],
        },
        {
          kind: "pearls",
          items: [
            "The physiotherapist is often the professional who sees the child most — checking hip abduction range and asking about the last hip X-ray belongs in routine review.",
            "Treat the impairment that limits the goal, not the most visible one: a child may be limited far more by weakness and poor selective control than by the spasticity everyone notices.",
          ],
        },
      ],
    },
    {
      slug: "family-centred-goals",
      title: "Family-Centred Practice & the F-words",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Families, not therapists, live with the condition — and outcomes are better when families lead goal setting. The \"F-words for child development\" (Rosenbaum & Gorter), built on the WHO's ICF framework, reframe what matters in childhood disability.",
        },
        {
          kind: "cards",
          items: [
            { title: "Function", text: "What the child does, however they do it. An unusual movement pattern that works is function, not failure — prioritise doing over normality.", icon: "activity" },
            { title: "Family", text: "The child's essential environment. Family priorities, routines and capacity shape every realistic plan.", icon: "home" },
            { title: "Fitness", text: "Children with CP are less active and less fit than peers — physical activity and fitness are health goals in their own right, lifelong.", icon: "heart-pulse" },
            { title: "Fun", text: "Children develop through play. If therapy isn't engaging, the dose won't happen — embed practice in activities the child loves.", icon: "smile" },
            { title: "Friends", text: "Peer relationships and social participation are developmental outcomes, not luxuries.", icon: "users" },
            { title: "Future", text: "Every decision looks forward: what does this child need to thrive as an adolescent and adult?", icon: "compass" },
          ],
        },
        {
          kind: "keypoints",
          title: "Putting it into practice",
          items: [
            "Set collaborative goals in the family's words (tools: COPM, Goal Attainment Scaling) — specific, activity-level and meaningful",
            "Coach parents to embed practice in daily routines rather than prescribing separate \"exercise time\" alone",
            "Goals at the activity and participation level drive intervention choice — impairment change is a means, not the end",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Ask the child too, from as early as they can express preference — even young children can choose between goal pictures.",
            "A goal like \"walk to the shops with grandma\" recruits more practice than \"improve gait parameters\" ever will.",
          ],
        },
      ],
    },
    {
      slug: "interventions-evidence",
      title: "Interventions & the Evidence",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Systematic reviews of CP interventions converge on a clear message: what works is practice — goal-directed, task-specific, high-dose, real-world practice — plus targeted management of secondary impairments. Passive approaches without active practice have weak or no evidence for improving function.",
        },
        {
          kind: "steps",
          items: [
            { title: "Goal-directed, task-specific training", text: "Practise the actual task, in context, at high repetition — stairs by doing stairs, dressing by dressing. The strongest and most consistent evidence base in CP rehabilitation." },
            { title: "Strength training", text: "Progressive resistance training increases strength in CP and does NOT increase spasticity — a persistent myth now clearly refuted. Best functional transfer when combined with task practice; follow standard paediatric resistance guidelines." },
            { title: "Constraint-induced movement therapy (CIMT)", text: "For unilateral (hemiplegic) CP: constrain the less-affected hand and deliver intensive, playful practice with the affected one. Strong evidence for improved unimanual capacity; bimanual training achieves comparable gains — many programmes combine both." },
            { title: "Fitness & physical activity", text: "Aerobic and anaerobic training improves fitness; activity behaviour needs its own strategy (habit, opportunity, enjoyment). Fitness declines fastest around transitions — anticipate them." },
            { title: "Tone management (team-based)", text: "When spasticity or dystonia limits goals or comfort: botulinum toxin for focal spasticity (always paired with therapy/casting to use the window), oral agents, intrathecal baclofen or selective dorsal rhizotomy in selected children — physiotherapy before and after is integral." },
            { title: "Orthopaedic surgery", text: "For established contracture, hip displacement or lever-arm deformity — often as planned single-event multilevel surgery (SEMLS) with an intensive rehabilitation year to follow." },
          ],
        },
        {
          kind: "warning",
          title: "Weak or refuted approaches",
          items: [
            "Passive stretching alone produces little lasting change in muscle length — position, cast or splint for sustained low-load stretch instead, and load the muscle actively",
            "Generic \"handling\" sessions without child-active, goal-linked practice have not shown functional benefit",
            "Any programme claiming to fix the brain lesion itself — the lesion is static; therapy trains the child, not the scan",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Dose is the hidden variable: functionally meaningful change typically needs many hours of practice — home programmes and routines are how the dose actually gets delivered.",
            "\"Strength training worsens spasticity\" is examiner bait — the evidence says the opposite, and weakness is the more functionally limiting impairment.",
          ],
        },
      ],
    },
    {
      slug: "postural-management",
      title: "24-hour Postural Management, Equipment & Orthoses",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "A child at GMFCS IV–V may spend almost every hour of the day and night in a small number of postures. 24-hour postural management thinks across the whole day — lying, sitting and standing — using equipment to protect body structure, enable function and provide comfort, rather than treating posture only during therapy sessions.",
        },
        {
          kind: "cards",
          items: [
            { title: "Seating systems", text: "Adaptive seating provides pelvic and trunk alignment, head support and pressure distribution — a stable base frees the hands and head for play, communication and feeding.", icon: "armchair" },
            { title: "Standing frames", text: "Supported standing programmes (commonly ~30–60 minutes several times weekly) promote hip loading, sustained muscle stretch, bone density and participation at eye level with peers.", icon: "align-vertical-justify-center" },
            { title: "Sleep/lying systems", text: "Night-time positioning limits sustained asymmetric postures (windswept hips, scoliosis-promoting positions) during the longest single posture of the day — balanced against sleep quality and family burden.", icon: "moon" },
            { title: "Mobility equipment", text: "Walkers, gait trainers, self-propelled and powered wheelchairs. Powered mobility from as young as 12–24 months can unlock exploration and development — independent mobility is a developmental need, not a last resort.", icon: "accessibility" },
          ],
        },
        {
          kind: "paragraph",
          text: "Orthoses complement the programme. Ankle-foot orthoses (AFOs) are the most common: solid or hinged AFOs improve stance stability and swing clearance and help manage equinus; night AFOs provide sustained gastrocnemius stretch. Prescription follows gait analysis and goals — an orthosis should solve a defined problem, and its effect on function should be checked, not assumed.",
        },
        {
          kind: "keypoints",
          title: "Principles",
          items: [
            "Think 24 hours: therapy is one hour; posture is all of them",
            "Equipment serves participation (play, school, communication) as much as body structure",
            "Review fit and purpose regularly — children grow, goals change, and yesterday's orthosis can become today's obstacle",
            "Balance ideal positioning against comfort, sleep and family workload — an unused system helps no one",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Check skin at every orthosis and equipment review — redness that does not fade within about 20 minutes means the fit needs attention.",
            "Ask what equipment is actually used at home and school; the gap between prescribed and used tells you where the plan is failing.",
          ],
        },
      ],
    },
    {
      slug: "lifespan-participation",
      title: "Transition to Adulthood & Participation",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Most children with CP become adults with CP — and many report that services fall away exactly when adult life begins. Planned transition, starting in early adolescence, hands over not just medical care but self-management, and treats participation in education, work, relationships and community as the outcome that matters.",
        },
        {
          kind: "cards",
          items: [
            { title: "Planned transition", text: "Begin around 12–14 years: build the young person's own knowledge of their condition, gradually shift communication from parent to young person, and make a warm handover to identified adult services.", icon: "compass" },
            { title: "Adult realities", text: "Adults with CP commonly experience pain, fatigue and early decline in walking — sometimes from the 20s–30s. Lifelong strength, fitness and weight management protect mobility reserve.", icon: "trending-down" },
            { title: "Participation focus", text: "The ICF activity/participation lens applies lifelong: driving, employment, independent living and relationships are legitimate physiotherapy-relevant goals.", icon: "users" },
            { title: "Continued surveillance", text: "Musculoskeletal review (hips, spine, contracture), equipment reviews and mental health awareness continue into adulthood — deterioration is not \"just the CP\" and deserves assessment.", icon: "search" },
          ],
        },
        {
          kind: "keypoints",
          title: "Physiotherapy across the lifespan",
          items: [
            "Adolescence: protect fitness through growth spurts and surgery episodes; keep activity habits alive",
            "Adulthood: episodic, goal-based input beats indefinite low-dose therapy — teach self-management and gym-based options",
            "New pain, falls or functional loss in an adult with CP warrants assessment, not acceptance",
          ],
        },
      ],
    },
    {
      slug: "task-practice-programme",
      title: "Task-Specific Practice & Exercise Programme",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "These examples show how the principles — goal-directed, task-specific, strength where it counts, fun enough to be repeated — turn into an actual programme. Every item should trace back to a family goal.",
        },
        {
          kind: "exercise",
          name: "Sit-to-stand practice",
          purpose: "Strengthen extensors and train the transfer that underpins toileting, chairs and standing play (goal example: getting up from the classroom floor alone).",
          position: "Sitting on a bench sized so hips and knees are near 90°, feet flat, slightly back.",
          execution: "Stand up without hands, reaching for a toy or target placed to encourage forward weight shift, then sit down slowly with control.",
          dosage: "3 sets of 8–10, built into daily routines (every time a favourite song plays, before snack).",
          progression: "Lower the bench, add a light backpack, hold an object in both hands, or progress towards single-leg emphasis.",
          precautions: "Watch for excessive knee valgus or pushing through equinus — adjust foot position and support rather than abandoning the task.",
        },
        {
          kind: "exercise",
          name: "Progressive step-ups",
          purpose: "Build single-leg strength and stair capacity (goal example: managing the school bus step).",
          position: "Facing a low step (start 5–10 cm), rail or hand support available on the more-affected side's opposite hand.",
          execution: "Step up leading with the more-affected leg, control the descent slowly. Keep the pelvis level.",
          dosage: "2–3 sets of 6–10 each leg, 2–3 times per week as part of a strength block.",
          progression: "Increase step height towards a full stair, reduce hand support, add a small load, slow the eccentric.",
          precautions: "Quality first: if the trunk lurches or the heel cannot stay down, lower the step.",
        },
        {
          kind: "exercise",
          name: "Modified constraint-induced play (hemiplegia, home programme)",
          purpose: "Increase spontaneous use and capacity of the more-affected hand in unilateral CP.",
          position: "Table-top play with the less-affected hand resting in a soft mitt or engaged holding the activity steady.",
          execution: "Child performs graded one-handed games with the affected hand — posting coins, stickers, squeezing dough, knocking towers — chosen just within capability.",
          dosage: "Short daily blocks (e.g. 30–60 minutes of accumulated play) across a defined burst of several weeks, alongside bimanual practice.",
          progression: "Smaller objects, precision release, then two-handed tasks where the affected hand takes the lead role (stabilise paper, open containers).",
          precautions: "Keep it playful and successful — frustration kills dose; the mitt comes off for safety-critical activities.",
        },
        {
          kind: "exercise",
          name: "Supported standing programme (GMFCS IV–V)",
          purpose: "Hip loading, sustained lower-limb muscle stretch, bone health and eye-level social participation.",
          position: "In a prescribed standing frame with pelvis, knees and feet aligned per the equipment plan; abduction setting as prescribed for hip management.",
          execution: "Stand during a motivating activity — school circle time, screen play, mealtime prep — rather than as an isolated \"standing session\".",
          dosage: "Commonly ~30–60 minutes, 3–5 days per week, per the individual programme.",
          progression: "Build tolerance gradually; add reaching and head-control activities within the frame.",
          precautions: "Check skin after sessions, monitor comfort; review alignment after growth or any change in hip status.",
        },
        {
          kind: "exercise",
          name: "Treadmill or overground walking bursts",
          purpose: "Cardiorespiratory fitness and walking endurance (goal example: keeping up on the family dog walk).",
          position: "Treadmill with rails or safe overground circuit; harness support only if needed for safety.",
          execution: "Walk in intervals at a pace that raises breathing but allows short phrases — e.g. 2–3 minutes brisk, 1–2 minutes easy.",
          dosage: "Building towards 20+ minutes of accumulated moderate activity, 2–3 times per week, alongside everyday activity.",
          progression: "Longer intervals, gentle incline, or transfer to community walking, cycling or swimming — whichever the child will actually keep doing.",
          precautions: "Footwear/orthoses as prescribed; monitor fatigue-related tripping as intervals lengthen.",
        },
        {
          kind: "keypoints",
          title: "Programme design rules",
          items: [
            "Every exercise maps to a family-identified goal — if it doesn't, question its place",
            "Embed practice in routines and play; the home programme is the main dose, therapy sessions are coaching",
            "Strength work follows normal progressive-resistance rules — and does not worsen spasticity",
            "Measure change with GMFM-66, timed walking tests or goal attainment — not tone",
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
            "CP = permanent movement/posture disorder from a non-progressive lesion of the developing brain; presentation evolves with growth — regression means re-refer",
            "Classify on three axes: spastic (~85%) / dyskinetic / ataxic; unilateral vs bilateral; GMFCS I–V (stable after ~2 years, drives prognosis and surveillance)",
            "Milestones: head control 3–4 m, sitting 6–8 m, walking 12–18 m; red flags — early hand preference (<12 m), persistent primitive reflexes, stiffness/scissoring, not walking by 18 m",
            "Impairments: spasticity AND weakness (weakness often matters more), contracture risk, poor selective control, pain; radiographic hip surveillance for all, most at GMFCS IV–V",
            "Goals: family-centred, F-words (Function, Family, Fitness, Fun, Friends, Future)",
            "Best evidence: goal-directed task-specific practice, strength training (no spasticity worsening), CIMT/bimanual for hemiplegia, fitness training",
            "24-hour postural management: seating, standing frames, sleep systems, AFOs — equipment for participation as much as posture",
            "Plan transition to adult services from early adolescence; adults with CP need lifelong fitness and musculoskeletal review",
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
      text: "Which statement best captures the definition of cerebral palsy?",
      options: [
        "A progressive degeneration of the motor cortex beginning in infancy",
        "A permanent disorder of movement and posture from a non-progressive lesion of the developing brain",
        "A genetic muscle disease presenting with weakness in childhood",
        "A temporary delay in motor development that resolves with therapy",
      ],
      correctIndex: 1,
      explanation:
        "CP is defined as a group of permanent disorders of movement and posture, causing activity limitation, attributed to non-progressive disturbances of the developing fetal or infant brain. The lesion is static — although the clinical presentation evolves as the child grows, the underlying brain injury does not progress. Progressive loss of skills points away from CP.",
      difficulty: "Easy",
      tags: ["pathology"],
      sectionSlug: "what-is-cp",
    },
    {
      text: "A 4-year-old with CP begins losing motor skills she previously mastered. What is the correct interpretation?",
      options: [
        "Normal evolution of CP — reassure the family",
        "Regression is inconsistent with CP's static lesion — refer back for diagnostic review",
        "A sign she needs more stretching",
        "Expected fatigue that resolves with rest",
      ],
      correctIndex: 1,
      explanation:
        "CP's presentation changes with growth, but true regression — losing previously achieved skills — is not explained by a static lesion. It suggests a progressive neurological or metabolic disorder mimicking CP, or a new problem (e.g. hydrocephalus, seizures, hip dislocation causing pain). Loss of skills always warrants paediatric re-referral.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "pathology"],
      sectionSlug: "what-is-cp",
    },
    {
      text: "Which motor type accounts for the majority of cerebral palsy cases?",
      options: ["Ataxic", "Dyskinetic", "Spastic", "Hypotonic"],
      correctIndex: 2,
      explanation:
        "Spastic CP accounts for roughly 80–85% of cases, arising from corticospinal (pyramidal) system injury and presenting with velocity-dependent hypertonia and hyperreflexia. Dyskinetic CP (~6–10%) follows basal ganglia injury, and ataxic CP (~5%) reflects cerebellar involvement.",
      difficulty: "Easy",
      tags: ["pathology", "anatomy"],
      sectionSlug: "classification",
    },
    {
      text: "A 8-year-old walks indoors with a posterior walker and uses a wheelchair for community distances. Which GMFCS level fits best?",
      options: ["Level I", "Level II", "Level III", "Level V"],
      correctIndex: 2,
      explanation:
        "GMFCS level III describes children who walk with a hand-held mobility device (walker or crutches) indoors and typically use wheeled mobility for longer distances. Level II walks without a device but with limitations; level IV has severely limited self-mobility even with devices; level V is transported in a wheelchair in all settings.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "classification",
    },
    {
      text: "Which statement about the GMFCS is correct?",
      options: [
        "Levels typically improve by one or two grades with intensive therapy",
        "It measures best performance under ideal test conditions",
        "Levels are largely stable after about age 2, making the GMFCS useful for prognosis",
        "It classifies hand function in daily activities",
      ],
      correctIndex: 2,
      explanation:
        "GMFCS classifies usual gross motor performance and is largely stable after about age 2 — which is exactly why it predicts future mobility and drives surveillance and equipment planning. It is not an outcome measure (use the GMFM-66 to measure change within a level), and hand function is classified separately by the MACS.",
      difficulty: "Medium",
      tags: ["assessment"],
      sectionSlug: "classification",
    },
    {
      text: "By what age is independent sitting typically achieved, prompting referral if absent?",
      options: [
        "3–4 months, refer by 5 months",
        "6–8 months, refer if not sitting by 9–10 months",
        "12–14 months, refer by 16 months",
        "18 months, refer by 24 months",
      ],
      correctIndex: 1,
      explanation:
        "Independent sitting typically emerges at 6–8 months; absence by 9–10 months is a referral trigger. Head control is expected around 3–4 months and independent walking by 12–18 months (refer if not walking by 18 months). Remember to correct for prematurity until age 2 when judging milestones.",
      difficulty: "Easy",
      tags: ["assessment"],
      sectionSlug: "motor-milestones",
    },
    {
      text: "A parent proudly reports their 8-month-old is \"already right-handed\". Why does this concern the physiotherapist?",
      options: [
        "Hand preference at 8 months predicts learning difficulties",
        "Definite hand preference before 12 months may indicate impaired function of the other hand — an early sign of hemiplegic CP",
        "Right-handedness is abnormal at any age",
        "It suggests the child will skip crawling",
      ],
      correctIndex: 1,
      explanation:
        "Hand dominance is not expected to be established until well after the first year. A strong early \"preference\" often means the other hand is not being used normally — frequently the first sign parents notice in unilateral (hemiplegic) CP. It warrants assessment of the neglected side (fisting, reduced spontaneous movement, asymmetry) and referral.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "motor-milestones",
    },
    {
      text: "Why does hip surveillance in CP rely on scheduled X-rays rather than waiting for symptoms?",
      options: [
        "X-rays are cheaper than clinical examination",
        "Hip displacement is typically silent until subluxation or dislocation is established — pain arrives too late",
        "Children with CP cannot communicate pain",
        "Clinical examination is impossible in CP",
      ],
      correctIndex: 1,
      explanation:
        "Progressive lateral migration of the femoral head is usually painless in its treatable stages; by the time pain, seating difficulty or care problems appear, the hip may already be subluxed or dislocated. Radiographic surveillance (AP pelvis, migration percentage) on a schedule set by GMFCS level detects displacement early enough for preventive intervention. Migration percentage beyond roughly 30–40% triggers orthopaedic referral.",
      difficulty: "Medium",
      tags: ["management", "precautions", "pathology"],
      sectionSlug: "common-impairments",
    },
    {
      text: "Which children with CP have the highest risk of hip displacement?",
      options: [
        "GMFCS level I ambulant children",
        "GMFCS levels IV–V non-ambulant children",
        "Only children with ataxic CP",
        "Risk is equal across all levels",
      ],
      correctIndex: 1,
      explanation:
        "Hip displacement risk rises steeply with GMFCS level: it is uncommon at level I but affects the majority of children at level V. Reduced weight-bearing, adductor/flexor spasticity and muscle imbalance around an immature acetabulum drive migration in non-ambulant children — which is why surveillance frequency is set by GMFCS level.",
      difficulty: "Easy",
      tags: ["pathology", "precautions"],
      sectionSlug: "common-impairments",
    },
    {
      text: "Which statement about strength training in children with spastic CP is supported by the evidence?",
      options: [
        "It increases spasticity and should be avoided",
        "It increases strength without worsening spasticity — and weakness is often the greater functional problem",
        "It only works after spasticity has been surgically abolished",
        "It is unsafe before the age of 16",
      ],
      correctIndex: 1,
      explanation:
        "Multiple trials and systematic reviews show progressive resistance training increases strength in CP without increasing spasticity — the old prohibition is refuted. Weakness correlates more strongly with functional limitation than spasticity does, making strengthening a primary treatment target. Functional transfer is best when strengthening is combined with task-specific practice.",
      difficulty: "Easy",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "interventions-evidence",
    },
    {
      text: "What is the core mechanism of constraint-induced movement therapy (CIMT) in hemiplegic CP?",
      options: [
        "Strengthening the less-affected arm to compensate",
        "Restraining the less-affected hand while delivering intensive practice with the more-affected hand",
        "Electrical stimulation of the affected hand during sleep",
        "Immobilising both hands to reset the motor cortex",
      ],
      correctIndex: 1,
      explanation:
        "CIMT constrains the less-affected hand (mitt, splint) to prevent compensation, and pairs this with intensive, graded, play-based practice using the more-affected hand — countering developmental disregard and driving use-dependent plasticity. Evidence supports improved unimanual capacity; bimanual intensive training achieves comparable goals and many programmes combine the two.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "interventions-evidence",
    },
    {
      text: "Botulinum toxin is planned for a child's spastic gastrocnemius. What makes the injection worthwhile?",
      options: [
        "Nothing further is needed — the toxin is the treatment",
        "Pairing the temporary tone reduction with therapy, casting or orthoses to gain range and train new patterns during the window",
        "Complete bed rest for six weeks after injection",
        "Repeating injections weekly until tone is zero",
      ],
      correctIndex: 1,
      explanation:
        "Botulinum toxin produces a temporary (roughly 3–6 month) focal reduction in spasticity. On its own it changes little; its value lies in the therapeutic window it opens — for serial casting or orthotic management to lengthen the muscle-tendon unit, and for strengthening and task practice to establish better movement patterns. Physiotherapy before and after injection is integral to the pathway.",
      difficulty: "Hard",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "interventions-evidence",
    },
    {
      text: "What do the \"F-words\" in childhood disability stand for?",
      options: [
        "Fitness, Flexibility, Force, Fun, Feedback, Frequency",
        "Function, Family, Fitness, Fun, Friends, Future",
        "Facilitation, Function, Form, Focus, Freedom, Fatigue",
        "Family, Finance, Function, Fitness, Feeding, Falls",
      ],
      correctIndex: 1,
      explanation:
        "The F-words (Rosenbaum & Gorter), built on the WHO ICF framework, are Function, Family, Fitness, Fun, Friends and Future. They reframe goals away from normalising movement and towards what the child does, the environment they live in, their health, enjoyment, relationships and long-term life — the basis of family-centred goal setting.",
      difficulty: "Easy",
      tags: ["management"],
      sectionSlug: "family-centred-goals",
    },
    {
      text: "Which goal statement best reflects family-centred, participation-focused practice?",
      options: [
        "Reduce Modified Ashworth Scale score of hamstrings from 2 to 1",
        "Normalise gait pattern on video analysis",
        "Ride a bike with his brother in the park by summer",
        "Achieve full passive dorsiflexion range",
      ],
      correctIndex: 2,
      explanation:
        "Riding a bike with his brother is specific, meaningful, family-generated and at the activity/participation level of the ICF — it will recruit motivation and practice, and impairment work (strength, range) becomes a means to it. Tone scores, gait normality and passive range are impairment-level metrics: legitimate to track, but not goals in themselves.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "management"],
      sectionSlug: "family-centred-goals",
    },
    {
      text: "What is the rationale for 24-hour postural management in a child at GMFCS level V?",
      options: [
        "It replaces the need for any active therapy",
        "Posture during therapy hours matters most; the rest of the day is unimportant",
        "The child spends nearly all day and night in a few postures — managing lying, sitting and standing across 24 hours protects body structure and enables participation",
        "It is only used after orthopaedic surgery",
      ],
      correctIndex: 2,
      explanation:
        "A non-ambulant child spends almost every hour in a small number of postures, and sustained asymmetric positioning contributes to hip migration, windswept deformity and scoliosis. 24-hour postural management coordinates seating, standing programmes and night positioning so that all those hours work for the child rather than against them — while also serving comfort, function and participation. It complements, never replaces, active intervention.",
      difficulty: "Medium",
      tags: ["management", "precautions"],
      sectionSlug: "postural-management",
    },
    {
      text: "Which statement about ankle-foot orthoses (AFOs) in CP is most accurate?",
      options: [
        "AFOs cure equinus permanently after six months of wear",
        "AFOs are prescribed to solve defined problems — such as stance stability or swing clearance — and their functional effect should be verified",
        "All children with CP should wear identical solid AFOs",
        "AFOs are contraindicated in ambulant children",
      ],
      correctIndex: 1,
      explanation:
        "An AFO is a tool for a defined problem: a solid or hinged AFO can improve stance stability and swing clearance and manage equinus, while night AFOs provide sustained stretch. Prescription follows assessment of gait and goals, and the effect on the individual child's function should be checked rather than assumed — and reviewed as the child grows.",
      difficulty: "Medium",
      tags: ["management"],
      sectionSlug: "postural-management",
    },
    {
      text: "Why is passive stretching alone considered insufficient for managing contracture risk in CP?",
      options: [
        "Stretching is painful and therefore always contraindicated",
        "Brief passive stretch produces little lasting change in muscle length; sustained positioning (casting, orthoses, standing) and active loading are needed",
        "Contractures in CP are purely bony and unrelated to muscle",
        "Stretching increases spasticity permanently",
      ],
      correctIndex: 1,
      explanation:
        "Evidence shows brief manual stretching produces minimal lasting change in muscle extensibility in CP. Spastic muscle grows more slowly than bone, so meaningful management uses prolonged low-load positioning — serial casting, orthoses, standing programmes — combined with active strengthening through range and, when needed, tone management. Monitoring range at every review remains essential.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "management", "pathology"],
      sectionSlug: "interventions-evidence",
    },
    {
      text: "A 19-year-old with bilateral spastic CP (GMFCS III) reports walking less and more fatigue since leaving school. What is the best framing?",
      options: [
        "Inevitable deterioration requiring no action",
        "A recognised transition-period risk: assess for treatable causes and rebuild strength, fitness and mobility strategies",
        "Evidence the childhood therapy failed",
        "A sign to stop all walking immediately to conserve energy",
      ],
      correctIndex: 1,
      explanation:
        "Decline in walking and rising fatigue around transition to adulthood is common in CP — driven by lost service structure, reduced activity, growth-related biomechanics, pain and deconditioning. It is not simply inevitable: assessment for treatable contributors (pain, contracture, hip or spine problems, fitness loss) plus goal-based strengthening, fitness work and mobility-strategy review can protect mobility reserve. New functional loss deserves assessment, not acceptance.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "management"],
      sectionSlug: "lifespan-participation",
    },
    {
      text: "Which measurement approach correctly tracks progress in a goal-directed CP programme?",
      options: [
        "Change in GMFCS level every 6 weeks",
        "Reduction in Modified Ashworth score as the primary outcome",
        "GMFM-66, timed walking tests and goal attainment scaling against the family's goals",
        "Serial MRI scans to show brain repair",
      ],
      correctIndex: 2,
      explanation:
        "The GMFCS is a stable classification, not an outcome measure, and tone scales measure an impairment that correlates poorly with function. Change is captured with the GMFM-66, relevant timed tests (e.g. timed walking), COPM and Goal Attainment Scaling tied to the family's own goals. The brain lesion is static, so imaging has no role in tracking therapy response.",
      difficulty: "Hard",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "task-practice-programme",
    },
    {
      text: "In a home CIMT programme for a 5-year-old with right hemiplegia, which design element is most important for success?",
      options: [
        "Constraining the affected right hand during play",
        "Graded, playful tasks the child can just succeed at, delivered in short frequent blocks with the left hand constrained",
        "Long, demanding daily sessions regardless of the child's engagement",
        "Using the constraint during bathing and stair climbing for extra dose",
      ],
      correctIndex: 1,
      explanation:
        "The constraint goes on the LESS-affected (left) hand, and the active ingredient is the practice: playful, graded activities pitched just within the affected hand's capability, accumulated in short frequent blocks. Frustration and boredom destroy dose in children, and the mitt must come off for safety-critical activities like bathing and stairs. Option A constrains the wrong hand — a classic exam trap.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "clinical-reasoning", "precautions"],
      sectionSlug: "task-practice-programme",
    },
  ],
  flashcards: [
    { front: "Define cerebral palsy in one sentence.", back: "A group of permanent disorders of movement and posture causing activity limitation, attributed to non-progressive disturbances of the developing fetal or infant brain." },
    { front: "The three axes used to classify CP?", back: "Motor type (spastic / dyskinetic / ataxic), distribution (unilateral vs bilateral), and function (GMFCS I–V, plus MACS for hands)." },
    { front: "GMFCS level III in one line?", back: "Walks with a hand-held mobility device (walker/crutches) indoors; usually wheeled mobility for longer distances." },
    { front: "Typical ages: head control, sitting, walking?", back: "Head control 3–4 months; independent sitting 6–8 months; walking 12–18 months (refer if not walking by 18 months; correct for prematurity to age 2)." },
    { front: "Earliest common sign of hemiplegic CP parents notice?", back: "Definite hand preference before 12 months — really reduced use of the other hand." },
    { front: "Why is hip surveillance radiographic and scheduled?", back: "Hip displacement is silent until late; AP pelvis migration percentage on a GMFCS-based schedule detects it while preventable (~>30–40% triggers orthopaedic referral)." },
    { front: "Does strength training worsen spasticity in CP?", back: "No — evidence shows it increases strength without increasing spasticity; weakness is often the more functionally limiting impairment." },
    { front: "The F-words of childhood disability?", back: "Function, Family, Fitness, Fun, Friends, Future (Rosenbaum & Gorter, built on the ICF)." },
    { front: "Which hand is constrained in CIMT for hemiplegia?", back: "The LESS-affected hand — freeing intensive, playful, graded practice for the more-affected hand." },
    { front: "What is 24-hour postural management?", back: "Coordinated management of lying, sitting and standing postures across the whole day and night — seating, standing frames, sleep systems — to protect body structure and enable participation." },
    { front: "Best-evidenced intervention family in CP rehabilitation?", back: "Goal-directed, task-specific practice at high dose — practising the real task in real contexts, embedded in daily routines." },
    { front: "A child with CP loses previously achieved skills. Interpretation?", back: "Regression is inconsistent with a static lesion — refer back for diagnostic review (progressive disorder or new complication)." },
  ],
};

export default topic;
