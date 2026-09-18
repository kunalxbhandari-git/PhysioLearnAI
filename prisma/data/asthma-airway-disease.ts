import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "asthma-airway-disease",
  title: "Asthma & Airway Conditions",
  category: "Cardiopulmonary",
  description:
    "Understand asthma pathophysiology, triggers and assessment, exercise-induced bronchoconstriction, breathing retraining and secretion clearance — and the red flags of a life-threatening attack every physiotherapist must know.",
  difficulty: "Beginner",
  estMinutes: 28,
  icon: "wind",
  keyTakeaways: [
    "Asthma is chronic airway inflammation with variable, largely reversible airflow obstruction — reversibility is what separates it from COPD.",
    "Triggers are individual: allergens, viruses, exercise, cold air, irritants and stress; identifying a patient's pattern is half the management.",
    "Exercise-induced bronchoconstriction is common, manageable, and never a reason to avoid sport — a graded warm-up exploits the refractory period.",
    "Peak flow variability and symptom patterns underpin monitoring; dysfunctional breathing frequently coexists and mimics poor asthma control.",
    "Breathing retraining (nasal, slower, lower-chest patterns) improves symptoms and quality of life as an adjunct — it does not treat inflammation.",
    "Exercise is beneficial in asthma: aerobic training improves fitness and symptom control without worsening the disease.",
    "In bronchiectasis, daily secretion clearance (ACBT, gravity-assisted positions, PEP devices) is the physiotherapy cornerstone.",
    "A silent chest, inability to complete sentences, exhaustion or cyanosis mark a life-threatening attack — call for emergency help immediately.",
  ],
  sections: [
    {
      slug: "pathophysiology",
      title: "Asthma Pathophysiology",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Asthma is a chronic inflammatory disease of the airways characterised by three interacting features: airway inflammation, bronchial hyperresponsiveness (an exaggerated tendency of the airways to narrow in response to triggers), and variable airflow obstruction that reverses either spontaneously or with treatment.",
        },
        { kind: "image", illustration: "lungs", caption: "The airways in asthma: smooth muscle around the bronchi constricts, the inflamed mucosa swells and mucus increases — narrowing the lumen and producing wheeze, chest tightness and breathlessness." },
        {
          kind: "cards",
          items: [
            { title: "Bronchoconstriction", text: "Airway smooth muscle contracts in response to triggers — the rapid, reversible component relieved by bronchodilators (beta-2 agonists).", icon: "minimize-2" },
            { title: "Airway inflammation", text: "Often eosinophilic, driven by Th2/allergic pathways: mucosal oedema, mucus hypersecretion and epithelial damage. The persistent component targeted by inhaled corticosteroids.", icon: "flame" },
            { title: "Hyperresponsiveness", text: "Twitchy airways that over-narrow to stimuli (exercise, cold air, smoke) that barely affect healthy lungs.", icon: "zap" },
            { title: "Remodelling", text: "With long-standing poorly controlled disease, structural change (smooth muscle hypertrophy, basement membrane thickening) can make obstruction less reversible.", icon: "layers" },
          ],
        },
        {
          kind: "table",
          headers: ["Feature", "Asthma", "COPD"],
          rows: [
            ["Typical onset", "Often childhood/young adult; any age", "Usually >40 years, after smoking/inhalational exposure"],
            ["Main cause", "Atopy/allergy, genetic predisposition; triggers", "Smoking and noxious particles/gases"],
            ["Airflow obstruction", "Variable and largely reversible", "Progressive and largely fixed (partial reversibility possible)"],
            ["Symptom pattern", "Episodic — worse at night/early morning, trigger-related, symptom-free intervals", "Persistent and slowly progressive breathlessness; chronic productive cough common"],
            ["Inflammation type", "Predominantly eosinophilic (Th2)", "Predominantly neutrophilic"],
            ["Diurnal variability", "Marked (peak flow varies day to day and within days)", "Minimal"],
            ["Response to bronchodilator", "Significant improvement typical", "Limited improvement"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "Between attacks, lung function and examination can be completely normal — a normal check-up does not exclude asthma.",
            "Overlap exists: some older patients show features of both asthma and COPD; treat the dominant pattern and defer labels to the medical team.",
          ],
        },
      ],
    },
    {
      slug: "triggers-phenotypes",
      title: "Triggers & Phenotypes",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Asthma is not one disease but a family of phenotypes sharing the final pathway of variable airflow obstruction. Recognising a patient's triggers and pattern personalises everything from warm-up design to the timing of outdoor sessions.",
        },
        {
          kind: "cards",
          items: [
            { title: "Allergic (atopic) asthma", text: "The most common phenotype, often starting in childhood with eczema and hay fever ('atopic march'). Triggers: house dust mite, pollens, animal dander, moulds.", icon: "flower" },
            { title: "Non-allergic asthma", text: "Adult onset, often without atopy; may be more persistent and less steroid-responsive.", icon: "user" },
            { title: "Exercise-induced", text: "Bronchoconstriction triggered by exertion — covered in its own section; frequently coexists with other phenotypes.", icon: "activity" },
            { title: "Occupational asthma", text: "Sensitisers at work (isocyanates, flour, latex). Suspect when symptoms improve on holidays and weekends.", icon: "briefcase" },
          ],
        },
        {
          kind: "list",
          items: [
            "Common triggers: viral upper respiratory infections (the leading cause of exacerbations), allergens, exercise, cold dry air, cigarette smoke and vaping aerosols, air pollution, strong odours/sprays",
            "Drugs: aspirin/NSAIDs in sensitive individuals; beta-blockers (including some eye drops) can provoke bronchospasm",
            "Emotion and stress: laughter, crying and anxiety can trigger symptoms — real physiology, not 'all in the head'",
            "Hormonal and reflux-related patterns: perimenstrual worsening and gastro-oesophageal reflux are recognised contributors",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Ask every patient: 'What sets yours off?' — trigger literacy is the cheapest intervention in asthma care.",
            "Improvement away from work is a screening question for occupational asthma that should always be escalated for formal assessment.",
          ],
        },
      ],
    },
    {
      slug: "exercise-induced-bronchoconstriction",
      title: "Exercise-Induced Bronchoconstriction (EIB)",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Exercise-induced bronchoconstriction is transient airway narrowing during or — classically — 5 to 15 minutes after vigorous exercise. The dominant mechanism is airway drying: high ventilation with cool, dry air dehydrates the airway surface, triggering mediator release and smooth muscle contraction. It affects many people with asthma and also occurs in athletes without classical asthma, especially in winter and pool sports.",
        },
        {
          kind: "keypoints",
          title: "Recognising EIB",
          items: [
            "Cough, wheeze, chest tightness or unusual breathlessness peaking shortly after exercise stops, resolving within 30–60 minutes",
            "Worse with cold, dry air and high sustained ventilation (running) — better with warm humid air and interval-type effort",
            "Distinguish from simple deconditioning (breathless during, recovers immediately) and from exercise-induced laryngeal obstruction (inspiratory stridor, throat-localised, peaks during exercise)",
          ],
        },
        {
          kind: "heading",
          text: "The warm-up (refractory period) effect",
        },
        {
          kind: "paragraph",
          text: "A structured warm-up — for example 10–15 minutes of graded aerobic work including short repeated sprints or intervals — can induce a refractory period of up to about two hours during which subsequent exercise provokes substantially less bronchoconstriction. This is one of the most practical non-drug tools in the physiotherapist's kit for the exercising asthmatic.",
        },
        {
          kind: "cards",
          items: [
            { title: "Management for athletes", text: "Pre-exercise bronchodilator as prescribed (typically 10–15 minutes before), structured interval warm-up, and good baseline control with preventer therapy — poorly controlled asthma is the usual cause of troublesome EIB.", icon: "medal" },
            { title: "Environmental tactics", text: "In cold weather: warm up indoors, cover nose and mouth with a scarf or buff to warm and humidify air, prefer nasal breathing at lower intensities.", icon: "thermometer" },
            { title: "Sport choice reality", text: "No sport is forbidden. Swimming's warm humid air is well tolerated (see the pool-chlorine note later); elite endurance and winter-sport athletes have higher EIB prevalence yet compete at the highest level.", icon: "trophy" },
            { title: "Reliever access", text: "The reliever inhaler travels to every session — coach, therapist and athlete all know where it is.", icon: "briefcase" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Symptoms peaking after exercise, not during, is the classic EIB signature — breathlessness only during effort is more often fitness or breathing-pattern related.",
            "An athlete 'growing out of' their inhaler use before big events is a red flag for undertreated asthma, not recovery.",
          ],
        },
      ],
    },
    {
      slug: "assessment",
      title: "Assessment: Peak Flow, Patterns & Breathing Dysfunction",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Diagnosis rests on demonstrating variable airflow obstruction (spirometry with bronchodilator reversibility, peak flow variability, or challenge testing) — a medical process. The physiotherapist's assessment adds the functional layer: symptom patterns, exercise tolerance, breathing pattern and inhaler practicalities.",
        },
        {
          kind: "cards",
          items: [
            { title: "Peak expiratory flow (PEF)", text: "A simple hand-held measure of maximal expiratory flow. Best of three, compared with the patient's personal best. Marked diurnal variability (classically >20%) and morning 'dips' suggest poor control; falling PEF drives action-plan steps.", icon: "gauge" },
            { title: "Symptom pattern questions", text: "Night waking with cough or wheeze? Reliever use more than about twice a week? Interference with activity or sport? Any time off work/school? These map directly to standard control questions.", icon: "moon" },
            { title: "Exercise response", text: "When in exercise do symptoms occur (during vs 5–15 min after)? Recovery time? Response to warm-up and reliever? This separates EIB, deconditioning and breathing-pattern problems.", icon: "activity" },
            { title: "History context", text: "Atopy (eczema, rhinitis), triggers, smoking/vaping, occupation, adherence and inhaler technique — the whole picture, not just the lungs.", icon: "clipboard" },
          ],
        },
        {
          kind: "heading",
          text: "Breathing pattern disorders & dysfunctional breathing",
        },
        {
          kind: "paragraph",
          text: "A substantial minority of people with asthma also have a breathing pattern disorder — habitual upper-chest, mouth-open, high-frequency breathing with frequent sighing, sometimes with frank hyperventilation. It produces breathlessness, chest tightness, tingling and dizziness that mimic poor asthma control, driving reliever overuse and escalating medication when the actual problem is the pattern. The Nijmegen Questionnaire is a widely used screening tool for hyperventilation-related symptoms (a score above 23/64 is the traditional cut-off suggesting dysfunctional breathing), though it is a screen, not a diagnosis.",
        },
        {
          kind: "keypoints",
          title: "Clues to a breathing pattern disorder",
          items: [
            "Breathlessness disproportionate to objective measures (good PEF/spirometry yet very symptomatic)",
            "Frequent sighing, yawning, breath-holding; upper-chest and accessory-muscle dominance at rest",
            "Symptoms triggered by talking, stress or odours more than classic allergens; tingling fingers or light-headedness",
            "Poor response to increasing asthma medication — and both conditions can and do coexist",
          ],
        },
        {
          kind: "redflags",
          items: [
            "Suspected asthma that is undiagnosed or unmonitored — refer for medical diagnosis before exercise programmes",
            "Escalating reliever use or falling peak flows — arrange urgent medical review of control",
            "Features of an acute severe attack during assessment — stop and follow emergency procedures",
          ],
        },
      ],
    },
    {
      slug: "breathing-retraining",
      title: "Breathing Retraining",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Breathing retraining teaches a slower, gentler, nose-based, lower-chest breathing pattern at rest and during daily activity. Randomised trials (including physiotherapist-delivered programmes) show clinically meaningful improvements in symptoms, quality of life and reliever overuse in adults whose asthma remains symptomatic despite medication. The honest caveat: retraining improves how breathing feels and is used — it does not reduce airway inflammation, and preventer medication continues unchanged unless the medical team steps it down.",
        },
        {
          kind: "cards",
          items: [
            { title: "Buteyko concept", text: "Emphasises nasal breathing, reduced-volume breathing and breath-hold ('control pause') practice on the premise of correcting habitual over-breathing. Evidence: improved symptom control and less reliever use in several trials; no consistent change in lung function.", icon: "wind" },
            { title: "Papworth concept", text: "A physiotherapy package combining diaphragmatic, nose-breathing retraining with relaxation and stress management, integrated into speech and activity. Evidence: improved symptoms and mood in trial settings; again, no change in objective lung function.", icon: "heart" },
            { title: "Why nasal breathing?", text: "The nose filters, warms and humidifies air — directly countering the airway-drying trigger of bronchoconstriction — and naturally slows and reduces breathing volume.", icon: "shield" },
            { title: "Who benefits most", text: "Patients with symptomatic asthma plus features of dysfunctional breathing, reliever overuse or high symptom burden despite reasonable objective control.", icon: "target" },
          ],
        },
        {
          kind: "steps",
          items: [
            { title: "1. Awareness", text: "Patient observes their own pattern: mouth vs nose, upper chest vs abdomen, rate, sighs. Hands on chest and abdomen make it concrete." },
            { title: "2. Nose + low + slow at rest", text: "Practise gentle nasal breathing directed to the lower ribs/abdomen, allowing a natural pause after exhalation, 10 minutes twice daily in relaxed positions." },
            { title: "3. Transfer into activity", text: "Apply the pattern to sitting at a desk, walking, stairs — nasal breathing retained as long as comfortable, mouth recruited only as intensity demands." },
            { title: "4. Rescue strategy", text: "A rehearsed routine for tightness: stop, drop the shoulders, breathe low and slow through the nose — used alongside, never instead of, the reliever inhaler when needed." },
          ],
        },
        {
          kind: "warning",
          title: "Retraining boundaries",
          items: [
            "Never present breathing exercises as a replacement for preventer (anti-inflammatory) medication — that framing is dangerous",
            "Breath-hold practice should be comfortable, not maximal, and avoided during poor control or infection",
            "Symptoms worsening during retraining sessions = stop and review asthma control",
          ],
        },
      ],
    },
    {
      slug: "physical-activity-asthma",
      title: "Physical Activity & Asthma",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "The evidence is unambiguous: people with asthma benefit from regular exercise. Aerobic training improves cardiopulmonary fitness, symptom control and quality of life, and may reduce airway hyperresponsiveness and exacerbations — without worsening the disease. Historic advice to avoid exertion created generations of deconditioned, fearful patients; modern physiotherapy reverses that.",
        },
        {
          kind: "keypoints",
          title: "Prescription principles",
          items: [
            "Aerobic exercise at moderate to vigorous intensity, 2–5 sessions weekly, built up progressively — standard healthy-adult targets apply",
            "Ensure baseline control and a prescribed pre-exercise strategy (warm-up ± reliever) before pushing intensity",
            "Interval formats and sports with intermittent effort are often better tolerated early than sustained hard running in cold air",
            "Deconditioning breathlessness improves with training — separating it from EIB is itself therapeutic",
          ],
        },
        {
          kind: "paragraph",
          text: "Swimming deserves a balanced note. The warm, humid air just above the water makes pools one of the best-tolerated environments for asthmatic airways, and swimming is an excellent training mode. However, heavily chlorinated indoor pools produce airborne chloramines that can irritate airways, and very high lifetime exposure (elite swimmers) is associated with airway changes. For the ordinary patient: well-ventilated pools are encouraged; symptoms consistently provoked by a particular pool are a reason to change venue, not to stop swimming.",
        },
        {
          kind: "pearls",
          items: [
            "Frame it explicitly: 'Your lungs are safe to train.' Fear of triggering an attack is a bigger barrier than the airways themselves in most patients.",
            "Well-controlled asthmatics compete at Olympic level in every sport — a fact worth sharing with newly diagnosed teenagers.",
          ],
        },
      ],
    },
    {
      slug: "bronchiectasis-secretion-clearance",
      title: "Bronchiectasis & Secretion Clearance Basics",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Bronchiectasis is abnormal, permanent dilatation of the bronchi with impaired mucociliary clearance: secretions pool, infections take hold, inflammation damages walls further — the 'vicious cycle'. The hallmark is chronic productive cough with daily sputum and recurrent chest infections. Unlike asthma's variable obstruction, the structural damage is fixed, and daily airway clearance is the physiotherapy cornerstone.",
        },
        {
          kind: "steps",
          items: [
            { title: "1. Assess the secretion problem", text: "Sputum volume, colour and ease of clearance; auscultation; exacerbation frequency; current clearance habits (many patients have none, or exhausting ineffective coughing)." },
            { title: "2. Teach ACBT as the foundation", text: "Breathing control → thoracic expansion (3–5 deep breaths ± hold) → huff from low then high lung volume → cough only when secretions are proximal. Ten to twenty minutes, once or twice daily, more in exacerbations." },
            { title: "3. Add positioning where useful", text: "Gravity-assisted (postural drainage) positions targeting affected lobes increase yield in some patients; modified positions (no head-down tilt) when reflux or breathlessness limit tolerance." },
            { title: "4. Consider devices", text: "Positive expiratory pressure (PEP) and oscillating-PEP devices (e.g. flutter/Acapella-type) splint airways open and vibrate secretions loose — useful for independence and adherence; choice guided by patient preference and trial." },
            { title: "5. Build the routine", text: "Clearance works only as a daily habit tied to something fixed (after morning inhalers, before evening meal). Review technique at every contact; add exercise, which itself aids clearance." },
          ],
        },
        {
          kind: "keypoints",
          title: "Asthma vs bronchiectasis for the physiotherapist",
          items: [
            "Asthma: problem = variable narrowing → priorities are control, triggers, breathing pattern, exercise",
            "Bronchiectasis: problem = retained secretions in damaged airways → priority is daily clearance plus exercise",
            "Both benefit from aerobic training; both can coexist in one patient",
            "Increasing sputum volume, purulence or breathlessness suggests exacerbation — prompt medical review for likely antibiotics",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Huffing technique quality determines clearance success — an effective huff is long, breathy and open-throated ('fog a mirror'), not a strangled cough.",
            "Ask to see the patient's device technique rather than asking whether they use it — the gap is often large.",
          ],
        },
      ],
    },
    {
      slug: "acute-attack-red-flags",
      title: "The Acute Attack: Awareness & Red Flags",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Every physiotherapist working with asthmatic patients — in clinics, gyms or on pitches — must recognise the escalation from a troublesome attack to a life-threatening one. The counter-intuitive danger sign: as obstruction becomes critical, the chest can go quiet, because too little air moves to generate a wheeze.",
        },
        {
          kind: "table",
          headers: ["Severity", "Typical features"],
          rows: [
            ["Moderate attack", "Increasing wheeze and breathlessness; can complete sentences; peak flow moderately reduced (roughly 50–75% of best)"],
            ["Acute severe", "Cannot complete sentences in one breath; respiratory rate markedly raised; heart rate raised; peak flow roughly 33–50% of best"],
            ["Life-threatening", "SILENT CHEST; cyanosis; exhaustion, poor respiratory effort; altered consciousness or confusion; SpO2 <92%; peak flow <33% of best or unrecordable"],
          ],
        },
        {
          kind: "redflags",
          items: [
            "Silent chest — a quiet chest in a distressed asthmatic means minimal airflow: pre-arrest, call emergency services",
            "Inability to speak more than a few words, or to complete a sentence in one breath",
            "Exhaustion, drowsiness, confusion or any drop in conscious level",
            "Cyanosis or SpO2 below 92%",
            "Poor or no response to the reliever inhaler",
            "A patient who says 'this is the worst attack I've ever had' — believe them",
          ],
        },
        {
          kind: "steps",
          items: [
            { title: "1. Stop activity, position", text: "Stop exercise/treatment; sit the patient upright, leaning forward slightly if preferred; stay calm and stay with them." },
            { title: "2. Reliever immediately", text: "Help them take their reliever (commonly short-acting beta-2 agonist, ideally via spacer): standard first-aid guidance uses repeated puffs with monitoring — follow their action plan and local first-aid protocol." },
            { title: "3. Escalate early", text: "No rapid improvement, any severe/life-threatening feature, or no inhaler available → call emergency services immediately. Continue reliever while waiting." },
            { title: "4. Afterwards", text: "Every significant attack triggers medical review of control, technique and the written action plan — including attacks that 'settled on their own'." },
          ],
        },
      ],
    },
    {
      slug: "inhaler-technique",
      title: "Inhaler Technique: The Physiotherapist's Role",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "The majority of inhaler users make technique errors, and poor technique is one of the commonest reasons 'asthma medication doesn't work'. Prescribing and changing medication is medical business; checking, correcting and reinforcing technique at every contact is everyone's business — and physiotherapists, who see patients repeatedly and during exertion, are ideally placed.",
        },
        {
          kind: "cards",
          items: [
            { title: "Reliever vs preventer", text: "Know the difference and reinforce it: the reliever (bronchodilator) rescues symptoms now; the preventer (inhaled corticosteroid) treats the inflammation and must be taken regularly even when well.", icon: "layers" },
            { title: "pMDI essentials", text: "Shake, exhale gently away from the device, seal lips, start a slow deep inhalation and press once, continue inhaling slowly, then hold breath ~10 seconds. Coordination errors are rife — spacers solve most of them.", icon: "wind" },
            { title: "Dry powder inhalers", text: "Opposite inspiratory demand: a quick, forceful, deep inhalation from the start. A patient switched between device types often keeps the old (now wrong) technique.", icon: "zap" },
            { title: "Spacers", text: "Improve lung deposition and reduce oral side effects with pMDIs; essential for many children and invaluable in attacks. Single slow breath or tidal breathing methods both acceptable.", icon: "circle" },
          ],
        },
        {
          kind: "keypoints",
          title: "The physiotherapy reinforcement loop",
          items: [
            "Ask patients to demonstrate — never just describe — their technique with their own device",
            "Correct one error at a time; re-check at the next visit",
            "Confirm the pre-exercise plan practically: which inhaler, how many puffs, how long before warm-up",
            "Flag adherence or device problems to the prescriber rather than working around them",
          ],
        },
        {
          kind: "pearls",
          items: [
            "'Show me how you take it, exactly as you do at home' finds more problems than any questionnaire.",
            "A patient using their reliever more than about twice a week (outside exercise pre-treatment) has a control problem that needs medical review — reliever overuse predicts attacks.",
          ],
        },
      ],
    },
    {
      slug: "exercise-blocks",
      title: "Exercise Blocks for the Asthmatic Patient",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "These two blocks combine into a single programme: aerobic conditioning builds the fitness that raises the symptom threshold, while breathing drills build the pattern that keeps ventilation efficient. Both assume baseline medical control and an agreed pre-exercise routine.",
        },
        {
          kind: "exercise",
          name: "Aerobic interval build",
          purpose: "Develop cardiorespiratory fitness and confidence while exploiting the refractory period to minimise EIB.",
          position: "Any preferred aerobic mode: brisk walking, cycling, swimming, rowing; indoors or warm environments early in training.",
          execution: "After the pre-exercise routine (prescribed reliever if part of the plan, then 10–15 minutes graded warm-up ending with several 30-second brisker efforts), alternate 1–2 minutes at a somewhat-hard intensity (able to speak short phrases) with equal easy recovery.",
          dosage: "Start with 6–8 work intervals (about 20 minutes total), 3×/week.",
          progression: "Lengthen work intervals towards continuous 20–30 minutes at moderate intensity; then add intensity; cold-air outdoor sessions only once indoor sessions are comfortable, with scarf/buff cover early on.",
          precautions: "Reliever inhaler present at every session; stop for chest tightness or wheeze not settling with rest and reliever; postpone sessions during infections or poor control (increased night symptoms, falling peak flow).",
        },
        {
          kind: "exercise",
          name: "Breathing control drills",
          purpose: "Establish a nasal, low, slow breathing pattern at rest and carry it into activity — reducing dysfunctional-breathing symptoms and airway drying.",
          position: "Start relaxed: supported sitting or crook lying, one hand on the upper chest, one below the ribs.",
          execution: "Breathe gently in and out through the nose, directing movement to the lower hand while the upper hand stays quiet; allow a soft natural pause after each exhalation; keep the breath quiet, small and unhurried.",
          dosage: "10 minutes, twice daily; plus brief 1-minute 'resets' scattered through the day.",
          progression: "Sitting → standing → slow walking with nasal breathing → stairs and daily tasks → nasal breathing maintained into low-intensity portions of aerobic sessions.",
          precautions: "Drills should feel calming; dizziness or tingling means the breath has become too big or forced — return to quiet tidal breathing. Never a substitute for medication.",
        },
        {
          kind: "keypoints",
          title: "Programming rules",
          items: [
            "Warm-up is non-negotiable — it is a treatment, not a courtesy",
            "Progress fitness and breathing pattern in parallel; each makes the other easier",
            "Track symptoms, reliever use and (where used) peak flow alongside training loads",
            "An attack or infection resets the week, not the programme — resume at the last comfortable level",
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
            "Asthma = chronic inflammation + hyperresponsive airways + variable, reversible obstruction; COPD = progressive, largely fixed obstruction in older smokers",
            "Triggers: viruses, allergens, exercise, cold dry air, smoke, drugs (NSAIDs, beta-blockers), stress, occupation",
            "EIB peaks 5–15 min after exercise; manage with control + pre-exercise reliever + 10–15 min interval warm-up (refractory period ~2 h)",
            "Assess: peak flow vs personal best (diurnal variability >20% = poor control), night symptoms, reliever frequency; screen dysfunctional breathing (Nijmegen >23 suggests it)",
            "Breathing retraining (Buteyko/Papworth concepts): better symptoms and QoL, no change in inflammation — medication continues",
            "Exercise is beneficial and safe; swimming well tolerated (prefer ventilated pools)",
            "Bronchiectasis: fixed dilated airways, daily sputum — daily ACBT ± positioning ± PEP devices is the cornerstone",
            "Life-threatening attack: SILENT CHEST, can't speak, exhaustion, cyanosis, SpO2 <92% → emergency call; check inhaler technique at every contact",
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
      text: "Which triad of features defines asthma pathophysiology?",
      options: [
        "Alveolar destruction, fixed obstruction, chronic hypoxia",
        "Airway inflammation, bronchial hyperresponsiveness, variable reversible airflow obstruction",
        "Pleural thickening, bronchial dilatation, purulent sputum",
        "Pulmonary fibrosis, reduced compliance, restrictive pattern",
      ],
      correctIndex: 1,
      explanation:
        "Asthma combines chronic airway inflammation (often eosinophilic), hyperresponsive 'twitchy' airways that over-narrow to trigger stimuli, and airflow obstruction that varies over time and reverses spontaneously or with bronchodilators. Alveolar destruction describes emphysema; bronchial dilatation with purulent sputum describes bronchiectasis; fibrosis is a restrictive disease.",
      difficulty: "Easy",
      tags: ["pathology", "anatomy"],
      sectionSlug: "pathophysiology",
    },
    {
      text: "Which feature most reliably distinguishes asthma from COPD?",
      options: [
        "The presence of any cough",
        "Variable, largely reversible airflow obstruction with marked diurnal variation",
        "Breathlessness on exertion",
        "Age over 40 at diagnosis",
      ],
      correctIndex: 1,
      explanation:
        "The signature of asthma is variability and reversibility: obstruction fluctuates day to day (marked diurnal peak-flow variation) and improves substantially with bronchodilators, with symptom-free intervals. COPD obstruction is progressive and largely fixed. Cough and exertional breathlessness occur in both; age helps but overlaps exist.",
      difficulty: "Easy",
      tags: ["pathology", "assessment"],
      sectionSlug: "pathophysiology",
    },
    {
      text: "Which inflammation pattern typifies classical allergic asthma compared with COPD?",
      options: [
        "Neutrophilic in asthma, eosinophilic in COPD",
        "Eosinophilic (Th2-driven) in asthma, predominantly neutrophilic in COPD",
        "No inflammation in either condition",
        "Granulomatous inflammation in both",
      ],
      correctIndex: 1,
      explanation:
        "Classical atopic asthma shows Th2-driven eosinophilic airway inflammation — the basis of its strong response to inhaled corticosteroids — whereas COPD inflammation is predominantly neutrophilic and less steroid-responsive. Phenotypes vary (some asthma is non-eosinophilic), but this remains the typical contrast.",
      difficulty: "Hard",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "pathophysiology",
    },
    {
      text: "An adult's chest symptoms improve reliably on weekends and holidays. What should this pattern prompt?",
      options: [
        "Reassurance that the asthma is mild",
        "Suspicion of occupational asthma and escalation for formal assessment",
        "Advice to work longer hours for desensitisation",
        "A diagnosis of anxiety-related breathlessness",
      ],
      correctIndex: 1,
      explanation:
        "Symptoms that improve away from work are the classic screening clue for occupational asthma — sensitisers such as isocyanates, flour dust and latex are well-recognised causes. It requires formal medical and occupational assessment because ongoing exposure worsens outcomes and early removal from exposure improves prognosis.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "triggers-phenotypes",
    },
    {
      text: "When do symptoms of exercise-induced bronchoconstriction classically peak?",
      options: [
        "In the first 30 seconds of exercise",
        "5–15 minutes after stopping exercise",
        "6–8 hours after exercise",
        "Only during the following night",
      ],
      correctIndex: 1,
      explanation:
        "EIB classically peaks 5–15 minutes after exercise stops and resolves within 30–60 minutes. High ventilation dries and cools the airway surface; on stopping, rewarming and mediator release drive bronchoconstriction. Breathlessness confined to the exercise itself with immediate recovery suggests deconditioning or a breathing-pattern issue instead.",
      difficulty: "Easy",
      tags: ["pathology", "assessment"],
      sectionSlug: "exercise-induced-bronchoconstriction",
    },
    {
      text: "What is the 'refractory period' exploited by a structured warm-up in EIB management?",
      options: [
        "A window of up to about two hours after graded warm-up exercise during which further exercise provokes substantially less bronchoconstriction",
        "The time each morning when inhalers do not work",
        "A period after eating when exercise is dangerous",
        "The two minutes immediately after a bronchodilator dose",
      ],
      correctIndex: 0,
      explanation:
        "A graded warm-up of around 10–15 minutes, particularly including short repeated higher-intensity intervals, induces a refractory period of up to roughly two hours during which subsequent vigorous exercise causes markedly less bronchoconstriction. Timing the session inside this window — together with prescribed pre-exercise medication — is core non-drug EIB management.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "exercise-induced-bronchoconstriction",
    },
    {
      text: "An athlete reports inspiratory noise and throat tightness peaking at maximal effort, settling within minutes, with normal response to asthma inhalers being absent. What should be suspected?",
      options: [
        "Classic EIB responding poorly due to technique",
        "Exercise-induced laryngeal obstruction, which mimics asthma but peaks during exercise with inspiratory stridor and does not respond to bronchodilators",
        "Pneumothorax",
        "Cardiac ischaemia",
      ],
      correctIndex: 1,
      explanation:
        "Exercise-induced laryngeal obstruction (vocal cord level) produces inspiratory stridor and throat-localised tightness at peak effort, resolving quickly on stopping — unlike EIB, which is expiratory-wheeze dominant and peaks after exercise. Bronchodilators do not help laryngeal obstruction; assessment and breathing/laryngeal retraining pathways differ, so distinguishing them prevents years of ineffective escalating inhaler therapy.",
      difficulty: "Hard",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "exercise-induced-bronchoconstriction",
    },
    {
      text: "How is peak expiratory flow best interpreted for asthma monitoring?",
      options: [
        "As a one-off value compared with the tallest person in clinic",
        "Best of three attempts compared with the patient's personal best, watching diurnal variability and trend",
        "Only measured during attacks",
        "It is interchangeable with oxygen saturation",
      ],
      correctIndex: 1,
      explanation:
        "PEF is effort-dependent, so the best of three attempts is recorded and compared with the patient's own personal best (or predicted value if no personal best exists). Marked diurnal variability — classically more than 20% — morning dipping, and a falling trend all indicate deteriorating control and drive written action-plan steps.",
      difficulty: "Easy",
      tags: ["assessment", "management"],
      sectionSlug: "assessment",
    },
    {
      text: "A patient with asthma has normal spirometry and good peak flows yet reports severe breathlessness, frequent sighing, tingling fingers and dizziness. Which coexisting problem should be screened for?",
      options: [
        "Silent myocardial infarction",
        "A breathing pattern disorder / dysfunctional breathing, e.g. using the Nijmegen Questionnaire",
        "Undiagnosed bronchiectasis",
        "Vocal nodules",
      ],
      correctIndex: 1,
      explanation:
        "Symptoms disproportionate to objective measures, sighing, and paraesthesia/dizziness point to dysfunctional breathing — habitual upper-chest over-breathing that mimics poor asthma control and drives reliever overuse. The Nijmegen Questionnaire (score >23/64 traditionally suggestive) screens for hyperventilation-related symptoms. Asthma and dysfunctional breathing commonly coexist, and breathing retraining targets the latter.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "assessment",
    },
    {
      text: "What is the honest evidence summary for Buteyko- and Papworth-style breathing retraining in asthma?",
      options: [
        "They cure asthma and allow preventer medication to be stopped by the physiotherapist",
        "They improve symptoms, quality of life and reliever overuse in symptomatic patients, but do not change airway inflammation or objective lung function",
        "They have been proven harmful and are contraindicated",
        "They only work in children under five",
      ],
      correctIndex: 1,
      explanation:
        "Randomised trials of breathing retraining, including Buteyko-based and the Papworth method, show meaningful improvements in symptoms, quality of life and reliever use in adults who remain symptomatic on medication — but no consistent change in lung function or inflammation. Retraining is therefore an adjunct: preventer therapy continues, and only the medical team adjusts medication.",
      difficulty: "Hard",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "breathing-retraining",
    },
    {
      text: "Why does nasal breathing specifically help the asthmatic airway during daily activity and low-intensity exercise?",
      options: [
        "The nose produces bronchodilating hormones",
        "Nasal passage filters, warms and humidifies inhaled air — directly countering the airway drying and cooling that trigger bronchoconstriction — while slowing breathing",
        "Mouth breathing delivers no oxygen",
        "Nasal breathing increases minute ventilation dramatically",
      ],
      correctIndex: 1,
      explanation:
        "Airway surface dehydration from high flows of cool, dry air is the dominant trigger mechanism in EIB and a general airway irritant. The nose conditions the air — filtering, warming, humidifying — and its resistance naturally slows and reduces breathing volume. Mouth breathing is recruited as intensity demands; the goal is a default nasal pattern, not absolutism.",
      difficulty: "Medium",
      tags: ["anatomy", "management"],
      sectionSlug: "breathing-retraining",
    },
    {
      text: "Which statement about exercise for people with asthma is correct?",
      options: [
        "Exercise should be avoided to prevent attacks",
        "Aerobic training improves fitness, symptom control and quality of life without worsening the disease — exercise is positively indicated",
        "Only stretching is safe for asthmatic patients",
        "Exercise benefits disappear if the patient uses a preventer inhaler",
      ],
      correctIndex: 1,
      explanation:
        "Trials and reviews consistently show aerobic training improves cardiopulmonary fitness, asthma control and quality of life, and may reduce hyperresponsiveness and exacerbations. Historic avoidance advice produced deconditioning and fear. Standard adult activity targets apply, with sensible precautions: baseline control, warm-up, reliever available, and postponement during infections or poor control.",
      difficulty: "Easy",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "physical-activity-asthma",
    },
    {
      text: "What is the balanced advice about swimming for a patient with asthma?",
      options: [
        "Swimming is banned because of water pressure on the chest",
        "The warm humid pool air is well tolerated and swimming is excellent exercise, but poorly ventilated, heavily chlorinated pools can irritate airways — prefer well-ventilated venues",
        "Only outdoor cold-water swimming is appropriate",
        "Swimming replaces the need for preventer medication",
      ],
      correctIndex: 1,
      explanation:
        "Warm, humid air just above the water makes swimming one of the best-tolerated exercise environments for asthmatic airways. The caveat is chloramine exposure in poorly ventilated indoor pools, which can irritate airways (with airway changes described at elite exposure levels). Practical advice: swim, choose well-ventilated pools, and change venue if one consistently provokes symptoms.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "physical-activity-asthma",
    },
    {
      text: "What is the defining structural problem in bronchiectasis and its physiotherapy consequence?",
      options: [
        "Reversible smooth-muscle spasm requiring bronchodilators alone",
        "Permanent bronchial dilatation with failed mucociliary clearance — making daily airway clearance the cornerstone of physiotherapy",
        "Alveolar collapse requiring only oxygen therapy",
        "Pleural effusion requiring drainage",
      ],
      correctIndex: 1,
      explanation:
        "Bronchiectasis is irreversible dilatation of the bronchi with impaired mucociliary clearance: secretions pool, infection and inflammation perpetuate damage — the vicious cycle. Because obstruction is structural, not spasm, the physiotherapy priority is breaking the cycle with daily secretion clearance (ACBT, positioning, PEP devices) plus exercise, alongside medical infection management.",
      difficulty: "Easy",
      tags: ["pathology", "management"],
      sectionSlug: "bronchiectasis-secretion-clearance",
    },
    {
      text: "How do PEP and oscillating-PEP devices assist secretion clearance in bronchiectasis?",
      options: [
        "They deliver antibiotics directly to the airways",
        "Expiratory resistance splints airways open (with oscillation adding vibratory loosening of mucus), aiding movement of secretions towards central airways for huffing and coughing",
        "They suppress the cough reflex to rest the airways",
        "They increase airway drying to firm up secretions",
      ],
      correctIndex: 1,
      explanation:
        "Breathing out against positive expiratory pressure holds airways open (including via collateral channels, getting air behind secretions), and oscillating versions add vibration that loosens mucus. Secretions migrate centrally, where huffs and coughs clear them. Device choice is guided by patient preference and demonstrated effectiveness — the best device is the one used daily.",
      difficulty: "Medium",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "bronchiectasis-secretion-clearance",
    },
    {
      text: "During a session, an asthmatic patient becomes distressed and breathless — and their previously loud wheeze disappears while they visibly worsen. What does this signify?",
      options: [
        "The attack is resolving and the session can continue",
        "A silent chest — airflow is now so poor that no wheeze can be generated: a life-threatening emergency requiring an immediate emergency call",
        "The stethoscope is faulty",
        "The patient is exaggerating symptoms",
      ],
      correctIndex: 1,
      explanation:
        "Wheeze requires airflow. In a deteriorating patient, a quietening chest means obstruction has become critical — a life-threatening feature alongside cyanosis, exhaustion, altered consciousness and SpO2 <92%. This is a pre-arrest situation: call emergency services immediately, sit the patient up, and continue reliever medication while waiting. Improvement, by contrast, pairs a quieter chest with a better-looking patient.",
      difficulty: "Hard",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "acute-attack-red-flags",
    },
    {
      text: "Which feature separates an acute severe attack from a moderate one?",
      options: [
        "Any audible wheeze",
        "Inability to complete a sentence in one breath, with peak flow roughly 33–50% of best",
        "A respiratory rate of 14 per minute",
        "Symptoms triggered by exercise",
      ],
      correctIndex: 1,
      explanation:
        "In an acute severe attack the patient cannot complete sentences in one breath, with markedly raised respiratory and heart rates and peak flow around 33–50% of best. Moderate attacks preserve sentence completion with PEF roughly 50–75%. Life-threatening features — silent chest, cyanosis, exhaustion, confusion, SpO2 <92%, PEF <33% — demand an immediate emergency call.",
      difficulty: "Medium",
      tags: ["assessment", "precautions"],
      sectionSlug: "acute-attack-red-flags",
    },
    {
      text: "What is the essential difference a patient must understand between their reliever and preventer inhalers?",
      options: [
        "There is no meaningful difference between the two",
        "The reliever (bronchodilator) rescues symptoms now; the preventer (inhaled corticosteroid) treats underlying inflammation and must be taken regularly even when feeling well",
        "The preventer works within seconds during attacks",
        "The reliever should be taken twice daily regardless of symptoms and the preventer only in attacks",
      ],
      correctIndex: 1,
      explanation:
        "The reliever relaxes airway smooth muscle for rapid symptom relief; the preventer suppresses the underlying inflammation that makes airways twitchy, working only with regular use — including when asymptomatic. Stopping the preventer 'because I feel fine' is a classic route to attacks, and reliever use beyond about twice weekly signals a control problem needing medical review.",
      difficulty: "Easy",
      tags: ["management", "pathology"],
      sectionSlug: "inhaler-technique",
    },
    {
      text: "Why should a physiotherapist ask patients to demonstrate inhaler technique with their own device rather than simply asking about it?",
      options: [
        "To save appointment time",
        "Because most users make technique errors they are unaware of, and errors differ by device type — observed demonstration finds problems that questioning misses",
        "Because verbal reports are always deliberately dishonest",
        "Because physiotherapists prescribe the medication",
      ],
      correctIndex: 1,
      explanation:
        "A majority of inhaler users make errors — poor pMDI coordination, weak inhalation through a DPI, no breath-hold — and self-report correlates poorly with observed technique, especially after device switches where old habits persist. Watching an actual demonstration, correcting one error at a time and re-checking later is the evidence-sensible reinforcement role; prescription changes are flagged to the medical team.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "inhaler-technique",
    },
    {
      text: "In planning an aerobic programme for a patient with well-controlled asthma and known EIB, which sequence is correct?",
      options: [
        "Maximal sprint testing first, warm-up afterwards",
        "Prescribed pre-exercise reliever if part of their plan → 10–15 minute graded warm-up ending with short brisk intervals → interval-based session with reliever available → progress duration before intensity",
        "Cold outdoor running from session one to build tolerance",
        "Avoid all intensity above walking pace permanently",
      ],
      correctIndex: 1,
      explanation:
        "The safe, effective order stacks the protections: pre-exercise medication as prescribed, then a graded interval-finishing warm-up to induce the refractory period, then interval-format training (better tolerated than sustained hard efforts in cold dry air), progressing duration before intensity, with the reliever always present. Cold-air sessions come later, with air-warming strategies such as a scarf or buff.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "exercise-blocks",
    },
  ],
  flashcards: [
    { front: "Define asthma in one sentence.", back: "A chronic inflammatory airway disease with bronchial hyperresponsiveness and variable, largely reversible airflow obstruction." },
    { front: "Key differences: asthma vs COPD?", back: "Asthma: any age (often young), atopy-linked, variable/reversible obstruction, eosinophilic inflammation, marked diurnal variability. COPD: >40 with smoking history, progressive fixed obstruction, neutrophilic inflammation, minimal variability." },
    { front: "When does EIB classically peak, and why?", back: "5–15 minutes after stopping exercise — high ventilation dries and cools the airway surface, and rewarming/mediator release then drives bronchoconstriction; resolves in 30–60 minutes." },
    { front: "What is the warm-up (refractory period) effect in EIB?", back: "A 10–15 minute graded warm-up including short brisk intervals induces up to ~2 hours during which subsequent exercise provokes much less bronchoconstriction." },
    { front: "How is peak flow used in monitoring?", back: "Best of three attempts vs the patient's personal best; diurnal variability >20%, morning dips or a falling trend indicate poor control and trigger action-plan steps." },
    { front: "What screens for dysfunctional breathing, and what suggests it clinically?", back: "The Nijmegen Questionnaire (>23/64 traditionally suggestive). Clues: symptoms disproportionate to lung function, sighing, upper-chest breathing, tingling, dizziness, poor response to escalating medication." },
    { front: "Honest evidence for Buteyko/Papworth breathing retraining?", back: "Improved symptoms, quality of life and reliever overuse in symptomatic adults — but no consistent change in lung function or inflammation; medication continues, adjusted only by the medical team." },
    { front: "Is exercise safe and useful in asthma?", back: "Yes — aerobic training improves fitness, symptom control and quality of life without worsening the disease. Swimming in well-ventilated pools is particularly well tolerated." },
    { front: "Physiotherapy cornerstone in bronchiectasis?", back: "Daily airway clearance: ACBT (breathing control, thoracic expansion, huff), gravity-assisted positioning where useful, and PEP/oscillating-PEP devices — built into a lifelong routine, plus exercise." },
    { front: "List the life-threatening asthma attack features.", back: "Silent chest, cyanosis, SpO2 <92%, exhaustion or poor respiratory effort, altered consciousness/confusion, PEF <33% of best — call emergency services immediately." },
    { front: "Why is a 'silent chest' ominous?", back: "Wheeze needs airflow; a quiet chest in a distressed asthmatic means airflow is critically low — a pre-arrest sign, not improvement." },
    { front: "Reliever vs preventer — the message patients must own?", back: "Reliever = rescue now (bronchodilator); preventer = daily anti-inflammatory that works only with regular use, even when well. Reliever use >~2×/week signals poor control needing medical review." },
  ],
};

export default topic;
