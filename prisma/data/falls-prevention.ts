import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "falls-prevention",
  title: "Falls Prevention & Balance in Older Adults",
  category: "Geriatric",
  description:
    "Learn why older adults fall, how to screen and assess balance and falls risk, and how to deliver the evidence-based, progressively challenging exercise programmes that genuinely reduce falls.",
  difficulty: "Beginner",
  estMinutes: 28,
  icon: "activity",
  keyTakeaways: [
    "Roughly one in three adults over 65 falls each year — falls are common, serious and substantially preventable.",
    "Balance depends on three sensory systems (visual, vestibular, somatosensory) integrated with adequate lower-limb strength and reaction speed.",
    "Falls are almost always multifactorial: medications, vision, home hazards, orthostatic hypotension and weakness stack together.",
    "Simple tools screen risk well: Timed Up and Go (≥12–13.5 s raises concern), 30-second chair stand, single-leg stance, and gait speed — the 'sixth vital sign'.",
    "Exercise prevents falls — but only if it genuinely challenges balance and totals around 3 or more hours per week, sustained.",
    "The Otago programme and tai chi are the best-known evidence-based approaches; both combine progressive strength and balance work.",
    "Fear of falling drives activity restriction, which drives deconditioning, which drives further falls — break the spiral early.",
    "Every faller needs more than a fracture check: ask why they fell, review medications and vision, and teach them how to get up off the floor.",
  ],
  sections: [
    {
      slug: "epidemiology",
      title: "Falls: Scale of the Problem",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "About one in three community-dwelling adults over 65 — and around half of those over 80 — fall at least once each year. Falls are the leading cause of injury-related death and hospital admission in older adults, and having fallen once doubles the chance of falling again.",
        },
        {
          kind: "cards",
          items: [
            { title: "Hip fracture", text: "Over 90% of hip fractures result from a fall. A hip fracture in an older adult carries substantial one-year mortality, and many survivors never regain their previous level of independence.", icon: "bone" },
            { title: "Other injuries", text: "Wrist and vertebral fractures, head injuries (especially important in patients on anticoagulants), lacerations and 'long lies' — remaining on the floor for over an hour — with pressure damage, dehydration and rhabdomyolysis.", icon: "alert-triangle" },
            { title: "Fear of falling", text: "Up to half of fallers develop significant fear of falling — and so do many older adults who have never fallen. Fear itself predicts future falls.", icon: "shield-alert" },
            { title: "System cost", text: "Falls drive emergency department visits, admissions, care-home entry and loss of independence — prevention is one of the most cost-effective things physiotherapists do.", icon: "trending-down" },
          ],
        },
        {
          kind: "paragraph",
          text: "The fear-of-falling spiral deserves special attention: after a fall (or a near-miss), many older adults restrict activity 'to be safe'. Restriction causes deconditioning — weaker legs, poorer balance, slower reactions — which makes the next fall more likely, confirming the fear. Physiotherapy interrupts this loop by rebuilding capacity and confidence together.",
        },
        {
          kind: "keypoints",
          title: "Numbers worth remembering",
          items: [
            "≈1 in 3 over-65s fall each year; ≈1 in 2 over-80s",
            "One fall doubles the risk of another",
            "> 90% of hip fractures are caused by falls",
            "A 'long lie' of over an hour on the floor is itself a marker of poor prognosis",
          ],
        },
      ],
    },
    {
      slug: "balance-systems",
      title: "How Balance Works",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Standing still is not passive — it is a continuous sensorimotor task. The central nervous system integrates three streams of sensory information, weights them according to reliability, and issues rapid corrective motor commands through muscles that must be strong and fast enough to execute them.",
        },
        {
          kind: "cards",
          items: [
            { title: "Visual system", text: "Reports the position and motion of the environment. Ages with cataract, glaucoma, macular degeneration and slowed dark adaptation. Multifocal lenses blur ground contrast on stairs.", icon: "eye" },
            { title: "Vestibular system", text: "Semicircular canals and otoliths detect head rotation and linear acceleration/gravity. Vestibular function declines with age; hypofunction causes unsteadiness, especially with head turns and in the dark.", icon: "compass" },
            { title: "Somatosensory system", text: "Proprioceptors and cutaneous receptors — especially in the feet and ankles — report body position and surface conditions. Peripheral neuropathy (e.g. diabetic) removes this input and is a potent falls risk factor.", icon: "footprints" },
            { title: "Musculoskeletal effectors", text: "Sensing a sway is useless without the strength, power and speed to correct it. Age-related sarcopenia disproportionately affects fast (type II) fibres — exactly the ones needed for rapid stepping reactions.", icon: "dumbbell" },
          ],
        },
        {
          kind: "paragraph",
          text: "Healthy adults re-weight these inputs constantly: eyes closed on a firm surface, somatosensation dominates; standing on foam, vision dominates. Older adults often become visually dependent, so they struggle most when vision is removed or unreliable — in the dark, or in visually busy environments. Balance reactions follow a hierarchy: ankle strategy for small sway, hip strategy for larger perturbations, and a protective step when the centre of mass leaves the base of support.",
        },
        {
          kind: "keypoints",
          title: "Why this matters for treatment",
          items: [
            "Balance training must manipulate sensory conditions (eyes closed, foam, head turns) — not just repeat easy standing",
            "Stepping reactions can be trained, and they are the last line of defence before a fall",
            "Strength — especially rapid force production — is part of the balance system, not separate from it",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Ask about function in the dark: needing lights on to walk at night suggests loss of somatosensory or vestibular redundancy.",
            "Watching a patient turn their head while walking often reveals more than static balance tests.",
          ],
        },
      ],
    },
    {
      slug: "risk-factors",
      title: "Multifactorial Risk Factors",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Single-cause falls are the exception. Most falls happen when several modest risk factors coincide with a hazardous moment — the poorly lit stair, the sudden stand from bed, the rushed trip to the toilet at night. Risk rises steeply with the number of factors present, which is why assessment must be systematic and management multifactorial.",
        },
        {
          kind: "table",
          headers: ["Risk factor", "Examples / detail", "What physiotherapy or the team can do"],
          rows: [
            ["Previous falls", "Strongest single predictor of future falls", "Full multifactorial assessment after any fall"],
            ["Muscle weakness & balance deficit", "Sarcopenia, slow chair stand, unsteady turning", "Progressive strength and challenging balance training"],
            ["Medications & polypharmacy", "≥4–5 regular medicines; psychotropics (sedatives, hypnotics, antidepressants, antipsychotics), opioids, antihypertensives", "Flag for structured medication review by prescriber/pharmacist"],
            ["Orthostatic (postural) hypotension", "Drop of ≥20 mmHg systolic or ≥10 mmHg diastolic within 3 minutes of standing; dizziness on rising", "Lying-standing BP check, education on slow staged rising, medical review"],
            ["Vision impairment", "Cataract, poor contrast sensitivity, out-of-date prescription, multifocals on stairs", "Refer for eye examination; advise single-vision lenses for stairs/outdoors"],
            ["Home hazards", "Loose rugs, trailing cables, poor lighting, no stair rails, clutter, slippery bathrooms", "Home hazard assessment and modification (with OT), best evidence in high-risk fallers"],
            ["Footwear", "Loose slippers, high heels, smooth soles, walking in socks", "Advise well-fitting shoes with thin firm soles, enclosed heel, good fixation"],
            ["Cognitive impairment & mood", "Dementia, delirium, depression — impaired judgement and dual-tasking", "Simplified instructions, supervised programmes, carer involvement"],
            ["Continence & nocturia", "Rushing to the toilet, night-time trips in the dark", "Continence review, commode/lighting strategies"],
            ["Medical conditions", "Stroke, Parkinson's, neuropathy, arthritis, cardiac syncope, vitamin D deficiency", "Condition-specific management and onward referral"],
          ],
        },
        {
          kind: "warning",
          title: "Commonly missed contributors",
          items: [
            "Postural hypotension — measure lying and standing BP; symptoms are an unreliable guide",
            "New sedatives or a recent dose increase shortly before the fall",
            "Alcohol, often underestimated in older adults",
            "Syncope masquerading as a 'trip' — ask specifically about loss of consciousness and warning symptoms",
          ],
        },
      ],
    },
    {
      slug: "screening-assessment",
      title: "Screening & Assessment",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Guidelines recommend asking every older adult at least yearly: Have you fallen in the past year? Do you feel unsteady? Are you worried about falling? A 'yes' to any triggers assessment. The physiotherapy assessment combines validated performance tests with observation of real-world tasks — turning, reaching, stepping over objects, walking while talking.",
        },
        { kind: "image", illustration: "gait-cycle", caption: "The gait cycle. Watch for reduced step length, widened base, increased double-support time, veering on turns and slowed cadence — the typical 'cautious gait' of the older person at risk of falling." },
        {
          kind: "table",
          headers: ["Test", "What it measures", "Interpretation concepts"],
          rows: [
            ["Timed Up and Go (TUG)", "Rise from chair, walk 3 m, turn, return, sit — timed", "≥12–13.5 s is commonly used to flag increased falls risk in community-dwelling older adults; watch quality (turning, hesitancy), not just time"],
            ["30-second chair stand", "Number of full stands in 30 s without using arms", "Functional lower-limb strength/power; compare with age- and sex-referenced norms — inability to stand without hands is itself a marker of high risk"],
            ["Berg Balance Scale", "14 static and dynamic tasks, scored 0–56", "Lower scores mean greater impairment; ≤45 has traditionally flagged elevated falls risk, but use it to profile deficits, not as a single cutoff"],
            ["Single-leg stance", "Time standing unsupported on one leg", "Under ~5 s is associated with increased falls risk; also a quick reassessment measure"],
            ["Gait speed", "Usual pace over a short marked distance", "The 'sixth vital sign': below ~0.8 m/s predicts adverse outcomes and frailty; below ~1.0–1.2 m/s many pedestrian crossings become impractical"],
            ["Functional reach", "Forward reach distance without stepping", "Reduced reach (<~15–18 cm) reflects limited stability margins"],
          ],
        },
        {
          kind: "paragraph",
          text: "Also assess: lying and standing blood pressure, footwear, walking-aid condition and suitability, fear of falling (e.g. short Falls Efficacy Scale-International), cognition, and — always — the story of previous falls: where, when, doing what, any warning, any loss of consciousness, and how they got up.",
        },
        {
          kind: "pearls",
          items: [
            "Watch the turn in the TUG — multi-step, en-bloc or staggering turns often reveal risk that the total time hides.",
            "Dual-tasking (walking while counting backwards) that markedly worsens gait suggests reduced automaticity and higher risk.",
            "Repeat the same two or three measures at every review — change over time matters more than any single score.",
          ],
        },
        {
          kind: "redflags",
          items: [
            "Loss of consciousness or unexplained ('found on floor') falls — cardiac or neurological syncope workup needed",
            "New focal neurology, acute confusion, or head injury on anticoagulants after a fall — urgent medical review",
            "Recurrent falls despite intervention — escalate to comprehensive geriatric assessment",
            "Suspected fracture: pain, deformity, inability to weight-bear after a fall",
          ],
        },
      ],
    },
    {
      slug: "evidence-based-programmes",
      title: "What Actually Prevents Falls",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Exercise is the single best-evidenced intervention for preventing falls in community-dwelling older adults — well-designed programmes reduce fall rates by around a quarter. But the evidence comes with two conditions that clinicians routinely underdeliver on: the exercise must genuinely challenge balance, and there must be enough of it.",
        },
        {
          kind: "keypoints",
          title: "The effective dose",
          items: [
            "Balance challenge is the active ingredient: reducing the base of support, moving the centre of mass to the limits of stability, and reducing hand support",
            "Around 3 or more hours per week of exercise, sustained long-term, is associated with the largest effects",
            "Programmes must be progressive — what challenges a patient in week 1 must not still be the programme in week 12",
            "Walking programmes alone do not reduce falls (and may increase exposure in high-risk fallers); strength training alone is also insufficient",
          ],
        },
        {
          kind: "cards",
          items: [
            { title: "Otago Exercise Programme", text: "Home-based, individually prescribed and progressed: ~5 leg-strengthening exercises with ankle weights, ~12 balance exercises, plus a walking plan. Delivered with follow-up visits/calls over months; strongest evidence in those 80+ and previous fallers.", icon: "home" },
            { title: "Tai chi", text: "Slow, controlled weight-shifting with continuous postural challenge. Good trial evidence for falls reduction in community-dwelling older adults, plus benefits for balance confidence.", icon: "wind" },
            { title: "Group balance classes", text: "Structured, progressive strength-and-balance classes (e.g. FaME-style) reduce falls when dose and challenge are adequate — and add social reinforcement that supports adherence.", icon: "users" },
            { title: "Multifactorial programmes", text: "Assessment-driven packages (exercise + medication review + vision + home hazards) are recommended for high-risk and recurrent fallers, delivered by a multidisciplinary team.", icon: "layers" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Adherence is the hidden variable — a technically perfect programme the patient abandons in week 3 prevents nothing. Build in enjoyment, habit anchors and follow-up.",
            "\"Is this exercise hard enough to be slightly wobbly (but safe)?\" is a better quality check than counting repetitions.",
          ],
        },
      ],
    },
    {
      slug: "balance-exercise-progression",
      title: "Progressive Balance Exercise Blocks",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "The following blocks form a progressive framework. Each is performed near a counter or stable support, progressing from fingertip support to hands-free, and only advancing when the current level is steady. 'Safe but slightly challenging' is the target sensation.",
        },
        {
          kind: "exercise",
          name: "Sit-to-stand",
          purpose: "Build the leg strength and power that underpin every transfer — and the single most functional strength exercise for older adults.",
          position: "Firm chair with armrests available, feet back under the knees, hip-width apart.",
          execution: "Lean forward ('nose over toes'), push through the legs to stand fully, then lower with control over 3 seconds.",
          dosage: "8–12 repetitions × 2–3 sets, most days.",
          progression: "Hands on thighs → arms crossed → lower chair → add a weighted backpack → slow 5-second lowering.",
          precautions: "If unable to stand without hands, start with a raised seat or hand assistance rather than skipping the exercise.",
        },
        {
          kind: "exercise",
          name: "Tandem stance progressing to tandem walk",
          purpose: "Narrow the base of support to train medio-lateral balance — the direction of most fall-relevant instability.",
          position: "Standing beside a counter, one foot placed directly in front of the other, heel to toe.",
          execution: "Hold the tandem position steadily; progress to walking heel-to-toe along an imaginary line, 10 steps.",
          dosage: "Holds of up to 30 s, 3–5 repetitions each foot forward; 2–3 lengths of tandem walking.",
          progression: "Fingertip support → no hands → eyes closed (static only, close supervision) → tandem walk with head turns.",
          precautions: "Guard closely on first attempts; position support on both sides for eyes-closed work.",
        },
        {
          kind: "exercise",
          name: "Single-leg stance",
          purpose: "Train the single-limb stability required for stepping, stairs and dressing.",
          position: "Standing tall near support, weight shifted fully onto one leg.",
          execution: "Lift the other foot clearly off the floor, hold steady with a soft knee and level pelvis, up to 10–30 seconds.",
          dosage: "3–5 holds each leg, daily.",
          progression: "Support → hands free → eyes closed → stand on a folded towel or foam → add arm reaches or head turns.",
          precautions: "A patient who cannot hold 5 seconds with support needs closer supervision and an easier starting point (e.g. semi-tandem).",
        },
        {
          kind: "exercise",
          name: "Weight shifts to the limits of stability",
          purpose: "Expand the usable base of support and train the ankle and hip strategies that correct sway.",
          position: "Standing with feet hip-width apart, support within reach.",
          execution: "Shift weight slowly as far forward, back and side-to-side as controllable without stepping, pausing at each limit; then trace slow circles.",
          dosage: "5–8 excursions in each direction, 2 sets, daily.",
          progression: "Increase excursion → narrow the stance → reach outside the base of support with the arms → perform on foam.",
          precautions: "Backward shifts are where older adults are least stable — guard behind the patient.",
        },
        {
          kind: "exercise",
          name: "Stepping reactions",
          purpose: "Train the fast, accurate protective step — the last line of defence before a fall.",
          position: "Standing in a clear, hazard-free space with support nearby.",
          execution: "Step quickly in a named direction (forward, sideways, backward) on command, returning to the start; progress to rapid multi-directional stepping and stepping over small markers.",
          dosage: "8–10 quick steps per direction, 2 sets, 3×/week.",
          progression: "Increase speed → random direction cues → add a dual task (counting backwards) → controlled small external nudges by the therapist in suitable patients.",
          precautions: "Perturbation-style work is therapist-supervised only; clear the environment and use a gait belt where appropriate.",
        },
        {
          kind: "keypoints",
          title: "Progression principles",
          items: [
            "Progress one variable at a time: support → base of support → vision → surface → dual task",
            "Aim for a total (all activity combined) of ~3 h/week of challenging work",
            "Reassess with the same measures (30-s chair stand, single-leg stance, TUG) every 4–6 weeks",
            "Expect and normalise wobble — a programme with zero wobble is a programme with zero challenge",
          ],
        },
      ],
    },
    {
      slug: "strength-and-bone",
      title: "Strength, Bone Health & Osteoporosis",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Falls prevention and bone health are two halves of one fracture-prevention strategy: exercise reduces the number of falls, while bone strength determines what happens when a fall still occurs. Older adults — women especially, after menopause — lose bone density as well as muscle, and a fragility fracture (a fracture from a fall from standing height or less) should always trigger osteoporosis assessment.",
        },
        {
          kind: "cards",
          items: [
            { title: "Progressive resistance training", text: "2–3 sessions/week targeting the legs and trunk at a genuinely challenging load. Builds the type II fibre power lost in sarcopenia and stimulates bone through muscle pull.", icon: "dumbbell" },
            { title: "Weight-bearing impact", text: "Bone adapts to loading: weight-bearing and, where appropriate, moderate-impact exercise (brisk walking, stepping, low hopping in robust patients) supports bone density. Swimming and cycling, though excellent for fitness, load bone minimally.", icon: "activity" },
            { title: "Osteoporosis precautions", text: "In diagnosed osteoporosis, avoid rapid loaded spinal flexion and end-range twisting (vertebral fracture risk); emphasise back-extensor strengthening and posture work.", icon: "shield" },
            { title: "The medical piece", text: "Calcium and vitamin D adequacy, bone-protection medication where indicated, and DXA scanning are the medical arm — flag untreated fragility fractures to the medical team.", icon: "clipboard" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "A wrist fracture from a simple fall is often the first — and most missed — warning of osteoporosis; ask about fracture history in every older patient.",
            "Strength training in the 80s and 90s still works: high-intensity progressive resistance training produces meaningful gains at any age.",
          ],
        },
      ],
    },
    {
      slug: "home-safety-footwear",
      title: "Home Safety & Footwear",
      estMinutes: 2,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Most falls in older adults happen at home, during ordinary activities. Home hazard assessment and modification reduces falls, with the strongest effects in people at high risk — especially when delivered by an occupational therapist and when the person actually adopts the changes.",
        },
        {
          kind: "list",
          items: [
            "Remove or tape down loose rugs and trailing cables; clear walkway clutter",
            "Improve lighting: bright, glare-free bulbs, two-way switches, motion-sensor night lights on the bed-to-bathroom route",
            "Fit rails: both sides of stairs, plus grab rails by the bath, shower and toilet",
            "Use non-slip mats in the bath and shower; wipe up spills immediately",
            "Keep everyday items between hip and shoulder height — no chairs as ladders",
            "Consider a bedside commode or urinal bottle where night-time toileting is rushed and risky",
          ],
        },
        {
          kind: "cards",
          items: [
            { title: "Good footwear", text: "Well-fitting, enclosed heel, firm heel counter, thin firm sole with grip, and fastening (laces/velcro) that holds the foot. Worn indoors as well as outdoors.", icon: "footprints" },
            { title: "Risky footwear", text: "Backless slippers, smooth leather soles, high or worn-down heels, loose fit — and walking in socks or barefoot on hard floors.", icon: "x-circle" },
            { title: "Walking aids", text: "The right aid, at the right height (elbow ~15–30° flexion), with intact ferrules — an ill-fitting or worn aid is itself a hazard. Teach the pattern; do not just hand it over.", icon: "life-buoy" },
          ],
        },
        { kind: "image", illustration: "walking-aids", caption: "Common walking aids from single-point stick to wheeled frame. Match the aid to the deficit, set the height so the elbow flexes about 15–30°, and check ferrules regularly." },
        {
          kind: "pearls",
          items: [
            "Ask patients to walk their own night-time route to the toilet during a home visit — it is the highest-risk journey in the house.",
            "Multifocal glasses blur the ground on stairs; single-vision distance glasses are safer for stairs and outdoor walking.",
          ],
        },
      ],
    },
    {
      slug: "after-a-fall",
      title: "After a Fall: Response & Getting Up",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "What happens in the minutes after a fall matters. A 'long lie' — being unable to get up for over an hour — causes dehydration, pressure damage, hypothermia and rhabdomyolysis, and independently predicts poor outcomes. Yet many older adults have never been taught how to get up, and many cannot. Backward-chaining floor-to-stand practice is a core, teachable physiotherapy skill.",
        },
        {
          kind: "steps",
          items: [
            { title: "1. Assess before moving", text: "Teach patients: lie still, breathe, check for pain — especially hip, wrist, head. Severe pain or inability to move a limb means do not attempt to rise; summon help (alarm, phone, shouting, banging)." },
            { title: "2. Roll to side-lying", text: "Bend the knees, reach across the body and roll onto the side — the first link in the get-up chain." },
            { title: "3. Push up to side-sitting, then prone-kneel", text: "Push up on the forearm then hand to sitting, then turn over onto hands and knees." },
            { title: "4. Crawl to furniture", text: "Crawl to a sturdy chair, sofa or bed — never attempt to rise in open space if unsteady." },
            { title: "5. Half-kneel and push up", text: "Place the stronger foot flat, hands on the seat, push through arms and leg to rise and turn to sit on the furniture." },
            { title: "6. Rest, then review", text: "Sit and recover before standing. Afterwards: report the fall, check for injury, and treat every fall as a trigger for review — not an embarrassment to hide." },
          ],
        },
        {
          kind: "paragraph",
          text: "Practise this sequence in reverse ('backward chaining'): start from the last step — pushing up from half-kneeling at a chair — and progressively add earlier steps. This builds success and confidence before attempting the full floor-to-stand sequence, and doubles as excellent strength training.",
        },
        {
          kind: "keypoints",
          title: "Also cover",
          items: [
            "Personal alarms/pendants and keeping a phone reachable from the floor",
            "A 'fall plan' agreed with family: who to call, keys access, daily check-ins",
            "Report every fall — each one is diagnostic information, and unreported falls are missed opportunities",
            "Fear after a fall is normal; graded, successful floor practice is one of the best confidence treatments available",
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
            "1 in 3 over-65s fall yearly; >90% of hip fractures come from falls; fear of falling drives a restriction–deconditioning spiral",
            "Balance = visual + vestibular + somatosensory input, integrated centrally, executed by strong, fast muscles",
            "Risk is multifactorial: previous falls, weakness, psychotropics/polypharmacy, orthostatic hypotension, vision, home hazards, footwear",
            "Screen: annual falls questions; assess: TUG (≥12–13.5 s concern), 30-s chair stand vs norms, Berg, single-leg stance (<5 s concern), gait speed (<0.8 m/s = red light)",
            "Effective programmes: highly challenging balance work + strength, ≥3 h/week, progressive and sustained — Otago and tai chi are the exemplars",
            "Progress by removing support, narrowing the base, closing eyes, softening the surface, adding dual tasks; train stepping reactions",
            "Pair falls prevention with bone health: resistance + weight-bearing exercise, fragility-fracture flagging",
            "Teach every at-risk patient how to get up from the floor (backward chaining) and how to summon help",
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
      text: "Approximately what proportion of community-dwelling adults over 65 fall at least once per year?",
      options: ["1 in 20", "1 in 10", "1 in 3", "9 in 10"],
      correctIndex: 2,
      explanation:
        "Roughly one third of community-dwelling over-65s fall each year, rising to about half of those over 80. A previous fall roughly doubles the risk of another — which is why 'have you fallen in the past year?' is the single most useful screening question.",
      difficulty: "Easy",
      tags: ["assessment", "pathology"],
      sectionSlug: "epidemiology",
    },
    {
      text: "What proportion of hip fractures in older adults result from falls?",
      options: ["About 10%", "About 40%", "About 60%", "Over 90%"],
      correctIndex: 3,
      explanation:
        "Over 90% of hip fractures are caused by falls, usually from standing height. This is why falls prevention and bone health (osteoporosis management) together form the fracture-prevention strategy: fewer falls, and stronger bone when a fall still happens.",
      difficulty: "Easy",
      tags: ["pathology", "management"],
      sectionSlug: "epidemiology",
    },
    {
      text: "Which three sensory systems does the central nervous system integrate to control balance?",
      options: [
        "Visual, auditory, olfactory",
        "Visual, vestibular, somatosensory",
        "Vestibular, gustatory, proprioceptive",
        "Somatosensory, auditory, visceral",
      ],
      correctIndex: 1,
      explanation:
        "Balance depends on vision (environment position and motion), the vestibular system (head rotation and acceleration relative to gravity) and somatosensation (proprioceptive and cutaneous input, especially from the feet and ankles). The CNS re-weights these inputs by reliability — and the outputs still require adequate muscle strength and speed.",
      difficulty: "Easy",
      tags: ["anatomy", "assessment"],
      sectionSlug: "balance-systems",
    },
    {
      text: "An older adult reports being steady in daylight but very unsteady walking to the bathroom at night. What does this pattern most likely indicate?",
      options: [
        "Pure muscle weakness with intact sensation",
        "Over-reliance on vision compensating for reduced somatosensory or vestibular input",
        "A psychological problem with no physiological basis",
        "Normal ageing requiring no assessment",
      ],
      correctIndex: 1,
      explanation:
        "When vision is removed (darkness), balance must rely on somatosensory and vestibular input. Marked unsteadiness in the dark suggests those systems are impaired and the person has become visually dependent — common with peripheral neuropathy or vestibular hypofunction. It warrants assessment, and it flags the highest-risk journey in the house: the night-time toilet route.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "assessment"],
      sectionSlug: "balance-systems",
    },
    {
      text: "Which medication classes are most strongly associated with falls in older adults?",
      options: [
        "Topical creams and inhaled bronchodilators",
        "Psychotropics — sedatives, hypnotics, antidepressants and antipsychotics",
        "Antibiotics and antihistamine eye drops",
        "Paracetamol at standard doses",
      ],
      correctIndex: 1,
      explanation:
        "Psychotropic medications (benzodiazepines and other sedative-hypnotics, antidepressants, antipsychotics) are the class most consistently linked to falls, through sedation, slowed reactions and postural hypotension. Polypharmacy (≥4–5 regular medicines) is an independent flag. Physiotherapists do not alter prescriptions but should trigger a structured medication review.",
      difficulty: "Medium",
      tags: ["precautions", "management"],
      sectionSlug: "risk-factors",
    },
    {
      text: "Which finding meets the standard definition of orthostatic (postural) hypotension?",
      options: [
        "A rise of 20 mmHg systolic on standing",
        "A drop of ≥20 mmHg systolic or ≥10 mmHg diastolic within 3 minutes of standing",
        "Any dizziness on standing regardless of blood pressure",
        "A heart rate increase of 5 beats per minute on standing",
      ],
      correctIndex: 1,
      explanation:
        "Orthostatic hypotension is defined as a fall of at least 20 mmHg systolic or 10 mmHg diastolic within about 3 minutes of moving from lying to standing. Symptoms are an unreliable guide — many affected older adults report none — so lying-and-standing BP measurement belongs in the falls assessment.",
      difficulty: "Medium",
      tags: ["assessment", "precautions"],
      sectionSlug: "risk-factors",
    },
    {
      text: "A community-dwelling 78-year-old completes the Timed Up and Go in 15 seconds. How should this be interpreted?",
      options: [
        "Normal — no further action needed",
        "Above commonly used risk thresholds (~12–13.5 s), indicating increased falls risk and the need for fuller assessment",
        "Diagnostic of Parkinson's disease",
        "Meaningless unless repeated ten times",
      ],
      correctIndex: 1,
      explanation:
        "TUG times at or above roughly 12–13.5 seconds are commonly used to flag elevated falls risk in community-dwelling older adults. A 15-second TUG therefore signals increased risk and should trigger multifactorial assessment. The TUG screens risk; it does not diagnose specific diseases — and movement quality (especially the turn) should be observed alongside the time.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "screening-assessment",
    },
    {
      text: "Why is gait speed described as the 'sixth vital sign' in older adults?",
      options: [
        "It is measured with the same equipment as blood pressure",
        "Slow usual gait speed (below ~0.8 m/s) predicts falls, frailty, hospitalisation and mortality",
        "It replaces the need for any other assessment",
        "Fast gait speed indicates cardiac disease",
      ],
      correctIndex: 1,
      explanation:
        "Usual-pace gait speed is a simple, reliable global indicator of health in older adults: values below about 0.8 m/s are associated with frailty, falls and adverse outcomes, and speed below ~1.0–1.2 m/s makes many pedestrian crossings impractical. Like any vital sign, it flags a problem and tracks change — it does not replace fuller assessment.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "screening-assessment",
    },
    {
      text: "During a 30-second chair stand test, a patient cannot rise even once without using their hands. What is the most accurate interpretation?",
      options: [
        "The test result is invalid and cannot be used",
        "This indicates significant lower-limb weakness and high falls risk, and defines the starting point for strength training",
        "The patient is simply unmotivated",
        "Arm use should be encouraged so a normal score can be recorded",
      ],
      correctIndex: 1,
      explanation:
        "Inability to stand without hands is itself important data: it marks substantial lower-limb strength/power deficit and elevated falls risk. It also sets the exercise entry point — assisted or raised-seat sit-to-stands — rather than invalidating assessment. Recording an artificially 'normal' score with arm use would hide the deficit the test exists to find.",
      difficulty: "Medium",
      tags: ["assessment", "exercise-therapy"],
      sectionSlug: "screening-assessment",
    },
    {
      text: "According to the evidence, which two features are essential for an exercise programme to prevent falls?",
      options: [
        "A high challenge to balance, and an adequate dose of around 3+ hours per week sustained over time",
        "Daily long-distance walking and stretching",
        "Upper-limb strengthening and breathing exercises",
        "Any activity, provided it is enjoyable",
      ],
      correctIndex: 0,
      explanation:
        "Meta-analyses show falls-prevention effects depend on (1) exercises that genuinely challenge balance — reducing base of support, moving the centre of mass to its limits, minimising hand support — and (2) sufficient dose, with about 3 or more hours weekly, ongoing, linked to the largest reductions. Walking programmes alone do not reduce falls; enjoyment aids adherence but is not sufficient by itself.",
      difficulty: "Easy",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "evidence-based-programmes",
    },
    {
      text: "Which description best matches the Otago Exercise Programme?",
      options: [
        "A hospital-gym circuit of resistance machines for older athletes",
        "A home-based, individually prescribed and progressed programme of leg strengthening with ankle weights, balance exercises and a walking plan",
        "A seated-only chair exercise video",
        "A single education session on avoiding hazards",
      ],
      correctIndex: 1,
      explanation:
        "Otago is a home-based programme individually prescribed and progressed over months: around five leg-strengthening exercises using ankle weights, a set of progressive balance exercises, and a walking plan, supported by follow-up visits and calls. Its strongest evidence is in the over-80s and in previous fallers.",
      difficulty: "Easy",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "evidence-based-programmes",
    },
    {
      text: "Why is a walking programme alone insufficient to prevent falls in a high-risk older adult?",
      options: [
        "Walking has no health benefits in older age",
        "Walking does not sufficiently challenge balance, and in high-risk fallers it increases exposure to fall opportunities without building the capacities that prevent them",
        "Walking causes osteoporosis",
        "Older adults cannot safely walk outdoors under any circumstances",
      ],
      correctIndex: 1,
      explanation:
        "The active ingredient in falls prevention is balance challenge, which steady-state walking largely lacks. Trials show walking programmes alone do not reduce falls, and in high-risk individuals extra walking increases exposure to hazardous situations before balance capacity has improved. Walking remains valuable for general health and belongs alongside — not instead of — challenging balance and strength work.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "evidence-based-programmes",
    },
    {
      text: "Which sequence correctly orders progression variables for a single-leg stance exercise?",
      options: [
        "Eyes closed on foam first, then with support, then on firm ground",
        "Hand support → hands free → eyes closed → compliant surface → added head turns or reaches",
        "Add a dual task first, then remove hand support",
        "Progress all variables simultaneously each session for efficiency",
      ],
      correctIndex: 1,
      explanation:
        "Progression changes one variable at a time along a logical hierarchy: reduce support, then narrow or destabilise the base, then remove vision, then soften the surface, then add cognitive or movement dual tasks. Progressing several variables at once makes the cause of failure unreadable and increases risk; starting at the hardest condition is unsafe.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "balance-exercise-progression",
    },
    {
      text: "Why do stepping reactions deserve specific training in falls prevention?",
      options: [
        "They look impressive and improve motivation",
        "A rapid, accurate protective step is the final recovery strategy once the centre of mass leaves the base of support — and it is trainable",
        "They replace the need for strength training entirely",
        "Stepping reactions cannot decline with age",
      ],
      correctIndex: 1,
      explanation:
        "Postural corrections follow a hierarchy — ankle strategy, hip strategy, then a protective step when the centre of mass exceeds the base of support. The step is the last line of defence before a fall, it slows with age (partly through loss of fast type II muscle power), and trials of reactive/volitional stepping training show it can be improved. It complements, not replaces, strength work.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "anatomy"],
      sectionSlug: "balance-exercise-progression",
    },
    {
      text: "A 79-year-old with diagnosed spinal osteoporosis joins a falls-prevention class. Which exercise requires modification?",
      options: [
        "Sit-to-stand practice from a firm chair",
        "Loaded end-range spinal flexion (toe-touching with weights)",
        "Supported single-leg balance",
        "Back-extensor strengthening",
      ],
      correctIndex: 1,
      explanation:
        "In osteoporosis, rapid or loaded end-range spinal flexion concentrates compressive load on the anterior vertebral bodies and is associated with vertebral fracture risk — it should be avoided or replaced. Sit-to-stands, supported balance work and especially back-extensor strengthening (which supports posture and vertebral loading) are appropriate and encouraged.",
      difficulty: "Medium",
      tags: ["precautions", "exercise-therapy"],
      sectionSlug: "strength-and-bone",
    },
    {
      text: "Which footwear is safest for an older adult at risk of falls?",
      options: [
        "Backless slippers for comfort at home",
        "Smooth leather-soled dress shoes",
        "Well-fitting shoes with an enclosed heel, firm thin sole with grip, and secure fastening — worn indoors and outdoors",
        "Thick soft-soled trainers two sizes large for swollen feet",
      ],
      correctIndex: 2,
      explanation:
        "Safe footwear fits well, encloses and supports the heel, fastens securely, and has a thin, firm, gripping sole that preserves ground feel. Backless slippers, smooth soles, loose fit and very thick soft soles all impair stability — and walking in socks on hard floors is a common, avoidable hazard. The advice applies indoors, where most falls happen.",
      difficulty: "Easy",
      tags: ["management", "precautions"],
      sectionSlug: "home-safety-footwear",
    },
    {
      text: "An older patient who fell reports lying on the floor for approximately two hours before help arrived. Why is this detail clinically important?",
      options: [
        "It is only relevant for insurance documentation",
        "A 'long lie' over an hour causes dehydration, pressure damage, hypothermia and rhabdomyolysis, and independently predicts poor outcomes — it also mandates teaching floor-to-stand skills",
        "It proves the fall was not serious, since they eventually got up",
        "It indicates the home is too large",
      ],
      correctIndex: 1,
      explanation:
        "A long lie is both a consequence and a predictor: physiologically it risks dehydration, pressure injury, hypothermia and muscle breakdown (rhabdomyolysis), and prognostically it marks a vulnerable person at high risk of further decline. The physiotherapy response includes backward-chained floor-to-stand training, alarm/phone access planning, and multifactorial risk review.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "management"],
      sectionSlug: "after-a-fall",
    },
    {
      text: "What is 'backward chaining' in teaching an older adult to get up from the floor?",
      options: [
        "Practising the sequence starting from the final step — pushing up from half-kneeling at a chair — then progressively adding earlier steps",
        "Performing the whole sequence in reverse order, standing to lying",
        "Using a chain hoist to lift the patient",
        "Teaching relatives to pull the patient up by the arms",
      ],
      correctIndex: 0,
      explanation:
        "Backward chaining teaches the last link first: the patient masters rising from half-kneeling at a sturdy chair, then adds crawling to the chair, then rolling and pushing up to kneeling, until the full floor-to-stand sequence is achieved. Starting with the easiest, most successful step builds confidence and strength while avoiding early failure on the hardest components.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "after-a-fall",
    },
    {
      text: "An older adult is found on the floor and cannot recall falling or the moments before it. What does this feature require?",
      options: [
        "Reassurance — memory of falls is always unreliable",
        "A standard exercise programme with no further investigation",
        "Medical workup for syncope (cardiac or neurological), since unexplained or unremembered falls suggest loss of consciousness",
        "Immediate permanent bed rest",
      ],
      correctIndex: 2,
      explanation:
        "An unexplained or unremembered fall raises the possibility of syncope — cardiac arrhythmia, orthostatic hypotension, or a neurological event — which exercise alone will not fix and which can be dangerous if missed. This is a red flag requiring medical assessment. Falls prevention exercise may still be indicated, but only alongside the syncope workup.",
      difficulty: "Hard",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "screening-assessment",
    },
  ],
  flashcards: [
    { front: "How common are falls in older adults?", back: "About 1 in 3 over-65s and 1 in 2 over-80s fall each year; one fall roughly doubles the risk of another." },
    { front: "What proportion of hip fractures result from falls?", back: "Over 90% — which is why falls prevention plus bone health together form fracture prevention." },
    { front: "Describe the fear-of-falling spiral.", back: "Fall (or near-miss) → fear → activity restriction → deconditioning (weaker, slower, poorer balance) → higher falls risk → more fear. Physiotherapy breaks the loop by rebuilding capacity and confidence together." },
    { front: "Name the three sensory systems of balance and their key age-related failures.", back: "Visual (cataract, contrast loss, multifocals on stairs), vestibular (age-related hypofunction — worse with head turns/dark), somatosensory (peripheral neuropathy, especially diabetic)." },
    { front: "TUG test — procedure and concern threshold?", back: "Rise from a chair, walk 3 m, turn, return, sit, timed. ≥12–13.5 s commonly flags increased falls risk in community-dwelling older adults; watch turn quality too." },
    { front: "What makes gait speed the 'sixth vital sign'?", back: "Usual pace below ~0.8 m/s predicts frailty, falls, hospitalisation and mortality; it is quick, reliable and trackable over time." },
    { front: "Single-leg stance — what time raises concern?", back: "Inability to hold roughly 5 seconds unsupported is associated with increased falls risk." },
    { front: "What are the two essential ingredients of falls-preventing exercise?", back: "High challenge to balance (reduced base of support, centre-of-mass excursion, less hand support) and adequate dose — about 3+ hours per week, progressive and sustained." },
    { front: "What is the Otago Exercise Programme?", back: "A home-based, individually prescribed and progressed programme: ~5 leg-strengthening exercises with ankle weights, ~12 balance exercises and a walking plan, with follow-up over months. Best evidence in over-80s and previous fallers." },
    { front: "Definition of orthostatic hypotension?", back: "A drop of ≥20 mmHg systolic or ≥10 mmHg diastolic within about 3 minutes of standing — measure it; symptoms are unreliable." },
    { front: "Which drugs most increase falls risk?", back: "Psychotropics (sedatives/hypnotics, antidepressants, antipsychotics), opioids and drugs causing postural hypotension; polypharmacy of ≥4–5 medicines is an independent flag — trigger a medication review." },
    { front: "What is a 'long lie' and why does it matter?", back: "Remaining on the floor >1 hour after a fall. It causes dehydration, pressure damage, hypothermia and rhabdomyolysis, predicts poor outcomes, and mandates teaching floor-to-stand skills and help-summoning strategies." },
  ],
};

export default topic;
