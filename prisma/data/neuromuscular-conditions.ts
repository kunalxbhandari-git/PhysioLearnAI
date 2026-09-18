import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "neuromuscular-conditions",
  title: "GBS & Progressive Neuromuscular Conditions",
  category: "Neurological",
  description:
    "Guillain-Barré syndrome, motor neurone disease, muscular dystrophies, post-polio syndrome and myasthenia gravis — recognition, monitoring, and the careful exercise dosing these conditions demand.",
  difficulty: "Advanced",
  estMinutes: 30,
  icon: "brain-circuit",
  keyTakeaways: [
    "Neuromuscular conditions weaken the motor unit itself — exercise dosing rules for healthy deconditioned muscle do not transfer unchanged.",
    "GBS is an acute post-infectious polyneuropathy with ascending weakness; falling vital capacity and autonomic instability are medical emergencies.",
    "GBS rehabilitation is paced across plateau and recovery phases — overwork can worsen weakness in recovering, partially denervated muscle.",
    "Motor neurone disease combines UMN and LMN signs; physiotherapy maintains function, comfort and quality of life rather than chasing strength gains.",
    "In MND, introduce equipment and respiratory support concepts early and sensitively — timing is everything.",
    "Duchenne muscular dystrophy presents with proximal weakness and Gowers' sign; eccentric and maximal loading can accelerate fibre damage.",
    "Post-polio syndrome and myasthenia gravis both demand fatigue-aware pacing, not aggressive strengthening.",
    "Across all neuromuscular disease: submaximal dosing, generous rest, fatigue monitoring and MDT working are the shared principles.",
  ],
  sections: [
    {
      slug: "overview",
      title: "Overview: Why Neuromuscular Conditions Are Different",
      estMinutes: 2,
      difficulty: "Intermediate",
      content: [
        {
          kind: "paragraph",
          text: "Neuromuscular conditions affect the motor unit: the anterior horn cell, peripheral nerve, neuromuscular junction, or the muscle fibre itself. Weakness here is caused by disease of the machinery of movement — not by disuse — and that distinction changes everything about how physiotherapy is dosed.",
        },
        {
          kind: "paragraph",
          text: "In simple deconditioning, muscle responds predictably to progressive overload. In neuromuscular disease, surviving motor units are often already working near their ceiling: each remaining unit has adopted extra orphaned muscle fibres, and aggressive loading can push them into damage rather than adaptation. The physiotherapist's craft is to find the dose that maintains function without tipping into overwork weakness.",
        },
        {
          kind: "cards",
          items: [
            { title: "Anterior horn cell", text: "Motor neurone disease, poliomyelitis and post-polio syndrome attack the cell body of the lower motor neurone.", icon: "zap" },
            { title: "Peripheral nerve", text: "Guillain-Barré syndrome demyelinates (and sometimes axonally damages) peripheral nerves and roots.", icon: "git-branch" },
            { title: "Neuromuscular junction", text: "Myasthenia gravis blocks acetylcholine receptors, producing fatigable weakness.", icon: "plug" },
            { title: "Muscle fibre", text: "Muscular dystrophies are genetic disorders of muscle membrane or structural proteins, causing progressive fibre degeneration.", icon: "activity" },
          ],
        },
        {
          kind: "keypoints",
          title: "The central theme",
          items: [
            "Weakness from disease behaves differently from weakness from disuse",
            "Submaximal, fatigue-aware dosing is the default across the whole group",
            "Physiotherapy goals shift from restoration to maintenance, adaptation and quality of life in progressive disease",
          ],
        },
      ],
    },
    {
      slug: "gbs-presentation",
      title: "Guillain-Barré Syndrome: Presentation & Monitoring",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Guillain-Barré syndrome (GBS) is an acute, immune-mediated polyneuropathy. In most cases it follows an infection by one to three weeks — classically Campylobacter jejuni gastroenteritis, or a respiratory viral illness — when antibodies raised against the pathogen cross-react with peripheral nerve gangliosides (molecular mimicry).",
        },
        { kind: "image", illustration: "nervous-system", caption: "GBS attacks the peripheral nervous system — nerve roots and peripheral nerves — while the brain and spinal cord themselves are spared." },
        {
          kind: "cards",
          items: [
            { title: "Ascending weakness", text: "Classically symmetrical weakness starting distally in the legs and ascending over hours to days; may progress to arms, trunk, face and respiratory muscles.", icon: "trending-up" },
            { title: "Areflexia", text: "Reduced or absent deep tendon reflexes are a hallmark — a key LMN feature distinguishing GBS from spinal cord pathology.", icon: "minus-circle" },
            { title: "Sensory symptoms", text: "Paraesthesia and numbness in a glove-and-stocking pattern often precede weakness; neuropathic pain (especially back and leg) is common and under-recognised.", icon: "waves" },
            { title: "Autonomic involvement", text: "Labile blood pressure, arrhythmias, ileus and urinary retention occur in a substantial minority and can be life-threatening.", icon: "heart" },
          ],
        },
        {
          kind: "paragraph",
          text: "Progression peaks by four weeks by definition; most patients reach their nadir within two. Around a quarter of patients need mechanical ventilation, which is why serial monitoring of respiratory function — not just limb strength — defines the acute phase.",
        },
        {
          kind: "keypoints",
          title: "What the physiotherapist monitors in acute GBS",
          items: [
            "Vital capacity (VC) trend — serial bedside measurements; a falling VC (commonly cited threshold around 15–20 ml/kg or a rapid downward trend) triggers urgent escalation for ventilatory support",
            "Cough strength and secretion clearance — bulbar involvement impairs airway protection",
            "Heart rate and blood pressure responses before, during and after any intervention — autonomic instability can be provoked by position change and suction",
            "Ascending level of weakness and any new bulbar signs (swallow, voice, facial weakness)",
          ],
        },
        {
          kind: "redflags",
          items: [
            "Falling or low vital capacity, breathlessness lying flat, or a weak cough — impending respiratory failure: escalate immediately",
            "New swallowing difficulty, drooling or voice change — bulbar involvement with aspiration risk",
            "Marked blood pressure swings, bradycardia or arrhythmia during care — autonomic dysfunction: pause activity and inform the medical team",
            "Rapidly ascending weakness over hours — the patient can deteriorate faster than the review cycle; lower your threshold for escalation",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Do not rely on oxygen saturation to detect ventilatory failure in GBS — SpO2 falls late. Trend the vital capacity.",
            "Severe pain is common in GBS and can mask assessment of strength; coordinate analgesia timing with therapy sessions.",
          ],
        },
      ],
    },
    {
      slug: "gbs-rehab",
      title: "GBS: Phases of Recovery & Rehab Pacing",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "GBS typically follows three phases: progression (up to 4 weeks), plateau (days to weeks), and recovery (months, occasionally years). Most patients recover well — the majority walk independently by six months to a year — but recovery is remyelination and reinnervation, and it cannot be rushed by working harder.",
        },
        {
          kind: "steps",
          items: [
            { title: "Acute / progression phase", text: "Priorities are respiratory care, positioning, pressure care, gentle passive range of movement to prevent contracture, and monitoring. Avoid fatiguing active work while the disease is still advancing." },
            { title: "Plateau phase", text: "Weakness is stable. Begin gentle active-assisted movement, supported sitting and tilt-table style graded verticalisation (watching autonomic responses), and short, frequent activity bouts with long rests." },
            { title: "Early recovery", text: "Strength returns proximally-to-distally in many patients. Progress from active-assisted to active to lightly resisted work — but keep everything submaximal, and progress by tolerance, not by protocol." },
            { title: "Late recovery", text: "Task-specific gait re-education, balance work, endurance building, and a graded return to daily roles. Persisting fatigue is very common even when strength has largely returned — address it explicitly." },
          ],
        },
        {
          kind: "warning",
          title: "Overwork weakness — the central precaution",
          items: [
            "Recovering, partially denervated muscle can be damaged by maximal or exhaustive exercise — a phenomenon described as overwork weakness",
            "A useful rule: if the patient is weaker, sorer or markedly more fatigued the day after therapy, the dose was too high",
            "Short bouts, generous rest, alternating muscle groups and stopping well short of fatigue beat single long sessions",
            "Grade 2–3 muscles are the most vulnerable — resist the temptation to load them hard just because they are finally moving",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Fatigue is one of the commonest long-term sequelae of GBS — build pacing and energy management into education from the plateau phase onwards.",
            "Watch for anxiety and low mood: patients have often experienced ICU care and total paralysis with a preserved, fully aware mind.",
          ],
        },
      ],
    },
    {
      slug: "mnd",
      title: "Motor Neurone Disease / ALS",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Motor neurone disease (MND) — of which amyotrophic lateral sclerosis (ALS) is the commonest form — is a progressive, currently incurable degeneration of both upper and lower motor neurones. The clinical signature is a mixture of UMN signs (spasticity, brisk reflexes, clonus) and LMN signs (wasting, fasciculations, flaccid weakness) in the same patient, often in the same limb, with sensation typically spared.",
        },
        {
          kind: "table",
          headers: ["Feature", "UMN contribution", "LMN contribution"],
          rows: [
            ["Tone", "Spasticity", "Flaccidity"],
            ["Reflexes", "Brisk, upgoing plantar possible", "Reduced or absent"],
            ["Muscle bulk", "Relatively preserved early", "Wasting, fasciculations"],
            ["Typical distribution", "Limb and bulbar corticospinal patterns", "Focal wasting, e.g. first dorsal interosseous, tongue"],
          ],
        },
        {
          kind: "paragraph",
          text: "The role of physiotherapy in MND is not to reverse the disease but to help the person live as well and as independently as possible at every stage: maintaining function and safe mobility, managing symptoms (spasticity, cramps, pain, secretions), conserving energy, and anticipating needs so equipment arrives before crisis.",
        },
        {
          kind: "cards",
          items: [
            { title: "Maintain, don't chase", text: "Moderate, submaximal exercise can help maintain function and wellbeing in muscles with useful strength; exhausting already-failing muscles achieves nothing and costs the patient their limited energy budget.", icon: "battery" },
            { title: "Energy conservation", text: "Prioritise what matters to the person. Teach activity pacing, task simplification, rest scheduling and efficient transfer techniques.", icon: "timer" },
            { title: "Equipment timing", text: "Anticipate decline: ankle-foot orthoses for foot drop, walking aids, wheelchair and seating, transfer equipment and home adaptations should be discussed ahead of need — waiting lists are long and the disease does not wait.", icon: "armchair" },
            { title: "Respiratory support concept", text: "Respiratory muscle weakness drives morbidity and mortality. Physiotherapists contribute to secretion clearance and cough augmentation; non-invasive ventilation (NIV), introduced by the specialist team, improves both survival and quality of life for appropriate patients.", icon: "wind" },
          ],
        },
        {
          kind: "warning",
          title: "Sensitive framing",
          items: [
            "Follow the patient's lead on prognosis conversations — provide honest information at the pace the person and family choose",
            "Frame equipment as a way to spend energy on what matters, not as a marker of defeat",
            "Goals are revisited frequently — what was meaningful last month may be impossible now; this requires skill and compassion, not avoidance",
            "Involve palliative care early as a parallel support, not a last resort",
          ],
        },
        {
          kind: "pearls",
          items: [
            "A common practical marker of respiratory decline in MND is orthopnoea and morning headache — ask about them at every review.",
            "Head-drop and bulbar symptoms (speech, swallow) need prompt MDT referral — SALT and dietetics are core partners.",
          ],
        },
      ],
    },
    {
      slug: "muscular-dystrophies",
      title: "Muscular Dystrophies (Duchenne Pattern)",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "The muscular dystrophies are inherited disorders of muscle proteins causing progressive fibre degeneration and replacement by fat and fibrous tissue. Duchenne muscular dystrophy (DMD) — an X-linked absence of functional dystrophin — is the most common and severe childhood form, affecting boys almost exclusively.",
        },
        { kind: "image", illustration: "muscle-fiber", caption: "In dystrophy the problem lies in the muscle fibre itself: without dystrophin anchoring the membrane, contraction — especially eccentric contraction — mechanically damages the fibre." },
        {
          kind: "cards",
          items: [
            { title: "Proximal weakness first", text: "Hip and shoulder girdle muscles weaken earliest: waddling gait, difficulty climbing stairs, and trouble rising from the floor typically appear between ages 2 and 5.", icon: "trending-down" },
            { title: "Gowers' sign", text: "The child rises from the floor by 'climbing up' the legs with the hands — the classic indicator of proximal (hip extensor) weakness.", icon: "hand" },
            { title: "Pseudohypertrophy", text: "Calves look bulky but the enlargement is fat and fibrous tissue, not strong muscle.", icon: "circle" },
            { title: "Progression pattern", text: "Untreated, independent walking is typically lost in the early teens; scoliosis, contractures, and cardiorespiratory involvement follow. Cardiac muscle also lacks dystrophin — cardiomyopathy surveillance is essential.", icon: "heart-pulse" },
          ],
        },
        {
          kind: "paragraph",
          text: "The 'steroid era' has changed the natural history: long-term corticosteroids prolong ambulation by years, delay scoliosis and support respiratory function, at the cost of side-effects (weight gain, bone fragility, behaviour change) that the MDT must manage. Standards of care now emphasise proactive multidisciplinary surveillance, and life expectancy has improved substantially with ventilatory and cardiac care.",
        },
        {
          kind: "steps",
          items: [
            { title: "Preserve range", text: "Daily stretching of tendo-Achilles, hip flexors and iliotibial band, plus night ankle-foot orthoses, delays the contractures that end walking early." },
            { title: "Support ambulation", text: "Encourage regular, comfortable activity — swimming and cycling are ideal. Standing programmes and lightweight orthoses support the late ambulant phase." },
            { title: "Manage transitions", text: "Plan powered mobility, seating, spinal surveillance and home adaptation before loss of walking, not after." },
            { title: "Protect respiratory function", text: "Monitor FVC over time; teach secretion clearance and introduce cough augmentation and nocturnal NIV concepts with the specialist team as weakness progresses." },
          ],
        },
        {
          kind: "warning",
          title: "Eccentric and maximal loading caution",
          items: [
            "Dystrophin-deficient fibres are mechanically fragile — high-resistance and eccentric-biased exercise (downhill walking, deep squats, jumping down) can accelerate fibre damage",
            "Prescribe submaximal, symptom-free activity; post-exercise myoglobinuria (dark urine) or prolonged soreness means the dose was harmful, not therapeutic",
            "Avoid pushing through fatigue — 'no pain, no gain' is actively dangerous advice in dystrophy",
            "Prolonged immobilisation is also harmful (rapid deconditioning and contracture) — the goal is the moderate middle ground",
          ],
        },
      ],
    },
    {
      slug: "post-polio-mg",
      title: "Post-Polio Syndrome & Myasthenia Gravis",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Post-polio syndrome (PPS) is new weakness, fatigue and pain developing decades after recovery from acute poliomyelitis. Surviving anterior horn cells sprouted to adopt orphaned muscle fibres, creating giant motor units that have run 'overworked' for years; late degeneration of these overburdened units produces slowly progressive new weakness.",
        },
        {
          kind: "keypoints",
          title: "Post-polio essentials",
          items: [
            "New, slowly progressive weakness in previously affected (and sometimes seemingly unaffected) muscles, with fatigue and pain",
            "Diagnosis is clinical, after excluding other causes of new weakness",
            "Management is pacing, energy conservation, orthotic review and gentle non-fatiguing exercise — aggressive strengthening can worsen the overworked units",
            "Lifestyle modification (weight, activity distribution, rest) protects remaining capacity",
          ],
        },
        {
          kind: "paragraph",
          text: "Myasthenia gravis (MG) is an autoimmune disorder of the neuromuscular junction: antibodies against acetylcholine receptors reduce transmission, producing weakness that is characteristically fatigable — worse with repeated use and later in the day, improving with rest. Ocular symptoms (ptosis, diplopia) are common presenting features; bulbar and respiratory involvement mark severe disease.",
        },
        {
          kind: "cards",
          items: [
            { title: "Fatigability, not fixed weakness", text: "Strength deteriorates with sustained or repeated effort and recovers with rest — test strength before and after repeated movements to reveal it.", icon: "battery-low" },
            { title: "Pacing over pushing", text: "Schedule therapy for the patient's best time of day (often morning, or after medication); use short bouts with full recovery between sets.", icon: "clock" },
            { title: "Medical partnership", text: "Symptoms fluctuate with anticholinesterase and immunosuppressive treatment — coordinate therapy with medication timing.", icon: "pill" },
            { title: "Myasthenic crisis", text: "Rapidly worsening bulbar or respiratory weakness is an emergency: escalate, monitor vital capacity, do not persist with exercise.", icon: "siren" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "In both PPS and MG the day-after response is your best dosing gauge: increased weakness or exhaustion the next day means reduce the dose.",
            "Ask MG patients what time of day they are strongest and book them then — a simple scheduling change can transform participation.",
          ],
        },
      ],
    },
    {
      slug: "exercise-principles",
      title: "Shared Exercise Principles: Dosing in Diseased Muscle",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "In ordinary deconditioning, the therapeutic logic is progressive overload: challenge the muscle near its capacity and it adapts. In neuromuscular disease this logic is only partly true — and applying it uncritically is the single commonest prescribing error. Surviving motor units are already enlarged and heavily recruited; maximal effort provides little adaptive headroom and real potential for damage.",
        },
        {
          kind: "table",
          headers: ["Parameter", "Deconditioned (healthy) muscle", "Neuromuscular disease"],
          rows: [
            ["Intensity", "Moderate to high; progressive overload towards capacity", "Submaximal (commonly framed as moderate, well short of fatigue); never to exhaustion"],
            ["Progression", "Systematic, expected", "Cautious, symptom-led; in progressive disease the goal may be maintaining rather than gaining"],
            ["Fatigue", "Transient fatigue is acceptable and expected", "A dosing signal — persistent next-day fatigue or weakness means overdose"],
            ["Eccentric bias", "Useful stimulus (e.g. tendinopathy, hypertrophy)", "Caution, especially in dystrophies — mechanically damaging to fragile fibres"],
            ["Rest", "Standard inter-set rest", "Generous rest between bouts; distribute activity across the day and week"],
            ["Endpoint", "Restored strength and capacity", "Preserved function, participation and quality of life"],
          ],
        },
        {
          kind: "keypoints",
          title: "Fatigue monitoring in practice",
          items: [
            "Use the 24–48 hour response: strength, soreness and energy the next day tell you whether the dose was right",
            "Track with simple tools — a fatigue diary, Borg RPE kept in the light-to-moderate range, and consistent functional markers (e.g. timed sit-to-stand)",
            "Teach the patient to be their own dosimeter: stop while they could still do more",
            "Any new dark urine after exercise in dystrophy (myoglobinuria) means stop and seek medical review",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Function is the outcome that matters: a maintained transfer or a preserved walk to the shops is a therapeutic success even when dynamometry declines.",
            "In progressive disease, 'no change' over months is often an excellent result — say so explicitly to the patient.",
          ],
        },
      ],
    },
    {
      slug: "exercise-blocks",
      title: "Exercise & Activity Examples",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "The following examples illustrate submaximal, fatigue-aware prescription. Every dose is a starting point to be titrated against the individual's 24-hour response — in this population the dosage lines matter more than the exercise names.",
        },
        {
          kind: "exercise",
          name: "Active-assisted limb cycling (GBS plateau/early recovery)",
          purpose: "Maintain range and re-introduce active movement without loading recovering muscle to fatigue.",
          position: "Supported sitting or supine with a motorised or assisted cycle ergometer for legs or arms.",
          execution: "Cycle with assistance, contributing only comfortable effort. Stop well before fatigue; monitor heart rate and blood pressure for autonomic lability.",
          dosage: "5–10 minutes, 1–2 short bouts per day, with full recovery between.",
          progression: "Reduce assistance before increasing duration; add light resistance only when the same dose feels easy for several consecutive days.",
          precautions: "Pause for dizziness, blood pressure swings or palpitations; keep sessions submaximal and short.",
        },
        {
          kind: "exercise",
          name: "Functional sit-to-stand practice (MND, early stage)",
          purpose: "Maintain the single most valuable functional strength task — standing up — while it remains achievable.",
          position: "Firm chair of comfortable height, armrests available, feet back under the knees.",
          execution: "Stand up using the smoothest technique available, using hands as needed, then lower with control. Quality over quantity.",
          dosage: "3–5 repetitions, 1–2 times per day, stopping while it still feels comfortable.",
          progression: "In MND, 'progression' usually means adapting: raise the seat height or add armrest push-off as weakness advances, preserving independence rather than adding load.",
          precautions: "Never work to exhaustion — the energy spent here is taken from the rest of the person's day.",
        },
        {
          kind: "exercise",
          name: "Daily stretching programme (Duchenne MD)",
          purpose: "Delay tendo-Achilles, hip flexor and ITB contractures that threaten ambulation.",
          position: "Long sitting or supine, parent or carer assisting for young children; combine with night ankle-foot orthoses.",
          execution: "Slow, sustained stretch to gentle tension (never pain) of calves, hip flexors and ITB; hold and release smoothly.",
          dosage: "Commonly prescribed as holds of around 30–60 seconds, several repetitions per muscle group, daily — built into routine (after bath, before bed).",
          progression: "Consistency, not intensity: the aim is daily adherence for years, so keep the programme short enough to sustain.",
          precautions: "Avoid forceful end-range stretching; combine with orthoses and standing rather than relying on stretch alone.",
        },
        {
          kind: "exercise",
          name: "Paced walking programme (post-polio syndrome)",
          purpose: "Maintain aerobic capacity and mood without overworking enlarged, vulnerable motor units.",
          position: "Level, predictable route; appropriate orthoses and walking aid reviewed first.",
          execution: "Walk at an easy conversational pace, in short bouts separated by seated rests, distributed across the week rather than concentrated.",
          dosage: "Start with bouts of 5–10 minutes at light-to-moderate effort (comfortably able to talk), alternate days.",
          progression: "Increase bout frequency before bout length; hold or reduce the dose if next-day fatigue, pain or weakness rises.",
          precautions: "Boom-and-bust cycles are the pattern to break — a good day is not a licence to double the distance.",
        },
        {
          kind: "warning",
          title: "Dosing cautions across all examples",
          items: [
            "Stop while the patient could still do more — exhaustion is a failed session, not a badge of effort",
            "One variable changes at a time, and only after several stable days at the current dose",
            "Increased weakness, soreness or fatigue lasting into the next day means reduce the dose, not repeat it",
            "In fluctuating conditions (MG) and progressive conditions (MND, DMD) the right dose changes over time — review it, don't set and forget",
          ],
        },
      ],
    },
    {
      slug: "mdt-care",
      title: "Multidisciplinary Care & Supportive Management",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "No single profession can manage a neuromuscular condition well. Coordinated multidisciplinary team (MDT) care — often through a specialist neuromuscular service — is itself an evidence-supported intervention, improving survival and quality of life in conditions like MND and DMD.",
        },
        {
          kind: "cards",
          items: [
            { title: "Medical & nursing", text: "Neurology leads diagnosis and disease-modifying treatment (e.g. steroids in DMD, immunotherapy in GBS and MG); specialist nurses coordinate care.", icon: "stethoscope" },
            { title: "Respiratory team", text: "Vital capacity surveillance, cough augmentation, and timely non-invasive ventilation — the interventions with the largest survival impact in MND and DMD.", icon: "wind" },
            { title: "SALT & dietetics", text: "Swallow assessment, communication aids, and nutrition support (including gastrostomy timing discussions) for bulbar involvement.", icon: "utensils" },
            { title: "OT, orthotics & wheelchair services", text: "Equipment, home adaptation, seating, and orthoses — timed ahead of need.", icon: "armchair" },
            { title: "Psychology & palliative care", text: "Adjustment, mood, carer support and advance care planning — introduced early as parallel care, not an endpoint.", icon: "heart-handshake" },
            { title: "Physiotherapy", text: "The thread through all phases: movement, respiratory adjuncts, positioning, exercise dosing, falls prevention and equipment liaison.", icon: "activity" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "The physiotherapist is often the professional who sees the patient most frequently — you are the MDT's early-warning system for swallow change, respiratory decline and falls risk.",
            "Document function in concrete, comparable terms (timed tests, distances, transfer level) so decline is detected by data, not impression.",
          ],
        },
      ],
    },
    {
      slug: "quick-revision",
      title: "Quick Revision Summary",
      estMinutes: 2,
      difficulty: "Intermediate",
      content: [
        {
          kind: "keypoints",
          title: "60-second summary",
          items: [
            "GBS: post-infectious ascending weakness + areflexia; trend vital capacity, watch autonomic signs; rehab paced through plateau → recovery; avoid overwork weakness",
            "MND/ALS: mixed UMN + LMN signs, sensation spared; physio maintains function and quality of life — energy conservation, timely equipment, respiratory support concepts, sensitive communication",
            "DMD: proximal weakness, Gowers' sign, calf pseudohypertrophy; daily stretching + night orthoses; avoid eccentric/maximal loading; steroids have extended ambulation and survival",
            "Post-polio: new late weakness in overworked motor units — pace, don't push",
            "Myasthenia gravis: fatigable weakness at the neuromuscular junction — schedule around best times, short bouts, watch for crisis",
            "Universal rules: submaximal dosing, 24-hour fatigue response as the dosimeter, generous rest, MDT working",
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
      text: "Which infection is classically associated with triggering Guillain-Barré syndrome?",
      options: [
        "Staphylococcus aureus skin infection",
        "Campylobacter jejuni gastroenteritis",
        "Urinary tract infection with E. coli",
        "Tuberculosis",
      ],
      correctIndex: 1,
      explanation:
        "GBS most classically follows Campylobacter jejuni gastroenteritis (or a respiratory viral illness) by one to three weeks. Antibodies raised against the pathogen cross-react with peripheral nerve gangliosides — molecular mimicry — producing an immune attack on peripheral nerves.",
      difficulty: "Easy",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "gbs-presentation",
    },
    {
      text: "What is the classic pattern of motor involvement in Guillain-Barré syndrome?",
      options: [
        "Unilateral weakness starting in the face",
        "Symmetrical ascending weakness starting distally in the legs",
        "Proximal weakness of the shoulder girdle only",
        "Fluctuating weakness worse in the evening",
      ],
      correctIndex: 1,
      explanation:
        "GBS typically causes symmetrical weakness beginning distally in the lower limbs and ascending over hours to days, potentially involving the arms, trunk, face and respiratory muscles. Fluctuating evening-worse weakness describes myasthenia gravis; isolated proximal weakness suggests myopathy.",
      difficulty: "Easy",
      tags: ["pathology", "assessment"],
      sectionSlug: "gbs-presentation",
    },
    {
      text: "Why is serial vital capacity measurement — rather than oxygen saturation — the key respiratory monitor in acute GBS?",
      options: [
        "Vital capacity is easier to measure than SpO2",
        "SpO2 falls late in neuromuscular ventilatory failure, whereas a falling VC gives early warning",
        "Oxygen saturation is unreliable in all neurological patients",
        "Vital capacity measures airway inflammation directly",
      ],
      correctIndex: 1,
      explanation:
        "In neuromuscular respiratory failure the problem is pump weakness, not gas exchange, so oxygen saturation is preserved until decompensation is advanced. A falling vital capacity trend detects weakening respiratory muscles early, allowing planned escalation to ventilatory support rather than emergency intubation.",
      difficulty: "Medium",
      tags: ["assessment", "precautions"],
      sectionSlug: "gbs-presentation",
    },
    {
      text: "During a bed-to-chair transfer, a patient with acute GBS becomes bradycardic with a marked drop in blood pressure. What is the most appropriate response?",
      options: [
        "Continue the transfer quickly to finish the session",
        "Pause activity, return the patient to a supported position, and inform the medical team of autonomic instability",
        "Give the patient a sugary drink and continue",
        "Increase the exercise intensity to stimulate circulation",
      ],
      correctIndex: 1,
      explanation:
        "Autonomic dysfunction affects a substantial minority of GBS patients and can produce dangerous bradycardia, arrhythmias and blood pressure swings, provoked by position change, suction or exertion. Activity should stop, the patient should be made safe, and the medical team informed — this is a recognised cause of death in GBS.",
      difficulty: "Medium",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "gbs-presentation",
    },
    {
      text: "A patient recovering from GBS reports feeling markedly weaker and exhausted the day after each therapy session. What does this indicate?",
      options: [
        "Normal training response — continue the same programme",
        "The exercise dose is too high and risks overwork weakness — reduce it",
        "The patient needs motivational coaching to push harder",
        "Relapse of GBS requiring immunoglobulin",
      ],
      correctIndex: 1,
      explanation:
        "Next-day weakness, soreness or marked fatigue is the practical marker of overwork in recovering, partially denervated muscle. Unlike healthy training soreness, this indicates harmful overload — the dose should be reduced, with shorter bouts and longer rests. Persisting decline despite dose reduction would then warrant medical review.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "precautions", "clinical-reasoning"],
      sectionSlug: "gbs-rehab",
    },
    {
      text: "Which combination of signs is characteristic of motor neurone disease?",
      options: [
        "UMN and LMN signs together, with sensation spared",
        "Pure sensory loss in a glove-and-stocking distribution",
        "LMN signs with prominent sensory ataxia",
        "UMN signs with a clear sensory level on the trunk",
      ],
      correctIndex: 0,
      explanation:
        "MND degenerates both upper motor neurones (spasticity, brisk reflexes) and lower motor neurones (wasting, fasciculations, flaccid weakness), often in the same limb, while sensation is typically spared. A sensory level suggests spinal cord pathology; glove-and-stocking sensory loss suggests peripheral neuropathy.",
      difficulty: "Easy",
      tags: ["pathology", "assessment"],
      sectionSlug: "mnd",
    },
    {
      text: "What is the primary role of physiotherapy in motor neurone disease?",
      options: [
        "Progressive resistance training to reverse muscle wasting",
        "Maintaining function, comfort and quality of life while anticipating changing needs",
        "Retraining normal movement patterns to cure spasticity",
        "Discharging the patient once decline begins, as therapy is futile",
      ],
      correctIndex: 1,
      explanation:
        "MND is progressive and currently incurable; strength lost to motor neurone death cannot be trained back. Physiotherapy focuses on maintaining function and safe mobility, energy conservation, symptom management, timely equipment provision, and respiratory adjuncts — maximising quality of life at every stage. Therapy input typically increases, not decreases, as the disease advances.",
      difficulty: "Easy",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "mnd",
    },
    {
      text: "Why should equipment such as AFOs, walking aids and wheelchairs be discussed early in MND rather than when the patient can no longer manage without them?",
      options: [
        "Because equipment halts disease progression",
        "Because provision takes time and the disease progresses — anticipating need prevents crisis and preserves participation",
        "Because early equipment use strengthens muscles",
        "Because funding is only available at diagnosis",
      ],
      correctIndex: 1,
      explanation:
        "MND can progress faster than equipment services can respond. Anticipatory provision means the aid is available the day it is needed, avoiding falls, lost independence and crisis referrals. Framing equipment as a way to spend limited energy on valued activities — rather than as defeat — supports acceptance.",
      difficulty: "Medium",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "mnd",
    },
    {
      text: "Which features would you ask about at every MND review as practical markers of developing respiratory muscle weakness?",
      options: [
        "Wheeze and productive cough",
        "Orthopnoea and morning headache",
        "Chest pain on exertion",
        "Nasal congestion and sneezing",
      ],
      correctIndex: 1,
      explanation:
        "Breathlessness lying flat (orthopnoea, from diaphragm weakness) and morning headache (from nocturnal hypoventilation and CO2 retention) are classic early symptoms of respiratory muscle failure in MND, prompting formal respiratory assessment and consideration of non-invasive ventilation — which improves both survival and quality of life.",
      difficulty: "Hard",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "mnd",
    },
    {
      text: "A 4-year-old boy 'climbs up his legs' with his hands to stand from the floor. What is this sign and what does it indicate?",
      options: [
        "Trendelenburg sign — hip abductor weakness",
        "Gowers' sign — proximal (hip and knee extensor) weakness, classically Duchenne muscular dystrophy",
        "Babinski sign — upper motor neurone lesion",
        "Romberg sign — proprioceptive loss",
      ],
      correctIndex: 1,
      explanation:
        "Gowers' sign describes rising from the floor by walking the hands up the thighs to compensate for weak hip and knee extensors. In a young boy, with a waddling gait and calf pseudohypertrophy, it is the classic presentation of Duchenne muscular dystrophy and warrants urgent referral (including creatine kinase testing by the medical team).",
      difficulty: "Easy",
      tags: ["assessment", "pathology"],
      sectionSlug: "muscular-dystrophies",
    },
    {
      text: "Why is eccentric-biased, high-resistance exercise specifically cautioned against in Duchenne muscular dystrophy?",
      options: [
        "It causes excessive cardiovascular strain",
        "Dystrophin-deficient muscle membranes are mechanically fragile, and eccentric loading accelerates fibre damage",
        "It increases spasticity in the calf muscles",
        "Children cannot perform eccentric contractions",
      ],
      correctIndex: 1,
      explanation:
        "Dystrophin anchors the muscle fibre membrane to its contractile machinery. Without it, the high mechanical strain of eccentric (lengthening) contractions and maximal loading tears the fragile membrane, accelerating degeneration. Prescription in DMD favours submaximal, symptom-free activity such as swimming and cycling; post-exercise dark urine (myoglobinuria) signals harmful overload.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "precautions", "pathology"],
      sectionSlug: "muscular-dystrophies",
    },
    {
      text: "Which statement about corticosteroid treatment in Duchenne muscular dystrophy is most accurate?",
      options: [
        "Steroids cure the underlying dystrophin deficiency",
        "Steroids prolong ambulation by years and delay scoliosis, at the cost of side-effects requiring MDT management",
        "Steroids are contraindicated in all children with DMD",
        "Steroids only help once the boy has stopped walking",
      ],
      correctIndex: 1,
      explanation:
        "Long-term corticosteroids do not correct the genetic defect but meaningfully alter the natural history: ambulation is prolonged by years, scoliosis is delayed, and respiratory function is supported. Side-effects — weight gain, bone fragility, behavioural change — require proactive multidisciplinary management. Physiotherapists working in the 'steroid era' see longer ambulant phases than older textbooks describe.",
      difficulty: "Medium",
      tags: ["management", "pathology"],
      sectionSlug: "muscular-dystrophies",
    },
    {
      text: "What is the proposed mechanism of new weakness in post-polio syndrome?",
      options: [
        "Reactivation of the poliovirus in the spinal cord",
        "Late degeneration of enlarged, chronically overworked motor units formed by collateral sprouting after the original illness",
        "Autoimmune attack on the neuromuscular junction",
        "Progressive demyelination of peripheral nerves",
      ],
      correctIndex: 1,
      explanation:
        "After acute polio, surviving anterior horn cells sprouted collaterals to adopt orphaned muscle fibres, creating giant motor units that worked near capacity for decades. The late metabolic failure and degeneration of these overburdened units produces the new, slowly progressive weakness of post-polio syndrome — which is why aggressive strengthening can worsen it and pacing is central to management.",
      difficulty: "Hard",
      tags: ["pathology", "clinical-reasoning"],
      sectionSlug: "post-polio-mg",
    },
    {
      text: "Which clinical feature most characteristically distinguishes myasthenia gravis from other causes of weakness?",
      options: [
        "Weakness that is worst first thing in the morning",
        "Weakness that increases with repeated or sustained effort and improves with rest",
        "Weakness accompanied by glove-and-stocking sensory loss",
        "Weakness with brisk reflexes and clonus",
      ],
      correctIndex: 1,
      explanation:
        "MG blocks acetylcholine receptors at the neuromuscular junction, so transmission fails progressively with repeated use: weakness is fatigable — worse with sustained effort and later in the day, recovering with rest. Sensory loss points to neuropathy, brisk reflexes to UMN pathology, and morning-worst symptoms are not typical of MG.",
      difficulty: "Easy",
      tags: ["pathology", "assessment"],
      sectionSlug: "post-polio-mg",
    },
    {
      text: "How should physiotherapy sessions be scheduled for a patient with myasthenia gravis?",
      options: [
        "Late in the day to train fatigue resistance",
        "At the patient's strongest time of day, coordinated with medication, using short bouts with full recovery",
        "Only during inpatient admissions",
        "In single long sessions to maximise efficiency",
      ],
      correctIndex: 1,
      explanation:
        "Because MG weakness is fatigable and fluctuates with anticholinesterase medication, sessions are best scheduled when the patient is strongest (often morning or post-medication), delivered as short submaximal bouts with generous rest. Training 'through' fatigue does not build resistance in MG — it simply exhausts neuromuscular transmission.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "post-polio-mg",
    },
    {
      text: "What fundamentally distinguishes exercise dosing in neuromuscular disease from dosing in simple deconditioning?",
      options: [
        "Neuromuscular patients need higher intensities to overcome the disease",
        "Surviving motor units are already enlarged and near capacity, so dosing is submaximal and fatigue-monitored rather than built on maximal progressive overload",
        "There is no difference — muscle is muscle",
        "Neuromuscular patients should avoid all exercise",
      ],
      correctIndex: 1,
      explanation:
        "In deconditioning, muscle has adaptive headroom and responds to progressive overload towards capacity. In neuromuscular disease, remaining motor units have already adopted extra fibres and run close to their ceiling; maximal loading offers little adaptation and real risk of overwork damage. The correct response is submaximal dosing titrated to the 24–48-hour fatigue response — not exercise avoidance, which causes added disuse weakness.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "exercise-principles",
    },
    {
      text: "Which day-after finding most clearly indicates that yesterday's exercise dose was appropriate for a patient with a neuromuscular condition?",
      options: [
        "Marked muscle soreness proving the muscles were challenged",
        "Baseline strength and energy, with no increase in fatigue or weakness",
        "Sleeping four extra hours to recover",
        "Dark-coloured urine showing metabolic activation",
      ],
      correctIndex: 1,
      explanation:
        "The 24–48-hour response is the practical dosimeter: returning to baseline strength and energy indicates a tolerable, appropriate dose. Marked soreness, next-day weakness or exhaustion indicate overdose, and dark urine (myoglobinuria) indicates muscle fibre breakdown requiring medical review — the opposite of a training success.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "precautions"],
      sectionSlug: "exercise-principles",
    },
    {
      text: "During the acute progression phase of GBS, which physiotherapy priorities are correct?",
      options: [
        "Progressive resistance training to prevent atrophy",
        "Respiratory monitoring, positioning, pressure care and gentle passive movement — avoiding fatiguing active work",
        "Intensive treadmill gait training",
        "No physiotherapy input until the patient can walk",
      ],
      correctIndex: 1,
      explanation:
        "While the disease is still advancing, the priorities are protective: vital capacity trending, secretion management, positioning and pressure care, and passive/gentle assisted range of movement to prevent contracture. Fatiguing active exercise is avoided until the plateau, when graded, submaximal activity begins. 'No input' is wrong — the acute phase is when monitoring matters most.",
      difficulty: "Hard",
      tags: ["management", "precautions"],
      sectionSlug: "gbs-rehab",
    },
    {
      text: "A patient with MND asks the physiotherapist directly how the disease usually progresses. What is the best approach?",
      options: [
        "Change the subject to protect them from distress",
        "Provide honest information at the pace and depth the patient chooses, and connect them with the wider MDT for ongoing support",
        "Give full statistical survival data immediately regardless of their reaction",
        "Refer every question back to the neurologist and decline to discuss",
      ],
      correctIndex: 1,
      explanation:
        "Best practice in progressive neurological disease is honest, patient-led communication: answer what is asked, check how much the person wants to know, avoid both false reassurance and unsolicited detail, and ensure MDT and palliative-care support runs in parallel. Avoidance erodes trust; unfiltered data-dumping causes harm. The physiotherapist, seeing the patient frequently, is often the person these questions reach first.",
      difficulty: "Hard",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "mnd",
    },
  ],
  flashcards: [
    { front: "Classic triad of Guillain-Barré syndrome presentation?", back: "Post-infectious onset (1–3 weeks after e.g. Campylobacter), symmetrical ascending weakness, and reduced/absent reflexes — often with glove-and-stocking paraesthesia and pain." },
    { front: "What must be trended (not just SpO2) in acute GBS, and why?", back: "Vital capacity — SpO2 falls late in neuromuscular ventilatory failure; a falling VC gives early warning of the need for ventilatory support." },
    { front: "Name the three phases of GBS.", back: "Progression (up to 4 weeks), plateau, and recovery (months to years) — active rehab builds gradually from the plateau phase." },
    { front: "What is overwork weakness?", back: "Deterioration of strength in diseased or recovering partially denervated muscle caused by maximal/exhaustive exercise — prevented by submaximal dosing and monitoring the next-day response." },
    { front: "What sign combination characterises MND/ALS?", back: "Mixed UMN signs (spasticity, brisk reflexes) and LMN signs (wasting, fasciculations) with sensation typically spared." },
    { front: "Core physiotherapy roles in MND?", back: "Maintain function and safe mobility, energy conservation/pacing, anticipatory equipment timing, respiratory adjuncts (secretion clearance, cough augmentation), and sensitive patient-led communication within the MDT." },
    { front: "What is Gowers' sign and what does it suggest?", back: "Rising from the floor by 'climbing up the legs' with the hands — proximal weakness, classically Duchenne muscular dystrophy in young boys." },
    { front: "Key exercise caution in muscular dystrophy?", back: "Avoid eccentric-biased and maximal resistance loading — dystrophin-deficient fibres are mechanically fragile. Prescribe submaximal activity (swimming, cycling) plus daily stretching and night orthoses." },
    { front: "Mechanism of post-polio syndrome?", back: "Late degeneration of giant, chronically overworked motor units formed by collateral sprouting after acute polio — managed with pacing and energy conservation, not aggressive strengthening." },
    { front: "Hallmark of weakness in myasthenia gravis?", back: "Fatigability — weakness worsens with repeated/sustained effort and later in the day, improving with rest; schedule therapy at the patient's strongest time." },
    { front: "Early symptoms of respiratory muscle weakness to ask about in MND?", back: "Orthopnoea (breathless lying flat) and morning headache (nocturnal hypoventilation) — triggers for respiratory assessment and NIV consideration." },
    { front: "The universal exercise-dosing rule across neuromuscular disease?", back: "Submaximal effort, stop before fatigue, generous rest — and judge the dose by the 24–48-hour response: next-day weakness or exhaustion means reduce it." },
  ],
};

export default topic;
