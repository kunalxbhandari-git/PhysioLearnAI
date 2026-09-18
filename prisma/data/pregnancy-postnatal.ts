import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "pregnancy-postnatal",
  title: "Pregnancy & Postnatal Physiotherapy",
  category: "Musculoskeletal",
  description:
    "Body changes in pregnancy, safe exercise guidelines, pelvic girdle pain, diastasis recti, pelvic floor rehabilitation and the graded postnatal return to exercise.",
  difficulty: "Intermediate",
  estMinutes: 28,
  icon: "heart-pulse",
  keyTakeaways: [
    "Pregnancy remodels the body — hormonal laxity, a shifting centre of mass and major cardiovascular changes are normal adaptations, not pathology.",
    "For uncomplicated pregnancies, guidelines recommend around 150 minutes of moderate-intensity activity per week — exercise is safe and beneficial for parent and baby.",
    "Absolute contraindications and warning signs to stop exercising must be screened for and known cold.",
    "Pregnancy-related pelvic girdle pain is common and treatable: stay active, modify aggravating activities, and use supports as an adjunct.",
    "Diastasis recti is a normal adaptation of late pregnancy that usually improves postpartum; graded abdominal loading — not avoidance — is the management.",
    "Pelvic floor muscle training during and after pregnancy has strong evidence for preventing and treating urinary incontinence.",
    "Postnatal return to exercise is graded and criteria-based: walking early, low-impact progression, with return to running commonly advised from around 3 months postpartum if pelvic floor function allows.",
    "Caesarean birth is major abdominal surgery — respect early healing before progressive loading.",
  ],
  sections: [
    {
      slug: "body-changes",
      title: "How Pregnancy Changes the Body",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Pregnancy produces some of the most rapid physiological remodelling an adult body ever undergoes. For the physiotherapist, three systems matter most: hormonal effects on connective tissue, mechanical effects of the growing uterus on posture and load, and cardiovascular adaptations that change the response to exercise.",
        },
        {
          kind: "cards",
          items: [
            { title: "Hormonal laxity", text: "Relaxin, progesterone and oestrogen increase ligamentous laxity throughout pregnancy — most relevantly at the pelvic joints (symphysis pubis, sacroiliac joints), preparing the pelvis for birth but reducing passive joint stability.", icon: "unlock" },
            { title: "Posture & centre of mass", text: "The growing uterus and breasts shift the centre of mass forwards and upwards. Lumbar lordosis commonly increases, the pelvis tilts anteriorly, and the base of support widens — changing balance and joint loading.", icon: "move" },
            { title: "Cardiovascular changes", text: "Blood volume rises by roughly 40–50%, resting heart rate increases (~10–20 bpm), and cardiac output climbs. Resting blood pressure typically dips in mid-pregnancy. Heart rate becomes an unreliable intensity gauge — use the talk test or RPE instead.", icon: "heart" },
            { title: "Respiratory & other", text: "The diaphragm is displaced upwards while tidal volume increases; mild breathlessness at rest is common and normal. Weight gain, fluid retention (think carpal tunnel symptoms) and abdominal wall stretch complete the picture.", icon: "wind" },
          ],
        },
        {
          kind: "paragraph",
          text: "From around mid-pregnancy, lying flat on the back can allow the uterus to compress the inferior vena cava, reducing venous return — some people feel dizzy or unwell in supine. This is why prolonged flat supine exercise is modified from the second trimester onwards, with incline, side-lying or upright alternatives.",
        },
        {
          kind: "keypoints",
          title: "Clinical implications",
          items: [
            "Ligamentous laxity → favour controlled, mid-range strengthening over aggressive end-range stretching",
            "Anterior mass shift → posture, balance and manual-handling advice become relevant",
            "Use RPE ('somewhat hard' or lighter) and the talk test, not heart-rate zones, to gauge intensity",
            "Modify prolonged flat supine positions after ~16 weeks if symptomatic — incline or side-lying alternatives",
          ],
        },
      ],
    },
    {
      slug: "exercise-guidelines",
      title: "Exercise in Pregnancy: Guidelines & Safety",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "The message from every major guideline (e.g. ACOG, RCOG/UK CMO guidance) is the same: for uncomplicated pregnancies, physical activity is safe and beneficial — reducing the risk of gestational diabetes, excessive weight gain, and pregnancy-related pain, and supporting mood and fitness — without increasing miscarriage or adverse birth outcomes.",
        },
        {
          kind: "keypoints",
          title: "Core recommendations",
          items: [
            "Accumulate around 150 minutes of moderate-intensity activity per week (e.g. brisk walking, swimming, stationary cycling, aquanatal classes)",
            "Include muscle-strengthening activity ~2 days per week, plus daily pelvic floor muscle training",
            "Previously inactive: start gradually — 'start low, go slow' — building towards the target",
            "Already active: continue with sensible modification; this is not the time for new maximal challenges",
            "Moderate intensity = able to hold a conversation (talk test); use RPE rather than heart rate",
          ],
        },
        {
          kind: "table",
          headers: ["Absolute contraindications (do not exercise — medical care)", "Relative contraindications (medical clearance & individualised programme)"],
          rows: [
            ["Severe pre-eclampsia / uncontrolled hypertension", "Mild/moderate controlled hypertension"],
            ["Placenta praevia after ~26–28 weeks", "History of preterm birth or growth restriction in this pregnancy — follow specialist advice"],
            ["Ruptured membranes or preterm labour", "Twin pregnancy in the third trimester (individualise)"],
            ["Unexplained persistent vaginal bleeding", "Anaemia (symptomatic)"],
            ["Incompetent cervix / cerclage", "Poorly controlled thyroid disease, diabetes or seizure disorder"],
            ["Significant cardiac or restrictive lung disease", "Extreme underweight or eating disorder"],
          ],
        },
        {
          kind: "paragraph",
          text: "Activity choice matters more as pregnancy advances: avoid activities with high fall or contact risk (horse riding, downhill skiing, combat sports), scuba diving (fetal decompression risk), exercising in excessive heat, and — from mid-pregnancy — prolonged flat supine work and heavy Valsalva-based lifting. Almost everything else can be adapted.",
        },
        {
          kind: "redflags",
          items: [
            "Vaginal bleeding or fluid loss — stop and seek urgent obstetric review",
            "Regular painful contractions before term — stop and seek urgent review",
            "Chest pain, severe breathlessness before exertion, dizziness or syncope",
            "Severe headache, visual disturbance or sudden swelling (possible pre-eclampsia)",
            "Calf pain or swelling (possible DVT — pregnancy is a prothrombotic state)",
            "Reduced fetal movements after exercise — advise prompt maternity assessment",
          ],
        },
        {
          kind: "pearls",
          items: [
            "The default answer to 'can I exercise while pregnant?' is yes — screening identifies the exceptions, not the rule.",
            "Frame modifications positively: continuing adapted activity is one of the best things a pregnant person can do for themselves and their baby.",
          ],
        },
      ],
    },
    {
      slug: "pgp-lbp",
      title: "Pelvic Girdle Pain & Low Back Pain",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Pregnancy-related pelvic girdle pain (PGP) affects roughly one in five pregnancies. Pain arises from the sacroiliac joints and/or symphysis pubis, typically felt over the posterior pelvis, buttocks, groin or inner thigh, and is aggravated by asymmetrical single-leg loading: walking, stairs, turning in bed, standing on one leg to dress, and getting in and out of the car.",
        },
        { kind: "image", illustration: "spine", caption: "The lumbar spine and pelvis form one load-transfer system. In pregnancy, hormonal laxity plus a forward-shifted load challenges force closure of the pelvic joints — the basis of pelvic girdle pain." },
        {
          kind: "paragraph",
          text: "Distinguish PGP from pregnancy-related low back pain (pain above the sacrum, behaving like ordinary mechanical LBP) — the two often coexist. Both are common, both are manageable, and neither means the pregnancy is at risk. Crucially, PGP is not caused by damage: it reflects sensitivity and altered load transfer in a rapidly changing body, and prognosis after birth is good for the large majority.",
        },
        {
          kind: "steps",
          items: [
            { title: "Assess", text: "History (aggravating single-leg tasks, 24-hour pattern), functional tests such as single-leg stance and sit-to-stand, and pain provocation tests for the SIJ/symphysis where appropriate (e.g. P4/thigh thrust, palpation of the symphysis, active straight leg raise for load-transfer capacity). Screen for red flags and urogynaecological symptoms." },
            { title: "Educate & reassure", text: "Explain the hormonal/mechanical basis, the excellent postpartum prognosis, and that movement is safe. Fear and guarding amplify disability in PGP just as in other pain." },
            { title: "Modify activity — don't stop it", text: "Keep symmetrical: sit to dress, swing legs together getting out of the car, take stairs step-to-step on bad days, shorten stride, break up long walks. Keep knees together when turning in bed; a pillow between the knees helps sleep." },
            { title: "Exercise", text: "Continue general activity within comfort plus targeted work: gluteal and hip strengthening, adapted trunk work, and pelvic floor training. Water-based exercise is often especially comfortable." },
            { title: "Adjuncts", text: "A pelvic support belt can give short-term relief for walking and standing tasks — a useful adjunct, worn for function, never a substitute for active management. Crutches for severe cases; manual therapy may ease symptoms short-term." },
          ],
        },
        {
          kind: "warning",
          title: "Common mistakes",
          items: [
            "Prescribing rest and 'wait until the baby comes' — deconditioning and disability grow while waiting",
            "Framing PGP as pelvic 'instability' or 'misalignment' — inaccurate and fear-inducing",
            "Relying on a support belt alone without activity modification and strengthening",
            "Missing urogynaecological or neurological symptoms that need onward referral",
          ],
        },
        {
          kind: "pearls",
          items: [
            "The 'symmetry rule' captures most activity modification in one line: keep the load even between the two legs.",
            "Severe PGP warrants a birth-planning conversation (comfortable positions, pain-free hip range) with the maternity team — physiotherapy input here is genuinely valued.",
          ],
        },
      ],
    },
    {
      slug: "diastasis-recti",
      title: "Diastasis Recti Abdominis",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Diastasis recti abdominis (DRA) is a widening of the inter-recti distance as the linea alba stretches and thins to accommodate the growing uterus. By the third trimester it is present in most pregnancies — it is a normal adaptation, not an injury. After birth the gap typically narrows substantially over the first weeks to months, though it persists in a proportion of people at a year.",
        },
        {
          kind: "paragraph",
          text: "Assessment concept: with the person crook-lying, palpate the midline at, above and below the umbilicus during a gentle head-lift, noting the width (in fingerbreadths or centimetres) and — many clinicians argue more importantly — the tension the linea alba can generate: does the midline dome, sink, or firm up under load? Function of the abdominal wall matters more than the number of millimetres.",
        },
        {
          kind: "keypoints",
          title: "Honest evidence summary",
          items: [
            "Exercise during pregnancy may reduce DRA severity; postpartum, most narrowing happens naturally in the early months",
            "No specific exercise protocol has been proven superior for closing the gap — evidence for 'gap-closing' programmes is genuinely limited",
            "What graded abdominal training reliably does improve: strength, function, tolerance of load and confidence — worthwhile goals in themselves",
            "The old blanket bans ('never do curl-ups', 'crunches make it worse') are not supported; the modern approach is graded exposure guided by symptoms and midline behaviour",
            "DRA is primarily a cosmetic/functional issue; it is associated with, but not proven to cause, back pain or pelvic floor dysfunction",
          ],
        },
        {
          kind: "steps",
          items: [
            { title: "Early (weeks 0–6 postpartum)", text: "Breathing with gentle abdominal engagement, pelvic tilts, walking. Learn to exhale-on-effort for lifting the baby, car seats and buggies." },
            { title: "Graded loading", text: "Progress from low-load work (heel slides, bent-knee fallouts, bridging) towards head-lifts and modified curl-ups, watching midline behaviour — doming that cannot be controlled means regress one step, not abandon ship." },
            { title: "Functional strength", text: "Build towards carrying, squatting, lifting and impact — the loads of parenting — with the abdominal wall trained as part of whole-body movement." },
            { title: "Refer on when needed", text: "A wide gap with poor tension and functional symptoms persisting despite months of good rehabilitation may merit specialist (occasionally surgical) opinion — a small minority." },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Swap 'protect the gap' language for 'train the wall' — the abdominal wall responds to progressive load like any other tissue.",
            "Check DRA in the context of the whole person: sleep deprivation, feeding posture and pelvic floor status all shape what the programme should look like this week.",
          ],
        },
      ],
    },
    {
      slug: "pelvic-floor",
      title: "The Pelvic Floor in Pregnancy & Postpartum",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "The pelvic floor muscles support the pelvic organs, maintain continence and contribute to lumbopelvic control — and pregnancy loads them as never before: hormonal softening, months of increasing weight, then (in vaginal birth) dramatic stretch. Urinary incontinence affects a large proportion of pregnant and postpartum people, and it is treatable — not an inevitable price of parenthood.",
        },
        { kind: "image", illustration: "muscle-fiber", caption: "The pelvic floor is skeletal muscle — a mix of slow-twitch fibres for sustained postural support and fast-twitch fibres for rapid closure under sudden load. Training addresses both: long holds and quick contractions." },
        {
          kind: "keypoints",
          title: "PFMT — what the evidence says",
          items: [
            "Pelvic floor muscle training during pregnancy reduces the risk of urinary incontinence in late pregnancy and postpartum (Cochrane-level evidence)",
            "PFMT is first-line treatment for stress urinary incontinence — supervised, structured programmes over at least 3 months outperform ad-hoc advice",
            "Correct technique matters: a squeeze-and-lift around the openings, breathing normally, no gluteal/adductor substitution, with full relaxation between reps",
            "A common structure: both long holds (building towards ~10 seconds × 10) and quick maximal contractions (~10), around three times daily",
            "'The Knack' — pre-contracting before a cough, sneeze or lift — is a skill worth teaching explicitly",
          ],
        },
        {
          kind: "paragraph",
          text: "These themes connect directly to the dedicated pelvic floor topic on this platform: the same anatomy, assessment principles and training variables apply, with pregnancy adding the dimensions of hormonal change, perineal recovery after birth, and the graded return to impact. Postpartum, symptoms of heaviness or dragging (possible prolapse), incontinence persisting beyond the early weeks, or pain warrant specialist pelvic health physiotherapy assessment.",
        },
        {
          kind: "warning",
          title: "Practical points",
          items: [
            "Around a third of people perform pelvic floor contractions incorrectly from verbal instruction alone — check technique, don't just hand out a leaflet",
            "An overactive, non-relaxing pelvic floor also causes symptoms (pain, voiding difficulty) — more squeezing is not always the answer",
            "Persistent postpartum incontinence, prolapse symptoms or pain deserve referral to specialist pelvic health services — normalise seeking help",
          ],
        },
      ],
    },
    {
      slug: "postnatal-return",
      title: "Postnatal Return to Exercise",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Postnatal recovery is rehabilitation from a major physiological event — sometimes including major abdominal surgery — layered on sleep deprivation and a new full-time role. The return to exercise is graded and criteria-based, not calendar-based bravado: the dates below are typical guides, always adjusted to the individual's birth, symptoms and pelvic floor function.",
        },
        {
          kind: "table",
          headers: ["Phase (typical timing)", "Focus"],
          rows: [
            ["Weeks 0–2", "Rest and recovery, gentle walking, breathing work, early pelvic floor contractions as comfort allows, scar care awareness"],
            ["Weeks 2–6", "Progressive walking, pelvic tilts, low-load core and pelvic floor programme; postnatal check (~6 weeks) before higher-intensity exercise"],
            ["Weeks 6–12", "Graded low-impact strength and conditioning: squats, bridging, resistance work, cycling, swimming (once bleeding stopped and wounds healed); build single-leg control"],
            ["From ~3 months", "Graded return to running and impact if criteria met — commonly advised as the earliest sensible window, later if symptoms persist"],
            ["3–6+ months", "Progressive return to sport-specific training and higher loads, guided by symptoms and strength benchmarks"],
          ],
        },
        {
          kind: "keypoints",
          title: "Return-to-running criteria (concept)",
          items: [
            "No leaking, heaviness or dragging sensations with impact testing (hopping, jogging on the spot, single-leg landing)",
            "Adequate strength endurance: e.g. repeated single-leg calf raises, bridges, sit-to-stands and single-leg balance comparable side to side",
            "Walk 30 minutes comfortably before jogging a step; then use walk-run intervals",
            "Symptoms — leaking, heaviness, pain, bleeding — are stop-and-regress signals, and persistent symptoms mean pelvic health assessment, not pushing through",
          ],
        },
        {
          kind: "paragraph",
          text: "After caesarean birth, add surgical healing to the equation: expect a slower early phase, protect the wound (log-rolling out of bed, exhale-on-effort for lifting), avoid heavy lifting in roughly the first six weeks per obstetric advice, and begin abdominal wall loading gently once healed. Scar massage and desensitisation, once fully healed, help comfort and confidence. The 3-month running guide applies at least as much after caesarean as after vaginal birth.",
        },
        {
          kind: "pearls",
          items: [
            "The 6-week check is a screening gateway, not a green light for everything — 'cleared at six weeks' means cleared to progress, not cleared to race.",
            "Breastfeeding is compatible with exercise (feeding or expressing before high-impact sessions is simply more comfortable); hydration and a supportive bra matter more than any restriction.",
          ],
        },
      ],
    },
    {
      slug: "positioning-comfort",
      title: "Positioning & Comfort Strategies",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Simple positioning advice earns disproportionate gratitude in this population — small changes make sleep, feeding and daily tasks dramatically more comfortable.",
        },
        {
          kind: "cards",
          items: [
            { title: "Sleep positioning", text: "From mid-pregnancy, side-lying (guidance favours settling to sleep on the side in the third trimester) with a pillow between the knees and under the bump offloads the pelvis and back. Waking supine is not a cause for alarm — simply resettle onto the side.", icon: "moon" },
            { title: "Turning in bed & transfers", text: "Knees together, roll as one unit; sit to dress; swivel with legs together getting in and out of the car — the symmetry rule protecting the pelvic girdle.", icon: "rotate-ccw" },
            { title: "Feeding posture", text: "Bring baby to breast/bottle, not trunk to baby: supportive chair, pillows under the baby and forearms, feet supported. Vary sides and positions to spare the neck and upper back.", icon: "baby" },
            { title: "Lifting & carrying", text: "Exhale on effort, keep loads close, avoid prolonged single-hip carrying; set changing tables and cots to safe heights. These habits protect the healing abdomen, pelvic floor and back alike.", icon: "package" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Teach one principle, not twenty rules: 'keep it close, keep it symmetrical, breathe out on effort' covers most daily tasks.",
            "Ask about the actual home setup — car seat height, cot design, stairs — advice that doesn't fit the house doesn't get used.",
          ],
        },
      ],
    },
    {
      slug: "exercise-blocks",
      title: "Exercise Examples",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Representative exercises across the pregnancy–postpartum journey. All are starting points to be individualised — and every one is paired with the same rule: symptoms (pain, leaking, heaviness, bleeding) are signals to modify, not ignore.",
        },
        {
          kind: "exercise",
          name: "Pelvic tilts",
          purpose: "Mobilise the lumbopelvic region, ease pregnancy-related back ache, and build gentle abdominal engagement — a foundation exercise in pregnancy and from the first postnatal days.",
          position: "Crook lying (early/mid-pregnancy or postpartum), four-point kneeling, or standing against a wall — choose the comfortable option.",
          execution: "Exhale and gently tilt the pelvis to flatten the low back (posterior tilt), feeling the lower abdomen draw in; inhale and release to neutral. Slow and rhythmic.",
          dosage: "10–15 repetitions, 1–2 times daily.",
          progression: "In four-point kneeling, progress towards cat-camel range; postpartum, progress to heel slides and bridging.",
          precautions: "In later pregnancy use the kneeling or standing versions if supine is uncomfortable.",
        },
        {
          kind: "exercise",
          name: "Pelvic floor muscle training (integrated)",
          purpose: "Prevent and treat urinary incontinence; support the pelvic organs through pregnancy and recovery after birth.",
          position: "Any — start lying or sitting to learn, progress to standing and functional positions.",
          execution: "Squeeze and lift around the back and front passages as if stopping wind and flow, keep breathing, then relax completely. Combine long holds (build towards 10 seconds) with quick maximal contractions. Add 'the Knack': pre-contract before coughs, sneezes and lifts.",
          dosage: "Approximately 10 long holds + 10 quick contractions, about 3 times daily, continued through pregnancy and postpartum (at least 3 months for a treatment effect).",
          progression: "Increase hold time and repetitions; progress to training in standing, walking, lifting and eventually impact positions.",
          precautions: "Full relaxation between contractions matters; if unsure of technique, or symptoms persist, refer to pelvic health physiotherapy rather than simply prescribing more squeezes.",
        },
        {
          kind: "exercise",
          name: "Modified side plank",
          purpose: "Strengthen lateral trunk and hip abductors — trunk strength without high intra-abdominal pressure spikes, useful with diastasis recti and in the graded postnatal core progression.",
          position: "Side-lying, knees bent to 90°, propped on the forearm with elbow under shoulder.",
          execution: "Exhale and lift the pelvis so the trunk forms a straight line from knees to head; hold briefly with normal breathing; lower with control. Watch that the midline does not dome uncontrollably.",
          dosage: "5–8 lifts each side, holding 5–10 seconds, 3–4 times per week.",
          progression: "Longer holds → straight-leg side plank → add top-leg abduction. Regress by shortening holds if doming, pain or heaviness occurs.",
          precautions: "Postpartum, introduce after the early low-load phase; keep the pelvic floor and breath coordinated with effort.",
        },
        {
          kind: "exercise",
          name: "Graded walking programme",
          purpose: "Safe aerobic foundation in pregnancy and the primary early postnatal exercise — mood, fitness and gentle reloading in one.",
          position: "Supportive footwear; buggy-pushing counts (handle height set so elbows sit comfortably).",
          execution: "Walk at a conversational, moderate pace on even ground. In pregnancy this counts towards the 150-minute weekly target; postpartum, begin with short frequent walks in the first weeks.",
          dosage: "Pregnancy: build towards 30 minutes most days. Postpartum: start 10–15 minutes daily, adding ~5 minutes as comfortable.",
          progression: "Extend duration before pace; postpartum, achieve 30 comfortable minutes before beginning walk-run intervals from around 3 months if return-to-running criteria are met.",
          precautions: "Stop for any red-flag symptoms (bleeding, contractions, dizziness, calf pain); postpartum heaviness or leaking means shorten the walk and review the pelvic floor programme.",
        },
        {
          kind: "warning",
          title: "General exercise cautions in this population",
          items: [
            "Screen for contraindications before prescribing, every time",
            "From mid-pregnancy, modify prolonged flat supine work and avoid breath-hold straining (Valsalva) on heavy efforts",
            "Postpartum bleeding that restarts or increases after exercise means the progression was too fast",
            "Leaking, heaviness or pelvic pain are never 'just part of being a mum' — they are treatable symptoms and referral triggers",
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
            "Pregnancy changes: hormonal ligament laxity, forward-shifted centre of mass with increased lumbar lordosis, blood volume +40–50% with higher resting HR — use RPE/talk test, not heart-rate zones",
            "Exercise: ~150 min/week moderate activity + strengthening ×2/week + daily PFMT; know the absolute contraindications and the stop-and-refer warning signs",
            "PGP: pain with single-leg loading; manage with education, the symmetry rule, strengthening, staying active; belts as short-term adjunct",
            "Diastasis recti: normal late-pregnancy adaptation, narrows over early postpartum months; graded abdominal loading — evidence for specific gap-closing protocols is limited, but strength and function respond",
            "Pelvic floor: PFMT prevents and treats urinary incontinence (first-line for SUI); holds + quick contractions ~3×/day; teach the Knack; check technique",
            "Postnatal return: walking early → low-impact strength after the ~6-week check → return to running commonly from ~3 months if symptom-free and strong enough; slower early phase after caesarean",
            "Red flags: bleeding, contractions, severe headache/visual change, calf swelling, reduced fetal movements — stop and refer",
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
      text: "How much moderate-intensity physical activity per week do guidelines recommend during an uncomplicated pregnancy?",
      options: ["No structured exercise is advised", "Around 150 minutes", "At least 500 minutes", "A maximum of 30 minutes"],
      correctIndex: 1,
      explanation:
        "Major guidelines (ACOG, UK CMO/RCOG-endorsed guidance) recommend accumulating around 150 minutes of moderate-intensity activity weekly in uncomplicated pregnancy, plus strengthening about twice a week and daily pelvic floor training. Exercise at this level is safe and reduces risks including gestational diabetes and excessive weight gain.",
      difficulty: "Easy",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "exercise-guidelines",
    },
    {
      text: "Why is heart rate an unreliable guide to exercise intensity during pregnancy?",
      options: [
        "Heart rate cannot be measured in pregnancy",
        "Resting heart rate rises and cardiovascular physiology changes substantially, so standard HR zones no longer map to true intensity — use RPE and the talk test",
        "Pregnant people cannot reach moderate intensity",
        "Heart rate only reflects fetal wellbeing in pregnancy",
      ],
      correctIndex: 1,
      explanation:
        "Blood volume rises ~40–50% and resting heart rate increases by roughly 10–20 bpm, shifting the whole HR–intensity relationship. Guidelines therefore recommend gauging intensity by ratings of perceived exertion and the talk test (able to hold a conversation = moderate) rather than heart-rate zones.",
      difficulty: "Medium",
      tags: ["assessment", "exercise-therapy"],
      sectionSlug: "body-changes",
    },
    {
      text: "Which of the following is an ABSOLUTE contraindication to exercise in pregnancy?",
      options: [
        "Mild, well-controlled hypertension",
        "Placenta praevia after ~26–28 weeks",
        "Twin pregnancy in the second trimester",
        "Mild anaemia without symptoms",
      ],
      correctIndex: 1,
      explanation:
        "Placenta praevia persisting into the late second/third trimester is an absolute contraindication because exercise may provoke haemorrhage. Controlled hypertension, multiple pregnancy and anaemia are relative contraindications requiring medical guidance and individualisation, not blanket exercise bans.",
      difficulty: "Hard",
      tags: ["precautions", "management"],
      sectionSlug: "exercise-guidelines",
    },
    {
      text: "A pregnant client becomes dizzy and nauseated lying flat on her back at 28 weeks. What is the most likely mechanism?",
      options: [
        "Exercise-induced hypoglycaemia",
        "The uterus compressing the inferior vena cava, reducing venous return in supine",
        "An inner-ear disturbance caused by relaxin",
        "Anxiety about exercise",
      ],
      correctIndex: 1,
      explanation:
        "From around mid-pregnancy the gravid uterus can compress the inferior vena cava in supine, reducing venous return and cardiac output — producing dizziness, nausea and faintness (supine hypotensive syndrome). Management is positional: side-lying (left side classically), incline or upright alternatives for exercise and rest.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "precautions"],
      sectionSlug: "body-changes",
    },
    {
      text: "Which symptom during pregnancy exercise requires stopping and urgent obstetric review?",
      options: [
        "Mild muscle soreness the next day",
        "Feeling warm and slightly breathless while still able to talk",
        "Vaginal bleeding",
        "Braxton Hicks tightenings that settle with rest",
      ],
      correctIndex: 2,
      explanation:
        "Vaginal bleeding or fluid loss, regular painful contractions before term, chest pain, severe headache or visual disturbance, calf swelling, and reduced fetal movements are warning signs to stop exercising and seek urgent maternity review. Mild soreness and comfortable moderate-intensity breathlessness are expected and benign.",
      difficulty: "Easy",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "exercise-guidelines",
    },
    {
      text: "Which activity pattern most characteristically aggravates pregnancy-related pelvic girdle pain?",
      options: [
        "Symmetrical two-leg tasks like squatting to a chair",
        "Single-leg loading tasks — stairs, turning in bed, dressing standing up, getting out of a car",
        "Sitting supported with feet up",
        "Swimming with a gentle kick",
      ],
      correctIndex: 1,
      explanation:
        "PGP arises from the sacroiliac joints and/or symphysis pubis, and asymmetrical single-leg loading stresses these joints most — hence the classic aggravators of stairs, rolling in bed, single-leg dressing and car transfers. Management applies the 'symmetry rule': keep load even between the legs while staying active.",
      difficulty: "Easy",
      tags: ["assessment", "pathology"],
      sectionSlug: "pgp-lbp",
    },
    {
      text: "What is the correct role of a pelvic support belt in pelvic girdle pain?",
      options: [
        "The primary treatment, worn continuously until birth",
        "A short-term adjunct for walking and standing tasks, alongside education, activity modification and strengthening",
        "Contraindicated in pregnancy",
        "A device to realign the displaced pelvic joints",
      ],
      correctIndex: 1,
      explanation:
        "Support belts can give useful short-term symptomatic relief for functional tasks, but they are an adjunct: the core management is education and reassurance, symmetry-based activity modification, and strengthening while staying active. Belts do not 'realign' anything — and 'misalignment' framing is inaccurate and fear-inducing.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "pgp-lbp",
    },
    {
      text: "Which statement about diastasis recti abdominis is most accurate?",
      options: [
        "It is a rare pathological rupture of the abdominal wall",
        "It is a normal adaptation of late pregnancy that usually narrows substantially in the early postpartum months",
        "It only occurs after caesarean birth",
        "It always requires surgical repair",
      ],
      correctIndex: 1,
      explanation:
        "DRA — widening of the inter-recti distance as the linea alba stretches — is present in most pregnancies by the third trimester and is an adaptation, not an injury. Postpartum, most narrowing occurs naturally over the first weeks to months; only a small minority with persistent wide, poorly tensioned separations and functional symptoms merit specialist or surgical opinion.",
      difficulty: "Easy",
      tags: ["pathology", "management"],
      sectionSlug: "diastasis-recti",
    },
    {
      text: "In modern DRA assessment, which feature is increasingly considered more functionally important than the width of the gap?",
      options: [
        "The colour of the overlying skin",
        "The ability of the linea alba to generate tension under load (rather than doming or sinking)",
        "The number of pregnancies",
        "Resting heart rate",
      ],
      correctIndex: 1,
      explanation:
        "The inter-recti distance correlates poorly with function. Contemporary assessment emphasises linea alba behaviour under load — whether the midline can firm up and transmit force, versus uncontrolled doming or sinking — because a functional, tension-generating abdominal wall is the actual goal of rehabilitation, not a particular millimetre measurement.",
      difficulty: "Hard",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "diastasis-recti",
    },
    {
      text: "What does the evidence honestly support regarding postpartum abdominal exercise for diastasis recti?",
      options: [
        "Specific gap-closing protocols have strong proven superiority",
        "Crunches are permanently contraindicated after DRA",
        "No specific protocol is proven best for closing the gap, but graded abdominal loading reliably improves strength, function and load tolerance",
        "Exercise makes DRA worse and should be avoided",
      ],
      correctIndex: 2,
      explanation:
        "The honest evidence position: trials have not established a superior exercise protocol for reducing inter-recti distance, and old blanket bans on curl-ups lack support. What graded training clearly delivers is improved strength, function and confidence under the loads of parenting — so management is graded exposure guided by symptoms and midline control, not gap-chasing or avoidance.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "diastasis-recti",
    },
    {
      text: "What is the evidence-based first-line treatment for stress urinary incontinence in the postpartum period?",
      options: [
        "Immediate surgical referral",
        "Supervised pelvic floor muscle training over at least 3 months",
        "Fluid restriction",
        "Permanent avoidance of impact exercise",
      ],
      correctIndex: 1,
      explanation:
        "Pelvic floor muscle training is first-line for stress urinary incontinence, with structured, supervised programmes of at least three months outperforming ad-hoc advice. PFMT during pregnancy also reduces the risk of incontinence developing. Surgery is considered only after conservative management; fluid restriction and permanent exercise avoidance are not treatments.",
      difficulty: "Easy",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "pelvic-floor",
    },
    {
      text: "What is 'the Knack' in pelvic floor rehabilitation?",
      options: [
        "A surgical technique for prolapse",
        "Pre-contracting the pelvic floor immediately before a cough, sneeze or lift",
        "A breathing pattern used during labour",
        "Relaxing the pelvic floor during voiding",
      ],
      correctIndex: 1,
      explanation:
        "The Knack is a timed, voluntary pelvic floor pre-contraction performed just before predictable rises in intra-abdominal pressure — coughing, sneezing, lifting the baby. It counteracts downward pressure at the moment of load and measurably reduces stress leakage, making it a key functional skill to teach alongside strengthening.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "pelvic-floor",
    },
    {
      text: "Why should pelvic floor contraction technique be checked rather than taught by leaflet alone?",
      options: [
        "Leaflets are too expensive to produce",
        "A substantial proportion of people perform the contraction incorrectly (straining or substituting) from verbal or written instruction alone",
        "The pelvic floor cannot be trained voluntarily",
        "Technique does not affect outcomes",
      ],
      correctIndex: 1,
      explanation:
        "Around a third of people perform pelvic floor exercises incorrectly from instruction alone — commonly bearing down (straining) or substituting with gluteals, adductors or breath-holding, which is ineffective or counterproductive. Technique confirmation (verbal cues, self-palpation guidance, or specialist assessment) is part of competent PFMT prescription; an overactive floor may need relaxation training, not more squeezing.",
      difficulty: "Hard",
      tags: ["assessment", "precautions"],
      sectionSlug: "pelvic-floor",
    },
    {
      text: "What is the commonly advised earliest window for returning to running after childbirth?",
      options: [
        "2 weeks postpartum",
        "6 weeks postpartum, immediately after the postnatal check",
        "Around 3 months postpartum, provided symptom and strength criteria are met",
        "Not until 2 years postpartum",
      ],
      correctIndex: 2,
      explanation:
        "Widely used guidance advises returning to running from around 3 months postpartum at the earliest — and later if symptoms persist — because pelvic floor and tissue recovery continues well beyond the 6-week check. The decision is criteria-based: no leaking, heaviness or pain with impact testing, adequate single-leg strength and balance, and a comfortable 30-minute walk base first.",
      difficulty: "Easy",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "postnatal-return",
    },
    {
      text: "Which finding during postpartum impact testing indicates the person is NOT yet ready to return to running?",
      options: [
        "Mild general fatigue afterwards",
        "Urinary leaking or a sensation of vaginal heaviness during hopping",
        "Feeling slightly breathless",
        "Muscle soreness the next day",
      ],
      correctIndex: 1,
      explanation:
        "Leaking, heaviness or dragging sensations with impact indicate the pelvic floor is not yet managing the load — signals to regress to strengthening and low-impact work and, if persistent, to refer for pelvic health assessment. Breathlessness, fatigue and mild soreness are ordinary training responses, not pelvic floor failure signs.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning", "precautions"],
      sectionSlug: "postnatal-return",
    },
    {
      text: "Which early postnatal advice is most appropriate after caesarean birth?",
      options: [
        "Resume abdominal crunches at one week to prevent adhesions",
        "Treat it as major abdominal surgery: log-roll out of bed, exhale on effort, avoid heavy lifting for around six weeks per obstetric advice, and progress loading gradually once healed",
        "Complete bed rest for six weeks",
        "Return to running at four weeks since the pelvic floor was not involved",
      ],
      correctIndex: 1,
      explanation:
        "Caesarean birth is major abdominal surgery. Early management protects healing tissue — log-rolling transfers, exhale-on-effort with lifts kept light (baby-weight guide), walking as the main early exercise — before graded abdominal loading once healed. Complete bed rest raises thrombosis risk, and the ~3-month running guide still applies: pregnancy itself loads the pelvic floor regardless of birth mode.",
      difficulty: "Medium",
      tags: ["management", "precautions"],
      sectionSlug: "postnatal-return",
    },
    {
      text: "A client at 34 weeks asks how to sleep more comfortably with pelvic girdle pain. What is the best advice?",
      options: [
        "Sleep flat on the back with legs straight",
        "Side-lying with a pillow between the knees and support under the bump, keeping knees together when turning as one unit",
        "Sleep sitting upright in a chair",
        "Prone lying over pillows",
      ],
      correctIndex: 1,
      explanation:
        "Side-lying with a pillow between the knees keeps the pelvis symmetrical and offloads the painful joints, with third-trimester guidance also favouring settling to sleep on the side. Turning 'knees together, roll as one unit' applies the symmetry rule to the classic aggravator of rolling in bed. Flat supine is uncomfortable and may cause caval compression at this stage.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "positioning-comfort",
    },
    {
      text: "A postpartum client reports that lochia (postnatal bleeding) had nearly stopped but became heavier again after she progressed her exercise. What does this most likely indicate?",
      options: [
        "A normal training adaptation to ignore",
        "The exercise progression was too fast — reduce the level and allow further recovery, seeking medical review if bleeding is heavy or persistent",
        "She should switch to running to redistribute blood flow",
        "Exercise must be abandoned for the first year",
      ],
      correctIndex: 1,
      explanation:
        "A restart or increase in postnatal bleeding after exercise is a recognised sign of progressing load too quickly in the early weeks. The response is to step the programme back and progress more gradually — with medical review if bleeding is heavy, persistent or associated with other symptoms. It is a pacing signal, not a reason to abandon activity altogether.",
      difficulty: "Hard",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "exercise-blocks",
    },
    {
      text: "Which trunk exercise choice best respects a significant early-postpartum diastasis while still building strength?",
      options: [
        "Maximal sit-ups to fatigue",
        "A modified side plank with bent knees, monitoring the midline for uncontrolled doming",
        "Heavy loaded overhead pressing with breath-holding",
        "Avoiding all trunk exercise for a year",
      ],
      correctIndex: 1,
      explanation:
        "The modified side plank strengthens the lateral trunk without large sagittal-plane intra-abdominal pressure spikes, making it a sensible mid-stage choice in the graded progression. The strategy is graded exposure with midline monitoring — regress a step if doming, pain or heaviness appears — rather than either maximal loading from the outset or blanket avoidance.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "exercise-blocks",
    },
  ],
  flashcards: [
    { front: "Key cardiovascular changes of pregnancy relevant to exercise prescription?", back: "Blood volume +40–50%, resting HR up ~10–20 bpm, higher cardiac output, mid-pregnancy BP dip — so gauge intensity with RPE/talk test, not heart-rate zones." },
    { front: "Weekly activity recommendation in uncomplicated pregnancy?", back: "~150 minutes of moderate-intensity activity, plus strengthening ~2 days/week and daily pelvic floor muscle training. Start low and go slow if previously inactive." },
    { front: "Name four absolute contraindications to exercise in pregnancy.", back: "e.g. severe pre-eclampsia/uncontrolled hypertension, placenta praevia after ~26–28 weeks, ruptured membranes/preterm labour, unexplained persistent vaginal bleeding, incompetent cervix, significant cardiac disease." },
    { front: "Warning signs to STOP exercise and seek review in pregnancy?", back: "Vaginal bleeding or fluid loss, regular painful contractions, chest pain, dizziness/syncope, severe headache or visual change, calf pain/swelling, reduced fetal movements." },
    { front: "Why does supine lying cause dizziness in later pregnancy?", back: "The uterus compresses the inferior vena cava, reducing venous return (supine hypotensive syndrome) — modify to side-lying, incline or upright positions from mid-pregnancy." },
    { front: "Classic aggravators of pelvic girdle pain, and the management principle?", back: "Single-leg loading: stairs, turning in bed, dressing standing, car transfers. Manage with the symmetry rule, education, strengthening and staying active; belt as short-term adjunct." },
    { front: "Diastasis recti in one honest sentence?", back: "A normal late-pregnancy widening of the linea alba that usually narrows in early postpartum months; no protocol is proven to close the gap fastest, but graded abdominal loading builds strength and function." },
    { front: "What matters more than gap width in DRA assessment?", back: "Linea alba tension/behaviour under load — a midline that firms and transmits force versus uncontrolled doming or sinking." },
    { front: "Evidence for pelvic floor muscle training in this population?", back: "PFMT in pregnancy reduces the risk of urinary incontinence; supervised PFMT ≥3 months is first-line treatment for stress incontinence postpartum." },
    { front: "A standard PFMT dose structure?", back: "~10 long holds (building to ~10 s) + ~10 quick maximal contractions, about 3×/day, with full relaxation between reps — plus 'the Knack' before coughs/sneezes/lifts." },
    { front: "Postnatal return-to-running: timing and criteria concept?", back: "Commonly from ~3 months postpartum at the earliest — with no leaking/heaviness/pain on impact testing, adequate single-leg strength and balance, and a 30-minute comfortable walking base first." },
    { front: "Early priorities after caesarean birth?", back: "Treat as major abdominal surgery: log-roll transfers, exhale on effort, light lifting only (~6 weeks per obstetric advice), walking as main exercise, then graded abdominal loading; scar massage once fully healed." },
  ],
};

export default topic;
