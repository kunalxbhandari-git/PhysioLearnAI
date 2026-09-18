import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "amputation-rehabilitation",
  title: "Amputation & Prosthetic Rehabilitation",
  category: "Musculoskeletal",
  description:
    "From post-operative residual limb care to prosthetic gait training — levels and causes of amputation, phantom limb phenomena, prosthetic components, common gait deviations and the energy cost of amputee walking.",
  difficulty: "Advanced",
  estMinutes: 26,
  icon: "footprints",
  keyTakeaways: [
    "The large majority of lower-limb amputations are dysvascular — peripheral arterial disease and diabetes — so the remaining limb is also at risk and must be protected.",
    "Post-operative priorities: wound healing, oedema control and limb shaping, and preventing hip flexion/knee flexion contractures that can make prosthetic fitting impossible.",
    "Phantom sensation is near-universal and benign; phantom pain is different, common early, and may respond to graded motor imagery and mirror therapy.",
    "The pre-prosthetic phase builds strength (hip extensors/abductors, remaining limb), balance, transfers and wheelchair independence — fitness determines prosthetic success.",
    "A prosthesis is built from socket, suspension, pylon and terminal components; the socket-residuum interface determines comfort and function more than any high-tech part.",
    "Transtibial gait costs roughly 20–40% more energy than normal walking; transfemoral roughly 60% or more — preserve the knee whenever possible.",
    "Common prosthetic gait deviations (lateral trunk lean, circumduction, vaulting) usually have both prosthetic and patient causes — analyse before you train.",
    "Daily skin inspection of the residuum and meticulous care of the intact limb are lifelong precautions; falls risk is high, especially early after amputation.",
  ],
  sections: [
    {
      slug: "levels-and-causes",
      title: "Amputation Levels & Causes",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "In high-income countries the overwhelming majority of lower-limb amputations — commonly quoted as 80% or more — are dysvascular, caused by peripheral arterial disease, usually with diabetes. Trauma, malignancy and congenital limb difference account for most of the remainder, with trauma dominating in younger adults.",
        },
        {
          kind: "table",
          headers: ["Level", "Description", "Key rehabilitation implications"],
          rows: [
            ["Partial foot / toe", "Ray, transmetatarsal or midfoot amputation", "Altered push-off; risk of equinus deformity; footwear modification"],
            ["Ankle disarticulation (Syme)", "Through the ankle joint, heel pad preserved", "Can allow end weight-bearing; bulbous distal end affects cosmesis/fitting"],
            ["Transtibial (below-knee)", "Through the tibia/fibula; ideal residuum roughly middle third", "Knee preserved — best functional outlook; protect knee extension at all costs"],
            ["Knee disarticulation", "Through the knee joint", "Long lever, end weight-bearing possible; prosthetic knee sits lower than the sound side"],
            ["Transfemoral (above-knee)", "Through the femur", "Loss of the anatomical knee — much higher energy cost; hip flexion/abduction contracture risk"],
            ["Hip disarticulation / hemipelvectomy", "Through the hip or removing hemipelvis", "Highest energy cost; prosthetic use often limited; sitting balance and transfers central"],
          ],
        },
        {
          kind: "cards",
          items: [
            { title: "Dysvascular (~80%+)", text: "PAD ± diabetes. Older patients, comorbidities, poor healing, and a contralateral limb at high risk — up to half may lose the other limb within a few years without vigilant care.", icon: "droplet" },
            { title: "Trauma", text: "Road traffic collisions, industrial and military injuries. Younger, fitter patients with high functional goals but frequent psychological sequelae.", icon: "alert-triangle" },
            { title: "Malignancy", text: "Bone and soft-tissue tumours (e.g. osteosarcoma) — often adolescents/young adults; rehabilitation coordinated with oncology.", icon: "activity" },
            { title: "Infection & congenital", text: "Severe sepsis (e.g. meningococcal), osteomyelitis, or congenital limb difference managed from childhood.", icon: "shield" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Surgeons preserve the knee whenever viable — the difference between transtibial and transfemoral rehabilitation is the single biggest determinant of walking outcome.",
            "In dysvascular amputation, treat the patient as having systemic vascular disease: cardiac risk shapes exercise prescription and the sound limb needs protecting from day one.",
          ],
        },
      ],
    },
    {
      slug: "postop-limb-care",
      title: "Post-operative Residual Limb Care",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "The early goals are wound healing, pain control, oedema management, limb shaping and — critically — contracture prevention. A residuum that heals into a flexed, poorly shaped limb may never accept a prosthesis, so positioning starts on day one.",
        },
        {
          kind: "steps",
          items: [
            { title: "Oedema control & shaping", text: "Compression shapes the residuum towards a conical (transtibial) or cylindrical/conical (transfemoral) form for socket fitting: elasticated shrinker socks, figure-of-eight elastic bandaging (never circular turns — they tourniquet), or rigid/semi-rigid removable dressings, which also protect from knocks." },
            { title: "Wound & pain management", text: "Monitor healing (dysvascular wounds heal slowly), manage post-operative and phantom pain early — poorly controlled early pain predicts persistent phantom pain." },
            { title: "Positioning & contracture prevention", text: "Transtibial: keep the knee in extension — no pillow under the knee, no prolonged sitting with the knee flexed, use a stump board on the wheelchair. Transfemoral: prevent hip flexion/abduction contracture — regular prone lying (15–30 min, 2–3×/day as tolerated), avoid pillows between the thighs and prolonged sitting." },
            { title: "Early movement & strength", text: "Bed mobility, transfers, ROM of all remaining joints, and early strengthening — especially hip extensors and abductors on the amputated side and the entire sound limb." },
            { title: "Desensitisation & handling", text: "Graded touch, tapping and massage of the residuum reduce hypersensitivity and help the patient integrate the new limb into body image." },
          ],
        },
        {
          kind: "warning",
          title: "Positioning errors that create contractures",
          items: [
            "Pillow under the knee after transtibial amputation → knee flexion contracture",
            "Resting the residuum hanging over the bed edge or on crutch handles",
            "Prolonged wheelchair sitting without a stump board (transtibial)",
            "Pillow between the thighs or under the residuum after transfemoral amputation → hip abduction/flexion contracture",
            "A fixed knee flexion contracture beyond about 15° or a marked hip flexion contracture can prevent successful prosthetic fitting",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Bandage in figure-of-eight with pressure greatest distally, decreasing proximally, reapplied every 4–6 hours — a badly applied bandage does more harm than none.",
            "Prone lying is the cheapest contracture treatment in medicine; build it into the daily timetable from the first week.",
          ],
        },
      ],
    },
    {
      slug: "phantom-limb",
      title: "Phantom Sensation & Phantom Pain",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Phantom limb sensation — a non-painful awareness that the missing limb is still present (position, movement, tingling, telescoping where the phantom foot feels drawn up towards the residuum) — occurs in the vast majority of amputees and is benign. Phantom limb pain is a painful perception in the missing limb (burning, cramping, crushing, shooting) and affects well over half of amputees at some stage, usually beginning within days of surgery.",
        },
        {
          kind: "cards",
          items: [
            { title: "Phantom sensation", text: "Non-painful. Near-universal, normal, and usually fades or telescopes over months. Warn patients in advance so it doesn't frighten them.", icon: "ghost" },
            { title: "Phantom pain", text: "Painful, in the absent limb. Linked to cortical reorganisation and pre-amputation pain. Fluctuates; often triggered by stress, cold, or residuum problems.", icon: "zap" },
            { title: "Residual limb pain", text: "Pain in the stump itself — surgical, neuroma, poor socket fit, skin breakdown, bone spur, or ischaemia. Always examine: it is treated at the source.", icon: "search" },
          ],
        },
        {
          kind: "paragraph",
          text: "Mirror therapy places a mirror in the sagittal plane so the reflection of the intact limb appears where the missing limb would be; moving both \"limbs\" together gives the brain congruent visual feedback of a moving, pain-free limb, which can reduce phantom pain. It is often used within graded motor imagery (limb laterality recognition → imagined movements → mirror therapy). Other management: education, desensitisation, compression, early prosthetic use, TENS, and medical management (e.g. neuropathic pain agents) via the team.",
        },
        {
          kind: "keypoints",
          items: [
            "Always distinguish phantom sensation (benign), phantom pain and residual limb pain — different mechanisms, different management",
            "New or worsening residuum pain in a prosthetic user is socket fit or skin breakdown until proven otherwise",
            "Pre-operative pain intensity predicts phantom pain — early aggressive pain control matters",
          ],
        },
      ],
    },
    {
      slug: "pre-prosthetic-phase",
      title: "Pre-prosthetic Rehabilitation",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Between wound healing and prosthetic fitting, the job is to build the physical capacity that prosthetic walking will demand: single-leg strength and balance, trunk control, cardiovascular fitness, independent transfers and wheelchair skills. Prosthetic success is largely decided in this phase.",
        },
        {
          kind: "exercise",
          name: "Prone lying with active hip extension",
          purpose: "Prevent and treat hip flexion contracture (transfemoral and transtibial) while strengthening hip extensors — the key muscles of prosthetic stance control.",
          position: "Prone on a firm bed, head turned to one side, small pillow under the pelvis only if needed for comfort.",
          execution: "Lie prone accumulating time; add active residual-limb hip extension lifts with the pelvis kept flat (no lumbar hyperextension).",
          dosage: "Prone lying 15–30 minutes, 2–3×/day; extension lifts 10 reps × 3 sets within the session.",
          progression: "Add a light ankle-weight equivalent strapped proximally on the residuum, or resistance via therapist/band.",
          precautions: "Contraindicated if prone position compromises breathing or cardiac status — use alternatives (supine hip extension over bed edge under supervision).",
        },
        {
          kind: "exercise",
          name: "Bridging with residual limb on a firm roll",
          purpose: "Hip extensor and trunk strengthening in a weight-bearing-like pattern; teaches pelvic control needed for prosthetic stance phase.",
          position: "Supine, sound foot flat on the bed, residuum supported on a firm padded roll or block.",
          execution: "Push down through both the sound foot and the residuum to lift the pelvis into a level bridge; hold 3–5 seconds; lower with control.",
          dosage: "8–12 reps × 3 sets, daily.",
          progression: "Sound leg further away, single-support emphasis on the residuum side, or arms crossed on chest.",
          precautions: "Ensure the roll pressure is on the residuum shaft, not the healing distal wound.",
        },
        {
          kind: "exercise",
          name: "Single-leg standing balance (sound limb)",
          purpose: "The sound limb becomes the workhorse for transfers, hopping and early gait — build its strength and balance capacity deliberately.",
          position: "Standing in parallel bars or at a counter, light fingertip support.",
          execution: "Stand on the sound limb with tall posture and level pelvis, up to 30 seconds; progress to reaching tasks and controlled mini-squats.",
          dosage: "3–5 holds × 30 seconds, 2×/day.",
          progression: "Reduce hand support, eyes closed, add head turns, catch/throw tasks, or compliant surface.",
          precautions: "Guard closely — falls risk is high, and a fall onto the residuum can dehisce the wound; footwear on the sound foot, especially in diabetes.",
        },
        {
          kind: "exercise",
          name: "Upper-limb and trunk conditioning (wheelchair & transfer capacity)",
          purpose: "Independent transfers, wheelchair propulsion and crutch walking demand push-up strength and aerobic fitness — build both before prosthetic delivery.",
          position: "Sitting in the wheelchair or on a firm plinth.",
          execution: "Seated push-ups (lifting the body from the seat through the arms), resistance-band rows and presses, plus daily wheelchair propulsion or arm-crank aerobic work at moderate intensity.",
          dosage: "Strength: 8–12 reps × 2–3 sets; aerobic: build towards 20–30 minutes most days.",
          progression: "Increase band resistance and propulsion distance/terrain; teach kerb and slope wheelchair skills.",
          precautions: "In dysvascular patients, respect cardiac limitations — use rating of perceived exertion and monitor as indicated.",
        },
        {
          kind: "keypoints",
          title: "Pre-prosthetic checklist",
          items: [
            "Full knee extension (transtibial) and hip extension (all levels) maintained",
            "Independent bed mobility, transfers and wheelchair use",
            "Residuum healed, shaped and desensitised; shrinker worn consistently",
            "Sound limb inspected and protected daily — footwear, skin checks (especially diabetes)",
            "Cardiovascular capacity built towards the energy cost of prosthetic gait",
          ],
        },
      ],
    },
    {
      slug: "prosthetic-components",
      title: "Prosthetic Components",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Every lower-limb prosthesis has the same functional building blocks: an interface (socket ± liner), suspension holding it on, structural pylon, and terminal components (foot, plus a knee unit for transfemoral). The socket-residuum interface determines comfort, control and skin health — the most sophisticated foot cannot compensate for a poor socket.",
        },
        {
          kind: "image",
          illustration: "prosthesis",
          caption: "Principal components of a lower-limb prosthesis: socket and liner interfacing with the residual limb, suspension system, pylon, and prosthetic foot — with a mechanical or microprocessor knee unit added at transfemoral level.",
        },
        {
          kind: "cards",
          items: [
            { title: "Socket", text: "Custom-moulded interface. Transtibial designs load pressure-tolerant areas (patellar tendon, tibial flares) and relieve bony prominences; transfemoral designs (e.g. ischial containment) control the femur and transmit load through the pelvis.", icon: "box" },
            { title: "Liner & socks", text: "Silicone/gel liners cushion and protect skin; stump socks of varying ply manage daily volume fluctuation — patients add or remove ply as the residuum shrinks or swells.", icon: "layers" },
            { title: "Suspension", text: "Keeps the prosthesis attached: pin-lock liners, suction/vacuum systems, sleeves, or straps/belts. Poor suspension causes pistoning — vertical movement of the residuum in the socket — and skin damage.", icon: "anchor" },
            { title: "Knee units (transfemoral)", text: "From simple locked or single-axis knees for household walkers to polycentric, hydraulic/pneumatic and microprocessor knees that improve stance stability and stumble recovery for community walkers.", icon: "settings" },
            { title: "Feet", text: "SACH (solid ankle cushioned heel) for basic, stable low-activity use; single/multi-axis feet for uneven ground; energy-storing-and-return (dynamic response) feet for active users.", icon: "footprints" },
            { title: "Pylon & cosmesis", text: "The structural connection (often modular aluminium/carbon allowing alignment adjustment), with optional cosmetic covering.", icon: "align-center-vertical" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Residuum volume falls markedly in the first months — early sockets are replaced or padded with additional sock ply; teach patients ply management explicitly.",
            "Component prescription follows functional level (e.g. household vs community ambulator), not technology for its own sake.",
          ],
        },
      ],
    },
    {
      slug: "prosthetic-gait-training",
      title: "Prosthetic Gait Training & Deviations",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Gait training progresses from donning/doffing and weight-bearing tolerance in parallel bars, through weight-shift and stepping drills, to free walking, stairs, slopes, uneven ground and falls management (including how to get up from the floor). The prosthetic side must learn to accept full body weight in stance — trust is trained, not assumed.",
        },
        {
          kind: "steps",
          items: [
            { title: "1. Don/doff & skin routine", text: "Correct liner and sock application, checking alignment, and a mandatory skin inspection after every early session — redness that does not fade within about 10–20 minutes needs socket review." },
            { title: "2. Weight-bearing & weight shift", text: "In parallel bars: static loading of the prosthesis with scales or feedback, side-to-side and fore-aft shift, reaching outside the base of support." },
            { title: "3. Stepping drills", text: "Sound-limb stepping (forces prosthetic single-limb stance), prosthetic stepping, then reciprocal stepping with even step lengths and timing." },
            { title: "4. Free gait & aids", text: "Progress bars → frame/crutches → sticks → unaided as safe; emphasise equal stance time, pelvic control and arm swing." },
            { title: "5. Advanced skills", text: "Stairs (sound limb up first, prosthetic down first, unless using advanced knees), ramps, kerbs, uneven ground, carrying objects, falling and floor-to-stand practice." },
          ],
        },
        {
          kind: "table",
          headers: ["Deviation", "Common prosthetic causes", "Common patient causes"],
          rows: [
            ["Lateral trunk lean (to prosthetic side)", "Socket too wide, prosthesis too short, inadequate lateral femoral support", "Weak hip abductors, short residuum, abduction contracture, pain"],
            ["Circumduction", "Prosthesis too long, knee friction too high or locked knee, inadequate suspension", "Fear of catching the toe, weak hip flexors, poor knee control"],
            ["Vaulting (rising on sound-side toe)", "Prosthesis too long, poor suspension (pistoning), knee swing resistance too high", "Habit, fear of toe catch during prosthetic swing"],
            ["Abducted gait (wide base)", "Prosthesis too long, medial socket brim discomfort (transfemoral)", "Abduction contracture, poor balance, insecurity"],
            ["Uneven step length (long prosthetic step)", "Socket flexion inadequate", "Hip flexion contracture, fear of loading the prosthesis, weak hip extensors"],
            ["Knee instability / buckling at loading", "Foot set too anterior/heel too stiff, knee axis alignment", "Weak hip extensors failing to stabilise the knee at heel strike"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "Rule of analysis: check the patient (strength, ROM, pain, fear), the socket fit, then alignment — most deviations have more than one contributor.",
            "Hip extensor strength is the transfemoral walker's \"quadriceps\": it stabilises the prosthetic knee at loading. Train it relentlessly.",
          ],
        },
      ],
    },
    {
      slug: "energy-cost",
      title: "Energy Cost of Amputee Gait",
      estMinutes: 2,
      difficulty: "Advanced",
      content: [
        {
          kind: "paragraph",
          text: "Walking with a prosthesis costs more energy than normal gait, and the cost rises steeply with amputation level and with vascular cause. Patients typically compensate by walking more slowly, keeping energy cost per minute near normal while energy per distance rises.",
        },
        {
          kind: "table",
          headers: ["Level / cause", "Approximate increase in energy cost vs able-bodied gait"],
          rows: [
            ["Unilateral transtibial (traumatic)", "~10–25%"],
            ["Unilateral transtibial (dysvascular)", "~40%"],
            ["Unilateral transfemoral (traumatic)", "~50–65%"],
            ["Unilateral transfemoral (dysvascular)", "~100% or more"],
            ["Bilateral transtibial", "~40–60%"],
            ["Bilateral transfemoral", "Often >200% — many use a wheelchair for distance"],
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Preserving the anatomical knee roughly halves the added energy cost — the core argument for transtibial over transfemoral surgery when viable",
            "Dysvascular amputees face higher costs with lower cardiovascular reserve — aerobic conditioning is a genuine rehabilitation priority",
            "Self-selected walking speed decreases as level rises; distance capacity, not just gait quality, is an outcome to measure (e.g. 2-minute or 6-minute walk test)",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Quoted percentages vary between studies — learn the pattern (transtibial < transfemoral; dysvascular > traumatic; bilateral ≫ unilateral) rather than a single number.",
          ],
        },
      ],
    },
    {
      slug: "precautions-falls-skin",
      title: "Precautions: Falls, Skin & the Sound Limb",
      estMinutes: 2,
      content: [
        {
          kind: "warning",
          title: "Falls prevention",
          items: [
            "Falls are common early after amputation — patients forget the limb is absent, especially at night; bed rails/commode planning and night lighting matter",
            "Teach safe falling and floor-to-stand techniques as core skills, not afterthoughts",
            "A fall onto a healing residuum can cause wound dehiscence — protect it with a rigid removable dressing where used",
            "Review medication, vision, cognition and environment as for any high-falls-risk patient",
          ],
        },
        {
          kind: "warning",
          title: "Skin & residuum monitoring",
          items: [
            "Inspect the residuum after every prosthetic session early on (mirror for the distal end); persistent redness >10–20 minutes = review fit/sock ply",
            "Blisters, abrasions or verrucous hyperplasia signal socket or suspension problems — do not \"walk through\" skin damage",
            "Daily washing and complete drying of residuum and liner; never don a prosthesis over broken skin without team review",
            "Volume management: adjust sock ply through the day as the residuum shrinks",
          ],
        },
        {
          kind: "redflags",
          items: [
            "Signs of wound infection: spreading redness, heat, discharge, fever — urgent medical review",
            "New rest pain, colour change or coldness in the sound (remaining) foot — possible critical ischaemia",
            "Any ulcer or breakdown on the sound foot in a diabetic/dysvascular patient — urgent podiatry/vascular referral",
            "Sudden painful swelling of the residuum or calf — exclude DVT",
          ],
        },
        {
          kind: "pearls",
          items: [
            "The sound limb is the patient's future: daily inspection, good footwear, nail and skin care, and glycaemic/vascular management protect it. Half your education time belongs to the foot that remains.",
          ],
        },
      ],
    },
    {
      slug: "psychosocial",
      title: "Psychosocial Aspects",
      estMinutes: 1,
      content: [
        {
          kind: "paragraph",
          text: "Amputation is a bereavement — of the limb, of body image, and often of occupation and roles. Grief reactions, anxiety, depression and (after trauma) post-traumatic stress are common and influence rehabilitation engagement and outcomes. Screening, honest goal-setting, peer support from established amputees, and timely referral to psychology are part of good physiotherapy care, not extras.",
        },
        {
          kind: "keypoints",
          items: [
            "Expect grief-type reactions; normalise them and listen before problem-solving",
            "Depression and body-image distress reduce prosthetic use and adherence — screen and refer",
            "Peer support visits are consistently valued by new amputees",
            "Set collaborative, staged goals: early wins (independent transfers) build the self-efficacy that later gait training needs",
            "Return to work, driving and leisure belong on the problem list from the start",
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
            "Most lower-limb amputations are dysvascular (PAD ± diabetes); protect the sound limb for life",
            "Post-op: shape with shrinker/figure-of-eight bandaging; NO pillow under the transtibial knee; prone lying prevents hip flexion contracture",
            "Phantom sensation = normal; phantom pain = treat (education, desensitisation, mirror therapy/GMI, meds); residuum pain = find the source",
            "Pre-prosthetic: hip extensor/abductor strength, sound-limb balance, transfers, wheelchair skills, aerobic base",
            "Prosthesis = socket + liner + suspension + pylon + foot (± knee unit); socket fit trumps component technology",
            "Energy cost: transtibial ~20–40% ↑, transfemoral ~60–100% ↑ — preserve the knee",
            "Gait deviations: check patient, then socket, then alignment; hip extensors stabilise the prosthetic knee",
            "Skin checks after every session; redness that persists >10–20 min means review the fit",
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
      text: "What is the most common cause of lower-limb amputation in high-income countries?",
      options: [
        "Road traffic trauma",
        "Peripheral arterial disease, usually with diabetes (dysvascular)",
        "Bone malignancy",
        "Congenital limb deficiency",
      ],
      correctIndex: 1,
      explanation:
        "Dysvascular disease — peripheral arterial disease, most often combined with diabetes — accounts for the large majority (commonly quoted as over 80%) of lower-limb amputations in high-income countries. This matters clinically: patients are older, have systemic vascular disease, and the remaining limb is at high risk.",
      difficulty: "Easy",
      tags: ["pathology"],
      sectionSlug: "levels-and-causes",
    },
    {
      text: "Why do surgeons preserve the anatomical knee joint whenever possible?",
      options: [
        "Transfemoral sockets are impossible to manufacture",
        "A preserved knee greatly reduces the energy cost of gait and improves functional outcomes",
        "Knee disarticulation always heals poorly",
        "Prosthetic knees are heavier than prosthetic feet",
      ],
      correctIndex: 1,
      explanation:
        "Transtibial amputees walk with roughly 20–40% increased energy cost, whereas transfemoral amputees face around 60–100% or more. Losing the anatomical knee removes powerful stance control and requires the hip to control a mechanical knee — so knee preservation is the biggest single determinant of walking outcome.",
      difficulty: "Easy",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "levels-and-causes",
    },
    {
      text: "Which positioning practice after transtibial amputation risks a knee flexion contracture?",
      options: [
        "Using a stump board on the wheelchair",
        "Prone lying twice daily",
        "Resting with a pillow under the knee",
        "Lying supine with the knee extended",
      ],
      correctIndex: 2,
      explanation:
        "A pillow under the knee holds it in flexion; combined with prolonged flexed-knee sitting it produces a knee flexion contracture, which (especially beyond ~15°) can prevent prosthetic fitting. Stump boards, prone lying and extended positioning all protect knee extension.",
      difficulty: "Easy",
      tags: ["precautions", "management"],
      sectionSlug: "postop-limb-care",
    },
    {
      text: "What is the primary purpose of regular prone lying after transfemoral amputation?",
      options: [
        "To improve wound drainage",
        "To prevent hip flexion contracture",
        "To reduce phantom sensation",
        "To strengthen the abdominal muscles",
      ],
      correctIndex: 1,
      explanation:
        "The transfemoral residuum is pulled towards flexion and abduction by unopposed hip flexors/abductors and by habitual sitting. Prone lying places the hip in extension, preventing (and treating) hip flexion contracture — a deformity that compromises prosthetic alignment and gait.",
      difficulty: "Easy",
      tags: ["management", "precautions"],
      sectionSlug: "postop-limb-care",
    },
    {
      text: "How should an elastic bandage be applied to a residual limb for shaping?",
      options: [
        "Circular turns with even pressure throughout",
        "Figure-of-eight turns with greatest pressure distally, decreasing proximally",
        "A single tight proximal band to prevent slipping",
        "Loose longitudinal strips without tension",
      ],
      correctIndex: 1,
      explanation:
        "Figure-of-eight (diagonal) turns with a distal-to-proximal pressure gradient shape the limb and move oedema proximally. Circular turns are avoided because they can act as a tourniquet, and any proximal constriction with distal looseness causes distal congestion and a bulbous residuum.",
      difficulty: "Medium",
      tags: ["management", "precautions"],
      sectionSlug: "postop-limb-care",
    },
    {
      text: "A patient reports a non-painful feeling that their amputated foot is still present and \"curled up closer to the knee\". What is this?",
      options: [
        "Phantom limb pain requiring urgent treatment",
        "Neuroma formation",
        "Normal phantom sensation with telescoping",
        "Early complex regional pain syndrome",
      ],
      correctIndex: 2,
      explanation:
        "Non-painful awareness of the missing limb is phantom sensation — near-universal and benign. \"Telescoping\", where the phantom distal limb feels drawn up towards the residuum, is a common evolution. Patients should be warned in advance so these normal experiences don't alarm them.",
      difficulty: "Easy",
      tags: ["pathology", "assessment"],
      sectionSlug: "phantom-limb",
    },
    {
      text: "What is the proposed mechanism by which mirror therapy reduces phantom limb pain?",
      options: [
        "It strengthens the residual limb muscles",
        "The reflection provides congruent visual feedback of a moving, pain-free limb, addressing cortical reorganisation",
        "The mirror blocks nociceptive signals from the residuum",
        "It desensitises the skin of the intact limb",
      ],
      correctIndex: 1,
      explanation:
        "Phantom pain is associated with maladaptive cortical reorganisation and mismatch between motor intention and sensory feedback. The mirror creates the visual illusion of an intact, moving, pain-free limb, restoring congruent feedback. It is often delivered as the final stage of graded motor imagery.",
      difficulty: "Medium",
      tags: ["management", "pathology"],
      sectionSlug: "phantom-limb",
    },
    {
      text: "An established prosthetic user develops new pain localised to the distal residuum during walking. What is the most likely explanation to exclude first?",
      options: [
        "Central sensitisation",
        "Poor socket fit or skin breakdown from volume change",
        "Phantom limb pain",
        "Hip osteoarthritis",
      ],
      correctIndex: 1,
      explanation:
        "New residual limb pain in a prosthetic user is a socket/interface problem until proven otherwise — residuum volume changes alter fit, causing pressure areas, pistoning and skin breakdown. Examine the limb and the socket, and review sock ply, before attributing pain to other causes.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "assessment", "precautions"],
      sectionSlug: "phantom-limb",
    },
    {
      text: "Which muscle group is most critical to strengthen for stance-phase control of a transfemoral prosthesis?",
      options: ["Hip flexors", "Hip extensors", "Knee extensors of the residual limb", "Ankle plantarflexors"],
      correctIndex: 1,
      explanation:
        "With the anatomical knee gone, the hip extensors stabilise the prosthetic knee at loading: extending the hip drives the socket back, keeping the knee unit extended. Weak hip extensors cause knee instability or buckling at heel strike. (The residual limb has no knee extensors below a transfemoral level.)",
      difficulty: "Hard",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "pre-prosthetic-phase",
    },
    {
      text: "Why is deliberate sound-limb training a priority in the pre-prosthetic phase?",
      options: [
        "The sound limb performs transfers, hopping and single-leg tasks, and in dysvascular patients must also be protected from breakdown",
        "It prevents phantom pain in the amputated limb",
        "It shrinks the residual limb faster",
        "Sound-limb exercise is contraindicated and should be avoided",
      ],
      correctIndex: 0,
      explanation:
        "Until (and alongside) prosthetic use, the sound limb does the heavy work of transfers, standing and mobility, so its strength and balance capacity are trained deliberately. In dysvascular patients it is simultaneously at high risk of ulceration and amputation, so training is paired with daily inspection, footwear and skin care.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "precautions"],
      sectionSlug: "pre-prosthetic-phase",
    },
    {
      text: "Which component of a lower-limb prosthesis most determines day-to-day comfort and control?",
      options: [
        "The cosmetic covering",
        "The socket-residuum interface (socket fit)",
        "The pylon material",
        "The colour of the liner",
      ],
      correctIndex: 1,
      explanation:
        "The socket is the interface through which all load and control passes. A poorly fitting socket causes pain, skin damage and gait deviations that no foot or knee technology can compensate for — hence the maxim that socket fit trumps component sophistication.",
      difficulty: "Easy",
      tags: ["management", "anatomy"],
      sectionSlug: "prosthetic-components",
    },
    {
      text: "\"Pistoning\" of a prosthesis refers to what?",
      options: [
        "The hydraulic action of a microprocessor knee",
        "Vertical movement of the residuum within the socket due to inadequate suspension",
        "The energy return of a dynamic-response foot",
        "Rotational slipping of the cosmetic cover",
      ],
      correctIndex: 1,
      explanation:
        "Pistoning is up-and-down movement of the residual limb inside the socket during swing and stance, caused by poor suspension or volume loss (insufficient sock ply). It produces friction, skin breakdown, and gait deviations such as vaulting, and reduces control of the prosthesis.",
      difficulty: "Medium",
      tags: ["assessment", "pathology"],
      sectionSlug: "prosthetic-components",
    },
    {
      text: "For which patient is a SACH (solid ankle cushioned heel) foot most appropriate?",
      options: [
        "A young traumatic transtibial amputee returning to running",
        "A low-activity household ambulator needing simple, stable, low-maintenance function",
        "A community-ambulant transfemoral amputee on uneven ground daily",
        "Any patient, since all feet perform identically",
      ],
      correctIndex: 1,
      explanation:
        "The SACH foot is simple, stable, durable and inexpensive, with a cushioned heel simulating plantarflexion — suited to low-activity, household-level walkers. Active users benefit from multi-axial or energy-storing (dynamic response) feet that better handle uneven terrain and higher demands. Prescription follows functional level.",
      difficulty: "Hard",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "prosthetic-components",
    },
    {
      text: "A transfemoral prosthetic user leans their trunk towards the prosthetic side during its stance phase. Which combination is a recognised set of causes?",
      options: [
        "Prosthesis too short, wide socket, weak hip abductors, or abduction contracture",
        "Prosthesis too long and overactive hip adductors",
        "Excessive knee flexion resistance only",
        "This is a normal feature of prosthetic gait requiring no analysis",
      ],
      correctIndex: 0,
      explanation:
        "Lateral trunk lean to the prosthetic side classically reflects weak hip abductors (a prosthetic Trendelenburg compensation), a short residuum with poor femoral control, pain, abduction contracture, or prosthetic causes: a socket too wide laterally or a prosthesis that is too short. Patient, socket and alignment are checked in that order.",
      difficulty: "Hard",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "prosthetic-gait-training",
    },
    {
      text: "Vaulting on the sound limb during prosthetic swing most commonly compensates for which problem?",
      options: [
        "A prosthesis that is functionally too long or has poor suspension, making toe clearance difficult",
        "Excessive hip flexor strength",
        "A prosthetic foot set too posteriorly",
        "Overtraining of the sound calf",
      ],
      correctIndex: 0,
      explanation:
        "Vaulting — rising onto the sound-side toes — buys swing-phase clearance for the prosthetic limb. It suggests the prosthesis is effectively too long (true length, pistoning from poor suspension, or insufficient knee flexion in swing) or reflects a learned fear of catching the toe. Circumduction and hip hiking serve the same purpose.",
      difficulty: "Hard",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "prosthetic-gait-training",
    },
    {
      text: "Using standard technique, how should a prosthetic user climb and descend stairs?",
      options: [
        "Prosthetic limb leads up; sound limb leads down",
        "Sound limb leads up; prosthetic limb leads down",
        "Either limb may lead in both directions from the first session",
        "Stairs are contraindicated for all prosthetic users",
      ],
      correctIndex: 1,
      explanation:
        "\"Up with the good, down with the bad\": the sound limb leads ascending (it has the strength to lift the body), and the prosthetic limb leads descending (the sound limb controls the lowering eccentrically). Advanced users with microprocessor knees may achieve step-over-step patterns, but this is the standard teaching technique.",
      difficulty: "Medium",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "prosthetic-gait-training",
    },
    {
      text: "Compared with able-bodied walking, the energy cost of unilateral dysvascular transfemoral gait is approximately:",
      options: ["Unchanged", "10–15% higher", "40% higher", "100% (double) or more"],
      correctIndex: 3,
      explanation:
        "Energy cost rises with amputation level and vascular cause: traumatic transtibial ~10–25%, dysvascular transtibial ~40%, traumatic transfemoral ~50–65%, and dysvascular transfemoral around 100% or more. This is why aerobic conditioning and knee preservation matter so much, and why patients self-select slower walking speeds.",
      difficulty: "Hard",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "energy-cost",
    },
    {
      text: "After a gait training session, a new prosthetic user has an area of redness over the distal tibia that is still present 30 minutes after doffing. What is the correct response?",
      options: [
        "Continue training — redness is expected for the first year",
        "Apply moisturiser and re-don the prosthesis",
        "Stop loading, review socket fit and sock ply, and involve the prosthetist before further walking",
        "Advise the patient to toughen the skin with spirit wipes",
      ],
      correctIndex: 2,
      explanation:
        "Transient redness that fades within roughly 10–20 minutes is acceptable; persistent redness indicates excessive local pressure and impending breakdown. Walking through it risks ulceration — particularly dangerous in dysvascular/diabetic patients. Fit, alignment and sock ply must be reviewed before resuming loading.",
      difficulty: "Medium",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "precautions-falls-skin",
    },
    {
      text: "Which finding in a dysvascular amputee requires urgent medical/vascular referral rather than routine physiotherapy management?",
      options: [
        "Mild muscle soreness after a new exercise",
        "New rest pain and coldness in the remaining foot",
        "Phantom sensation at night",
        "Transient redness of the residuum fading within 10 minutes of doffing",
      ],
      correctIndex: 1,
      explanation:
        "New rest pain, pallor or coldness in the sound foot suggests critical limb ischaemia — the remaining limb of a dysvascular amputee is at very high risk, and up to half of patients may face contralateral amputation within a few years without vigilant care. Urgent vascular review is required. The other options are benign or expected findings.",
      difficulty: "Medium",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "precautions-falls-skin",
    },
  ],
  flashcards: [
    { front: "What proportion and cause dominate lower-limb amputations?", back: "The large majority (~80%+ in high-income countries) are dysvascular — peripheral arterial disease, usually with diabetes." },
    { front: "Key positioning rules after transtibial amputation?", back: "Keep the knee extended: no pillow under the knee, limit prolonged flexed sitting, use a wheelchair stump board. A flexion contracture can prevent prosthetic fitting." },
    { front: "Key positioning rule after transfemoral amputation?", back: "Prevent hip flexion/abduction contracture: regular prone lying (15–30 min, 2–3×/day), no pillow between thighs, avoid prolonged sitting." },
    { front: "How is a shaping bandage applied to a residuum?", back: "Figure-of-eight turns, pressure greatest distally decreasing proximally, reapplied every 4–6 hours. Never circular turns (tourniquet effect)." },
    { front: "Phantom sensation vs phantom pain vs residual limb pain?", back: "Phantom sensation: non-painful awareness of the missing limb — normal. Phantom pain: pain felt in the absent limb (cortical reorganisation). Residual limb pain: pain in the stump itself — find the source (socket, neuroma, skin, bone, ischaemia)." },
    { front: "What is mirror therapy?", back: "A sagittal mirror reflects the intact limb where the missing limb would be; congruent visual feedback of pain-free movement can reduce phantom pain. Often the last stage of graded motor imagery." },
    { front: "List the main components of a lower-limb prosthesis.", back: "Socket (+ liner and socks), suspension system, pylon, prosthetic foot — plus a knee unit at transfemoral level. Socket fit matters most." },
    { front: "What is pistoning and what causes it?", back: "Vertical movement of the residuum inside the socket during gait — caused by poor suspension or volume loss (insufficient sock ply). Causes skin damage and deviations like vaulting." },
    { front: "Approximate energy cost increases of amputee gait?", back: "Transtibial ~10–25% (traumatic) to ~40% (dysvascular); transfemoral ~50–65% (traumatic) to ~100%+ (dysvascular); bilateral much higher. Pattern: higher level and vascular cause cost more." },
    { front: "Stair technique for prosthetic users?", back: "Sound limb leads going up; prosthetic limb leads going down (\"up with the good, down with the bad\")." },
    { front: "Why are hip extensors crucial for transfemoral gait?", back: "They stabilise the mechanical knee at loading — hip extension drives the socket posteriorly, holding the knee unit extended. Weakness causes knee buckling at heel strike." },
    { front: "Skin-check rule after prosthetic use?", back: "Inspect the residuum after every early session; redness persisting beyond ~10–20 minutes means excessive pressure — review socket fit and sock ply before walking again." },
  ],
};

export default topic;
