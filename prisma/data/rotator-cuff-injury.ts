import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "rotator-cuff-injury",
  title: "Rotator Cuff Injuries",
  category: "Musculoskeletal",
  description:
    "Master the anatomy, injury spectrum, assessment and staged physiotherapy rehabilitation of rotator cuff tendinopathy and tears — the most common cause of shoulder pain.",
  difficulty: "Intermediate",
  estMinutes: 30,
  icon: "activity",
  keyTakeaways: [
    "The rotator cuff is four muscles — supraspinatus, infraspinatus, teres minor and subscapularis — that compress and centre the humeral head in the glenoid.",
    "Cuff pathology is a spectrum: reactive tendinopathy → tendon disrepair/degeneration → partial-thickness tear → full-thickness tear.",
    "Supraspinatus is the most commonly affected tendon; many tears are degenerative and age-related rather than traumatic.",
    "Asymptomatic cuff tears are common in older adults — imaging findings must be matched to the clinical picture.",
    "A painful arc (roughly 60–120° of abduction) suggests subacromial pain; lag signs suggest a substantial tear.",
    "Progressive loaded exercise is first-line care and matches surgical outcomes for many atraumatic tears.",
    "Scapular control and posterior cuff strength are core rehabilitation targets, not just the torn tendon itself.",
    "Acute traumatic tears in younger patients with marked weakness warrant early surgical opinion — do not delay referral.",
  ],
  sections: [
    {
      slug: "cuff-anatomy",
      title: "Anatomy of the Rotator Cuff",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "The rotator cuff is a group of four muscles arising from the scapula whose tendons blend with the glenohumeral joint capsule and insert onto the humeral tuberosities. Together they form a nearly continuous cuff of tissue around the humeral head — hence the name.",
        },
        { kind: "image", illustration: "shoulder-joint", caption: "The glenohumeral joint with the rotator cuff muscles compressing the humeral head into the shallow glenoid fossa." },
        {
          kind: "cards",
          items: [
            { title: "Supraspinatus", text: "Runs from the supraspinous fossa under the acromion to the greater tuberosity. Initiates and assists abduction; the most commonly torn tendon because it passes through the subacromial space.", icon: "arrow-up" },
            { title: "Infraspinatus", text: "From the infraspinous fossa to the greater tuberosity. The main external rotator of the shoulder, producing roughly 60% of external rotation force.", icon: "rotate-ccw" },
            { title: "Teres minor", text: "From the lateral scapular border to the greater tuberosity. External rotation, especially in elevated arm positions; innervated by the axillary nerve (the other three are not).", icon: "rotate-cw" },
            { title: "Subscapularis", text: "From the subscapular fossa to the lesser tuberosity — the only cuff muscle inserting anteriorly. The strongest cuff muscle; internally rotates and anteriorly stabilises the humeral head.", icon: "shield" },
          ],
        },
        { kind: "image", illustration: "rotator-cuff", caption: "The four rotator cuff muscles converging from the scapula onto the humeral tuberosities — note how the supraspinatus tendon passes beneath the acromion, explaining its vulnerability to compressive load." },
        {
          kind: "paragraph",
          text: "The supraspinatus tendon passes beneath the coraco-acromial arch through the subacromial space, cushioned by the subacromial bursa. This space narrows during mid-range elevation, which is why compressive load on the tendon and bursa peaks in that range.",
        },
        {
          kind: "keypoints",
          title: "Remember: SITS",
          items: [
            "Supraspinatus — abduction initiation (suprascapular nerve)",
            "Infraspinatus — external rotation (suprascapular nerve)",
            "Teres minor — external rotation (axillary nerve)",
            "Subscapularis — internal rotation (upper & lower subscapular nerves)",
            "Three insert on the greater tuberosity; subscapularis inserts on the lesser tuberosity",
          ],
        },
        {
          kind: "pearls",
          items: [
            "The supraspinatus tendon has a relatively hypovascular zone near its insertion — one reason degenerative change concentrates there.",
            "Cuff tendons blend with each other and the capsule; a \"supraspinatus tear\" often extends into infraspinatus.",
          ],
        },
      ],
    },
    {
      slug: "cuff-function",
      title: "Function & Force Couples",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "The glenohumeral joint sacrifices bony stability for mobility: the glenoid is a shallow socket covering only a fraction of the humeral head. The cuff's primary job is therefore dynamic stability — compressing and centring the humeral head in the glenoid so the powerful deltoid and pectoral muscles can move the arm without the head migrating.",
        },
        {
          kind: "steps",
          items: [
            { title: "Concavity compression", text: "The cuff muscles fire together to press the humeral head into the concave glenoid, creating a stable fulcrum for arm movement." },
            { title: "Coronal-plane force couple", text: "The deltoid pulls the humerus upward during elevation; the infraspinatus, teres minor and subscapularis pull the head downward and inward. Balanced, they produce smooth rotation; unbalanced (cuff weakness), the head migrates superiorly and compresses subacromial tissues." },
            { title: "Transverse-plane force couple", text: "Subscapularis anteriorly and infraspinatus/teres minor posteriorly balance each other to keep the head centred front-to-back." },
            { title: "Scapulohumeral rhythm", text: "Full elevation combines roughly 2° of glenohumeral movement for every 1° of scapulothoracic rotation. The scapula must upwardly rotate and posteriorly tilt to keep the acromion out of the way — poor scapular control loads the cuff." },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "The cuff is a stabiliser first and a mover second",
            "Deltoid + inferior cuff = the key coronal force couple for elevation",
            "Scapular dyskinesis alters subacromial space and cuff loading",
          ],
        },
        {
          kind: "pearls",
          items: [
            "A patient with a large cuff tear may still elevate fully if force couples are preserved — function depends on balance, not just tendon integrity.",
            "This is why rehabilitation targets the whole shoulder girdle, including scapular muscles, rather than one tendon.",
          ],
        },
      ],
    },
    {
      slug: "injury-spectrum",
      title: "The Injury Spectrum: Tendinopathy to Tear",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Rotator cuff disease is best understood as a continuum rather than separate diagnoses. Load that exceeds the tendon's capacity — either a sudden spike or chronic overload without recovery — drives the tendon along the spectrum, while age-related degeneration lowers its capacity.",
        },
        {
          kind: "steps",
          items: [
            { title: "Reactive tendinopathy", text: "Short-term, non-inflammatory thickening of the tendon after acute overload. Reversible if load is managed — common in younger patients after unaccustomed activity." },
            { title: "Tendon disrepair & degeneration", text: "With continued overload the matrix disorganises: collagen breaks down, cells change and vessels/nerves grow in. The tendon is weaker and less able to tolerate load." },
            { title: "Partial-thickness tear", text: "A tear affecting only part of the tendon depth — articular-sided (most common), bursal-sided, or intrasubstance. May be painful or silent." },
            { title: "Full-thickness tear", text: "The tear extends through the whole tendon depth, creating a communication between joint and bursa. Ranges from a pinhole defect to massive tears involving multiple tendons with retraction." },
          ],
        },
        {
          kind: "table",
          headers: ["Feature", "Degenerative (atraumatic) tear", "Traumatic tear"],
          rows: [
            ["Typical age", "Over 50–60, prevalence rises each decade", "Any age, including younger patients"],
            ["Onset", "Gradual, often no clear event", "Sudden — fall, dislocation, forceful pull"],
            ["Tendon quality", "Degenerate, often frayed", "Previously healthy tissue"],
            ["First-line care", "Exercise-based rehabilitation", "Early surgical opinion if weakness is marked"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "Roughly a quarter of people over 60 and half over 70 have a cuff tear on imaging with no symptoms — a tear on a scan is not automatically the pain source.",
            "\"Subacromial impingement\" as a purely structural diagnosis has fallen out of favour; \"subacromial pain\" or \"rotator cuff related shoulder pain\" reflect the load-capacity model better.",
          ],
        },
      ],
    },
    {
      slug: "risk-factors",
      title: "Causes & Risk Factors",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Cuff pathology arises from the interaction of intrinsic tendon factors (age, biology, vascularity) and extrinsic loading factors (occupation, sport, sudden load change). Most degenerative tears reflect intrinsic decline; most traumatic tears reflect a single overwhelming load.",
        },
        {
          kind: "cards",
          items: [
            { title: "Age", text: "The dominant risk factor — tendon cellularity, vascularity and collagen quality decline with age, and tear prevalence rises steeply after 50.", icon: "clock" },
            { title: "Overhead occupation/sport", text: "Repetitive elevated work (painting, assembly) and overhead sports (throwing, swimming, tennis) chronically load the cuff.", icon: "hammer" },
            { title: "Sudden load change", text: "Rapid spikes in training volume or new unaccustomed tasks outpace tendon adaptation — a classic trigger for reactive tendinopathy.", icon: "trending-up" },
            { title: "Smoking", text: "Impairs tendon microcirculation and healing; associated with larger tears and poorer repair outcomes.", icon: "wind" },
            { title: "Diabetes & metabolic factors", text: "Hyperglycaemia stiffens collagen (glycation) and impairs tendon health; diabetes worsens outcomes after both rehab and surgery.", icon: "droplet" },
            { title: "Trauma", text: "Falls onto the arm, forceful traction, or shoulder dislocation — a first dislocation over age 40 tears the cuff in a large proportion of cases.", icon: "alert-triangle" },
            { title: "Genetics", text: "Family history increases tear risk, suggesting inherited tendon quality differences.", icon: "dna" },
            { title: "Scapular & postural factors", text: "Poor scapular upward rotation and thoracic stiffness may narrow the subacromial space during elevation and alter cuff load.", icon: "move" },
          ],
        },
        {
          kind: "keypoints",
          title: "Modifiable vs non-modifiable",
          items: [
            "Modifiable: load management, smoking, metabolic control, strength and scapular mechanics",
            "Non-modifiable: age, genetics, previous trauma",
            "Rehabilitation raises the tendon's capacity to meet its load",
          ],
        },
      ],
    },
    {
      slug: "clinical-presentation",
      title: "Clinical Presentation",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "cards",
          items: [
            { title: "Lateral shoulder pain", text: "Classically felt over the deltoid region and upper arm, often referring towards the deltoid insertion — rarely below the elbow.", icon: "map-pin" },
            { title: "Pain on elevation", text: "Reaching overhead, behind the back (tucking in a shirt, fastening a bra) and across the body reproduce symptoms.", icon: "arrow-up-circle" },
            { title: "Night pain", text: "Pain lying on the affected shoulder is very common and often the main complaint driving people to seek care.", icon: "moon" },
            { title: "Painful arc", text: "Pain through roughly 60–120° of active abduction, easing above and below that range — the arc where subacromial load peaks.", icon: "activity" },
            { title: "Weakness", text: "Weakness of elevation or external rotation; marked weakness or 'the arm just won't go up' suggests a larger tear.", icon: "battery-low" },
            { title: "Crepitus & catching", text: "Clicking or catching in mid-range elevation from bursal thickening or tendon fraying.", icon: "volume-2" },
          ],
        },
        {
          kind: "paragraph",
          text: "Onset is usually gradual in degenerative disease. A sudden onset after trauma — especially with immediate weakness — raises suspicion of an acute tear. Massive chronic tears can present as 'pseudoparalysis': inability to actively elevate the arm despite full passive range.",
        },
        {
          kind: "redflags",
          items: [
            "Trauma with acute severe weakness or inability to elevate — possible acute tear or fracture: prompt medical review and imaging",
            "Shoulder dislocation in a patient over 40 — high probability of associated cuff tear",
            "Unexplained mass, night sweats, weight loss or history of cancer",
            "Red, hot, swollen shoulder with fever — possible septic arthritis",
            "Marked sensory loss or global weakness — consider neurological cause (cervical radiculopathy, brachial neuritis)",
          ],
        },
      ],
    },
    {
      slug: "assessment",
      title: "Assessment & Special Tests",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Assessment combines history, active and passive movement, strength testing and clusters of special tests. No single test is diagnostic — combinations improve accuracy, and the pattern (painful but strong vs painful and weak vs lag signs) tells you where on the spectrum the patient sits.",
        },
        {
          kind: "steps",
          items: [
            { title: "History", text: "Age, onset (gradual vs traumatic), aggravating positions (overhead, behind back, lying on it), night pain, occupation and sport, previous dislocation, systemic health (diabetes, smoking)." },
            { title: "Observation", text: "Muscle wasting in the supraspinous and infraspinous fossae (chronic tears or suprascapular nerve pathology), posture, scapular position and movement during elevation." },
            { title: "Active movement", text: "Elevation and abduction — note range, painful arc (~60–120°), compensations (shrugging, trunk lean). Compare hand-behind-back and hand-behind-head." },
            { title: "Passive movement", text: "Usually full and relatively pain-free in cuff pathology. Marked global passive restriction suggests frozen shoulder or glenohumeral OA instead." },
            { title: "Resisted/strength testing", text: "Isometric abduction, external rotation and internal rotation. 'Painful and strong' suggests tendinopathy; 'painful and weak' or painless weakness suggests a tear." },
            { title: "Special tests & lag signs", text: "Cluster tests by suspected structure (below). Lag signs are the most specific findings for full-thickness tears." },
          ],
        },
        {
          kind: "table",
          headers: ["Test", "How it is done", "Interpretation"],
          rows: [
            ["Painful arc", "Active abduction; pain between ~60–120° that eases beyond", "Suggests subacromial/cuff-related pain"],
            ["Jobe / empty can", "Resisted elevation at 90° in the scapular plane, thumb down", "Pain and/or weakness implicates supraspinatus; weakness raises tear likelihood"],
            ["External rotation lag sign", "Examiner places arm in near-full ER at the side; patient tries to hold it", "Inability to hold (arm drifts inward) — strong indicator of full-thickness infraspinatus/supraspinatus tear"],
            ["Drop arm test", "Patient slowly lowers the arm from full abduction", "Sudden drop or inability to control descent suggests a large supraspinatus tear — specific but not sensitive"],
            ["Hawkins–Kennedy", "Passive internal rotation with the arm at 90° flexion", "Pain suggests subacromial pain; sensitive but poorly specific — useful mainly to rule out when negative"],
            ["Lift-off / belly-press", "Hand lifted off the lumbar spine, or elbow held forward pressing belly", "Weakness implicates subscapularis"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "Combine tests: a painful arc + positive Jobe + weak external rotation substantially raises the probability of cuff disease; all three negative makes it unlikely.",
            "Always screen the cervical spine — radicular pain can mimic shoulder pain, and C5 radiculopathy weakens abduction and external rotation.",
            "Ultrasound and MRI have similar accuracy for full-thickness tears; image when the result would change management (e.g. surgical candidacy).",
          ],
        },
      ],
    },
    {
      slug: "differential-diagnosis",
      title: "Differential Considerations",
      estMinutes: 2,
      difficulty: "Advanced",
      content: [
        {
          kind: "table",
          headers: ["Condition", "Distinguishing features"],
          rows: [
            ["Frozen shoulder (adhesive capsulitis)", "Marked, global loss of passive range — especially external rotation; passive ROM equals active ROM restriction"],
            ["Glenohumeral OA", "Older patient, progressive stiffness, crepitus, loss of passive ER; X-ray changes"],
            ["Acromioclavicular joint pain", "Pain localised on top of the shoulder, worse at end-range elevation and horizontal adduction; tender AC joint"],
            ["Cervical radiculopathy", "Neck pain, pain below the elbow, dermatomal sensory change, reflex change; Spurling's positive"],
            ["Calcific tendinitis", "Sudden severe pain during the resorptive phase, sometimes with night pain out of proportion; calcification on imaging"],
            ["Shoulder instability", "Younger patient, apprehension in abduction–external rotation, history of subluxation or dislocation"],
            ["Referred pain (cardiac, diaphragm, apical lung)", "Symptoms not reproduced by shoulder movement or testing — a key screening finding"],
          ],
        },
        {
          kind: "warning",
          title: "Do not miss",
          items: [
            "Pain not altered by any shoulder movement or resisted test should raise suspicion of referred or non-musculoskeletal pain.",
            "A stiff shoulder is not a cuff problem: check passive external rotation early — if markedly restricted, think frozen shoulder or OA.",
            "Progressive painless wasting and weakness may indicate suprascapular nerve entrapment or neurological disease.",
          ],
        },
      ],
    },
    {
      slug: "management",
      title: "Physiotherapy Management Pathway",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "For atraumatic cuff-related shoulder pain — including many full-thickness degenerative tears — a progressive exercise programme is first-line care. Trials comparing exercise with subacromial decompression and with repair of degenerative tears show broadly comparable outcomes for most patients, so surgery is reserved for selected cases and failed conservative care.",
        },
        {
          kind: "steps",
          items: [
            { title: "1. Education & load management", text: "Explain the load-capacity model, reassure that most cuff pain improves without surgery, and temporarily modify — not eliminate — aggravating overhead load. Address sleep positioning early (pillow support under the arm)." },
            { title: "2. Phase I — settle & activate (0–4 weeks)", text: "Reduce irritability: pendulums, supported range-of-movement, isometric cuff loading at low intensity. Maintain scapular and postural activity. Analgesia review with the GP if night pain blocks sleep." },
            { title: "3. Phase II — progressive strengthening (4–12 weeks)", text: "Isotonic loading of external rotators, abductors and scapular muscles, progressing resistance and range as irritability allows. Begin elevation strengthening below the painful range and expand upward." },
            { title: "4. Phase III — functional & overhead loading (12+ weeks)", text: "Load in overhead and sport/work-specific positions: presses, pulls, carries, throwing progressions. Restore endurance, speed and confidence." },
            { title: "5. Review & escalate if needed", text: "If a well-dosed 12-week programme fails, review the diagnosis, consider imaging and discuss options — corticosteroid injection for short-term pain relief (sparingly), or surgical opinion." },
          ],
        },
        {
          kind: "table",
          headers: ["Scenario", "Recommended pathway"],
          rows: [
            ["Atraumatic tendinopathy / partial tear", "Exercise-based rehabilitation 12+ weeks; surgery rarely needed"],
            ["Atraumatic full-thickness tear, older patient", "Trial of structured rehabilitation first; surgical opinion if it fails"],
            ["Acute traumatic full-thickness tear, younger/active patient", "Early surgical opinion — repair outcomes are better before retraction and atrophy"],
            ["Massive irreparable tear with pseudoparalysis", "Specialist opinion: options include anterior deltoid programme or reverse shoulder arthroplasty"],
          ],
        },
        {
          kind: "warning",
          title: "Common management mistakes",
          items: [
            "Complete rest — tendons need load to recover; rest lowers capacity further",
            "Ignoring night pain and sleep — poor sleep amplifies pain and stalls rehab",
            "Endless passive treatment without progressive loading",
            "Delaying surgical referral for a young patient with an acute traumatic tear",
            "Chasing imaging findings that do not match the clinical picture",
          ],
        },
      ],
    },
    {
      slug: "exercise-progression",
      title: "Exercise Progression",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "The programme below follows a graded sequence: unload and settle, isometric activation, isotonic external rotation and scapular work, then progressive elevation. Use the 24-hour rule — pain up to about 4–5/10 during exercise that settles by the next day is acceptable load.",
        },
        { kind: "image", illustration: "resistance-band", caption: "Elastic resistance bands provide the graded, low-inertia load used for isotonic external rotation and scapular work — progress by band grade and range rather than by speed." },
        {
          kind: "exercise",
          name: "Pendulum exercises",
          purpose: "Gentle unloaded movement to reduce pain and stiffness in the irritable phase without active cuff load.",
          position: "Standing, hinged forward at the hips, supporting the unaffected arm on a table; affected arm hanging relaxed.",
          execution: "Let the arm hang and swing it gently in small circles and forward–back arcs using body sway, not shoulder muscles.",
          dosage: "1–2 minutes each direction, 2–3× daily during the irritable phase.",
          progression: "Increase the arc size, then progress to active assisted elevation with a stick or table slides.",
          precautions: "Movement should feel easing, not provocative; keep the arm truly relaxed.",
        },
        {
          kind: "exercise",
          name: "Isometric external rotation",
          purpose: "Load the posterior cuff with minimal irritability; isometrics can also reduce pain acutely.",
          position: "Standing with the elbow bent to 90° and tucked at the side, back of the hand against a wall or door frame.",
          execution: "Press the back of the hand outward into the wall without any movement, building to a firm but comfortable effort (about 50–70% max). Hold 10–30 seconds, relax fully.",
          dosage: "5 holds of 10–30 seconds, 1–2× daily.",
          progression: "Increase hold duration and effort, then progress to isotonic band external rotation.",
          precautions: "Keep the shoulder relaxed and avoid shrugging; pain should stay low (≤3–4/10) and settle quickly.",
        },
        {
          kind: "exercise",
          name: "Side-lying external rotation",
          purpose: "Isotonic strengthening of infraspinatus and teres minor — among the highest posterior-cuff activation exercises with low subacromial load.",
          position: "Lying on the unaffected side, affected elbow bent to 90° and resting on the side, small towel roll between elbow and trunk, light dumbbell in hand.",
          execution: "Keeping the elbow pinned to the towel, rotate the forearm up towards the ceiling, then lower slowly over 3 seconds.",
          dosage: "10–15 reps × 3 sets, 3×/week, starting with 0.5–2 kg.",
          progression: "Increase load gradually, then progress to external rotation with the arm abducted to 90° for overhead athletes.",
          precautions: "The towel roll improves cuff blood flow and alignment; stop the set if compensatory trunk roll appears.",
        },
        {
          kind: "exercise",
          name: "Scapular retraction with band (rows)",
          purpose: "Strengthen the scapular retractors and posterior girdle to restore the platform the cuff works from.",
          position: "Standing or sitting tall, a resistance band anchored at chest height, arms forward holding the band.",
          execution: "Draw the shoulder blades gently back and down, then pull the elbows past the trunk in a rowing action. Pause 2 seconds, return with control.",
          dosage: "10–12 reps × 3 sets, 3×/week.",
          progression: "Thicker band, single-arm rows, then combine with external rotation at the end of the row.",
          precautions: "Avoid aggressive 'pinching' of the blades or hitching the shoulders towards the ears.",
        },
        {
          kind: "exercise",
          name: "Progressive elevation strengthening (scaption raise)",
          purpose: "Rebuild strength and confidence in elevation — the key functional demand — starting below the painful arc.",
          position: "Standing, light dumbbell in hand, arm at the side, thumb pointing up, moving in the scapular plane (about 30° forward of the frontal plane).",
          execution: "Raise the arm in the scapular plane to a comfortable height below the painful range, lower slowly over 3 seconds. Over the weeks, expand the range towards full elevation as pain allows.",
          dosage: "8–12 reps × 3 sets, 3×/week.",
          progression: "Increase range first, then load; progress to overhead press, carries and work/sport-specific overhead tasks.",
          precautions: "Thumb-up (full can) position is better tolerated than thumb-down; avoid pushing through a sharply painful arc early on.",
        },
        {
          kind: "keypoints",
          title: "Progression principles",
          items: [
            "Sequence: unloaded movement → isometrics → isotonic ER/scapular work → elevation → overhead function",
            "Use the 24-hour symptom response to judge dose; progress one variable at a time",
            "Meaningful tendon adaptation takes 12+ weeks — set expectations early",
            "Include the kinetic chain: trunk and legs contribute to overhead tasks",
          ],
        },
      ],
    },
    {
      slug: "precautions",
      title: "Precautions & Red Flags",
      estMinutes: 2,
      content: [
        {
          kind: "warning",
          title: "Exercise precautions",
          items: [
            "Highly irritable shoulders (constant pain, severe night pain) need lower starting loads — begin with isometrics and supported movement",
            "After surgical repair, follow the surgeon's protocol strictly: healing tendon must not be overloaded early (typically sling 4–6 weeks, no active elevation initially)",
            "Avoid rapid spikes in overhead volume when returning to sport or manual work",
            "Corticosteroid injections give short-term relief but repeated injections may harm tendon tissue — use sparingly and always alongside rehabilitation",
          ],
        },
        {
          kind: "redflags",
          items: [
            "Acute trauma with severe weakness, deformity or inability to move the arm — exclude fracture and acute tear",
            "First shoulder dislocation over age 40 — assess for associated cuff tear",
            "Hot, swollen, feverish shoulder — possible septic arthritis: urgent referral",
            "Unexplained mass, weight loss, night sweats or history of malignancy",
            "Progressive neurological signs — dermatomal sensory loss, multi-muscle weakness, or wasting without pain",
          ],
        },
        {
          kind: "paragraph",
          text: "These presentations need onward medical referral before or alongside physiotherapy. This content supports learning and does not replace clinical judgement or medical assessment.",
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
            "SITS muscles centre the humeral head; deltoid–inferior cuff force couple powers elevation",
            "Spectrum: reactive tendinopathy → degeneration → partial → full-thickness tear; supraspinatus most affected",
            "Presentation: lateral shoulder pain, painful arc 60–120°, night pain, weakness if torn",
            "Tests: Jobe/empty can (supraspinatus), ER lag sign (full-thickness tear), drop arm (large tear), Hawkins–Kennedy (sensitive screen), lift-off (subscapularis)",
            "Atraumatic disease: 12+ weeks progressive exercise first-line; traumatic tear in younger patient: early surgical opinion",
            "Exercise sequence: pendulum → isometric ER → side-lying ER + scapular rows → scaption → overhead loading",
            "Red flags: trauma with severe weakness, dislocation over 40, hot swollen joint, systemic features, neurological signs",
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
      text: "Which rotator cuff muscle inserts on the lesser tuberosity of the humerus?",
      options: ["Supraspinatus", "Infraspinatus", "Teres minor", "Subscapularis"],
      correctIndex: 3,
      explanation:
        "Subscapularis is the only cuff muscle that runs anterior to the joint, passing from the subscapular fossa to the lesser tuberosity. Supraspinatus, infraspinatus and teres minor all insert on the greater tuberosity.",
      difficulty: "Easy",
      tags: ["anatomy"],
      sectionSlug: "cuff-anatomy",
    },
    {
      text: "Which nerve supplies teres minor?",
      options: ["Suprascapular nerve", "Axillary nerve", "Upper subscapular nerve", "Musculocutaneous nerve"],
      correctIndex: 1,
      explanation:
        "Teres minor is innervated by the axillary nerve, unlike supraspinatus and infraspinatus (suprascapular nerve) and subscapularis (subscapular nerves). This matters clinically: axillary nerve injury after dislocation can weaken teres minor and deltoid together.",
      difficulty: "Hard",
      tags: ["anatomy"],
      sectionSlug: "cuff-anatomy",
    },
    {
      text: "What is the primary functional role of the rotator cuff at the glenohumeral joint?",
      options: [
        "Generating maximal abduction torque",
        "Compressing and centring the humeral head in the glenoid",
        "Limiting scapular movement during elevation",
        "Producing elbow flexion force",
      ],
      correctIndex: 1,
      explanation:
        "The glenoid is shallow, so the joint relies on dynamic stability. The cuff's main job is concavity compression — pressing the humeral head into the glenoid to create a stable fulcrum on which the deltoid and other prime movers can act.",
      difficulty: "Easy",
      tags: ["anatomy", "clinical-reasoning"],
      sectionSlug: "cuff-function",
    },
    {
      text: "In the coronal-plane force couple of the shoulder, which force does the inferior rotator cuff balance during elevation?",
      options: [
        "The downward pull of gravity on the scapula",
        "The upward/superior pull of the deltoid on the humerus",
        "The anterior pull of pectoralis major",
        "The retraction force of the rhomboids",
      ],
      correctIndex: 1,
      explanation:
        "During elevation the deltoid pulls the humerus superiorly. Infraspinatus, teres minor and subscapularis counter this with an inferomedial pull, keeping the head centred. When the cuff is weak or torn, the head migrates superiorly and compresses subacromial tissues.",
      difficulty: "Medium",
      tags: ["anatomy", "pathology"],
      sectionSlug: "cuff-function",
    },
    {
      text: "Which tendon is most commonly affected in rotator cuff disease, and why?",
      options: [
        "Subscapularis — it is the strongest and most heavily loaded",
        "Supraspinatus — it passes through the subacromial space and has a hypovascular insertional zone",
        "Teres minor — it has the smallest cross-sectional area",
        "Infraspinatus — it produces most external rotation force",
      ],
      correctIndex: 1,
      explanation:
        "Supraspinatus is most commonly affected. Its tendon passes beneath the coraco-acromial arch where compressive load peaks in mid-elevation, and it has a relatively hypovascular zone near its insertion where degenerative change concentrates.",
      difficulty: "Medium",
      tags: ["anatomy", "pathology"],
      sectionSlug: "injury-spectrum",
    },
    {
      text: "A 68-year-old has an ultrasound showing a full-thickness supraspinatus tear but reports no shoulder symptoms. What is the best interpretation?",
      options: [
        "The scan must be wrong and should be repeated",
        "Urgent surgical repair is needed before symptoms start",
        "Asymptomatic tears are common with age — no treatment is required for the imaging finding alone",
        "The patient should immobilise the shoulder to prevent extension of the tear",
      ],
      correctIndex: 2,
      explanation:
        "Rotator cuff tears are frequently asymptomatic — roughly a quarter of people over 60 and about half over 70 have a tear on imaging without symptoms. Treatment targets the clinical presentation, not the scan. Immobilisation would cause harm through stiffness and deconditioning.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "pathology"],
      sectionSlug: "injury-spectrum",
    },
    {
      text: "Which patient most warrants an early surgical opinion rather than a first-line exercise programme?",
      options: [
        "A 62-year-old with gradual-onset shoulder pain and a degenerative partial tear",
        "A 55-year-old office worker with a painful arc and strong resisted tests",
        "A 35-year-old manual worker with sudden weakness after a fall and a full-thickness traumatic tear",
        "A 70-year-old with night pain and an atraumatic full-thickness tear",
      ],
      correctIndex: 2,
      explanation:
        "Acute traumatic full-thickness tears in younger, active patients do better with early repair, before tendon retraction and muscle atrophy develop. Atraumatic and degenerative presentations are managed with structured rehabilitation first, with surgery reserved for failed conservative care.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "management",
    },
    {
      text: "A painful arc during active abduction typically occurs through which range?",
      options: ["0–30°", "60–120°", "150–180°", "Only at end range"],
      correctIndex: 1,
      explanation:
        "The classic painful arc spans roughly 60–120° of abduction — the range in which subacromial compressive load on the supraspinatus tendon and bursa peaks. Pain easing above and below this range supports subacromial/cuff-related pain. Pain only at end range points more towards the AC joint.",
      difficulty: "Easy",
      tags: ["assessment", "special-tests"],
      sectionSlug: "assessment",
    },
    {
      text: "How is the Jobe (empty can) test performed?",
      options: [
        "Passive internal rotation with the arm flexed to 90°",
        "Resisted elevation at 90° in the scapular plane with the thumb pointing down",
        "The patient holds the arm in maximal external rotation at the side",
        "Resisted internal rotation with the hand behind the back",
      ],
      correctIndex: 1,
      explanation:
        "The Jobe/empty can test resists elevation at 90° in the scapular plane with the arm internally rotated (thumb down, as if emptying a can). Pain and especially weakness implicate the supraspinatus. Option A describes Hawkins–Kennedy; option C the ER lag sign position; option D relates to subscapularis testing.",
      difficulty: "Easy",
      tags: ["special-tests", "assessment"],
      sectionSlug: "assessment",
    },
    {
      text: "A patient's arm drifts into internal rotation when the examiner places it in near-full external rotation and asks them to hold the position. What does this finding indicate?",
      options: [
        "A positive Hawkins–Kennedy test suggesting bursitis",
        "A positive external rotation lag sign, strongly suggesting a full-thickness posterosuperior cuff tear",
        "Normal fatigue of the deltoid",
        "Adhesive capsulitis",
      ],
      correctIndex: 1,
      explanation:
        "Inability to maintain externally rotated positioning — the arm 'lagging' back towards the body — is a positive external rotation lag sign. Lag signs are among the most specific clinical findings for full-thickness tears of supraspinatus/infraspinatus because the torn tendon cannot hold the position even without resistance.",
      difficulty: "Hard",
      tags: ["special-tests", "clinical-reasoning"],
      sectionSlug: "assessment",
    },
    {
      text: "Which statement best describes the diagnostic value of the Hawkins–Kennedy test?",
      options: [
        "Highly specific — a positive test confirms a full-thickness tear",
        "Sensitive but poorly specific — most useful for ruling out subacromial pain when negative",
        "It specifically isolates subscapularis",
        "It measures scapular upward rotation",
      ],
      correctIndex: 1,
      explanation:
        "Hawkins–Kennedy (passive internal rotation at 90° flexion) provokes subacromial structures and is reasonably sensitive but poorly specific: many conditions can make it positive. A negative test helps lower suspicion of subacromial pain; a positive test alone confirms little — which is why clusters of tests are used.",
      difficulty: "Hard",
      tags: ["special-tests", "clinical-reasoning"],
      sectionSlug: "assessment",
    },
    {
      text: "A positive drop arm test — inability to slowly control lowering from full abduction — most suggests which pathology?",
      options: [
        "A large supraspinatus tear",
        "Acromioclavicular joint sprain",
        "Biceps tendinopathy",
        "Cervical radiculopathy",
      ],
      correctIndex: 0,
      explanation:
        "The drop arm test challenges eccentric control of abduction. A sudden drop or inability to control the descent is quite specific for a substantial supraspinatus tear, though its sensitivity is low — many patients with tears can still control the movement using remaining cuff and deltoid.",
      difficulty: "Medium",
      tags: ["special-tests"],
      sectionSlug: "assessment",
    },
    {
      text: "Markedly restricted passive external rotation in a patient with shoulder pain should make you consider which alternative diagnosis?",
      options: [
        "Rotator cuff tendinopathy",
        "Frozen shoulder or glenohumeral osteoarthritis",
        "Subacromial bursitis",
        "AC joint sprain",
      ],
      correctIndex: 1,
      explanation:
        "Cuff pathology typically leaves passive range full or near-full. Marked global loss of passive movement — classically external rotation — indicates a capsular problem: frozen shoulder (adhesive capsulitis) or glenohumeral OA. This single passive test is one of the most useful differentiators in shoulder assessment.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "differential-diagnosis",
    },
    {
      text: "Why must the cervical spine be screened in every shoulder presentation?",
      options: [
        "Neck movement always reproduces cuff pain",
        "Cervical radiculopathy can mimic shoulder pain and C5 root involvement weakens abduction and external rotation",
        "The cuff muscles are innervated directly from the cervical plexus",
        "Shoulder pathology always causes neck stiffness",
      ],
      correctIndex: 1,
      explanation:
        "C5 radiculopathy can produce lateral shoulder/arm pain and weakness of abduction and external rotation — closely mimicking cuff disease. Clues to a cervical source include neck pain, symptoms below the elbow, dermatomal sensory change and reflex changes. Screening the neck prevents misdiagnosis.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "differential-diagnosis",
    },
    {
      text: "What is the evidence-based first-line management for atraumatic rotator cuff related shoulder pain, including many degenerative full-thickness tears?",
      options: [
        "Early arthroscopic subacromial decompression",
        "A progressive exercise programme over at least 12 weeks",
        "Complete rest in a sling for 6 weeks",
        "Serial corticosteroid injections every 6 weeks",
      ],
      correctIndex: 1,
      explanation:
        "Trials show progressive exercise achieves outcomes broadly comparable to subacromial decompression and to repair of degenerative tears for most patients. Rest lowers tendon capacity, and repeated steroid injections may harm tendon tissue. Surgery is reserved for traumatic tears in younger patients and failed conservative care.",
      difficulty: "Easy",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "management",
    },
    {
      text: "Why is side-lying external rotation a preferred early strengthening exercise for the posterior cuff?",
      options: [
        "It maximally loads the supraspinatus in the impingement position",
        "It produces high infraspinatus/teres minor activation with low subacromial load",
        "It primarily strengthens the deltoid",
        "It stretches the posterior capsule",
      ],
      correctIndex: 1,
      explanation:
        "Side-lying external rotation with the elbow at the side generates high posterior cuff (infraspinatus, teres minor) activation while keeping the arm out of the mid-elevation range where subacromial compression peaks — making it effective and well tolerated early in rehabilitation.",
      difficulty: "Medium",
      tags: ["exercise-therapy"],
      sectionSlug: "exercise-progression",
    },
    {
      text: "During elevation strengthening, why is the 'full can' (thumb-up, scapular plane) position generally preferred over the 'empty can' position?",
      options: [
        "It activates the supraspinatus less",
        "It achieves similar supraspinatus activation with less subacromial compression and better tolerance",
        "It prevents any deltoid contribution",
        "It only works the biceps",
      ],
      correctIndex: 1,
      explanation:
        "The full can (thumb-up) position in the scapular plane activates supraspinatus comparably to the empty can but with less internal rotation, reducing subacromial compressive stress and pain provocation. The empty can position is used for testing, not for training.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "exercise-progression",
    },
    {
      text: "A patient in phase II rehab reports 4/10 shoulder pain during banded rows that returns to baseline the same evening. What is the correct response?",
      options: [
        "Stop all resistance exercise for two weeks",
        "Continue the programme — this is acceptable loading by the 24-hour rule",
        "Switch entirely to passive treatment",
        "Refer immediately for surgical opinion",
      ],
      correctIndex: 1,
      explanation:
        "Under the widely used 24-hour rule, pain up to about 4–5/10 during exercise that settles to baseline within 24 hours indicates acceptable, adaptive load. The programme can continue and be progressed gradually. Stopping or going passive would stall the capacity gains rehabilitation depends on.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "exercise-progression",
    },
    {
      text: "A 45-year-old presents after their first shoulder dislocation. Why does this warrant specific assessment of the rotator cuff?",
      options: [
        "Dislocation always ruptures the biceps tendon",
        "First dislocation over age 40 is associated with a high rate of rotator cuff tears",
        "Dislocation makes cuff testing impossible for 6 months",
        "The cuff is never injured in dislocations",
      ],
      correctIndex: 1,
      explanation:
        "In patients over about 40, a first traumatic dislocation tears the rotator cuff in a substantial proportion of cases — the ageing cuff fails before the capsulolabral structures that typically tear in younger patients. Missed tears in this group cause persistent weakness, so assess cuff strength once the acute phase settles and refer if deficits persist.",
      difficulty: "Hard",
      tags: ["precautions", "clinical-reasoning", "assessment"],
      sectionSlug: "precautions",
    },
    {
      text: "Which presentation is a red flag requiring urgent medical referral rather than routine physiotherapy?",
      options: [
        "Night pain when lying on the affected shoulder",
        "A hot, swollen shoulder with fever and severe pain on any movement",
        "A painful arc between 60 and 120 degrees",
        "Clicking during mid-range elevation",
      ],
      correctIndex: 1,
      explanation:
        "A hot, swollen joint with fever and severe pain on any movement suggests septic arthritis — a medical emergency. Night pain when lying on the shoulder, a painful arc and mid-range clicking are all common features of routine cuff-related shoulder pain.",
      difficulty: "Easy",
      tags: ["precautions", "assessment"],
      sectionSlug: "precautions",
    },
  ],
  flashcards: [
    { front: "Name the four rotator cuff muscles (SITS).", back: "Supraspinatus, Infraspinatus, Teres minor, Subscapularis." },
    { front: "Which cuff muscle inserts on the lesser tuberosity?", back: "Subscapularis — the only anterior cuff muscle; the other three insert on the greater tuberosity." },
    { front: "What is the primary role of the rotator cuff?", back: "Dynamic stability — compressing and centring the humeral head in the glenoid (concavity compression)." },
    { front: "Describe the coronal-plane force couple of the shoulder.", back: "Deltoid pulls the humerus superiorly; infraspinatus, teres minor and subscapularis pull the head inferomedially — balanced, they allow smooth elevation." },
    { front: "State the rotator cuff injury spectrum.", back: "Reactive tendinopathy → tendon disrepair/degeneration → partial-thickness tear → full-thickness tear." },
    { front: "Range of the classic painful arc?", back: "Approximately 60–120° of active abduction — where subacromial load peaks." },
    { front: "What does a positive external rotation lag sign indicate?", back: "A full-thickness tear of the posterosuperior cuff (supraspinatus/infraspinatus) — lag signs are highly specific for full-thickness tears." },
    { front: "How is the Jobe / empty can test performed?", back: "Resisted elevation at 90° in the scapular plane with the thumb down; pain/weakness implicates supraspinatus." },
    { front: "Which cuff injury warrants early surgical opinion?", back: "Acute traumatic full-thickness tear in a younger/active patient — repair before retraction and atrophy gives better outcomes." },
    { front: "First-line management of atraumatic cuff-related shoulder pain?", back: "Education, load management and a progressive exercise programme over 12+ weeks — outcomes comparable to surgery for most patients." },
    { front: "Give the early-to-late exercise sequence for cuff rehab.", back: "Pendulums → isometric external rotation → side-lying ER + scapular rows → scaption/elevation strengthening → overhead functional loading." },
    { front: "Key differentiator between cuff pathology and frozen shoulder?", back: "Passive range: near-full in cuff pathology, markedly restricted (especially external rotation) in frozen shoulder." },
  ],
};

export default topic;
