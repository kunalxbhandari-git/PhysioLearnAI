import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "muscle-strain-injuries",
  title: "Muscle Injuries & Strains",
  category: "Musculoskeletal",
  description:
    "Learn how muscles are built, how they tear, how they heal, and how to guide a strain from the acute phase back to full sport — including grading, PEACE & LOVE, and eccentric-based rehabilitation.",
  difficulty: "Beginner",
  estMinutes: 29,
  icon: "activity",
  keyTakeaways: [
    "A strain is an indirect stretching injury of the muscle–tendon unit; a contusion is a direct blow; DOMS is exercise-induced soreness — three different problems with different management.",
    "Most strains occur at the musculotendinous junction of biarticular muscles (hamstrings, gastrocnemius, rectus femoris) during rapid eccentric loading.",
    "Grading runs from grade I (few fibres, minimal strength loss) to grade III (complete rupture, often paradoxically less painful).",
    "Healing follows overlapping phases — bleeding/inflammation, proliferation and remodeling — and new muscle tissue must be progressively loaded to align and strengthen.",
    "Acute care follows PEACE & LOVE: protect and offload early, then progressively load; avoid anti-inflammatories and ice-dominated passive care beyond the first days.",
    "Rehab progresses from pain-guided isometrics through concentric strengthening to eccentric and sport-specific work — eccentric strength is the key protective quality.",
    "The biggest risk factor for a muscle strain is a previous strain — incomplete rehabilitation drives the high re-injury rate.",
    "Red flags include suspected complete rupture, evolving compartment syndrome after contusion, and myositis ossificans — all need medical review.",
  ],
  sections: [
    {
      slug: "overview",
      title: "Overview of Muscle Injuries",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Muscle injuries are among the most common problems in sport and active life, accounting for roughly a third of all sports injuries. They range from trivial soreness after unaccustomed exercise to complete ruptures requiring surgical opinion.",
        },
        {
          kind: "paragraph",
          text: "For the physiotherapist, three questions frame every muscle injury: what tissue and mechanism is involved (strain, contusion or simply DOMS), how severe is it (grade), and where is the athlete in the healing timeline? The answers dictate load, progression speed and return-to-play decisions.",
        },
        {
          kind: "keypoints",
          title: "Why this topic matters",
          items: [
            "Muscle strains are the single most common time-loss injury in running and field sports",
            "Re-injury rates are high — often 15–30% for hamstrings — and re-injuries are usually worse than the original",
            "Well-dosed, criteria-based rehabilitation measurably reduces re-injury risk",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Time alone does not equal healing quality — a muscle can be pain-free at rest long before it can tolerate sprinting.",
          ],
        },
      ],
    },
    {
      slug: "muscle-structure",
      title: "Muscle Structure & Fascia Basics",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Skeletal muscle is a hierarchy of contractile units wrapped in connective tissue. Individual muscle fibres (cells) contain myofibrils built from sarcomeres — the actin–myosin units that generate force. Fibres are bundled into fascicles, and fascicles into the whole muscle belly.",
        },
        {
          kind: "image",
          illustration: "muscle-fiber",
          caption: "Skeletal muscle hierarchy: sarcomeres within myofibrils, myofibrils within fibres, fibres bundled into fascicles — each level wrapped in its own connective tissue layer.",
        },
        {
          kind: "cards",
          items: [
            { title: "Endomysium", text: "Delicate connective tissue sheath around each individual muscle fibre.", icon: "circle" },
            { title: "Perimysium", text: "Wraps each fascicle (bundle of fibres) and carries vessels and nerves into the muscle.", icon: "layers" },
            { title: "Epimysium", text: "The outer sleeve around the whole muscle belly, continuous with the deep fascia.", icon: "shield" },
            { title: "Deep fascia", text: "Dense connective tissue investing muscle groups and forming compartments — clinically important in compartment syndrome.", icon: "box" },
          ],
        },
        {
          kind: "paragraph",
          text: "Force is transmitted from sarcomeres through this connective tissue skeleton to the tendon. The musculotendinous junction (MTJ) — where contractile tissue blends into tendon — is the mechanical weak link of the muscle–tendon unit and the most common site of strain injury.",
        },
        {
          kind: "keypoints",
          items: [
            "Muscle is well vascularised, so it heals far better than tendon or cartilage — but it heals with scar unless it is loaded appropriately",
            "The musculotendinous junction is the usual site of failure under tensile load",
            "Fascia forms closed compartments — bleeding into a compartment can raise pressure dangerously",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Muscles with a higher proportion of fast-twitch (type II) fibres and a biarticular arrangement are the classic strain candidates.",
          ],
        },
      ],
    },
    {
      slug: "injury-mechanisms",
      title: "Injury Mechanisms: Strain vs Contusion vs DOMS",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Three common presentations of a painful muscle need to be distinguished at first contact, because their causes, tissue states and management differ.",
        },
        {
          kind: "table",
          headers: ["Feature", "Strain (indirect)", "Contusion (direct)", "DOMS"],
          rows: [
            ["Mechanism", "Rapid overstretch under load, usually eccentric", "Direct blow compressing muscle against bone", "Unaccustomed exercise, especially eccentric"],
            ["Onset", "Sudden, during activity — often a felt \"pull\" or \"pop\"", "Immediate, at the moment of impact", "Delayed — peaks 24–72 hours after exercise"],
            ["Location", "Usually the musculotendinous junction", "At the impact site, often the muscle belly (e.g. quadriceps \"dead leg\")", "Diffuse through the exercised muscle group"],
            ["Findings", "Focal tenderness, pain on stretch and resisted contraction, possible defect/bruising", "Swelling, haematoma, bruising tracking distally, painful restricted knee flexion in quads", "Bilateral soreness, stiffness, tenderness; strength temporarily reduced"],
            ["Course", "Grade-dependent — days to months", "Usually resolves over 1–6 weeks; beware myositis ossificans", "Self-limiting, resolves within 3–7 days"],
          ],
        },
        {
          kind: "paragraph",
          text: "Strains are indirect injuries: the muscle fails under its own tension, classically while contracting eccentrically at speed. Contusions are direct compression injuries with intramuscular or intermuscular bleeding. DOMS is not a tear at all in the clinical sense — it is exercise-induced microtrauma and inflammation that resolves without specific treatment.",
        },
        {
          kind: "warning",
          title: "Common assessment mistakes",
          items: [
            "Labelling DOMS as a strain — DOMS is diffuse, bilateral after bilateral exercise, and delayed in onset",
            "Underestimating a quadriceps contusion — a tense, very painful thigh with rapidly restricted knee flexion needs close monitoring",
            "Massaging or aggressively stretching a fresh contusion — this increases bleeding and the risk of myositis ossificans",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Ask \"what exactly were you doing at the moment it happened?\" — a sprinter's sudden posterior thigh pain at terminal swing is a hamstring strain until proven otherwise.",
            "Intermuscular bleeding (bruising that tracks down the limb) generally recovers faster than intramuscular bleeding that stays contained under pressure.",
          ],
        },
      ],
    },
    {
      slug: "strain-grading",
      title: "Strain Grading I–III",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "The traditional three-grade system classifies strains by the extent of fibre disruption and the resulting loss of function. It maps directly onto expected recovery times and rehabilitation pace.",
        },
        {
          kind: "image",
          illustration: "ligament-grades",
          caption: "The same grading logic used for ligaments applies to muscle strains: grade I — microscopic fibre damage; grade II — partial tear with a palpable defect possible; grade III — complete rupture of the muscle–tendon unit.",
        },
        {
          kind: "table",
          headers: ["Grade", "Tissue damage", "Clinical findings", "Typical timeframe"],
          rows: [
            ["I (mild)", "A few fibres torn, fascia intact", "Local tenderness, minimal swelling, near-full strength, pain at end-range stretch and strong resisted testing", "Days to ~3 weeks"],
            ["II (moderate)", "Significant partial tear", "Clear pain and weakness on resisted testing, swelling and bruising, painful restricted stretch, sometimes a palpable divot", "Roughly 3–8 weeks (site-dependent)"],
            ["III (severe)", "Complete rupture of muscle or musculotendinous junction", "Marked weakness or no contraction across the injured segment, palpable gap, muscle may bunch up; pain can be surprisingly modest after the initial episode", "Months; surgical opinion often required"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "A grade III rupture can hurt less than a grade II tear — with no intact fibres left under tension, resisted testing may be weak but not very painful. Weakness out of proportion to pain is a warning sign.",
            "Modern systems (e.g. the British Athletics Muscle Injury Classification) add injury site — myofascial, musculotendinous or intratendinous — because tears extending into the tendon heal slowest and re-injure most.",
          ],
        },
      ],
    },
    {
      slug: "high-risk-muscles",
      title: "High-Risk Muscles & Why They Tear",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Strains cluster in a small group of muscles that share three characteristics: they cross two joints (biarticular), they contain a high proportion of fast-twitch fibres, and they work eccentrically at high speed to decelerate a limb.",
        },
        {
          kind: "cards",
          items: [
            { title: "Hamstrings", text: "The most strained muscle group in running sports. Biceps femoris (long head) fails during terminal swing of sprinting, when it contracts eccentrically to decelerate the extending knee while the hip is flexed.", icon: "zap" },
            { title: "Gastrocnemius", text: "\"Tennis leg\" — a tear of the medial head, typically in middle-aged athletes lunging with the knee extended and ankle dorsiflexed, maximally lengthening this biarticular calf muscle.", icon: "trending-up" },
            { title: "Rectus femoris", text: "The only biarticular quadriceps muscle. Strained during kicking and sprinting — hip extension plus knee flexion puts it on full stretch while it contracts forcefully.", icon: "target" },
            { title: "Adductor longus", text: "Common in change-of-direction and kicking sports (football, hockey); strained during forced abduction while the adductors contract.", icon: "move" },
          ],
        },
        {
          kind: "paragraph",
          text: "The common thread is active lengthening: a muscle generating high force while being stretched across two joints simultaneously. Eccentric contractions produce the highest tensions in muscle, and the musculotendinous junction bears the brunt.",
        },
        {
          kind: "keypoints",
          title: "The classic strain recipe",
          items: [
            "Biarticular muscle placed on stretch across both joints",
            "High-velocity eccentric contraction (sprinting, kicking, lunging)",
            "Fatigue, poor eccentric strength, previous injury and inadequate warm-up raise the risk further",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Soleus strains behave differently from gastrocnemius strains: soleus is monoarticular and postural, its strains are more gradual and running-volume related, and they tolerate earlier loading.",
          ],
        },
      ],
    },
    {
      slug: "healing-phases",
      title: "Healing Phases & Timeframes",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Injured skeletal muscle heals through overlapping biological phases. Unlike bone, muscle regenerates via satellite cells but simultaneously forms connective scar tissue — the balance between regeneration and scarring is influenced by how the muscle is loaded during recovery.",
        },
        {
          kind: "steps",
          items: [
            { title: "1. Destruction / bleeding phase (day 0–3)", text: "Torn fibres necrose, the ruptured vessels bleed and a haematoma forms in the gap. Inflammatory cells arrive to clear debris. Clinically: pain, swelling, protective spasm." },
            { title: "2. Repair / proliferation phase (day 3 – ~3 weeks)", text: "Satellite cells activate and fuse into new myotubes that grow into the injury zone, while fibroblasts lay down a connective tissue scar bridging the gap. Capillaries regrow into the area." },
            { title: "3. Remodeling phase (weeks to months)", text: "Regenerating fibres mature and reattach to the scar; the scar condenses and reorients along lines of stress. Progressive mechanical loading is the stimulus that aligns and strengthens this new tissue." },
          ],
        },
        {
          kind: "paragraph",
          text: "Early, careful mobilisation accelerates capillary ingrowth, improves fibre regeneration and produces a smaller, better-oriented scar than immobilisation. A short period of relative rest (a few days) protects the fragile early scar; prolonged rest weakens the whole muscle–tendon unit and produces a disorganised scar prone to re-tear.",
        },
        {
          kind: "keypoints",
          title: "Approximate return-to-activity timeframes",
          items: [
            "Grade I: several days to ~3 weeks",
            "Grade II: roughly 3–8 weeks depending on site and demands",
            "Grade III: 3+ months, often after surgical repair",
            "Intratendinous tears (extension into the central tendon) heal slowest of all",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Think of the scar as the new weakest link: rehab is the process of teaching the scar and the regenerating fibres to tolerate the exact loads that caused the injury.",
          ],
        },
      ],
    },
    {
      slug: "acute-management",
      title: "Acute Management: PEACE & LOVE",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "The contemporary framework for acute soft-tissue injury is PEACE & LOVE, which replaced RICE/POLICE. PEACE covers the first days; LOVE guides the subsequent recovery. Its two big shifts: do not aggressively suppress the inflammatory response that healing depends on, and start loading as soon as symptoms allow.",
        },
        {
          kind: "steps",
          items: [
            { title: "P — Protect", text: "Offload or restrict aggravating movement for 1–3 days. Crutches for a significant lower-limb strain. Avoid complete rest beyond the minimum needed." },
            { title: "E — Elevate", text: "Elevate the limb above the heart to limit swelling." },
            { title: "A — Avoid anti-inflammatories", text: "Routine NSAIDs and repeated icing may blunt the inflammatory processes that drive tissue regeneration. Use analgesia judiciously; ice mainly for short-term pain relief." },
            { title: "C — Compress", text: "Elastic bandage or taping to limit haematoma expansion and swelling." },
            { title: "E — Educate", text: "Explain the healing timeline, the value of active recovery, and set realistic expectations — avoid over-medicalising and passive-treatment dependence." },
            { title: "L — Load", text: "Resume normal activity and begin progressive mechanical loading as soon as symptoms allow — load is the stimulus for repair and remodeling." },
            { title: "O — Optimism", text: "Expectations and confidence genuinely influence recovery; address fear and catastrophising." },
            { title: "V — Vascularisation", text: "Pain-free cardiovascular exercise (bike, upper-body ergometer, pool) from early on boosts blood flow and maintains fitness." },
            { title: "E — Exercise", text: "Restore mobility, strength and proprioception with a progressive, pain-guided exercise programme — the core of rehabilitation." },
          ],
        },
        {
          kind: "warning",
          title: "Acute-phase cautions",
          items: [
            "No massage, vigorous stretching, heat or alcohol in the first 48–72 hours — all can increase bleeding",
            "Do not test maximal strength or stretch to end-range in the first days — you may extend the tear",
            "A tense, disproportionately painful muscle compartment after a contusion is an emergency, not a treatment target",
          ],
        },
        {
          kind: "pearls",
          items: [
            "\"Protect, then progressively load\" summarises modern acute care in four words.",
          ],
        },
      ],
    },
    {
      slug: "rehab-progression",
      title: "Rehabilitation Progression & Key Exercises",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Rehabilitation follows a criteria-based ladder: pain-guided isometrics to restore muscle activation, then concentric strengthening through increasing range, then eccentric and lengthened-state loading, and finally sport-specific speed and skill work. Progress on criteria (pain, strength, range), not on the calendar.",
        },
        {
          kind: "steps",
          items: [
            { title: "Stage 1 — Isometrics & protected movement", text: "Pain-monitored isometric contractions in mid-range, gentle active ROM, normal walking pattern. Criterion to progress: minimal pain (≤2–3/10) on daily activity and isometric testing." },
            { title: "Stage 2 — Concentric / isotonic strengthening", text: "Dynamic resistance work through progressively larger range, building load and volume. Add trunk/pelvic control work. Criterion: full pain-free ROM and near-symmetrical strength at slow speed." },
            { title: "Stage 3 — Eccentric & lengthened-state loading", text: "Eccentric-biased exercises at progressively longer muscle lengths — the stimulus that restores fibre length and protects against re-injury." },
            { title: "Stage 4 — Speed, sport-specific & return to play", text: "Progressive running, acceleration, high-speed running exposure, change of direction and kicking as relevant. Return to play when strength is symmetrical, high-speed running is pain-free, and the athlete is confident." },
          ],
        },
        {
          kind: "exercise",
          name: "Isometric hamstring bridge",
          purpose: "Early pain-guided activation of the hamstrings without lengthening the healing tissue.",
          position: "Supine, knees bent about 30–45°, heels dug into the floor or a low box.",
          execution: "Lift the hips a few centimetres and hold, driving through the heels so the hamstrings work as hip extensors. Keep the pelvis level.",
          dosage: "5 holds of 10–30 seconds, 1–2×/day, pain ≤3/10.",
          progression: "Longer holds → single-leg holds → moving (dynamic) bridges.",
          precautions: "Stay in a pain-monitored range; cramping is common early — shorten the hold.",
        },
        {
          kind: "exercise",
          name: "Prone hamstring curl (isotonic)",
          purpose: "Stage-2 concentric–eccentric strengthening of the knee flexors through range.",
          position: "Prone on a bench or floor, ankle weight or resistance band at the ankle.",
          execution: "Bend the knee against resistance through comfortable range, lower with control over 3 seconds.",
          dosage: "3 sets of 8–12, every other day.",
          progression: "Increase load, then progress to single-leg Romanian deadlifts to bias hip-dominant, lengthened work.",
          precautions: "Avoid pushing into sharp local pain at the injury site.",
        },
        {
          kind: "exercise",
          name: "Nordic hamstring curl",
          purpose: "High-load eccentric strengthening — the best-evidenced exercise for reducing hamstring strain and re-strain risk.",
          position: "Kneeling tall on a pad, ankles firmly fixed by a partner or under a bar.",
          execution: "Keeping hips extended and trunk straight, lower the body forward as slowly as possible, resisting with the hamstrings, then catch with the hands and push back up.",
          dosage: "Build gradually, e.g. 2–3 sets of 3–5 twice weekly, progressing over weeks.",
          progression: "Increase range controlled before assisting, add reps/sets, then add load behind the neck.",
          precautions: "A late-stage exercise — introduce only when isotonic strength is well established; expect significant DOMS at first, so start well before return to sport.",
        },
        {
          kind: "exercise",
          name: "Eccentric calf raise (for calf strains)",
          purpose: "Lengthened-state eccentric loading of the gastrocnemius–soleus complex during later-stage calf rehab.",
          position: "Standing on a step edge on the forefoot, hand support available.",
          execution: "Rise up on both legs, shift weight to the injured leg, then lower the heel slowly below step level over 3–5 seconds.",
          dosage: "3 sets of 10–15, once daily; knee straight to bias gastrocnemius, knee bent ~30° to bias soleus.",
          progression: "Both-legs-up/one-leg-down → single leg throughout → add load in a backpack → progress to jump/hop loading.",
          precautions: "Progress depth gradually after a gastrocnemius tear — full dorsiflexion under load is exactly the injury position.",
        },
        {
          kind: "exercise",
          name: "Single-leg Romanian deadlift",
          purpose: "Lengthened-state hamstring loading with hip-hinge control — bridges gym strength to sprint mechanics.",
          position: "Standing on the injured leg, soft knee, light dumbbell or kettlebell in hand.",
          execution: "Hinge forward from the hip with a long, neutral spine, letting the free leg extend behind, until a firm hamstring stretch is felt, then drive back up through the heel.",
          dosage: "3 sets of 6–10 each side, 2–3×/week.",
          progression: "Add load, increase tempo control (slow 4-second lowering), progress to sprint-specific drills.",
          precautions: "Requires stage-2 competence; keep the pelvis square and avoid lumbar flexion substituting for hip hinge.",
        },
        {
          kind: "keypoints",
          title: "Progression principles",
          items: [
            "Pain up to ~3/10 that settles by the next day is an acceptable ceiling during muscle-strain rehab",
            "Restore strength at long muscle lengths, not just in mid-range",
            "Expose the athlete to high-speed running progressively before return to competition — it cannot be skipped",
            "Strength symmetry (within ~10% of the other side) is a common return-to-play criterion",
          ],
        },
      ],
    },
    {
      slug: "reinjury-prevention",
      title: "Re-injury Prevention",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "The strongest predictor of a muscle strain is a previous strain of the same muscle. Re-injuries cluster in the first weeks after return to play and typically cause more time loss than the original injury — usually because rehabilitation stopped at \"pain-free\" rather than \"restored capacity\".",
        },
        {
          kind: "cards",
          items: [
            { title: "Eccentric strength", text: "Nordic curl programmes reduce hamstring injury rates substantially in team sports when performed consistently. Eccentric work also lengthens fascicles, improving strain tolerance.", icon: "shield" },
            { title: "Sprint exposure", text: "Regular, progressive exposure to high-speed running acts as a \"vaccine\" — sudden spikes in sprinting load after periods without it are a classic injury trigger.", icon: "zap" },
            { title: "Load management", text: "Monitor training load and avoid rapid week-to-week spikes, especially after breaks, illness or congested fixtures.", icon: "bar-chart-2" },
            { title: "Warm-up", text: "Structured warm-up programmes including progressive running and eccentric elements reduce muscle injury risk.", icon: "sun" },
            { title: "Address the deficits", text: "Persisting long-length strength deficits, fatigue-related technique breakdown, and unresolved lumbopelvic control issues all raise re-strain risk.", icon: "search" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Being pain-free is the midpoint of rehab, not the end — the final third of the programme (long-length eccentrics and sprinting) is what prevents the recurrence.",
            "Continue preventive eccentric work in-season; the protective effect fades when the exercise stops.",
          ],
        },
      ],
    },
    {
      slug: "red-flags",
      title: "Red Flags & Complications",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Most muscle injuries are managed conservatively, but three situations demand escalation: complete rupture, acute compartment syndrome, and myositis ossificans.",
        },
        {
          kind: "redflags",
          items: [
            "Suspected complete (grade III) rupture: palpable gap, bunched-up muscle mass, marked weakness with little pain, extensive bruising — refer for imaging and surgical opinion (proximal hamstring avulsions and complete quadriceps/Achilles-region ruptures do best with early decisions)",
            "Acute compartment syndrome after contusion or crush: pain out of proportion, tense swollen compartment, pain on passive stretch of the compartment's muscles, paraesthesia — a surgical emergency; do not elevate excessively or compress, send for urgent medical assessment",
            "Myositis ossificans: a contusion or severe strain that worsens after 2–3 weeks instead of improving, with increasing pain, warmth, firm mass and losing range — needs medical review and a step back from aggressive therapy",
            "Systemic features (fever, malaise) with muscle pain, or dark urine after crush/extreme exercise (possible rhabdomyolysis) — urgent medical referral",
          ],
        },
        {
          kind: "warning",
          title: "Myositis ossificans — avoidable by good early care",
          items: [
            "Risk factors: massage, forced stretching, heat or premature aggressive rehab of a significant contusion, and re-bleeding from early return to contact",
            "Classic picture: quadriceps contusion that stiffens and hardens over weeks with a palpable bony mass",
            "Management is patience: relative rest and gentle pain-free movement while the lesion matures; the calcification often resorbs over months",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Weakness without much pain is more sinister than pain without much weakness — think complete rupture.",
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
            "Strain = indirect overstretch (usually eccentric, at the MTJ); contusion = direct blow; DOMS = delayed, diffuse, self-limiting",
            "Grades: I minimal fibre damage, II partial tear with weakness, III complete rupture (gap, weakness > pain)",
            "High-risk muscles are biarticular, fast-twitch decelerators: hamstrings, gastrocnemius, rectus femoris",
            "Healing: bleeding (0–3 d) → proliferation (3 d–3 wk) → remodeling (weeks–months); load shapes the scar",
            "Acute care: PEACE & LOVE — protect briefly, avoid anti-inflammatories, educate, then load early",
            "Rehab ladder: isometric → concentric → eccentric/long-length → sport-specific speed",
            "Prevent re-injury with eccentric strength (Nordics), graded sprint exposure and full-length rehab",
            "Red flags: complete rupture, compartment syndrome, myositis ossificans, rhabdomyolysis",
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
      text: "Which site of the muscle–tendon unit is the most common location for a muscle strain?",
      options: [
        "The mid muscle belly",
        "The musculotendinous junction",
        "The tendon–bone insertion",
        "The epimysium",
      ],
      correctIndex: 1,
      explanation:
        "The musculotendinous junction — where contractile fibres blend into tendon — is the mechanical weak link of the muscle–tendon unit and the most common site of failure under tensile (especially eccentric) load.",
      difficulty: "Easy",
      tags: ["anatomy", "pathology"],
      sectionSlug: "muscle-structure",
    },
    {
      text: "A footballer feels sudden sharp posterior thigh pain while sprinting. Which injury mechanism does this history most strongly suggest?",
      options: [
        "A contusion from direct impact",
        "Delayed-onset muscle soreness",
        "An indirect strain during eccentric contraction",
        "A femoral stress fracture",
      ],
      correctIndex: 2,
      explanation:
        "Sudden pain during sprinting — with no contact — is the classic indirect strain mechanism: the hamstrings contract eccentrically at terminal swing to decelerate the extending knee and fail under that active lengthening load.",
      difficulty: "Easy",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "injury-mechanisms",
    },
    {
      text: "Which feature best distinguishes DOMS from a muscle strain?",
      options: [
        "DOMS causes a palpable defect in the muscle",
        "DOMS onset is delayed 24–72 hours and soreness is diffuse rather than focal",
        "DOMS only occurs after concentric exercise",
        "DOMS causes permanent strength loss",
      ],
      correctIndex: 1,
      explanation:
        "DOMS appears 24–72 hours after unaccustomed (particularly eccentric) exercise, is diffuse across the exercised muscle group and self-limits within about a week. A strain has a sudden onset during activity with focal tenderness, and may show bruising or a defect.",
      difficulty: "Easy",
      tags: ["assessment", "pathology"],
      sectionSlug: "injury-mechanisms",
    },
    {
      text: "Which combination of muscle characteristics creates the highest strain risk?",
      options: [
        "Monoarticular, slow-twitch, postural role",
        "Biarticular, fast-twitch, eccentric deceleration role",
        "Monoarticular, fast-twitch, concentric role",
        "Biarticular, slow-twitch, stabilising role",
      ],
      correctIndex: 1,
      explanation:
        "The classic strain candidates — hamstrings, gastrocnemius, rectus femoris — are biarticular, have a high proportion of fast-twitch fibres, and work eccentrically at high speed to decelerate a limb. Active lengthening across two joints generates the highest tissue tensions.",
      difficulty: "Medium",
      tags: ["anatomy", "pathology"],
      sectionSlug: "high-risk-muscles",
    },
    {
      text: "\"Tennis leg\" refers to a tear of which structure, and in which typical position?",
      options: [
        "Soleus, with the knee flexed and ankle plantarflexed",
        "Achilles tendon, during landing from a jump",
        "Medial head of gastrocnemius, with the knee extended and ankle dorsiflexed",
        "Tibialis posterior, during push-off",
      ],
      correctIndex: 2,
      explanation:
        "Tennis leg is a strain of the medial gastrocnemius head, typically in a middle-aged athlete lunging with the knee extended and ankle dorsiflexed — the position of maximal length for this biarticular muscle.",
      difficulty: "Medium",
      tags: ["anatomy", "clinical-reasoning"],
      sectionSlug: "high-risk-muscles",
    },
    {
      text: "During assessment of a suspected hamstring injury, you find marked weakness on resisted knee flexion but surprisingly little pain, plus a palpable gap in the posterior thigh. What is the most likely diagnosis?",
      options: [
        "Grade I strain",
        "Grade II strain",
        "Grade III (complete) rupture",
        "DOMS",
      ],
      correctIndex: 2,
      explanation:
        "In a complete rupture there are no intact fibres left to generate tension across the injury, so resisted testing produces marked weakness but often only modest pain. A palpable gap or bunched muscle confirms the suspicion — refer for imaging and surgical opinion.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning", "precautions"],
      sectionSlug: "strain-grading",
    },
    {
      text: "What is the typical recovery timeframe for a grade II muscle strain?",
      options: [
        "24–48 hours",
        "3–7 days",
        "Approximately 3–8 weeks",
        "12–18 months",
      ],
      correctIndex: 2,
      explanation:
        "Grade II (significant partial) tears generally need roughly 3–8 weeks depending on the site and the demands of the sport. Grade I injuries settle within days to ~3 weeks; grade III ruptures need months, often with surgery.",
      difficulty: "Easy",
      tags: ["pathology", "management"],
      sectionSlug: "strain-grading",
    },
    {
      text: "In the muscle-healing timeline, what characterises the repair (proliferation) phase?",
      options: [
        "Haematoma formation and fibre necrosis",
        "Satellite cell activation forming new myotubes, alongside fibroblasts laying down scar tissue",
        "Final reorientation of scar tissue along lines of stress",
        "Ossification within the muscle belly",
      ],
      correctIndex: 1,
      explanation:
        "From around day 3 to 3 weeks, satellite cells fuse into new myotubes that regenerate muscle while fibroblasts bridge the defect with connective tissue scar, and capillaries regrow. The destruction phase (day 0–3) involves bleeding and necrosis; remodeling comes later.",
      difficulty: "Medium",
      tags: ["pathology"],
      sectionSlug: "healing-phases",
    },
    {
      text: "Why does early mobilisation (after a few days of protection) produce a better outcome than prolonged rest after a muscle strain?",
      options: [
        "It prevents any scar tissue from forming",
        "It stimulates capillary ingrowth, fibre regeneration and a smaller, better-aligned scar",
        "It removes the need for strengthening later",
        "It reduces pain by numbing nerve endings",
      ],
      correctIndex: 1,
      explanation:
        "Progressive loading is the biological stimulus for muscle healing: it accelerates capillary regrowth, promotes regeneration of muscle fibres and orients the maturing scar along lines of stress. Prolonged immobilisation produces a weak, disorganised scar and a deconditioned muscle prone to re-tear.",
      difficulty: "Medium",
      tags: ["pathology", "exercise-therapy"],
      sectionSlug: "healing-phases",
    },
    {
      text: "In the PEACE & LOVE framework, what does the \"A\" stand for and why?",
      options: [
        "Analgesia — pain must be abolished before loading",
        "Avoid anti-inflammatories — they may impair the inflammation-dependent healing process",
        "Active stretching — to prevent scar shortening",
        "Aspiration — of the haematoma in all cases",
      ],
      correctIndex: 1,
      explanation:
        "The \"A\" is Avoid anti-inflammatories: routine NSAID use (and ice used aggressively beyond short-term analgesia) may blunt the inflammatory signalling that healing tissue depends on. Analgesia is used judiciously, not routinely.",
      difficulty: "Easy",
      tags: ["management"],
      sectionSlug: "acute-management",
    },
    {
      text: "Which intervention is contraindicated in the first 48–72 hours after a significant quadriceps contusion?",
      options: [
        "Elevation of the limb",
        "Compression bandaging",
        "Deep massage of the haematoma",
        "Gentle pain-free active knee movement",
      ],
      correctIndex: 2,
      explanation:
        "Massage, forced stretching and heat in the acute phase can provoke re-bleeding into the muscle, enlarging the haematoma and increasing the risk of myositis ossificans. Elevation, compression and gentle pain-free movement are appropriate.",
      difficulty: "Medium",
      tags: ["precautions", "management"],
      sectionSlug: "acute-management",
    },
    {
      text: "What is the correct order of a criteria-based muscle-strain rehabilitation progression?",
      options: [
        "Eccentric → isometric → sport-specific → concentric",
        "Isometric → concentric/isotonic → eccentric and long-length → sport-specific speed work",
        "Sport-specific → isometric → eccentric → concentric",
        "Concentric → isometric → stretching only → return to play",
      ],
      correctIndex: 1,
      explanation:
        "Rehab starts with pain-guided isometrics to restore activation, progresses to concentric/isotonic strengthening through range, then to eccentric and lengthened-state loading (the key protective stimulus), and finishes with progressive sport-specific speed work before return to play.",
      difficulty: "Easy",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "rehab-progression",
    },
    {
      text: "What is the primary rationale for including Nordic hamstring curls in late-stage rehab and prevention programmes?",
      options: [
        "They stretch the hamstrings passively",
        "High-load eccentric training reduces hamstring strain and re-strain risk and lengthens muscle fascicles",
        "They primarily train the quadriceps as an antagonist",
        "They replace the need for any running exposure",
      ],
      correctIndex: 1,
      explanation:
        "Nordic curl programmes substantially reduce hamstring injury rates in team sports. Eccentric loading builds strength in the exact contraction mode of injury and lengthens biceps femoris fascicles, improving tolerance of active lengthening — but sprint exposure is still required separately.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "rehab-progression",
    },
    {
      text: "To bias the soleus rather than gastrocnemius during eccentric calf raises, you should:",
      options: [
        "Keep the knee fully extended",
        "Bend the knee to around 30°",
        "Perform the exercise seated with no load",
        "Dorsiflex the wrist during the movement",
      ],
      correctIndex: 1,
      explanation:
        "Gastrocnemius crosses the knee, so flexing the knee (~30°) slackens it and shifts load to the monoarticular soleus. A straight knee keeps gastrocnemius on tension and biases it instead.",
      difficulty: "Hard",
      tags: ["anatomy", "exercise-therapy"],
      sectionSlug: "rehab-progression",
    },
    {
      text: "Which factor is the single strongest predictor of sustaining a hamstring strain?",
      options: [
        "Poor hamstring flexibility",
        "A previous hamstring strain",
        "Playing on artificial turf",
        "Tall stature",
      ],
      correctIndex: 1,
      explanation:
        "Previous strain of the same muscle is consistently the strongest risk factor for future strain, largely because of persisting deficits — long-length weakness, altered fascicle length and premature return — after incomplete rehabilitation. This is why the final stages of rehab matter most.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "management"],
      sectionSlug: "reinjury-prevention",
    },
    {
      text: "Why is progressive exposure to high-speed running considered essential before returning a hamstring-strain patient to competition?",
      options: [
        "It is only needed for psychological confidence",
        "Sprinting is the specific load that injured the tissue, and graded exposure builds tolerance while sudden spikes trigger re-injury",
        "It replaces the need for strength testing",
        "High-speed running reduces fascicle length",
      ],
      correctIndex: 1,
      explanation:
        "Terminal-swing eccentric loading during sprinting is the injuring stimulus, so tolerance must be rebuilt specifically and progressively. Athletes returned to competition without recent graded sprint exposure face a spike in eccentric demand — a classic re-injury scenario.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "reinjury-prevention",
    },
    {
      text: "Three weeks after a heavy quadriceps contusion, a patient reports increasing pain, warmth, a hardening mass in the thigh and progressively less knee flexion. What should you suspect?",
      options: [
        "Normal scar maturation",
        "DOMS from the rehab programme",
        "Myositis ossificans",
        "A new grade I strain",
      ],
      correctIndex: 2,
      explanation:
        "A contusion that worsens after 2–3 weeks — increasing pain, warmth, a firm/bony mass and losing range — is the classic picture of myositis ossificans (heterotopic bone forming in the haematoma). It requires medical review and a step back to gentle, pain-free management; aggressive stretching and massage make it worse.",
      difficulty: "Medium",
      tags: ["precautions", "pathology", "clinical-reasoning"],
      sectionSlug: "red-flags",
    },
    {
      text: "Which clinical picture after a calf crush injury requires emergency medical referral?",
      options: [
        "Aching that eases with gentle movement",
        "Bruising tracking down to the ankle",
        "Pain out of proportion, a tense swollen compartment, and severe pain on passive stretch of the compartment muscles",
        "Morning stiffness lasting 10 minutes",
      ],
      correctIndex: 2,
      explanation:
        "Disproportionate pain, a tense compartment, pain on passive stretch and paraesthesia suggest acute compartment syndrome — rising intracompartmental pressure that can cause irreversible muscle and nerve ischaemia within hours. It is a surgical emergency (fasciotomy); do not compress the limb.",
      difficulty: "Easy",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "red-flags",
    },
    {
      text: "A patient reports 2/10 local hamstring pain during isotonic curls that resolves fully by the next morning. According to pain-monitoring principles for muscle-strain rehab, what should you do?",
      options: [
        "Stop strengthening and return to isometrics for two weeks",
        "Continue and progress the programme — this is acceptable loading",
        "Refer for MRI to check for re-tear",
        "Switch to passive stretching only",
      ],
      correctIndex: 1,
      explanation:
        "Pain up to about 3/10 during rehab exercise that settles by the next day is generally accepted as safe, adaptive loading in muscle-strain rehabilitation. Escalating pain, next-day worsening or pain above the agreed threshold would prompt reducing the load — not abandoning it.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "rehab-progression",
    },
    {
      text: "Intramuscular haematomas generally recover more slowly than intermuscular ones because:",
      options: [
        "They always involve complete tendon rupture",
        "The bleeding remains contained within the muscle's fascial sheath, sustaining pressure and inflammation",
        "They only occur in the upper limb",
        "The blood drains too quickly to form a clot",
      ],
      correctIndex: 1,
      explanation:
        "In an intermuscular haematoma the blood escapes between muscles and disperses (visible as tracking bruising), so pressure settles quickly. An intramuscular haematoma stays confined within the intact fascia of the muscle, maintaining pressure, pain and swelling — slower recovery and higher myositis ossificans risk.",
      difficulty: "Hard",
      tags: ["pathology", "anatomy"],
      sectionSlug: "injury-mechanisms",
    },
  ],
  flashcards: [
    { front: "Define strain vs contusion vs DOMS.", back: "Strain: indirect overstretch injury of the muscle–tendon unit (usually eccentric). Contusion: direct blow compressing muscle against bone. DOMS: delayed, diffuse, self-limiting soreness 24–72 h after unaccustomed exercise." },
    { front: "Most common anatomical site of muscle strain?", back: "The musculotendinous junction — the mechanical weak link under tensile load." },
    { front: "Grade I vs II vs III strain in one line each.", back: "I: few fibres torn, minimal weakness. II: partial tear, clear pain and weakness, possible divot. III: complete rupture — gap, marked weakness, often less pain than expected." },
    { front: "Why are hamstrings, gastrocnemius and rectus femoris strain-prone?", back: "They are biarticular, fast-twitch-dominant muscles that contract eccentrically at high speed to decelerate a limb — maximal tension while lengthening." },
    { front: "Three phases of muscle healing and rough timings?", back: "Destruction/bleeding (day 0–3) → repair/proliferation with satellite cells and scar (day 3–3 weeks) → remodeling under load (weeks to months)." },
    { front: "What does PEACE & LOVE stand for?", back: "Protect, Elevate, Avoid anti-inflammatories, Compress, Educate & Load, Optimism, Vascularisation, Exercise." },
    { front: "Why avoid NSAIDs and aggressive icing after acute muscle injury?", back: "They may blunt the inflammatory response that drives muscle regeneration; use analgesia judiciously and ice only for short-term pain relief." },
    { front: "Standard rehab progression for a muscle strain?", back: "Isometric → concentric/isotonic → eccentric and long-length loading → sport-specific speed and return to play, progressed on criteria not calendar." },
    { front: "Best-evidenced exercise for preventing hamstring strains?", back: "The Nordic hamstring curl — high-load eccentric training that lengthens fascicles and reduces injury/re-injury rates when done consistently." },
    { front: "Strongest risk factor for a hamstring strain?", back: "A previous hamstring strain — usually reflecting incomplete rehabilitation (persisting long-length weakness and inadequate sprint exposure)." },
    { front: "Signs of acute compartment syndrome?", back: "Pain out of proportion, tense swollen compartment, severe pain on passive stretch, paraesthesia — surgical emergency, urgent referral." },
    { front: "Classic story of myositis ossificans?", back: "A quadriceps contusion that worsens after 2–3 weeks — increasing pain, warmth, firm mass, losing knee flexion — often provoked by early massage or forced stretching." },
  ],
};

export default topic;
