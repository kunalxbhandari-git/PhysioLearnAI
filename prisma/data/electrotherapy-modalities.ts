import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "electrotherapy-modalities",
  title: "Electrotherapy & Physical Modalities",
  category: "Electrotherapy",
  description:
    "Understand how TENS, NMES, ultrasound, interferential therapy, heat and cold work, what the evidence honestly shows, and how to apply each modality safely as an adjunct to active treatment.",
  difficulty: "Beginner",
  estMinutes: 27,
  icon: "zap",
  keyTakeaways: [
    "Modalities are adjuncts — they support education and exercise, they never replace them.",
    "TENS reduces pain through gate control (segmental) and descending inhibitory (opioid-mediated) mechanisms.",
    "NMES re-educates weak or inhibited muscle; FES applies the same current to produce function, such as correcting foot drop.",
    "Therapeutic ultrasound has thermal and non-thermal effects, but high-quality evidence for meaningful clinical benefit is limited.",
    "Heat increases tissue extensibility and blood flow; cold reduces metabolism, conduction velocity and acute swelling.",
    "Every modality shares a core contraindication list: pacemakers, pregnancy over the trunk, malignancy, impaired sensation, DVT and infected or broken skin.",
    "Check skin and sensation before and after every application — burns are the most common avoidable adverse event.",
    "Choose a modality by asking what physiological effect you need and whether an active alternative would do the job better.",
  ],
  sections: [
    {
      slug: "role-of-modalities",
      title: "The Role of Modalities in Modern Practice",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Electrophysical agents and thermal modalities occupy a clearly defined place in modern physiotherapy: they are adjuncts. Clinical guidelines across musculoskeletal conditions consistently place education, exercise therapy and activity modification at the core of care, with modalities used — if at all — to reduce symptoms enough for the patient to engage with active treatment.",
        },
        {
          kind: "paragraph",
          text: "This is not a reason to dismiss them. A well-chosen modality can reduce pain during a flare, help a patient tolerate early rehabilitation, re-activate an inhibited muscle after surgery, or restore function that has been lost to neurological injury. The skill lies in knowing what each modality can genuinely deliver, when it is safe, and when it is simply a poor use of treatment time.",
        },
        {
          kind: "keypoints",
          title: "The adjunct principle",
          items: [
            "No passive modality changes long-term outcomes on its own",
            "Modalities buy a 'window' of symptom relief in which active treatment happens",
            "If a modality replaces exercise in a treatment plan, the plan is wrong",
            "Patient beliefs matter: framing a modality as 'the treatment' encourages passivity",
          ],
        },
        {
          kind: "pearls",
          items: [
            "A useful test before applying any modality: \"What will this let the patient do that they could not do before?\" If there is no answer, reconsider.",
            "Contextual (placebo) effects are real and contribute substantially to modality outcomes — be honest with yourself and your patient about this.",
          ],
        },
      ],
    },
    {
      slug: "tens",
      title: "TENS — Transcutaneous Electrical Nerve Stimulation",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "TENS delivers pulsed electrical current through surface electrodes to stimulate peripheral nerves for pain relief. It is cheap, safe, self-administered and portable — which is precisely why it is worth understanding well, even though its evidence base is mixed.",
        },
        { kind: "image", illustration: "pain-pathway", caption: "Simplified pain pathway: TENS acts at the dorsal horn 'gate' (segmental inhibition via large-diameter afferents) and via descending inhibitory pathways from the brainstem." },
        {
          kind: "heading",
          text: "Mechanisms of analgesia",
        },
        {
          kind: "cards",
          items: [
            { title: "Gate control (segmental)", text: "High-frequency stimulation of large-diameter A-beta afferents inhibits nociceptive transmission at the dorsal horn of the same spinal segment — Melzack and Wall's 'gate'. Onset is fast but relief fades quickly once stimulation stops.", icon: "shield" },
            { title: "Descending inhibition", text: "Low-frequency, higher-intensity stimulation activates A-delta afferents and descending inhibitory pathways from the periaqueductal grey, releasing endogenous opioids. Onset is slower but relief can outlast the stimulation.", icon: "arrow-down" },
            { title: "Opioid receptor specificity", text: "Experimental work suggests low-frequency TENS analgesia is mediated by mu-opioid receptors and high-frequency by delta-opioid receptors — one rationale for switching parameters in opioid-tolerant patients.", icon: "git-branch" },
          ],
        },
        {
          kind: "table",
          headers: ["Parameter", "Conventional (high-frequency) TENS", "Acupuncture-like (low-frequency) TENS"],
          rows: [
            ["Frequency", "High: ~50–150 Hz", "Low: ~1–4 Hz"],
            ["Pulse duration", "Short: 50–200 µs", "Longer: 100–400 µs"],
            ["Intensity", "Strong but comfortable tingling (sensory level)", "Strong, to visible muscle twitch (motor level)"],
            ["Primary mechanism", "Segmental gate control (A-beta)", "Descending inhibition, endogenous opioids (A-delta)"],
            ["Onset / duration of relief", "Fast onset, short carry-over", "Slower onset, longer carry-over"],
            ["Typical use", "During activity, ongoing pain", "Shorter sessions; consider when conventional TENS fails"],
          ],
        },
        {
          kind: "paragraph",
          text: "Electrodes are usually placed over or around the painful area, along the relevant peripheral nerve, or over the corresponding dermatome. Intensity matters more than most parameters: a 'strong but comfortable' sensation consistently outperforms barely perceptible stimulation in trials.",
        },
        {
          kind: "keypoints",
          title: "Honest evidence summary",
          items: [
            "Systematic reviews show TENS can reduce pain intensity during and shortly after use, but trial quality is often low and effects on function are uncertain",
            "It is reasonable as a low-risk, low-cost self-management adjunct — not as a stand-alone treatment",
            "Sub-therapeutic intensity is the most common reason for 'TENS didn't work'",
            "Tolerance can develop with fixed parameters; varying frequency or modulation may help",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Teach the patient to control the unit themselves — self-administration during aggravating activities is where TENS is most useful.",
            "Do a small skin-sensation check (sharp/blunt or hot/cold) over the electrode site before the first application.",
          ],
        },
      ],
    },
    {
      slug: "nmes-fes",
      title: "NMES & FES — Stimulating Muscle for Strength and Function",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Neuromuscular electrical stimulation (NMES) uses electrical current at motor-level intensity to produce visible muscle contractions. When the same stimulation is timed to produce a useful movement — such as lifting the foot during swing phase of gait — it is called functional electrical stimulation (FES).",
        },
        { kind: "image", illustration: "muscle-fiber", caption: "Muscle fibre structure. NMES recruits motor units in a non-physiological order — large, fast-fatiguing fibres tend to be activated early — which is why stimulated contractions fatigue faster than voluntary ones." },
        {
          kind: "cards",
          items: [
            { title: "Muscle re-education", text: "NMES helps patients 'find' a muscle that voluntary effort cannot activate well — classically the quadriceps after knee surgery, where arthrogenic inhibition blocks voluntary drive.", icon: "refresh-cw" },
            { title: "Post-operative quadriceps", text: "Evidence supports NMES combined with exercise after ACL reconstruction and TKA to reduce early quadriceps strength loss. It supplements, and is then replaced by, voluntary strengthening.", icon: "dumbbell" },
            { title: "Stroke — foot drop (FES)", text: "Peroneal nerve FES during swing phase dorsiflexes the foot, improving gait speed and safety while the device is worn (an orthotic effect); some patients also gain carry-over (a therapeutic effect).", icon: "footprints" },
            { title: "Shoulder subluxation & disuse atrophy", text: "NMES is also used for post-stroke shoulder subluxation and to limit atrophy where voluntary contraction is impossible or restricted.", icon: "activity" },
          ],
        },
        {
          kind: "paragraph",
          text: "Practical prescription for strengthening typically uses a frequency around 30–50 Hz, an on:off duty cycle with generous rest (e.g. 10 s on : 30–50 s off) to manage fatigue, and the highest comfortably tolerated intensity — stimulated strength gains track with the force of the evoked contraction. Whenever possible, ask the patient to contract voluntarily with the stimulation: combined contractions train the nervous system as well as the muscle.",
        },
        {
          kind: "warning",
          title: "Common NMES mistakes",
          items: [
            "Using sensory-level intensity and expecting strength changes — a visible, reasonably strong contraction is required",
            "No rest ratio, causing rapid fatigue and patient intolerance",
            "Continuing NMES once voluntary activation has recovered instead of progressing to loaded exercise",
            "Forgetting that NMES requires an intact lower motor neuron — denervated muscle does not respond to standard NMES parameters",
          ],
        },
      ],
    },
    {
      slug: "therapeutic-ultrasound",
      title: "Therapeutic Ultrasound",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Therapeutic ultrasound delivers high-frequency acoustic energy (typically 1 or 3 MHz) into tissue through a coupling medium. Its proposed effects are divided into thermal and non-thermal, and the choice of parameters determines which dominates.",
        },
        {
          kind: "table",
          headers: ["Mode", "Parameters", "Proposed effects", "Typical intent"],
          rows: [
            ["Thermal (continuous)", "Continuous output, higher intensity (~1.0–2.0 W/cm²)", "Tissue heating: increased blood flow, collagen extensibility, reduced pain and muscle spasm", "Deep heating of tendon, ligament, capsule before stretching"],
            ["Non-thermal (pulsed)", "Pulsed output (e.g. 20% duty cycle), lower intensity (~0.5–1.0 W/cm² SATP)", "Cavitation and acoustic streaming: proposed cell-membrane effects on tissue repair", "Acute injuries where heating is undesirable"],
            ["1 MHz frequency", "Deeper penetration (~2.5–5 cm)", "Targets deeper structures", "Hip, deep muscle layers"],
            ["3 MHz frequency", "Superficial absorption (~1–2.5 cm)", "Targets superficial structures", "Patellar tendon, lateral elbow, hand"],
          ],
        },
        {
          kind: "paragraph",
          text: "The honest evidence position: despite decades of use, systematic reviews across musculoskeletal conditions have generally failed to show clinically important benefits of therapeutic ultrasound over placebo. Guideline panels for low back pain and knee osteoarthritis specifically advise against routine use. Laboratory effects are real; translation into patient-relevant outcomes is the problem.",
        },
        {
          kind: "keypoints",
          title: "If you do use ultrasound",
          items: [
            "Choose frequency by target depth: 3 MHz superficial, 1 MHz deep",
            "Keep the treatment head moving continuously to avoid standing-wave hot spots and periosteal pain",
            "Use an adequate coupling medium — air reflects almost all ultrasound energy",
            "Treatment area should be limited (roughly 2–3 times the effective radiating area of the head)",
            "Be transparent with patients about the limited evidence, and never let it displace active treatment",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Periosteal pain during treatment means too much energy over bone — reduce intensity or keep the head moving.",
            "Ultrasound over metal implants with a moving head is generally considered acceptable at pulsed/low doses, but cemented components and any doubt warrant caution — check local policy.",
          ],
        },
      ],
    },
    {
      slug: "interferential-therapy",
      title: "Interferential Therapy (IFT) Basics",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Interferential therapy applies two medium-frequency alternating currents (around 4,000 Hz) that cross within the tissues. Where they intersect, the small difference between the two frequencies produces a low-frequency 'beat' (amplitude-modulated frequency, AMF) — for example, 4,000 Hz and 4,100 Hz produce a 100 Hz beat.",
        },
        {
          kind: "paragraph",
          text: "The theoretical appeal is that medium-frequency currents cross skin resistance more comfortably than low-frequency TENS, allowing the analgesic low-frequency effect to be generated deeper in the tissues. The proposed analgesic mechanisms are the same as TENS: segmental gate control at higher beat frequencies (around 80–150 Hz) and descending/opioid mechanisms at low beat frequencies (around 1–10 Hz).",
        },
        {
          kind: "keypoints",
          title: "IFT in brief",
          items: [
            "Two medium-frequency currents interfere to create a therapeutic low-frequency beat",
            "Four-electrode (quadripolar) application crosses the currents over the target area; two-electrode (premodulated) is simpler but more superficial",
            "Evidence mirrors TENS: possible short-term pain relief, no convincing superiority over TENS or other modalities",
            "Contraindications are the same as for other electrical stimulation — see the master table",
          ],
        },
        {
          kind: "pearls",
          items: [
            "In practice, choose between IFT and TENS on pragmatics — availability, comfort, home use — not on claims of deeper or better analgesia, which the evidence does not clearly support.",
          ],
        },
      ],
    },
    {
      slug: "heat-cold",
      title: "Therapeutic Heat & Cold",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Superficial thermal agents are the simplest, cheapest and most self-manageable modalities. Their physiological effects are largely opposite, which makes the selection logic straightforward once you know what each does.",
        },
        {
          kind: "table",
          headers: ["Physiological effect", "Heat", "Cold"],
          rows: [
            ["Blood flow", "Vasodilation — increased local circulation", "Vasoconstriction — reduced local circulation"],
            ["Metabolic rate", "Increased", "Decreased (limits secondary hypoxic injury)"],
            ["Nerve conduction", "Slightly increased", "Slowed; prolonged cooling reduces pain conduction"],
            ["Muscle spasm", "Reduced via muscle-spindle and comfort effects", "Reduced after initial cooling period"],
            ["Collagen extensibility", "Increased — best window for stretching is during/just after heating", "Decreased — tissues stiffer when cold"],
            ["Swelling / oedema", "May increase in acute injury", "Limits formation in the acute phase"],
            ["Pain", "Reduced (gating, relaxation, comfort)", "Reduced (gating, slowed conduction, numbing)"],
          ],
        },
        {
          kind: "cards",
          items: [
            { title: "When to choose heat", text: "Subacute and chronic pain, muscle spasm and guarding, stiffness — especially before stretching or exercise. Typical: hot pack 15–20 minutes with towel layers.", icon: "sun" },
            { title: "When to choose cold", text: "Acute injury with heat and swelling, post-exercise flare of an irritable joint, and short-term analgesia. Typical: ice pack 10–15 minutes with a damp interface, checking skin at intervals.", icon: "snowflake" },
            { title: "When either works", text: "For persistent pain, patient preference is a legitimate deciding factor — analgesic effects are modest and comfort drives adherence.", icon: "scale" },
          ],
        },
        {
          kind: "warning",
          title: "Thermal safety",
          items: [
            "Burns (heat) and cold-induced injury are the classic avoidable adverse events — always use towelling layers and timed applications",
            "Never apply thermal agents over areas with impaired sensation or in patients unable to report discomfort",
            "Avoid heat over acute inflammation, bleeding risk or new swelling",
            "Caution with cold in Raynaud's phenomenon, cold hypersensitivity/urticaria and cryoglobulinaemia, and over superficial nerves (e.g. common peroneal at the fibular head)",
          ],
        },
      ],
    },
    {
      slug: "contraindications",
      title: "Contraindications — The Master Table",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Most modality contraindications recur across agents because they share the same underlying dangers: electrical interference with implanted devices, uncontrolled tissue heating, stimulating blood flow or cell activity in the wrong place, and applying energy where the patient cannot feel harm developing.",
        },
        {
          kind: "table",
          headers: ["Contraindication", "Applies to", "Why"],
          rows: [
            ["Cardiac pacemaker / ICD", "All electrical stimulation (TENS, NMES, IFT); caution with any electrotherapy near the device", "Electrical currents can be sensed by the device and inhibit or trigger inappropriate pacing/shocks"],
            ["Pregnancy — over trunk, abdomen or pelvis", "All modalities over these regions", "Unknown or potentially harmful effects on the fetus; TENS for labour analgesia is a specific, supervised exception"],
            ["Active malignancy (over or near tumour)", "All modalities", "Heating and increased circulation or cell stimulation could theoretically promote tumour growth or metastasis"],
            ["Impaired sensation or cognition", "All thermal agents; intensity-dependent electrotherapy", "The patient cannot report developing burns or excessive stimulation — the main safety feedback loop is lost"],
            ["Deep vein thrombosis / thrombophlebitis", "All modalities over the affected region; avoid local circulatory stimulation", "Risk of dislodging thrombus and causing pulmonary embolism"],
            ["Open wounds / active infection / broken skin", "Electrodes, ultrasound head, thermal packs directly over the site", "Current concentration, contamination and tissue damage; infection may spread with heating"],
            ["Bleeding or recent haemorrhage", "Heat and mechanical/thermal agents", "Vasodilation worsens bleeding"],
            ["Epilepsy (electrodes near head/neck)", "Electrical stimulation near the head, neck, carotid sinus", "Risk of seizure provocation and vasovagal response (carotid sinus)"],
            ["Metal implants / growth plates", "Thermal ultrasound over the site; caution varies", "Selective heating concerns; avoid ultrasound over epiphyseal plates in children"],
          ],
        },
        {
          kind: "redflags",
          items: [
            "Pacemaker or implanted defibrillator — do not apply electrical stimulation without cardiology clearance",
            "Pregnancy — never place any modality over the trunk, abdomen, pelvis or low back",
            "Known or suspected malignancy in the treatment area",
            "Suspected DVT — hot, swollen, tender calf: stop, refer for urgent medical assessment; no modality is appropriate",
            "Absent or unreliable sensation in the treatment area",
            "Broken, infected or newly irradiated skin at the application site",
          ],
        },
        {
          kind: "pearls",
          items: [
            "When you cannot decide whether something is a contraindication or a precaution, treat it as a contraindication until you have checked — modalities are optional; safety is not.",
          ],
        },
      ],
    },
    {
      slug: "safe-application",
      title: "Safe Application Principles",
      estMinutes: 2,
      content: [
        {
          kind: "steps",
          items: [
            { title: "1. Screen", text: "Check the contraindication list every time: devices, pregnancy, malignancy, sensation, circulation, skin integrity, cognition. Ask — don't assume the notes are complete." },
            { title: "2. Test sensation", text: "Before thermal or electrical agents, test the treatment area's sensation (sharp/blunt for electrotherapy, hot/cold test tubes or reliable equivalents for thermal agents)." },
            { title: "3. Inspect skin before", text: "Look at the skin under electrodes or packs: rashes, wounds, fragile or newly healed skin change the plan." },
            { title: "4. Explain and set expectations", text: "Tell the patient what they should feel ('strong but comfortable tingling', 'comfortable warmth') and — critically — what they should never feel: burning, sharp pain, or numbness spreading." },
            { title: "5. Dose deliberately", text: "Record parameters: frequency, intensity, pulse duration, duty cycle, time, electrode placement. If you cannot reproduce a dose you cannot progress it." },
            { title: "6. Monitor and re-check skin after", text: "Check during treatment (especially first applications) and inspect skin afterwards. Mottled, blistered or blanched skin is an adverse event — document and review." },
          ],
        },
        {
          kind: "warning",
          title: "Dosing errors to avoid",
          items: [
            "\"More is better\" heating — therapeutic warmth, not maximal tolerable heat",
            "Turning up TENS/NMES quickly during the first minutes before accommodation is understood by the patient",
            "Leaving a patient unattended on a first application of any thermal or electrical agent",
            "Reusing degraded self-adhesive electrodes — uneven current density causes stinging and skin irritation",
          ],
        },
      ],
    },
    {
      slug: "modality-selection",
      title: "Choosing a Modality — Clinical Reasoning",
      estMinutes: 2,
      difficulty: "Intermediate",
      content: [
        {
          kind: "paragraph",
          text: "Modality selection is a reasoning exercise, not a menu. Start from the physiological problem, decide whether a modality genuinely addresses it better than an active alternative, then choose the safest, simplest agent that delivers the required effect.",
        },
        {
          kind: "steps",
          items: [
            { title: "Define the target effect", text: "Pain relief? Muscle activation? Tissue extensibility? Swelling control? A modality without a target effect is ritual, not treatment." },
            { title: "Ask the 'active alternative' question", text: "Would graded exercise, positioning, or load management achieve the same goal while building capacity? If yes, prefer it — or combine them." },
            { title: "Match agent to effect", text: "Pain → TENS/IFT, heat or cold. Activation failure → NMES. Function despite paralysis → FES. Pre-stretch extensibility → heat. Acute swelling → cold, compression, elevation." },
            { title: "Screen for safety", text: "Run the contraindication master list against this patient and this body region." },
            { title: "Set a review point", text: "Decide in advance what improvement, over what timeframe, justifies continuing. No measurable benefit after a fair trial (e.g. 2–3 sessions or 1–2 weeks of home use) — stop." },
          ],
        },
        {
          kind: "cards",
          items: [
            { title: "Example — post-op TKA day 3", text: "Problem: quadriceps activation failure. Choice: NMES with attempted voluntary contraction + cryotherapy for pain/swelling. Modality has a specific, time-limited job.", icon: "clipboard" },
            { title: "Example — chronic low back pain", text: "Problem: persistent pain limiting activity. Choice: education + graded exercise as core; optional self-applied heat or TENS during flare-ups. Modalities framed clearly as comfort tools.", icon: "book-open" },
            { title: "Example — stroke with foot drop", text: "Problem: absent dorsiflexion in swing. Choice: FES or an ankle-foot orthosis; FES chosen where tolerated, providing an orthotic effect and possible carry-over.", icon: "footprints" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Document the intended effect and the review date whenever you start a modality — it forces honest evaluation and prevents drift into indefinite passive treatment.",
          ],
        },
      ],
    },
    {
      slug: "quick-revision",
      title: "Quick Revision Summary",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "keypoints",
          title: "60-second summary",
          items: [
            "Modalities are adjuncts to education and exercise — never the core of care",
            "TENS: conventional = high frequency, sensory level, gate control; acupuncture-like = low frequency, motor level, descending opioid mechanisms",
            "NMES: motor-level stimulation for re-education and strength (post-op quads); FES = stimulation producing function (stroke foot drop)",
            "Ultrasound: 1 MHz deep / 3 MHz superficial; continuous = thermal, pulsed = non-thermal; evidence for clinical benefit is weak",
            "IFT: two medium-frequency currents create a low-frequency beat; effects and evidence similar to TENS",
            "Heat → flow, extensibility, comfort (subacute/chronic); Cold → less metabolism, conduction, swelling (acute)",
            "Master contraindications: pacemaker, pregnancy over trunk, malignancy, impaired sensation, DVT, broken/infected skin",
            "Safety routine: screen → test sensation → inspect skin → explain → dose deliberately → re-check skin",
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
      text: "What is the correct place of electrophysical modalities in guideline-based musculoskeletal care?",
      options: [
        "First-line treatment, with exercise added if modalities fail",
        "Adjuncts that support a core of education and exercise therapy",
        "Equivalent alternatives to exercise for long-term outcomes",
        "Reserved exclusively for post-surgical patients",
      ],
      correctIndex: 1,
      explanation:
        "Across musculoskeletal guidelines, the core of care is education, exercise and activity/load management. Modalities may reduce symptoms enough to enable active treatment, but no passive modality changes long-term outcomes on its own — they are adjuncts, never the primary treatment.",
      difficulty: "Easy",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "role-of-modalities",
    },
    {
      text: "Conventional (high-frequency) TENS relieves pain primarily through which mechanism?",
      options: [
        "Direct blockade of C-fibre conduction at the electrode site",
        "Segmental inhibition at the dorsal horn via large-diameter A-beta afferents (gate control)",
        "Release of cortisol from the adrenal cortex",
        "Heating of subcutaneous tissue",
      ],
      correctIndex: 1,
      explanation:
        "Conventional TENS stimulates large-diameter A-beta afferents, which inhibit nociceptive transmission at the dorsal horn of the same spinal segment — the gate control mechanism described by Melzack and Wall. It does not block C-fibres directly, produce significant heating, or act hormonally.",
      difficulty: "Easy",
      tags: ["pathology", "management"],
      sectionSlug: "tens",
    },
    {
      text: "Which parameter set best describes acupuncture-like (low-frequency) TENS?",
      options: [
        "100 Hz, short pulse duration, barely perceptible intensity",
        "1–4 Hz, longer pulse duration, strong intensity producing visible muscle twitches",
        "4,000 Hz carrier frequency with a 100 Hz beat",
        "50 Hz continuous output at 1.5 W/cm²",
      ],
      correctIndex: 1,
      explanation:
        "Acupuncture-like TENS uses low frequencies (~1–4 Hz), longer pulse durations and motor-level intensity producing visible twitches. It works through descending inhibitory pathways and endogenous opioid release, with slower onset but longer carry-over than conventional TENS. Option C describes interferential therapy and option D describes continuous ultrasound.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "tens",
    },
    {
      text: "A patient reports that TENS 'did nothing'. On questioning, they kept the intensity at a faint tingle. What is the most likely explanation and best advice?",
      options: [
        "TENS is ineffective for all patients; abandon it",
        "The intensity was sub-therapeutic; increase to a strong but comfortable sensation",
        "The electrodes were too large; use smaller ones at the same intensity",
        "They should use it only at night while asleep",
      ],
      correctIndex: 1,
      explanation:
        "Intensity is the parameter most consistently linked to TENS effectiveness: 'strong but comfortable' stimulation outperforms barely perceptible stimulation in trials. Sub-therapeutic intensity is the most common reason for apparent TENS failure. Using it asleep is inadvisable (no feedback about skin irritation or discomfort).",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "management"],
      sectionSlug: "tens",
    },
    {
      text: "What distinguishes FES from general NMES?",
      options: [
        "FES uses sensory-level intensity while NMES uses motor-level intensity",
        "FES times the stimulated contraction to produce a functional movement, such as dorsiflexion during swing phase",
        "FES can activate denervated muscle whereas NMES cannot",
        "FES uses ultrasound energy rather than electrical current",
      ],
      correctIndex: 1,
      explanation:
        "Both NMES and FES produce motor-level contractions via an intact lower motor neuron. The distinguishing feature of FES is timing: the contraction is coordinated to achieve a functional task — classically peroneal stimulation during swing phase to correct foot drop after stroke. Neither works on denervated muscle with standard parameters.",
      difficulty: "Easy",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "nmes-fes",
    },
    {
      text: "Why do NMES-evoked contractions fatigue faster than voluntary contractions?",
      options: [
        "Electrical stimulation depletes calcium stores instantly",
        "NMES recruits motor units in a non-physiological order, activating large fast-fatiguing fibres early",
        "The skin resistance absorbs most of the energy",
        "Stimulated contractions bypass the muscle entirely and act on tendon",
      ],
      correctIndex: 1,
      explanation:
        "Voluntary contractions recruit motor units by the size principle (small, fatigue-resistant first). NMES reverses or randomises this order, preferentially activating large-diameter axons supplying fast-fatiguing fibres, and fires them synchronously — hence rapid fatigue and the need for generous off-time in duty cycles.",
      difficulty: "Hard",
      tags: ["anatomy", "exercise-therapy"],
      sectionSlug: "nmes-fes",
    },
    {
      text: "Which NMES prescription is most appropriate for post-operative quadriceps re-education?",
      options: [
        "Sensory-level tingling, continuous for 8 hours daily",
        "~30–50 Hz, strong comfortable visible contraction, on:off cycle such as 10 s on / 30–50 s off, combined with attempted voluntary contraction",
        "1–2 Hz twitches at maximal tolerable intensity with no rest periods",
        "4,000 Hz continuous current with electrodes over the femoral artery",
      ],
      correctIndex: 1,
      explanation:
        "Strength and re-education effects require motor-level stimulation producing a visible, reasonably forceful contraction (~30–50 Hz), a duty cycle with generous rest to manage fatigue, and — ideally — simultaneous voluntary effort to train central drive. Sensory-level intensity produces no strengthening; no-rest protocols cause rapid fatigue.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "nmes-fes",
    },
    {
      text: "Which frequency should be selected to target a superficial structure such as the common extensor tendon at the elbow with ultrasound?",
      options: ["0.5 MHz", "1 MHz", "3 MHz", "10 MHz"],
      correctIndex: 2,
      explanation:
        "Higher ultrasound frequencies are absorbed more superficially: 3 MHz is absorbed within roughly 1–2.5 cm, making it appropriate for superficial structures like the common extensor tendon. 1 MHz penetrates deeper (~2.5–5 cm) and is used for deeper targets. 10 MHz is a diagnostic imaging frequency, not a therapeutic one.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "therapeutic-ultrasound",
    },
    {
      text: "Which statement about the evidence for therapeutic ultrasound is most accurate?",
      options: [
        "It is strongly supported and recommended first-line for tendinopathy",
        "Laboratory effects exist, but systematic reviews generally fail to show clinically important benefit over placebo, and some guidelines advise against routine use",
        "It is effective only when the treatment head is held stationary",
        "It has been proven harmful and is banned in most countries",
      ],
      correctIndex: 1,
      explanation:
        "Thermal and non-thermal effects of ultrasound are demonstrable in tissue, but high-quality trials have generally not shown meaningful patient-relevant benefit over placebo, and guidelines for conditions such as low back pain and knee OA advise against routine use. It is neither proven harmful nor recommended first-line; a stationary head is a safety error, not a technique.",
      difficulty: "Hard",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "therapeutic-ultrasound",
    },
    {
      text: "During continuous ultrasound over the greater trochanter, the patient reports a deep aching pain over the bone. What has most likely happened and what should you do?",
      options: [
        "Normal therapeutic response — continue unchanged",
        "Periosteal overheating from excessive energy over bone — reduce intensity and keep the head moving",
        "The gel has enhanced transmission too well — remove the gel",
        "The ultrasound has triggered a DVT — call emergency services",
      ],
      correctIndex: 1,
      explanation:
        "Deep periosteal ache during ultrasound indicates energy concentrating at the bone interface — from too high an intensity, a stationary or slow-moving head, or standing waves. The response is to reduce intensity and maintain continuous head movement. Removing gel would reflect nearly all energy at the air interface; the symptom pattern does not suggest DVT.",
      difficulty: "Hard",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "therapeutic-ultrasound",
    },
    {
      text: "In interferential therapy, two currents of 4,000 Hz and 4,080 Hz are applied. What is the therapeutic beat frequency produced in the tissues?",
      options: ["8,080 Hz", "4,040 Hz", "80 Hz", "0.02 Hz"],
      correctIndex: 2,
      explanation:
        "The amplitude-modulated (beat) frequency equals the difference between the two medium-frequency currents: 4,080 − 4,000 = 80 Hz. This low-frequency beat is the therapeutically active component, here in the range associated with segmental gate-control analgesia.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "interferential-therapy",
    },
    {
      text: "What is the main theoretical advantage claimed for interferential therapy over conventional TENS?",
      options: [
        "It works on denervated muscle",
        "Medium-frequency currents cross skin resistance more comfortably, allowing low-frequency effects to be produced deeper in the tissues",
        "It has been proven to cure the underlying pathology",
        "It requires no contraindication screening",
      ],
      correctIndex: 1,
      explanation:
        "Skin impedance falls as frequency rises, so medium-frequency (~4,000 Hz) currents pass through skin more comfortably; where the two currents interfere, a low-frequency beat is generated within the tissues. However, trials have not convincingly shown IFT to be superior to TENS, and its contraindications are the same as for other electrical stimulation.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "interferential-therapy",
    },
    {
      text: "Which physiological effect belongs to therapeutic heat rather than cold?",
      options: [
        "Reduced local metabolic rate",
        "Vasoconstriction",
        "Increased collagen extensibility",
        "Slowed nerve conduction velocity",
      ],
      correctIndex: 2,
      explanation:
        "Heat increases collagen extensibility — which is why the window during and just after heating is the best time to stretch — along with vasodilation and a raised metabolic rate. Reduced metabolism, vasoconstriction and slowed nerve conduction are effects of cold.",
      difficulty: "Easy",
      tags: ["pathology", "management"],
      sectionSlug: "heat-cold",
    },
    {
      text: "A patient sprained their ankle two hours ago; it is warm and swelling. Which thermal choice is most appropriate and why?",
      options: [
        "Heat, to accelerate healing by increasing blood flow",
        "Cold, to reduce metabolic rate, limit secondary hypoxic injury and control swelling",
        "Alternating hot and cold every minute to 'pump' the joint",
        "No modality is ever appropriate for an acute ankle sprain",
      ],
      correctIndex: 1,
      explanation:
        "In the acute phase, cold reduces local metabolic demand (limiting secondary hypoxic injury), produces vasoconstriction that helps limit swelling, and provides analgesia. Heat would increase blood flow and may worsen swelling in a fresh injury. Cold is applied for around 10–15 minutes with a damp interface, alongside compression, elevation and appropriate early loading.",
      difficulty: "Easy",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "heat-cold",
    },
    {
      text: "Why must thermal and electrical modalities not be applied over an area with impaired sensation?",
      options: [
        "The modality will have no physiological effect on insensate tissue",
        "The patient cannot report developing burns or excessive stimulation, removing the key safety feedback loop",
        "Impaired sensation increases electrical resistance to dangerous levels",
        "It is only a problem for cold, not heat",
      ],
      correctIndex: 1,
      explanation:
        "Dosing of thermal and intensity-dependent electrical agents relies on the patient reporting what they feel. With impaired sensation, tissue damage can develop silently — burns are the classic avoidable adverse event. The physiological effects still occur (option A is wrong), which is exactly what makes it dangerous, and the rule applies to heat, cold and electrical agents alike.",
      difficulty: "Easy",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "contraindications",
    },
    {
      text: "Which patient can safely receive TENS without further medical clearance?",
      options: [
        "A patient with a cardiac pacemaker requesting TENS for shoulder pain",
        "A pregnant patient requesting TENS over the lumbar spine at 20 weeks",
        "A patient with chronic knee pain, intact sensation and healthy skin",
        "A patient with a hot, swollen, tender calf of sudden onset",
      ],
      correctIndex: 2,
      explanation:
        "Chronic knee pain with intact sensation and healthy skin has no listed contraindication. Pacemakers contraindicate electrical stimulation without cardiology clearance; pregnancy contraindicates stimulation over the trunk, abdomen, pelvis or low back; and a hot swollen calf suggests DVT — an urgent medical referral, not a modality decision.",
      difficulty: "Easy",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "contraindications",
    },
    {
      text: "A patient attending for electrotherapy mentions a new, hot, swollen and tender calf. What is the correct action?",
      options: [
        "Apply cold to the calf to reduce the swelling before treatment",
        "Proceed with treatment on the untreated limb and review next week",
        "Stop and refer for urgent medical assessment for suspected DVT — apply no modality to the region",
        "Apply TENS proximal to the swelling to avoid the area",
      ],
      correctIndex: 2,
      explanation:
        "A hot, swollen, tender calf raises suspicion of deep vein thrombosis. Any modality that alters local circulation or mechanically disturbs the region risks dislodging a thrombus and causing pulmonary embolism. The correct response is to stop and arrange urgent medical assessment — this is a red flag, not a treatment-modification problem.",
      difficulty: "Medium",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "contraindications",
    },
    {
      text: "Which sequence best reflects safe application of a hot pack?",
      options: [
        "Apply directly to skin for 30 minutes and leave the patient to rest",
        "Screen contraindications → test hot/cold sensation → inspect skin → apply with towel layers for 15–20 minutes → monitor → re-inspect skin",
        "Test sensation only if the patient is diabetic, then apply for as long as tolerated",
        "Warm the pack to maximum, since higher temperatures produce faster healing",
      ],
      correctIndex: 1,
      explanation:
        "Safe thermal application follows a routine: contraindication screening, sensation testing (hot/cold discrimination), skin inspection, insulated application with towelling for a timed 15–20 minutes, monitoring during treatment, and re-inspection afterwards. 'Maximal tolerable heat' and unmonitored prolonged applications are how burns happen; sensation testing applies to everyone, not only patients with diabetes.",
      difficulty: "Medium",
      tags: ["precautions", "management"],
      sectionSlug: "safe-application",
    },
    {
      text: "Three weeks after starting twice-weekly ultrasound for lateral elbow pain, a patient shows no measurable change in pain or grip strength. Applying sound modality reasoning, what should happen next?",
      options: [
        "Continue for another 6 weeks — ultrasound effects are cumulative",
        "Double the intensity to force a thermal effect",
        "Stop the ultrasound and redirect treatment time to progressive loading, which has better evidence",
        "Switch to daily ultrasound sessions",
      ],
      correctIndex: 2,
      explanation:
        "Modality reasoning requires a pre-set review point: if a fair trial produces no measurable benefit, the modality is stopped. Ultrasound already has weak evidence for tendinopathy, while progressive loading is the evidence-based core treatment. Escalating dose or duration of an ineffective passive agent wastes treatment time and reinforces passivity.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "management"],
      sectionSlug: "modality-selection",
    },
    {
      text: "Which pairing of clinical problem and modality reflects the best 'target effect' reasoning?",
      options: [
        "Quadriceps activation failure after TKA → NMES with attempted voluntary contraction",
        "Acute swollen ankle → continuous thermal ultrasound",
        "Foot drop after stroke → hot packs to the anterior shin",
        "Chronic low back pain → ultrasound as the sole treatment",
      ],
      correctIndex: 0,
      explanation:
        "NMES directly addresses activation failure and is best combined with voluntary effort — a specific, time-limited job. Heating an acutely swollen ankle worsens swelling; hot packs do nothing for the neurological cause of foot drop (FES or an AFO addresses the swing-phase deficit); and ultrasound as sole treatment for chronic low back pain contradicts both the adjunct principle and guideline advice.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "management"],
      sectionSlug: "modality-selection",
    },
  ],
  flashcards: [
    { front: "What is the core principle governing all modality use?", back: "Modalities are adjuncts: they support education and exercise by relieving symptoms or enabling activation, but never replace active treatment." },
    { front: "Conventional TENS — parameters and mechanism?", back: "High frequency (~50–150 Hz), short pulses, strong-but-comfortable sensory intensity. Works by segmental gate control via A-beta afferents; fast onset, short carry-over." },
    { front: "Acupuncture-like TENS — parameters and mechanism?", back: "Low frequency (~1–4 Hz), longer pulses, motor-level intensity with visible twitches. Works via descending inhibition and endogenous opioids; slower onset, longer carry-over." },
    { front: "What is the difference between NMES and FES?", back: "Both stimulate motor-level contractions via intact lower motor neurons; FES times contractions to produce function (e.g. peroneal stimulation for foot drop in swing phase)." },
    { front: "Why does NMES fatigue muscle quickly?", back: "It recruits motor units in a non-physiological order (large, fast-fatiguing fibres early) and fires them synchronously — hence duty cycles need generous off-time." },
    { front: "Ultrasound: which frequency for deep vs superficial tissue?", back: "1 MHz for deep structures (~2.5–5 cm); 3 MHz for superficial structures (~1–2.5 cm). Continuous mode = thermal; pulsed = non-thermal." },
    { front: "How does interferential therapy generate its therapeutic frequency?", back: "Two medium-frequency currents (~4,000 Hz) cross in the tissues; the difference between them creates a low-frequency 'beat' (e.g. 4,000 + 4,100 Hz → 100 Hz)." },
    { front: "Key physiological effects of heat?", back: "Vasodilation, increased metabolic rate, increased collagen extensibility, reduced muscle spasm and pain — best used subacute/chronic and before stretching." },
    { front: "Key physiological effects of cold?", back: "Vasoconstriction, reduced metabolic rate (limits secondary hypoxic injury), slowed nerve conduction, less swelling and pain — best used in acute injury." },
    { front: "List the master contraindications shared across modalities.", back: "Cardiac pacemaker/ICD, pregnancy over trunk/abdomen/pelvis, malignancy in the area, impaired sensation or cognition, DVT/thrombophlebitis, open wounds or active infection at the site." },
    { front: "What safety checks precede any thermal or electrical application?", back: "Contraindication screen, sensation test (sharp/blunt or hot/cold), skin inspection, clear patient instructions on what they should and should not feel, then re-check skin afterwards." },
    { front: "What question should precede every modality prescription?", back: "\"What will this let the patient do that they could not do before?\" — define the target effect, prefer active alternatives, and set a review point to stop if there is no measurable benefit." },
  ],
};

export default topic;
