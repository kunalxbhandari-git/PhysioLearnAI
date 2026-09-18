import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "exercise-prescription",
  title: "Principles of Exercise Prescription",
  category: "Exercise Therapy",
  description:
    "Learn to dose exercise like a clinician: the FITT-VP framework, muscle work types, strength vs hypertrophy vs endurance loading, stretching and aerobic prescription, and how to adjust dose in painful conditions.",
  difficulty: "Beginner",
  estMinutes: 32,
  icon: "dumbbell",
  keyTakeaways: [
    "FITT-VP — Frequency, Intensity, Time, Type, Volume and Progression — is the universal framework for writing any exercise prescription.",
    "Muscle work is isometric (no length change), concentric (shortening) or eccentric (lengthening under load); each has distinct clinical uses.",
    "Classic resistance dosing: strength ≥ ~80–85% 1RM × 1–6 reps; hypertrophy ~67–85% × 6–12 reps; endurance ≤ ~67% × 15+ reps — with rest periods to match.",
    "Progressive overload is the engine of adaptation, and specificity (SAID principle) determines what adapts — train what you want to improve.",
    "ROM exercise progresses along a continuum: passive → active-assisted → active → resisted, matched to healing stage and muscle capability.",
    "Static stretching is dosed at around 15–60 seconds per hold; dynamic stretching suits warm-ups; PNF techniques add neurophysiological mechanisms.",
    "Aerobic intensity is set with %HRmax or heart rate reserve (Karvonen), the Borg RPE scale, or the simple talk test — moderate intensity means you can talk but not sing.",
    "In painful populations the 24-hour rule guides load: pain up to ~5/10 that settles to baseline within 24 hours is acceptable; DOMS is normal, escalating joint pain is not.",
  ],
  sections: [
    {
      slug: "fitt-vp",
      title: "The FITT-VP Framework",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "A prescription is more than a list of exercises — it specifies exactly how much, how hard and how often, and how the programme will advance. The FITT-VP framework (used by the American College of Sports Medicine) captures every variable you must decide.",
        },
        {
          kind: "cards",
          items: [
            { title: "Frequency", text: "How often — sessions per week. E.g. resistance training 2–3×/week per muscle group; aerobic exercise most days.", icon: "calendar" },
            { title: "Intensity", text: "How hard — %1RM for resistance, %HRmax/RPE for aerobic work, hold duration and range for stretching.", icon: "gauge" },
            { title: "Time", text: "How long — duration of the session or of each effort (e.g. 30 minutes of cycling, 30-second holds).", icon: "clock" },
            { title: "Type", text: "Which mode — resistance, aerobic, ROM, stretching, balance, functional task training.", icon: "list" },
            { title: "Volume", text: "The total dose — sets × reps × load, or weekly minutes of aerobic work; the product of F, I and T.", icon: "layers" },
            { title: "Progression", text: "How the dose advances as the person adapts — the plan for next week, not just this one.", icon: "trending-up" },
          ],
        },
        {
          kind: "paragraph",
          text: "For general health, adults are advised to accumulate at least 150 minutes of moderate (or 75 minutes of vigorous) aerobic activity per week plus muscle-strengthening activity on two or more days — a useful baseline to keep in mind behind every clinical prescription.",
        },
        {
          kind: "keypoints",
          items: [
            "Every prescription should state F, I, T and T explicitly — 'do some squats' is not a prescription",
            "Volume = the total dose; Progression = the plan for changing it",
            "Public-health baseline: ≥150 min/week moderate aerobic + 2 days strengthening",
          ],
        },
      ],
    },
    {
      slug: "muscle-work-types",
      title: "Types of Muscle Work",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Skeletal muscle can produce force while staying the same length, shortening, or lengthening. Choosing the right contraction type for the clinical moment is one of the most practical skills in exercise therapy.",
        },
        { kind: "image", illustration: "muscle-fiber", caption: "Muscle structure from whole muscle to fibre: the contractile machinery that adapts to progressive loading." },
        {
          kind: "table",
          headers: ["Contraction type", "What happens", "Clinical uses"],
          rows: [
            ["Isometric", "Tension without joint movement", "Early rehab when movement is painful or restricted; activation work post-surgery; short-term analgesic effect in tendinopathy; safe entry point in flares"],
            ["Concentric", "Muscle shortens against load", "Building movement power and function — the 'lifting' phase of most exercises"],
            ["Eccentric", "Muscle lengthens under load", "Tendinopathy loading programmes; controlling deceleration (stairs, landing); produces high force at low energy cost — but the main driver of DOMS"],
          ],
        },
        {
          kind: "cards",
          items: [
            { title: "Isometrics in practice", text: "Quad sets after knee surgery, deep neck flexor holds, mid-range holds in painful shoulders. Dose commonly ~5×45-second holds at a moderate-heavy effort for tendon pain relief.", icon: "pause" },
            { title: "Eccentric emphasis", text: "Heel-lowering for Achilles tendinopathy, Nordic curls for hamstrings, slow lowering phases everywhere. Muscles tolerate ~20–50% more load eccentrically than concentrically.", icon: "arrow-down" },
            { title: "Concentric focus", text: "Sit-to-stand, step-ups, lifting tasks — most functional retraining is concentric-eccentric cycles; pure concentric work (e.g. cycling) minimises soreness.", icon: "arrow-up" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Because eccentric capacity exceeds concentric, a useful clinical trick is to assist the lift and control the lower — the patient trains at loads they could not lift concentrically.",
            "Unaccustomed eccentric work is the classic trigger for DOMS — introduce it gradually and warn the patient.",
          ],
        },
      ],
    },
    {
      slug: "strength-dosing",
      title: "Dosing: Strength vs Hypertrophy vs Endurance",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Resistance training adapts to the dose you give it. The key variable is intensity relative to the person's one-repetition maximum (1RM) — the heaviest load they can lift once with good form — with repetitions, sets and rest arranged to match the goal.",
        },
        { kind: "image", illustration: "resistance-band", caption: "Resistance bands in graded strengths let you apply the %1RM logic outside a gym: resistance rises as the band lengthens, so band grade and working range together set the effective load." },
        {
          kind: "table",
          headers: ["Goal", "Load (%1RM)", "Reps", "Sets", "Rest between sets"],
          rows: [
            ["Maximal strength", "≥ ~80–85%", "1–6", "2–6", "2–5 min"],
            ["Hypertrophy", "~67–85%", "6–12", "3–6", "30–90 s"],
            ["Muscular endurance", "≤ ~67%", "15+", "2–3", "≤ 30–60 s"],
            ["Power (advanced)", "moderate load moved fast (~30–60% for speed work)", "3–6", "3–5", "2–5 min"],
          ],
        },
        {
          kind: "paragraph",
          text: "In clinical practice you rarely test a true 1RM in a painful or post-operative patient. Estimate from a multiple-RM instead (e.g. a 10RM — the load just manageable for 10 good reps ≈ ~75% 1RM), or dose by repetitions-in-reserve: choosing a load the patient could lift only 2–3 more times at set's end approximates the right intensity without maximal testing.",
        },
        {
          kind: "steps",
          items: [
            { title: "Early strength gains are neural", text: "In the first 2–6 weeks improvement comes mostly from motor learning and neural drive — strength rises before muscles grow." },
            { title: "Hypertrophy takes longer", text: "Measurable muscle growth typically needs 6–12+ weeks of consistent loading — set expectations honestly." },
            { title: "Untrained patients respond to less", text: "Deconditioned and older patients gain strength at lower relative loads initially, but still need progression to keep adapting." },
          ],
        },
        {
          kind: "pearls",
          items: [
            "For most rehabilitation goals a pragmatic default is 3 sets of 8–12 reps at a load that feels hard by the last 2 reps, 2–3×/week — then progress.",
            "Rest matters: heavy strength work needs long rests (2–5 min) for the nervous system; endurance work deliberately keeps rests short.",
          ],
        },
        {
          kind: "warning",
          title: "Common dosing errors",
          items: [
            "Prescribing '3×10' at a trivially light load for every patient — no overload, no adaptation",
            "Testing 1RM in acute or post-operative patients — use estimated RM or repetitions-in-reserve instead",
            "Progressing load and volume simultaneously — change one variable at a time",
          ],
        },
      ],
    },
    {
      slug: "overload-specificity",
      title: "Progressive Overload & Specificity",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Two principles underpin all training. Progressive overload: tissues adapt only when challenged beyond their accustomed load, so the dose must keep rising as capacity rises. Specificity (the SAID principle — Specific Adaptation to Imposed Demands): the body adapts precisely to what is trained, in the movement, range, speed and energy system used.",
        },
        {
          kind: "list",
          items: [
            "Ways to overload: increase load, reps, sets, range, speed, complexity or frequency — or reduce rest and assistance",
            "Progress one variable at a time and re-check the response before the next step",
            "Specificity in practice: heavy slow squats improve squat strength more than they improve hopping; balance improves by practising balance, not by leg presses",
            "Transfer to function: the closer the exercise is to the goal task (sit-to-stand, stairs, lifting), the better the carry-over",
          ],
        },
        {
          kind: "keypoints",
          items: [
            "No overload → no adaptation; too much overload → flare or injury — dose sits between",
            "Train the quality you want: strength, endurance, power and balance are dosed differently",
            "Reversibility is the mirror principle: stop training and adaptations fade (detraining)",
          ],
        },
        {
          kind: "pearls",
          items: [
            "The simplest progression question at every review: 'is this still hard for you?' If the last two reps are no longer challenging, the dose is due to move.",
          ],
        },
      ],
    },
    {
      slug: "rom-exercises",
      title: "Range of Motion Exercise Types",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Range of motion (ROM) exercise maintains and restores joint movement, and it progresses along a continuum matched to tissue healing and the patient's ability to contract the muscle.",
        },
        { kind: "image", illustration: "goniometer", caption: "The universal goniometer — axis over the joint centre, arms along the proximal and distal segments — turns the ROM continuum into measurable progress by documenting range before and after intervention." },
        {
          kind: "steps",
          items: [
            { title: "Passive ROM (PROM)", text: "The joint is moved entirely by an external force — therapist, machine or the patient's other limb — with no muscle contraction. Used when active contraction is not allowed (early post-repair) or not possible (paralysis). Maintains joint nutrition and mobility; does not build strength." },
            { title: "Active-assisted ROM (AAROM)", text: "The patient contracts, and assistance (other hand, pulley, pole, sling, water) completes the range. Used when muscles are too weak or the movement too painful for full active range — the bridge from passive to active." },
            { title: "Active ROM (AROM)", text: "The patient moves the joint through range with no assistance. Maintains mobility, builds endurance and coordination, and doubles as an assessment of willingness and capability." },
            { title: "Resisted exercise", text: "Movement against external resistance — gravity, bands, weights, body weight — following the dosing rules of the previous section. The end of the ROM continuum and the start of strength training." },
          ],
        },
        {
          kind: "table",
          headers: ["Situation", "Appropriate ROM type"],
          rows: [
            ["Day 2 after rotator cuff repair (protocol-restricted)", "Passive ROM within protected range per protocol"],
            ["Shoulder elevation possible but weak and painful at 90°", "Active-assisted (pole or pulley) through the difficult arc"],
            ["Full pain-free active movement achieved", "Active ROM, then progress to resisted work"],
            ["Grade 2/5 quadriceps strength", "Gravity-eliminated active work (sliding board) → against gravity as strength grows"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "PROM maintains range but does not prevent muscle atrophy — add muscle work (even isometric) as soon as it is safe.",
            "Aquatic exercise gives graded assistance and resistance in one medium: buoyancy assists movement towards the surface and resists movement away from it.",
          ],
        },
      ],
    },
    {
      slug: "stretching",
      title: "Stretching Science & Dosing",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Stretching increases range of motion — in the short-to-medium term mainly by increasing stretch tolerance (the nervous system allows more range) rather than by making the tissue mechanically longer. Different techniques suit different moments.",
        },
        {
          kind: "cards",
          items: [
            { title: "Static stretching", text: "Take the muscle to a position of gentle tension and hold. Dose: ~15–60 s per hold (30 s is a common default), 2–4 repetitions, most days. Best for increasing flexibility; large doses immediately before power tasks can transiently reduce force.", icon: "pause" },
            { title: "Dynamic stretching", text: "Controlled, progressively larger movements through range (leg swings, arm circles, walking lunges). The stretch of choice within warm-ups — raises tissue temperature and rehearses the movement without the force-dampening of long static holds.", icon: "refresh-cw" },
            { title: "PNF stretching", text: "Proprioceptive neuromuscular facilitation — e.g. contract–relax: static stretch, then a ~5–6 s submaximal isometric contraction of the target muscle, relax, and move into the newly available range. Often gains slightly more range per session; needs instruction or a partner.", icon: "users" },
            { title: "Ballistic stretching", text: "Bouncing at end range. Generally avoided in rehabilitation populations — poorly controlled loading at end range with no advantage over the other methods for most patients.", icon: "alert-triangle" },
          ],
        },
        {
          kind: "keypoints",
          title: "Stretching dosage summary",
          items: [
            "Static: 15–60 s holds × 2–4 reps, ≥2–3 days/week (daily is fine); stretch to gentle tension, not pain",
            "Meaningful flexibility change takes weeks of consistency, like any adaptation",
            "Warm-up: prefer dynamic stretching; save long static holds for after activity or separate sessions",
            "Contracture management needs far longer total stretch time (positioning, splinting) than brief manual stretches",
          ],
        },
        {
          kind: "warning",
          title: "Precautions",
          items: [
            "Do not stretch aggressively across healing tissue, recent fractures or hypermobile/unstable joints",
            "Neural symptoms (pins and needles, shooting pain) during a stretch mean stop and reassess — nerves are not muscles",
            "In spasticity, brief stretching does not produce lasting change — combine positioning, strength and task practice",
          ],
        },
      ],
    },
    {
      slug: "aerobic-prescription",
      title: "Aerobic Exercise Prescription",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Aerobic prescription sets intensity by heart rate, perceived exertion or the talk test — three windows on the same physiology. Choose the method that suits the patient and setting; beta-blockers and arrhythmias make heart-rate methods unreliable, which is exactly when RPE and the talk test earn their place.",
        },
        {
          kind: "steps",
          items: [
            { title: "Heart-rate maximum method", text: "Estimate HRmax ≈ 220 − age (accept its ±10 bpm error). Moderate intensity ≈ 64–76% HRmax; vigorous ≈ 77–95%. Example: age 60 → HRmax ≈ 160, moderate ≈ 102–122 bpm." },
            { title: "Heart rate reserve (Karvonen) method", text: "Target HR = [(HRmax − HRrest) × %intensity] + HRrest. Uses the reserve between resting and maximal HR, so it tracks fitness better; moderate ≈ 40–59% HRR, vigorous ≈ 60–89% HRR." },
            { title: "Borg RPE scale", text: "The classic Borg scale runs 6–20 (roughly HR ÷ 10 in young adults). Moderate ≈ 12–13 ('somewhat hard'); vigorous ≈ 14–17. Valid when heart rate is not — teach patients to anchor the words to sensations." },
            { title: "Talk test", text: "Moderate: can talk in full sentences but cannot sing. Vigorous: can manage only short phrases. Free, intuitive and surprisingly accurate at the moderate-intensity boundary." },
          ],
        },
        {
          kind: "table",
          headers: ["Intensity", "%HRmax", "%HRR", "Borg 6–20", "Talk test"],
          rows: [
            ["Light", "57–63%", "30–39%", "9–11", "Can sing"],
            ["Moderate", "64–76%", "40–59%", "12–13", "Talk, not sing"],
            ["Vigorous", "77–95%", "60–89%", "14–17", "Short phrases only"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "On beta-blockers, heart-rate targets are meaningless — prescribe by RPE and the talk test instead.",
            "Deconditioned patients can accumulate their minutes in 10-minute bouts; the weekly total is what counts.",
          ],
        },
      ],
    },
    {
      slug: "balance-training",
      title: "Balance Training Progressions",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Balance improves only when it is genuinely challenged — training must take patients to the edge of their stability, safely. Progress by systematically removing the resources the balance system leans on.",
        },
        {
          kind: "list",
          items: [
            "Narrow the base of support: feet apart → together → semi-tandem → tandem → single leg",
            "Change the surface: firm floor → carpet → foam → unstable surfaces",
            "Challenge vision: eyes open → head turns → eyes closed (with close supervision)",
            "Add movement: reaching, stepping, turning, dual tasks (counting, carrying)",
            "Reduce hand support: both hands → one hand → fingertip → hover → none",
            "Make it functional: stepping over obstacles, uneven ground, crowded environments",
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Effective falls-prevention programmes are challenging, progressive and high-dose — around 3 hours per week, sustained, with strength work alongside",
            "If the patient never wobbles, the exercise is too easy; if they need rescuing, it is too hard",
            "Safety setup first: corner, counter or rail within reach, supervision matched to risk",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Progress balance exercises by removing one resource at a time (support, vision, firm surface) — exactly the one-variable rule used in strength progression.",
          ],
        },
      ],
    },
    {
      slug: "dosing-in-pain",
      title: "Dosing in Painful Conditions",
      estMinutes: 3,
      difficulty: "Intermediate",
      content: [
        {
          kind: "paragraph",
          text: "Painful conditions do not exempt patients from overload — they change how you find the right dose. Two tools organise this: the 24-hour symptom rule and the concept of irritability.",
        },
        {
          kind: "cards",
          items: [
            { title: "The 24-hour rule", text: "Pain up to about 5/10 during exercise is acceptable if symptoms settle back to baseline within 24 hours. Settles → dose is right or can progress. Persists or escalates → reduce, don't stop.", icon: "clock" },
            { title: "Irritability", text: "How easily symptoms are provoked and how long they take to settle. High irritability (provoked easily, settles slowly) → low doses, mid-range, more rest. Low irritability → load closer to normal training rules.", icon: "activity" },
            { title: "DOMS — normal", text: "Delayed-onset muscle soreness: dull muscle ache starting 24–48 h after unaccustomed (especially eccentric) exercise, peaks ~48 h, resolves within days. A sign of novelty, not damage to fear — ease the next session, don't abandon it.", icon: "check" },
            { title: "Harmful pain — not DOMS", text: "Sharp joint pain during exercise, swelling, night pain, escalating pain over days, or pain far from the worked muscles — these mean stop and reassess the exercise, load or diagnosis.", icon: "alert-octagon" },
          ],
        },
        {
          kind: "table",
          headers: ["Feature", "DOMS", "Warning pain"],
          rows: [
            ["Location", "In the exercised muscles, diffuse", "In the joint, sharp or localised; or unrelated area"],
            ["Timing", "Starts 24–48 h post-exercise, peaks ~48 h", "During exercise, or escalating day on day"],
            ["Course", "Resolves in 2–4 days, eases with movement", "Persists or worsens; night pain; swelling"],
            ["Action", "Reassure; slightly reduce next dose; continue", "Reduce or stop the exercise; reassess; refer if red flags"],
          ],
        },
        {
          kind: "paragraph",
          text: "Detraining is the other side of dosing: aerobic gains begin to decline within about two weeks of stopping, and strength follows over subsequent weeks — though strength is retained longer, and even one maintenance session per week preserves much of it. Plan maintenance from the start, not as an afterthought.",
        },
        {
          kind: "warning",
          title: "Precautions in painful populations",
          items: [
            "Do not push through escalating joint pain, swelling or night pain — that is a dosing failure, not toughness",
            "Complete rest is rarely the answer — deconditioning makes painful conditions worse",
            "Screen for red flags and comorbidities before loading (cardiac disease, unexplained weight loss, fever, recent trauma)",
          ],
        },
      ],
    },
    {
      slug: "exercise-examples",
      title: "Worked Dosing Examples",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "The same exercise becomes activation work, strength work or endurance work depending on how it is dosed. These examples show complete prescriptions — position, execution, dose and progression — for common clinical exercises.",
        },
        {
          kind: "exercise",
          name: "Bridging progression",
          purpose: "Gluteal and lumbopelvic strengthening with a built-in progression ladder from activation to single-leg strength.",
          position: "Supine, knees bent to about 90°, feet hip-width apart, arms by the sides.",
          execution: "Squeeze the glutes and lift the pelvis until shoulders, hips and knees form a straight line. Hold 2–3 seconds, lower with control.",
          dosage: "Activation: 10–15 reps × 2–3 sets daily. Strength emphasis: slow the tempo, progress the variant, 8–12 reps × 3 sets, 2–3×/week.",
          progression: "Double-leg → feet elevated → band around knees → offset (one foot forward) → single-leg bridge.",
          precautions: "Drive through the heels, ribs down; cramping hamstrings suggest poor gluteal contribution — cue glute squeeze and shorten the lever.",
        },
        {
          kind: "exercise",
          name: "Wall squat (isometric)",
          purpose: "Quadriceps strengthening with an easily adjustable isometric dose — useful in patellofemoral pain and tendinopathy where movement is provocative.",
          position: "Back flat against a wall, feet shoulder-width and about 40–50 cm from the wall.",
          execution: "Slide down until the knees reach about 45–60° flexion (less if painful) and hold, thighs sharing the load evenly, breathing normally.",
          dosage: "Start 3–5 holds of 20–45 seconds at an effort of ~6–7/10, once daily; for tendon-related pain, up to 5 × 45 s at a moderately hard effort.",
          progression: "Increase hold time toward 60 s, then depth toward 90°, then load (hold a weight), then progress to free squats.",
          precautions: "Knees track over the feet; avoid holds that provoke sharp anterior knee pain — reduce depth first, not effort.",
        },
        {
          kind: "exercise",
          name: "Heel raises (calf strengthening)",
          purpose: "Plantarflexor strength and capacity — for Achilles tendinopathy loading, push-off power and balance reserve in older adults.",
          position: "Standing tall, fingertip support on a wall or counter, weight even across the forefeet.",
          execution: "Rise onto the balls of both feet as high as possible, pause 1–2 seconds at the top, lower slowly over 3 seconds.",
          dosage: "10–15 reps × 3 sets, 2–3×/week for general strengthening; tendinopathy programmes typically progress towards heavier, slower loading over 12 weeks.",
          progression: "Double-leg → weight shifted to one side → single-leg → single-leg off a step edge (full range) → add load in a backpack.",
          precautions: "Expect some tendon pain within the acceptable (≤5/10, settles in 24 h) window in tendinopathy; escalating morning stiffness signals too much dose.",
        },
        {
          kind: "exercise",
          name: "Sit-to-stand as endurance vs strength",
          purpose: "Demonstrates dosing the same functional movement for two different goals — leg strength or task endurance.",
          position: "Firm chair, feet hip-width and drawn slightly back, arms crossed or reaching forward.",
          execution: "Lean forward from the hips, stand fully tall, then lower with a 3-second controlled descent.",
          dosage: "Strength: lower the seat or add a weighted backpack so ~8 reps is hard; 3 sets, 2–3 min rest, 2–3×/week. Endurance: standard chair, 15–25 reps × 2–3 sets, short rests, most days.",
          progression: "Strength: seat height down, load up, or single-leg emphasis. Endurance: more reps or timed bouts (as many as possible in 30–60 s).",
          precautions: "No hands unless needed for safety; knees track over feet; stop the set when form fails, not when the rep target says so.",
        },
        {
          kind: "exercise",
          name: "Active-assisted shoulder elevation with a pole",
          purpose: "Restore shoulder range when active elevation is weak or painful — the AAROM step of the ROM continuum.",
          position: "Supine (easiest) or sitting, holding a light pole or walking stick with both hands, affected side relaxed.",
          execution: "The strong arm pushes the pole so the affected arm is guided up into elevation within a comfortable range; pause at the first sensation of stretch, then lower with control.",
          dosage: "10–15 reps × 2–3 sets, 2–3× daily; move smoothly, 2–3 s in each direction.",
          progression: "Supine → inclined → sitting (gravity increases) → reduce the assisting hand's help → active elevation → light resistance.",
          precautions: "Respect any post-operative range restrictions; pain should ease as reps continue — ranges that progressively provoke pain need a smaller arc.",
        },
        {
          kind: "keypoints",
          title: "What the examples show",
          items: [
            "Dose defines the goal: the same movement can train activation, strength or endurance",
            "Every prescription states position, execution, dose AND the next progression",
            "Isometrics allow precise, tolerable dosing when movement provokes pain",
            "Functional movements (sit-to-stand, heel raises) transfer directly to daily tasks — specificity at work",
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
            "FITT-VP: Frequency, Intensity, Time, Type + Volume, Progression — state them all, every time",
            "Contractions: isometric (painful/early stages, tendon analgesia), concentric (function), eccentric (tendinopathy, control, DOMS driver)",
            "Dosing: strength ≥80–85% 1RM × 1–6; hypertrophy 67–85% × 6–12; endurance ≤67% × 15+; rest to match",
            "Overload + specificity (SAID) drive adaptation; reversibility (detraining) undoes it — aerobic fades first, from ~2 weeks",
            "ROM continuum: passive → active-assisted → active → resisted",
            "Stretching: static 15–60 s × 2–4; dynamic for warm-up; PNF contract–relax for extra range",
            "Aerobic: moderate = 64–76% HRmax / 40–59% HRR / Borg 12–13 / talk-not-sing",
            "Pain dosing: ≤5/10 settling within 24 h is acceptable; DOMS (muscle, 24–48 h, resolves) vs warning pain (joint, sharp, escalating, night)",
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
      text: "In the FITT-VP framework, what does the 'P' stand for and why does it matter?",
      options: [
        "Power — every programme must include power training",
        "Progression — the planned advancement of dose as the person adapts",
        "Precaution — the list of contraindications",
        "Periodisation — alternating hard and easy years",
      ],
      correctIndex: 1,
      explanation:
        "FITT-VP = Frequency, Intensity, Time, Type, Volume and Progression. Progression is the plan for how the dose will advance as capacity improves — without it, the programme stops overloading and adaptation plateaus. A prescription describes next month, not just this week.",
      difficulty: "Easy",
      tags: ["exercise-therapy"],
      sectionSlug: "fitt-vp",
    },
    {
      text: "Which type of muscle contraction involves the muscle lengthening while producing tension?",
      options: ["Isometric", "Concentric", "Eccentric", "Isotonic shortening"],
      correctIndex: 2,
      explanation:
        "Eccentric contraction means the muscle produces force while being lengthened by an external load — as the quadriceps do when lowering into a chair. Eccentric work generates the highest forces at the lowest energy cost, is central to tendinopathy loading, and is the main trigger of DOMS after unaccustomed exercise.",
      difficulty: "Easy",
      tags: ["exercise-therapy", "anatomy"],
      sectionSlug: "muscle-work-types",
    },
    {
      text: "Why are isometric exercises often the first choice in an acutely painful joint or tendon?",
      options: [
        "They build muscle bulk faster than other contraction types",
        "They load the muscle-tendon unit without joint movement, are easy to dose precisely, and can reduce tendon pain short-term",
        "They are the only contraction type that does not cause fatigue",
        "They stretch the joint capsule effectively",
      ],
      correctIndex: 1,
      explanation:
        "Isometrics produce tension without moving the painful joint, so the dose (effort, duration, joint angle) can be titrated finely below the provocation threshold. In tendinopathy, moderately heavy isometric holds (e.g. ~5 × 45 s) can produce short-term analgesia. They maintain activation early after surgery when movement is restricted — though they are a starting point, not an endpoint.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "muscle-work-types",
    },
    {
      text: "Which prescription best targets maximal strength in a trained individual?",
      options: [
        "20 reps at 50% 1RM with 30-second rests",
        "3–5 reps at 85% 1RM with 3-minute rests",
        "12 reps at 65% 1RM with 60-second rests",
        "30-second static holds at low effort",
      ],
      correctIndex: 1,
      explanation:
        "Maximal strength develops with heavy loads (≥ ~80–85% 1RM), low repetitions (1–6) and long rests (2–5 minutes) that let the nervous system recover between near-maximal efforts. Twenty reps at 50% trains endurance; 12 reps at 65% sits in the hypertrophy-endurance range.",
      difficulty: "Easy",
      tags: ["exercise-therapy"],
      sectionSlug: "strength-dosing",
    },
    {
      text: "A patient can lift a 12 kg weight exactly 10 times with good form before failing. Approximately what is their 1RM for this movement?",
      options: ["About 13 kg", "About 16 kg", "About 24 kg", "About 30 kg"],
      correctIndex: 1,
      explanation:
        "A 10RM corresponds to roughly 75% of 1RM, so 1RM ≈ 12 ÷ 0.75 ≈ 16 kg. Estimating from a multiple-RM (or using repetitions-in-reserve) lets you set percentage-based intensities without exposing a painful or post-operative patient to a risky true 1RM test.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "assessment"],
      sectionSlug: "strength-dosing",
    },
    {
      text: "A patient's strength improves substantially within the first three weeks of resistance training. What mostly explains this early gain?",
      options: [
        "Rapid muscle hypertrophy",
        "Neural adaptations — improved motor unit recruitment and coordination",
        "Increased tendon length",
        "Conversion of type I fibres to type II",
      ],
      correctIndex: 1,
      explanation:
        "Early strength gains (first ~2–6 weeks) are predominantly neural: better recruitment, firing rates and coordination of motor units, plus skill in the movement itself. Measurable hypertrophy takes 6–12+ weeks of consistent loading. This is worth explaining to patients — they get stronger before they look different.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "anatomy"],
      sectionSlug: "strength-dosing",
    },
    {
      text: "What does the SAID principle (specificity) imply for a patient whose goal is to climb stairs confidently?",
      options: [
        "Any leg exercise will transfer equally well to stairs",
        "Training should include stair-like tasks — step-ups and loaded knee extension through the relevant range",
        "Only stretching will improve stair climbing",
        "Upper limb training will transfer through cross-education",
      ],
      correctIndex: 1,
      explanation:
        "Specific Adaptation to Imposed Demands: the body adapts to the specific movement, range, speed and energy system trained. Step-ups replicate the joint angles, contraction types and balance demands of stair climbing, so they transfer far better than non-specific leg work. General strengthening still helps — but the closer to the task, the better the carry-over.",
      difficulty: "Easy",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "overload-specificity",
    },
    {
      text: "Which scenario is the correct indication for PASSIVE range of motion exercise?",
      options: [
        "A patient who can move the joint fully without pain",
        "Early after tendon repair when active contraction is prohibited by protocol",
        "A patient training for hypertrophy",
        "Improving cardiovascular endurance",
      ],
      correctIndex: 1,
      explanation:
        "PROM is used when active contraction is not permitted (early post-repair protocols) or not possible (paralysis): an external force moves the joint to maintain nutrition and mobility. It does not strengthen — muscle work resumes along the continuum (isometrics, AAROM, AROM, resisted) as soon as healing allows.",
      difficulty: "Easy",
      tags: ["exercise-therapy", "precautions"],
      sectionSlug: "rom-exercises",
    },
    {
      text: "A patient two weeks after shoulder surgery can initiate elevation but cannot complete the range against gravity without pain. Which exercise type fits this stage best?",
      options: [
        "Passive ROM only",
        "Active-assisted ROM, e.g. pole- or pulley-assisted elevation",
        "Heavy resisted elevation",
        "Ballistic stretching into elevation",
      ],
      correctIndex: 1,
      explanation:
        "The patient can contract but cannot complete the range — the definition of the active-assisted stage. A pole, pulley, the other arm or water assists the movement through the difficult arc, bridging passive and full active work. Staying passive would under-dose; resisted work and ballistic stretching would overload healing tissue.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "rom-exercises",
    },
    {
      text: "What is the commonly recommended dose for static stretching to improve flexibility?",
      options: [
        "2–3 seconds per hold, 20 repetitions",
        "15–60 seconds per hold, 2–4 repetitions, most days of the week",
        "5 minutes per hold, once weekly",
        "Bounce at end range for 30 seconds",
      ],
      correctIndex: 1,
      explanation:
        "Static stretching is dosed at roughly 15–60 seconds per hold (30 s is a widely used default), repeated 2–4 times, on at least 2–3 days per week — daily practice is fine and effective. Very short holds provide too little stimulus; bouncing describes ballistic stretching, which is generally avoided in rehabilitation.",
      difficulty: "Easy",
      tags: ["exercise-therapy"],
      sectionSlug: "stretching",
    },
    {
      text: "In a contract–relax PNF stretch for the hamstrings, what does the patient do after reaching the initial stretch position?",
      options: [
        "Bounces rhythmically at end range",
        "Performs a ~5–6 second submaximal isometric hamstring contraction against resistance, relaxes, then moves further into range",
        "Contracts the quadriceps maximally for 60 seconds",
        "Holds their breath and pushes to maximal pain",
      ],
      correctIndex: 1,
      explanation:
        "Contract–relax: take the muscle to gentle stretch, have the patient contract that same muscle isometrically at submaximal effort for about 5–6 seconds against the therapist's or strap's resistance, relax, then take up the newly available range. The technique often gains slightly more range per session than static stretching alone.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "assessment"],
      sectionSlug: "stretching",
    },
    {
      text: "Why is prolonged static stretching usually avoided immediately BEFORE explosive or power-based activity?",
      options: [
        "It permanently lengthens the tendons",
        "Long static holds can transiently reduce force and power output; dynamic stretching is preferred in warm-up",
        "It raises heart rate excessively",
        "Static stretching only works after exercise",
      ],
      correctIndex: 1,
      explanation:
        "Large doses of static stretching immediately before performance can transiently dampen force and power production. Warm-ups therefore favour dynamic stretching — progressive movement through range that raises temperature and rehearses the task. Static stretching remains valuable for flexibility goals at other times; brief holds before activity are unlikely to matter much.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "stretching",
    },
    {
      text: "Using the heart rate reserve (Karvonen) method, what is the moderate-intensity (40–59% HRR) target range for a 60-year-old with a resting heart rate of 70 bpm (HRmax estimated as 220 − age)?",
      options: ["~90–100 bpm", "~106–123 bpm", "~130–150 bpm", "~150–160 bpm"],
      correctIndex: 1,
      explanation:
        "HRmax ≈ 220 − 60 = 160; HRR = 160 − 70 = 90. Target = (90 × 0.40) + 70 = 106 bpm to (90 × 0.59) + 70 ≈ 123 bpm. The Karvonen method anchors intensity to the individual's reserve between resting and maximal heart rate, tracking true relative effort better than %HRmax alone.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "assessment"],
      sectionSlug: "aerobic-prescription",
    },
    {
      text: "A patient on beta-blockers wants to walk at moderate intensity. What is the best way to prescribe intensity?",
      options: [
        "Target 64–76% of age-predicted HRmax",
        "Use the Borg RPE scale (12–13, 'somewhat hard') and the talk test (can talk, cannot sing)",
        "Walk as fast as possible until exhausted",
        "Keep heart rate below resting level",
      ],
      correctIndex: 1,
      explanation:
        "Beta-blockade blunts the heart-rate response, making all HR-based targets unreliable. Perceived exertion (Borg 12–13 of 20 for moderate work) and the talk test (full sentences possible, singing not) reflect actual physiological strain and are the prescription methods of choice in these patients.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "precautions", "clinical-reasoning"],
      sectionSlug: "aerobic-prescription",
    },
    {
      text: "Which change makes a standing balance exercise genuinely harder?",
      options: [
        "Widening the stance and adding firm hand support",
        "Narrowing the base to tandem stance, on foam, with head turns",
        "Moving to a firmer surface with eyes open",
        "Sitting down while performing arm movements",
      ],
      correctIndex: 1,
      explanation:
        "Balance progresses by removing the resources the system relies on: narrowing the base (tandem/single leg), softening the surface (foam degrades ankle proprioceptive input), and challenging vision or adding head movement. Widening the stance and adding support make the task easier. Effective balance training keeps the patient safely at the edge of stability — mild wobble is the working zone.",
      difficulty: "Easy",
      tags: ["exercise-therapy", "assessment"],
      sectionSlug: "balance-training",
    },
    {
      text: "Two days after starting a new eccentric-biased leg programme, a patient reports diffuse aching in both thighs that eases as they move around. What is the correct interpretation and advice?",
      options: [
        "Muscle tear — stop all exercise for a month",
        "DOMS — normal after unaccustomed eccentric work; reassure, ease the next session slightly, and continue the programme",
        "Deep vein thrombosis — urgent referral",
        "The programme is useless because it caused soreness",
      ],
      correctIndex: 1,
      explanation:
        "Diffuse muscle soreness beginning 24–48 hours after novel (especially eccentric) exercise, peaking around 48 hours and easing with gentle movement is classic DOMS — a normal response to unaccustomed load, not tissue damage to fear. Reassure, trim the next session modestly, and continue; the repeated-bout effect makes future sessions far less sore. Unilateral calf swelling, heat and disproportionate pain would raise different concerns.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "clinical-reasoning", "precautions"],
      sectionSlug: "dosing-in-pain",
    },
    {
      text: "Which symptom pattern after exercise indicates the load was excessive rather than acceptable, according to the 24-hour rule?",
      options: [
        "Pain 4/10 during exercise, back to baseline by next morning",
        "Mild muscle soreness that eases with a walk",
        "Joint pain that is worse the next day and stays elevated for three days",
        "Feeling pleasantly tired the evening after the session",
      ],
      correctIndex: 2,
      explanation:
        "The 24-hour rule accepts pain up to about 5/10 during exercise provided symptoms return to baseline within 24 hours. Joint pain that remains elevated for days signals the dose exceeded current tissue capacity — reduce load, range or volume rather than stopping altogether. Tolerable in-session pain that settles, and ordinary muscle soreness, are acceptable responses.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "precautions", "clinical-reasoning"],
      sectionSlug: "dosing-in-pain",
    },
    {
      text: "A patient with a highly irritable shoulder (pain provoked by minimal activity, taking hours to settle) needs an exercise programme. What is the appropriate starting strategy?",
      options: [
        "Full-range loaded exercise to desensitise the shoulder quickly",
        "Low-dose, mid-range exercise (e.g. isometrics), short of provocation, with generous rest and gradual progression",
        "No exercise until the shoulder is completely pain-free",
        "Stretch aggressively at end range twice daily",
      ],
      correctIndex: 1,
      explanation:
        "High irritability means a low provocation threshold and slow settling, so the dose starts low: mid-range or isometric work below the symptom threshold, modest volumes, longer recovery, and progression only as irritability falls. Complete rest deconditions and delays recovery; end-range aggressive loading in a highly irritable presentation predictably flares it.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "exercise-therapy", "management"],
      sectionSlug: "dosing-in-pain",
    },
    {
      text: "What happens to training adaptations when a patient stops exercising completely?",
      options: [
        "All adaptations are permanent once achieved",
        "Aerobic fitness begins to decline within about two weeks; strength declines more slowly, and a small maintenance dose preserves much of it",
        "Strength disappears within 48 hours",
        "Only flexibility is lost with detraining",
      ],
      correctIndex: 1,
      explanation:
        "Reversibility: aerobic adaptations (blood volume, VO2max) begin to fade within roughly two weeks of stopping, while strength declines more gradually over subsequent weeks — and as little as one quality session per week can maintain most strength gains. This is why prescriptions should include a maintenance plan, not just a build phase.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "dosing-in-pain",
    },
    {
      text: "A wall squat is prescribed as 5 holds of 45 seconds at a moderately hard effort for a patient with patellar tendon pain. What is the primary rationale for this isometric dose?",
      options: [
        "Isometric holds of this type can reduce tendon pain short-term while maintaining quadriceps load",
        "It maximises muscle hypertrophy faster than any other method",
        "It stretches the patellar tendon to lengthen it",
        "It avoids loading the quadriceps entirely",
      ],
      correctIndex: 0,
      explanation:
        "Moderately heavy isometric holds (commonly ~5 × 45 s) load the muscle-tendon unit without provocative movement and can produce short-term reductions in tendon pain, making them a useful entry point and in-season management tool in patellar tendinopathy. They keep the quadriceps working — the aim is load without provocation, progressing to heavier, slower isotonic work as tolerance builds.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "management", "clinical-reasoning"],
      sectionSlug: "exercise-examples",
    },
  ],
  flashcards: [
    { front: "What does FITT-VP stand for?", back: "Frequency, Intensity, Time, Type — plus Volume and Progression." },
    { front: "Define the three types of muscle work.", back: "Isometric: tension without length change. Concentric: muscle shortens against load. Eccentric: muscle lengthens under load." },
    { front: "Classic dosing for maximal strength?", back: "≥ ~80–85% 1RM, 1–6 reps, 2–6 sets, 2–5 minutes rest between sets." },
    { front: "Classic dosing for hypertrophy and endurance?", back: "Hypertrophy: ~67–85% 1RM × 6–12 reps, short-moderate rests. Endurance: ≤ ~67% 1RM × 15+ reps, minimal rest." },
    { front: "What is the SAID principle?", back: "Specific Adaptation to Imposed Demands — the body adapts precisely to the movement, range, speed and energy system trained." },
    { front: "State the ROM exercise continuum.", back: "Passive → active-assisted → active → resisted, matched to healing stage and muscle capability." },
    { front: "Static stretching dose for flexibility?", back: "15–60 s per hold (30 s default), 2–4 repetitions, at least 2–3 days/week — to gentle tension, not pain." },
    { front: "Describe contract–relax PNF stretching.", back: "Stretch, then ~5–6 s submaximal isometric contraction of the target muscle, relax, and move into the new range." },
    { front: "Three ways to set moderate aerobic intensity?", back: "64–76% HRmax; 40–59% heart rate reserve (Karvonen); Borg RPE 12–13 — or the talk test: can talk, cannot sing." },
    { front: "State the 24-hour rule for exercise in painful conditions.", back: "Pain up to ~5/10 during exercise is acceptable if symptoms settle to baseline within 24 hours; persisting pain means reduce the dose." },
    { front: "DOMS vs harmful pain — key differences?", back: "DOMS: diffuse muscle ache 24–48 h post-exercise, peaks ~48 h, resolves in days. Warning pain: joint-based, sharp, during exercise, escalating, swelling or night pain." },
    { front: "How quickly does detraining occur?", back: "Aerobic fitness starts declining within ~2 weeks of stopping; strength fades more slowly and can largely be kept with ~1 session/week." },
  ],
};

export default topic;
