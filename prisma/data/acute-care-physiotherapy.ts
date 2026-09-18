import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "acute-care-physiotherapy",
  title: "Acute Care & ICU Physiotherapy",
  category: "Cardiopulmonary",
  description:
    "Master the essentials of physiotherapy on the wards and in intensive care: reading lines and monitors, deciding when mobilisation is safe, respiratory techniques, post-surgical care and progressive early mobility.",
  difficulty: "Advanced",
  estMinutes: 30,
  icon: "heart-pulse",
  keyTakeaways: [
    "Acute care physiotherapy has two core jobs: optimising respiratory function and getting patients moving early and safely.",
    "Before touching an acute patient, read the bedside: monitors, lines, tubes and drains each carry information and each imposes handling rules.",
    "Safe mobilisation is a structured decision — screen cardiovascular, respiratory and neurological stability every time, and know the stop criteria cold.",
    "ICU-acquired weakness develops within days of immobility and critical illness; early mobilisation is the best-evidenced countermeasure.",
    "After abdominal and thoracic surgery, breathing exercises, supported coughing and early ambulation prevent postoperative pulmonary complications.",
    "The active cycle of breathing techniques (ACBT) — breathing control, deep breaths, huffing — is the workhorse of secretion clearance.",
    "Know your oxygen devices: what each delivers, its limits, and that oxygen is a drug titrated to a target saturation.",
    "Every acute admission is a deconditioning risk: progression from bed exercises to corridor walking should begin as soon as stability allows, with discharge planning from day one.",
  ],
  sections: [
    {
      slug: "role-in-acute-care",
      title: "The Physiotherapist's Role in Acute Care & ICU",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "In the acute hospital and intensive care unit, physiotherapy concentrates on two interrelated priorities: the respiratory system — keeping lungs inflated, secretions moving and gas exchange adequate — and early mobilisation, the antidote to the profound harms of bed rest and critical illness.",
        },
        {
          kind: "cards",
          items: [
            { title: "Respiratory management", text: "Assessment of breathing pattern, auscultation, secretion clearance, volume-restoration techniques, positioning for ventilation/perfusion, and support of the intubated or recently extubated patient.", icon: "wind" },
            { title: "Early mobilisation", text: "From passive movements and bed positioning through sitting, standing, transfers and walking — begun as soon as safety criteria are met, even in ventilated patients in many units.", icon: "footprints" },
            { title: "Deconditioning prevention", text: "Preserving strength, joint range and function during admission so that the acute illness, not the bed rest, determines outcome.", icon: "shield" },
            { title: "Discharge enablement", text: "Functional assessment, equipment and rehabilitation planning that determines whether a patient goes home, and how safely.", icon: "home" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "In acute care your assessment often changes hour to hour — treat the patient in front of you now, not the one described at handover this morning.",
            "The multidisciplinary team is the treatment platform: nothing in ICU happens safely without nursing and medical coordination.",
          ],
        },
      ],
    },
    {
      slug: "reading-the-bedside",
      title: "Reading the Bedside: Lines, Tubes & Monitors",
      estMinutes: 4,
      difficulty: "Advanced",
      content: [
        {
          kind: "paragraph",
          text: "Every device at the bedside answers a question and imposes a rule. Before any treatment, walk the bed space systematically: monitor, airway, vascular access, drains, catheters. Know what is normal for this patient today, what each device restricts, and what would make you stop.",
        },
        {
          kind: "table",
          headers: ["Device / monitor", "What it tells or does", "What the physiotherapist must check"],
          rows: [
            ["ECG monitoring", "Continuous heart rate and rhythm", "Baseline rate and rhythm; new arrhythmias, rate excursions during treatment; electrode leads have slack before moving the patient"],
            ["SpO2 (pulse oximetry)", "Peripheral oxygen saturation", "Baseline value and prescribed target range; trace quality (poor perfusion gives false readings); response during and after intervention"],
            ["Arterial line", "Continuous beat-to-beat blood pressure; blood gas sampling", "Usually radial or femoral — avoid traction and kinking; a femoral line may limit hip flexion per local policy; transducer position affects readings; disconnection causes rapid blood loss"],
            ["Central venous catheter (CVC)", "Central drug/fluid delivery; CVP measurement", "Site (internal jugular, subclavian, femoral); secure before moving; avoid tension on lumens; infusions of vasoactive drugs must never be interrupted"],
            ["ICP monitor / EVD", "Intracranial pressure; external ventricular drain removes CSF", "ICP value and trend; head-of-bed orders; an open EVD is levelled to a reference point — moving the patient without clamping/re-levelling (per unit protocol and with the nurse) can over- or under-drain CSF"],
            ["Chest drain (intercostal catheter)", "Removes air (pneumothorax) or fluid (effusion/haemothorax) from the pleural space", "Keep the drainage bottle below chest level; look for swinging (patent), bubbling (air leak) and drainage volume; do not clamp for mobilisation without instruction; mobilising with a drain is usually possible and encouraged"],
            ["Endotracheal / tracheostomy tube", "Secures airway; enables mechanical ventilation", "Tube position and securing; ventilator settings and FiO2; suction available; coordinate any movement with staff trained in airway care"],
            ["Urinary catheter / NG tube / drains", "Output monitoring; feeding; wound drainage", "Secure and untangle before mobilising; keep urine bag below bladder; note outputs as part of overall fluid picture"],
          ],
        },
        {
          kind: "warning",
          title: "Line safety habits",
          items: [
            "Trace every line from patient to pump/bottle before moving anything — 'tube tangle' is how accidental dislodgements happen",
            "Agree with the bedside nurse who manages which lines during a mobilisation — one person owns the airway",
            "Know which infusions are 'never interrupt' (vasopressors, sedation) before planning position changes",
            "After treatment, recheck every line, drain and electrode — and document",
          ],
        },
        {
          kind: "pearls",
          items: [
            "A chest drain that has stopped swinging may be blocked or the lung fully re-expanded — either way, tell the team what you observed.",
            "Treat the arterial line trace as a live safety monitor during mobilisation: it shows the blood-pressure response beat by beat.",
          ],
        },
      ],
    },
    {
      slug: "safe-mobilisation-criteria",
      title: "Safe Mobilisation: Screening & Stop Criteria",
      estMinutes: 3,
      difficulty: "Advanced",
      content: [
        {
          kind: "paragraph",
          text: "Deciding whether an acute patient can mobilise is a structured screen of three systems — cardiovascular, respiratory and neurological — combined with a scan for local barriers (unstable fractures, unclamped drains, active bleeding). Published expert consensus (e.g. traffic-light style safety criteria for mobilising ventilated patients) frames this as risk stratification, not a simple yes/no.",
        },
        {
          kind: "table",
          headers: ["System", "Generally supports mobilisation", "Increased caution / senior discussion"],
          rows: [
            ["Cardiovascular", "HR roughly 50–120 bpm and stable; MAP adequate (commonly ≥65 mmHg) on no or low, stable vasopressor support; no new arrhythmia or chest pain", "Rising or high-dose vasopressors; new/uncontrolled arrhythmia; MAP below target; recent MI or unstable cardiac condition"],
            ["Respiratory", "SpO2 ≥ ~90% and stable on FiO2 ≤ ~0.6 with PEEP ≤ ~10; respiratory rate < ~30–35; comfortable ventilation pattern", "High FiO2 or PEEP requirements; rapidly deteriorating gases; unsecured or precarious airway; prone positioning"],
            ["Neurological", "Awake or rousable, able to follow simple commands (or stable sedation level for passive work); no uncontrolled ICP; no acute deterioration", "Agitation risking device removal; actively raised or unstable ICP; new focal deficit; unprotected spinal precautions"],
            ["Other", "Drains, lines and attachments secured; no active bleeding; fracture/weight-bearing orders known; adequate staff and equipment", "Femoral access limiting hip movement per policy; unstable fractures; severe uncorrected coagulopathy or active haemorrhage"],
          ],
        },
        {
          kind: "redflags",
          items: [
            "STOP: new chest pain, severe breathlessness, or patient distress out of proportion to effort",
            "STOP: SpO2 falling below the agreed threshold (commonly <88–90%) and not recovering promptly with rest",
            "STOP: heart rate or blood pressure surging or collapsing beyond agreed limits, or a new arrhythmia on the monitor",
            "STOP: colour change, sweating, pallor, or altered consciousness / new confusion",
            "STOP: any airway, line or drain becomes compromised — abandon the task, secure the patient and the device",
            "STOP: patient asks to stop — in acute care, always honour it first and assess second",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Set explicit stop parameters with the nurse before starting, tailored to the patient — 'we stop if SpO2 <90% or MAP <65' — so nobody is deciding mid-crisis.",
            "Recovery time tells you as much as the event: a patient whose vitals settle within a couple of minutes tolerated the session; slow recovery means reduce the next dose.",
          ],
        },
      ],
    },
    {
      slug: "icu-acquired-weakness",
      title: "ICU-Acquired Weakness & the Case for Early Mobility",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "ICU-acquired weakness (ICU-AW) is clinically detected, diffuse, symmetrical limb and respiratory muscle weakness developing after the onset of critical illness with no other explanation. It encompasses critical illness polyneuropathy, critical illness myopathy, and their combination, and it affects a substantial proportion of patients ventilated for more than a few days.",
        },
        {
          kind: "cards",
          items: [
            { title: "How fast it happens", text: "Muscle protein breakdown begins within days; significant loss of muscle mass can occur in the first week of critical illness — inactivity, inflammation, sepsis and hyperglycaemia all contribute.", icon: "trending-down" },
            { title: "Risk factors", text: "Sepsis and multi-organ failure, prolonged mechanical ventilation, deep sedation and immobility, corticosteroids and neuromuscular blockers (associations), poor glycaemic control.", icon: "alert-triangle" },
            { title: "Consequences", text: "Prolonged ventilator dependence (respiratory muscle involvement), longer ICU and hospital stays, and weakness plus fatigue that can persist for months to years — part of post-intensive-care syndrome.", icon: "clock" },
            { title: "Detection", text: "Medical Research Council (MRC) sum score across 12 muscle groups: a total below 48/60 in a cooperative patient indicates ICU-AW.", icon: "clipboard" },
          ],
        },
        {
          kind: "paragraph",
          text: "Early mobilisation — beginning within days of ICU admission, once safety criteria are met — is the best-evidenced countermeasure. Trials and systematic reviews associate early, progressive mobility with better functional status at discharge, more ventilator-free days and less delirium, particularly when sedation is minimised in parallel (paired sedation-and-mobility protocols). Benefits depend on genuine progression of dose, not token sitting on the bed edge.",
        },
        {
          kind: "keypoints",
          title: "Why mobilise early",
          items: [
            "Muscle is lost fastest in the first week — the window for prevention is immediate, not after ICU discharge",
            "Mobilising ventilated patients is feasible and safe in experienced teams when screening criteria are used",
            "Sedation minimisation and mobility are a package: an awake patient can participate",
            "Delirium, pressure injury, joint contracture and thromboembolism are all reduced by getting patients up",
          ],
        },
      ],
    },
    {
      slug: "post-surgical-physiotherapy",
      title: "Post-Surgical Physiotherapy: Abdominal & Thoracic",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Upper abdominal and thoracic surgery predictably impair the respiratory pump: pain inhibits deep breathing and coughing, diaphragm function is reflexly reduced, and anaesthesia promotes atelectasis in dependent lung zones. The result — postoperative pulmonary complications (atelectasis, pneumonia) — is largely preventable with a simple, consistently applied package.",
        },
        {
          kind: "steps",
          items: [
            { title: "1. Pre-operative education where possible", text: "Teaching breathing exercises, supported coughing and the early-mobility plan before surgery improves participation afterwards — the patient wakes knowing the job." },
            { title: "2. Pain control first", text: "Liaise with the team so analgesia is timed before physiotherapy. A patient in uncontrolled pain cannot breathe deeply or cough effectively — analgesia is a respiratory treatment." },
            { title: "3. Deep breathing exercises", text: "Regular sets of slow deep breaths with a 2–3 second inspiratory hold ('sniff' or hold at full inspiration re-expands atelectatic units), every waking hour early after surgery." },
            { title: "4. Supported (splinted) cough / huff", text: "Patient or therapist presses a pillow or hands firmly over the incision while coughing or huffing — supporting the wound reduces pain and fear, making clearance effective. Reassure: coughing does not burst well-closed wounds." },
            { title: "5. Early ambulation", text: "Sitting out of bed and walking from day 0–1 where permitted — the single most powerful intervention, restoring lung volumes, mobilising secretions and countering thromboembolism and ileus." },
            { title: "6. DVT prevention", text: "Alongside prescribed prophylaxis: active ankle dorsi/plantarflexion 'pumps' regularly while in bed, early and frequent walking, and vigilance for calf pain, swelling or unexplained breathlessness." },
          ],
        },
        {
          kind: "warning",
          title: "Postoperative cautions",
          items: [
            "Check the operation note and drain/weight-bearing orders before first mobilisation — surgical instructions override protocols",
            "Sternotomy patients follow local sternal precautions — typically avoiding heavy asymmetric pulling/pushing early while encouraging normal light arm use",
            "Watch the trend: increasing oxygen requirement, fever and a quiet lung base on day 2–3 is the classic pattern of atelectasis progressing to pneumonia",
            "New unexplained hypoxia, pleuritic pain or tachycardia post-operatively — think pulmonary embolism and call for medical review",
          ],
        },
      ],
    },
    {
      slug: "respiratory-techniques",
      title: "Respiratory Techniques in Acute Care",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Acute respiratory physiotherapy aims at three targets: restoring lung volume, clearing secretions, and optimising ventilation–perfusion matching. Technique selection follows the problem — a dry atelectatic base needs volume, a wet chest needs clearance, refractory hypoxaemia may need positioning.",
        },
        { kind: "image", illustration: "lungs", caption: "The lungs and airways. Dependent (lowermost) regions receive the most perfusion and, in health, ventilate best — the basis for using body position to match ventilation and perfusion." },
        {
          kind: "heading",
          text: "Active cycle of breathing techniques (ACBT)",
        },
        {
          kind: "steps",
          items: [
            { title: "Breathing control", text: "Relaxed tidal breathing with the shoulders loose — the resting phase that prevents fatigue and bronchospasm between active components." },
            { title: "Thoracic expansion exercises", text: "3–5 slow deep breaths, emphasising inspiration, with an optional 2–3 second hold — recruits collateral ventilation channels to get air behind secretions." },
            { title: "Forced expiration technique (huff)", text: "One or two huffs — forced expirations through an open glottis — from mid-to-low lung volume to move peripheral secretions, then from high volume to clear proximal ones; a huff moves the 'equal pressure point' downstream without the airway compression of a cough." },
            { title: "Cycle and repeat", text: "Return to breathing control, repeat the cycle until clearance is achieved or fatigue supervenes; cough only when secretions are proximal and ready." },
          ],
        },
        {
          kind: "cards",
          items: [
            { title: "Positioning for V/Q", text: "In unilateral lung disease, 'good lung down' in side-lying generally improves oxygenation by sending perfusion to the better-ventilated lung. Upright sitting improves functional residual capacity compared with slumped supine.", icon: "move" },
            { title: "Gravity-assisted positioning & manual techniques", text: "Postural drainage positions, percussion and vibrations retain a role in secretion-heavy conditions where huffing alone is insufficient — modified (no head-down tilt) where reflux, breathlessness or raised ICP forbid it.", icon: "hand" },
            { title: "Suction", text: "For patients who cannot clear proximal secretions (artificial airway, ineffective cough) — a skilled, potentially distressing procedure with hypoxia and vagal risks; pre-oxygenate per protocol.", icon: "syringe" },
            { title: "Incentive spirometry", text: "A visual-feedback device encouraging slow deep inspiration. Honest evidence: trials and reviews show little or no added benefit over deep breathing exercises and early mobilisation done well — if used, it is a motivator, not a substitute.", icon: "gauge" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Auscultate before and after every treatment — it is the fastest feedback loop in acute physiotherapy.",
            "An effective huff sounds breathy, not squeezed; teach it as 'fogging a mirror' with force.",
            "Mobilisation is a respiratory treatment: walking a patient often clears more than twenty minutes of bedside techniques.",
          ],
        },
      ],
    },
    {
      slug: "oxygen-therapy",
      title: "Oxygen Therapy Basics",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Oxygen is a drug: prescribed, titrated to a target saturation range, and monitored. Standard targets are commonly 94–98% for most acute patients and 88–92% for those at risk of hypercapnic (type 2) respiratory failure, such as some patients with severe COPD. Physiotherapists must know what each device delivers, because treatment and mobilisation change demand.",
        },
        {
          kind: "table",
          headers: ["Device", "Typical flow", "Approximate FiO2", "Notes for physiotherapy"],
          rows: [
            ["Nasal cannulae", "1–6 L/min", "~24–40% (variable)", "Comfortable, allows eating/talking; FiO2 varies with breathing pattern; good for mobilising"],
            ["Simple face mask", "5–10 L/min", "~40–60% (variable)", "Do not run below ~5 L/min (CO2 rebreathing); obstructs eating; commonly swapped to cannulae for meals per prescription"],
            ["Venturi mask", "Colour-coded barrel sets flow", "Fixed 24–60%", "Delivers a controlled FiO2 — device of choice when hypercapnia risk demands precision (e.g. COPD on 24–28%)"],
            ["Non-rebreather (reservoir) mask", "15 L/min", "~60–90%", "Emergency/high-need use; a patient on a reservoir mask is sick — mobilisation decisions need senior input"],
            ["High-flow nasal oxygen (HFNO)", "Up to ~60 L/min heated, humidified", "21–100%, titratable", "Provides flow-dependent low-level positive pressure and washout of dead space; patients can often still mobilise with planning"],
          ],
        },
        {
          kind: "keypoints",
          title: "Oxygen rules for the physiotherapist",
          items: [
            "Know the prescribed target range before treating, and titrate (or request titration) within it",
            "Expect transient desaturation with exertion — plan rest points, monitor, and allow recovery before progressing",
            "Never abruptly remove oxygen from a dependent patient for convenience during transfers — plan portable supply, and check the cylinder has enough content for the trip",
            "Escalating oxygen requirement is a deterioration flag in itself — report it, do not just chase the saturations",
          ],
        },
        {
          kind: "warning",
          title: "Hypercapnia caution",
          items: [
            "In patients at risk of CO2 retention, excessive oxygen can worsen hypercapnia — respect the lower (88–92%) target and use controlled-delivery devices",
            "Drowsiness, flap/tremor, morning headache or confusion in such a patient may signal rising CO2 — request medical review and blood gas assessment",
          ],
        },
      ],
    },
    {
      slug: "deconditioning-discharge",
      title: "Deconditioning & Discharge Planning",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Hospital-associated deconditioning is rapid and disproportionately harms older adults: bed rest costs muscle strength within days, along with orthostatic tolerance, bone density, mood and confidence. The phrase 'pyjama paralysis' captures the culture problem — patients who walked into hospital can leave unable to climb their own stairs, from bed rest rather than illness.",
        },
        {
          kind: "cards",
          items: [
            { title: "Prevent from day one", text: "Dress in day clothes where possible, sit out for meals, walk to the bathroom, schedule activity like medication — 'end PJ paralysis' thinking applies to every ward patient.", icon: "sun" },
            { title: "Functional benchmarks", text: "Discharge decisions hinge on function: bed mobility, transfers, walking distance and aids, stairs where relevant — assessed against the demands of the actual home environment.", icon: "ruler" },
            { title: "The home picture", text: "Stairs? Who else is at home? Bathroom location? Carer capacity? Equipment needs (frame, commode, rails) and referrals (community rehab, reablement) are physiotherapy business.", icon: "home" },
            { title: "Handover that travels", text: "Clear documentation of current function, remaining goals and safety concerns — the community team can only continue what they can read.", icon: "file-text" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Ask on admission: 'What could you do two weeks ago?' — the pre-morbid baseline is the rehabilitation target and the discharge benchmark.",
            "A stairs assessment done early prevents the classic Friday-evening discovery that the patient cannot reach their own bedroom.",
          ],
        },
      ],
    },
    {
      slug: "mobilisation-progression",
      title: "Mobilisation Progression Blocks",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Progression in acute care follows function, not the calendar: each block is used as soon as — and only when — the safety screen supports it, with vital signs monitored across the session. A patient may progress through several blocks in a day or hold at one for a week.",
        },
        { kind: "image", illustration: "heart", caption: "The heart. Every mobilisation is a cardiovascular stress test at low dose — monitor rate, rhythm, blood pressure and symptoms as the load increases through each block." },
        {
          kind: "exercise",
          name: "Block 1 — Bed exercises",
          purpose: "Preserve muscle activity, circulation and joint range in patients not yet cleared to sit out; the DVT-prevention baseline.",
          position: "Supine or semi-recumbent in bed.",
          execution: "Active or active-assisted ankle pumps, static quadriceps and gluteal contractions, heel slides, shoulder and elbow range; progress to resisted work with bands where able.",
          dosage: "Little and often: e.g. 10 repetitions of each, every 1–2 waking hours.",
          progression: "Passive → active-assisted → active → resisted; add sitting up in bed with the backrest lowered progressively.",
          precautions: "Respect line and drain limits; watch for fatigue and desaturation even with bed work in the frail.",
        },
        {
          kind: "exercise",
          name: "Block 2 — Sitting balance on the edge of the bed",
          purpose: "Reload the trunk against gravity, challenge postural control, improve lung volumes and reintroduce upright orthostatic stress.",
          position: "Sitting over the edge of the bed, feet supported on the floor, therapist(s) guarding; lines and drains arranged first.",
          execution: "Achieve steady unsupported sitting; progress to weight shifts, reaching outside the base of support, and simple tasks (washing face, drinking).",
          dosage: "Build from a few minutes to 20+ minutes, once or twice daily, symptom- and vitals-guided.",
          progression: "Supported → unsupported → dynamic reaching → sitting out in a chair for meals.",
          precautions: "First sit after prolonged bed rest risks orthostatic hypotension — move in stages and watch BP, colour and conversation.",
        },
        {
          kind: "exercise",
          name: "Block 3 — Standing and transfers",
          purpose: "Restore anti-gravity strength and the pivotal functional skill: getting from bed to chair (and toilet) safely.",
          position: "Sitting on bed or chair edge, appropriate aid (frame/standing hoist as needed), correct staff numbers agreed in advance.",
          execution: "Sit-to-stand practice with the least assistance that succeeds; static standing with support building tolerance; step-around or standing transfers bed↔chair.",
          dosage: "3–5 sit-to-stands and 1–2 transfers per session, 1–3 sessions daily as tolerated.",
          progression: "Standing hoist → two assist → one assist → aid only → independent; add standing weight shifts and heel raises.",
          precautions: "Confirm weight-bearing status; guard against knee buckling in ICU-AW — quadriceps often fail before the patient expects.",
        },
        {
          kind: "exercise",
          name: "Block 4 — Marching on the spot & first steps",
          purpose: "Bridge from static standing to gait: reciprocal stepping, single-leg support and dynamic balance in a controlled radius.",
          position: "Standing with frame or gutter frame, chair immediately behind, oxygen and monitoring arranged.",
          execution: "March gently on the spot lifting each foot clearly; progress to stepping sideways along the bed, then a few forward steps and back to the chair.",
          dosage: "2–3 bouts of 30–60 seconds or 5–10 steps, with seated rests; 1–2 sessions daily.",
          progression: "Increase steps and reduce support; introduce turns — the highest-risk moment for stumbles.",
          precautions: "Have the chair or a second staff member ready behind the patient; stop on the stop criteria, not on ambition.",
        },
        {
          kind: "exercise",
          name: "Block 5 — Corridor walking & stairs",
          purpose: "Rebuild the walking capacity and confidence that discharge depends on; expose and treat exertional desaturation.",
          position: "Ward corridor with appropriate aid; portable oxygen if prescribed; seat available en route.",
          execution: "Walk measured corridor distances at a comfortable pace, recording distance, aid, assistance and vitals; progress to stairs assessment when distance and strength allow.",
          dosage: "Once or twice daily, extending distance progressively (e.g. 10 → 30 → 60+ metres).",
          progression: "Reduce aid and supervision; add stairs with rail; simulate the home environment demands before discharge.",
          precautions: "Take the saturation probe (and enough portable oxygen) with you; plan the route past seating; fatigue on the return leg is the classic trap.",
        },
        {
          kind: "keypoints",
          title: "Progression rules",
          items: [
            "Screen before every session — yesterday's clearance does not carry over",
            "Progress on function and physiological response, not the number of days since surgery",
            "Record the dose (what, how far, how much help, vitals response) so the next therapist progresses rather than repeats",
            "Regression is information: a patient who managed less than yesterday needs a cause found — sepsis, fluid, drugs, fatigue — not just encouragement",
          ],
        },
      ],
    },
    {
      slug: "quick-revision",
      title: "Quick Revision Summary",
      estMinutes: 2,
      difficulty: "Intermediate",
      content: [
        {
          kind: "keypoints",
          title: "60-second summary",
          items: [
            "Two jobs: respiratory optimisation + early mobilisation; both prevent the complications of bed rest",
            "Walk the bed space first: ECG, SpO2, arterial line, CVC, ICP/EVD, chest drains — know what each restricts and check lines before and after",
            "Mobilisation screen: CVS (HR, MAP, vasopressors), respiratory (SpO2, FiO2, PEEP), neuro (conscious level, ICP) + local barriers; agree stop criteria in advance",
            "ICU-AW: diffuse symmetrical weakness, MRC sum score <48/60; muscle is lost within days — mobilise early with minimised sedation",
            "Post-op package: analgesia first, hourly deep breathing with holds, supported cough/huff, ambulate day 0–1, ankle pumps for DVT",
            "ACBT = breathing control + thoracic expansion + huff; position 'good lung down' for unilateral disease; incentive spirometry adds little over exercises done well",
            "Oxygen is a drug: targets 94–98% (88–92% if hypercapnia risk); know your device FiO2s; escalating need = deterioration",
            "Progress: bed exercises → edge-of-bed sitting → standing/transfers → marching/steps → corridor and stairs — screened every session",
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
      text: "What are the two central priorities of physiotherapy in acute care and ICU?",
      options: [
        "Electrotherapy and massage",
        "Respiratory management and early mobilisation",
        "Discharge paperwork and equipment ordering",
        "Passive stretching and splinting only",
      ],
      correctIndex: 1,
      explanation:
        "Acute care physiotherapy centres on optimising respiratory function (volume restoration, secretion clearance, V/Q positioning) and early, progressive mobilisation to counter the harms of bed rest and critical illness. Discharge planning and equipment matter, but they flow from these two clinical priorities.",
      difficulty: "Easy",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "role-in-acute-care",
    },
    {
      text: "Before mobilising a patient, where must a chest drain's collection bottle be positioned?",
      options: [
        "On the bed beside the patient for convenience",
        "Above chest level so fluid drains back if needed",
        "Below chest level at all times",
        "Clamped and left behind at the bedside",
      ],
      correctIndex: 2,
      explanation:
        "The drainage bottle must stay below chest level so that pleural contents drain out and cannot siphon back into the pleural space. Drains should not be clamped for mobilisation unless specifically instructed — clamping a bubbling drain risks tension pneumothorax. Mobilising with a drain, properly carried, is usually possible and encouraged.",
      difficulty: "Easy",
      tags: ["precautions", "management"],
      sectionSlug: "reading-the-bedside",
    },
    {
      text: "What does 'swinging' of the fluid level in a chest drain tube indicate?",
      options: [
        "The drain is blocked",
        "The drain is patent and communicating with the pleural space, moving with respiratory pressure changes",
        "There is a large ongoing air leak",
        "The bottle needs changing immediately",
      ],
      correctIndex: 1,
      explanation:
        "Swinging (oscillation of the fluid level with breathing) shows the drain is patent and reflecting pleural pressure changes. Continuous bubbling suggests an air leak from the lung; absence of swinging may mean blockage or full lung re-expansion — either observation should be reported to the team.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "reading-the-bedside",
    },
    {
      text: "Why must a physiotherapist take particular care around a central venous catheter delivering noradrenaline during repositioning?",
      options: [
        "The infusion can be paused for up to an hour with no consequence",
        "Vasoactive infusions must never be interrupted — tension or dislodgement can cause abrupt, dangerous blood pressure collapse",
        "Noradrenaline lines may be freely disconnected by physiotherapists",
        "The CVC only matters if it is in the femoral vein",
      ],
      correctIndex: 1,
      explanation:
        "Vasopressors such as noradrenaline support blood pressure minute to minute; interruption or line dislodgement can cause rapid haemodynamic collapse. Before any position change, the physiotherapist must identify 'never interrupt' infusions, ensure slack in the lines, and agree with the bedside nurse who manages which attachments during the manoeuvre.",
      difficulty: "Medium",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "reading-the-bedside",
    },
    {
      text: "Which set of findings most supports proceeding with mobilisation of a ventilated ICU patient?",
      options: [
        "HR 84 and stable, MAP 78 mmHg on low stable vasopressor support, SpO2 95% on FiO2 0.4, rousable and following commands",
        "HR 138 with new atrial fibrillation, MAP 58 mmHg on rising vasopressors",
        "SpO2 87% on FiO2 0.8 with PEEP 14",
        "Agitated, pulling at the endotracheal tube, sedation being titrated",
      ],
      correctIndex: 0,
      explanation:
        "Option A shows cardiovascular stability (acceptable HR, MAP ≥65 on low stable support), respiratory reserve (SpO2 ≥90% on FiO2 ≤0.6, modest PEEP) and neurological readiness (following commands) — the classic green-light profile. New uncontrolled arrhythmia with hypotension, high oxygen/PEEP requirements, and airway-threatening agitation each mandate caution or postponement.",
      difficulty: "Hard",
      tags: ["assessment", "clinical-reasoning", "precautions"],
      sectionSlug: "safe-mobilisation-criteria",
    },
    {
      text: "During a first walk, a post-operative patient becomes pale, sweaty and complains of new chest pain. What is the correct immediate response?",
      options: [
        "Encourage them to push through — first walks are always uncomfortable",
        "Stop, sit the patient down, monitor vitals and call for medical review",
        "Walk faster to finish the planned distance sooner",
        "Give oxygen and continue walking with more support",
      ],
      correctIndex: 1,
      explanation:
        "New chest pain with pallor and sweating is an absolute stop criterion — it may represent myocardial ischaemia or pulmonary embolism. The correct sequence is stop, make the patient safe (seated), monitor, and escalate for medical assessment. No planned exercise dose ever outranks a stop criterion.",
      difficulty: "Easy",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "safe-mobilisation-criteria",
    },
    {
      text: "Which MRC sum score threshold indicates ICU-acquired weakness in a cooperative patient?",
      options: ["Below 60/60", "Below 48/60", "Below 30/60", "Below 10/60"],
      correctIndex: 1,
      explanation:
        "The MRC sum score grades strength 0–5 in twelve muscle groups (six bilaterally), giving a maximum of 60. A total below 48 in a cooperative patient defines clinically significant ICU-acquired weakness. The score requires an awake, cooperative patient — another reason sedation minimisation and rehabilitation go together.",
      difficulty: "Medium",
      tags: ["assessment", "pathology"],
      sectionSlug: "icu-acquired-weakness",
    },
    {
      text: "Which combination of factors most strongly promotes ICU-acquired weakness?",
      options: [
        "Early mobilisation and light sedation",
        "Sepsis with multi-organ failure, deep sedation, immobility and prolonged mechanical ventilation",
        "Daily physiotherapy and glycaemic control",
        "Short elective surgical admissions",
      ],
      correctIndex: 1,
      explanation:
        "ICU-AW is driven by critical illness itself — especially sepsis and multi-organ failure with systemic inflammation — compounded by immobility, deep sedation, prolonged ventilation and poor glycaemic control, with corticosteroids and neuromuscular blockade as reported associations. Early mobility with minimised sedation is protective, not causative.",
      difficulty: "Easy",
      tags: ["pathology", "precautions"],
      sectionSlug: "icu-acquired-weakness",
    },
    {
      text: "Why does significant muscle wasting in critical illness demand that mobilisation start within days rather than after ICU discharge?",
      options: [
        "Because rehabilitation gyms are unavailable in ICU",
        "Because muscle protein breakdown begins within days and substantial mass can be lost in the first week — the prevention window is immediate",
        "Because patients are always fully recovered after one week",
        "Because sedation cannot be adjusted after the first week",
      ],
      correctIndex: 1,
      explanation:
        "Catabolism starts almost immediately in critical illness: inflammation, inactivity and sepsis combine to strip muscle fastest in the first week. Waiting until 'the patient is better' misses the prevention window. Early progressive mobility — with sedation minimised so the patient can participate — is associated with better function at discharge and more ventilator-free days.",
      difficulty: "Medium",
      tags: ["pathology", "exercise-therapy"],
      sectionSlug: "icu-acquired-weakness",
    },
    {
      text: "Why is timely analgesia considered part of respiratory physiotherapy after upper abdominal surgery?",
      options: [
        "Analgesics directly dilate the airways",
        "Uncontrolled incisional pain inhibits deep breathing and effective coughing, promoting atelectasis and retained secretions",
        "Pain relief removes the need for any breathing exercises",
        "Analgesia increases diaphragm paralysis",
      ],
      correctIndex: 1,
      explanation:
        "Pain from an upper abdominal or thoracic wound reflexly and voluntarily inhibits deep inspiration and coughing — the exact mechanisms that prevent postoperative atelectasis and pneumonia. Timing physiotherapy after analgesia lets the patient breathe deeply and clear effectively. Analgesia enables the treatment; it does not replace it.",
      difficulty: "Easy",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "post-surgical-physiotherapy",
    },
    {
      text: "What is the correct technique for a supported (splinted) cough after abdominal surgery?",
      options: [
        "Cough with the arms held overhead to expand the chest",
        "Press a pillow or the hands firmly over the incision during the cough or huff to support the wound",
        "Suppress all coughing for two weeks to protect the sutures",
        "Cough only in side-lying with the wound uppermost",
      ],
      correctIndex: 1,
      explanation:
        "Firm support over the incision — with a pillow or interlocked hands — counter-braces the wound during the pressure rise of a cough or huff, reducing pain and fear so clearance becomes effective. Suppressing coughing invites secretion retention and pneumonia; patients should be reassured that a supported cough will not burst a well-closed wound.",
      difficulty: "Easy",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "post-surgical-physiotherapy",
    },
    {
      text: "What are the three components of the active cycle of breathing techniques (ACBT)?",
      options: [
        "Breathing control, thoracic expansion exercises, forced expiration technique (huff)",
        "Pursed-lip breathing, maximal coughing, breath-holding",
        "Incentive spirometry, percussion, suction",
        "Diaphragmatic breathing, hyperventilation, straining",
      ],
      correctIndex: 0,
      explanation:
        "ACBT cycles between breathing control (relaxed tidal breathing to rest and prevent bronchospasm), thoracic expansion exercises (slow deep breaths, optionally with an inspiratory hold, to get air behind secretions via collateral channels), and the forced expiration technique — huffs at varying lung volumes to move then clear secretions, with coughing reserved for proximal secretions.",
      difficulty: "Medium",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "respiratory-techniques",
    },
    {
      text: "Why does a huff from mid-to-low lung volume move peripheral secretions better than an immediate strong cough?",
      options: [
        "It generates higher airway pressures than any cough",
        "The open-glottis forced expiration shifts the equal pressure point downstream (peripherally), squeezing distal airways without the airway collapse of a violent cough",
        "It works by increasing inspiratory muscle strength",
        "It bypasses the mucociliary escalator entirely",
      ],
      correctIndex: 1,
      explanation:
        "During forced expiration, dynamic compression occurs downstream of the 'equal pressure point'. Huffing at lower lung volumes moves this point peripherally so compression milks distal secretions centrally, while the open glottis avoids the extreme pressures and airway collapse of repeated hard coughing. High-volume huffs and a final cough then clear the proximal airways.",
      difficulty: "Hard",
      tags: ["anatomy", "clinical-reasoning"],
      sectionSlug: "respiratory-techniques",
    },
    {
      text: "A patient with right-sided pneumonia is hypoxic. Which position is generally expected to improve oxygenation?",
      options: [
        "Right side-lying (bad lung down)",
        "Left side-lying (good lung down)",
        "Flat supine with the head down",
        "Prone is contraindicated in all hypoxic patients",
      ],
      correctIndex: 1,
      explanation:
        "In unilateral lung disease, gravity sends more perfusion to the dependent lung. Placing the good (left) lung down matches perfusion to the better-ventilated lung and typically improves oxygenation, while the affected lung uppermost also favours secretion drainage. (The rule differs in infants and in some specific conditions — always confirm with response monitoring.)",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "respiratory-techniques",
    },
    {
      text: "What does honest appraisal of the evidence say about incentive spirometry after surgery?",
      options: [
        "It is proven superior to all other respiratory techniques",
        "Trials show little or no added benefit over deep breathing exercises and early mobilisation done well — at best it is a motivational aid",
        "It is dangerous and contraindicated after abdominal surgery",
        "It replaces the need for analgesia",
      ],
      correctIndex: 1,
      explanation:
        "Systematic reviews of incentive spirometry after abdominal and cardiac surgery show little or no additional reduction in pulmonary complications compared with deep breathing exercises and early ambulation. The device can provide visual feedback and motivation, but it must not substitute for the interventions that carry the effect — breathing exercises, supported cough and getting the patient up.",
      difficulty: "Hard",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "respiratory-techniques",
    },
    {
      text: "Which oxygen device delivers a fixed, controlled FiO2 and is preferred when a precise concentration is needed, such as in hypercapnic COPD?",
      options: ["Nasal cannulae", "Simple face mask", "Venturi mask", "Non-rebreather reservoir mask"],
      correctIndex: 2,
      explanation:
        "The Venturi mask uses colour-coded barrels that entrain a fixed air:oxygen ratio, delivering a controlled FiO2 (24–60%) independent of breathing pattern — essential when targeting 88–92% in patients at risk of hypercapnic respiratory failure. Cannulae and simple masks deliver variable concentrations; reservoir masks deliver high, uncontrolled concentrations for emergencies.",
      difficulty: "Medium",
      tags: ["management", "assessment"],
      sectionSlug: "oxygen-therapy",
    },
    {
      text: "What is the standard target oxygen saturation range for an acutely unwell patient at risk of hypercapnic (type 2) respiratory failure?",
      options: ["94–98%", "88–92%", "Above 99% at all times", "80–85%"],
      correctIndex: 1,
      explanation:
        "For patients at risk of CO2 retention — classically severe COPD — the target is 88–92%, usually via a controlled-delivery device, because excessive oxygen can worsen hypercapnia. Most other acute patients are targeted at 94–98%. The physiotherapist must know the prescribed range before treating, since exertion changes oxygen demand.",
      difficulty: "Medium",
      tags: ["management", "precautions"],
      sectionSlug: "oxygen-therapy",
    },
    {
      text: "A previously independent 82-year-old, admitted with pneumonia five days ago, has been on bed rest 'to recover'. What is the most accurate framing of the risk?",
      options: [
        "Bed rest is protective and should continue until all symptoms resolve",
        "Hospital-associated deconditioning strips strength and orthostatic tolerance within days — mobility should be scheduled from the earliest safe moment",
        "Deconditioning only affects patients under 65",
        "Function will return automatically at home without intervention",
      ],
      correctIndex: 1,
      explanation:
        "Older adults lose muscle strength, orthostatic tolerance and confidence within days of bed rest — 'pyjama paralysis'. The illness may be treated while the bed rest disables. Sitting out for meals, dressing in day clothes and scheduled progressive walking, started as soon as the safety screen allows, protect the function that discharge home depends on.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "exercise-therapy"],
      sectionSlug: "deconditioning-discharge",
    },
    {
      text: "On first sitting a patient over the edge of the bed after a week of bed rest, they become light-headed and pale within a minute. What is the most likely mechanism and best response?",
      options: [
        "A stroke — call the resuscitation team immediately in every such case",
        "Orthostatic intolerance from bed-rest deconditioning — return towards horizontal, allow recovery, and reintroduce upright positioning in graded stages while monitoring BP",
        "Normal behaviour that should be ignored so the session can continue",
        "Hypoglycaemia, treated by continuing to sit until it passes",
      ],
      correctIndex: 1,
      explanation:
        "Bed rest rapidly degrades orthostatic tolerance through fluid shifts and baroreceptor deconditioning; the first upright challenge commonly provokes hypotension — light-headedness, pallor, fading conversation. Lower the patient, let vitals recover, then rebuild upright tolerance gradually (staged sitting, time-limited exposures, monitoring). Persistent, severe or atypical responses warrant medical review.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "precautions"],
      sectionSlug: "mobilisation-progression",
    },
    {
      text: "Which principle correctly governs progression through the mobilisation blocks (bed exercises → sitting → transfers → marching → corridor walking)?",
      options: [
        "Progress strictly by post-operative day number",
        "Screen every session and progress on function and physiological response — a patient may advance several blocks in one day or hold at one for a week",
        "Only progress once the patient is off all oxygen",
        "Regression means the physiotherapy was performed incorrectly",
      ],
      correctIndex: 1,
      explanation:
        "Acute progression is criteria-led, not calendar-led: the safety screen is repeated before every session because yesterday's clearance does not carry over, and advancement follows demonstrated function with acceptable vital-sign response. Supplemental oxygen is not a barrier when planned for. Regression is diagnostic information — it demands a cause (sepsis, fluid shifts, drugs, fatigue) be sought.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "exercise-therapy"],
      sectionSlug: "mobilisation-progression",
    },
  ],
  flashcards: [
    { front: "What are the two core roles of acute care/ICU physiotherapy?", back: "Respiratory management (volume restoration, secretion clearance, V/Q positioning) and early progressive mobilisation to prevent the harms of bed rest and critical illness." },
    { front: "Chest drain checks before mobilising?", back: "Bottle below chest level, tubing untangled and secured, note swinging (patent), bubbling (air leak) and volume; never clamp for mobilisation without instruction." },
    { front: "Cardiovascular screen for safe mobilisation?", back: "HR roughly 50–120 and stable, MAP adequate (commonly ≥65 mmHg) on no/low stable vasopressors, no new arrhythmia, no chest pain." },
    { front: "Respiratory screen for safe mobilisation?", back: "SpO2 ≥ ~90% and stable on FiO2 ≤ ~0.6 with PEEP ≤ ~10, respiratory rate < ~30–35, secure airway." },
    { front: "Name five STOP criteria during acute mobilisation.", back: "New chest pain; SpO2 below agreed threshold without prompt recovery; BP/HR surge, collapse or new arrhythmia; pallor/sweating/altered consciousness; any airway, line or drain compromise — plus the patient asking to stop." },
    { front: "Define ICU-acquired weakness and its detection threshold.", back: "Diffuse, symmetrical limb and respiratory muscle weakness after critical illness onset with no other cause (polyneuropathy, myopathy or both); MRC sum score <48/60 in a cooperative patient." },
    { front: "Core post-operative respiratory package after abdominal/thoracic surgery?", back: "Analgesia timed first, hourly deep breathing with inspiratory holds, supported (splinted) cough or huff over the incision, early ambulation from day 0–1, ankle pumps and walking for DVT prevention." },
    { front: "The three components of ACBT?", back: "Breathing control (relaxed tidal breathing), thoracic expansion exercises (3–5 slow deep breaths ± hold), forced expiration technique (huffs from low then high lung volume), cycled until clear." },
    { front: "Positioning rule for unilateral lung disease in adults?", back: "'Good lung down' — the dependent lung receives most perfusion, so placing the healthy lung down improves V/Q matching and oxygenation, while the affected lung uppermost aids drainage." },
    { front: "Oxygen saturation targets in acute care?", back: "94–98% for most acute patients; 88–92% for those at risk of hypercapnic (type 2) respiratory failure — oxygen is a prescribed drug titrated to target." },
    { front: "Which oxygen device gives a fixed FiO2 and when is it preferred?", back: "The Venturi mask (24–60% via colour-coded barrels) — preferred when precision matters, e.g. hypercapnic COPD targeted at 88–92%." },
    { front: "List the five mobilisation progression blocks.", back: "1. Bed exercises (ankle pumps, static quads); 2. Edge-of-bed sitting balance; 3. Standing and transfers; 4. Marching on the spot and first steps; 5. Corridor walking and stairs — screened before every session." },
  ],
};

export default topic;
