/** Detailed prep-guide content for each exam. Static, evergreen, honest. */

export interface SampleQuestion {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface ExamDetail {
  id: string;
  name: string;
  shortName: string;
  region: string;
  body: string;
  website: string;
  intro: string;
  howToApply: { title: string; text: string }[];
  pastPapers: {
    reality: string;
    officialSources: string[];
  };
  sampleQuestions: SampleQuestion[];
  strategy: string[];
  quizPlan: string[];
}

export const EXAM_DETAILS: Record<string, ExamDetail> = {
  npte: {
    id: "npte",
    name: "NPTE — National Physical Therapy Examination",
    shortName: "NPTE",
    region: "United States",
    body: "FSBPT",
    website: "fsbpt.org",
    intro:
      "The NPTE is the licensing exam for physical therapists in the USA — a long, vignette-based test of safe clinical decision-making across every body system.",
    howToApply: [
      { title: "Graduate from an accredited program", text: "US graduates need a CAPTE-accredited degree. Internationally-educated PTs first need a credential evaluation (typically through FCCPT) showing equivalence to a US DPT." },
      { title: "Apply to a state licensing board", text: "You always apply for a license in a specific state — the board approves you to sit the NPTE. Requirements differ slightly by state (jurisprudence exams, background checks)." },
      { title: "Register with FSBPT", text: "Create an account at fsbpt.org, register for the NPTE, and pay the exam fee (several hundred dollars — check the current amount)." },
      { title: "Receive your ATT and book Prometric", text: "Once eligible, you get an Authorization to Test letter, then book a seat at a Prometric test centre for one of the fixed exam dates (offered several times per year)." },
      { title: "Sit the exam & get results", text: "~225 multiple-choice questions in timed sections over about 5 hours. Passing is a scaled score of 600/800. Results typically arrive within days via your FSBPT account." },
    ],
    pastPapers: {
      reality:
        "Real NPTE papers are never released publicly — every question is confidential and reusing leaked content can void your exam. What exists officially: FSBPT sells the PEAT (Practice Exam & Assessment Tool), built from genuine retired NPTE questions. That is the closest thing to \"last year's paper\" that legally exists.",
      officialSources: [
        "PEAT — FSBPT's official practice exam from retired questions (fsbpt.org)",
        "FSBPT's free content outline — the exact blueprint of what's tested",
        "This platform's Mixed Mock Exam for timed, cross-topic practice in the same MCQ format",
      ],
    },
    sampleQuestions: [
      {
        q: "A patient 2 days post-total hip replacement (posterior approach) asks how to safely put on socks. Which advice is MOST appropriate?",
        options: [
          "Cross the legs to bring the foot closer",
          "Bend forward past 90° of hip flexion slowly",
          "Use a long-handled aid, avoiding hip flexion past 90°, adduction and internal rotation",
          "Any method is fine once the wound is closed",
        ],
        correct: 2,
        explanation:
          "Classic posterior precautions limit hip flexion >90°, adduction past midline and internal rotation — exactly the motions of crossing legs or deep forward bending. Adaptive equipment lets the patient dress within precautions. NPTE questions reward the SAFEST functional option.",
      },
      {
        q: "During inpatient exercise, a post-MI patient reports 3/10 chest tightness. The FIRST action should be to:",
        options: [
          "Continue at lower intensity and monitor",
          "Stop exercise, sit the patient down, and monitor symptoms and vitals",
          "Tell the patient this is normal after MI",
          "Call a code immediately",
        ],
        correct: 1,
        explanation:
          "Angina during exercise is an absolute indication to stop and assess. Continuing (even reduced) risks ischaemia; a code is premature without assessment. The NPTE consistently tests \"stop and assess first\" for anginal symptoms.",
      },
      {
        q: "A patient with a complete C6 spinal cord injury should ultimately be able to perform which of the following?",
        options: [
          "Independent transfers with a sliding board using tenodesis grasp",
          "Normal hand function with fine motor control",
          "Independent ambulation with bilateral AFOs",
          "No independent mobility at any level",
        ],
        correct: 0,
        explanation:
          "C6 preserves wrist extension → tenodesis grasp, allowing sliding-board transfers and independent living skills with adaptations. Intrinsic hand function (C8–T1) and community ambulation are not expected with a complete C6 lesion.",
      },
      {
        q: "Which finding in a patient with acute low back pain requires immediate medical referral rather than physical therapy?",
        options: [
          "Pain radiating to the knee",
          "Morning stiffness lasting 20 minutes",
          "New saddle anaesthesia with difficulty initiating urination",
          "Pain increased by lumbar flexion",
        ],
        correct: 2,
        explanation:
          "Saddle anaesthesia plus bladder dysfunction is the classic presentation of cauda equina syndrome — a surgical emergency. The other findings are common in mechanical or radicular LBP and are managed conservatively.",
      },
      {
        q: "A therapist notes a positive Trendelenburg sign on the left when the patient stands on the right leg. Which muscle is MOST likely weak?",
        options: ["Left gluteus medius", "Right gluteus medius", "Left quadratus lumborum", "Right adductor longus"],
        correct: 1,
        explanation:
          "The stance-side hip abductors keep the opposite pelvis level. Standing on the right with a left pelvic drop indicates weak RIGHT gluteus medius — a classic NPTE cross-lateral reasoning trap.",
      },
    ],
    strategy: [
      "Vignette-first thinking: every question is a mini patient case — identify the phase, the safety issue, and the single best next step.",
      "When two answers seem right, pick the SAFER one — the NPTE is a safe-practice exam before anything else.",
      "Train stamina: 5 hours is an endurance event. Do full-length timed mocks (our 30-question mock exam back-to-back simulates blocks).",
      "Weight your study like the blueprint: musculoskeletal and neuromuscular together are more than half the exam.",
      "Non-systems (equipment, modalities, safety, professional duties) are free marks — cover Electrotherapy & Modalities and precaution tables here.",
    ],
    quizPlan: [
      "Every topic quiz in Exam Mode (no feedback until the end — NPTE conditions)",
      "Weekly 30-question Mixed Mock Exam; track your percentage trend on the Progress page",
      "Drill your two weakest tags (see Progress → Accuracy by Area) before each mock",
    ],
  },

  pce: {
    id: "pce",
    name: "PCE — Physiotherapy Competency Examination",
    shortName: "PCE",
    region: "Canada",
    body: "CAPR",
    website: "alliancept.org",
    intro:
      "The PCE written component is Canada's entry-to-practice exam — safe, effective, entry-level physiotherapy across the lifespan, tested through ~200 MCQs.",
    howToApply: [
      { title: "Credential assessment", text: "Internationally-educated physiotherapists first complete CAPR's educational credential assessment proving substantial equivalence to a Canadian physiotherapy degree." },
      { title: "Apply for the written component", text: "Through your CAPR online account, apply and pay for the Written Component when application windows open (multiple sittings per year)." },
      { title: "Book your computer-based test", text: "The exam runs at Prometric centres (and remote proctoring at times) — book early; seats in major cities fill fast." },
      { title: "Sit the exam", text: "Around 200 multiple-choice questions split into two books over roughly 4 hours, covering all practice areas plus professional obligations." },
      { title: "Register provincially", text: "After passing, register with your provincial College (e.g., College of Physiotherapists of Ontario) — some provinces allow provisional practice before/while completing requirements. Check capr.ca for current rules." },
    ],
    pastPapers: {
      reality:
        "CAPR does not publish past papers — questions are confidential and reused. Officially available: CAPR's own sample/practice questions and the detailed competency blueprint. Note that CAPR's published reference list (Dutton, Magee, Kisner & Colby, O'Sullivan & Schmitz, Brukner & Khan…) is exactly the material this platform's topics are written from.",
      officialSources: [
        "CAPR practice materials and blueprint at alliancept.org",
        "The CAPR textbook reference list — study the sources, not rumoured questions",
        "This platform's Mixed Mock Exam for the same MCQ format under time pressure",
      ],
    },
    sampleQuestions: [
      {
        q: "A 70-year-old scores 10 seconds on the Timed Up and Go. The BEST interpretation is:",
        options: [
          "High falls risk — restrict community walking",
          "Within normal limits for community-dwelling older adults",
          "Invalid — the TUG cannot be used over 65",
          "Indicates vestibular pathology",
        ],
        correct: 1,
        explanation:
          "TUG under ~12 seconds is typical for independent community-dwelling older adults; elevated falls risk is flagged around ≥12–13.5 s. Knowing outcome-measure cut-offs is classic PCE material.",
      },
      {
        q: "During treatment, a patient discloses information suggesting risk of harm to themselves. The physiotherapist's MOST appropriate action is to:",
        options: [
          "Keep it confidential under all circumstances",
          "Follow duty-to-report obligations and involve appropriate services per provincial requirements",
          "Discharge the patient from therapy",
          "Ask the family to handle it",
        ],
        correct: 1,
        explanation:
          "Confidentiality has legal limits: risk of serious harm triggers professional reporting duties. The PCE weights professional obligations and ethics more visibly than many other licensing exams.",
      },
      {
        q: "A woman at 30 weeks gestation becomes dizzy and pale lying supine during treatment. The therapist should FIRST:",
        options: [
          "Continue treatment but more gently",
          "Roll her onto her left side",
          "Sit her bolt upright immediately and give water",
          "Call emergency services",
        ],
        correct: 1,
        explanation:
          "Supine hypotension from aortocaval compression resolves with left side-lying, restoring venous return. It's a positioning emergency with a positioning solution — recognise and act first.",
      },
      {
        q: "Which infection-control practice is required BEFORE and AFTER every patient contact, regardless of setting?",
        options: ["Sterile gloves", "Hand hygiene", "N95 respirator", "Gown and face shield"],
        correct: 1,
        explanation:
          "Hand hygiene is the universal routine practice; other PPE is added based on transmission risk. Routine-practices questions are dependable PCE marks.",
      },
      {
        q: "An infant is not sitting independently at 9 months and shows persistent ATNR. The BEST course of action is:",
        options: [
          "Reassure — all infants vary widely",
          "Refer for developmental assessment — these are red flags",
          "Begin gait training immediately",
          "Recommend only tummy time and review in 6 months",
        ],
        correct: 1,
        explanation:
          "Not sitting by ~9 months and primitive reflexes persisting beyond ~6 months are developmental red flags warranting assessment, not watchful waiting. Lifespan (paeds/geriatrics) content is core PCE territory.",
      },
    ],
    strategy: [
      "Think 'entry-level and safe' — the exam asks what a competent new graduate should do, not what a specialist might.",
      "Professional obligations, consent, and ethics carry real weight — don't leave them to the last week.",
      "Lifespan coverage matters: expect paediatric and older-adult scenarios, not just adult MSK.",
      "Two-book format rewards pacing: practise 100-question sittings without breaks.",
      "Study from the CAPR reference texts' concepts (this platform mirrors them) rather than chasing recalled questions.",
    ],
    quizPlan: [
      "All Musculoskeletal + Neurological + Cardiopulmonary topic quizzes in Exam Mode",
      "Pediatric Development and Falls Prevention quizzes (lifespan is tested!)",
      "Weekly 20–30 question Mixed Mock Exams to build two-book stamina",
    ],
  },

  gulf: {
    id: "gulf",
    name: "Gulf Licensing Exams — DHA · MOH · QCHP · SCFHS",
    shortName: "Gulf Prometric",
    region: "UAE, Saudi Arabia, Qatar",
    body: "Regional health authorities via Prometric",
    website: "prometric.com",
    intro:
      "Physiotherapist licensing exams for Dubai (DHA), UAE (MOH), Qatar (QCHP/DHP) and Saudi Arabia (SCFHS) — shorter, recall-heavy MCQ exams delivered by Prometric.",
    howToApply: [
      { title: "Primary Source Verification (DataFlow)", text: "Your degree, internship, experience letters and license are verified through DataFlow — start early, it commonly takes weeks." },
      { title: "Create the authority account & self-assessment", text: "Register on the authority's portal (e.g., DHA Sheryan), submit documents, and receive eligibility to sit the exam." },
      { title: "Book the Prometric exam", text: "Once eligible, schedule at any Prometric centre worldwide (available in India) and pay the exam fee." },
      { title: "Sit the exam", text: "Typically 70–100 MCQs in 2–3 hours; passing commonly around 60% (varies by authority). Results are quick — often within days." },
      { title: "Activate the license", text: "After passing plus a job offer in the region, complete registration/licensing with the authority to start practice." },
    ],
    pastPapers: {
      reality:
        "Authorities don't release past papers; 'Prometric question banks' sold online are unofficial recalls of variable accuracy and legality. The safest preparation is breadth-first study of standard physiotherapy material — which is what these exams actually sample.",
      officialSources: [
        "Each authority's official exam outline/handbook (DHA/MOH/QCHP/SCFHS websites)",
        "Prometric's own exam-day tutorials",
        "This platform's full topic bank — the recall-style MCQs here match the exam's style closely",
      ],
    },
    sampleQuestions: [
      {
        q: "The most commonly injured ligament in an inversion ankle sprain is the:",
        options: ["Deltoid ligament", "Anterior talofibular ligament", "Calcaneofibular ligament", "Spring ligament"],
        correct: 1,
        explanation:
          "The ATFL is the weakest lateral ligament and tears first in plantarflexion-inversion. Gulf exams love direct, high-yield recall like this.",
      },
      {
        q: "Conventional TENS primarily relieves pain through:",
        options: [
          "Endorphin release from motor-level stimulation",
          "The gate-control mechanism via large-fibre stimulation",
          "Increasing tissue temperature",
          "Blocking muscle contraction",
        ],
        correct: 1,
        explanation:
          "High-frequency, low-intensity (conventional) TENS stimulates A-beta fibres, 'closing the gate' on nociceptive input. Low-frequency acupuncture-like TENS works more via descending/endorphin mechanisms.",
      },
      {
        q: "Normal cervical rotation is approximately:",
        options: ["30–40°", "50°", "80–90° to each side", "120° to each side"],
        correct: 2,
        explanation:
          "Cervical rotation is roughly 80–90° each way, about half of it at C1–C2. Plain ROM norms are frequent one-line questions in Prometric exams.",
      },
      {
        q: "Ultrasound therapy is contraindicated over:",
        options: ["A healed scar", "The calf of a patient with a suspected DVT", "Trigger points", "A chronic tendinopathy"],
        correct: 1,
        explanation:
          "US over a suspected DVT risks embolisation — an absolute contraindication, along with malignancy, pregnancy over the trunk, and growth plates at therapeutic doses. Contraindication lists are guaranteed marks.",
      },
      {
        q: "A patient with COPD becomes breathless during walking. The best immediate positioning advice is:",
        options: [
          "Lie flat and rest",
          "Forward-lean sitting or standing with arms supported",
          "Arms raised overhead",
          "Rapid deep breaths through the mouth",
        ],
        correct: 1,
        explanation:
          "Forward-lean with supported arms optimises diaphragm mechanics and accessory muscle efficiency, paired with pursed-lip breathing. Practical management questions like this dominate the cardiopulmonary section.",
      },
    ],
    strategy: [
      "Breadth beats depth: 100 questions across everything — revise every topic's Quick Revision section repeatedly.",
      "Memorise the 'tables': ROM norms, grading scales, contraindications, special tests — direct recall is most of the paper.",
      "Flashcards are your best tool here — this platform's 480 cards map exactly to this style.",
      "Practise at speed: ~90 seconds per question leaves margin; our 2-minute timer trains comfortably above exam pace.",
      "Don't burn money on 'leaked banks' — accuracy is unreliable; blueprint + breadth wins.",
    ],
    quizPlan: [
      "Flashcards for every topic until instant recall",
      "10-question Practice Mode quizzes topic-by-topic for rapid feedback",
      "Two 30-question Mixed Mock Exams per week at full speed",
    ],
  },

  india: {
    id: "india",
    name: "Indian Exams — MPT Entrance & Government Recruitment",
    shortName: "India MPT/Govt",
    region: "India",
    body: "AIIMS, ESIC, RRB, state bodies & universities",
    website: "each body's official portal",
    intro:
      "India has no single national licence exam — the high-stakes tests are MPT entrance exams and physiotherapist recruitment papers (AIIMS, ESIC, RRB, state health services), all MCQ-based over the full BPT syllabus.",
    howToApply: [
      { title: "Watch for the notification", text: "Each body releases its own notification (university MPT brochures; AIIMS/ESIC/RRB recruitment ads). Follow official portals — dates, eligibility and fees are in the notification PDF." },
      { title: "Check eligibility", text: "Typically BPT with completed internship from a recognised institution; state council registration is often required for job posts (register with your state physiotherapy council after internship)." },
      { title: "Apply online", text: "Fill the form on the official portal, upload documents/photo/signature, pay the fee before the deadline. Keep printouts of everything." },
      { title: "Admit card & exam day", text: "Download the admit card when released; exams are computer-based or OMR MCQ papers, usually 90–120 minutes, frequently with negative marking (commonly −¼ mark)." },
      { title: "Merit, counselling & documents", text: "MPT: merit-based counselling for specialisation seats. Jobs: merit list → document verification → possible interview/skill test → posting." },
    ],
    pastPapers: {
      reality:
        "Unlike licensing exams, several Indian recruitment bodies' previous papers do circulate, and some official mock links appear with notifications. Quality varies wildly in coaching compilations — cross-check every remembered answer against a textbook. The question STYLE below reflects what these papers actually ask: direct, syllabus-wide, anatomy-heavy recall.",
      officialSources: [
        "Official mock tests linked in AIIMS/ESIC/RRB notifications, when provided",
        "University MPT sample papers from the university's own site",
        "This platform: Anatomy + Assessment + Electrotherapy topics mirror the highest-yield sections",
      ],
    },
    sampleQuestions: [
      {
        q: "The rotator cuff consists of supraspinatus, infraspinatus, teres minor and:",
        options: ["Teres major", "Subscapularis", "Deltoid", "Coracobrachialis"],
        correct: 1,
        explanation:
          "SITS: Supraspinatus, Infraspinatus, Teres minor, Subscapularis. Straight anatomy recall of this kind is the backbone of Indian physio papers.",
      },
      {
        q: "Axillary crutch length is best measured as the distance from the anterior axillary fold to a point:",
        options: [
          "At the level of the ankle",
          "15 cm lateral to the heel",
          "5 cm below the knee",
          "At the greater trochanter",
        ],
        correct: 1,
        explanation:
          "Standard fitting: anterior axillary fold to a point ~15 cm (6 inches) lateral/anterior to the heel, with 2–3 finger gap at the axilla and ~20–30° elbow flexion. Aids-and-appliances numbers are recruitment-paper staples.",
      },
      {
        q: "In interferential therapy, two medium-frequency currents of 4000 Hz and 4100 Hz produce a beat frequency of:",
        options: ["100 Hz", "4050 Hz", "8100 Hz", "10 Hz"],
        correct: 0,
        explanation:
          "Beat frequency = difference between the two carrier frequencies = 100 Hz. Electrotherapy calculations appear verbatim in many Indian papers.",
      },
      {
        q: "The normal single-cycle gait stance phase constitutes approximately what percentage of the gait cycle?",
        options: ["40%", "50%", "60%", "75%"],
        correct: 2,
        explanation:
          "Stance ≈ 60%, swing ≈ 40% at natural speed, with two double-support periods. Gait percentages are among the most repeated physiotherapy questions in India.",
      },
      {
        q: "Which nerve injury causes 'winging of the scapula'?",
        options: ["Axillary nerve", "Long thoracic nerve", "Suprascapular nerve", "Thoracodorsal nerve"],
        correct: 1,
        explanation:
          "Long thoracic nerve palsy weakens serratus anterior → medial winging. Nerve-lesion one-liners (also Erb's, claw hand, wrist drop, foot drop) recur across every recruitment body's papers.",
      },
    ],
    strategy: [
      "Negative marking changes everything: attempt sure answers, flag 50/50s, skip pure guesses.",
      "Anatomy + basic sciences carry the most marks — over-invest there (our Anatomy and Assessment topics).",
      "Numbers win papers: ROM values, gait percentages, crutch measurements, electrotherapy parameters. Drill flashcards.",
      "Speed practice: 100 questions in 90 minutes means under a minute each — use Practice Mode for fast cycles.",
      "Keep documents ready year-round (council registration, internship certificate) — notifications give short windows.",
    ],
    quizPlan: [
      "Daily flashcards: Anatomy, Gait, Electrotherapy, Exercise Prescription",
      "Topic quizzes in Practice Mode for speed, then Exam Mode for accuracy discipline",
      "Mixed Mock Exams weekly — track accuracy above 70% before applying speed pressure",
    ],
  },

  other: {
    id: "other",
    name: "UK (HCPC) & Australia (APC) Routes",
    shortName: "UK & Australia",
    region: "United Kingdom · Australia",
    body: "HCPC / Australian Physiotherapy Council",
    website: "hcpc-uk.org · physiocouncil.com.au",
    intro:
      "Two popular international routes with very different shapes: the UK assesses your application and evidence (no exam), while Australia runs a staged assessment with a written exam and clinical assessments.",
    howToApply: [
      { title: "UK — HCPC international application", text: "Compile your degree transcripts, course hours, references and evidence of scope; apply online to HCPC. Assessment is document-based — there is no licensing exam. English requirements (IELTS/OET) apply." },
      { title: "UK — after registration", text: "Once on the HCPC register you can work as a physiotherapist; most international grads start in Band 5 NHS posts. Keep CPD records — HCPC audits." },
      { title: "Australia — eligibility assessment", text: "Apply to the Australian Physiotherapy Council with credentials and English scores; they confirm eligibility for the assessment pathway." },
      { title: "Australia — written assessment", text: "Computer-based MCQ exam testing applied clinical knowledge across cardiorespiratory, musculoskeletal and neurological practice." },
      { title: "Australia — clinical assessment & registration", text: "Pass practical/clinical assessments, then register with AHPRA to practise. The whole pathway commonly takes a year or more — plan finances and timing." },
    ],
    pastPapers: {
      reality:
        "UK: there is no exam, so 'past papers' don't exist — your evidence file is the assessment. Australia: APC keeps its written questions confidential but publishes the exam format and candidate guides. Both reward the same thing: guideline-consistent clinical reasoning.",
      officialSources: [
        "HCPC international application guidance (hcpc-uk.org)",
        "APC candidate handbooks and format guides (physiocouncil.com.au)",
        "This platform's Exam Mode quizzes for clinical-reasoning practice",
      ],
    },
    sampleQuestions: [
      {
        q: "A patient with acute non-specific low back pain asks whether to rest in bed. Best evidence-based advice is:",
        options: [
          "Strict bed rest for one week",
          "Stay active and continue usual activities within pain tolerance",
          "Avoid all lifting for 6 weeks",
          "Wait for an MRI before moving",
        ],
        correct: 1,
        explanation:
          "Every major guideline (NICE and equivalents) advises staying active for acute LBP; bed rest slows recovery. Both UK interviews and the APC exam reward guideline-first answers.",
      },
      {
        q: "Under UK practice, before treating a patient the physiotherapist must FIRST ensure:",
        options: [
          "The GP has faxed approval",
          "Valid informed consent has been obtained",
          "A chaperone is present for every session",
          "The patient signs a liability waiver",
        ],
        correct: 1,
        explanation:
          "Informed consent — capacity, information, voluntariness — precedes any assessment or treatment. Professionalism and consent feature heavily in HCPC standards and APC scenarios alike.",
      },
      {
        q: "Which patient should be prioritised for review on a morning surgical ward list?",
        options: [
          "Day 3 THR mobilising well",
          "Day 1 upper-abdominal surgery with SpO2 91% on air and a weak wet cough",
          "Day 5 TKR awaiting discharge letter",
          "Day 2 ORIF ankle, comfortable, NWB established",
        ],
        correct: 1,
        explanation:
          "Post-abdominal-surgery hypoxaemia with poor secretion clearance risks pneumonia — the highest acuity problem physio can change today. Prioritisation reasoning is classic APC material.",
      },
      {
        q: "A stroke patient neglects the left side of space. Where should the therapist mainly position themselves and key objects during rehabilitation?",
        options: [
          "On the right side to ease communication",
          "Increasingly toward the left (affected) side to drive scanning and attention",
          "Directly overhead",
          "Behind the patient",
        ],
        correct: 1,
        explanation:
          "Graded stimulation toward the neglected side promotes scanning and attention retraining; always working from the 'good' side entrenches neglect.",
      },
      {
        q: "For chronic stable angina patients in a community exercise class, sublingual GTN should be:",
        options: [
          "Locked away for safety",
          "Kept with the patient and accessible during sessions",
          "Taken prophylactically before every class by all cardiac patients",
          "Replaced by aspirin during exercise",
        ],
        correct: 1,
        explanation:
          "Patients keep their GTN accessible; therapists know the stop-rest-GTN protocol for anginal symptoms. Medication awareness within exercise settings is standard fare in both systems.",
      },
    ],
    strategy: [
      "UK: your 'exam' is the paperwork — map every course module and placement hour to HCPC's criteria meticulously.",
      "UK: invest in English scores early (IELTS 7/OET B typically) — it's the most common delay.",
      "Australia: the written exam is applied, not recall — practise choosing the best next action, not just facts.",
      "Australia: cardiorespiratory scenarios are weighted more than many candidates expect — our Acute Care and COPD topics cover this.",
      "Both: professional standards, consent and prioritisation questions are decided by safety-first reasoning.",
    ],
    quizPlan: [
      "Exam Mode quizzes across MSK, Neuro and Cardiopulmonary with emphasis on 'best next step' review",
      "Acute Care & ICU + Cardiac Rehab + COPD quizzes for the cardiorespiratory weighting",
      "Mixed Mock Exams to rehearse cross-topic switching",
    ],
  },
};
