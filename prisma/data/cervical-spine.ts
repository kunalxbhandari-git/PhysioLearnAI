import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "cervical-spine",
  title: "Neck Pain & Cervical Spine",
  category: "Musculoskeletal",
  description:
    "Classify and manage neck pain safely — cervical anatomy, mechanical neck pain, radiculopathy, whiplash and cervicogenic headache, with first-class red-flag screening for arterial dysfunction, myelopathy and instability.",
  difficulty: "Intermediate",
  estMinutes: 28,
  icon: "align-vertical-justify-center",
  keyTakeaways: [
    "Neck pain is second only to low back pain among musculoskeletal complaints; most is \"mechanical\" (non-specific) and has a good prognosis with active management.",
    "Safety screening comes first: cervical arterial dysfunction (5 D's and 3 N's), cervical myelopathy, and instability (including rheumatoid arthritis) must be considered before hands-on treatment.",
    "Classify to treat: mechanical neck pain, radiculopathy, whiplash-associated disorders and cervicogenic headache each have distinct features and management emphases.",
    "The neurological screen — myotomes, dermatomes, reflexes — localises radiculopathy; Spurling's test and the distraction test help confirm it.",
    "Staying active beats rest and collars; exercise is the best-supported treatment, with manual therapy as an adjunct.",
    "Deep neck flexor training (craniocervical flexion) targets the endurance deficit consistently found in neck pain and cervicogenic headache.",
    "There is no single \"perfect posture\" — comfort, variability and regular movement matter more than any fixed position.",
    "After whiplash, early reassurance, normal activity and exercise improve outcomes; prolonged collar use worsens them.",
  ],
  sections: [
    {
      slug: "cervical-anatomy",
      title: "Cervical Anatomy Essentials",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "The cervical spine balances a 4–5 kg head on seven vertebrae while permitting the largest range of movement of any spinal region and protecting the spinal cord and vertebral arteries. It divides functionally into the upper cervical spine (occiput–C1–C2), specialised for rotation, and the lower cervical spine (C3–C7), built for flexion/extension and lateral flexion.",
        },
        {
          kind: "image",
          illustration: "spine",
          caption: "The vertebral column with its cervical lordosis. The cervical region combines mobility with protection of the spinal cord and the vertebral arteries, which thread through the transverse foramina of C6 to C1.",
        },
        {
          kind: "cards",
          items: [
            { title: "Atlas & axis (C1–C2)", text: "The ring-shaped atlas rotates around the dens of the axis, producing roughly 50% of cervical rotation. The transverse ligament holds the dens against the anterior arch — its integrity is the crux of upper cervical stability.", icon: "rotate-cw" },
            { title: "Typical vertebrae (C3–C7)", text: "Small bodies, uncovertebral joints, facet joints angled ~45° allowing coupled movement. Facet joints are a common source of mechanical and referred pain, including cervicogenic headache from C2–3.", icon: "layers" },
            { title: "Nerve roots", text: "Eight cervical roots for seven vertebrae: roots exit ABOVE their same-numbered vertebra (C6 root above C6 vertebra at the C5–6 level); C8 exits between C7 and T1. Foraminal narrowing or disc herniation here produces radiculopathy.", icon: "zap" },
            { title: "Vertebral & carotid arteries", text: "The vertebral arteries run through the transverse foramina (C6→C1) then loop around C1 to form the basilar artery — one anatomical reason end-range rotation features in arterial screening. The internal carotids run anteriorly.", icon: "droplet" },
            { title: "Deep stabilisers", text: "Longus colli and longus capitis (deep neck flexors) plus deep extensors (semispinalis cervicis, multifidus) provide segmental control; superficial muscles (SCM, scalenes, upper trapezius) move the head and often become dominant in neck pain.", icon: "anchor" },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Upper cervical spine (O–C1–C2): ~50% of rotation; stability depends on ligaments, especially the transverse ligament",
            "Cervical roots exit above their vertebra; there are 8 cervical roots and 7 vertebrae",
            "Deep neck flexors are endurance stabilisers and consistently underperform in neck pain",
          ],
        },
      ],
    },
    {
      slug: "classification",
      title: "Classification of Neck Pain",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Diagnostic imaging rarely identifies a specific pain source in neck pain, so classification is clinical. A practical scheme distinguishes mechanical (non-specific) neck pain, cervical radiculopathy, whiplash-associated disorders (WAD) and cervicogenic headache — while always screening out serious pathology first.",
        },
        {
          kind: "table",
          headers: ["Category", "Typical features", "Management emphasis"],
          rows: [
            ["Mechanical (non-specific) neck pain", "Aching neck ± referral to shoulder girdle; movement- and posture-related; no neurological deficit", "Reassurance, stay active, exercise, adjunct manual therapy"],
            ["Cervical radiculopathy", "Arm pain in a dermatomal pattern ± pins and needles, numbness, weakness; positive Spurling's, relief with distraction/hand-on-head", "Neuro monitoring, exercise, neural mobilisation, mostly favourable natural history over weeks–months"],
            ["Whiplash-associated disorder (WAD)", "Neck pain after acceleration–deceleration injury (commonly rear-end collision); graded 0–IV (Quebec Task Force)", "Early reassurance, active movement, exercise; avoid collars; screen for poor-prognosis factors"],
            ["Cervicogenic headache", "Unilateral, side-consistent headache referred from upper cervical structures (O–C3, often C2–3 facet); provoked by neck movement/positions; reduced upper cervical ROM", "Upper cervical mobilisation + deep neck flexor and scapular training"],
          ],
        },
        {
          kind: "keypoints",
          items: [
            "WAD grades: 0 no complaints; I pain only; II pain + musculoskeletal signs; III pain + neurological signs; IV fracture/dislocation (medical management)",
            "Cervicogenic headache is side-locked and neck-provoked — differentiating it from migraine and tension-type headache",
            "Radicular arm pain is often worse than the neck pain itself; a dermatomal pattern plus neuro deficit defines radiculopathy",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Degenerative findings (disc desiccation, osteophytes) are near-universal on imaging beyond middle age and correlate poorly with symptoms — classify clinically, image selectively.",
          ],
        },
      ],
    },
    {
      slug: "red-flags-cad-myelopathy",
      title: "Red Flags: CAD, Myelopathy & Instability",
      estMinutes: 4,
      difficulty: "Advanced",
      content: [
        {
          kind: "paragraph",
          text: "Serious pathology masquerading as neck pain is rare but consequential. Three screens are first-class knowledge for every clinician who assesses or treats the neck: cervical arterial dysfunction, cervical myelopathy, and bony or ligamentous instability.",
        },
        {
          kind: "paragraph",
          text: "Cervical arterial dysfunction (CAD) covers pathology of the vertebrobasilar and internal carotid systems — including dissection — which can present as neck pain and headache BEFORE ischaemic events. Classic ischaemic features are remembered as the 5 D's and 3 N's. A new, unfamiliar headache or neck pain with any of these features, particularly after trauma or in a patient with vascular risk factors, is a medical emergency, not a manual therapy candidate.",
        },
        {
          kind: "cards",
          items: [
            { title: "5 D's", text: "Dizziness, Drop attacks, Diplopia (double vision), Dysarthria (slurred speech), Dysphagia (difficulty swallowing).", icon: "alert-octagon" },
            { title: "3 N's", text: "Nausea, Numbness (facial or perioral), Nystagmus. Ataxia/unsteadiness is often added to the cluster.", icon: "alert-triangle" },
            { title: "Carotid clues", text: "Anterolateral neck pain, ipsilateral headache, Horner's syndrome (ptosis, miosis), pulsatile tinnitus, transient monocular visual loss — think internal carotid dissection.", icon: "eye" },
            { title: "When to suspect", text: "Sudden severe \"unlike anything before\" head/neck pain, recent trauma (even minor), connective tissue disorders, vascular risk factors, or symptoms provoked by sustained rotation/extension.", icon: "search" },
          ],
        },
        {
          kind: "paragraph",
          text: "Cervical myelopathy is spinal cord compression, most often degenerative (spondylotic). It develops insidiously: clumsy hands, deteriorating handwriting, difficulty with buttons, gait unsteadiness, and later bladder urgency. Examination shows upper motor neuron signs below the level: hyperreflexia, positive Hoffmann's and Babinski responses, clonus, and a broad-based ataxic gait. Radiculopathy, by contrast, gives lower motor neuron signs in the arm (reduced reflexes, segmental weakness).",
        },
        {
          kind: "redflags",
          items: [
            "Any 5 D's / 3 N's features with neck pain or headache — urgent medical assessment; no manual therapy",
            "Sudden severe unfamiliar neck pain/headache, especially post-trauma — consider arterial dissection",
            "Bilateral hand clumsiness, gait deterioration, hyperreflexia, Hoffmann's/Babinski positive — suspect myelopathy: neurosurgical referral",
            "Rheumatoid arthritis, Down syndrome, recent significant trauma — risk of upper cervical instability: no end-range or high-velocity techniques; imaging before mechanical stress",
            "Instability symptoms: occipital headache, a feeling the head needs supporting, metallic taste/lump in throat sensations described in atlantoaxial compromise, limb paraesthesia with neck movement",
            "Constitutional features: fever, unexplained weight loss, cancer history, night pain — consider infection or malignancy",
          ],
        },
        {
          kind: "warning",
          title: "Rheumatoid arthritis and the upper cervical spine",
          items: [
            "RA can erode the transverse ligament and dens, producing atlantoaxial instability — often clinically silent",
            "Avoid end-range techniques, strong traction and any high-velocity thrust in RA (and Down syndrome, ankylosing spondylitis with fracture risk) unless instability has been excluded",
            "Escalating occipital pain or neurological symptoms in RA warrant imaging and specialist review",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Dizziness on sustained rotation could be vascular, vestibular or cervicogenic — but the 5 D's/3 N's cluster, its timing and its company decide urgency. When in doubt, don't treat — refer.",
          ],
        },
      ],
    },
    {
      slug: "assessment",
      title: "Assessment & Neurological Screen",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Assessment starts with the history (mechanism, red-flag and yellow-flag screening, arm symptoms, headache pattern) and proceeds through observation, active and passive range of movement, a neurological screen whenever symptoms extend beyond the shoulder, and selected special tests.",
        },
        {
          kind: "steps",
          items: [
            { title: "Range of movement", text: "Flexion, extension, rotation (~80° each side), lateral flexion — quantity, quality, symptom response and willingness to move. The flexion-rotation test biases C1–2 rotation for cervicogenic headache assessment." },
            { title: "Neurological screen", text: "Myotomes, dermatomes and reflexes whenever pain, pins and needles or weakness extend into the arm — plus upper motor neuron tests (Hoffmann's, Babinski, clonus) if myelopathy is possible." },
            { title: "Spurling's test", text: "Extension + lateral flexion (± rotation) towards the painful side with gentle axial compression: reproduction of ARM symptoms suggests foraminal/root involvement. Specific but not very sensitive." },
            { title: "Distraction test", text: "Gentle manual axial traction reducing arm symptoms supports radiculopathy — the patient who gets relief resting a hand on their head (shoulder abduction sign) tells the same story." },
            { title: "Upper limb neural tests (ULNT concept)", text: "Sequential shoulder/elbow/wrist positioning tensions the median (ULNT1), radial and ulnar nerve tracts; reproduction of the patient's arm symptoms modified by structural differentiation (e.g. contralateral neck side-flexion) implicates neural tissue mechanosensitivity." },
            { title: "Muscle performance", text: "Craniocervical flexion test with a pressure biofeedback unit (baseline 20 mmHg, targets 22–30 mmHg) assesses deep neck flexor activation and endurance; add scapular control and strength assessment." },
          ],
        },
        {
          kind: "table",
          headers: ["Root", "Myotome (key action)", "Dermatome (key area)", "Reflex"],
          rows: [
            ["C5", "Shoulder abduction (deltoid)", "Lateral upper arm", "Biceps"],
            ["C6", "Elbow flexion / wrist extension", "Thumb and index finger", "Brachioradialis (± biceps)"],
            ["C7", "Elbow extension (triceps)", "Middle finger", "Triceps"],
            ["C8", "Thumb extension / finger flexion", "Little finger, medial forearm", "—"],
            ["T1", "Finger abduction (interossei)", "Medial upper arm", "—"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "A cluster strengthens the diagnosis of radiculopathy: positive Spurling's, positive distraction, positive ULNT1 and rotation under 60° to the involved side together carry far more weight than any single test.",
            "C6–7 is the most commonly affected level — triceps weakness and a dull triceps reflex with middle-finger symptoms is the classic C7 picture.",
          ],
        },
      ],
    },
    {
      slug: "management",
      title: "Management Principles",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Once serious pathology is excluded, the message is confident and active: neck pain has a good prognosis, movement is safe and therapeutic, and treatment is built around exercise with education. Manual therapy (mobilisation, and thrust techniques where appropriately trained, screened and consented) can reduce pain short-term — as an adjunct that buys a window for active work, never as the plan itself.",
        },
        {
          kind: "steps",
          items: [
            { title: "1. Educate & reassure", text: "Explain the good natural history, decouple pain from damage, address fears about \"crumbling discs\" and movement, and set expectations of gradual, fluctuating recovery." },
            { title: "2. Stay active", text: "Continue work and daily activity as normally as possible; modify — don't remove — aggravating tasks. Bed rest and routine collar use delay recovery." },
            { title: "3. Exercise", text: "The best-supported intervention: deep neck flexor and extensor training, scapular control, progressive strengthening, plus general aerobic activity. Dose to irritability and progress steadily." },
            { title: "4. Manual therapy as adjunct", text: "Cervical and thoracic mobilisation/manipulation can provide short-term pain relief and improved ROM — thoracic techniques are a lower-risk complement. Always paired with exercise." },
            { title: "5. Radiculopathy specifics", text: "Most cervical radiculopathy improves conservatively over 6–12 weeks: relative unloading positions early, neural mobilisation, graded strengthening, and monitoring of neuro status. Progressive deficit or intractable pain → specialist referral." },
            { title: "6. Address psychosocial factors", text: "Screen yellow flags (fear-avoidance, catastrophising, work stress, low recovery expectations) — they predict chronicity in neck pain and WAD more than physical findings." },
          ],
        },
        {
          kind: "warning",
          title: "Common management errors",
          items: [
            "Prescribing a soft collar beyond the first days — dependence and deconditioning follow",
            "Treating imaging findings (age-normal degeneration) instead of the clinical picture",
            "Endless passive treatment without a progressive exercise thread",
            "Failing to re-screen neurology in radiculopathy — worsening myotomal weakness changes the pathway",
          ],
        },
        {
          kind: "pearls",
          items: [
            "A worsening neurological deficit, signs of myelopathy, or radicular pain that is unmanageable despite good conservative care are the surgical-opinion triggers for the cervical spine.",
          ],
        },
      ],
    },
    {
      slug: "exercise-therapy",
      title: "Exercise: Deep Neck Flexors & Scapula",
      estMinutes: 5,
      content: [
        {
          kind: "paragraph",
          text: "People with neck pain and cervicogenic headache consistently show impaired deep neck flexor (longus colli/capitis) activation with overactivity of superficial muscles (SCM, scalenes), plus altered scapular control loading the cervical spine through the axioscapular muscles. Training targets precision and endurance first, then strength.",
        },
        {
          kind: "exercise",
          name: "Chin tucks / craniocervical flexion",
          purpose: "Re-activate the deep neck flexors with a precise low-load action — the head-nod of \"yes\", not a neck-crunching retraction.",
          position: "Supine with knees bent, head supported on a thin towel, neutral spine.",
          execution: "Gently nod the chin as if saying a slow \"yes\", feeling the back of the head slide up the towel slightly. The front-of-throat muscles stay soft — no gripping with SCM (check with two fingers on the muscle).",
          dosage: "10 reps with 5–10 second holds, 2–3×/day.",
          progression: "With pressure biofeedback: from 20 mmHg baseline, target and hold 22 → 24 → 26 → 28 → 30 mmHg with a clean pattern.",
          precautions: "It should be effortless-feeling and pain-free — visible superficial muscle activity means the load is too high.",
        },
        {
          kind: "exercise",
          name: "Deep neck flexor endurance with head lift progression",
          purpose: "Progress from activation to endurance and strength so the deep system holds up through the day.",
          position: "Supine; later reclined sitting and upright sitting.",
          execution: "Perform the craniocervical nod, then — as a later progression — maintain the nod while lifting the head 1–2 cm from the support for a controlled hold, lowering without letting the chin poke.",
          dosage: "Holds of 5–10 seconds building towards 10 × 10 s; head-lift progression only when the nod is clean.",
          progression: "Supine → incline → upright and into functional tasks (screen work, driving posture resets).",
          precautions: "Stop the set when the pattern degrades (chin juts, SCM grips); quality is the dose.",
        },
        {
          kind: "exercise",
          name: "Scapular setting with band rows",
          purpose: "Restore axioscapular control — upper trapezius overactivity and weak middle/lower trapezius and serratus anterior alter cervical load.",
          position: "Sitting or standing, resistance band anchored at chest height.",
          execution: "Gently set the scapulae (a light \"back and down\" orientation without rigid bracing), then row the band towards the lower ribs, squeezing the shoulder blades together without shrugging or poking the chin.",
          dosage: "10–12 reps × 3 sets, 3×/week.",
          progression: "Increase band resistance; progress to single-arm rows, prone T/Y raises, and loaded carries.",
          precautions: "Neck stays quiet and breathing continuous; shrugging indicates too much load or fatigue.",
        },
        {
          kind: "exercise",
          name: "Doorway pectoral stretch",
          purpose: "Reduce anterior chest tightness that tethers the scapulae into protraction, complementing the strengthening work.",
          position: "Standing in a doorway, forearm on the frame, elbow at shoulder height, staggered stance.",
          execution: "Step gently forwards until a comfortable stretch is felt across the front of the chest and shoulder — not pins and needles into the arm.",
          dosage: "3 × 30-second holds each side, daily.",
          progression: "Vary elbow height to bias different pectoral fibres.",
          precautions: "Neural symptoms (tingling into the hand) mean reduce the range — the position resembles a neural tension test.",
        },
        {
          kind: "keypoints",
          title: "Progression logic",
          items: [
            "Precision before endurance, endurance before strength, strength before speed/load",
            "Train in the positions that provoke symptoms (desk, driving) once control exists in easy positions",
            "Combine with general aerobic exercise — it independently helps neck pain",
            "Expect 6–12 weeks for meaningful motor control and strength change",
          ],
        },
      ],
    },
    {
      slug: "posture-myths",
      title: "Posture: Myths & Evidence",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Popular culture blames \"text neck\" and slouching for neck pain, but the evidence tells a subtler story: no single posture reliably predicts pain, people vary widely, and sustained stillness bothers necks more than any particular alignment. Posture advice framed as danger (\"your head weighs 27 kg at 60 degrees!\") mostly adds threat without adding help.",
        },
        {
          kind: "cards",
          items: [
            { title: "Myth: one correct posture", text: "Evidence shows a range of resting postures among pain-free people. Comfort and variability beat any fixed \"ideal\" — the best posture is the next posture.", icon: "shuffle" },
            { title: "Myth: slouching damages the spine", text: "Relaxed postures are not tissue-damaging in themselves. Sustained end-range or unaccustomed positions can be symptomatic — that is sensitivity and conditioning, not damage.", icon: "shield" },
            { title: "What actually helps", text: "Regular position change and movement breaks, a workstation that allows variety (screen near eye level, supported forearms), building tissue tolerance with exercise, plus sleep and stress care.", icon: "refresh-cw" },
            { title: "Language matters", text: "Swap \"your posture is terrible\" for \"your neck is sore and deconditioned — let's get it moving and stronger, and vary your positions\". Same advice, opposite message.", icon: "message-circle" },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Systematic reviews find no consistent link between habitual sitting posture or thoracic kyphosis and neck pain onset",
            "Prolonged static positioning and low activity ARE associated with symptoms — movement variability is the practical target",
            "Ergonomic changes help comfort and are worth making — as enablers of movement, not protection from a \"dangerous\" posture",
          ],
        },
      ],
    },
    {
      slug: "whiplash",
      title: "Whiplash-Associated Disorders",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Whiplash is an acceleration–deceleration injury, classically from rear-end vehicle collisions, straining cervical soft tissues. After WAD IV (fracture/dislocation) is excluded — using a validated rule such as the Canadian C-Spine Rule where indicated — management of WAD I–III is resolutely active: most people recover in weeks to months, but a substantial minority develop persistent symptoms, and early management influences which path they take.",
        },
        {
          kind: "steps",
          items: [
            { title: "Reassure early and specifically", text: "Explain that most whiplash recovers, that imaging is usually normal because the strain is to soft tissue, and that hurt does not equal harm. Recovery expectations independently predict outcome." },
            { title: "Act as usual, move early", text: "Encourage normal activity and early active ROM within comfort. Advise against soft collars beyond, at most, the first day or two — prolonged immobilisation predicts worse outcomes." },
            { title: "Exercise", text: "Progressive ROM, deep neck flexor and scapular work, and general activity — the same active framework as other neck pain, dosed to irritability." },
            { title: "Identify poor-prognosis features", text: "High initial pain (e.g. ≥5–6/10) and disability, high acute stress response, catastrophising, low recovery expectation and cold hyperalgesia flag risk of chronicity — these patients need closer follow-up and psychologically informed care." },
            { title: "Monitor and escalate", text: "Neurological signs (WAD III) warrant careful monitoring; widespread hypersensitivity suggests central sensitisation and shifts management towards the chronic-pain model." },
          ],
        },
        {
          kind: "pearls",
          items: [
            "The strongest early predictors of poor whiplash outcome are not crash parameters but pain intensity, distress and expectations — assess the person, not the vehicle damage.",
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
            "Classify: mechanical neck pain, radiculopathy, WAD (0–IV), cervicogenic headache — after safety screening",
            "CAD screen: 5 D's (dizziness, drop attacks, diplopia, dysarthria, dysphagia) + 3 N's (nausea, numbness, nystagmus) — any = urgent referral",
            "Myelopathy: clumsy hands + gait change + UMN signs (Hoffmann's, hyperreflexia, Babinski) → neurosurgical referral",
            "Instability risk: RA, Down syndrome, trauma — no end-range/thrust techniques until cleared",
            "Neuro screen: C5 abduction/biceps jerk; C6 wrist extension/thumb; C7 triceps/middle finger; C8 finger flexion/little finger; T1 finger abduction",
            "Radiculopathy cluster: Spurling's +, distraction +, ULNT1 +, rotation <60°",
            "Manage actively: educate, stay active, exercise (deep neck flexors + scapula), manual therapy only as adjunct",
            "Whiplash: reassure, move early, no prolonged collars; posture: variability beats any 'perfect' position",
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
      text: "Approximately what proportion of total cervical rotation occurs at the atlantoaxial (C1–C2) joint?",
      options: ["10%", "25%", "50%", "90%"],
      correctIndex: 2,
      explanation:
        "The atlantoaxial joint is specialised for rotation, contributing roughly half of total cervical rotation as the atlas pivots around the dens of the axis. This is why the flexion-rotation test — flexing the neck to lock the lower segments, then rotating — biases assessment towards C1–2.",
      difficulty: "Easy",
      tags: ["anatomy"],
      sectionSlug: "cervical-anatomy",
    },
    {
      text: "At which intervertebral level does the C6 nerve root exit?",
      options: ["Below the C6 vertebra (C6–7)", "Above the C6 vertebra (C5–6)", "Through the C6 transverse foramen", "Between C7 and T1"],
      correctIndex: 1,
      explanation:
        "Cervical roots exit ABOVE their same-numbered vertebra: C6 exits at the C5–6 foramen. Because there are eight cervical roots and seven vertebrae, C8 exits between C7 and T1, and from T1 downwards roots exit below their vertebra. A C5–6 disc herniation therefore typically affects the C6 root.",
      difficulty: "Medium",
      tags: ["anatomy", "clinical-reasoning"],
      sectionSlug: "cervical-anatomy",
    },
    {
      text: "Which structure primarily prevents the dens of the axis from compressing the spinal cord?",
      options: ["Ligamentum flavum", "Transverse ligament of the atlas", "Anterior longitudinal ligament", "Nuchal ligament"],
      correctIndex: 1,
      explanation:
        "The transverse ligament holds the dens against the anterior arch of the atlas, preventing posterior translation towards the cord. Erosion or laxity of this ligament — as can occur in rheumatoid arthritis and Down syndrome — creates atlantoaxial instability, which is why end-range and thrust techniques are avoided in these groups until stability is confirmed.",
      difficulty: "Medium",
      tags: ["anatomy", "precautions"],
      sectionSlug: "cervical-anatomy",
    },
    {
      text: "A patient has unilateral headaches always on the right, provoked by neck movement and sustained positions, with reduced upper cervical rotation. This best fits:",
      options: ["Migraine with aura", "Cervicogenic headache", "Cluster headache", "Tension-type headache"],
      correctIndex: 1,
      explanation:
        "Cervicogenic headache is referred from upper cervical structures (O–C3, commonly the C2–3 facet): it is side-locked (does not swap sides), provoked by neck movements or positions, and accompanied by reduced upper cervical movement, often on the flexion-rotation test. Migraine typically swaps sides and has associated features (aura, photophobia, nausea).",
      difficulty: "Medium",
      tags: ["pathology", "assessment"],
      sectionSlug: "classification",
    },
    {
      text: "In the Quebec Task Force classification, what distinguishes WAD grade III from grade II?",
      options: [
        "The presence of fracture or dislocation",
        "The presence of neurological signs",
        "Headache as the main complaint",
        "Symptoms lasting more than 6 months",
      ],
      correctIndex: 1,
      explanation:
        "WAD I is neck pain without physical signs; WAD II adds musculoskeletal signs (reduced ROM, tenderness); WAD III adds neurological signs (weakness, sensory deficit, reduced reflexes); WAD IV is fracture or dislocation, which is medically managed. Grading directs monitoring intensity and management.",
      difficulty: "Medium",
      tags: ["pathology", "assessment"],
      sectionSlug: "classification",
    },
    {
      text: "Which cluster represents the classic \"5 D's\" of cervical arterial dysfunction?",
      options: [
        "Dizziness, drop attacks, diplopia, dysarthria, dysphagia",
        "Dizziness, deafness, dermatitis, dystonia, dyspnoea",
        "Diplopia, dysmetria, dysuria, dyspepsia, drowsiness",
        "Drop attacks, dysphagia, dandruff, dizziness, dyslexia",
      ],
      correctIndex: 0,
      explanation:
        "The 5 D's — Dizziness, Drop attacks, Diplopia, Dysarthria, Dysphagia — plus the 3 N's — Nausea, Numbness (facial/perioral), Nystagmus — flag possible vertebrobasilar ischaemia. With neck pain or headache, especially sudden, unfamiliar or post-traumatic, these features demand urgent medical referral and contraindicate manual therapy.",
      difficulty: "Easy",
      tags: ["precautions", "assessment"],
      sectionSlug: "red-flags-cad-myelopathy",
    },
    {
      text: "A 68-year-old with chronic neck stiffness reports increasingly clumsy hands, deteriorating handwriting and recent unsteadiness when walking. Examination shows brisk upper limb reflexes and a positive Hoffmann's sign. What is the most likely diagnosis?",
      options: [
        "Bilateral carpal tunnel syndrome",
        "Cervical radiculopathy",
        "Degenerative cervical myelopathy",
        "Vestibular neuritis",
      ],
      correctIndex: 2,
      explanation:
        "Insidious hand clumsiness, gait ataxia and upper motor neuron signs (hyperreflexia, Hoffmann's, possibly Babinski and clonus) are the signature of cervical myelopathy — cord compression, usually spondylotic. Radiculopathy gives lower motor neuron findings (reduced reflexes, segmental weakness). Suspected myelopathy warrants neurosurgical referral, not mechanical treatment.",
      difficulty: "Hard",
      tags: ["pathology", "clinical-reasoning", "precautions"],
      sectionSlug: "red-flags-cad-myelopathy",
    },
    {
      text: "Why is particular caution required before manual techniques in a patient with long-standing rheumatoid arthritis and neck pain?",
      options: [
        "RA increases muscle strength unpredictably",
        "RA can erode the transverse ligament causing atlantoaxial instability, often silently",
        "RA patients cannot consent to treatment",
        "Manual therapy interacts with methotrexate",
      ],
      correctIndex: 1,
      explanation:
        "Rheumatoid pannus can erode the transverse ligament and dens, producing atlantoaxial instability that may be clinically silent until catastrophic. End-range positions, strong traction and high-velocity thrusts are avoided in RA (and Down syndrome) unless instability has been excluded; escalating occipital pain or neurological symptoms demand imaging and specialist review.",
      difficulty: "Hard",
      tags: ["precautions", "pathology"],
      sectionSlug: "red-flags-cad-myelopathy",
    },
    {
      text: "Weak elbow extension, a diminished triceps reflex and sensory change over the middle finger indicate involvement of which nerve root?",
      options: ["C5", "C6", "C7", "C8"],
      correctIndex: 2,
      explanation:
        "C7 supplies elbow extension (triceps), the triceps reflex, and the middle finger dermatome — and C6–7 is the most commonly affected level in cervical radiculopathy. C5 maps to shoulder abduction/biceps reflex; C6 to elbow flexion-wrist extension/thumb; C8 to finger flexion/little finger.",
      difficulty: "Easy",
      tags: ["assessment", "anatomy"],
      sectionSlug: "assessment",
    },
    {
      text: "Which finding constitutes a POSITIVE Spurling's test?",
      options: [
        "Local neck pain during the manoeuvre",
        "Reproduction of the patient's arm symptoms with extension, ipsilateral side-flexion and axial compression",
        "Dizziness at end-range rotation",
        "Relief of arm pain with the manoeuvre",
      ],
      correctIndex: 1,
      explanation:
        "Spurling's narrows the intervertebral foramen (extension + lateral flexion towards the symptomatic side + compression); a positive test reproduces the patient's radicular ARM symptoms, supporting root involvement. Local neck discomfort alone is not positive. The test is fairly specific but not sensitive, so a negative does not exclude radiculopathy.",
      difficulty: "Medium",
      tags: ["special-tests", "assessment"],
      sectionSlug: "assessment",
    },
    {
      text: "During assessment, gently lifting the patient's head with axial traction reduces their arm pain. What does this suggest?",
      options: [
        "Cervical arterial dysfunction",
        "Cervical radiculopathy — a positive distraction test",
        "Myelopathy",
        "Symptom magnification",
      ],
      correctIndex: 1,
      explanation:
        "The distraction test unloads the foramen and nerve root; reduction of radicular arm symptoms is a positive test supporting radiculopathy. It pairs logically with Spurling's (compression provokes, distraction relieves) and with the shoulder abduction relief sign (hand resting on the head easing symptoms) in the diagnostic cluster.",
      difficulty: "Medium",
      tags: ["special-tests", "clinical-reasoning"],
      sectionSlug: "assessment",
    },
    {
      text: "What is the purpose of \"structural differentiation\" during an upper limb neural test (e.g. ULNT1)?",
      options: [
        "To measure joint range precisely",
        "To distinguish neural mechanosensitivity from local muscle/joint sources by changing tension at a site remote from the symptoms",
        "To grade ligament laxity",
        "To assess vascular sufficiency of the arm",
      ],
      correctIndex: 1,
      explanation:
        "In ULNT1 the arm is positioned to progressively tension the median nerve tract. If reproduced symptoms change with a remote manoeuvre that alters neural tension without moving local structures — such as contralateral cervical side-flexion or releasing wrist extension — neural tissue mechanosensitivity is implicated rather than local muscle or joint sources.",
      difficulty: "Hard",
      tags: ["special-tests", "clinical-reasoning"],
      sectionSlug: "assessment",
    },
    {
      text: "In the craniocervical flexion test, the pressure biofeedback unit is inflated to a baseline of 20 mmHg. What is the patient asked to do?",
      options: [
        "Push the head back as hard as possible to reach 50 mmHg",
        "Perform a gentle chin nod to sequentially target and hold 22–30 mmHg without superficial muscle substitution",
        "Lift the head off the bed for 60 seconds",
        "Rotate the head against the cuff",
      ],
      correctIndex: 1,
      explanation:
        "The CCFT tests deep neck flexor activation and endurance: from a 20 mmHg baseline the patient performs a graded craniocervical nod targeting 22, 24, 26, 28 and 30 mmHg, holding each without SCM/scalene substitution or jerky patterns. Neck pain patients typically achieve lower targets with poorer endurance — this is also the training tool.",
      difficulty: "Hard",
      tags: ["assessment", "exercise-therapy"],
      sectionSlug: "assessment",
    },
    {
      text: "Which statement about management of non-specific neck pain is best supported by evidence?",
      options: [
        "A soft collar should be worn for 4–6 weeks",
        "Exercise combined with education is a first-line treatment; manual therapy may add short-term benefit",
        "Bed rest until pain-free prevents chronicity",
        "Imaging is required before any exercise can start",
      ],
      correctIndex: 1,
      explanation:
        "Guidelines converge on active management: reassurance and education, staying active, and exercise as the core treatment, with manual therapy as a short-term adjunct. Collars and rest promote deconditioning and worse outcomes, and imaging is reserved for red flags or specific indications — degenerative findings are age-normal.",
      difficulty: "Easy",
      tags: ["management"],
      sectionSlug: "management",
    },
    {
      text: "A patient with cervical radiculopathy shows progressively worsening myotomal weakness over two weeks despite good conservative care. What is the appropriate action?",
      options: [
        "Continue the same programme for another 6 weeks",
        "Increase the strengthening load",
        "Refer for specialist/surgical opinion",
        "Add a soft collar at night only",
      ],
      correctIndex: 2,
      explanation:
        "Most radiculopathy improves conservatively over 6–12 weeks, but a progressive neurological deficit is an escalation trigger: it suggests ongoing root compromise that may need imaging and surgical assessment. Static mild deficits can be monitored; progressive ones cannot. Signs of myelopathy would similarly change the pathway.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning", "precautions"],
      sectionSlug: "management",
    },
    {
      text: "Why do chin tucks (craniocervical flexion) begin as a gentle nod rather than a forceful head press?",
      options: [
        "A gentle nod selectively activates deep neck flexors, while forceful action recruits superficial muscles like SCM that are already overactive",
        "Strong contractions damage the vertebral artery",
        "The exercise is only diagnostic, never therapeutic",
        "Force is irrelevant to muscle activation patterns",
      ],
      correctIndex: 0,
      explanation:
        "The deep neck flexors (longus colli/capitis) are low-load endurance stabilisers. A gentle, precise nod biases them; effortful pressing recruits sternocleidomastoid and scalenes — the very muscles that dominate in neck pain. Training therefore starts with precision at low load, progressing endurance before strength.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "anatomy"],
      sectionSlug: "exercise-therapy",
    },
    {
      text: "Which statement about posture and neck pain reflects current evidence?",
      options: [
        "Forward head posture is the primary cause of neck pain and must be corrected in everyone",
        "No single posture reliably predicts neck pain; movement variability and regular position change matter more than any fixed alignment",
        "Slouching progressively and permanently deforms the cervical spine",
        "Only military-style upright posture prevents symptoms",
      ],
      correctIndex: 1,
      explanation:
        "Systematic reviews find no consistent relationship between habitual posture and neck pain onset; pain-free people display a wide range of postures. Sustained static positioning and low activity are the better targets: encourage variability, movement breaks, and capacity building — and avoid threat-laden posture messaging, which adds nocebo.",
      difficulty: "Easy",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "posture-myths",
    },
    {
      text: "Following a rear-end collision with WAD II, which early management approach best supports recovery?",
      options: [
        "A soft collar for three weeks and rest",
        "Reassurance, early active movement, acting as usual, and progressive exercise",
        "Strict avoidance of driving and work for six weeks",
        "Daily high-velocity manipulation from day one",
      ],
      correctIndex: 1,
      explanation:
        "Evidence for whiplash consistently favours early active management: specific reassurance about recovery, early ROM within comfort, continuation of normal activity, and progressive exercise. Prolonged collar use and rest predict worse outcomes. Poor-prognosis flags (high initial pain, distress, low expectations) warrant closer follow-up.",
      difficulty: "Easy",
      tags: ["management"],
      sectionSlug: "whiplash",
    },
    {
      text: "Which early factors best predict poor recovery after whiplash?",
      options: [
        "The speed of the vehicles and cost of vehicle damage",
        "High initial pain and disability, high acute distress, and low expectations of recovery",
        "The patient's height and neck length",
        "Time of day of the collision",
      ],
      correctIndex: 1,
      explanation:
        "Prognosis after whiplash is driven by person-level factors: high initial pain intensity (e.g. ≥5–6/10) and disability, acute stress symptoms, catastrophising, low recovery expectations, and features like cold hyperalgesia. Crash parameters correlate poorly with outcome — assess and manage the person, not the vehicle damage.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "whiplash",
    },
  ],
  flashcards: [
    { front: "Which joint provides ~50% of cervical rotation?", back: "The atlantoaxial joint (C1–C2), where the atlas pivots on the dens of the axis. The flexion-rotation test biases this level." },
    { front: "Rule for cervical nerve root exits?", back: "Cervical roots exit ABOVE their same-numbered vertebra (C6 root at C5–6); C8 exits between C7 and T1 — eight roots, seven vertebrae." },
    { front: "List the 5 D's and 3 N's of cervical arterial dysfunction.", back: "Dizziness, Drop attacks, Diplopia, Dysarthria, Dysphagia; Nausea, Numbness (facial), Nystagmus. Any with neck pain/headache → urgent medical referral, no manual therapy." },
    { front: "Classic presentation of cervical myelopathy?", back: "Insidious clumsy hands (buttons, handwriting), gait unsteadiness, ± bladder urgency, with UMN signs: hyperreflexia, Hoffmann's, Babinski, clonus. Refer to neurosurgery." },
    { front: "Why is RA a cervical manual therapy precaution?", back: "Pannus can erode the transverse ligament/dens → atlantoaxial instability, often silent. Avoid end-range, traction and thrust techniques until instability is excluded." },
    { front: "C5, C6 and C7 myotome-reflex-dermatome triads?", back: "C5: shoulder abduction — biceps jerk — lateral upper arm. C6: elbow flexion/wrist extension — brachioradialis — thumb/index. C7: elbow extension — triceps jerk — middle finger." },
    { front: "Positive Spurling's vs positive distraction test?", back: "Spurling's (extension + ipsilateral side-flexion + compression) reproduces ARM symptoms; distraction (axial traction) relieves them. Both support cervical radiculopathy." },
    { front: "What is the craniocervical flexion test?", back: "With a pressure biofeedback cuff at 20 mmHg, the patient performs graded gentle chin nods targeting 22–30 mmHg without superficial substitution — testing deep neck flexor activation and endurance." },
    { front: "WAD grades (Quebec Task Force)?", back: "0: no complaints; I: pain only; II: pain + musculoskeletal signs; III: pain + neurological signs; IV: fracture/dislocation (medical management)." },
    { front: "Key features of cervicogenic headache?", back: "Unilateral and side-locked, provoked by neck movements/positions, reduced upper cervical ROM (positive flexion-rotation test); source O–C3, commonly the C2–3 facet joint." },
    { front: "Evidence-based posture message for neck pain?", back: "No single 'correct' posture; variability and regular movement breaks matter more than alignment. Build capacity with exercise; avoid threat-based posture language." },
    { front: "Early whiplash management essentials?", back: "Exclude serious injury (e.g. Canadian C-Spine Rule), reassure specifically, encourage early movement and normal activity, progressive exercise — no prolonged collar use." },
  ],
};

export default topic;
