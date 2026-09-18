import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "copd-rehabilitation",
  title: "COPD & Pulmonary Rehabilitation",
  category: "Cardiopulmonary",
  description:
    "Airflow limitation pathophysiology, the dyspnoea–deconditioning spiral, breathing techniques, airway clearance, and the structure, evidence and safe dosing of pulmonary rehabilitation.",
  difficulty: "Intermediate",
  estMinutes: 25,
  icon: "wind",
  keyTakeaways: [
    "COPD is persistent, largely irreversible airflow limitation from a mix of emphysema (parenchymal destruction) and chronic bronchitis (airway inflammation and mucus).",
    "Expiratory flow limitation causes air trapping and dynamic hyperinflation — the main mechanism of exertional breathlessness.",
    "The dyspnoea cycle drives disability: breathlessness → activity avoidance → deconditioning → worse breathlessness at ever-lower workloads.",
    "Core assessment: mMRC dyspnoea scale, 6-minute walk test, SpO2 monitoring and Borg ratings during exertion.",
    "Pursed-lip breathing, forward-lean positioning and paced breathing give patients immediate tools for controlling breathlessness.",
    "The Active Cycle of Breathing Techniques (ACBT) is the standard airway-clearance approach for productive patients.",
    "Pulmonary rehabilitation — supervised exercise plus education over 6–12 weeks — is one of the most effective and cost-effective interventions in COPD.",
    "Exercise at Borg 3–4 (moderate–somewhat severe) breathlessness; interval training lets severely limited patients reach an effective dose.",
    "Know your stopping rules: significant desaturation, chest pain, dizziness or unusual worsening symptoms end the session.",
  ],
  sections: [
    {
      slug: "pathophysiology",
      title: "Pathophysiology of Airflow Limitation",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Chronic obstructive pulmonary disease (COPD) is a common, preventable condition characterised by persistent respiratory symptoms and airflow limitation that is not fully reversible. It is usually caused by significant exposure to noxious particles — overwhelmingly cigarette smoke, plus biomass fuels and occupational dusts — on a background of individual susceptibility. Diagnosis requires spirometry: a post-bronchodilator FEV1/FVC ratio below 0.7.",
        },
        { kind: "image", illustration: "lungs", caption: "The lungs and airways: in COPD, small airways narrow and alveolar walls are destroyed, so the airways collapse early on expiration and gas becomes trapped." },
        {
          kind: "cards",
          items: [
            { title: "Emphysema", text: "Destruction of alveolar walls and loss of elastic recoil. The lungs lose their spring: airways are no longer held open by surrounding tissue and collapse during expiration, and the surface area for gas exchange shrinks.", icon: "wind" },
            { title: "Chronic bronchitis", text: "Chronic airway inflammation with mucous gland hypertrophy — productive cough for 3 months in each of 2 consecutive years. Thickened walls and mucus narrow the airway lumen.", icon: "droplets" },
            { title: "Air trapping & hyperinflation", text: "Slow expiration means the next breath starts before the last one finishes emptying. Lung volumes rise, the diaphragm flattens and works at mechanical disadvantage — worsening acutely during exertion (dynamic hyperinflation).", icon: "maximize" },
            { title: "Systemic effects", text: "COPD is more than a lung disease: skeletal muscle dysfunction, weight change, osteoporosis, cardiovascular disease, anxiety and depression are common and treatable comorbidities.", icon: "activity" },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Obstruction is expiratory: getting air out is the problem, so expiration is slow and incomplete",
            "Dynamic hyperinflation during activity is the principal mechanism of exertional dyspnoea",
            "A flattened diaphragm generates less pressure per contraction — accessory muscles take over",
            "Peripheral muscle dysfunction is a key, trainable driver of exercise limitation",
          ],
        },
        {
          kind: "pearls",
          items: [
            "This is why exercise helps even though the lungs don't change much: training conditions the muscles, lowering the ventilatory demand of any given task.",
          ],
        },
      ],
    },
    {
      slug: "dyspnoea-cycle",
      title: "The Dyspnoea Cycle & Deconditioning Spiral",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Breathlessness is frightening. People with COPD understandably avoid activities that provoke it — stairs, hills, carrying shopping. But inactivity deconditions the peripheral muscles, which then produce more lactate at lower workloads, demanding more ventilation from lungs that cannot supply it. Breathlessness now appears at even lighter activity, driving further avoidance.",
        },
        {
          kind: "steps",
          items: [
            { title: "Breathlessness on exertion", text: "Airflow limitation and dynamic hyperinflation make activity uncomfortable." },
            { title: "Fear and avoidance", text: "Activities that provoke dyspnoea are given up; anxiety amplifies the sensation of breathlessness itself." },
            { title: "Deconditioning", text: "Skeletal muscles weaken and lose oxidative capacity; the heart deconditions; weight and mood often worsen." },
            { title: "Worse dyspnoea at lower loads", text: "Deconditioned muscles demand more ventilation for the same task — breathlessness arrives sooner, and the spiral tightens towards social isolation and disability." },
          ],
        },
        {
          kind: "keypoints",
          title: "Breaking the cycle",
          items: [
            "The spiral is reversible at the muscle and confidence level even when lung function is fixed",
            "Pulmonary rehabilitation attacks every link: exercise reverses deconditioning, education and breathing strategies reduce fear",
            "Explaining this cycle to patients is itself therapeutic — breathlessness during exercise is safe and expected, not a sign of harm",
          ],
        },
        {
          kind: "pearls",
          items: [
            "\"It's your legs, not just your lungs\" — many patients stop exercise because of leg fatigue; peripheral muscle training is a primary target.",
          ],
        },
      ],
    },
    {
      slug: "assessment",
      title: "Assessment & Outcome Measures",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Physiotherapy assessment quantifies breathlessness, exercise capacity and oxygenation, screens for comorbidities and risk, and establishes baselines for pulmonary rehabilitation.",
        },
        {
          kind: "table",
          headers: ["mMRC grade", "Description"],
          rows: [
            ["0", "Breathless only with strenuous exercise"],
            ["1", "Short of breath hurrying on the level or walking up a slight hill"],
            ["2", "Walks slower than people of the same age on the level, or must stop for breath at own pace"],
            ["3", "Stops for breath after ~100 m or a few minutes on the level"],
            ["4", "Too breathless to leave the house, or breathless dressing/undressing"],
          ],
        },
        {
          kind: "steps",
          items: [
            { title: "History", text: "Smoking/exposure history, exacerbations and hospitalisations in the past year, cough and sputum pattern, mMRC grade, CAT score, activity levels, home oxygen, comorbidities, goals and fears." },
            { title: "Observation", text: "Breathing pattern (pursed lips, accessory muscle use, prolonged expiration), chest shape (hyperinflation), cyanosis, peripheral oedema, ability to speak in sentences." },
            { title: "6-minute walk test (6MWT)", text: "Walk as far as possible in 6 minutes along a 30 m course using standardised phrases; rests allowed. Record distance, SpO2, heart rate, and Borg dyspnoea/fatigue before and after. A change of ~30 m is clinically meaningful. It also screens for exertional desaturation and titrates oxygen." },
            { title: "SpO2 monitoring", text: "Rest and exertional oximetry. Note the baseline: many patients with severe COPD run 88–92% chronically. Watch the trend during exercise — desaturation below 88–90%, or a fall of ≥4%, needs action per local protocol." },
            { title: "Peripheral muscle & function", text: "Quadriceps strength, sit-to-stand tests (30-second or 1-minute STS), grip strength, balance and falls risk in older patients." },
          ],
        },
        {
          kind: "warning",
          title: "Assessment cautions",
          items: [
            "In chronic CO2 retainers, target SpO2 is usually 88–92% — over-oxygenation can worsen hypercapnia; follow the medically prescribed target range",
            "Postpone maximal testing during an acute exacerbation or unstable cardiac disease",
            "Use standardised 6MWT encouragement only — extra cheering changes the result",
          ],
        },
        {
          kind: "pearls",
          items: [
            "The mMRC and exacerbation history feed the GOLD ABE classification that guides medical therapy — speak the same language as the respiratory team.",
            "Pair every exercise-capacity result with the Borg (0–10) breathlessness score: distance tells you what they did, Borg tells you what it cost.",
          ],
        },
      ],
    },
    {
      slug: "breathing-techniques",
      title: "Breathing Techniques & Positioning",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Breathing strategies give patients immediate, drug-free control over dyspnoea. They work best when trained during calm periods and rehearsed until automatic, so they are available during episodes of severe breathlessness.",
        },
        {
          kind: "exercise",
          name: "Pursed-lip breathing",
          purpose: "Slow expiration and maintain airway back-pressure, splinting floppy airways open, reducing air trapping and slowing respiratory rate.",
          position: "Any position; teach first in relaxed sitting.",
          execution: "Breathe in gently through the nose for about 2 counts, then breathe out through softly pursed lips (as if cooling soup) for about 4 counts. Expiration should be relaxed and unforced — never blow hard.",
          dosage: "Practise 5–10 breaths several times daily; apply during and after any breathless activity, especially stairs and hills.",
          progression: "Use rhythmically during walking (e.g. in for 2 steps, out for 4) and to recover after exertion.",
          precautions: "Forced expiration defeats the purpose and can increase airway collapse — keep it gentle.",
        },
        {
          kind: "exercise",
          name: "Breathing control (relaxed diaphragmatic breathing)",
          purpose: "Reduce accessory-muscle overuse and anxiety-driven upper-chest breathing; the recovery phase of airway-clearance cycles.",
          position: "Relaxed sitting or high side lying, shoulders dropped, one hand resting on the abdomen.",
          execution: "Breathe gently and slowly so the abdomen rises under the hand on inspiration with minimal upper-chest movement, then let expiration fall out passively. \"Gentle, quiet breathing around your own resting rate.\"",
          dosage: "1–2 minutes at a time, several times daily and between active breathing cycles.",
          progression: "Use in progressively more upright and active situations, then during walking.",
          precautions: "In severe hyperinflation the diaphragm is flattened — expect modest abdominal movement; the aim is relaxation and pattern, not big excursion.",
        },
        {
          kind: "cards",
          items: [
            { title: "Forward-lean positioning", text: "Sitting leaning forward with forearms on thighs or a table (or standing leaning on a wall/trolley). Optimises the flattened diaphragm's length–tension and lets fixed arms assist accessory muscles — the classic rescue position for acute breathlessness.", icon: "armchair" },
            { title: "Paced breathing with activity", text: "Coordinate breath with effort: exhale on exertion (stand up, step up, lift) and time steps to breaths on stairs and hills. Prevents breath-holding spikes of dyspnoea.", icon: "footprints" },
            { title: "Fan therapy", text: "Cool airflow to the face (handheld fan) reduces the sensation of breathlessness via trigeminal stimulation — cheap, safe and evidence-supported.", icon: "fan" },
            { title: "Recovery routine", text: "Teach a fixed sequence for breathless episodes: stop → forward-lean position → pursed-lip breathing → breathing control until settled. Rehearsed routines beat panic.", icon: "life-buoy" },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Pursed-lip breathing = physiological PEEP: it splints airways and slows the rate",
            "Forward lean helps most in hyperinflated patients — it puts the diaphragm back on a workable length",
            "Train techniques when calm, apply them when breathless",
          ],
        },
      ],
    },
    {
      slug: "airway-clearance",
      title: "Airway Clearance: the Active Cycle of Breathing Techniques",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "For patients with productive cough (chronic bronchitis phenotype, and during exacerbations), the Active Cycle of Breathing Techniques (ACBT) is the standard, equipment-free airway-clearance method. It is a flexible cycle of three components that the patient adapts to their own secretions.",
        },
        {
          kind: "steps",
          items: [
            { title: "1. Breathing control", text: "Relaxed, gentle tidal breathing (as taught above) for 20–30 seconds — the rest phase that prevents fatigue and bronchospasm between active components." },
            { title: "2. Thoracic expansion exercises", text: "3–4 slow deep breaths in through the nose to full inspiration, with a 2–3 second inspiratory hold, then quiet relaxed expiration. The deep breaths and hold get air behind secretions via collateral ventilation channels." },
            { title: "3. Forced expiration technique (huffing)", text: "1–2 huffs — forced expirations through an open mouth and glottis (\"fogging a mirror\"). A long, low-volume huff moves distal secretions towards larger airways; a shorter high-volume huff clears proximal secretions, followed by a cough only when sputum is ready to come." },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Cycle order is flexible: breathing control between every active component; repeat ~10–20 minutes or until clear",
            "Huffing moves secretions with less airway collapse and less fatigue than repeated coughing",
            "Positioning (e.g. side lying) can be added to target specific lung regions; devices (PEP, oscillating PEP) are alternatives when ACBT alone is insufficient",
          ],
        },
        {
          kind: "pearls",
          items: [
            "The equal pressure point concept explains huffing: low-lung-volume huffs shift the compression point peripherally, milking distal secretions upward.",
            "Uncontrolled paroxysmal coughing is exhausting and can cause airway collapse and syncope — teach patients to replace it with the cycle.",
          ],
        },
      ],
    },
    {
      slug: "pulmonary-rehab",
      title: "Pulmonary Rehabilitation: Structure & Evidence",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Pulmonary rehabilitation (PR) is a structured programme of supervised exercise training plus education and self-management support, typically twice weekly for 6–12 weeks with home exercise between sessions. It is among the most effective and cost-effective interventions in COPD: strong evidence shows clinically important improvements in breathlessness, exercise capacity and quality of life, and PR after an exacerbation reduces readmissions.",
        },
        {
          kind: "cards",
          items: [
            { title: "Who to refer", text: "Patients limited by breathlessness (typically mMRC 2 or more, or functionally limited at lower grades), and anyone recently hospitalised with an exacerbation — ideally starting within 4 weeks of discharge.", icon: "user-check" },
            { title: "Exercise component", text: "The engine of the programme: aerobic training (walking, cycling) plus resistance training for upper and lower limbs, individually prescribed and progressed weekly.", icon: "dumbbell" },
            { title: "Education component", text: "Understanding COPD and medications, inhaler technique, breathing and clearance strategies, exacerbation action plans, nutrition, mood management, energy conservation and smoking cessation support.", icon: "book-open" },
            { title: "Outcomes measured", text: "6MWT or incremental/endurance shuttle walk, CAT or CRQ quality-of-life scores, mMRC and anxiety/depression screens — measured before and after the programme.", icon: "clipboard-check" },
          ],
        },
        {
          kind: "keypoints",
          title: "What the evidence says",
          items: [
            "Improves dyspnoea, exercise tolerance and health-related quality of life with large, clinically meaningful effects",
            "Post-exacerbation PR reduces hospital readmission risk",
            "Benefits fade over 12–18 months without maintenance — build the exit plan (community exercise, maintenance classes) from day one",
            "Contraindications are few: unstable cardiac disease and inability to exercise safely; comorbidity is the norm, not a barrier",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Completion, not referral, is the challenge — transport, breathlessness fear and depression are the common drop-out drivers; address them early.",
          ],
        },
      ],
    },
    {
      slug: "exercise-prescription",
      title: "Exercise Prescription in COPD",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Prescription follows normal training principles, dosed by symptoms: the modified Borg (0–10) breathlessness scale is the everyday intensity dial, targeting 3–4 (\"moderate\" to \"somewhat severe\") during aerobic work. Interval formats allow even severely limited patients to accumulate an effective training dose that continuous exercise would make impossible.",
        },
        { kind: "image", illustration: "heart", caption: "Aerobic training in pulmonary rehabilitation conditions the heart and peripheral muscles as much as the lungs — improved cardiovascular fitness lowers the ventilatory demand of any given task, easing breathlessness." },
        {
          kind: "table",
          headers: ["Format", "How", "Best for"],
          rows: [
            ["Continuous aerobic", "20–30+ min at ~60–80% of peak work rate or Borg 3–4, e.g. brisk walking or cycling", "Mild–moderate limitation; endurance building"],
            ["Interval aerobic", "Short work bouts (30 s–2 min) at higher intensity alternated with equal or longer rests, totalling 20–30 min", "Severe breathlessness or desaturators — similar training benefit with lower dyspnoea per bout"],
            ["Resistance training", "2–3×/week, 8–12 reps × 1–3 sets major muscle groups at a challenging load", "Quadriceps weakness, sarcopenia, functional decline; low ventilatory demand"],
            ["Functional & balance work", "Sit-to-stand, step-ups, carrying tasks, balance circuit", "Older patients, falls risk, translating gains into daily life"],
          ],
        },
        {
          kind: "exercise",
          name: "Interval walking programme",
          purpose: "Accumulate an effective aerobic dose despite severe ventilatory limitation.",
          position: "Level indoor course or treadmill; oximeter available for those with known desaturation.",
          execution: "Walk briskly to Borg 3–4 breathlessness for 1–2 minutes, then slow-walk or rest with pursed-lip breathing until Borg falls to 1–2; repeat. Total 20–30 minutes including rests.",
          dosage: "Most days of the week; supervised twice weekly within PR.",
          progression: "Lengthen work bouts, shorten rests, then increase pace; progress toward continuous walking where possible.",
          precautions: "Follow SpO2 rules (below); use prescribed ambulatory oxygen where provided; carry the reliever inhaler.",
        },
        {
          kind: "exercise",
          name: "Stationary cycling",
          purpose: "Lower-limb aerobic training with less desaturation than walking in many patients, and easy workload titration.",
          position: "Upright cycle ergometer, saddle height allowing slight knee bend at the bottom of the stroke.",
          execution: "After a gentle warm-up, cycle at a resistance producing Borg 3–4 breathlessness; use pursed-lip breathing rhythmically with pedalling.",
          dosage: "20–30 minutes (continuous or in intervals), 3–5×/week.",
          progression: "Increase duration first, then resistance; reassess prescription from the repeat exercise test.",
          precautions: "Stop for chest pain, light-headedness or SpO2 below the agreed threshold.",
        },
        {
          kind: "exercise",
          name: "Sit-to-stand strength training",
          purpose: "Quadriceps strengthening — the most consistently dysfunctional muscle group in COPD — using a functional task.",
          position: "Firm chair, feet back under the knees; progress by lowering seat height or adding a weighted backpack.",
          execution: "Stand and sit with control (2 s up, 3 s down), exhaling on the effort of standing; avoid breath-holding.",
          dosage: "8–12 reps × 2–3 sets, 2–3×/week.",
          progression: "Lower seat, add load, or slow the lowering phase; progress to step-ups.",
          precautions: "Coordinate breathing with effort to avoid Valsalva; rest between sets until Borg ≤2.",
        },
        {
          kind: "exercise",
          name: "Supported upper-limb training",
          purpose: "Arm endurance for daily tasks — unsupported arm activity is disproportionately breathless in COPD because accessory muscles must breathe and move the arms at once.",
          position: "Sitting; light dumbbells (0.5–2 kg) or resistance band.",
          execution: "Rhythmic shoulder flexion/abduction raises and band rows, exhaling on effort, at a pace that keeps breathlessness at Borg ≤4.",
          dosage: "8–12 reps × 2 sets per movement, 2–3×/week.",
          progression: "Increase load modestly, then add unsupported endurance tasks (shelf-loading, hair-brushing simulation).",
          precautions: "Expect higher dyspnoea than leg work at the same effort — pace and pause accordingly.",
        },
        {
          kind: "keypoints",
          items: [
            "Dose intensity by Borg 3–4 breathlessness, not by heart rate formulas (often unreliable with COPD medications)",
            "Interval training is the key that unlocks training for the severely limited",
            "Resistance work has low ventilatory cost — often the easiest place to start",
            "Always pair training with the breathing techniques already taught",
          ],
        },
      ],
    },
    {
      slug: "precautions",
      title: "Precautions, SpO2 Rules & When to Stop",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Exercise in COPD is safe when screened and monitored, but every clinician needs explicit stopping rules. Follow local protocols and the individual's medically prescribed oxygen targets — the figures below are widely used defaults.",
        },
        {
          kind: "warning",
          title: "Oxygen saturation rules",
          items: [
            "Know the individual target: typically 88–92% for chronic CO2 retainers, ~94–98% otherwise — follow the prescribed range",
            "Pause or slow exercise if SpO2 falls below ~88–90% or drops ≥4% from baseline; recover with rest, positioning and pursed-lip breathing",
            "Persistent desaturation despite rest ends the session and is reported to the team — the patient may need oxygen assessment",
            "Patients on ambulatory oxygen exercise WITH their oxygen at the prescribed flow; do not adjust flow outside the prescription without medical direction",
          ],
        },
        {
          kind: "redflags",
          items: [
            "Chest pain, palpitations or suspected arrhythmia during exercise — stop and seek medical review",
            "Dizziness, near-syncope, confusion or unusual severe breathlessness disproportionate to effort",
            "New or worsening peripheral oedema, or haemoptysis — report before continuing any programme",
            "Fever with purulent sputum and increased breathlessness — likely exacerbation; postpone training and follow the action plan",
          ],
        },
        {
          kind: "keypoints",
          title: "Session safety checklist",
          items: [
            "Reliever inhaler present and accessible; oxygen at prescribed flow if used",
            "Baseline SpO2, heart rate and Borg recorded before starting",
            "Defer training during acute exacerbations and unstable cardiac states",
            "High breathlessness (Borg 3–4) is a training target, not a danger sign — distinguish expected dyspnoea from red-flag symptoms",
          ],
        },
      ],
    },
    {
      slug: "exacerbations",
      title: "Exacerbation Awareness",
      estMinutes: 1,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "An exacerbation is an acute worsening of respiratory symptoms beyond normal day-to-day variation — typically increased breathlessness, cough, sputum volume or purulence — often infection-triggered. Exacerbations accelerate decline, drive hospitalisation, and each one increases the risk of the next, so recognition and early action matter.",
        },
        {
          kind: "keypoints",
          title: "The physiotherapist's role",
          items: [
            "Teach patients their early warning signs and reinforce the written exacerbation action plan (when to start rescue medication, when to call for help)",
            "During exacerbations: airway clearance (ACBT) if sputum is a feature, breathing control, positioning, and gentle mobility as tolerated",
            "After exacerbations: restart activity promptly and refer to pulmonary rehabilitation — ideally commencing within 4 weeks of discharge",
            "Expect a temporary drop in exercise tolerance post-exacerbation; re-dose the programme rather than abandoning it",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Two or more exacerbations a year (or one hospitalisation) marks a high-risk patient — flag for medical optimisation as well as rehab.",
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
            "COPD = emphysema (lost recoil) + chronic bronchitis (inflamed, mucus-filled airways) → expiratory flow limitation, air trapping, dynamic hyperinflation",
            "Dyspnoea cycle: breathlessness → avoidance → deconditioning → worse breathlessness; reversible at the muscle level",
            "Assess: mMRC, 6MWT (~30 m = meaningful change), SpO2 at rest and on exertion, Borg 0–10, sit-to-stand strength",
            "Breathing tools: pursed-lip breathing, breathing control, forward-lean position, paced breathing, fan therapy",
            "ACBT = breathing control + thoracic expansion (with hold) + huffing; replaces exhausting coughing",
            "Pulmonary rehab: supervised exercise + education, 6–12 weeks — improves dyspnoea, capacity and quality of life; post-exacerbation PR cuts readmissions",
            "Prescribe at Borg 3–4; use intervals for the severely limited; resistance work for quadriceps",
            "Stop rules: SpO2 below ~88–90% or ≥4% fall, chest pain, dizziness; retainers target 88–92%",
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
      text: "What spirometry finding defines airflow limitation in COPD?",
      options: [
        "Post-bronchodilator FEV1/FVC ratio below 0.7",
        "FVC greater than predicted",
        "Peak expiratory flow above 500 L/min",
        "FEV1/FVC ratio above 0.8",
      ],
      correctIndex: 0,
      explanation:
        "COPD is confirmed by a post-bronchodilator FEV1/FVC below 0.7, demonstrating airflow limitation that is not fully reversible. FEV1 percent-predicted then grades severity. Symptoms and exacerbation history complete the clinical picture.",
      difficulty: "Easy",
      tags: ["assessment", "pathology"],
      sectionSlug: "pathophysiology",
    },
    {
      text: "How does emphysema cause airway collapse during expiration?",
      options: [
        "Mucus physically plugs the trachea",
        "Destruction of alveolar walls removes the elastic recoil and radial traction that hold small airways open",
        "The diaphragm pushes the airways closed",
        "Cartilage rings grow into the small airways",
      ],
      correctIndex: 1,
      explanation:
        "Alveolar wall destruction destroys the elastic tissue that both drives expiration (recoil) and tethers small airways open (radial traction). Without this support, airways collapse during expiration, trapping gas — the basis of hyperinflation.",
      difficulty: "Medium",
      tags: ["pathology", "anatomy"],
      sectionSlug: "pathophysiology",
    },
    {
      text: "What is dynamic hyperinflation?",
      options: [
        "Permanent enlargement of the chest wall",
        "Progressive air trapping during activity as breathing rate rises and incomplete expiration stacks volume in the lungs",
        "A voluntary deep-breathing technique",
        "Fluid accumulation in the pleural space during exercise",
      ],
      correctIndex: 1,
      explanation:
        "When respiratory rate rises during activity, the already-slow expiration has even less time to finish, so each breath starts from a higher lung volume. Volume stacks up, the inspiratory reserve shrinks and the diaphragm flattens further — producing the intense exertional dyspnoea typical of COPD.",
      difficulty: "Medium",
      tags: ["pathology"],
      sectionSlug: "pathophysiology",
    },
    {
      text: "In the deconditioning spiral, why does inactivity worsen breathlessness even though lung function is unchanged?",
      options: [
        "Inactivity directly destroys more alveoli",
        "Deconditioned muscles produce lactate at lower workloads, demanding more ventilation for the same task",
        "Resting increases mucus production tenfold",
        "Breathlessness is purely psychological in COPD",
      ],
      correctIndex: 1,
      explanation:
        "Deconditioned peripheral muscles lose oxidative capacity and rely on anaerobic metabolism earlier, generating lactate and CO2 that drive ventilation. The limited respiratory system cannot meet the higher demand, so dyspnoea appears at ever-lighter activity. This is why exercise training reduces breathlessness without changing FEV1.",
      difficulty: "Medium",
      tags: ["pathology", "exercise-therapy"],
      sectionSlug: "dyspnoea-cycle",
    },
    {
      text: "A patient walks slower than their peers on level ground because of breathlessness and stops for breath walking at their own pace. What mMRC grade is this?",
      options: ["Grade 0", "Grade 1", "Grade 2", "Grade 4"],
      correctIndex: 2,
      explanation:
        "mMRC grade 2 describes walking slower than contemporaries on the level or having to stop for breath at one's own pace. Grade 2 or above is a conventional referral threshold for pulmonary rehabilitation. Grade 4 means too breathless to leave the house or breathless on dressing.",
      difficulty: "Medium",
      tags: ["assessment"],
      sectionSlug: "assessment",
    },
    {
      text: "Which statement about the 6-minute walk test is correct?",
      options: [
        "The patient must not rest at any point during the test",
        "It is performed with continuous vigorous verbal encouragement to maximise distance",
        "It uses standardised phrases, allows rests, and a ~30 m change in distance is clinically meaningful",
        "It measures maximal oxygen uptake directly",
      ],
      correctIndex: 2,
      explanation:
        "The 6MWT is a self-paced submaximal test along a 30 m course using only standardised encouragement; patients may rest. Around 30 m is the commonly used minimal clinically important difference. It also reveals exertional desaturation and monitors response to rehabilitation.",
      difficulty: "Medium",
      tags: ["assessment"],
      sectionSlug: "assessment",
    },
    {
      text: "Why is a target SpO2 of 88–92% used for patients with chronic CO2 retention?",
      options: [
        "Their oximeters are inaccurate above 92%",
        "Excessive oxygen can worsen hypercapnia in chronic retainers, so a lower target balances oxygenation against CO2 rise",
        "Oxygen is expensive, so lower targets save money",
        "All COPD patients must be kept below 92% regardless of retention",
      ],
      correctIndex: 1,
      explanation:
        "In chronic CO2 retainers, over-oxygenation can worsen hypercapnia (through ventilation–perfusion changes, the Haldane effect and reduced hypoxic drive), risking respiratory acidosis. The prescribed 88–92% range maintains adequate oxygenation while limiting that risk. Non-retainers use a standard higher target.",
      difficulty: "Hard",
      tags: ["precautions", "pathology"],
      sectionSlug: "assessment",
    },
    {
      text: "What is the primary mechanism by which pursed-lip breathing reduces breathlessness?",
      options: [
        "It strengthens the lips and cheeks",
        "It creates expiratory back-pressure that splints floppy airways open, reducing air trapping, and slows respiratory rate",
        "It increases respiratory rate to blow off CO2 faster",
        "It closes the glottis to build intrathoracic pressure",
      ],
      correctIndex: 1,
      explanation:
        "The pursed lips act as an expiratory resistance, maintaining positive airway pressure that holds unstable airways open longer — a form of self-generated PEEP. Emptying improves, trapping falls, and the slower pattern reduces the work and sensation of breathing. Expiration must stay gentle: forcing it promotes collapse.",
      difficulty: "Easy",
      tags: ["management", "pathology"],
      sectionSlug: "breathing-techniques",
    },
    {
      text: "Why does forward-lean sitting relieve severe breathlessness in hyperinflated patients?",
      options: [
        "It compresses the abdomen to force air out",
        "It improves the length–tension position of the flattened diaphragm and lets fixed arms assist accessory muscles",
        "It increases venous return to the heart only",
        "It works purely by distraction",
      ],
      correctIndex: 1,
      explanation:
        "Leaning forward with supported arms pushes abdominal contents up, doming the flattened diaphragm back towards a mechanically effective length, while fixing the shoulder girdle so accessory muscles can act on the ribcage. It is the classic rescue position and should be actively taught, not just observed.",
      difficulty: "Medium",
      tags: ["management", "anatomy"],
      sectionSlug: "breathing-techniques",
    },
    {
      text: "The three components of the Active Cycle of Breathing Techniques are:",
      options: [
        "Breathing control, thoracic expansion exercises, forced expiration technique (huffing)",
        "Pursed-lip breathing, coughing, breath-holding",
        "Postural drainage, percussion, vibration",
        "Incentive spirometry, deep suction, assisted cough",
      ],
      correctIndex: 0,
      explanation:
        "ACBT cycles breathing control (relaxed tidal breathing as rest), 3–4 thoracic expansion breaths with an inspiratory hold (air behind secretions via collateral channels), and huffs of varying volume to mobilise then clear secretions — with a cough only when sputum reaches the proximal airways.",
      difficulty: "Easy",
      tags: ["management", "assessment"],
      sectionSlug: "airway-clearance",
    },
    {
      text: "Why is a long huff at low lung volume used before a short huff at high lung volume in ACBT?",
      options: [
        "Low-volume huffs move the equal pressure point peripherally, mobilising distal secretions towards larger airways first",
        "High-volume huffs are dangerous and should never be used",
        "Low-volume huffs prevent any airway compression",
        "The order is purely traditional with no physiological basis",
      ],
      correctIndex: 0,
      explanation:
        "Huffing from low lung volume shifts the equal pressure point towards the periphery, squeezing distal airways and milking secretions upward; a subsequent higher-volume huff (or cough) then clears them from proximal airways. Huffing achieves this with less airway collapse and fatigue than repeated coughing.",
      difficulty: "Hard",
      tags: ["pathology", "management"],
      sectionSlug: "airway-clearance",
    },
    {
      text: "Which best describes the structure of a standard pulmonary rehabilitation programme?",
      options: [
        "A one-off education lecture about smoking",
        "Supervised exercise training plus education/self-management, usually twice weekly for 6–12 weeks with home exercise",
        "Daily inpatient chest physiotherapy for a year",
        "Unsupervised gym membership with no assessment",
      ],
      correctIndex: 1,
      explanation:
        "PR combines individually prescribed, progressed aerobic and resistance training with structured education (inhalers, action plans, breathing strategies, nutrition, mood), typically 2 supervised sessions weekly over 6–12 weeks plus home practice, with outcomes measured before and after.",
      difficulty: "Easy",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "pulmonary-rehab",
    },
    {
      text: "What does the evidence show about pulmonary rehabilitation after a COPD exacerbation?",
      options: [
        "It is contraindicated for 6 months after discharge",
        "Started soon after discharge (ideally within 4 weeks), it reduces the risk of hospital readmission",
        "It only helps patients with mild disease",
        "It permanently restores FEV1 to normal",
      ],
      correctIndex: 1,
      explanation:
        "Post-exacerbation PR improves exercise capacity and quality of life and reduces readmission risk, with guidelines recommending commencement within around 4 weeks of discharge. PR does not normalise lung function — its effects come through muscle conditioning, breathing efficiency and self-management.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "pulmonary-rehab",
    },
    {
      text: "During aerobic training in COPD, what Borg (0–10) breathlessness rating is generally targeted?",
      options: ["0–1 (nothing to very slight)", "3–4 (moderate to somewhat severe)", "7–8 (very severe)", "10 (maximal)"],
      correctIndex: 1,
      explanation:
        "A Borg rating of 3–4 represents a training stimulus that is effective yet sustainable and safe. Heart-rate formulas are unreliable in COPD (medications, deconditioning), so symptom-based dosing with the Borg scale is the practical standard. Patients need reassurance that this level of breathlessness is expected and safe.",
      difficulty: "Easy",
      tags: ["exercise-therapy"],
      sectionSlug: "exercise-prescription",
    },
    {
      text: "Why is interval training particularly valuable for patients with severe COPD?",
      options: [
        "It avoids using the legs, which are usually too weak",
        "Short work bouts with recovery limit dynamic hyperinflation and dyspnoea per bout, letting patients accumulate a training dose they could not sustain continuously",
        "It eliminates any need for supervision",
        "It trains only the respiratory muscles",
      ],
      correctIndex: 1,
      explanation:
        "In severe disease, continuous exercise quickly provokes intolerable dyspnoea via dynamic hyperinflation. Breaking work into short higher-intensity bouts with recovery intervals keeps ventilation and hyperinflation in check while total training work — and therefore adaptation — remains comparable to continuous training.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "exercise-prescription",
    },
    {
      text: "Why do unsupported arm activities (hair brushing, shelf loading) provoke disproportionate breathlessness in COPD?",
      options: [
        "The arms have no blood supply in COPD",
        "Accessory muscles must simultaneously assist ventilation and move the arms, so arm elevation steals ventilatory support",
        "Arm exercise is impossible with hyperinflation",
        "It is purely a fear response",
      ],
      correctIndex: 1,
      explanation:
        "In COPD, accessory muscles (scalenes, pectorals, trapezius) contribute significantly to breathing. Unsupported arm activity recruits these same muscles for postural and arm work, reducing their ventilatory contribution and disrupting breathing patterns — hence specific supported and paced upper-limb training within rehabilitation.",
      difficulty: "Hard",
      tags: ["anatomy", "exercise-therapy", "clinical-reasoning"],
      sectionSlug: "exercise-prescription",
    },
    {
      text: "During a session, a patient's SpO2 falls from 93% to 86% and does not recover with rest and breathing control. What is the correct response?",
      options: [
        "Push on — desaturation is normal and irrelevant",
        "End the session and report to the team; the patient may need formal oxygen assessment",
        "Double their oxygen flow rate yourself and continue indefinitely",
        "Ask the patient to hold their breath to reset the oximeter",
      ],
      correctIndex: 1,
      explanation:
        "A fall below ~88–90% (and ≥4% from baseline) warrants pausing; persistent desaturation despite rest ends the session and must be reported — it may indicate the need for ambulatory oxygen assessment or medical review. Oxygen flow is adjusted only within the medical prescription, not ad hoc by the therapist.",
      difficulty: "Medium",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "precautions",
    },
    {
      text: "Which symptom cluster suggests a COPD exacerbation rather than expected training breathlessness?",
      options: [
        "Borg 4 breathlessness during brisk walking that settles with rest",
        "Increased breathlessness beyond usual variation with increased sputum volume and purulence, possibly with fever",
        "Mild muscle soreness the day after resistance training",
        "Slightly higher heart rate during intervals",
      ],
      correctIndex: 1,
      explanation:
        "An exacerbation is an acute worsening beyond day-to-day variation — more breathless, more cough, more or discoloured sputum, often infective. Training is deferred, the action plan activated and the team informed. Target-level exertional breathlessness that settles with rest is an expected, safe part of training.",
      difficulty: "Easy",
      tags: ["clinical-reasoning", "precautions"],
      sectionSlug: "exacerbations",
    },
    {
      text: "Which statement about the durability of pulmonary rehabilitation benefits is accurate?",
      options: [
        "Benefits are permanent after a single programme",
        "Benefits decline over 12–18 months without maintenance, so an ongoing exercise plan should be built from the start",
        "Benefits disappear within one week of finishing",
        "Only quality of life improves; exercise capacity never changes",
      ],
      correctIndex: 1,
      explanation:
        "PR produces clinically important gains in dyspnoea, exercise capacity and quality of life, but these wane over about 12–18 months if activity is not maintained. Effective programmes plan the exit from day one: community classes, maintenance groups, home programmes and re-referral after exacerbations.",
      difficulty: "Hard",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "pulmonary-rehab",
    },
  ],
  flashcards: [
    { front: "Spirometric definition of COPD?", back: "Post-bronchodilator FEV1/FVC ratio below 0.7 — airflow limitation that is not fully reversible." },
    { front: "Two overlapping pathologies within COPD?", back: "Emphysema (alveolar destruction, lost elastic recoil and radial traction) and chronic bronchitis (airway inflammation, mucus hypersecretion, productive cough ≥3 months in 2 consecutive years)." },
    { front: "What is dynamic hyperinflation?", back: "Progressive air trapping during activity: expiration can't finish before the next breath, lung volume stacks up, the diaphragm flattens — the main driver of exertional dyspnoea." },
    { front: "Describe the dyspnoea–deconditioning cycle.", back: "Breathlessness → activity avoidance → muscle deconditioning → more ventilation needed per task → breathlessness at lighter loads → further avoidance. Reversible with training." },
    { front: "mMRC grade 2 (typical PR referral threshold)?", back: "Walks slower than peers on the level, or must stop for breath when walking at own pace." },
    { front: "Key numbers for the 6-minute walk test?", back: "30 m course, standardised phrases, rests allowed; record distance, SpO2, HR and Borg; ~30 m change is clinically meaningful." },
    { front: "How does pursed-lip breathing work?", back: "Gentle expiration against pursed lips creates back-pressure (self-PEEP) that splints airways open, reduces air trapping and slows the breathing rate — roughly 2 counts in, 4 counts out." },
    { front: "Why does forward-lean positioning ease breathlessness?", back: "It domes the flattened diaphragm to a better length–tension position and fixes the arms so accessory muscles can assist ventilation." },
    { front: "The three components of ACBT?", back: "Breathing control (rest phase), thoracic expansion exercises (deep breaths + 2–3 s hold), forced expiration technique (long low-volume then short high-volume huffs)." },
    { front: "Standard structure and effects of pulmonary rehabilitation?", back: "Supervised exercise + education, ~2×/week for 6–12 weeks: improves dyspnoea, exercise capacity and quality of life; post-exacerbation PR reduces readmissions; benefits fade in 12–18 months without maintenance." },
    { front: "Exercise intensity dosing in COPD?", back: "Modified Borg 0–10 breathlessness of 3–4 during aerobic training; intervals for severely limited patients; resistance 8–12 reps × 1–3 sets, 2–3×/week." },
    { front: "SpO2 rules during exercise?", back: "Follow the prescribed target (88–92% for CO2 retainers, ~94–98% otherwise); pause if SpO2 <88–90% or falls ≥4%; persistent desaturation ends the session and is reported." },
  ],
};

export default topic;
