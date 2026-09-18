import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "vestibular-rehabilitation",
  title: "Vestibular Rehabilitation & Balance Disorders",
  category: "Neurological",
  description:
    "Inner-ear anatomy, peripheral versus central disorders, BPPV testing and repositioning, history-led assessment, and the rehab toolkit — gaze stability, habituation, substitution and balance retraining — plus the red flags that mean it is not the ear.",
  difficulty: "Intermediate",
  estMinutes: 24,
  icon: "circle-dot",
  keyTakeaways: [
    "The vestibular system's semicircular canals sense rotation and the otolith organs sense linear acceleration and gravity — together they drive gaze stability (VOR) and balance.",
    "History is king in dizziness: episode duration and triggers sort most patients — seconds with position change suggests BPPV, hours suggests Menière's, days suggests neuritis.",
    "BPPV is displaced otoconia in a semicircular canal (usually posterior): diagnosed with the Dix-Hallpike test and treated — often in one session — with the Epley manoeuvre.",
    "Vestibular neuritis causes acute constant vertigo for days; the treatment after the first days is movement, not rest — vestibular exercises accelerate compensation.",
    "The HINTS concept: in acute continuous vertigo, oculomotor findings can distinguish a peripheral cause from a stroke — central features are an emergency.",
    "Rehabilitation mechanisms: adaptation (gaze-stability VOR x1 training), habituation (repeated exposure to provoking movements), substitution and balance retraining.",
    "Unilateral vestibular loss compensates well with training; the exercises must provoke mild, settling symptoms to work.",
    "Dizziness is a leading falls risk factor — vestibular rehabilitation is falls prevention, and red flags (new severe headache, central signs) must be screened first.",
  ],
  sections: [
    {
      slug: "anatomy-function",
      title: "Vestibular Anatomy & Function",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "The vestibular labyrinth sits in each inner ear beside the cochlea. Three semicircular canals (anterior, posterior, horizontal), set roughly at right angles, sense angular head rotation; the two otolith organs (utricle and saccule) carry crystals of calcium carbonate — otoconia — embedded in a membrane, and sense linear acceleration and the pull of gravity.",
        },
        { kind: "image", illustration: "inner-ear", caption: "The inner ear: three semicircular canals detect head rotation while the utricle and saccule detect linear acceleration and gravity; their signals drive the vestibulo-ocular reflex and balance." },
        {
          kind: "cards",
          items: [
            { title: "Vestibulo-ocular reflex (VOR)", text: "Rotating the head drives the eyes an equal amount the opposite way, keeping gaze locked on target. It is the fastest reflex in the body — vision alone is far too slow to stabilise gaze during walking.", icon: "eye" },
            { title: "Vestibulo-spinal reflexes", text: "Vestibular signals adjust postural muscle activity to keep the head and body upright — one of the three sensory pillars of balance.", icon: "person-standing" },
            { title: "Three balance senses", text: "Balance integrates vision, somatosensation (proprioception, feet) and vestibular input. The vestibular signal is the referee when vision and proprioception disagree — on a moving bus, on foam, in the dark.", icon: "scale" },
            { title: "Push-pull pairing", text: "The two labyrinths fire tonically and work in push-pull: turning left increases left-side firing and decreases right. A sudden unilateral loss therefore mimics constant rotation — the brain reads asymmetry as spin.", icon: "git-compare" },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Canals = rotation; otoliths (utricle/saccule) = linear acceleration and gravity",
            "VOR gain of ~1 keeps the world stable during head movement; its failure causes gaze instability and oscillopsia",
            "Acute asymmetry between the two sides — not absolute loss — is what produces vertigo and nystagmus",
          ],
        },
        {
          kind: "pearls",
          items: [
            "The brain compensates for asymmetry centrally over days to weeks — this 'central compensation' is precisely what vestibular exercises accelerate.",
          ],
        },
      ],
    },
    {
      slug: "peripheral-vs-central",
      title: "Peripheral vs Central Disorders",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "The first sorting question in any dizzy patient: is the problem in the labyrinth or vestibular nerve (peripheral), or in the brainstem and cerebellum (central)? The distinction changes urgency, prognosis and treatment.",
        },
        {
          kind: "table",
          headers: ["Feature", "Peripheral (labyrinth / nerve)", "Central (brainstem / cerebellum)"],
          rows: [
            ["Common causes", "BPPV, vestibular neuritis, labyrinthitis, Menière's disease", "Stroke/TIA, vestibular migraine, MS plaques, tumour (acoustic neuroma at the margin)"],
            ["Vertigo character", "Often intense, rotatory, movement-sensitive", "May be milder but persistent; imbalance often out of proportion to vertigo"],
            ["Nystagmus", "Unidirectional, horizontal-torsional, suppressed by visual fixation", "May be direction-changing, pure vertical or pure torsional; not suppressed by fixation"],
            ["Hearing / ear symptoms", "May coexist (labyrinthitis, Menière's: hearing loss, tinnitus, fullness)", "Usually absent; instead look for diplopia, dysarthria, dysphagia, weakness, numbness, ataxia"],
            ["Recovery", "Good — compensation and rehab are effective", "Depends on cause; central signs demand urgent medical work-up first"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "Severe vertigo with an inability to stand or walk unaided is a central warning sign — peripheral patients are usually miserable but can still stagger.",
            "'Dizziness' means different things: clarify vertigo (spinning), presyncope (faintness), disequilibrium (unsteadiness) or light-headedness before anything else.",
          ],
        },
      ],
    },
    {
      slug: "bppv",
      title: "BPPV: Mechanism, Dix-Hallpike & Epley",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Benign paroxysmal positional vertigo is the most common vestibular disorder. Otoconia dislodged from the utricle fall into a semicircular canal — the posterior canal in the great majority — where they move under gravity with position changes (canalithiasis). The drifting crystals drag endolymph, falsely stimulating the canal and producing brief intense vertigo whenever the head moves into the provoking plane: rolling over in bed, looking up, bending down.",
        },
        {
          kind: "keypoints",
          title: "The BPPV signature",
          items: [
            "Brief attacks — seconds, typically under a minute — always triggered by position change",
            "Classic triggers: turning in bed, lying down, looking up to a shelf, bending forward",
            "No hearing loss, no persistent symptoms between attacks (though many report residual unsteadiness)",
            "Common after 50, after head trauma, and after vestibular neuritis; recurrence is frequent",
          ],
        },
        {
          kind: "steps",
          items: [
            { title: "Dix-Hallpike test — position", text: "Patient long-sitting on the plinth, head turned 45° towards the side being tested. Warn them vertigo may occur and ask them to keep their eyes open." },
            { title: "Dix-Hallpike test — movement", text: "Holding the head, bring the patient briskly back to lying with the neck extended about 20–30° over the end of the plinth, keeping the 45° rotation. Watch the eyes for up to 30–60 seconds." },
            { title: "Dix-Hallpike test — interpretation", text: "Posterior-canal BPPV: after a latency of a few seconds, torsional up-beating nystagmus with vertigo, building then fading within about a minute, and fatiguing on repetition. The lowermost ear is the affected side." },
          ],
        },
        {
          kind: "steps",
          items: [
            { title: "Epley manoeuvre — step 1", text: "From the positive Dix-Hallpike position (head 45° to the affected side, neck slightly extended), wait until the nystagmus and vertigo settle — usually 30 seconds to a minute in each position." },
            { title: "Step 2", text: "Rotate the head 90° to face 45° towards the unaffected side, keeping the neck extended." },
            { title: "Step 3", text: "Ask the patient to roll onto the unaffected shoulder while you turn the head a further 90°, so the nose points about 45° towards the floor." },
            { title: "Step 4", text: "Bring the patient up to sitting over the side of the plinth, head still turned, then gently straighten the head. The sequence walks the otoconia around the canal and back into the utricle, where they no longer cause symptoms." },
          ],
        },
        {
          kind: "warning",
          title: "Repositioning practicalities",
          items: [
            "Screen the neck first — the manoeuvres involve rotation and extension; adapt positioning (or use side-lying alternatives) for cervical restrictions and vascular risk factors",
            "Warn the patient vertigo and sometimes nausea will occur briefly during testing and treatment",
            "Expect success within one to three sessions for posterior-canal BPPV; persistent atypical nystagmus should prompt reassessment of canal, side and diagnosis",
            "Horizontal-canal BPPV produces horizontal nystagmus in the supine roll test and needs different manoeuvres (e.g. BBQ roll / Gufoni)",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Latency, brief duration and fatigability are the fingerprints of benign positional nystagmus — nystagmus that starts instantly and never fades should raise a central question.",
            "Residual light-headedness for a few days after successful repositioning is common; brief balance exercises mop it up.",
          ],
        },
      ],
    },
    {
      slug: "neuritis-labyrinthitis",
      title: "Vestibular Neuritis & Labyrinthitis",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Vestibular neuritis is an acute (probably viral or post-viral) inflammation of the vestibular nerve: sudden severe constant vertigo with nausea, vomiting and unsteadiness lasting days, without hearing loss. When the labyrinth itself is involved and hearing is also affected, the label is labyrinthitis.",
        },
        {
          kind: "steps",
          items: [
            { title: "Acute days (0–3)", text: "Constant vertigo with unidirectional nystagmus beating away from the affected ear. Medical anti-emetics briefly; vestibular sedatives are for the shortest possible time because they delay central compensation." },
            { title: "Early recovery", text: "As the storm settles, start graded vestibular exercises: gaze stability, head movement, standing balance and walking. Movement is medicine — symptoms provoked mildly and settling are the training stimulus." },
            { title: "Compensation phase", text: "Most people improve substantially over weeks as the CNS recalibrates to the asymmetry. Persisting dizziness usually reflects incomplete compensation (often through avoidance) — the core indication for a structured vestibular rehab programme." },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Neuritis: vertigo for days, no hearing change; labyrinthitis: the same plus hearing loss/tinnitus",
            "Distinguish from Menière's disease: recurrent spontaneous attacks lasting 20 minutes to hours, with fluctuating hearing loss, tinnitus and aural fullness",
            "Prolonged bed rest and long-term vestibular suppressants are the two great enemies of compensation",
          ],
        },
        {
          kind: "pearls",
          items: [
            "About half of BPPV-after-neuritis is picked up only if you look — re-test Dix-Hallpike in the recovering neuritis patient whose symptoms become positional.",
          ],
        },
      ],
    },
    {
      slug: "assessment",
      title: "Assessment: History Is King",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "No area of physiotherapy rewards the history more richly than dizziness. Two questions — how long does an episode last, and what sets it off — sort the majority of patients before any physical test.",
        },
        {
          kind: "table",
          headers: ["Duration of episodes", "Triggered by", "Think of"],
          rows: [
            ["Seconds (< 1 minute)", "Position change (rolling in bed, looking up, bending)", "BPPV"],
            ["20 minutes to hours", "Spontaneous, with hearing loss / tinnitus / fullness", "Menière's disease"],
            ["Days, constant", "Spontaneous onset, often post-viral", "Vestibular neuritis (add hearing loss = labyrinthitis)"],
            ["Minutes (spontaneous, recurrent)", "Often none; may have headache, photophobia, visual aura", "Vestibular migraine — or TIA: vascular risk factors demand medical review"],
            ["Constant rocking / swaying, months", "Worse with visual motion, busy environments", "Persistent postural-perceptual dizziness (PPPD) concept"],
          ],
        },
        {
          kind: "steps",
          items: [
            { title: "Oculomotor screen", text: "Observe for spontaneous and gaze-evoked nystagmus (with and without fixation where possible), smooth pursuit, saccades, and VOR cancellation. Pure vertical or direction-changing nystagmus and grossly abnormal pursuit/saccades point centrally." },
            { title: "Head impulse test (concept)", text: "A rapid small head turn while the patient fixes your nose: an intact VOR keeps the eyes on target; in peripheral loss the eyes are dragged with the head and make a visible catch-up saccade — an abnormal (positive) test paradoxically reassures, indicating a peripheral lesion." },
            { title: "HINTS concept (acute constant vertigo)", text: "Head Impulse, Nystagmus, Test of Skew. The dangerous combination is a NORMAL head impulse, direction-changing nystagmus, or vertical skew deviation on cover test — any of these suggests stroke and outperforms early MRI in trained hands. Benign pattern: abnormal impulse + unidirectional nystagmus + no skew." },
            { title: "Positional testing", text: "Dix-Hallpike both sides (and supine roll test for horizontal canal) whenever the story is positional." },
            { title: "Balance & function", text: "Romberg and tandem stance, on floor and foam with eyes open/closed (vestibular-dependent conditions), gait with head turns, Functional Gait Assessment concept; symptom impact via the Dizziness Handicap Inventory concept." },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Standing on foam with eyes closed removes vision and degrades proprioception — the patient who falls in exactly and only this condition is telling you the vestibular pillar is weak.",
            "Match the test to the story: positional story → Dix-Hallpike; continuous acute vertigo → HINTS thinking; episodic spontaneous attacks → history and onward referral do the diagnostic work.",
          ],
        },
      ],
    },
    {
      slug: "rehab-principles",
      title: "Vestibular Rehabilitation Principles & Exercises",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Vestibular rehabilitation is exercise-based recalibration of the brain. Four mechanisms are harnessed: adaptation (retuning VOR gain through retinal-slip error signals), habituation (repeated graded exposure reduces the response to provoking movements), substitution (training alternative strategies and senses), and balance-gait retraining under vestibular-demanding conditions.",
        },
        {
          kind: "exercise",
          name: "Gaze stability — VOR x1",
          purpose: "Drive vestibular adaptation: the small retinal slip during head movement on a fixed target is the error signal that retunes VOR gain after unilateral loss.",
          position: "Sitting, holding a business-card-sized target with a letter at arm's length, eyes fixed on it.",
          execution: "Turn the head side to side (then up-down in separate sets) as fast as the letter stays in focus. If the letter blurs, slow down; if it is easy, speed up. Mild dizziness that settles within about 15–20 minutes after exercising is the intended dose.",
          dosage: "1–2 minutes per direction, 3–5 times daily (accumulating 12+ minutes/day in unilateral loss).",
          progression: "Faster head movement, standing, feet together, on foam, walking; then VOR x2 (target and head moving opposite ways) for higher demand.",
          precautions: "Symptoms should return to baseline within 15–30 minutes; prolonged flare-ups mean reduce speed or duration, not abandon.",
        },
        {
          kind: "exercise",
          name: "Habituation movements",
          purpose: "Reduce movement-provoked dizziness by repeated, graded exposure to the specific movements that provoke it.",
          position: "Sitting or standing with support nearby, having identified the two to four most provoking movements (e.g. bending to the floor, turning quickly, looking up).",
          execution: "Perform the provoking movement enough to produce mild-to-moderate symptoms, rest until symptoms settle, and repeat 3–5 times per movement.",
          dosage: "2–3 sessions daily; expect meaningful reduction over 2–4 weeks.",
          progression: "Increase speed and range, combine movements, reduce support.",
          precautions: "Provoke mildly, not maximally — flooding the system breeds avoidance; symptoms must settle between repetitions.",
        },
        {
          kind: "exercise",
          name: "Static balance progression",
          purpose: "Rebuild vestibular contribution to standing balance by systematically removing visual and somatosensory crutches.",
          position: "Standing in a corner or at a bench for safety.",
          execution: "Hold each condition up to 30 seconds: feet apart then together, firm surface then foam, eyes open then closed — progressing towards the vestibular-critical condition of foam with eyes closed. Add head turns once stable.",
          dosage: "5–10 minutes daily.",
          progression: "Semi-tandem and tandem stance, single leg, head movements in all conditions, reaching outside the base.",
          precautions: "Always with a wall, corner or supervision — this training deliberately approaches the edge of stability.",
        },
        {
          kind: "exercise",
          name: "Dynamic gait with head turns",
          purpose: "Train the walking-while-looking demands of real life — scanning a supermarket shelf or checking traffic — which are the classic residual complaints.",
          position: "A clear corridor or gym track, supervision or wall within reach initially.",
          execution: "Walk at a steady pace turning the head left and right every 2–3 steps, keeping the path straight; separate sets with up-down head movement.",
          dosage: "3–5 passes of 10–20 metres per direction, daily.",
          progression: "Faster walking and head turns, narrow base ('tightrope'), stopping and pivoting on cue, busy visual environments, carrying objects.",
          precautions: "Path deviation is expected early — guard accordingly and progress by keeping deviation, not avoiding challenge.",
        },
        {
          kind: "keypoints",
          title: "Dosing philosophy",
          items: [
            "Symptoms are the stimulus: exercises that provoke nothing retrain nothing",
            "Mild-to-moderate provocation, settling within 15–30 minutes, repeated often — that is the therapeutic window",
            "Match mechanism to problem: gaze instability → adaptation; movement-provoked dizziness → habituation; bilateral loss → substitution emphasis; falls → balance-gait conditions",
            "In bilateral vestibular loss, adaptation has less to work with — lean on substitution (saccadic strategies, somatosensory and visual cues) and safety education (night lights, care swimming underwater)",
          ],
        },
      ],
    },
    {
      slug: "central-red-flags",
      title: "Central Causes & Red Flags",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Most dizziness is benign, but the cerebellum and brainstem share arteries with the labyrinth's supply — posterior-circulation stroke can present as isolated vertigo. The physiotherapist assessing dizzy patients is a screening clinician first.",
        },
        {
          kind: "redflags",
          items: [
            "Acute vertigo with any of the 'dangerous Ds': diplopia, dysarthria, dysphagia, dysmetria, or new weakness/numbness — posterior-circulation stroke until proven otherwise",
            "HINTS central pattern in acute constant vertigo: normal head impulse test, direction-changing or pure vertical nystagmus, or skew deviation",
            "New severe or unusual headache with vertigo — especially sudden 'worst-ever' or occipital — consider haemorrhage or dissection (neck pain + vertigo after trauma or manipulation: vertebral artery dissection)",
            "Inability to stand or walk unaided with acute vertigo — out of proportion to peripheral presentations",
            "Progressive unilateral hearing loss with imbalance — consider acoustic neuroma; new-onset vertigo with fluctuating deafness needs ENT review",
            "Positional nystagmus that is atypical: no latency, non-fatiguing, pure vertical or lasting as long as the position is held",
          ],
        },
        {
          kind: "pearls",
          items: [
            "The frightening irony of the head impulse test: a NORMAL result in acute constant vertigo is the worrying finding, because it means the peripheral VOR is intact — so the lesion is central.",
            "When in doubt in acute vertigo, treat it as vascular: urgent medical referral costs little; a missed cerebellar stroke can cost a life.",
          ],
        },
      ],
    },
    {
      slug: "falls-prevention",
      title: "The Falls Prevention Link",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Dizziness and vestibular dysfunction are major, under-recognised contributors to falls in older adults — unrecognised BPPV is found in a meaningful proportion of older people presenting with falls or 'unsteadiness' who never mention vertigo. Treating the vestibular problem is often the single highest-yield falls intervention available.",
        },
        {
          kind: "keypoints",
          items: [
            "Ask every faller about positional dizziness and test Dix-Hallpike when the story fits — older adults often report unsteadiness rather than spinning",
            "Combine vestibular rehabilitation with standard falls programming: strength, reactive balance, home hazards, vision and medication review",
            "Fear of movement after vertigo breeds avoidance, deconditioning and worse balance — graded exposure treats the fear and the physiology together",
            "Progress balance training into the conditions where falls happen: head turns, dim light, uneven ground, dual tasks",
          ],
        },
        {
          kind: "pearls",
          items: [
            "An Epley manoeuvre that abolishes an older person's positional vertigo may do more for their falls risk in ten minutes than months of generic balance classes.",
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
            "Canals sense rotation, otoliths sense gravity/linear acceleration; VOR keeps gaze stable; acute asymmetry = vertigo",
            "History sorts dizziness: seconds + positional = BPPV; 20 min–hours + ear symptoms = Menière's; days + constant = neuritis",
            "BPPV: canalithiasis (usually posterior canal) → Dix-Hallpike to diagnose (latent, torsional, fatiguing nystagmus) → Epley to treat",
            "Neuritis: days of vertigo, no hearing loss; early movement and vestibular exercises drive compensation — minimise sedatives and bed rest",
            "HINTS in acute constant vertigo: normal head impulse, direction-changing/vertical nystagmus, or skew = central = emergency",
            "Rehab mechanisms: adaptation (VOR x1 gaze stability), habituation (graded exposure), substitution, balance-gait retraining",
            "Dose by symptoms: mild provocation settling within 15–30 minutes, several times daily",
            "Dizziness is a falls-risk headline: screen fallers for BPPV, and train balance under vestibular-demanding conditions",
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
      text: "Which structures of the inner ear detect angular rotation of the head?",
      options: ["The utricle and saccule", "The three semicircular canals", "The cochlea", "The Eustachian tube"],
      correctIndex: 1,
      explanation:
        "The three semicircular canals — anterior, posterior and horizontal, arranged roughly at right angles — sense angular (rotational) head movement. The otolith organs (utricle and saccule) sense linear acceleration and gravity, the cochlea serves hearing, and the Eustachian tube equalises middle-ear pressure.",
      difficulty: "Easy",
      tags: ["anatomy"],
      sectionSlug: "anatomy-function",
    },
    {
      text: "The function of the vestibulo-ocular reflex is to:",
      options: [
        "Keep the eyes still during sleep",
        "Move the eyes opposite to head rotation so gaze stays stable on a target",
        "Produce tears during vertigo",
        "Constrict the pupils in bright light",
      ],
      correctIndex: 1,
      explanation:
        "The VOR rotates the eyes equal and opposite to head movement, holding the image stable on the retina — essential because visual tracking alone is far too slow for the head movements of everyday walking. Reduced VOR gain causes gaze instability and oscillopsia (the world bouncing during movement), the target of adaptation exercises.",
      difficulty: "Easy",
      tags: ["anatomy", "pathology"],
      sectionSlug: "anatomy-function",
    },
    {
      text: "A 62-year-old reports intense spinning lasting about 30 seconds each time she rolls over in bed or looks up to hang washing. Between episodes she feels almost normal. The most likely diagnosis is:",
      options: ["Menière's disease", "Vestibular neuritis", "Benign paroxysmal positional vertigo", "Vestibular migraine"],
      correctIndex: 2,
      explanation:
        "Seconds-long vertigo strictly triggered by position change — rolling in bed, looking up, bending — is the BPPV signature. Menière's attacks last 20 minutes to hours with hearing symptoms; neuritis causes constant vertigo for days; vestibular migraine causes spontaneous episodes of minutes to hours, often with headache or photophobia.",
      difficulty: "Easy",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "assessment",
    },
    {
      text: "The mechanism of typical posterior-canal BPPV is:",
      options: [
        "Inflammation of the vestibular nerve",
        "Otoconia displaced from the utricle moving within the canal and dragging endolymph on position change (canalithiasis)",
        "Excess endolymph pressure in the whole labyrinth",
        "Demyelination of central vestibular pathways",
      ],
      correctIndex: 1,
      explanation:
        "In canalithiasis, calcium carbonate crystals (otoconia) that normally weight the utricular membrane fall into a semicircular canal — the posterior canal in most cases, being the most gravity-dependent. When head position changes, the crystals sink through the canal, dragging endolymph and falsely signalling rotation — brief vertigo with each provoking movement. Nerve inflammation is neuritis; endolymph pressure describes Menière's.",
      difficulty: "Medium",
      tags: ["pathology", "anatomy"],
      sectionSlug: "bppv",
    },
    {
      text: "Which nystagmus pattern on Dix-Hallpike testing is typical of posterior-canal BPPV?",
      options: [
        "Immediate, pure vertical, non-fatiguing nystagmus lasting as long as the position is held",
        "Torsional up-beating nystagmus appearing after a few seconds' latency, resolving within about a minute, and fatiguing on repetition",
        "Direction-changing horizontal nystagmus on left and right gaze",
        "No nystagmus is ever seen in BPPV",
      ],
      correctIndex: 1,
      explanation:
        "Benign positional nystagmus has three fingerprints: latency of a few seconds (crystals take time to start moving), transience (it fades as the crystals settle, usually under a minute), and fatigability with repeated testing. Torsional-upbeating is the posterior canal's signature. Instant-onset, persistent or pure vertical nystagmus raises central suspicion.",
      difficulty: "Hard",
      tags: ["special-tests", "assessment"],
      sectionSlug: "bppv",
    },
    {
      text: "The Epley manoeuvre works by:",
      options: [
        "Habituating the brain to vertigo through repeated provocation",
        "Using a sequence of head positions to move displaced otoconia around the canal and back into the utricle",
        "Strengthening the neck muscles",
        "Dissolving the otoconia with heat",
      ],
      correctIndex: 1,
      explanation:
        "The Epley (canalith repositioning) manoeuvre is mechanical: each position lets gravity carry the crystals a step further around the posterior canal until they drop back into the utricle, where their movement no longer stimulates a canal. That is why it can abolish BPPV in one to three sessions — it removes the cause rather than training tolerance.",
      difficulty: "Easy",
      tags: ["management", "special-tests"],
      sectionSlug: "bppv",
    },
    {
      text: "Before performing Dix-Hallpike or Epley manoeuvres, the physiotherapist should specifically:",
      options: [
        "Check blood glucose",
        "Screen the cervical spine (rotation-extension tolerance, vascular risk) and warn the patient that brief vertigo and possibly nausea are expected",
        "Ask the patient to fast for 12 hours",
        "Measure grip strength",
      ],
      correctIndex: 1,
      explanation:
        "Both manoeuvres combine cervical rotation with extension, so restrictions, instability risks and vertebrobasilar considerations should be screened and positions adapted (side-lying alternatives exist). Preparing the patient for transient vertigo prevents alarm and abandonment mid-manoeuvre. The other options are irrelevant to positional testing.",
      difficulty: "Medium",
      tags: ["precautions", "special-tests"],
      sectionSlug: "bppv",
    },
    {
      text: "A patient presents with sudden constant vertigo, nausea and unsteadiness for three days, with no hearing change and no other neurological symptoms. Which management principle applies once the acute phase settles?",
      options: [
        "Strict bed rest and vestibular sedatives for six weeks",
        "Early graded movement and vestibular exercises to accelerate central compensation, minimising sedative use",
        "Immediate Epley manoeuvre daily",
        "Avoid all head movement for a month",
      ],
      correctIndex: 1,
      explanation:
        "This story fits vestibular neuritis. Central compensation for the sudden unilateral loss is experience-dependent: it requires movement and the very error signals that provoke mild symptoms. Prolonged bed rest and long-term vestibular suppressants delay recovery. The Epley treats BPPV, a different mechanism — though BPPV can follow neuritis and should be tested for if symptoms become positional.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "neuritis-labyrinthitis",
    },
    {
      text: "Recurrent spontaneous vertigo attacks lasting one to three hours, with fluctuating hearing loss, tinnitus and a feeling of fullness in one ear, suggest:",
      options: ["BPPV", "Menière's disease", "Bilateral vestibular loss", "Cervicogenic dizziness"],
      correctIndex: 1,
      explanation:
        "The Menière's tetrad is episodic vertigo (classically 20 minutes to hours), fluctuating low-frequency hearing loss, tinnitus and aural fullness, attributed to endolymphatic hydrops. Duration and the aural symptoms distinguish it from seconds-long positional BPPV and days-long neuritis. Suspected Menière's warrants ENT referral for diagnosis and medical management.",
      difficulty: "Easy",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "assessment",
    },
    {
      text: "In a patient with acute constant vertigo, which HINTS finding suggests a CENTRAL (stroke) cause?",
      options: [
        "An abnormal head impulse test with catch-up saccade",
        "Unidirectional horizontal nystagmus suppressed by fixation",
        "A normal head impulse test, direction-changing nystagmus, or vertical skew deviation",
        "Nausea and vomiting",
      ],
      correctIndex: 2,
      explanation:
        "HINTS = Head Impulse, Nystagmus, Test of Skew. Peripheral (reassuring) pattern: abnormal head impulse (catch-up saccade), unidirectional nystagmus, no skew. Central (dangerous) pattern: NORMAL head impulse (the VOR is intact because the lesion is not peripheral), direction-changing or vertical nystagmus, or skew deviation — any one of these in acute vestibular syndrome demands emergency work-up. Nausea occurs in both.",
      difficulty: "Hard",
      tags: ["special-tests", "clinical-reasoning"],
      sectionSlug: "assessment",
    },
    {
      text: "Why is a NORMAL head impulse test worrying in acute constant vertigo?",
      options: [
        "It indicates the patient is not really dizzy",
        "An intact peripheral VOR means the vertigo is not explained by a peripheral lesion — pointing to a central cause such as cerebellar stroke",
        "It means both labyrinths have failed",
        "It predicts BPPV",
      ],
      correctIndex: 1,
      explanation:
        "The head impulse test probes the peripheral VOR. In vestibular neuritis the test is abnormal (the eyes slip and make a catch-up saccade) — lesion found, benign. If the patient has severe ongoing vertigo yet the peripheral reflex works normally, the generator must lie centrally, in the brainstem or cerebellum — an emergency until stroke is excluded.",
      difficulty: "Hard",
      tags: ["special-tests", "clinical-reasoning"],
      sectionSlug: "central-red-flags",
    },
    {
      text: "Gaze-stability (VOR x1) exercises drive recovery through which mechanism?",
      options: [
        "Habituation to repeated vertigo",
        "Adaptation — retinal slip during head movement on a fixed target is the error signal that retunes VOR gain",
        "Strengthening of the extraocular muscles",
        "Repositioning of otoconia",
      ],
      correctIndex: 1,
      explanation:
        "In VOR x1, the patient keeps a target in focus while moving the head; the slight retinal slip generated by the underperforming reflex is precisely the error signal the cerebellum and brainstem use to recalibrate VOR gain — adaptation. Habituation is a different mechanism (response decline with repeated exposure), used for movement-provoked dizziness; repositioning treats BPPV.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "pathology"],
      sectionSlug: "rehab-principles",
    },
    {
      text: "The appropriate symptom response to a vestibular exercise session is:",
      options: [
        "No symptoms whatsoever — any dizziness means stop the programme",
        "Mild-to-moderate dizziness that settles back to baseline within about 15–30 minutes",
        "Severe symptoms lasting the rest of the day, to maximise the stimulus",
        "Symptoms are unrelated to effectiveness",
      ],
      correctIndex: 1,
      explanation:
        "Symptom provocation is the training stimulus in vestibular rehab — exercises that provoke nothing retrain nothing. The therapeutic window is mild-to-moderate provocation settling within roughly 15–30 minutes, repeated several times daily. Prolonged flare-ups mean the dose (speed, duration, condition) was too high and should be trimmed, not abandoned.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "rehab-principles",
    },
    {
      text: "Standing on foam with eyes closed is a key test and training condition because it:",
      options: [
        "Is the easiest possible balance condition",
        "Removes vision and degrades foot proprioception, forcing reliance on the vestibular system",
        "Tests only ankle strength",
        "Eliminates the need for supervision",
      ],
      correctIndex: 1,
      explanation:
        "Balance draws on vision, somatosensation and vestibular input. Eye closure removes vision; the compliant foam corrupts ankle proprioceptive feedback; what remains to organise posture is chiefly vestibular. Patients who are stable in every other condition but fail here reveal a weak vestibular pillar — and the same condition, guarded, becomes the training exercise.",
      difficulty: "Medium",
      tags: ["assessment", "exercise-therapy"],
      sectionSlug: "rehab-principles",
    },
    {
      text: "In BILATERAL vestibular loss, rehabilitation places greater emphasis on:",
      options: [
        "Epley manoeuvres on both sides",
        "Substitution strategies (saccadic eye movement strategies, enhancing visual and somatosensory cues) and safety education, because adaptation has little residual function to retune",
        "Complete avoidance of head movement",
        "Vestibular sedatives long-term",
      ],
      correctIndex: 1,
      explanation:
        "Adaptation exercises retune remaining vestibular function — scarce in bilateral loss. Management therefore leans on substitution: preprogrammed saccades to targets before head turns, maximising somatosensory and visual information, and safety education for the dangerous conditions (darkness, uneven ground, swimming underwater where orientation cues vanish). Gains are slower but meaningful.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "rehab-principles",
    },
    {
      text: "Acute vertigo accompanied by new severe occipital headache and neck pain days after a rear-end collision should raise concern about:",
      options: [
        "Typical BPPV",
        "Vertebral artery dissection — urgent medical assessment, no cervical manoeuvres",
        "Menière's disease",
        "Simple whiplash requiring exercise only",
      ],
      correctIndex: 1,
      explanation:
        "Vertigo with new severe head/neck pain after neck trauma is vertebral artery dissection until excluded — a stroke-in-evolution scenario where cervical rotation-extension manoeuvres (Dix-Hallpike, Epley, manual techniques) are contraindicated and urgent vascular imaging is required. BPPV can follow trauma, but the headache-neck pain combination changes the priority entirely.",
      difficulty: "Hard",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "central-red-flags",
    },
    {
      text: "Which statement about dizziness and falls in older adults is most accurate?",
      options: [
        "Older adults with BPPV always describe classic spinning vertigo",
        "Unrecognised BPPV is found in a meaningful share of older fallers who report only 'unsteadiness' — so positional testing belongs in falls assessment when the story fits",
        "Vestibular problems are irrelevant to falls",
        "Balance classes make vestibular testing unnecessary",
      ],
      correctIndex: 1,
      explanation:
        "Older adults often under-report or reinterpret vertigo as unsteadiness or light-headedness, and unrecognised BPPV is repeatedly found when older fallers are actually tested. Since repositioning is quick and effective, asking about positional symptoms and performing Dix-Hallpike where appropriate is among the highest-yield actions in a falls assessment.",
      difficulty: "Easy",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "falls-prevention",
    },
    {
      text: "A patient avoids all head movement since an episode of neuritis three months ago and remains dizzy with any quick turn. The best explanation and plan is:",
      options: [
        "The nerve is still inflamed — prescribe prolonged rest",
        "Avoidance has prevented central compensation; graded habituation and gaze-stability exercises with education should now drive recovery",
        "They have developed Menière's disease",
        "Dizziness three months after neuritis is untreatable",
      ],
      correctIndex: 1,
      explanation:
        "Compensation is experience-dependent: by avoiding the movements that provoke symptoms, the patient has denied the brain the error signals it needs to recalibrate, leaving them chronically symptomatic — a very common and very treatable presentation. A structured programme of graded habituation, VOR adaptation work and balance retraining, with clear education that provoked-and-settling symptoms are therapeutic, typically succeeds even months or years later.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "exercise-therapy"],
      sectionSlug: "neuritis-labyrinthitis",
    },
    {
      text: "Which nystagmus feature suggests a CENTRAL rather than peripheral cause?",
      options: [
        "Unidirectional horizontal-torsional nystagmus suppressed by visual fixation",
        "Pure vertical or direction-changing nystagmus that is not suppressed by fixation",
        "Nystagmus with a few seconds' latency that fatigues on repeat testing",
        "Nystagmus beating away from the affected ear in neuritis",
      ],
      correctIndex: 1,
      explanation:
        "Peripheral nystagmus is typically unidirectional (fast phase away from the affected ear), horizontal-torsional, and damped by visual fixation; positional forms show latency and fatigability. Pure vertical nystagmus, nystagmus that changes direction with gaze, and nystagmus unaffected by fixation point to brainstem or cerebellar pathology and warrant medical referral.",
      difficulty: "Medium",
      tags: ["assessment", "special-tests"],
      sectionSlug: "peripheral-vs-central",
    },
  ],
  flashcards: [
    { front: "What do the semicircular canals and otolith organs each detect?", back: "Canals: angular head rotation (three planes). Otoliths (utricle and saccule, carrying otoconia): linear acceleration and gravity." },
    { front: "Duration rule of thumb for dizziness diagnosis?", back: "Seconds + positional = BPPV; 20 minutes–hours + ear symptoms = Menière's; days of constant vertigo = vestibular neuritis (with hearing loss = labyrinthitis)." },
    { front: "Mechanism of BPPV?", back: "Canalithiasis: otoconia displaced from the utricle into a semicircular canal (usually posterior) sink with position change, dragging endolymph and falsely signalling rotation — brief positional vertigo." },
    { front: "Positive Dix-Hallpike findings for posterior-canal BPPV?", back: "After a few seconds' latency: torsional up-beating nystagmus with vertigo, fading within ~1 minute, fatiguing on repetition; the lowermost ear is the affected side." },
    { front: "How does the Epley manoeuvre work?", back: "A sequence of head positions uses gravity to walk the otoconia around the posterior canal and back into the utricle — removing the cause; often successful in 1–3 sessions." },
    { front: "Vestibular neuritis vs labyrinthitis?", back: "Both: acute constant vertigo for days, often post-viral. Neuritis spares hearing; labyrinthitis adds hearing loss/tinnitus. After the acute days: movement and exercises, not rest and sedatives." },
    { front: "HINTS exam — the central (dangerous) pattern?", back: "Normal head impulse test, direction-changing or pure vertical nystagmus, or skew deviation on cover test — any one suggests stroke in acute constant vertigo." },
    { front: "The four mechanisms of vestibular rehabilitation?", back: "Adaptation (VOR gain retuning via gaze-stability exercises), habituation (graded repeated exposure), substitution (alternative strategies/senses), and balance-gait retraining." },
    { front: "How is VOR x1 performed and dosed?", back: "Eyes fixed on a target at arm's length, head turning as fast as the target stays clear; 1–2 min per direction, 3–5×/day, building to 12+ min daily in unilateral loss." },
    { front: "The symptom-dosing rule for vestibular exercises?", back: "Provoke mild-to-moderate symptoms that settle to baseline within 15–30 minutes; no provocation = no stimulus; prolonged flare = reduce dose." },
    { front: "Why does standing on foam with eyes closed isolate the vestibular system?", back: "Eye closure removes vision and foam degrades foot proprioception, leaving vestibular input as the main source of postural information." },
    { front: "Red flags in the dizzy patient?", back: "The dangerous Ds (diplopia, dysarthria, dysphagia, dysmetria), new weakness, inability to stand, HINTS central pattern, new severe headache or neck pain (dissection), atypical positional nystagmus." },
  ],
};

export default topic;
