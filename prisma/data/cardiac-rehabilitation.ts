import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "cardiac-rehabilitation",
  title: "Cardiac Rehabilitation",
  category: "Cardiopulmonary",
  description:
    "From MI and heart failure basics through the phases of cardiac rehab: screening, exercise prescription with HRR and Borg RPE, monitoring, stop criteria and secondary prevention.",
  difficulty: "Intermediate",
  estMinutes: 27,
  icon: "heart-pulse",
  keyTakeaways: [
    "Cardiac rehabilitation reduces cardiovascular mortality and hospital readmission — it is core treatment after MI, revascularisation and in heart failure, not an optional extra.",
    "Rehab runs in phases: inpatient early mobilisation, a structured outpatient exercise-and-education programme, then lifelong maintenance.",
    "After sternotomy (e.g. CABG), sternal precautions limit heavy lifting and loaded pushing through the arms for roughly 6–12 weeks while the bone heals.",
    "Pre-exercise screening and risk stratification decide who needs ECG-monitored exercise and how fast to progress.",
    "Aerobic intensity is set with the heart rate reserve (Karvonen) method — typically 40–70% HRR — cross-checked with Borg RPE, starting around 11–13 on the 6–20 scale.",
    "Beta-blockers blunt the heart-rate response, so RPE and symptoms become the primary intensity guides for many cardiac patients.",
    "Know the stop criteria cold: chest pain, excessive breathlessness, dizziness, a falling systolic BP with increasing work, and new arrhythmia symptoms all end the session.",
    "In heart failure, exercise training improves capacity and quality of life; daily weight monitoring detects fluid decompensation early.",
    "Exercise is one pillar — smoking cessation, diet, medication adherence and psychological care complete secondary prevention.",
  ],
  sections: [
    {
      slug: "cvd-basics",
      title: "Cardiovascular Disease Basics",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Most patients entering cardiac rehabilitation share one underlying disease: atherosclerotic narrowing of the coronary arteries. What differs is how it has declared itself — stable angina, myocardial infarction, revascularisation, or the chronic syndrome of heart failure.",
        },
        {
          kind: "image",
          illustration: "heart",
          caption: "The heart and its coronary arteries. Atherosclerotic plaque limits blood flow (angina) or ruptures and occludes the vessel (myocardial infarction), while chronic damage impairs the pump itself (heart failure).",
        },
        {
          kind: "cards",
          items: [
            { title: "Angina", text: "Chest tightness or pressure when myocardial oxygen demand exceeds the supply through narrowed coronaries — classically on exertion, relieved by rest or GTN within minutes. Stable angina is predictable; new, worsening or rest angina is unstable and urgent.", icon: "activity" },
            { title: "Myocardial infarction (MI)", text: "Plaque rupture and thrombosis occlude a coronary artery; downstream myocardium dies. Treated with urgent reperfusion (primary PCI or thrombolysis). The infarcted wall scars, and the loss of contractile muscle sets the stage for heart failure.", icon: "alert-triangle" },
            { title: "PCI & CABG", text: "Percutaneous coronary intervention opens a blocked artery with a stent via an arterial puncture (fast recovery). Coronary artery bypass grafting reroutes flow around blockages via a median sternotomy — effective, but recovery includes a healing sternum.", icon: "git-branch" },
            { title: "Heart failure", text: "A clinical syndrome — breathlessness, fatigue, fluid retention — where the heart cannot meet the body's demands at normal filling pressures. Classified by ejection fraction (reduced vs preserved) and graded functionally by NYHA class I–IV.", icon: "heart-pulse" },
          ],
        },
        {
          kind: "keypoints",
          title: "Concepts the rehab clinician uses daily",
          items: [
            "Myocardial oxygen demand rises with heart rate and blood pressure — their product (rate-pressure product) is why intensity limits protect an ischaemic heart",
            "An MI is an event; heart failure is a syndrome — many rehab patients have both histories",
            "NYHA class (I no limitation → IV symptoms at rest) is the everyday functional language of heart failure",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Ask every patient what was actually done: \"a stent through the wrist\" and \"open-heart surgery\" imply completely different early precautions.",
            "Angina that has changed its pattern — less exertion, more frequent, or at rest — is unstable angina and needs medical review before any exercise.",
          ],
        },
      ],
    },
    {
      slug: "why-cardiac-rehab",
      title: "Why Cardiac Rehab Matters",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Cardiac rehabilitation is a structured programme of exercise training, education, risk-factor management and psychological support. The evidence base is one of the strongest in physiotherapy: participation after MI or revascularisation reduces cardiovascular mortality and hospital readmission, and improves exercise capacity and quality of life.",
        },
        {
          kind: "cards",
          items: [
            { title: "Mortality & readmission", text: "Meta-analyses of exercise-based cardiac rehab show reduced cardiovascular mortality and fewer hospital readmissions compared with usual care — effects comparable to major drug therapies.", icon: "trending-down" },
            { title: "Capacity & symptoms", text: "Training raises peak oxygen uptake and the ischaemic threshold, so daily activities sit further below the symptom line — less angina, less breathlessness, more life.", icon: "trending-up" },
            { title: "Confidence & mood", text: "Anxiety and depression are common after cardiac events and worsen prognosis. Supervised exercise rebuilds confidence in the body; education dismantles fear of activity.", icon: "smile" },
            { title: "Secondary prevention hub", text: "Rehab is where medication adherence, smoking cessation, diet and activity habits are actually built — the delivery vehicle for guideline care.", icon: "shield" },
          ],
        },
        {
          kind: "warning",
          title: "The uptake problem",
          items: [
            "Large proportions of eligible patients — especially women, older adults and those in deprived areas — never attend",
            "Fear of exertion after a cardiac event is common and rational to the patient; unaddressed, it becomes lifelong avoidance",
            "Every clinician contact is a chance to endorse rehab; home-based and hybrid models are valid alternatives to centre-based programmes",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Frame it for patients as treatment, not a fitness class: \"this programme reduces your risk of another heart attack\" lands differently from \"exercise is good for you\".",
          ],
        },
      ],
    },
    {
      slug: "phases-of-rehab",
      title: "Phases of Cardiac Rehabilitation",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Cardiac rehabilitation is traditionally described in phases from the coronary care unit to lifelong maintenance. Names and numbering vary between services; the logic does not.",
        },
        {
          kind: "steps",
          items: [
            { title: "Phase 1 — Inpatient", text: "Begins as soon as the patient is stable, often within 12–24 hours. Early mobilisation (sitting out, short walks, gentle stair practice before discharge), breathing exercises after surgery, education about the event, and reassurance that movement is safe. Counter the old instinct of prolonged bed rest — deconditioning starts immediately." },
            { title: "Phase 2 — Early post-discharge", text: "The vulnerable gap at home: structured walking progression, symptom education, and psychological support while awaiting the outpatient programme." },
            { title: "Phase 3 — Structured outpatient programme", text: "The core: typically 6–12 weeks of supervised, individually prescribed aerobic and resistance exercise (commonly twice weekly plus home sessions), with education on risk factors, medication and self-management. Entry follows screening and risk stratification." },
            { title: "Phase 4 — Long-term maintenance", text: "Lifelong independent or community-based exercise — the habits built in phase 3 continued for life, with clear guidance on self-monitoring and when to seek review." },
          ],
        },
        {
          kind: "paragraph",
          text: "After median sternotomy (CABG, valve surgery), the sternum is wired and needs roughly 6–12 weeks of bony healing. Sternal precautions vary between units and have relaxed in recent years (\"keep your move in the tube\" approaches), but the traditional principles remain widely taught:",
        },
        {
          kind: "table",
          headers: ["Activity", "Typical early guidance (first 6–12 weeks)"],
          rows: [
            ["Lifting", "Avoid heavy lifting (commonly quoted limits around 5 kg early on); keep loads close to the body and symmetrical"],
            ["Pushing/pulling", "Avoid loaded pushing through the arms — no pushing up from low chairs with both arms, heavy doors, or lawnmowers"],
            ["Driving", "Usually not for ~4 weeks post-sternotomy (and per local licensing rules) — the wheel and airbag load the sternum"],
            ["Arm movement", "Gentle shoulder range of motion is encouraged early to prevent stiffness — movement within comfort, not immobilisation"],
            ["Warning signs", "Clicking, grinding or a shifting sensation in the sternum, or increasing wound pain/discharge → report to the surgical team"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "Post-surgical patients have two recoveries running at once: the healing sternum and leg wound, and the deconditioned cardiovascular system — prescribe for both.",
            "Teach sit-to-stand by leading with the legs and crossing the arms over the chest — it removes the loaded arm-push without banning the movement.",
          ],
        },
      ],
    },
    {
      slug: "screening-risk-stratification",
      title: "Pre-exercise Screening & Risk Stratification",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Before prescription comes screening: is this patient stable enough to train, and how closely must they be supervised? Risk stratification (using frameworks such as the AACVPR criteria) sorts patients into low, moderate and high risk for exercise-related events.",
        },
        {
          kind: "steps",
          items: [
            { title: "Review the record", text: "Diagnosis and event details, ejection fraction, revascularisation completeness, arrhythmia history, comorbidities (diabetes, renal disease, pulmonary disease), and the medication list — especially beta-blockers." },
            { title: "Check current stability", text: "No unstable angina, decompensated heart failure, uncontrolled arrhythmia, severe symptomatic aortic stenosis or uncontrolled hypertension — these are contraindications to exercise until managed." },
            { title: "Baseline measures", text: "Resting HR and BP, symptoms, functional capacity (exercise test where available, or a walk test such as the 6-minute walk test / incremental shuttle), and psychological screening." },
            { title: "Stratify and set supervision", text: "Low risk: good LV function, no ischaemia or arrhythmia at moderate exertion, normal HR/BP responses. High risk: reduced ejection fraction, ischaemia or complex arrhythmia at low workloads, abnormal BP responses, cardiac arrest history — closer (often ECG-monitored) supervision and gentler progression." },
          ],
        },
        {
          kind: "keypoints",
          title: "What stratification changes",
          items: [
            "Supervision level and whether ECG telemetry is used in early sessions",
            "Starting intensity and speed of progression — not whether the patient exercises at all",
            "High-risk patients arguably gain the most from training; they simply need it delivered more carefully",
          ],
        },
        {
          kind: "pearls",
          items: [
            "The exercise test that provoked ischaemia at a known heart rate hands you a ceiling: prescribe comfortably below the ischaemic threshold (commonly ~10 beats below).",
          ],
        },
      ],
    },
    {
      slug: "exercise-prescription",
      title: "Exercise Prescription: Aerobic & Resistance",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Aerobic training is the foundation. Intensity is prescribed with the heart rate reserve (HRR, Karvonen) method: target HR = resting HR + (percentage × [maximal HR − resting HR]). Cardiac programmes typically train at 40–70% HRR, starting low and progressing as tolerance and confidence build.",
        },
        {
          kind: "cards",
          items: [
            { title: "Worked HRR example", text: "Resting HR 70, max HR 150 → HRR = 80. At 40–60%: 70 + (0.4–0.6 × 80) = 102–118 bpm. That range, cross-checked against symptoms and RPE, is the session target.", icon: "calculator" },
            { title: "Borg RPE 6–20", text: "Start around RPE 11–13 (\"fairly light\" to \"somewhat hard\") — a talking pace. RPE is essential when beta-blockade makes heart rate unreliable, and it teaches self-regulation for life after the programme.", icon: "gauge" },
            { title: "METs concept", text: "One MET is resting metabolic rate (~3.5 ml O2/kg/min). Activities are catalogued in METs — walking 4 km/h ≈ 3, climbing stairs ≈ 4–5, heavy gardening ≈ 5–6 — letting you translate a tested capacity into safe daily-life advice.", icon: "list" },
            { title: "Session structure", text: "Extended warm-up (10–15 min, gradually loading the heart), conditioning phase 20–40 min continuous or interval aerobic work, extended cool-down (~10 min) — abrupt stops after exertion invite hypotension and arrhythmia.", icon: "clock" },
          ],
        },
        {
          kind: "paragraph",
          text: "Resistance training is added once the patient tolerates aerobic work, and is safe and valuable in cardiac populations. Typical entry criteria: several weeks post-MI (commonly ~4–6 weeks, later after sternotomy for upper-limb loading), no unstable symptoms, and competent technique at low load first.",
        },
        {
          kind: "table",
          headers: ["Parameter", "Typical cardiac resistance prescription"],
          rows: [
            ["Starting load", "Light — around 30–50% 1RM (or a load allowing 12–15 easy reps); RPE ~11–13"],
            ["Volume", "1–3 sets of 8–15 repetitions, 8–10 major muscle-group exercises, 2–3 days/week"],
            ["Progression", "Increase reps first, then load in small increments as tolerated with normal symptoms and BP behaviour"],
            ["Technique rules", "Exhale on exertion — no breath-holding (Valsalva spikes BP); avoid sustained isometric gripping; rest adequately between sets"],
            ["Post-sternotomy", "Delay significant upper-limb loading until sternal healing (~6–12 weeks) and clearance"],
          ],
        },
        {
          kind: "keypoints",
          title: "Prescription principles",
          items: [
            "Progress duration and frequency before intensity",
            "Use interval formats (e.g. 2–4 min work, 1–2 min recovery) for deconditioned patients who cannot sustain continuous work",
            "Every session teaches self-monitoring: pulse checks, RPE anchoring, symptom awareness — the real endpoint is a patient who can dose themselves",
            "Aim towards guideline activity levels: ~150 min/week of moderate aerobic activity plus twice-weekly resistance work, maintained for life",
          ],
        },
        {
          kind: "pearls",
          items: [
            "The talk test is the cheapest intensity monitor: comfortable full sentences ≈ moderate; single words ≈ too hard for early-phase cardiac work.",
            "Warm-ups earn their length in this population — a gradual rise in rate-pressure product raises the angina threshold for the session that follows.",
          ],
        },
      ],
    },
    {
      slug: "monitoring-safety",
      title: "Monitoring & When to Stop Exercise",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Monitoring in cardiac rehab is continuous and layered: how the patient looks, what they report, and what the numbers do. The expected responses are a steady HR rise with workload and a progressive rise in systolic BP; diastolic BP should stay roughly stable.",
        },
        {
          kind: "cards",
          items: [
            { title: "Heart rate", text: "Should climb predictably with workload and recover afterwards. A HR that fails to rise (chronotropic incompetence or beta-blockade), or that jumps erratically (possible arrhythmia — check the pulse rhythm), needs attention.", icon: "activity" },
            { title: "Blood pressure", text: "Systolic BP normally rises with work. A DROP in systolic BP (≥10 mmHg) with increasing workload is ominous — it suggests the ventricle cannot sustain output — and ends the session. An exaggerated hypertensive response also warrants caution and review.", icon: "gauge" },
            { title: "Symptoms & the angina scale", text: "Grade angina 1–4: 1 light, barely noticeable; 2 moderate, bothersome; 3 severe, very uncomfortable; 4 the most severe pain ever experienced. Level 1 slows the pace; level 2 or above stops the session; unrelieved pain triggers the emergency protocol.", icon: "message-circle" },
            { title: "Observation", text: "Pallor, cold sweat, ataxia, confusion or unusual breathlessness often precede what the numbers confirm — the therapist's eyes are the first monitor.", icon: "eye" },
          ],
        },
        {
          kind: "redflags",
          items: [
            "Chest pain, pressure or anginal equivalent (jaw, arm, epigastric discomfort) at or above level 2 — stop, rest, follow the GTN/emergency protocol",
            "Excessive or disproportionate dyspnoea — unable to speak short phrases at a workload that should be moderate",
            "Dizziness, light-headedness, ataxia or near-syncope",
            "Drop in systolic BP ≥10 mmHg with increasing workload, or failure of BP to rise",
            "Palpitations or new irregular pulse — possible arrhythmia",
            "Pallor, cold sweat, cyanosis, nausea or sudden fatigue out of proportion to effort",
            "In heart failure patients: sudden weight gain, new orthopnoea or marked ankle swelling before the session — do not exercise; refer for review",
          ],
        },
        {
          kind: "warning",
          title: "Session-day screening habits",
          items: [
            "Check pre-exercise: resting HR and BP, weight (heart failure), symptoms since last session, medication changes and adherence (including whether they took today's beta-blocker)",
            "Do not exercise a patient with new rest pain, fever/acute illness, resting HR or BP far outside their usual range, or decompensation signs",
            "Ensure GTN is available for known angina patients and everyone knows the emergency procedure",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Recovery tells you as much as exertion: HR that stays high or symptoms that linger into cool-down mean the dose was too high — adjust the next session.",
            "Teach patients the stop criteria in their own words; the goal is a patient who terminates their own home session appropriately.",
          ],
        },
      ],
    },
    {
      slug: "heart-failure-specifics",
      title: "Heart Failure: Specific Considerations",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Exercise training in stable chronic heart failure is safe, improves exercise capacity and quality of life, and reduces heart-failure hospitalisation — a decisive reversal of the historical advice to rest. But the prescription carries extra rules.",
        },
        {
          kind: "cards",
          items: [
            { title: "Daily weight monitoring", text: "Fluid retention precedes decompensation. Teach daily morning weights (after voiding, before breakfast): a gain of ~2 kg over 2–3 days suggests fluid, not fat — prompt medication review per the patient's action plan, and no training that day.", icon: "scale" },
            { title: "Beta-blocker HR blunting", text: "Nearly all heart failure patients take beta-blockers, which lower resting HR and cap the exercise HR rise. Percentage-of-max formulas mislead — anchor intensity to RPE 11–13 and symptoms, or to HRR measured on medication.", icon: "gauge" },
            { title: "Start low, interval style", text: "Marked deconditioning and dyspnoea favour interval training and short accumulated bouts initially, with unhurried progression. Even low doses improve capacity in this group.", icon: "timer" },
            { title: "Know the decompensation signs", text: "Increasing orthopnoea (more pillows), paroxysmal nocturnal dyspnoea, new ankle swelling, sudden weight gain, or a marked drop in exercise tolerance — training pauses and the medical team is informed.", icon: "alert-triangle" },
          ],
        },
        {
          kind: "keypoints",
          title: "Heart failure training rules",
          items: [
            "Only stable, compensated patients train — decompensation is a contraindication until treated",
            "RPE and symptom-anchored prescription beats HR formulas under beta-blockade",
            "Resistance training of modest intensity combats the muscle wasting common in heart failure",
            "Inspiratory muscle training is a useful adjunct in patients with inspiratory weakness",
          ],
        },
        {
          kind: "pearls",
          items: [
            "\"Same time, same scales, same clothes\" makes daily weights interpretable — variability from inconsistent routines hides real fluid gain.",
          ],
        },
      ],
    },
    {
      slug: "secondary-prevention",
      title: "Psychosocial Care & Secondary Prevention",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "The exercise sessions are the scaffold; secondary prevention is the building. A cardiac event is a teachable moment, and rehab is where risk-factor change is coached, supported and made habitual.",
        },
        {
          kind: "cards",
          items: [
            { title: "Smoking cessation", text: "The single most powerful modifiable risk change after MI — roughly halving reinfarction risk. Refer to structured cessation support; willpower-alone quit rates are poor.", icon: "ban" },
            { title: "Diet & weight", text: "Mediterranean-style eating pattern, reduced salt (especially heart failure), and realistic weight goals — dietitian involvement where available.", icon: "apple" },
            { title: "Medication adherence", text: "Antiplatelets, statins, ACE inhibitors/ARBs, beta-blockers — patients who understand what each tablet prevents take them; rehab education directly supports adherence.", icon: "pill" },
            { title: "Psychological care", text: "Depression and anxiety after cardiac events are common and independently worsen prognosis. Screen (e.g. HADS), normalise the fear, and refer for psychological therapy when indicated.", icon: "brain" },
            { title: "Return to life", text: "Work, driving (per local licensing rules), sexual activity (commonly resumed when the patient can climb two flights of stairs comfortably), travel — unanswered questions become unspoken fears.", icon: "map" },
          ],
        },
        {
          kind: "keypoints",
          title: "The physiotherapist's role",
          items: [
            "Deliver the exercise component and model activity as medicine",
            "Reinforce every other pillar at every contact — brief advice repeated beats one lecture",
            "Convert programme gains into lifelong habit: signpost phase 4 options before discharge, not after",
          ],
        },
      ],
    },
    {
      slug: "exercise-programme",
      title: "Sample Exercise Programme",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "A typical phase 3 circuit alternates aerobic stations with active recovery, book-ended by long warm-up and cool-down. The examples below show how prescription principles become concrete exercises.",
        },
        {
          kind: "image",
          illustration: "lungs",
          caption: "Heart and lungs work as one system: aerobic training improves oxygen delivery and extraction, which is why breathlessness — not just chest symptoms — is monitored throughout every session.",
        },
        {
          kind: "exercise",
          name: "Progressive walking programme",
          purpose: "Foundation aerobic conditioning that transfers directly to daily life; the home-programme backbone from phase 1 onward.",
          position: "Level ground initially; treadmill or outdoor circuit as available.",
          execution: "Walk at a pace producing RPE 11–13 (comfortable talking pace), within the prescribed HR range where applicable.",
          dosage: "Start with 10–15 minutes (or accumulated shorter bouts) daily, adding ~1–2 minutes every few days towards 30+ minutes, 5 days/week.",
          progression: "Extend duration first, then pace, then gentle gradients.",
          precautions: "Carry GTN if prescribed; warm up gradually in cold weather — cold air and abrupt exertion both provoke angina.",
        },
        {
          kind: "exercise",
          name: "Stationary cycling (aerobic station)",
          purpose: "Quantifiable aerobic work with low joint load — resistance in watts makes progression precise.",
          position: "Upright or recumbent cycle, saddle set so the knee stays slightly bent at the bottom of the stroke.",
          execution: "Cycle at prescribed workload keeping RPE 11–13; maintain steady cadence and relaxed grip (no sustained tight gripping of the handlebars).",
          dosage: "8–20 minutes continuous, or 2–4 minute work intervals with 1–2 minute easy-pedalling recoveries for deconditioned patients.",
          progression: "Lengthen intervals, then raise wattage in small steps once RPE at the current load falls.",
          precautions: "Monitor for symptoms and BP response when workload increases; unload and cool down slowly — never stop pedalling abruptly from high work.",
        },
        {
          kind: "exercise",
          name: "Sit-to-stand (functional resistance)",
          purpose: "Lower-limb strength for the most repeated functional task of daily life; safe early resistance work post-sternotomy because the legs, not the arms, do the lifting.",
          position: "Firm chair, feet hip-width apart and slightly back; arms crossed over the chest after sternotomy.",
          execution: "Lead forward with the trunk, stand up through the legs, lower with 3-second control. Exhale on the way up — no breath-holding.",
          dosage: "8–12 repetitions × 1–3 sets, 2–3 days/week.",
          progression: "Lower seat height, slower eccentric, then hold a light load close to the chest once cleared.",
          precautions: "Stop for dizziness on standing (orthostatic symptoms are common with cardiac medications); rise unhurriedly.",
        },
        {
          kind: "exercise",
          name: "Resistance-band rows and presses",
          purpose: "Upper-body strength for lifting, carrying and pushing tasks of daily life, introduced at light load.",
          position: "Seated or standing with the band anchored securely at chest height.",
          execution: "Pull (row) or push (press) smoothly through full comfortable range, 2 seconds out, 2 seconds back, breathing continuously — exhale on effort.",
          dosage: "10–15 easy repetitions × 1–3 sets, 2–3 days/week, at a load around RPE 11–13.",
          progression: "Shorten the band or step further from the anchor in small increments once 15 reps feel light.",
          precautions: "Post-sternotomy: introduce only after sternal healing and clearance (~6–12 weeks); avoid maximal gripping and any Valsalva.",
        },
        {
          kind: "exercise",
          name: "Cool-down walking and stretching",
          purpose: "Gradual venous return adjustment after exertion — the highest-risk moment for hypotension and arrhythmia is the abrupt stop.",
          position: "Level walking, then standing or seated stretches for calves, quadriceps, hamstrings and chest.",
          execution: "Walk progressively slower for 5 minutes, then hold each stretch 20–30 seconds, breathing normally.",
          dosage: "About 10 minutes at the end of every session — never optional.",
          progression: "None needed — the cool-down stays as sessions intensify.",
          precautions: "Keep patients in view during and shortly after cool-down; delayed symptoms surface here.",
        },
        {
          kind: "keypoints",
          title: "Circuit design rules",
          items: [
            "Alternate cardiovascular stations with active-recovery or light-resistance stations to manage cumulative load",
            "One variable progresses at a time — duration, then frequency, then intensity",
            "Every patient leaves able to state their own RPE target, pulse check method and stop criteria",
            "The programme's success measure is what the patient still does at 12 months",
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
            "Cardiac rehab reduces cardiovascular mortality and readmission after MI/revascularisation and helps heart failure — it is treatment",
            "Phases: inpatient early mobilisation → early home phase → structured outpatient programme (6–12 weeks) → lifelong maintenance",
            "Sternal precautions ~6–12 weeks: no heavy lifting or loaded arm-pushing; gentle shoulder ROM encouraged; report sternal clicking",
            "Screen and risk-stratify first: stability check, baseline HR/BP, functional test; stratification sets supervision and progression speed, not whether to train",
            "Aerobic: 40–70% HRR (Karvonen), start RPE 11–13, long warm-up and cool-down; METs translate capacity into daily-life advice",
            "Resistance: light load 12–15 reps entry, exhale on exertion, no Valsalva; delayed after sternotomy",
            "STOP for: angina ≥ level 2, excessive dyspnoea, dizziness, SBP dropping ≥10 mmHg with work, new arrhythmia, pallor/sweating",
            "Heart failure: train only when compensated; daily weights (~2 kg gain in 2–3 days = review); beta-blockade → prescribe by RPE",
            "Secondary prevention completes the job: smoking cessation, diet, adherence, psychological care",
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
      text: "What is the fundamental mechanism of a myocardial infarction?",
      options: [
        "Gradual thickening of the ventricular wall",
        "Rupture of an atherosclerotic plaque with thrombus occluding a coronary artery",
        "A sudden electrical short-circuit with no vascular involvement",
        "Spasm of the pulmonary artery",
      ],
      correctIndex: 1,
      explanation:
        "Most MIs occur when an atherosclerotic plaque ruptures, triggering thrombus formation that occludes the coronary artery; downstream myocardium becomes ischaemic and dies unless flow is restored rapidly (primary PCI or thrombolysis). The infarcted muscle scars, and lost contractile tissue is what links MI to later heart failure.",
      difficulty: "Easy",
      tags: ["pathology"],
      sectionSlug: "cvd-basics",
    },
    {
      text: "Which outcome is supported by meta-analyses of exercise-based cardiac rehabilitation?",
      options: [
        "Reduced cardiovascular mortality and hospital readmission",
        "Guaranteed reversal of coronary atherosclerosis in all patients",
        "Benefits limited to psychological wellbeing only",
        "Increased risk of reinfarction compared with rest",
      ],
      correctIndex: 0,
      explanation:
        "Exercise-based cardiac rehabilitation reduces cardiovascular mortality and hospital readmissions, and improves exercise capacity and quality of life — which is why guidelines recommend referral for all eligible patients after MI, revascularisation and in stable heart failure. It does not guarantee plaque reversal, and the historical fear that exercise provokes reinfarction is unfounded in properly screened patients.",
      difficulty: "Easy",
      tags: ["management"],
      sectionSlug: "why-cardiac-rehab",
    },
    {
      text: "When should mobilisation typically begin after an uncomplicated MI?",
      options: [
        "After 2 weeks of strict bed rest",
        "Once the patient is stable — often within 12–24 hours, starting with sitting out and short walks",
        "Only after the outpatient programme starts at 6 weeks",
        "Never before an exercise test has been performed",
      ],
      correctIndex: 1,
      explanation:
        "Phase 1 rehabilitation begins as soon as the patient is haemodynamically stable, frequently within 12–24 hours of an uncomplicated event: sitting out of bed, short ward walks, and stair practice before discharge. Prolonged bed rest — the historical approach — causes rapid deconditioning, orthostatic intolerance and thromboembolic risk without protecting the heart.",
      difficulty: "Easy",
      tags: ["management"],
      sectionSlug: "phases-of-rehab",
    },
    {
      text: "A patient is 3 weeks post-CABG via median sternotomy. Which activity should they still avoid?",
      options: [
        "Gentle shoulder range-of-movement exercises",
        "Walking 20 minutes daily",
        "Pushing up forcefully from a low chair through both arms",
        "Breathing exercises with supported coughing",
      ],
      correctIndex: 2,
      explanation:
        "During sternal healing (~6–12 weeks), loaded pushing through the arms — like forcefully pushing up from a low chair — stresses the wired sternum and is avoided; patients are taught to lead with the legs and cross the arms over the chest instead. Gentle shoulder ROM, walking and supported breathing exercises are all encouraged from early on.",
      difficulty: "Easy",
      tags: ["precautions", "management"],
      sectionSlug: "phases-of-rehab",
    },
    {
      text: "Which finding is a contraindication to starting an exercise session in cardiac rehab?",
      options: [
        "Stable angina relieved by rest, unchanged for a year",
        "Resting heart rate of 66 bpm on a beta-blocker",
        "Unstable angina with symptoms at rest since the last session",
        "Mild muscle soreness after the previous session",
      ],
      correctIndex: 2,
      explanation:
        "Unstable angina — new, worsening or rest pain — indicates an unstable coronary plaque and is an absolute contraindication to exercise until medically managed. Other contraindications include decompensated heart failure, uncontrolled arrhythmia and severe symptomatic aortic stenosis. A stable, unchanged anginal pattern, beta-blocked resting HR and ordinary muscle soreness are all compatible with training.",
      difficulty: "Medium",
      tags: ["precautions", "assessment"],
      sectionSlug: "screening-risk-stratification",
    },
    {
      text: "A patient has a resting HR of 60 bpm and maximal HR of 160 bpm. Using the Karvonen method, what is the target HR at 50% of heart rate reserve?",
      options: ["80 bpm", "110 bpm", "130 bpm", "160 bpm"],
      correctIndex: 1,
      explanation:
        "HRR = maximal HR − resting HR = 160 − 60 = 100. Target = resting HR + (0.50 × 100) = 60 + 50 = 110 bpm. The Karvonen method anchors intensity to the individual's own reserve, which tracks oxygen-uptake reserve more closely than simple percentage-of-max formulas — but it still requires a valid maximal HR, ideally measured on current medication.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "exercise-prescription",
    },
    {
      text: "What Borg RPE range (6–20 scale) is the usual starting intensity target in early cardiac rehabilitation?",
      options: ["6–8", "11–13", "15–17", "19–20"],
      correctIndex: 1,
      explanation:
        "Early-phase aerobic work targets RPE 11–13 — \"fairly light\" to \"somewhat hard\", a pace at which the patient can still hold a conversation. RPE matters doubly in cardiac populations: it teaches lifelong self-regulation, and it remains valid when beta-blockers make heart-rate targets unreliable.",
      difficulty: "Easy",
      tags: ["exercise-therapy"],
      sectionSlug: "exercise-prescription",
    },
    {
      text: "What does 1 MET represent?",
      options: [
        "Maximal exercise tolerance",
        "Resting metabolic rate, approximately 3.5 ml of oxygen per kg per minute",
        "The heart rate at anaerobic threshold",
        "One minute of moderate exercise",
      ],
      correctIndex: 1,
      explanation:
        "One metabolic equivalent (MET) is the oxygen cost of quiet rest, ~3.5 ml O2/kg/min. Activities are expressed as multiples — walking ~3 METs, stairs ~4–5, heavy gardening ~5–6 — so a measured or estimated capacity in METs translates directly into advice about which daily activities are safe and which exceed the patient's current ceiling.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "assessment"],
      sectionSlug: "exercise-prescription",
    },
    {
      text: "Which breathing instruction is essential during resistance training in cardiac patients, and why?",
      options: [
        "Hold the breath during effort to stabilise the trunk",
        "Exhale on exertion — breath-holding (Valsalva) causes sharp blood pressure spikes",
        "Breathe as fast as possible throughout",
        "Inhale on effort to maximise oxygen delivery",
      ],
      correctIndex: 1,
      explanation:
        "The Valsalva manoeuvre — straining against a closed glottis — produces abrupt surges in intrathoracic pressure and arterial BP, then a rebound, loading an already vulnerable cardiovascular system. Patients are taught to exhale during the effort phase and breathe continuously. Sustained isometric gripping is minimised for the same pressor reasons.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "precautions"],
      sectionSlug: "exercise-prescription",
    },
    {
      text: "During a circuit session, a patient's systolic BP falls by 15 mmHg as the workload increases. What is the correct action?",
      options: [
        "Continue — BP always falls with training adaptations",
        "Increase the workload to drive BP back up",
        "Stop the exercise: a falling systolic BP with increasing work suggests failing cardiac output",
        "Recheck BP next week but finish today's session",
      ],
      correctIndex: 2,
      explanation:
        "Systolic BP should rise progressively with workload. A drop of ≥10 mmHg despite increasing work (exertional hypotension) implies the left ventricle cannot sustain output — possibly from ischaemia or arrhythmia — and is a firm criterion to terminate exercise, allow supervised recovery and arrange medical review before further training.",
      difficulty: "Medium",
      tags: ["precautions", "assessment", "clinical-reasoning"],
      sectionSlug: "monitoring-safety",
    },
    {
      text: "On the 4-point angina scale, a patient reports level 2 (\"moderate, bothersome\") chest tightness mid-session. What should happen?",
      options: [
        "Push through — level 2 is acceptable training discomfort",
        "Stop the exercise, rest the patient, and follow the GTN/monitoring protocol",
        "Increase the warm-up next time but continue today",
        "Switch immediately to resistance exercise instead",
      ],
      correctIndex: 1,
      explanation:
        "On the standard scale (1 light and barely noticeable → 4 most severe ever), level 1 may warrant slowing, but level 2 or above stops the session: the patient rests, GTN is used per protocol, and pain that does not settle promptly triggers the emergency pathway. Angina during exercise is myocardial ischaemia happening now — never a \"train through it\" symptom.",
      difficulty: "Medium",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "monitoring-safety",
    },
    {
      text: "Which set of symptoms requires immediate termination of a cardiac rehab exercise session?",
      options: [
        "Mild leg fatigue and RPE 12",
        "Sweating appropriate to workload with steady HR",
        "Dizziness, pallor and a newly irregular pulse",
        "Feeling warm after the warm-up",
      ],
      correctIndex: 2,
      explanation:
        "Dizziness, pallor and a new irregular pulse together suggest arrhythmia with compromised cerebral perfusion — the session stops immediately, the patient recovers supervised (usually seated or lying), and medical assessment follows. Appropriate sweating, mild leg fatigue at target RPE and feeling warm are normal training responses.",
      difficulty: "Easy",
      tags: ["precautions"],
      sectionSlug: "monitoring-safety",
    },
    {
      text: "Why are percentage-of-maximal-HR formulas unreliable for prescribing intensity in most heart failure patients?",
      options: [
        "Heart failure patients have no measurable heart rate",
        "Beta-blockers lower resting HR and blunt the exercise HR rise, so formula targets misrepresent true relative intensity",
        "Their maximal HR is always higher than predicted",
        "HR only matters in resistance training",
      ],
      correctIndex: 1,
      explanation:
        "Beta-blockade — near-universal in heart failure — suppresses both resting and peak heart rates, so age-predicted formulas (e.g. 220 − age) overestimate targets and even measured percentages shift. Prescription therefore anchors to RPE 11–13 and symptoms, or to HRR derived from an exercise test performed on the patient's usual medication.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "clinical-reasoning", "precautions"],
      sectionSlug: "heart-failure-specifics",
    },
    {
      text: "A heart failure patient reports gaining 2.5 kg over the past two days. What is the most likely explanation and correct response?",
      options: [
        "Muscle gain from training — congratulate and progress the programme",
        "Fluid retention signalling early decompensation — no training today; follow the action plan and inform the medical team",
        "Measurement error — ignore unless it happens for a month",
        "Normal daily variation requiring no action",
      ],
      correctIndex: 1,
      explanation:
        "True tissue gain of 2.5 kg in 48 hours is physiologically impossible — rapid gain of ~2 kg over 2–3 days means fluid retention, the earliest measurable sign of decompensating heart failure. The correct response is to withhold exercise that day, check for corroborating signs (orthopnoea, ankle swelling, breathlessness) and activate the patient's action plan/medical review, often involving diuretic adjustment.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "precautions", "assessment"],
      sectionSlug: "heart-failure-specifics",
    },
    {
      text: "Which feature places a cardiac rehab participant in a HIGH risk stratum for exercise-related events?",
      options: [
        "Normal ejection fraction with no ischaemia on testing",
        "Ischaemia and complex ventricular arrhythmia appearing at low workloads",
        "Uncomplicated MI with good functional capacity",
        "Normal HR and BP responses throughout an exercise test",
      ],
      correctIndex: 1,
      explanation:
        "High-risk features include reduced ejection fraction, ischaemia or complex arrhythmias at low workloads, abnormal (flat or falling) BP responses, and a history of cardiac arrest. Stratification frameworks such as the AACVPR criteria use these to set supervision level (often ECG telemetry initially) and progression speed. Crucially, high risk changes how training is delivered — not whether it is offered, since these patients stand to gain substantially.",
      difficulty: "Hard",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "screening-risk-stratification",
    },
    {
      text: "Why does every cardiac exercise session end with an extended cool-down rather than an abrupt stop?",
      options: [
        "To burn additional calories",
        "Because sudden cessation causes venous pooling and catecholamine-rich low-flow conditions that predispose to hypotension and arrhythmia",
        "Only to prevent muscle soreness",
        "To allow equipment to be packed away",
      ],
      correctIndex: 1,
      explanation:
        "During exercise, the muscle pump supports venous return while catecholamines remain elevated. Stopping abruptly removes the pump but not the catecholamines: venous pooling drops preload and BP just as the myocardium is most excitable — the highest-risk window for post-exertional hypotension and arrhythmia. A ~10-minute tapering cool-down lets the system down gently, and patients are observed through it.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "precautions", "pathology"],
      sectionSlug: "exercise-programme",
    },
    {
      text: "Which resistance training entry prescription is appropriate for a low-risk patient 6 weeks after an uncomplicated MI (no sternotomy)?",
      options: [
        "80–90% 1RM, 3–5 reps, training to failure",
        "Around 30–50% 1RM, 1–3 sets of 12–15 repetitions at RPE 11–13, exhaling on effort",
        "Isometric holds at maximal effort for 60 seconds",
        "No resistance training is permitted in the first year",
      ],
      correctIndex: 1,
      explanation:
        "Cardiac resistance training enters at light loads — commonly 30–50% 1RM or a load allowing 12–15 comfortable repetitions — for 1–3 sets across major muscle groups, 2–3 days/week, progressing reps before load. Heavy near-maximal work and sustained maximal isometrics impose large pressor responses and are avoided. Blanket bans on resistance training are outdated: it is safe, and it protects muscle mass and function.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "exercise-prescription",
    },
    {
      text: "A patient asks why they should attend cardiac rehab when their stent \"fixed the problem\". What is the best response?",
      options: [
        "Agree — the stent has removed the need for further treatment",
        "Explain that the stent treated one narrowing, but rehab treats the disease: it lowers the risk of future events, rebuilds capacity, and is where risk factors actually change",
        "Tell them rehab is compulsory and refuse to discuss it",
        "Suggest rehab is only useful for surgical patients",
      ],
      correctIndex: 1,
      explanation:
        "A stent restores flow through one lesion; atherosclerosis remains throughout the coronary tree. Exercise-based rehab reduces cardiovascular mortality and readmission, raises the ischaemic threshold, and delivers the secondary prevention — smoking cessation, diet, adherence, psychological support — that changes the disease's trajectory. Framing rehab as treatment for the underlying condition, not a fitness class, addresses exactly this common misconception.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "why-cardiac-rehab",
    },
    {
      text: "Which pre-session check is specific to heart failure patients in a rehab class?",
      options: [
        "Asking about yesterday's step count",
        "Reviewing daily morning weights and asking about orthopnoea and ankle swelling",
        "Measuring height",
        "Checking grip strength before every session",
      ],
      correctIndex: 1,
      explanation:
        "Heart failure patients add a fluid-status layer to the standard pre-exercise screen: daily weights (same time, same scales, after voiding), sleeping position changes (new orthopnoea, extra pillows), paroxysmal nocturnal dyspnoea and ankle swelling. Rapid weight gain or new congestion signs mean training is withheld and the medical team informed — exercising a decompensating patient is dangerous.",
      difficulty: "Medium",
      tags: ["assessment", "precautions"],
      sectionSlug: "heart-failure-specifics",
    },
    {
      text: "Which combination represents complete secondary prevention after myocardial infarction?",
      options: [
        "Exercise training alone at the correct RPE",
        "Medication alone, since statins and antiplatelets are proven",
        "Exercise training plus smoking cessation, dietary change, medication adherence and psychological care",
        "Annual exercise testing with no lifestyle change",
      ],
      correctIndex: 2,
      explanation:
        "Secondary prevention is a package: exercise training, smoking cessation (roughly halving reinfarction risk — the most powerful single change), Mediterranean-style diet, adherence to antiplatelets, statins, ACE inhibitors and beta-blockers, and treatment of depression and anxiety, which independently worsen prognosis. Cardiac rehab is the delivery vehicle where these strands are coached together — exercise alone leaves most of the benefit unclaimed.",
      difficulty: "Easy",
      tags: ["management"],
      sectionSlug: "secondary-prevention",
    },
  ],
  flashcards: [
    { front: "What outcomes does exercise-based cardiac rehab improve?", back: "Reduced cardiovascular mortality and hospital readmission; improved exercise capacity, symptoms and quality of life." },
    { front: "Name the phases of cardiac rehabilitation.", back: "Phase 1 inpatient early mobilisation; phase 2 early post-discharge; phase 3 structured outpatient exercise + education (6–12 weeks); phase 4 lifelong maintenance." },
    { front: "Core sternal precautions after CABG?", back: "For ~6–12 weeks: avoid heavy lifting and loaded pushing/pulling through the arms; gentle shoulder ROM encouraged; report sternal clicking or grinding." },
    { front: "Karvonen (HRR) formula?", back: "Target HR = resting HR + %intensity × (max HR − resting HR). Cardiac programmes typically use 40–70% HRR." },
    { front: "Starting RPE target in early cardiac rehab?", back: "Borg 11–13 on the 6–20 scale — \"fairly light to somewhat hard\", a comfortable talking pace." },
    { front: "What is 1 MET?", back: "Resting metabolic rate ≈ 3.5 ml O2/kg/min; activities are expressed as multiples (walking ~3, stairs ~4–5 METs)." },
    { front: "List the main criteria for stopping a cardiac exercise session.", back: "Angina ≥ level 2, excessive dyspnoea, dizziness/near-syncope, SBP drop ≥10 mmHg with increasing work, new arrhythmia/irregular pulse, pallor or cold sweat." },
    { front: "The 4-level angina scale?", back: "1 light, barely noticeable; 2 moderate, bothersome (stop exercising); 3 severe, very uncomfortable; 4 most severe pain ever experienced." },
    { front: "Why use RPE instead of HR formulas in heart failure?", back: "Beta-blockers blunt resting and peak HR, making formula targets invalid — anchor intensity to RPE 11–13 and symptoms." },
    { front: "Significance of ~2 kg weight gain over 2–3 days in heart failure?", back: "Fluid retention signalling early decompensation — withhold exercise, check congestion signs, activate the action plan/medical review." },
    { front: "Key breathing rule for cardiac resistance training?", back: "Exhale on exertion; never breath-hold — Valsalva causes dangerous BP spikes. Also avoid sustained maximal gripping." },
    { front: "Why is the cool-down mandatory after cardiac exercise?", back: "Abrupt stopping combines venous pooling with high catecholamines — the highest-risk window for hypotension and arrhythmia; taper ~10 minutes and observe." },
  ],
};

export default topic;
