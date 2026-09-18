import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "low-back-pain",
  title: "Low Back Pain",
  category: "Musculoskeletal",
  description:
    "Learn to classify, assess and manage low back pain using the biopsychosocial model — including red-flag screening, STarT Back stratification, exercise prescription and myth-busting patient education.",
  difficulty: "Intermediate",
  estMinutes: 28,
  icon: "align-vertical-justify-center",
  keyTakeaways: [
    "Around 90% of low back pain is non-specific — no single structure can or needs to be identified as the source.",
    "Low back pain is best understood through the biopsychosocial model: biology, beliefs, mood, sleep and social context all shape the experience.",
    "Red-flag screening comes first: cauda equina syndrome, fracture, infection and malignancy must not be missed.",
    "Cauda equina syndrome — saddle anaesthesia, bladder/bowel dysfunction, bilateral leg symptoms — is a surgical emergency.",
    "Routine imaging for non-specific low back pain is not recommended and can worsen outcomes through nocebic labelling.",
    "The STarT Back tool stratifies patients into low, medium and high risk of poor outcome and matches treatment intensity accordingly.",
    "Core management is education, reassurance, staying active and graded exercise — no single exercise type is superior, so patient preference matters.",
    "Most acute episodes improve substantially within 6 weeks, but recurrence is common — self-management skills are the long-term treatment.",
  ],
  sections: [
    {
      slug: "spine-anatomy",
      title: "Spine Anatomy Essentials",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "The lumbar spine consists of five vertebrae (L1–L5) stacked on the sacrum, forming a natural lordotic curve. Each motion segment — two vertebrae, the intervertebral disc between them, and paired facet (zygapophyseal) joints behind — allows small movements that sum to substantial overall mobility.",
        },
        { kind: "image", illustration: "spine", caption: "The vertebral column with its regional curves; the lumbar region carries the greatest compressive load." },
        {
          kind: "cards",
          items: [
            { title: "Intervertebral discs", text: "A gel-like nucleus pulposus inside a fibrous annulus fibrosus. Discs distribute compressive load and allow movement. They are living, adaptable structures — not fragile shock absorbers waiting to 'slip'.", icon: "disc" },
            { title: "Facet joints", text: "Paired synovial joints that guide movement and resist excessive rotation and shear. They can be a nociceptive source, particularly in extension.", icon: "link" },
            { title: "Nerve roots", text: "Exit beneath each vertebra through the intervertebral foramina. L4, L5 and S1 roots form most of the sciatic nerve — the roots most often irritated by disc herniation.", icon: "zap" },
            { title: "Cauda equina", text: "The spinal cord ends at about L1–L2; below this the canal contains the cauda equina — lumbosacral nerve roots controlling the legs, bladder, bowel and perineal sensation.", icon: "git-branch" },
            { title: "Trunk muscles", text: "Deep muscles (multifidus, transversus abdominis) provide segmental control; larger muscles (erector spinae, obliques, quadratus lumborum) generate and transfer force. All stabilise — none should be trained in isolation forever.", icon: "dumbbell" },
            { title: "Thoracolumbar fascia", text: "A broad connective tissue sheet linking the trunk and limbs, transferring load between the latissimus dorsi and gluteals during lifting and gait.", icon: "layers" },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "The spinal cord ends around L1–L2; below is the cauda equina",
            "Discs are robust, adaptable structures that respond to progressive loading",
            "Many lumbar structures can produce nociception — which is precisely why chasing 'the one structure' usually fails",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Disc degeneration on MRI is common in pain-free people: over half of asymptomatic 40-year-olds show disc bulges — imaging findings are 'grey hairs of the spine'.",
          ],
        },
      ],
    },
    {
      slug: "classification",
      title: "Classification of Low Back Pain",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "The first assessment task is diagnostic triage into three groups: serious spinal pathology, radicular syndromes, and non-specific low back pain. This determines who needs urgent referral, who needs neurological monitoring, and who needs reassurance and rehabilitation.",
        },
        {
          kind: "table",
          headers: ["Category", "Approximate proportion", "Key features"],
          rows: [
            ["Serious spinal pathology (fracture, malignancy, infection, cauda equina)", "~1–5%", "Red flags present; requires medical referral and investigation"],
            ["Radicular syndromes (radicular pain, radiculopathy, spinal stenosis)", "~5–10%", "Leg-dominant symptoms in a nerve root distribution; possible sensory, motor or reflex changes"],
            ["Non-specific low back pain", "~90%", "No identifiable specific structural cause; symptoms vary with load, posture and time; no red flags or neurological deficit"],
          ],
        },
        {
          kind: "cards",
          items: [
            { title: "Radicular pain", text: "Sharp, band-like leg pain from nerve root irritation — typically dermatomal, often worse than the back pain itself. Straight leg raise commonly positive.", icon: "zap" },
            { title: "Radiculopathy", text: "Objective conduction loss: dermatomal sensory change, myotomal weakness, reduced reflexes. Can occur with or without pain.", icon: "activity" },
            { title: "Lumbar spinal stenosis", text: "Older patients; leg symptoms on walking/standing eased by sitting or flexion (neurogenic claudication) — classically better walking uphill or pushing a trolley.", icon: "users" },
            { title: "Non-specific LBP", text: "A positive diagnosis after triage, not a failure to diagnose — pain arising from the interplay of load, sensitivity and psychosocial factors rather than one damaged structure.", icon: "help-circle" },
          ],
        },
        { kind: "image", illustration: "disc-herniation", caption: "A posterolateral disc herniation compressing the exiting nerve root — the mechanical and inflammatory basis of radicular pain and radiculopathy, and the reason symptoms follow a dermatomal pattern." },
        {
          kind: "pearls",
          items: [
            "\"Non-specific\" does not mean \"not real\" or \"in the head\" — explain it as pain without serious underlying disease, which is good news.",
            "Duration matters: acute (<6 weeks), subacute (6–12 weeks), chronic/persistent (>12 weeks). Most acute episodes improve markedly within 6 weeks.",
          ],
        },
      ],
    },
    {
      slug: "biopsychosocial",
      title: "The Biopsychosocial Model",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Purely biomedical models — find the damaged structure, fix it — explain low back pain poorly: imaging findings correlate weakly with symptoms, and psychosocial factors predict chronicity better than any structural finding. The biopsychosocial model integrates three interacting domains.",
        },
        {
          kind: "cards",
          items: [
            { title: "Biological", text: "Tissue sensitivity, deconditioning, sleep deprivation's effect on pain processing, comorbidities, genuine nociceptive contributions from spinal structures.", icon: "heart" },
            { title: "Psychological", text: "Fear-avoidance beliefs, catastrophising, low mood, anxiety, low self-efficacy, expectation of recovery — among the strongest predictors of who develops persistent disability.", icon: "brain" },
            { title: "Social", text: "Work satisfaction and demands, compensation issues, family responses, socioeconomic stress, cultural beliefs about the back.", icon: "users" },
          ],
        },
        {
          kind: "steps",
          items: [
            { title: "Fear-avoidance cycle", text: "Pain interpreted as damage → fear of movement → avoidance and guarding → deconditioning and hypervigilance → more pain and disability. Breaking this cycle is a central rehabilitation goal." },
            { title: "Yellow flags", text: "Psychosocial risk factors for chronicity: belief that pain equals harm, expectation that passive treatment will fix it, fear-avoidance behaviour, low mood, work dissatisfaction. Screen for them early — they are treatment targets, not character flaws." },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Psychosocial factors predict chronic disability better than imaging findings do",
            "Yellow flags guide how you treat and communicate; red flags guide who you refer",
            "Physiotherapists address psychosocial factors through education, graded exposure and building self-efficacy — not by ignoring the biology",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Ask \"What do you think is going on in your back?\" — the answer often reveals the beliefs your education needs to address.",
          ],
        },
      ],
    },
    {
      slug: "red-flags",
      title: "Red Flags & Serious Pathology",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Red flags are clinical features raising suspicion of serious pathology. Individually most have weak diagnostic value; it is combinations, clinical context and the overall pattern that matter. Cauda equina syndrome is the emergency every clinician must actively screen for in every low back presentation with leg symptoms.",
        },
        {
          kind: "redflags",
          items: [
            "CAUDA EQUINA SYNDROME: saddle (perineal) numbness or altered sensation, new bladder dysfunction (retention or incontinence), bowel dysfunction, sexual dysfunction, bilateral leg pain or neurological deficit — EMERGENCY same-day surgical referral",
            "Fracture: significant trauma, or minor trauma with osteoporosis/long-term corticosteroid use, age over 65–70, sudden severe midline pain",
            "Malignancy: history of cancer (especially breast, prostate, lung, kidney, thyroid), unexplained weight loss, progressive constant pain not eased by rest, severe night pain, age over 50 with new-onset pain",
            "Infection (discitis/osteomyelitis/epidural abscess): fever, IV drug use, recent spinal procedure or systemic infection, immunosuppression, severe constant pain",
            "Inflammatory (axial spondyloarthritis): insidious onset before age 45, morning stiffness over 30 minutes, night pain improving on rising, dramatic response to NSAIDs — refer for rheumatological assessment",
          ],
        },
        {
          kind: "warning",
          title: "Cauda equina — do not wait",
          items: [
            "Ask every patient with back and leg symptoms directly about saddle sensation, bladder and bowel function — patients rarely volunteer these symptoms",
            "Warning-stage symptoms (altered urinary sensation, difficulty initiating) matter as much as established retention — outcomes are far better with early decompression",
            "If cauda equina syndrome is suspected, arrange emergency assessment (same day) — do not book a review appointment",
            "Safety-net everyone with radicular symptoms: give written cauda equina warning advice",
          ],
        },
        {
          kind: "paragraph",
          text: "Routine imaging is not recommended for non-specific low back pain: it does not improve outcomes, exposes patients to incidental findings that fuel fear, and delays active management. Image when red flags, progressive neurology or a surgical question demand it.",
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
          text: "Assessment aims to triage (red flags, radicular vs non-specific), understand the person (beliefs, fears, goals, work), and establish baselines for treatment. The subjective examination carries most of the diagnostic weight.",
        },
        {
          kind: "steps",
          items: [
            { title: "Subjective history", text: "Onset and course, pain location (back- vs leg-dominant), 24-hour pattern, aggravating and easing factors, red-flag screening (including direct cauda equina questions), yellow flags, work and activity demands, patient beliefs and goals." },
            { title: "Observation & movement", text: "Posture (informative, not diagnostic), lumbar active range in all directions, movement quality — guarding, bracing, breath-holding — and symptom response. Repeated movements may reveal directional preference." },
            { title: "Neurological examination", text: "For any leg symptoms: dermatomal sensation, myotomal strength (L2–S1), reflexes (knee jerk L3–4, ankle jerk S1), and straight leg raise. Document clearly to allow monitoring for progression." },
            { title: "Neurodynamic tests", text: "Straight leg raise reproducing the patient's leg pain between roughly 30–70° suggests nerve root involvement; crossed SLR is less sensitive but highly specific for disc herniation." },
            { title: "Functional testing", text: "Sit-to-stand, walking tolerance, lifting or bending tasks relevant to the patient's goals — these become treatment baselines and outcome measures." },
            { title: "Outcome measures", text: "Numeric pain rating, Roland-Morris or Oswestry Disability Index, patient-specific functional scale, and the STarT Back tool for risk stratification." },
          ],
        },
        {
          kind: "table",
          headers: ["Nerve root", "Key muscle test", "Sensation", "Reflex"],
          rows: [
            ["L3", "Knee extension", "Anterior thigh, medial knee", "Knee jerk (with L4)"],
            ["L4", "Ankle dorsiflexion", "Medial lower leg", "Knee jerk"],
            ["L5", "Great toe extension (EHL)", "Dorsum of foot, lateral leg", "Usually none (hamstring)"],
            ["S1", "Ankle plantarflexion / eversion", "Lateral foot, sole", "Ankle jerk"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "Leg-dominant pain below the knee with a positive SLR points to radicular involvement; back-dominant pain rarely needs a full neuro exam unless symptoms spread.",
            "How a person moves (guarded, braced, fearful) is often more informative than how far they move.",
          ],
        },
      ],
    },
    {
      slug: "start-back",
      title: "Risk Stratification: The STarT Back Approach",
      estMinutes: 2,
      difficulty: "Advanced",
      content: [
        {
          kind: "paragraph",
          text: "The STarT Back screening tool (Keele University) is a brief 9-item questionnaire covering pain spread, disability, and psychosocial factors (fear, catastrophising, anxiety, mood, bothersomeness). It stratifies patients into low, medium and high risk of persistent disabling pain, and treatment is matched to risk — the approach shown to improve outcomes and cost-effectiveness in the STarT Back trial.",
        },
        {
          kind: "table",
          headers: ["Risk group", "Profile", "Matched care"],
          rows: [
            ["Low risk", "Few obstacles to recovery; favourable prognosis", "Reassurance, education, advice to stay active — minimal intervention; avoid over-treating"],
            ["Medium risk", "Physical obstacles dominate (pain, disability)", "Structured physiotherapy: exercise-focused rehabilitation and activity restoration"],
            ["High risk", "High psychosocial obstacle load (fear, distress, catastrophising)", "Psychologically informed physiotherapy: combined physical and cognitive-behavioural approach, more time and follow-up"],
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Stratified care means matching treatment intensity to prognostic risk — not giving everyone everything",
            "Over-treating low-risk patients medicalises a self-limiting problem; under-treating high-risk patients breeds chronicity",
            "The psychosocial subscale identifies patients needing psychologically informed practice",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Stratification complements, not replaces, clinical reasoning — red-flag triage always comes first.",
          ],
        },
      ],
    },
    {
      slug: "management",
      title: "Management: Education, Activity & Exercise",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Guidelines (e.g. NICE) converge on the same core: self-management education, reassurance, advice to remain active, and exercise — with psychological approaches added for those at risk of poor outcome. Passive modalities, injections and surgery play minor or exceptional roles in non-specific LBP.",
        },
        {
          kind: "steps",
          items: [
            { title: "1. Education & reassurance", text: "Explain the diagnosis positively (no serious disease), the good natural history, and that the spine is strong and designed to move and bear load. Address specific fears — bending, lifting — directly." },
            { title: "2. Stay active & graded activity", text: "Advise against bed rest; keep working where possible (with modification if needed). Build activity from a tolerable baseline in planned increments — time- or quota-based rather than pain-contingent." },
            { title: "3. Exercise therapy", text: "Any form of exercise beats none, and no single type is clearly superior — strengthening, McKenzie, Pilates, yoga, walking all help. Choose with the patient's preference, goals and access in mind: adherence drives outcome." },
            { title: "4. Graded exposure for feared movements", text: "For fear-avoidant patients, gradually and systematically reintroduce feared movements (bending, lifting) in a safe, confidence-building progression." },
            { title: "5. Adjuncts & escalation", text: "Manual therapy only as part of a package including exercise. Consider combined physical-psychological programmes for persistent disabling pain. Radicular pain failing conservative care may merit imaging and surgical/injection opinion." },
          ],
        },
        {
          kind: "warning",
          title: "What guidelines advise against for non-specific LBP",
          items: [
            "Bed rest — it delays recovery and promotes deconditioning",
            "Routine imaging without red flags or surgical planning",
            "Passive modalities as stand-alone care (traction, ultrasound; belts and corsets)",
            "Opioids for chronic non-specific low back pain",
            "Language that harms: 'crumbling spine', 'slipped disc', 'wear and tear', 'your core is weak so your spine is unstable'",
          ],
        },
        {
          kind: "pearls",
          items: [
            "The best exercise for low back pain is the one the patient will actually do, dosed progressively.",
            "Return to work is a treatment outcome, not something that waits for zero pain — early modified return predicts better long-term outcomes.",
          ],
        },
      ],
    },
    {
      slug: "exercise-therapy",
      title: "Exercise Prescription & Progression",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "The programme below blends trunk-endurance work (McGill-style), hip and trunk strengthening, and graded aerobic activity. Begin at a clearly tolerable level and progress using time, repetitions and load — expect some symptoms, and use the 24–48-hour response to judge dose.",
        },
        {
          kind: "exercise",
          name: "Modified curl-up (McGill-style)",
          purpose: "Anterior trunk endurance with minimal lumbar flexion load — part of the 'big three' trunk endurance set.",
          position: "Supine, one knee bent and one leg straight, hands under the natural arch of the low back to preserve neutral.",
          execution: "Lift the head and shoulders a few centimetres as one unit, without flattening the back or tucking the chin. Hold ~8–10 seconds, breathe normally, lower slowly.",
          dosage: "Descending pyramid, e.g. 5-3-2 reps of 8–10 s holds, daily.",
          progression: "Increase holds/reps; progress to loaded carries and functional anti-flexion tasks.",
          precautions: "Avoid pulling on the neck; the movement is small — this is endurance, not a sit-up.",
        },
        {
          kind: "exercise",
          name: "Side plank (side bridge)",
          purpose: "Lateral trunk endurance (quadratus lumborum, obliques) with low compressive spine load.",
          position: "Side-lying propped on the forearm, knees bent (easier) or legs straight (harder), top hand on the waist.",
          execution: "Lift the hips to form a straight line from knees (or ankles) to shoulders. Hold 8–10 seconds breathing normally, lower with control, repeat.",
          dosage: "3–5 holds of 8–10 s each side, building total time; daily to 3×/week.",
          progression: "Knees-bent → full side plank → feet-stacked → add leg lift or rolling planks.",
          precautions: "Keep the hips forward (no sagging or rotation); shorten holds rather than losing form.",
        },
        {
          kind: "exercise",
          name: "Bird-dog",
          purpose: "Posterior chain and trunk-control endurance while resisting rotation — the third of the 'big three'.",
          position: "Four-point kneeling, hands under shoulders, knees under hips, spine in comfortable neutral.",
          execution: "Extend one leg and the opposite arm to horizontal without letting the pelvis rotate or the back arch. Hold 8–10 seconds, return with control, swap sides.",
          dosage: "5–8 reps each side of 8–10 s holds, daily to 3×/week.",
          progression: "Draw small squares with the extended hand/foot; add ankle or wrist weights; progress to standing anti-rotation presses.",
          precautions: "Imagine balancing a cup of water on the low back — movement happens at the hips and shoulders, not the spine.",
        },
        {
          kind: "exercise",
          name: "Glute bridge",
          purpose: "Strengthen gluteals and hip extensors so the hips share load during bending and lifting.",
          position: "Supine, knees bent to about 90°, feet hip-width apart and flat, arms by the sides.",
          execution: "Push through the heels and lift the pelvis until the trunk and thighs form a straight line. Squeeze the glutes at the top for 2–3 seconds, lower slowly.",
          dosage: "10–15 reps × 3 sets, 3×/week.",
          progression: "Single-leg bridge, feet-elevated bridge, then loaded hip thrust; transfer into hip-hinge and deadlift patterns.",
          precautions: "Drive through the hips rather than arching the lumbar spine at the top.",
        },
        {
          kind: "exercise",
          name: "Graded walking programme",
          purpose: "Aerobic conditioning, spinal movement variability and confidence — walking is effective, free and self-managed.",
          position: "Comfortable footwear, level ground or treadmill initially.",
          execution: "Start at a clearly tolerable duration (e.g. 10 minutes) at a comfortable pace. Increase by roughly 10% per week towards 30 minutes or more on most days.",
          dosage: "Daily where possible; total weekly minutes matter more than any single walk.",
          progression: "Add pace intervals, gentle hills, then return to running or sport-specific loading if that is the goal.",
          precautions: "For stenosis-pattern symptoms, use flexion rest breaks or a slight incline; progress duration before speed.",
        },
        {
          kind: "keypoints",
          title: "Dosage principles",
          items: [
            "Start below the flare threshold and progress systematically — quota-based, not pain-contingent",
            "Pain up to ~4–5/10 that settles within 24–48 hours is acceptable load",
            "Combine trunk endurance, hip strength and aerobic work; add loaded lifting practice for manual workers",
            "Consistency over weeks beats intensity in any single session",
          ],
        },
      ],
    },
    {
      slug: "patient-education",
      title: "Myths & Patient Education",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Unhelpful beliefs about the back are widespread — often reinforced by clinicians, imaging reports and advertising. Correcting them respectfully is a genuine treatment with measurable effects on fear, activity and disability.",
        },
        {
          kind: "table",
          headers: ["Common myth", "Evidence-based reframe"],
          rows: [
            ["\"My disc slipped out of place\"", "Discs are firmly attached and cannot slip. Herniations exist but most improve, and large ones often resorb over months."],
            ["\"My spine is damaged, the MRI proves it\"", "Disc bulges and degeneration are common in pain-free people and increase with age — most findings are normal age changes, like grey hair."],
            ["\"Bending and lifting are dangerous\"", "The spine is built to bend and lift. Gradually trained, lifting strengthens the back — avoiding it weakens it."],
            ["\"I need rest until the pain is gone\"", "Bed rest delays recovery. Staying active — even with some pain — leads to faster and better recovery."],
            ["\"Pain means I am damaging myself\"", "Pain reflects sensitivity, not just tissue damage — especially beyond the acute phase. Sore but safe is common in rehab."],
            ["\"I have a weak core and an unstable spine\"", "Non-specific LBP is not spinal instability. General strengthening helps, but no one needs to brace their core all day."],
            ["\"Good posture prevents back pain\"", "No single posture is proven protective. The best posture is the next posture — variability and movement matter more than any position."],
          ],
        },
        {
          kind: "pearls",
          items: [
            "Words are drugs: \"your back is strong and this will settle\" and \"your MRI shows normal age changes\" change behaviour more than any modality.",
            "Give patients a written flare plan: flares are normal, mean sensitivity not damage, and respond to temporarily reduced (not abandoned) activity.",
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
            "Triage: serious pathology (~1–5%), radicular syndromes (~5–10%), non-specific LBP (~90%)",
            "Cauda equina red flags — saddle anaesthesia, bladder/bowel dysfunction, bilateral leg signs — mean same-day emergency referral",
            "No routine imaging for non-specific LBP; psychosocial (yellow) flags predict chronicity better than scans",
            "STarT Back stratifies low/medium/high risk and matches care intensity",
            "Core management: education, reassurance, stay active, graded exercise; no exercise type is clearly superior — preference and adherence rule",
            "Programme: McGill big three (curl-up, side plank, bird-dog) + glute bridge + graded walking",
            "Myth-busting is treatment: discs don't slip, scans show normal ageing, the spine is strong",
            "Most acute episodes settle within 6 weeks; recurrence is common — teach self-management",
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
      text: "At approximately what vertebral level does the spinal cord end in adults?",
      options: ["T10", "L1–L2", "L4–L5", "S1"],
      correctIndex: 1,
      explanation:
        "The adult spinal cord tapers to the conus medullaris at roughly L1–L2. Below this the vertebral canal contains the cauda equina — the lumbosacral nerve roots supplying the legs, bladder, bowel and perineum — which is why compression below L2 produces cauda equina syndrome rather than cord signs.",
      difficulty: "Easy",
      tags: ["anatomy"],
      sectionSlug: "spine-anatomy",
    },
    {
      text: "Approximately what proportion of low back pain presentations are classified as non-specific?",
      options: ["10%", "40%", "70%", "90%"],
      correctIndex: 3,
      explanation:
        "Around 90% of low back pain cannot and need not be attributed to a single specific structure — it is classified as non-specific after triage excludes serious pathology (~1–5%) and radicular syndromes (~5–10%). Non-specific is a positive diagnosis, not a diagnostic failure.",
      difficulty: "Easy",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "classification",
    },
    {
      text: "Which cluster of symptoms defines suspected cauda equina syndrome?",
      options: [
        "Unilateral leg pain with a positive straight leg raise",
        "Saddle anaesthesia, new bladder or bowel dysfunction, and bilateral leg symptoms",
        "Morning stiffness over 30 minutes with night pain easing on rising",
        "Back pain worse on extension with a positive facet loading test",
      ],
      correctIndex: 1,
      explanation:
        "Cauda equina syndrome presents with saddle (perineal) sensory change, bladder dysfunction (altered sensation, retention or incontinence), bowel or sexual dysfunction, and often bilateral leg pain or neurological deficit. It is a surgical emergency requiring same-day referral — outcomes depend on early decompression.",
      difficulty: "Easy",
      tags: ["precautions", "assessment"],
      sectionSlug: "red-flags",
    },
    {
      text: "A patient with acute radicular leg pain asks why you are asking about bladder sensation and saddle numbness when they have no such symptoms. What is the best rationale?",
      options: [
        "These questions are required for insurance documentation",
        "Every radicular presentation carries a risk of cauda equina syndrome, patients rarely volunteer these symptoms, and early detection dramatically improves outcomes",
        "Bladder symptoms confirm that the disc is herniated",
        "It distinguishes L4 from L5 root involvement",
      ],
      correctIndex: 1,
      explanation:
        "Cauda equina screening is mandatory in any back pain presentation with leg symptoms. Patients seldom volunteer perineal or bladder symptoms unprompted, warning-stage features matter as much as established retention, and delayed decompression risks permanent bladder, bowel and sexual dysfunction. Safety-netting with written advice is best practice.",
      difficulty: "Hard",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "red-flags",
    },
    {
      text: "Which combination most raises suspicion of spinal malignancy in a patient with back pain?",
      options: [
        "Age 25 with pain after lifting weights",
        "History of breast cancer, unexplained weight loss, and constant pain unrelieved by rest",
        "Pain that eases with walking and worsens with sitting",
        "Intermittent pain for 5 years with normal examination",
      ],
      correctIndex: 1,
      explanation:
        "A history of malignancy (especially breast, prostate, lung, kidney, thyroid) is the strongest single red flag for spinal metastasis. Combined with unexplained weight loss and constant, non-mechanical pain — including night pain — it warrants prompt medical referral and investigation. Individual red flags are weak; combinations in context drive decisions.",
      difficulty: "Medium",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "red-flags",
    },
    {
      text: "Why is routine imaging NOT recommended for non-specific low back pain?",
      options: [
        "MRI cannot detect disc pathology",
        "It does not improve outcomes and incidental age-related findings can increase fear and disability",
        "Imaging is only accurate in patients under 30",
        "X-rays cannot visualise the lumbar spine",
      ],
      correctIndex: 1,
      explanation:
        "Trials show routine imaging does not improve pain or function outcomes in non-specific LBP. Disc bulges and degeneration are common in asymptomatic people, so scans generate incidental findings that fuel catastrophising, nocebic labelling and unnecessary intervention. Imaging is reserved for red flags, progressive neurology or surgical planning.",
      difficulty: "Medium",
      tags: ["assessment", "management"],
      sectionSlug: "red-flags",
    },
    {
      text: "A 68-year-old reports bilateral leg heaviness when walking that eases within minutes of sitting down, and finds walking uphill easier than downhill. Which condition does this pattern suggest?",
      options: [
        "Acute disc herniation with radiculopathy",
        "Lumbar spinal stenosis with neurogenic claudication",
        "Peripheral arterial disease",
        "Non-specific low back pain",
      ],
      correctIndex: 1,
      explanation:
        "Neurogenic claudication from lumbar spinal stenosis classically causes leg symptoms on standing and walking, eased by sitting or flexion — flexion enlarges the spinal canal, which is why uphill walking (flexed) is easier than downhill (extended) and leaning on a trolley helps. Vascular claudication, in contrast, eases with standing still and is unaffected by spinal position.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "pathology", "assessment"],
      sectionSlug: "classification",
    },
    {
      text: "Weak great toe extension (extensor hallucis longus) with sensory change on the dorsum of the foot indicates involvement of which nerve root?",
      options: ["L3", "L4", "L5", "S1"],
      correctIndex: 2,
      explanation:
        "L5 radiculopathy classically weakens great toe extension (EHL) and produces sensory change over the dorsum of the foot and lateral leg, usually with no reliable reflex change. L4 affects dorsiflexion and the knee jerk; S1 affects plantarflexion, the lateral foot and the ankle jerk.",
      difficulty: "Medium",
      tags: ["assessment", "anatomy"],
      sectionSlug: "assessment",
    },
    {
      text: "What does a positive crossed straight leg raise (lifting the unaffected leg reproduces pain in the affected leg) indicate?",
      options: [
        "It is highly specific for lumbar disc herniation with nerve root compression",
        "It indicates hamstring tightness",
        "It rules out radicular pathology",
        "It confirms sacroiliac joint dysfunction",
      ],
      correctIndex: 0,
      explanation:
        "The crossed SLR is less sensitive than the standard SLR but highly specific: reproducing the affected leg's pain by raising the opposite leg strongly suggests nerve root compression from disc herniation. The standard SLR (positive ~30–70°) is the more sensitive screen; the crossed SLR is the stronger confirmer.",
      difficulty: "Hard",
      tags: ["special-tests", "assessment"],
      sectionSlug: "assessment",
    },
    {
      text: "In the biopsychosocial model, which of the following is a 'yellow flag'?",
      options: [
        "Saddle anaesthesia",
        "The belief that pain always signals harm, leading to avoidance of movement",
        "A history of malignancy",
        "Fever with severe constant pain",
      ],
      correctIndex: 1,
      explanation:
        "Yellow flags are psychosocial risk factors for chronic disability — fear-avoidance beliefs, catastrophising, low mood, expectation of passive cure, work dissatisfaction. The other options are red flags for serious pathology. Yellow flags shape how you treat and communicate; red flags determine who needs medical referral.",
      difficulty: "Easy",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "biopsychosocial",
    },
    {
      text: "Why do psychosocial factors receive so much attention in low back pain management?",
      options: [
        "They are easier to treat than physical factors",
        "They predict the transition to chronic disabling pain better than imaging or physical findings",
        "They only matter in patients with psychiatric diagnoses",
        "They replace the need for any physical treatment",
      ],
      correctIndex: 1,
      explanation:
        "Fear-avoidance, catastrophising, low recovery expectation and distress predict persistent disability more strongly than structural imaging findings. This is why guidelines embed psychologically informed practice: education, graded exposure and self-efficacy building alongside — not instead of — physical rehabilitation.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "management"],
      sectionSlug: "biopsychosocial",
    },
    {
      text: "According to the STarT Back stratified care model, what is the matched treatment for a LOW-risk patient?",
      options: [
        "An intensive combined physical and psychological programme",
        "Reassurance, education and advice to stay active, with minimal further intervention",
        "Twelve weeks of supervised gym rehabilitation",
        "Referral for MRI and specialist opinion",
      ],
      correctIndex: 1,
      explanation:
        "Low-risk patients have a favourable prognosis and few obstacles to recovery; matched care is supported self-management — reassurance, education and staying active. Over-treating this group medicalises a self-limiting problem and wastes resources. Medium risk receives structured physiotherapy; high risk receives psychologically informed physiotherapy.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "start-back",
    },
    {
      text: "What is the key characteristic that places a patient in the HIGH-risk STarT Back group?",
      options: [
        "Pain lasting more than 2 weeks",
        "A high psychosocial obstacle load — fear, distress, catastrophising — alongside pain and disability",
        "Age over 65",
        "A positive straight leg raise",
      ],
      correctIndex: 1,
      explanation:
        "The high-risk group is defined primarily by the psychosocial subscale: high levels of fear, anxiety, catastrophising, low mood and bothersomeness. These patients receive psychologically informed physiotherapy with more time and follow-up — the stratification that made the STarT Back approach clinically and cost effective.",
      difficulty: "Hard",
      tags: ["assessment", "management"],
      sectionSlug: "start-back",
    },
    {
      text: "Which advice about activity is correct for a patient with acute non-specific low back pain?",
      options: [
        "Bed rest for one week to let the tissues heal",
        "Stay as active as symptoms allow and continue or return to work early, with modification if needed",
        "Avoid all bending and lifting for six weeks",
        "Wear a lumbar support belt during all activity",
      ],
      correctIndex: 1,
      explanation:
        "Strong evidence and all major guidelines support staying active: bed rest delays recovery and promotes deconditioning, while early (modified) return to normal activity and work predicts better outcomes. Blanket bans on bending and lifting reinforce fear-avoidance, and belts/corsets are not recommended.",
      difficulty: "Easy",
      tags: ["management"],
      sectionSlug: "management",
    },
    {
      text: "A patient asks which type of exercise is best for their persistent low back pain. What is the evidence-based answer?",
      options: [
        "Pilates is proven superior to all other forms",
        "Only McKenzie extension exercises are effective",
        "No single exercise type is clearly superior — the best choice reflects the patient's preferences, goals and likelihood of adherence",
        "Exercise is ineffective for chronic low back pain",
      ],
      correctIndex: 2,
      explanation:
        "Systematic reviews show exercise helps persistent LBP but no modality — strengthening, McKenzie, Pilates, yoga, walking — is consistently superior. Since effects are comparable, shared decision-making around preference, access and adherence determines the practical best choice. Dose and consistency matter more than brand.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "management",
    },
    {
      text: "In the bird-dog exercise, what is the primary movement instruction?",
      options: [
        "Arch the back maximally while lifting the arm and leg",
        "Extend the opposite arm and leg while keeping the pelvis and spine still — resisting rotation",
        "Rotate the trunk as far as possible towards the lifted arm",
        "Perform the movement as fast as possible",
      ],
      correctIndex: 1,
      explanation:
        "The bird-dog trains trunk endurance and anti-rotation control: the arm and opposite leg move while the spine and pelvis stay quiet — classically cued as balancing a cup of water on the low back. It is one of the McGill 'big three' with the curl-up and side plank, chosen for high trunk activation with low spinal load.",
      difficulty: "Easy",
      tags: ["exercise-therapy"],
      sectionSlug: "exercise-therapy",
    },
    {
      text: "Why is a graded walking programme a strong exercise choice for many patients with low back pain?",
      options: [
        "Walking completely unloads the spine",
        "It provides aerobic conditioning and movement variability, is free and self-managed, and supports adherence",
        "It strengthens the multifidus more than any other exercise",
        "It works only when done on a treadmill",
      ],
      correctIndex: 1,
      explanation:
        "Walking programmes improve pain and function in persistent LBP with effects comparable to other exercise, at minimal cost with excellent accessibility — key drivers of long-term adherence. Progression is simple (about 10% duration per week), and cyclical loading provides movement variability rather than unloading.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "exercise-therapy",
    },
    {
      text: "A patient says: \"My physio told me my disc slipped out of place.\" Why is this explanation problematic?",
      options: [
        "Discs can slip but only in athletes",
        "It is anatomically wrong — discs are firmly attached and cannot slip — and the image of a spine that slips promotes fear and guarding",
        "It is accurate but should be kept from patients",
        "Slipped discs only occur in the cervical spine",
      ],
      correctIndex: 1,
      explanation:
        "Discs are strongly anchored to the vertebrae by the annulus and endplates and cannot slip out of place. Herniations exist, but most improve and large ones often resorb. The 'slipped disc' image suggests a fragile, unstable spine, fuelling fear-avoidance — language that measurably worsens behaviour and outcomes.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "pathology"],
      sectionSlug: "patient-education",
    },
    {
      text: "Which statement about posture and low back pain reflects current evidence?",
      options: [
        "Slouched sitting is a proven cause of low back pain",
        "There is one correct lifting posture everyone must use",
        "No single posture prevents back pain — variability and regular movement matter more than any fixed position",
        "Standing desks eliminate the risk of back pain",
      ],
      correctIndex: 2,
      explanation:
        "Prospective studies have failed to show that any particular sitting or lifting posture causes or prevents low back pain. Advice has shifted from enforcing 'correct' postures to encouraging postural variability, regular movement and graded tolerance to all positions — 'the best posture is the next posture'.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "management"],
      sectionSlug: "patient-education",
    },
  ],
  flashcards: [
    { front: "Diagnostic triage for low back pain — the three categories?", back: "Serious spinal pathology (~1–5%), radicular syndromes (~5–10%), non-specific low back pain (~90%)." },
    { front: "Cardinal features of cauda equina syndrome?", back: "Saddle anaesthesia, new bladder dysfunction (retention/incontinence), bowel or sexual dysfunction, bilateral leg pain or neurological deficit — same-day emergency referral." },
    { front: "Where does the spinal cord end, and what lies below?", back: "Around L1–L2 (conus medullaris); below is the cauda equina — lumbosacral roots for the legs, bladder, bowel and perineum." },
    { front: "L5 nerve root: key muscle, sensation, reflex?", back: "Great toe extension (EHL); dorsum of foot/lateral leg sensation; no reliable reflex." },
    { front: "S1 nerve root: key muscle, sensation, reflex?", back: "Ankle plantarflexion/eversion; lateral foot and sole; ankle jerk." },
    { front: "What are yellow flags?", back: "Psychosocial risk factors for chronicity — fear-avoidance, catastrophising, low mood, passive-cure expectations, work dissatisfaction." },
    { front: "STarT Back tool — what does it do?", back: "9-item questionnaire stratifying patients into low, medium and high risk of persistent disabling LBP, so treatment intensity is matched to risk." },
    { front: "Matched care for a high-risk STarT Back patient?", back: "Psychologically informed physiotherapy — combined physical and cognitive-behavioural approach with more time and follow-up." },
    { front: "Name the McGill 'big three' trunk endurance exercises.", back: "Modified curl-up, side plank (side bridge), and bird-dog." },
    { front: "Why is routine imaging avoided in non-specific LBP?", back: "It does not improve outcomes, and incidental age-related findings (bulges, degeneration) fuel fear and unnecessary treatment." },
    { front: "Neurogenic vs vascular claudication — key differentiator?", back: "Neurogenic claudication eases with flexion/sitting (uphill easier); vascular claudication eases simply with standing still, regardless of spinal position." },
    { front: "Core guideline-based management of non-specific LBP?", back: "Education and reassurance, advice to stay active, graded exercise of the patient's preferred type; psychological approaches for those at risk of poor outcome." },
  ],
};

export default topic;
