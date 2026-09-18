import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "pelvic-floor",
  title: "Pelvic Floor Physiotherapy",
  category: "Musculoskeletal",
  description:
    "Anatomy and functions of the pelvic floor, common dysfunctions from stress incontinence to pelvic pain, evidence-based muscle training, and when relaxation — not strengthening — is the goal.",
  difficulty: "Intermediate",
  estMinutes: 24,
  icon: "circle-dot",
  keyTakeaways: [
    "The pelvic floor is a muscular sling (levator ani plus fascia) providing organ support, continence, and a contribution to trunk stability and sexual function.",
    "Dysfunction is not one problem: underactivity (incontinence, prolapse symptoms) and overactivity (pelvic pain, voiding difficulty) require opposite treatment approaches.",
    "Pelvic floor problems affect all genders and ages: postpartum and menopausal women, athletes in high-impact sport, and men after prostatectomy.",
    "Every physiotherapist should screen for pelvic floor dysfunction with simple questions; internal assessment belongs to specifically trained clinicians with informed consent.",
    "Supervised pelvic floor muscle training is first-line treatment for stress and mixed urinary incontinence, with strong evidence.",
    "Correct contraction cueing matters — around a third of people initially perform a Kegel incorrectly, often straining downwards.",
    "\"The Knack\" — a well-timed contraction before coughing or lifting — is a trainable skill that reduces leakage.",
    "Saddle anaesthesia with new bladder or bowel dysfunction is a cauda equina red flag — emergency referral, not pelvic floor exercises.",
  ],
  sections: [
    {
      slug: "anatomy-functions",
      title: "Anatomy & Functions",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "The pelvic floor closes the bony pelvic outlet like a muscular hammock, running from the pubic bone in front to the coccyx behind and between the ischial tuberosities laterally. Its main muscular layer, the pelvic diaphragm, is formed by levator ani (pubococcygeus, puborectalis and iliococcygeus) plus coccygeus, lined by fascia, with a superficial perineal layer below and the urethral and anal sphincters integrated within it.",
        },
        {
          kind: "cards",
          items: [
            { title: "Support", text: "Carries the pelvic organs (bladder, bowel, and uterus where present) against gravity and intra-abdominal pressure. Fascial ligaments and muscle share the load — when muscle fails, fascia is left to creep.", icon: "layers" },
            { title: "Continence", text: "Maintains urethral and anal closure at rest and during pressure rises; must also relax fully and at the right moment to allow voiding and defecation.", icon: "lock" },
            { title: "Stability contribution", text: "Works with the diaphragm, transversus abdominis and multifidus as the base of the abdominal 'pressure canister', pre-activating before limb movement in healthy function.", icon: "box" },
            { title: "Sexual function", text: "Contributes to arousal and orgasm; overactivity can contribute to pain with intercourse (dyspareunia).", icon: "heart" },
          ],
        },
        {
          kind: "image",
          illustration: "muscle-fiber",
          caption: "Pelvic floor muscles are skeletal muscle: roughly two-thirds slow-twitch fibres for sustained postural support, one-third fast-twitch for rapid closure during coughs and sneezes — which is why training includes both long holds and quick contractions.",
        },
        {
          kind: "keypoints",
          items: [
            "Levator ani (pubococcygeus, puborectalis, iliococcygeus) + coccygeus form the pelvic diaphragm",
            "Innervation is primarily via the pudendal nerve and direct sacral branches (S2–S4) — \"S2, 3, 4 keeps the pelvis off the floor\"",
            "Normal function requires the ability to contract, to fully relax, and to coordinate with breathing and pressure changes",
            "A healthy floor is dynamic: it lifts with a cough and descends with a relaxed exhale",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Think of the pelvic floor as a trampoline, not a rigid shelf — both stiffness (overactivity) and laxity (underactivity) are dysfunctions.",
          ],
        },
      ],
    },
    {
      slug: "dysfunction-types",
      title: "Types of Dysfunction",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Pelvic floor dysfunction spans two broad patterns. An underactive floor cannot generate or sustain enough closure and support — producing incontinence and prolapse symptoms. An overactive (non-relaxing) floor cannot let go — producing pelvic pain, voiding and defecation difficulty, and dyspareunia. Mixed pictures occur, which is why assessment precedes prescription.",
        },
        {
          kind: "cards",
          items: [
            { title: "Stress urinary incontinence", text: "Leakage with effort — cough, sneeze, laugh, lift, run — when urethral closure pressure is overwhelmed by intra-abdominal pressure. The classic underactivity presentation and the strongest indication for muscle training.", icon: "wind" },
            { title: "Urgency & urge incontinence", text: "A sudden compelling need to void, with or without leakage, often with frequency and nocturia (overactive bladder syndrome). Managed with bladder training, urge-suppression strategies and lifestyle change alongside muscle work.", icon: "bell" },
            { title: "Pelvic organ prolapse (concept)", text: "Descent of the bladder, uterus or rectum into the vaginal space, felt as heaviness, dragging or a bulge, typically worse with prolonged standing and by day's end. Muscle training reduces symptoms in mild-to-moderate prolapse; pessaries and surgery are options along the pathway.", icon: "arrow-down" },
            { title: "Overactive floor & pelvic pain", text: "A floor held tense that cannot relax: pelvic pain, dyspareunia, hesitancy or slow stream, constipation-type straining, sometimes tailbone or perineal pain. Strengthening makes this worse — downtraining comes first.", icon: "alert-circle" },
            { title: "Anal incontinence", text: "Involuntary loss of flatus or stool — under-reported and screened for directly; sphincter injury after childbirth is a common contributor.", icon: "shield" },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Underactive floor → leakage and poor support; Overactive floor → pain and poor emptying",
            "Mixed urinary incontinence combines stress and urgency features — treat the dominant component first",
            "Symptoms are common but never \"normal\" — most improve with conservative care, and nobody should simply live with them",
          ],
        },
        {
          kind: "pearls",
          items: [
            "\"Do you ever leak when you cough, laugh or exercise?\" finds stress incontinence; \"Can you relax and empty easily?\" starts finding the overactive floor.",
          ],
        },
      ],
    },
    {
      slug: "who-it-affects",
      title: "Who It Affects",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "cards",
          items: [
            { title: "Pregnancy & postpartum", text: "Pregnancy itself (hormonal softening plus load), vaginal birth — particularly instrumental delivery, large babies and significant perineal trauma — stretch muscle, fascia and pudendal nerve. Antenatal and postnatal muscle training prevents and treats incontinence.", icon: "baby" },
            { title: "Menopause", text: "Oestrogen decline thins urogenital tissues and reduces urethral closure; symptoms often first appear or worsen at this stage. Training remains effective at any age.", icon: "sunset" },
            { title: "Athletes", text: "High-impact and heavy-lifting sports (trampolining, gymnastics, running, CrossFit-style training) produce repetitive pressure spikes; stress incontinence is common even in young nulliparous athletes and is a performance issue, not just a health one.", icon: "zap" },
            { title: "Men after prostate surgery", text: "Radical prostatectomy removes much of the internal sphincter mechanism; post-operative (and ideally pre-operative) pelvic floor training accelerates return of continence.", icon: "user" },
            { title: "Chronic straining & load", text: "Chronic constipation, chronic cough (smoking, respiratory disease) and occupational heavy lifting chronically load the floor; obesity raises baseline intra-abdominal pressure.", icon: "trending-up" },
            { title: "Anyone with pelvic pain", text: "Overactive floor presentations occur across genders and ages, often alongside stress, pain sensitisation or a history of trauma — approached with particular sensitivity.", icon: "users" },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Roughly one in three women experience urinary incontinence at some point — it is common, treatable, and under-reported",
            "Men are under-screened: post-prostatectomy incontinence and pelvic pain both respond to physiotherapy",
            "Ask everyone at risk — patients rarely volunteer these symptoms unprompted",
          ],
        },
      ],
    },
    {
      slug: "assessment-principles",
      title: "Assessment Principles & Scope",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Every physiotherapist — not only pelvic health specialists — should screen for pelvic floor dysfunction, because it changes management in low back pain, hip pain, postnatal return to sport and continence-related falls risk in older adults. Screening is verbal and non-invasive; detailed internal assessment is a specialist skill.",
        },
        {
          kind: "steps",
          items: [
            { title: "Screening questions (any setting)", text: "Do you ever leak urine with coughing, sneezing, laughing or exercise? Do you get sudden urges you can't defer? Any heaviness, dragging or bulge sensation? Difficulty emptying bladder or bowel, or straining? Pain with intercourse? Any loss of control of wind or stool?" },
            { title: "History", text: "Obstetric history (deliveries, perineal trauma), surgical history (prostatectomy, gynaecological surgery), bowel habit and straining, fluid and caffeine intake, medications, sport and occupational load, and the impact on activity, sport and quality of life. A bladder diary (3 days) objectifies frequency, volumes and leakage." },
            { title: "Outcome measures", text: "Validated questionnaires such as ICIQ-UI Short Form quantify severity and track change." },
            { title: "External observation of contraction", text: "A correct pelvic floor contraction can be coached and partially confirmed externally: observe perineal lift (not bearing down), no substitution with gluteal squeezing, thigh adduction, or breath-holding." },
            { title: "Specialist internal assessment (concept)", text: "Trained pelvic health physiotherapists may assess vaginally or rectally — with explicit informed consent, a chaperone offered, and clear clinical justification — grading strength (e.g. Modified Oxford Scale 0–5), endurance, coordination, tone and tenderness. Non-specialists refer on rather than improvise.", },
            { title: "Refer onwards when indicated", text: "To a pelvic health physiotherapist for internal assessment or complex presentations; to medical care for red flags, haematuria, recurrent infection, significant prolapse, or failed conservative management." },
          ],
        },
        {
          kind: "warning",
          title: "Scope and sensitivity",
          items: [
            "Internal examination requires specific postgraduate training, informed consent and appropriate setting — never improvise beyond your scope",
            "Use inclusive, matter-of-fact language; normalise the questions (\"I ask everyone with back pain these questions\")",
            "Trauma-informed care: offer control, explain everything, and accept \"no\" without pressure",
          ],
        },
        {
          kind: "pearls",
          items: [
            "If a patient strains downwards when asked to contract (visible bearing down), stop and re-cue — practising a Valsalva as a \"Kegel\" makes symptoms worse.",
          ],
        },
      ],
    },
    {
      slug: "pelvic-floor-muscle-training",
      title: "Pelvic Floor Muscle Training",
      estMinutes: 5,
      content: [
        {
          kind: "paragraph",
          text: "Supervised pelvic floor muscle training (PFMT) is the first-line treatment for stress and mixed urinary incontinence, recommended for at least 3 months before considering other options, and effective for prevention and treatment in pregnancy and postpartum. Around 30% of people initially contract incorrectly — most commonly straining down — so teaching the correct action is step one, not an afterthought.",
        },
        {
          kind: "keypoints",
          title: "Cueing a correct contraction",
          items: [
            "\"Squeeze and lift as if stopping the flow of urine and holding back wind at the same time — then let go completely.\"",
            "The feeling is of closing the openings and lifting up and forwards inside — subtle, not a whole-body effort",
            "Keep breathing throughout; no breath-holding, gluteal squeezing, thigh adduction or abdominal bracing",
            "The full relaxation after each contraction is part of the exercise",
            "(Stopping urine mid-flow is a one-off learning check at most, never a routine exercise)",
          ],
        },
        {
          kind: "exercise",
          name: "Slow-velocity holds (endurance training)",
          purpose: "Build the sustained support function of the predominantly slow-twitch pelvic floor — the basis of all-day organ support and continence.",
          position: "Begin lying with knees bent (easiest against gravity); progress to sitting and standing as control improves.",
          execution: "Squeeze and lift the pelvic floor, hold while breathing normally, then relax completely and feel the release. Quality beats quantity — stop the set when the lift can no longer be felt.",
          dosage: "Hold up to 8–10 seconds (start with what is achievable, even 2–3 s), 8–12 repetitions, 3 sets/day, for at least 3 months.",
          progression: "Longer holds → sitting/standing → during functional tasks (walking, lifting).",
          precautions: "No bearing down; if pelvic pain increases, stop and reassess for overactivity.",
        },
        {
          kind: "exercise",
          name: "Fast contractions (quick flicks)",
          purpose: "Train the fast-twitch component for rapid closure during coughs, sneezes and impact.",
          position: "Same positions as slow holds; commonly appended to each endurance set.",
          execution: "Contract quickly and strongly, then release fully; the release is as deliberate as the squeeze.",
          dosage: "5–10 quick contractions after each set of slow holds, 3×/day.",
          progression: "Perform in standing, then during activity-relevant tasks (mini-jumps, step-downs) once continent in those tasks.",
          precautions: "Ensure complete relaxation between flicks — chasing speed without release trains overactivity.",
        },
        {
          kind: "exercise",
          name: "The Knack (pre-contraction skill)",
          purpose: "A consciously timed pelvic floor contraction immediately before and during a pressure rise (cough, sneeze, lift) — shown to reduce leakage with a well-timed squeeze.",
          position: "Any functional position; practise first in sitting.",
          execution: "Feel the urge to cough (or prepare to lift), contract the pelvic floor first, hold the contraction through the cough or lift, then relax.",
          dosage: "Practise 5–10 deliberate repetitions daily with a voluntary cough, and apply in real life at every predictable pressure event.",
          progression: "From voluntary cough in sitting → standing → real-world lifting, sneezing and sport-specific moments.",
          precautions: "The contraction precedes the pressure — a squeeze that arrives after the cough is too late.",
        },
        {
          kind: "exercise",
          name: "Functional integration & impact progression",
          purpose: "Transfer strength into the situations that actually provoke symptoms — lifting, running, jumping — especially for postnatal return to sport and athletes.",
          position: "Standing, gym or sport environment.",
          execution: "Pair pelvic floor timing with exhalation on effort during squats, lifts and carries; progress to walking-to-jogging intervals, low box jumps and sport drills while monitoring for leakage or heaviness.",
          dosage: "2–3 sessions/week integrated into general training.",
          progression: "Increase impact and load only while symptom-free; heaviness or leakage = regress one level and consolidate.",
          precautions: "Symptoms during progression are a dosage signal, not a failure — adjust rather than abandon.",
        },
        {
          kind: "keypoints",
          title: "Evidence & adherence essentials",
          items: [
            "Supervised programmes outperform leaflet-only instruction — confirmation of correct technique is the key ingredient",
            "Expect noticeable change by 6–12 weeks; advise at least 3 months before judging outcome",
            "Biofeedback, pressure devices or electrical stimulation can help those who cannot find the contraction",
            "Maintenance matters: like any muscle, gains fade without ongoing training",
          ],
        },
      ],
    },
    {
      slug: "relaxation-downtraining",
      title: "When Relaxation Is the Goal",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "For the overactive, non-relaxing pelvic floor — presenting as pelvic pain, dyspareunia, hesitancy, incomplete emptying or straining — strengthening is the wrong prescription and typically aggravates symptoms. Treatment reverses direction: downtraining first, and only later (if needed at all) strength work built on a floor that can let go.",
        },
        {
          kind: "steps",
          items: [
            { title: "Education & reassurance", text: "Explain the concept of a muscle held in guard — like a clenched jaw — and its links to stress, pain and habit. Reducing threat is itself treatment." },
            { title: "Diaphragmatic breathing", text: "Slow abdominal breathing with a relaxed exhale; the pelvic floor naturally descends and softens with a full, unforced inhale into the abdomen." },
            { title: "Positional release", text: "Supported positions that shorten and relax the floor — e.g. supine with knees supported, child's pose or deep supported squat as comfortable — combined with breathing and body-scan awareness." },
            { title: "Toileting behaviour", text: "Unhurried voiding without straining, feet supported on a footstool for defecation with relaxed bulging of the abdomen — retraining the release half of function." },
            { title: "Specialist care", text: "Pelvic health physiotherapists may add manual therapy and biofeedback-assisted downtraining; persistent pelvic pain is managed within a biopsychosocial framework, often multidisciplinary." },
          ],
        },
        {
          kind: "warning",
          title: "Recognise the wrong prescription",
          items: [
            "Pelvic pain, dyspareunia or voiding difficulty that worsens with Kegel programmes suggests an overactive floor",
            "\"More squeezing\" for a floor that cannot relax deepens the problem — reassess rather than progress",
            "Urgency can also coexist with overactivity — assessment, not assumption, decides the direction of treatment",
          ],
        },
        {
          kind: "pearls",
          items: [
            "A useful screening reframe: continence needs a floor that is strong AND supple — assessment asks which half is missing.",
          ],
        },
      ],
    },
    {
      slug: "lifestyle-factors",
      title: "Lifestyle & Load Management",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "cards",
          items: [
            { title: "Constipation & straining", text: "Chronic straining repeatedly loads the floor and pudendal nerve. Address fibre and fluid intake, toilet position (footstool, forward lean), and unhurried, strain-free habits.", icon: "coffee" },
            { title: "Fluid & bladder habits", text: "Normal fluid intake (restricting fluids concentrates urine and irritates the bladder), moderate caffeine and alcohol, and no \"just in case\" voiding, which shrinks functional bladder capacity.", icon: "droplet" },
            { title: "Body weight", text: "Weight loss in people with overweight measurably reduces urinary incontinence — one of the best-evidenced lifestyle interventions.", icon: "scale" },
            { title: "Cough & smoking", text: "Chronic cough hammers the floor thousands of times a day; smoking cessation support is pelvic floor treatment too.", icon: "wind" },
            { title: "Load management", text: "Match heavy lifting and high-impact training to current capacity; use exhale-on-effort and the Knack; progress impact gradually postpartum rather than banning it forever.", icon: "trending-up" },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Lifestyle change is adjunct AND treatment: constipation care, weight management and bladder habits each have direct evidence",
            "Advice is enabling, not restrictive — the goal is return to full activity with a floor trained for it",
          ],
        },
      ],
    },
    {
      slug: "red-flags",
      title: "Red Flags & Referral",
      estMinutes: 2,
      content: [
        {
          kind: "redflags",
          items: [
            "Saddle (perineal) anaesthesia or altered sensation with new bladder or bowel dysfunction (retention, incontinence, loss of sensation of fullness) ± bilateral leg symptoms — cauda equina syndrome: EMERGENCY same-day referral",
            "Sudden loss of continence with new neurological signs",
            "Visible haematuria, or persistent unexplained pelvic pain — medical review",
            "Recurrent urinary tract infections, or incontinence with fever/systemic illness",
            "Post-menopausal vaginal bleeding, or a rapidly progressing bulge — gynaecological review",
            "Pelvic symptoms with unexplained weight loss or history of malignancy",
          ],
        },
        {
          kind: "paragraph",
          text: "Cauda equina syndrome deserves first-class status in every physiotherapist's screening: compression of the sacral nerve roots can present as back pain with saddle numbness, difficulty initiating or feeling urination, or faecal incontinence. Hours matter for surgical outcome — these symptoms are never managed with pelvic floor exercises and never watch-and-wait.",
        },
        {
          kind: "pearls",
          items: [
            "Build the cauda equina questions (saddle sensation, bladder sensation and control, bowel control) into every spinal subjective assessment — asking is quick; missing it is catastrophic.",
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
            "Pelvic floor = levator ani + coccygeus (S2–S4): support, continence, stability contribution, sexual function",
            "Underactive → stress incontinence, prolapse symptoms; Overactive → pelvic pain, poor emptying, dyspareunia",
            "Affects postpartum and menopausal women, athletes, men post-prostatectomy — screen with simple questions",
            "PFMT is first-line for stress/mixed incontinence: correct cue (\"squeeze, lift, let go fully\"), ~30% get it wrong initially",
            "Dose: 8–12 holds up to 8–10 s + quick flicks, 3×/day, ≥3 months, supervised beats leaflets",
            "The Knack: contract before the cough/lift",
            "Overactive floor → downtraining (breathing, positions, toileting behaviour), not strengthening",
            "Red flag: saddle anaesthesia + bladder/bowel change = cauda equina — emergency referral",
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
      text: "Which muscles form the main layer (pelvic diaphragm) of the pelvic floor?",
      options: [
        "Rectus abdominis and pyramidalis",
        "Levator ani (pubococcygeus, puborectalis, iliococcygeus) and coccygeus",
        "Obturator internus and piriformis",
        "Transversus abdominis and multifidus",
      ],
      correctIndex: 1,
      explanation:
        "The pelvic diaphragm is formed by the levator ani group — pubococcygeus, puborectalis and iliococcygeus — plus coccygeus, innervated primarily via the pudendal nerve and direct sacral branches (S2–S4). Obturator internus and piriformis are pelvic wall muscles; the abdominal muscles are synergists, not the floor itself.",
      difficulty: "Easy",
      tags: ["anatomy"],
      sectionSlug: "anatomy-functions",
    },
    {
      text: "Which nerve supply is the main source for the pelvic floor muscles?",
      options: ["Femoral nerve (L2–L4)", "Pudendal nerve and sacral branches (S2–S4)", "Obturator nerve (L2–L4)", "Iliohypogastric nerve (T12–L1)"],
      correctIndex: 1,
      explanation:
        "The pelvic floor is supplied primarily by the pudendal nerve and direct branches of sacral roots S2–S4 (\"S2, 3, 4 keeps the pelvis off the floor\"). This is why sacral root compression in cauda equina syndrome produces saddle anaesthesia with bladder and bowel dysfunction.",
      difficulty: "Easy",
      tags: ["anatomy"],
      sectionSlug: "anatomy-functions",
    },
    {
      text: "Why does pelvic floor training include both sustained holds and quick contractions?",
      options: [
        "To make sessions less boring",
        "The muscles contain both slow-twitch fibres for sustained support and fast-twitch fibres for rapid closure",
        "Quick contractions are only needed by athletes",
        "Sustained holds are only needed after surgery",
      ],
      correctIndex: 1,
      explanation:
        "The pelvic floor is roughly two-thirds slow-twitch (sustained postural support and continence at rest) and one-third fast-twitch (rapid closure during coughs, sneezes and impact). Training mirrors function: endurance holds train support; quick flicks train the rapid response.",
      difficulty: "Medium",
      tags: ["anatomy", "exercise-therapy"],
      sectionSlug: "anatomy-functions",
    },
    {
      text: "Leakage of urine during coughing, sneezing and running — without urgency — best describes which dysfunction?",
      options: ["Urge incontinence", "Stress urinary incontinence", "Overflow incontinence", "Functional incontinence"],
      correctIndex: 1,
      explanation:
        "Stress urinary incontinence is leakage with effort or exertion, when intra-abdominal pressure exceeds urethral closure pressure — classically cough, sneeze, laugh, lift, run. Urge incontinence involves a sudden compelling need to void. The distinction matters because it directs treatment.",
      difficulty: "Easy",
      tags: ["pathology", "assessment"],
      sectionSlug: "dysfunction-types",
    },
    {
      text: "A patient reports pelvic heaviness and a dragging, bulging sensation that worsens through the day and with prolonged standing. This most suggests:",
      options: [
        "Overactive bladder syndrome",
        "Pelvic organ prolapse symptoms",
        "Stress urinary incontinence",
        "Cauda equina syndrome",
      ],
      correctIndex: 1,
      explanation:
        "Heaviness, dragging and a bulge sensation — typically worse with gravity-loaded time (end of day, prolonged standing) — are hallmark prolapse symptoms, reflecting descent of pelvic organs into the vaginal space. Pelvic floor muscle training improves symptoms in mild-to-moderate prolapse; gynaecological review is indicated for significant or progressing prolapse.",
      difficulty: "Medium",
      tags: ["pathology", "assessment"],
      sectionSlug: "dysfunction-types",
    },
    {
      text: "Which presentation suggests an OVERACTIVE (non-relaxing) pelvic floor rather than a weak one?",
      options: [
        "Leakage during trampolining",
        "Pelvic pain, pain with intercourse, hesitancy and straining to empty",
        "Heaviness relieved by lying down",
        "Leaking a few drops after finishing urination",
      ],
      correctIndex: 1,
      explanation:
        "An overactive floor cannot relax: it presents with pelvic pain, dyspareunia, voiding difficulty (hesitancy, slow stream, incomplete emptying) and defecation straining. This pattern is treated with downtraining — breathing, relaxation, behavioural work — and is typically worsened by strengthening programmes.",
      difficulty: "Medium",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "dysfunction-types",
    },
    {
      text: "Why does radical prostatectomy commonly cause urinary incontinence?",
      options: [
        "It damages the femoral nerve",
        "Surgery removes much of the internal sphincter mechanism, leaving continence dependent on the external sphincter and pelvic floor",
        "It always causes cauda equina syndrome",
        "The bladder is removed with the prostate",
      ],
      correctIndex: 1,
      explanation:
        "The internal (smooth muscle) sphincter mechanism at the bladder neck is largely sacrificed during radical prostatectomy, so continence relies on the external urethral sphincter and pelvic floor. Pre- and post-operative pelvic floor muscle training accelerates return of continence in these men.",
      difficulty: "Hard",
      tags: ["pathology", "management"],
      sectionSlug: "who-it-affects",
    },
    {
      text: "Which obstetric factors most increase risk of postpartum pelvic floor dysfunction?",
      options: [
        "Short labour with a small baby",
        "Instrumental (forceps) delivery, large baby, and significant perineal trauma",
        "Caesarean birth eliminates all pelvic floor risk",
        "Breastfeeding duration",
      ],
      correctIndex: 1,
      explanation:
        "Instrumental delivery (especially forceps), high birth weight, prolonged second stage and significant perineal/sphincter injury carry the highest risk of muscle, fascial and pudendal nerve compromise. Pregnancy itself also loads the floor — caesarean birth reduces but does not eliminate risk.",
      difficulty: "Medium",
      tags: ["pathology", "assessment"],
      sectionSlug: "who-it-affects",
    },
    {
      text: "A physiotherapist without specialist pelvic health training suspects pelvic floor dysfunction in a patient with low back pain. What is the appropriate course of action?",
      options: [
        "Perform an internal examination to confirm",
        "Screen with validated questions, teach basic correct contraction externally observed, and refer to a pelvic health physiotherapist for internal assessment",
        "Ignore it as outside physiotherapy scope entirely",
        "Advise the patient to stop all exercise",
      ],
      correctIndex: 1,
      explanation:
        "Screening questions, education and externally-observed basic training are within general scope. Internal (vaginal/rectal) assessment requires specific postgraduate training, informed consent and clinical justification — clinicians without it refer on to a pelvic health physiotherapist rather than improvising beyond scope.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning", "precautions"],
      sectionSlug: "assessment-principles",
    },
    {
      text: "What does a 3-day bladder diary add to assessment?",
      options: [
        "It replaces the need for any questions",
        "Objective data on voiding frequency, volumes, fluid intake and leakage episodes",
        "A diagnosis of prolapse stage",
        "Measurement of pelvic floor strength",
      ],
      correctIndex: 1,
      explanation:
        "A bladder diary objectifies what patients estimate poorly: how often they void, voided volumes, fluid/caffeine intake, urgency episodes and leakage. It reveals patterns (e.g. \"just in case\" voiding, evening caffeine) that direct bladder training and lifestyle advice, and provides a baseline for outcomes.",
      difficulty: "Medium",
      tags: ["assessment"],
      sectionSlug: "assessment-principles",
    },
    {
      text: "Approximately what proportion of people initially perform a pelvic floor contraction incorrectly, and what is the most consequential error?",
      options: [
        "Almost nobody — the contraction is instinctive",
        "Around 30%, with straining downwards (bearing down) the key error",
        "Over 90%, with breath-holding the only error",
        "Half, with excessive speed the key error",
      ],
      correctIndex: 1,
      explanation:
        "Roughly a third of people cannot correctly contract on first attempt following verbal instruction alone; the most harmful substitution is a Valsalva-type downward strain, which loads rather than supports the floor. This is why confirming technique — and supervised training — outperforms leaflet-only programmes.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "assessment"],
      sectionSlug: "pelvic-floor-muscle-training",
    },
    {
      text: "Which instruction best cues a correct pelvic floor contraction?",
      options: [
        "\"Push down as if emptying your bladder quickly\"",
        "\"Squeeze and lift as if stopping urine flow and holding back wind — then let go completely\"",
        "\"Clench your buttocks and hold your breath\"",
        "\"Pull your shoulders back and brace your abdominals hard\"",
      ],
      correctIndex: 1,
      explanation:
        "The correct action is a squeeze-and-lift closing the openings, felt as lifting up and forwards inside, followed by complete relaxation — with normal breathing and without gluteal, adductor or global abdominal substitution. Pushing down is the exact opposite of the desired action.",
      difficulty: "Easy",
      tags: ["exercise-therapy"],
      sectionSlug: "pelvic-floor-muscle-training",
    },
    {
      text: "What is \"the Knack\"?",
      options: [
        "A device for measuring pelvic floor strength",
        "A consciously timed pelvic floor contraction performed just before and during a cough, sneeze or lift",
        "A surgical sling procedure",
        "A relaxation technique for pelvic pain",
      ],
      correctIndex: 1,
      explanation:
        "The Knack is a learned skill: pre-contracting the pelvic floor immediately before and holding it through a predictable pressure rise (cough, sneeze, lift). Studies show a well-timed contraction significantly reduces leakage — but the squeeze must precede the pressure, not chase it.",
      difficulty: "Easy",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "pelvic-floor-muscle-training",
    },
    {
      text: "Which prescription reflects evidence-based pelvic floor muscle training for stress incontinence?",
      options: [
        "5 quick squeezes once a week for 3 weeks",
        "8–12 contractions held up to 8–10 seconds plus quick flicks, 3 sets/day, supervised, for at least 3 months",
        "Continuous maximal contraction held all day",
        "Stopping urine mid-flow at every void",
      ],
      correctIndex: 1,
      explanation:
        "Evidence-based dosage: 8–12 near-maximal contractions with holds building towards 8–10 seconds, plus fast contractions, around three sets daily, continued for a minimum of 3 months with supervision and technique confirmation. Stopping urine mid-flow is a one-off awareness check at most — as a habit it can impair voiding.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "pelvic-floor-muscle-training",
    },
    {
      text: "A patient with pelvic pain and difficulty emptying reports her symptoms worsened after starting an intensive Kegel programme. What is the most likely explanation?",
      options: [
        "She needs a stronger Kegel programme",
        "She has an overactive pelvic floor and needs downtraining (relaxation) first",
        "Pelvic exercises never affect symptoms",
        "Her symptoms indicate immediate surgery",
      ],
      correctIndex: 1,
      explanation:
        "Pain, dyspareunia and voiding difficulty worsening with strengthening is the signature of an overactive, non-relaxing floor. The muscle is already held in guard; adding squeezes deepens the problem. Treatment reverses direction: diaphragmatic breathing, positional relaxation, toileting behaviour, and specialist downtraining before any strength work.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "exercise-therapy"],
      sectionSlug: "relaxation-downtraining",
    },
    {
      text: "Why is a footstool with a forward lean recommended for defecation in pelvic floor rehabilitation?",
      options: [
        "It strengthens the hip flexors",
        "The squat-like position relaxes puborectalis, straightening the anorectal angle and reducing straining",
        "It increases intra-abdominal pressure for a faster result",
        "It is only for patients after hip surgery",
      ],
      correctIndex: 1,
      explanation:
        "Puborectalis maintains the anorectal angle for continence; a squat-like position (feet raised, knees above hips, forward lean) helps it release, straightening the angle so stool passes with relaxed abdominal bulging instead of straining. Reducing chronic straining protects the floor and pudendal nerve.",
      difficulty: "Hard",
      tags: ["management", "anatomy"],
      sectionSlug: "relaxation-downtraining",
    },
    {
      text: "Which lifestyle intervention has good direct evidence for reducing urinary incontinence?",
      options: [
        "Restricting all fluid intake to under 500 ml/day",
        "Weight loss in people with overweight",
        "Voiding \"just in case\" before every activity",
        "Doubling daily caffeine to stimulate the bladder",
      ],
      correctIndex: 1,
      explanation:
        "Weight loss measurably reduces incontinence episodes in people with overweight — among the best-evidenced lifestyle treatments. Severe fluid restriction concentrates urine and irritates the bladder; habitual \"just in case\" voiding shrinks functional capacity and feeds urgency; excess caffeine aggravates symptoms.",
      difficulty: "Medium",
      tags: ["management"],
      sectionSlug: "lifestyle-factors",
    },
    {
      text: "A patient with back pain reports new numbness when wiping after using the toilet and says he cannot tell when his bladder is full. What is the correct action?",
      options: [
        "Begin a pelvic floor strengthening programme",
        "Book a routine review in two weeks",
        "Treat as suspected cauda equina syndrome — emergency same-day medical referral",
        "Advise a bladder diary and fluid modification",
      ],
      correctIndex: 2,
      explanation:
        "Saddle-region sensory change plus altered bladder sensation are hallmark cauda equina features. Compression of the sacral roots threatens permanent bladder, bowel and sexual dysfunction, and surgical outcomes are time-critical. This is never managed with exercises or observation — emergency referral is mandatory.",
      difficulty: "Easy",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "red-flags",
    },
    {
      text: "Which cluster is MOST specific for cauda equina syndrome?",
      options: [
        "Unilateral leg pain worse with sitting",
        "Saddle anaesthesia, urinary retention or incontinence, and reduced anal tone/bowel control",
        "Morning back stiffness easing with movement",
        "Leakage with coughing and running",
      ],
      correctIndex: 1,
      explanation:
        "The classic cauda equina cluster combines saddle (perineal) anaesthesia with bladder dysfunction (retention, overflow, loss of sensation) and bowel involvement (incontinence, reduced tone), with or without bilateral leg signs. Stress leakage with cough is a mechanical continence problem, not a neurological emergency.",
      difficulty: "Hard",
      tags: ["precautions", "assessment"],
      sectionSlug: "red-flags",
    },
  ],
  flashcards: [
    { front: "Name the muscles of the pelvic diaphragm and their innervation.", back: "Levator ani (pubococcygeus, puborectalis, iliococcygeus) + coccygeus; pudendal nerve and direct sacral branches S2–S4." },
    { front: "Four functions of the pelvic floor?", back: "Organ support, continence (urethral and anal closure with timely relaxation), contribution to trunk stability/pressure regulation, and sexual function." },
    { front: "Stress vs urge urinary incontinence?", back: "Stress: leakage with effort (cough, sneeze, lift, run) — pressure exceeds closure. Urge: leakage with a sudden compelling need to void (overactive bladder pattern)." },
    { front: "Hallmark symptoms of pelvic organ prolapse?", back: "Heaviness, dragging or a bulge sensation, typically worse with prolonged standing and at the end of the day, eased by lying down." },
    { front: "Signs the pelvic floor is OVERACTIVE rather than weak?", back: "Pelvic pain, dyspareunia, hesitancy/slow stream, incomplete emptying, straining — often worsened by Kegel programmes. Treatment = downtraining first." },
    { front: "Correct pelvic floor contraction cue?", back: "\"Squeeze and lift as if stopping urine and holding back wind — then let go completely.\" No bearing down, breath-holding, gluteal or thigh substitution. ~30% get it wrong initially." },
    { front: "Evidence-based PFMT dosage for stress incontinence?", back: "8–12 contractions, holds building to 8–10 s plus quick flicks, ~3 sets/day, supervised, for at least 3 months." },
    { front: "What is the Knack?", back: "A consciously timed pelvic floor pre-contraction held through a cough, sneeze or lift — reduces leakage when the squeeze precedes the pressure rise." },
    { front: "First-line treatment direction for an overactive pelvic floor?", back: "Downtraining: education, diaphragmatic breathing, relaxation positions, strain-free toileting (footstool, forward lean), specialist manual therapy/biofeedback — NOT strengthening." },
    { front: "Which groups should always be screened for pelvic floor dysfunction?", back: "Pregnant/postpartum and peri-menopausal women, high-impact athletes, men post-prostatectomy, chronic cough/constipation/straining, and anyone with pelvic pain or low back pain." },
    { front: "Cauda equina red flag cluster?", back: "Saddle anaesthesia + new bladder dysfunction (retention, incontinence, lost fullness sensation) ± bowel incontinence/reduced tone ± bilateral leg signs → emergency same-day referral." },
    { front: "Why is 'stop the flow mid-void' not a routine exercise?", back: "It is at most a one-off learning check; done habitually it can interfere with normal voiding reflexes and incomplete emptying." },
  ],
};

export default topic;
