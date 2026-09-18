import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "peripheral-nerve-injuries",
  title: "Peripheral Nerve Disorders",
  category: "Neurological",
  description:
    "Nerve structure, injury classification, common entrapments and palsies, diabetic neuropathy, assessment and staged physiotherapy management of peripheral nerve disorders.",
  difficulty: "Intermediate",
  estMinutes: 31,
  icon: "zap",
  keyTakeaways: [
    "Seddon's classification — neurapraxia, axonotmesis, neurotmesis — predicts recovery: intact connective tissue scaffolding means regeneration is possible; complete transection needs surgery.",
    "Axons regenerate at roughly 1 mm per day (about 2.5 cm per month), so recovery timelines can be estimated from the distance between injury site and target muscle.",
    "An advancing Tinel's sign is a simple clinical marker that regenerating axons are progressing along the nerve.",
    "Each major entrapment has a signature pattern: carpal tunnel (median), cubital tunnel (ulnar), radial nerve at the spiral groove (wrist drop), common fibular nerve at the fibular head (foot drop), facial nerve (Bell's palsy).",
    "Diabetic peripheral neuropathy causes symmetrical stocking-glove sensory loss — the priority is protecting insensate feet and reducing falls risk.",
    "Management is staged: protect denervated and insensate structures first, then retrain sensation and strength as reinnervation returns.",
    "Denervated muscle and insensate skin cannot protect themselves — splinting, positioning and skin-care education prevent the complications that ruin outcomes.",
    "Rapidly progressive, ascending or bilateral weakness suggests Guillain-Barré syndrome — an emergency, not an outpatient problem.",
  ],
  sections: [
    {
      slug: "nerve-structure",
      title: "Peripheral Nerve Structure & Function",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "A peripheral nerve is a cable of thousands of axons — motor, sensory and autonomic — organised by connective tissue layers. Each axon is wrapped in endoneurium; axons are bundled into fascicles by perineurium; and the whole nerve is enclosed in epineurium. These layers matter clinically because they are the scaffolding along which injured axons regrow.",
        },
        {
          kind: "image",
          illustration: "nervous-system",
          caption: "The peripheral nervous system: spinal nerves branching into plexuses and named peripheral nerves, each carrying motor, sensory and autonomic fibres to a defined territory.",
        },
        {
          kind: "cards",
          items: [
            { title: "Endoneurium", text: "Delicate connective tissue around each individual axon and its Schwann cell sheath. Intact endoneurial tubes guide regenerating axons back to their original targets.", icon: "circle" },
            { title: "Perineurium", text: "Strong sheath around each fascicle; the main barrier protecting axons and maintaining the internal nerve environment.", icon: "shield" },
            { title: "Epineurium", text: "Outer loose connective tissue binding fascicles together and carrying the nerve's blood supply (vasa nervorum).", icon: "layers" },
            { title: "Myelin & Schwann cells", text: "Schwann cells myelinate peripheral axons, enabling fast saltatory conduction — and, crucially, they support regeneration after injury (unlike CNS oligodendrocytes).", icon: "zap" },
          ],
        },
        {
          kind: "keypoints",
          title: "Why this matters clinically",
          items: [
            "Large myelinated fibres (motor, touch, proprioception) are most vulnerable to compression — so weakness and numbness appear before loss of pain sensation",
            "The Schwann cell environment is why peripheral nerves can regenerate while central axons largely cannot",
            "The connective tissue layers determine injury severity: the more layers disrupted, the worse the prognosis",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Nerves are mobile structures — they glide several millimetres relative to surrounding tissue during limb movement, which is the basis of neural mobility techniques.",
            "A nerve's blood supply is easily compromised by sustained stretch or compression; ischaemia, not mechanical damage, causes many early symptoms.",
          ],
        },
      ],
    },
    {
      slug: "injury-classification",
      title: "Classification of Nerve Injury",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Seddon's three-grade classification (expanded by Sunderland into five degrees) links the anatomy of the injury to its prognosis. The key question is always: is the connective tissue scaffolding intact? If it is, regenerating axons have a path back to their targets.",
        },
        {
          kind: "table",
          headers: ["Grade (Seddon)", "What is damaged", "Typical cause", "Recovery"],
          rows: [
            ["Neurapraxia", "Local myelin only — axon intact, no Wallerian degeneration", "Brief compression, stretch (e.g. \"Saturday night palsy\")", "Full, usually within days to ~12 weeks; conduction block resolves"],
            ["Axonotmesis", "Axon disrupted; endoneurium/perineurium intact. Wallerian degeneration distal to injury", "Crush, traction, prolonged compression", "Good potential — axons regrow ~1 mm/day along intact tubes; recovery takes months and follows a proximal-to-distal order"],
            ["Neurotmesis", "Complete disruption of axon and connective tissue (nerve divided)", "Laceration, severe traction, some injection injuries", "No useful spontaneous recovery — surgical repair or graft required; outcome often incomplete"],
          ],
        },
        {
          kind: "paragraph",
          text: "In axonotmesis and neurotmesis, the axon distal to the injury dies and is cleared — Wallerian degeneration — over the first 1–2 weeks. The muscle it supplied becomes denervated: flaccid, areflexic and, over months, progressively atrophic and fibrotic. This is why time matters: a muscle denervated much beyond 12–18 months reinnervates poorly even if axons eventually arrive.",
        },
        {
          kind: "keypoints",
          title: "Prognostic logic",
          items: [
            "Neurapraxia: conduction block, no degeneration → fast, complete recovery",
            "Axonotmesis: degeneration but intact tubes → slow, ordered, usually good recovery",
            "Neurotmesis: no scaffolding → surgery needed; the longer and more proximal the injury, the worse the outlook",
            "Most clinical injuries are mixed — serial examination reveals which pattern dominates",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Preserved sensation or a flicker of voluntary activity below the lesion is good news — it means the nerve is at least partly in continuity.",
            "Because Wallerian degeneration takes days, nerve conduction studies done in the first week can look deceptively normal — electrodiagnosis is usually most informative from about 3 weeks.",
          ],
        },
      ],
    },
    {
      slug: "nerve-regeneration",
      title: "Nerve Regeneration & Recovery Timelines",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "After axonotmesis, the proximal axon stump sprouts and regenerates along the surviving endoneurial tubes at approximately 1 mm per day — about 2.5–3 cm per month. This single number lets you estimate recovery: measure the distance from injury site to the first muscle the nerve supplies, and convert to months.",
        },
        {
          kind: "steps",
          items: [
            { title: "Wallerian degeneration (days 3–14)", text: "The distal axon fragments and is cleared by Schwann cells and macrophages. The endoneurial tubes remain as empty guides." },
            { title: "Sprouting (from ~1–4 weeks)", text: "The proximal stump sends multiple sprouts into the distal tubes; Schwann cells line up (bands of Büngner) and release growth factors that attract them." },
            { title: "Elongation (~1 mm/day)", text: "Axons advance steadily down the limb. An advancing Tinel's sign — tingling on percussion migrating distally over weeks — tracks the regenerating front." },
            { title: "Reinnervation & maturation (months)", text: "Axons reconnect with muscle fibres and sensory receptors in proximal-to-distal order. Remyelination and functional refinement continue for many further months." },
          ],
        },
        {
          kind: "keypoints",
          title: "Worked example",
          items: [
            "Radial nerve injury at the mid-humerus, ~20 cm from the wrist extensor muscle bellies",
            "20 cm = 200 mm → roughly 200 days (6–7 months) before wrist extension begins to return",
            "Proximal muscles (brachioradialis) recover before distal ones (finger extensors) — recovery is always proximal to distal",
          ],
        },
        {
          kind: "warning",
          title: "Limits of regeneration",
          items: [
            "Muscle denervated for much more than 12–18 months fibroses and reinnervates poorly — very proximal injuries may never reach distal hand muscles in time",
            "Misdirected sprouting can send axons down the wrong tubes — one reason recovery after severe injury is rarely perfect (e.g. synkinesis after Bell's palsy)",
          ],
        },
      ],
    },
    {
      slug: "common-entrapments",
      title: "Common Entrapments & Palsies",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Entrapment neuropathies occur where nerves pass through narrow anatomical tunnels or lie exposed against bone. Each has a signature motor and sensory pattern — learn the pattern and the site tells itself.",
        },
        {
          kind: "table",
          headers: ["Condition (nerve)", "Site", "Typical presentation"],
          rows: [
            ["Carpal tunnel syndrome (median)", "Carpal tunnel at the wrist", "Nocturnal tingling/numbness of thumb, index, middle and radial half of ring finger; shaking the hand relieves it; late thenar wasting and weak thumb abduction"],
            ["Cubital tunnel syndrome (ulnar)", "Behind the medial epicondyle at the elbow", "Numbness of little finger and ulnar half of ring finger; weak grip and interossei; late clawing of ring/little fingers and first web-space wasting"],
            ["Radial nerve palsy", "Spiral groove of the humerus (fracture, \"Saturday night palsy\")", "Wrist drop and finger-drop with weak grip (lost wrist stabilisation); sensory loss over the dorsal first web space; triceps usually spared"],
            ["Common fibular (peroneal) nerve palsy", "Around the fibular head (crossed legs, casts, weight loss, squatting)", "Foot drop — weak dorsiflexion and eversion; sensory loss over the dorsum of the foot and lateral shin; high-steppage gait"],
            ["Bell's palsy (facial nerve, CN VII)", "Within the facial canal (idiopathic, presumed viral inflammation)", "Rapid-onset unilateral weakness of the WHOLE face including the forehead; incomplete eye closure; most recover substantially within weeks to months"],
          ],
        },
        {
          kind: "cards",
          items: [
            { title: "Why night symptoms in CTS?", text: "Wrist flexion during sleep raises carpal tunnel pressure; fluid redistribution when lying down adds to it. Night splints in neutral work by removing exactly this.", icon: "moon" },
            { title: "Why grip fails in wrist drop", text: "Finger flexors are intact, but grip needs a stable, slightly extended wrist. Splinting the wrist in extension restores surprisingly useful hand function immediately.", icon: "hand" },
            { title: "Forehead sparing rule", text: "The forehead has bilateral cortical innervation. Bell's palsy (lower motor neuron) weakens the whole half of the face; a stroke (upper motor neuron) spares the forehead. This distinction is urgent.", icon: "alert-triangle" },
            { title: "Fibular nerve vulnerability", text: "The nerve winds superficially around the fibular neck with almost no soft tissue cover — habitual leg crossing, tight casts and rapid weight loss are classic culprits.", icon: "activity" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "In suspected foot drop, test ankle inversion: it is spared in a common fibular nerve lesion (tibialis posterior, tibial nerve) but weak in an L5 radiculopathy — a quick bedside differentiator.",
            "Incomplete eye closure in Bell's palsy risks corneal damage — lubricating drops and taping the eye at night are part of first-line care, not an afterthought.",
          ],
        },
      ],
    },
    {
      slug: "diabetic-neuropathy",
      title: "Diabetic Peripheral Neuropathy",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Diabetic peripheral neuropathy is the most common polyneuropathy. Chronic hyperglycaemia damages the longest axons first, producing a symmetrical, length-dependent \"stocking-glove\" pattern: sensation fades from the toes upward, with the hands involved much later.",
        },
        {
          kind: "cards",
          items: [
            { title: "Sensory loss", text: "Reduced light touch, vibration and proprioception in the feet — often unnoticed by the patient until a wound or fall reveals it.", icon: "footprints" },
            { title: "Neuropathic pain", text: "Burning, tingling or electric pain, typically worse at night — sensory loss and pain commonly coexist.", icon: "flame" },
            { title: "Balance & falls", text: "Loss of foot proprioception degrades the ankle strategy and reactive balance; falls risk rises sharply, especially in the dark and on uneven ground.", icon: "alert-octagon" },
            { title: "Foot ulceration", text: "Insensate skin plus deformity, dryness (autonomic involvement) and unnoticed trauma leads to ulcers — the pathway to amputation if missed.", icon: "bandage" },
          ],
        },
        {
          kind: "keypoints",
          title: "Physiotherapy priorities",
          items: [
            "Screen sensation: 10 g monofilament at standard plantar sites and 128 Hz tuning-fork vibration at the great toe",
            "Daily foot-care education: visual self-inspection (mirror for the sole), well-fitting footwear, never walking barefoot, prompt review of any wound",
            "Balance and strength training reduces falls risk and is safe and beneficial in neuropathy",
            "Exercise (aerobic + resistance) improves glycaemic control — physiotherapy is part of disease management, not just symptom management",
          ],
        },
        {
          kind: "warning",
          title: "Common mistakes",
          items: [
            "Relying on the patient to report foot problems — insensate feet do not hurt; inspect and teach inspection",
            "Prescribing barefoot balance work on hard surfaces for insensate feet",
            "Missing the falls conversation — sensory ataxia is a bigger daily threat than the pain",
          ],
        },
      ],
    },
    {
      slug: "assessment",
      title: "Assessment of Peripheral Nerve Function",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Assessment aims to answer three questions: which nerve, how severe, and is it recovering? Serial, well-documented examination is the physiotherapist's main tool for tracking regeneration over months.",
        },
        {
          kind: "steps",
          items: [
            { title: "History", text: "Mechanism (compression, traction, laceration), onset and time course, sensory symptoms and their exact territory, functional loss, and relevant conditions (diabetes, alcohol, chemotherapy)." },
            { title: "Sensory mapping", text: "Map light touch and pin-prick against known cutaneous territories; compare dermatomal (root) versus peripheral nerve patterns. Record the border — an shrinking area of loss is objective evidence of recovery." },
            { title: "Motor examination", text: "Grade each key muscle on the MRC 0–5 scale (0 nothing, 1 flicker, 2 movement gravity-eliminated, 3 against gravity, 4 against resistance, 5 normal). Serial grades chart reinnervation muscle by muscle." },
            { title: "Tinel's sign", text: "Percuss along the nerve from distal to proximal; tingling in the nerve's territory marks the level of the lesion or, over serial visits, the advancing front of regenerating axons." },
            { title: "Special tests", text: "Phalen's test (sustained wrist flexion ~60 s) for carpal tunnel; elbow flexion test for cubital tunnel; always screen the neck and proximal limb to exclude radiculopathy mimics." },
            { title: "Reflexes & trophic signs", text: "Reduced or absent reflexes in the nerve's pathway; look for skin dryness, colour change and muscle wasting — signs of established denervation." },
          ],
        },
        {
          kind: "paragraph",
          text: "Nerve conduction studies and electromyography complement the clinical exam: conduction studies measure how fast and how completely impulses travel across the injured segment (slowing suggests demyelination or entrapment; reduced amplitude suggests axon loss), while EMG detects denervation in muscle and, later, the earliest electrical signs of reinnervation — often before any visible contraction.",
        },
        {
          kind: "pearls",
          items: [
            "An advancing Tinel's sign moving ~2–3 cm/month is the cheapest nerve regeneration monitor in existence — mark and measure it each visit.",
            "MRC grade 3 is the pivotal clinical milestone: once a muscle works against gravity, functional retraining accelerates rapidly.",
          ],
        },
      ],
    },
    {
      slug: "management-principles",
      title: "Physiotherapy Management Principles",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Management follows the biology. While the limb is denervated, the job is protection — of joints, muscle length, skin and the vulnerable nerve itself. As reinnervation returns, the job shifts to retraining sensation and strength. Getting the phase right matters more than any single technique.",
        },
        {
          kind: "steps",
          items: [
            { title: "1. Protect denervated structures", text: "Maintain passive range and muscle length with daily positioning and gentle passive movement; prevent overstretch of flaccid muscles (e.g. don't let a dropped wrist hang flexed). Teach care of insensate skin — burns and pressure injuries occur painlessly." },
            { title: "2. Splint for function and position", text: "Splints substitute for lost muscle action and hold joints in safe positions: a wrist cock-up splint restores grip in radial palsy; a night splint in neutral relieves carpal tunnel; an AFO manages foot drop. Splinting is positive treatment, not passive waiting." },
            { title: "3. Sensory re-education", text: "Once protective sensation begins returning, retrain the brain to reinterpret the altered input: graded texture discrimination, object identification without vision (stereognosis), localisation of touch. Early phase focuses on detecting moving vs constant touch; later phase on fine discrimination." },
            { title: "4. Motor retraining with reinnervation", text: "Begin the moment a flicker appears: facilitation, gravity-eliminated active work (MRC 2), then against-gravity movement (MRC 3), then graded resistance (MRC 4+). Avoid fatiguing newly reinnervated muscle — little and often beats exhaustive sets." },
            { title: "5. Neural mobility — gently", text: "Gentle nerve gliding techniques maintain the nerve's normal excursion and may reduce adhesion after injury or surgery. Movements are smooth, short of symptom provocation, and low-dose — an irritated nerve is easily flared by aggressive \"stretching\"." },
            { title: "6. Function and participation", text: "Train real tasks with whatever capacity exists — adapted grips, task modification, work and driving advice. Function should never wait for full recovery." },
          ],
        },
        {
          kind: "warning",
          title: "Precautions",
          items: [
            "Never apply heat, ice or electrical modalities over insensate skin without extreme caution — the patient cannot feel a burn developing",
            "Do not aggressively stretch a nerve — sustained tension compromises its blood supply; glide, don't strain",
            "Overworking MRC 2–3 muscle causes fatigue and can temporarily worsen performance — dose reinnervating muscle conservatively",
            "Protect anaesthetic joints from end-range trauma; without pain feedback, capsules and ligaments are easily injured",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Explain the timeline honestly and early — at 1 mm/day, patients who expect months of gradual recovery stay engaged; those expecting weeks give up.",
            "Electrical stimulation of denervated muscle remains debated; it never replaces the fundamentals of positioning, splinting and retraining.",
          ],
        },
      ],
    },
    {
      slug: "foot-drop-gait",
      title: "Foot Drop & Gait Management",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Foot drop — loss of ankle dorsiflexion from common fibular nerve palsy (or L5 radiculopathy, or central causes) — disrupts two moments of the gait cycle: the foot slaps down after heel strike (no eccentric dorsiflexor control), and the toes catch during swing (no clearance).",
        },
        {
          kind: "image",
          illustration: "gait-cycle",
          caption: "The gait cycle: dorsiflexors control foot lowering after initial contact and lift the foot for clearance during swing — the two phases visibly disrupted in foot drop.",
        },
        {
          kind: "cards",
          items: [
            { title: "Compensations you will see", text: "High-steppage gait (excess hip and knee flexion to clear the toes), hip hiking, or leg circumduction — all energy-costly and all raising trip risk on the unaffected patterns.", icon: "activity" },
            { title: "Ankle-foot orthosis (AFO)", text: "A posterior-leaf or hinged AFO holds the ankle near plantargrade, restoring clearance and a heel-first contact. It is first-line management while awaiting recovery — and long-term if recovery is incomplete.", icon: "wrench" },
            { title: "Falls risk", text: "Tripping over the dropped foot is the dominant hazard — footwear advice, environmental review and the AFO itself are falls interventions.", icon: "alert-triangle" },
            { title: "Maintain the ankle", text: "Daily passive dorsiflexion range and calf stretches prevent the plantarflexion contracture that would undermine recovery — a contracted ankle cannot use returning dorsiflexors.", icon: "move" },
          ],
        },
        {
          kind: "keypoints",
          title: "Rehabilitation sequence",
          items: [
            "Immediately: AFO fitting, contracture prevention, falls advice, evertor/dorsiflexor passive care",
            "During reinnervation: gravity-eliminated dorsiflexion (side lying), progressing to against-gravity work and resisted eversion",
            "Later: gait retraining out of the AFO in safe conditions — heel strike, controlled lowering, balance and stairs",
            "If no recovery: long-term AFO provision, or referral for surgical options (tendon transfer) in selected cases",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Check the skin under any new AFO within the first weeks — many foot-drop patients also have sensory loss over the dorsum of the foot.",
            "Ask about sleeping and sitting habits: continued leg-crossing or side-lying pressure over the fibular head can perpetuate the very lesion you are treating.",
          ],
        },
      ],
    },
    {
      slug: "exercise-programme",
      title: "Exercise & Retraining Programme",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "The exercises below illustrate staged retraining across common presentations. The governing rule: match the demand to the current MRC grade, and stop before fatigue in newly reinnervated muscle.",
        },
        {
          kind: "exercise",
          name: "Gravity-eliminated dorsiflexion (early foot drop)",
          purpose: "Re-establish voluntary activation of reinnervating dorsiflexors when strength is MRC 2.",
          position: "Side lying on the unaffected side, affected leg supported on a smooth board or towel so the foot moves parallel to the floor.",
          execution: "Pull the foot up towards the shin through available range, slowly, concentrating on the movement. Assist with the hand or a strap only as needed.",
          dosage: "5–10 reps, several short sessions daily; stop when quality deteriorates.",
          progression: "Move to sitting with the foot on the floor (against gravity), then add elastic-band resistance to dorsiflexion and eversion.",
          precautions: "Avoid fatiguing sets — quality of activation matters more than repetitions at this stage.",
        },
        {
          kind: "exercise",
          name: "Median nerve glide (post carpal tunnel irritation/surgery)",
          purpose: "Maintain normal nerve excursion through the carpal tunnel and reduce adhesion without provoking symptoms.",
          position: "Sitting tall, affected arm out to the side at about shoulder height, elbow bent, palm facing up.",
          execution: "Gently straighten the elbow while extending the wrist and fingers until a mild stretch or the first hint of tingling, then release. Smooth, rhythmic, pain-free movement.",
          dosage: "5–10 slow repetitions, 2–3 times daily.",
          progression: "Increase range gradually as tolerance improves; add gentle neck side-bend away for a stronger glide only if fully symptom-free.",
          precautions: "Tingling that lingers after the exercise means the dose was too high — reduce range and repetitions.",
        },
        {
          kind: "exercise",
          name: "Sensory re-education — texture discrimination",
          purpose: "Retrain cortical interpretation of returning sensation in the hand after median or ulnar nerve injury.",
          position: "Sitting at a table with a tray of graded textures (velvet, denim, sandpaper, cotton) — vision available initially.",
          execution: "Stroke each texture with the affected fingertips while watching, naming the sensation; then repeat with eyes closed, comparing to the unaffected hand and checking visually after each attempt.",
          dosage: "5–10 minutes, 2–3 times daily — short and frequent beats long and rare.",
          progression: "Progress from gross texture differences to fine ones, then to identifying small objects in the hand without vision (stereognosis training).",
          precautions: "Begin only once protective sensation (sharp/blunt, hot/cold detection) has returned in the trained area.",
        },
        {
          kind: "exercise",
          name: "Wrist extension strengthening (recovering radial palsy)",
          purpose: "Rebuild wrist extensor strength and grip stability once reinnervation reaches MRC 3.",
          position: "Forearm supported on a table in pronation, hand over the edge, light weight or band in hand.",
          execution: "Lift the back of the hand towards the ceiling through full available range, lower slowly over 3 seconds.",
          dosage: "8–12 reps × 2–3 sets, alternating days.",
          progression: "Increase load gradually; integrate into gripping tasks — carrying, jar opening, tool use — as strength allows.",
          precautions: "Continue daytime splint use for function until wrist extension reliably holds against the load of gripping.",
        },
        {
          kind: "exercise",
          name: "Tandem and single-leg balance (diabetic neuropathy)",
          purpose: "Reduce falls risk by training balance strategies despite reduced plantar sensation.",
          position: "Standing in a corner or beside a stable counter, shoes on.",
          execution: "Hold tandem stance (heel to toe) then single-leg stance up to 30 seconds each, tall posture, eyes forward.",
          dosage: "3–5 holds per position, daily.",
          progression: "Soft surface (with supervision), head turns, or stepping tasks; keep support within reach throughout.",
          precautions: "Insensate feet: footwear on, no hard-edged obstacles, and never progress to eyes-closed unsupported standing.",
        },
        {
          kind: "keypoints",
          title: "Dosing reinnervated muscle",
          items: [
            "MRC 1–2: facilitation and gravity-eliminated work, very low repetitions, frequent sessions",
            "MRC 3: against-gravity range work; add holds before adding load",
            "MRC 4+: progressive resistance and task-specific training",
            "Fatigue that worsens performance for hours afterwards means the dose was too high",
          ],
        },
      ],
    },
    {
      slug: "red-flags",
      title: "Red Flags & Urgent Presentations",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Most peripheral nerve problems evolve slowly. A rapidly progressive picture is a different disease until proven otherwise — and some of the differentials are emergencies.",
        },
        {
          kind: "redflags",
          items: [
            "Rapidly progressive, ascending, symmetrical weakness over hours to days ± numbness — Guillain-Barré syndrome: urgent hospital referral (respiratory failure can develop quickly)",
            "New facial weakness that spares the forehead, or with limb weakness, speech or visual disturbance — stroke pathway, not Bell's palsy",
            "Saddle anaesthesia, bladder or bowel disturbance with limb symptoms — cauda equina syndrome: emergency",
            "Severe pain, pallor, and tense swelling in a limb after trauma or a cast — compartment syndrome threatening the nerve and muscle: emergency",
            "Progressive weakness with weight loss, night pain or known malignancy — infiltrative or compressive lesion needs urgent investigation",
            "Fever with spinal pain and evolving neurology — consider spinal infection",
          ],
        },
        {
          kind: "warning",
          title: "Guillain-Barré: why it cannot wait",
          items: [
            "GBS is an acute inflammatory demyelinating polyneuropathy, often 1–3 weeks after a respiratory or gastrointestinal infection",
            "Weakness typically ascends from the legs, reflexes disappear, and autonomic instability and respiratory muscle failure may follow",
            "Any suspicion — worsening bilateral weakness plus lost reflexes — warrants same-day medical assessment, not a review appointment",
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
            "Seddon: neurapraxia (block, full fast recovery) → axonotmesis (axon lost, tubes intact, ~1 mm/day recovery) → neurotmesis (all lost, surgery)",
            "Regeneration ≈ 1 mm/day; advancing Tinel's tracks it; recovery runs proximal to distal",
            "Signatures: median = night tingling thumb-to-ring; ulnar = little finger + clawing; radial = wrist drop; common fibular = foot drop; facial = whole-face weakness",
            "Diabetic neuropathy: stocking-glove loss → monofilament screening, foot care, balance training",
            "Assess: sensory mapping, MRC grading, Tinel's, special tests; NCS/EMG confirm and localise",
            "Manage by phase: protect (position, splint, skin care) → retrain (sensory re-education, graded strengthening) → function",
            "Foot drop: AFO first-line, prevent plantarflexion contracture, treat as a falls problem",
            "Rapidly progressive or ascending weakness = GBS until proven otherwise — urgent referral",
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
      text: "In Seddon's classification, which injury involves loss of axonal continuity while the endoneurial tubes remain intact?",
      options: ["Neurapraxia", "Axonotmesis", "Neurotmesis", "Myelinopathy"],
      correctIndex: 1,
      explanation:
        "Axonotmesis is disruption of the axon with preservation of the connective tissue framework (endoneurium and perineurium). Wallerian degeneration occurs distally, but the intact tubes guide regenerating axons back to their targets — hence the generally good, though slow, prognosis. Neurapraxia spares the axon; neurotmesis destroys axon and connective tissue together.",
      difficulty: "Easy",
      tags: ["pathology", "anatomy"],
      sectionSlug: "injury-classification",
    },
    {
      text: "What is the approximate rate of peripheral axon regeneration after axonotmesis?",
      options: ["1 mm per week", "1 mm per day", "1 cm per day", "1 cm per year"],
      correctIndex: 1,
      explanation:
        "Regenerating axons advance at roughly 1 mm per day (about 2.5–3 cm per month). This figure lets clinicians estimate recovery time from the distance between the injury and the target muscle, and set realistic expectations with the patient.",
      difficulty: "Easy",
      tags: ["pathology"],
      sectionSlug: "nerve-regeneration",
    },
    {
      text: "Why is full spontaneous recovery expected in neurapraxia but impossible in neurotmesis?",
      options: [
        "Neurapraxia affects only sensory fibres",
        "In neurapraxia the axon is intact so no regeneration is needed; in neurotmesis the guiding connective tissue is destroyed",
        "Neurotmesis only occurs in the central nervous system",
        "Neurapraxia heals because Schwann cells replace the axon directly",
      ],
      correctIndex: 1,
      explanation:
        "Neurapraxia is a focal conduction block from local myelin damage — the axon never degenerates, so function returns fully once the myelin recovers (days to ~12 weeks). In neurotmesis the axon and all connective tissue layers are divided: regenerating sprouts have no tubes to follow, so useful recovery requires surgical repair or grafting.",
      difficulty: "Medium",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "injury-classification",
    },
    {
      text: "A radial nerve injury occurs at the spiral groove, 18 cm proximal to the wrist extensor muscle bellies. Roughly when should the first signs of wrist extensor reinnervation be expected?",
      options: ["Within 2 weeks", "Around 6 months", "Around 2 years", "Within 48 hours"],
      correctIndex: 1,
      explanation:
        "At approximately 1 mm/day, axons need about 180 days to cover 180 mm — roughly six months. Recovery then appears proximal-to-distal, with brachioradialis and wrist extensors recovering before finger extensors. This calculation is central to prognosis and to planning when active retraining will become possible.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "pathology"],
      sectionSlug: "nerve-regeneration",
    },
    {
      text: "Which sensory territory is classically affected in carpal tunnel syndrome?",
      options: [
        "Little finger and ulnar half of the ring finger",
        "Thumb, index, middle and radial half of the ring finger",
        "Dorsum of the hand only",
        "Entire palm including the thenar eminence skin",
      ],
      correctIndex: 1,
      explanation:
        "The median nerve supplies the palmar thumb, index, middle and radial half of the ring finger. Note that the skin over the thenar eminence is often spared because the palmar cutaneous branch leaves the median nerve proximal to the carpal tunnel — a useful examination detail. The little finger pattern belongs to the ulnar nerve.",
      difficulty: "Easy",
      tags: ["anatomy", "assessment"],
      sectionSlug: "common-entrapments",
    },
    {
      text: "A patient wakes after a night of deep sleep with a wrist drop and numbness over the dorsal first web space, but intact elbow extension. Which lesion is most likely?",
      options: [
        "Ulnar nerve at the cubital tunnel",
        "Radial nerve at the spiral groove",
        "Median nerve at the carpal tunnel",
        "C8 nerve root compression",
      ],
      correctIndex: 1,
      explanation:
        "This is the classic \"Saturday night palsy\": prolonged compression of the radial nerve against the spiral groove of the humerus. Wrist and finger extensors are weak, sensory loss maps to the dorsal first web space, and triceps is spared because its branches arise proximal to the groove. Most such compressive lesions are neurapraxic and recover well.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "anatomy"],
      sectionSlug: "common-entrapments",
    },
    {
      text: "Which clinical finding best distinguishes Bell's palsy from a stroke affecting the face?",
      options: [
        "Bell's palsy weakens the whole half of the face including the forehead; stroke typically spares the forehead",
        "Bell's palsy always affects both sides of the face",
        "Stroke never affects the face",
        "Bell's palsy causes weakness only around the eye",
      ],
      correctIndex: 0,
      explanation:
        "The forehead receives cortical input from both hemispheres. A lower motor neuron lesion of the facial nerve (Bell's palsy) paralyses all ipsilateral facial muscles including frontalis, so the patient cannot raise the eyebrow. An upper motor neuron lesion (stroke) spares forehead movement. Forehead sparing plus any limb, speech or visual signs mandates the stroke pathway urgently.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "common-entrapments",
    },
    {
      text: "A patient presents with foot drop. Which finding suggests a common fibular nerve lesion rather than an L5 radiculopathy?",
      options: [
        "Weak ankle inversion",
        "Preserved ankle inversion with weak dorsiflexion and eversion",
        "Low back pain radiating below the knee",
        "Weak hip abduction",
      ],
      correctIndex: 1,
      explanation:
        "Tibialis posterior (inversion) is supplied by the tibial nerve but by the L5 root. In a common fibular nerve palsy, dorsiflexion and eversion are weak while inversion is spared; in an L5 radiculopathy, inversion (and often hip abduction, gluteus medius) is also weak. Testing inversion is therefore a quick and powerful bedside differentiator.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "anatomy", "assessment"],
      sectionSlug: "common-entrapments",
    },
    {
      text: "What does an \"advancing\" Tinel's sign over serial visits indicate?",
      options: [
        "Worsening nerve compression",
        "Regenerating axons progressing distally along the nerve",
        "Development of complex regional pain syndrome",
        "Complete nerve transection",
      ],
      correctIndex: 1,
      explanation:
        "Percussing over regenerating axon sprouts produces tingling in the nerve's territory. When the most distal point that produces this response migrates distally over weeks (~2–3 cm/month), it shows the regenerating front is advancing — a simple, cost-free way to monitor recovery after axonotmesis. A static Tinel's over months raises concern that regeneration has stalled.",
      difficulty: "Medium",
      tags: ["assessment", "special-tests"],
      sectionSlug: "assessment",
    },
    {
      text: "On the MRC scale, a muscle that produces full-range movement with gravity eliminated but cannot move against gravity is graded:",
      options: ["Grade 1", "Grade 2", "Grade 3", "Grade 4"],
      correctIndex: 1,
      explanation:
        "MRC grade 2 = active movement through range with gravity eliminated. Grade 1 is a visible or palpable flicker without movement; grade 3 is full range against gravity; grade 4 adds resistance. The grade directly determines exercise prescription — grade 2 muscles are trained in gravity-eliminated positions.",
      difficulty: "Easy",
      tags: ["assessment"],
      sectionSlug: "assessment",
    },
    {
      text: "Why can nerve conduction studies appear normal in the first days after a significant axonal injury?",
      options: [
        "The machine cannot detect motor fibres early on",
        "Wallerian degeneration takes days, so the distal segment still conducts until it degenerates",
        "Swelling blocks the electrical signal from reaching the skin",
        "Nerve conduction studies only detect demyelination",
      ],
      correctIndex: 1,
      explanation:
        "The axon distal to a transection or severe crush remains structurally intact and electrically excitable until Wallerian degeneration dismantles it over roughly the first 1–2 weeks. Stimulating below the lesion in the first days can therefore produce a normal response despite a severe injury. Electrodiagnostic studies are usually most informative from about three weeks post-injury.",
      difficulty: "Hard",
      tags: ["assessment", "pathology"],
      sectionSlug: "assessment",
    },
    {
      text: "Which sensory screening tool is standard for detecting loss of protective sensation in diabetic feet?",
      options: [
        "Two-point discriminator",
        "10 g monofilament",
        "Cotton wool wisp only",
        "Neurodynamic straight leg raise",
      ],
      correctIndex: 1,
      explanation:
        "The 10 g (5.07 Semmes-Weinstein) monofilament applied to standard plantar sites is the accepted screen for loss of protective sensation, identifying feet at risk of unnoticed injury and ulceration. Vibration testing with a 128 Hz tuning fork at the great toe complements it. Patients who cannot feel the monofilament need structured foot-care education and regular podiatry review.",
      difficulty: "Easy",
      tags: ["assessment", "special-tests"],
      sectionSlug: "diabetic-neuropathy",
    },
    {
      text: "What is the primary reason diabetic peripheral neuropathy increases falls risk?",
      options: [
        "It causes sudden drops in blood pressure",
        "Loss of foot proprioception and plantar sensation degrades balance reactions",
        "It always causes severe muscle paralysis",
        "Neuropathic pain prevents patients from standing",
      ],
      correctIndex: 1,
      explanation:
        "Length-dependent sensory loss removes the plantar pressure and ankle proprioceptive information that balance strategies depend on, producing sensory ataxia — worse in the dark or on uneven surfaces, where vision cannot compensate. Balance and strength training demonstrably reduces this risk, making it a core physiotherapy target alongside foot-care education.",
      difficulty: "Medium",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "diabetic-neuropathy",
    },
    {
      text: "During the denervated phase after a severe nerve injury, which management priority is correct?",
      options: [
        "High-repetition resisted exercise of the denervated muscles",
        "Maintaining passive range, protective positioning and skin care while awaiting reinnervation",
        "Complete immobilisation of the whole limb in a rigid cast for six months",
        "Aggressive stretching of the injured nerve to speed regrowth",
      ],
      correctIndex: 1,
      explanation:
        "Denervated muscle cannot be strengthened, but the limb can be ruined while waiting: joints stiffen, flaccid muscles overstretch, and insensate skin burns and ulcerates painlessly. Daily passive movement, positioning, splinting and skin-care education keep the limb ready to use recovery when axons arrive. Nerve stretching compromises neural blood flow and is contraindicated.",
      difficulty: "Medium",
      tags: ["management", "precautions"],
      sectionSlug: "management-principles",
    },
    {
      text: "Why is a wrist cock-up splint prescribed in radial nerve palsy?",
      options: [
        "To immobilise the fingers completely",
        "To hold the wrist in extension, restoring effective grip while extensors are paralysed",
        "To stretch the flexor tendons",
        "To compress the radial nerve and reduce swelling",
      ],
      correctIndex: 1,
      explanation:
        "Effective grip requires a stable, slightly extended wrist — with wrist drop, the finger flexors work at a mechanical disadvantage and grip collapses. A splint holding the wrist extended immediately restores functional grip and prevents the flexed wrist from overstretching the paralysed extensors. Splinting here is active functional treatment, not just protection.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "management-principles",
    },
    {
      text: "Which principle applies to neural mobility (nerve gliding) techniques after nerve injury or entrapment?",
      options: [
        "Sustained end-range stretch held for 2 minutes gives the best result",
        "Gentle, rhythmic, symptom-free gliding movements in low doses",
        "They should reproduce strong tingling to be effective",
        "They are only useful in the central nervous system",
      ],
      correctIndex: 1,
      explanation:
        "Nerves normally glide several millimetres during limb movement; gliding techniques aim to maintain this excursion and limit adhesion. They are performed smoothly, short of symptom provocation, and in modest doses — sustained tension reduces intraneural blood flow, and an irritated nerve is easily flared. Lingering tingling after a session indicates the dose was too high.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "precautions"],
      sectionSlug: "management-principles",
    },
    {
      text: "A muscle recovering from denervation has just reached MRC grade 2. Which exercise prescription is most appropriate?",
      options: [
        "Heavy resistance training to failure, daily",
        "Gravity-eliminated active movement in short, frequent, non-fatiguing sessions",
        "No exercise until the muscle reaches grade 4",
        "Passive movement only, since active work is unsafe",
      ],
      correctIndex: 1,
      explanation:
        "A grade 2 muscle can move with gravity eliminated but not against it, so training happens in supported or side-lying positions with the movement plane parallel to the floor. Newly reinnervated muscle fatigues rapidly and overwork can degrade performance, so short frequent bouts with attention to movement quality are the rule. Resistance is added only once grade 3+ is achieved.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "exercise-programme",
    },
    {
      text: "What is the purpose of sensory re-education after nerve repair, and when should it begin?",
      options: [
        "To regrow sensory axons faster; begin immediately after injury",
        "To retrain cortical interpretation of altered sensory input; begin once protective sensation has returned",
        "To desensitise the limb so the patient ignores all sensation; begin at any time",
        "To replace the need for motor retraining; begin after full motor recovery",
      ],
      correctIndex: 1,
      explanation:
        "Regenerated axons often reinnervate slightly different receptors and territories, so the brain receives a distorted map — objects feel unfamiliar even with axons present. Graded discrimination training (textures, localisation, stereognosis) retrains the cortex to reinterpret the new input. It requires some returned sensation to work with, so it begins once protective sensation (sharp/blunt, hot/cold) is present, and works best in short, frequent sessions.",
      difficulty: "Hard",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "exercise-programme",
    },
    {
      text: "Which presentation requires same-day medical referral rather than routine physiotherapy management?",
      options: [
        "Six weeks of nocturnal hand tingling relieved by shaking",
        "Progressive bilateral leg weakness ascending over three days with absent ankle reflexes",
        "A stable foot drop present since a knee fracture two years ago",
        "Intermittent little-finger numbness when leaning on the elbow",
      ],
      correctIndex: 1,
      explanation:
        "Rapidly progressive, ascending, symmetrical weakness with areflexia is Guillain-Barré syndrome until proven otherwise. GBS can progress to respiratory muscle failure and autonomic instability within days, so it demands urgent hospital assessment. The other options describe chronic or classic entrapment presentations appropriate for conservative management.",
      difficulty: "Easy",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "red-flags",
    },
    {
      text: "Why must heat packs and electrotherapy be used with extreme caution over areas of sensory loss?",
      options: [
        "They accelerate Wallerian degeneration",
        "The patient cannot feel tissue damage developing, so burns can occur painlessly",
        "They permanently block nerve regeneration",
        "They interfere with nerve conduction study results weeks later",
      ],
      correctIndex: 1,
      explanation:
        "Normal skin relies on sensation to warn of excessive heat or current density. Insensate skin gives no warning, so a routine dose can cause a full-thickness burn without the patient noticing until afterwards. The same logic underpins diabetic foot-care education — protection must be built in externally when the warning system is absent.",
      difficulty: "Easy",
      tags: ["precautions"],
      sectionSlug: "management-principles",
    },
  ],
  flashcards: [
    { front: "Seddon's three grades of nerve injury?", back: "Neurapraxia (conduction block, axon intact), axonotmesis (axon lost, connective tissue intact), neurotmesis (complete disruption — needs surgery)." },
    { front: "Rate of peripheral axon regeneration?", back: "About 1 mm per day (~2.5–3 cm per month); recovery proceeds proximal to distal." },
    { front: "What does an advancing Tinel's sign indicate?", back: "Regenerating axons progressing distally along the nerve — the distal-most tingling point marks the regeneration front." },
    { front: "Sensory territory of carpal tunnel syndrome?", back: "Palmar thumb, index, middle and radial half of ring finger; thenar eminence skin often spared (palmar cutaneous branch exits proximal to the tunnel)." },
    { front: "Classic presentation of common fibular nerve palsy?", back: "Foot drop with weak dorsiflexion and eversion, sensory loss over the dorsum of the foot/lateral shin, high-steppage gait; inversion spared." },
    { front: "How does Bell's palsy differ from stroke on facial examination?", back: "Bell's palsy (LMN) weakens the whole half of the face including the forehead; stroke (UMN) spares the forehead." },
    { front: "MRC muscle power grades 0–5?", back: "0 no contraction; 1 flicker; 2 movement gravity-eliminated; 3 full range against gravity; 4 against resistance; 5 normal." },
    { front: "Standard screen for protective sensation in diabetic feet?", back: "10 g (5.07) monofilament at standard plantar sites, plus 128 Hz tuning-fork vibration at the great toe." },
    { front: "First-line management of foot drop while awaiting recovery?", back: "Ankle-foot orthosis (AFO) for clearance and heel strike, daily passive dorsiflexion to prevent contracture, and falls-risk advice." },
    { front: "Key management priorities during the denervated phase?", back: "Protect: maintain passive range and muscle length, splint in safe/functional positions, and teach care of insensate skin." },
    { front: "How should newly reinnervated (MRC 2) muscle be exercised?", back: "Gravity-eliminated active movement, short frequent non-fatiguing sessions; progress to against-gravity, then resistance, as grades improve." },
    { front: "Red-flag pattern suggesting Guillain-Barré syndrome?", back: "Rapidly progressive, ascending, symmetrical weakness over hours-days with lost reflexes, often post-infection — urgent same-day referral." },
  ],
};

export default topic;
