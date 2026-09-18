import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "return-to-sport",
  title: "Sports Rehab & Return to Play",
  category: "Exercise Therapy",
  description:
    "From late-stage rehab to the return-to-play decision: load monitoring, criteria-based progression, strength and hop benchmarks, plyometrics, psychological readiness and shared decision frameworks.",
  difficulty: "Advanced",
  estMinutes: 30,
  icon: "dumbbell",
  keyTakeaways: [
    "Return to sport is a continuum — participation, then return to sport, then return to performance — not a single medical clearance moment.",
    "Progress along a control-to-chaos continuum: from controlled, predictable drills towards the unanticipated chaos of real sport.",
    "Progression should be earned by meeting criteria, not granted by the calendar.",
    "Load monitoring (session-RPE, acute:chronic workload concepts) helps avoid load spikes — but treat ACWR as a rough planning tool, not a precise injury predictor.",
    "A limb symmetry index above 90% across strength and hop tests is a common benchmark — while remembering the uninjured limb may itself have detrained.",
    "Plyometric progression runs bilateral to unilateral, low to high intensity, always gated by landing quality.",
    "Psychological readiness (e.g. ACL-RSI) predicts successful return — fear of reinjury is a modifiable rehab target, not a character flaw.",
    "Frameworks like StARRT structure the return-to-play decision as shared risk assessment; prevention programmes (FIFA 11+, Nordic hamstring) demonstrably reduce injury risk.",
  ],
  sections: [
    {
      slug: "continuum",
      title: "The Rehab-to-Performance Continuum",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Modern consensus frames return to sport as a continuum with three landmarks: return to participation (training below previous level), return to sport (playing, but perhaps not at prior performance), and return to performance (at or above pre-injury level). Rehabilitation and performance training are one process with shifting emphasis — not a handover between 'medical' and 'sport' worlds.",
        },
        {
          kind: "paragraph",
          text: "A useful map for the late stages is the control-chaos continuum, popularised in elite football rehabilitation for on-pitch work: begin with high control (predictable, pre-planned, low speed, no opponents) and progressively reintroduce chaos (speed, fatigue, reactive decisions, contact, unanticipated opponents) until training looks like the sport itself. The athlete earns each step towards chaos by handling the previous one well.",
        },
        {
          kind: "steps",
          items: [
            { title: "High control", text: "Closed, pre-planned drills: straight-line jogging, prescribed patterns, full recovery between efforts. Movement quality is the currency." },
            { title: "Moderate control", text: "Add speed and volume; introduce pre-planned change of direction and ball/implement work at rehearsed intensities." },
            { title: "Control–chaos transition", text: "Reduce predictability: reactive cues, variable surfaces and speeds, passive then active opposition." },
            { title: "Moderate chaos", text: "Position-specific patterns at match speed, decision-making under fatigue, controlled contact where relevant." },
            { title: "High chaos", text: "Unrestricted training: full contact, unanticipated events, match simulation — the final exam before return to competitive sport." },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Three landmarks: return to participation → return to sport → return to performance",
            "Progression = gradually removing control and adding sport-specific chaos",
            "Tissue capacity, movement quality, conditioning and confidence must all progress together",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Ask 'what does this athlete's sport actually demand?' on day one — the end of rehab defines the middle of it.",
            "The gap between 'fit to train' and 'ready to perform' is where recurrences happen; plan that phase as deliberately as the early rehab.",
          ],
        },
      ],
    },
    {
      slug: "load-monitoring",
      title: "Load Monitoring Basics",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Most training-related injuries follow errors of load: too much, too soon, after too little. Load monitoring makes the invisible visible. The simplest robust tool is session-RPE: the athlete's rating of perceived exertion (0–10) multiplied by session duration in minutes, giving a workload figure in arbitrary units that can be summed across a week and tracked over time.",
        },
        {
          kind: "paragraph",
          text: "The acute:chronic workload ratio (ACWR) compares recent load (acute, commonly the last 7 days) with the load the athlete is prepared for (chronic, commonly the rolling 28-day average). Ratios far above 1 — classically framed as above roughly 1.5 — represent spikes associated in several cohort studies with elevated injury risk, while moderately high chronic loads appear protective.",
        },
        {
          kind: "warning",
          title: "The honest debate about ACWR",
          items: [
            "The ACWR literature has been seriously criticised — statistical artefacts, sport-to-sport inconsistency, and poor predictive ability at the individual level",
            "No ratio 'sweet spot' reliably predicts injury for an individual athlete; do not present 0.8–1.3 as a law of nature",
            "The durable principle underneath survives the debate: avoid rapid spikes relative to what the athlete is prepared for, and build chronic load — fitness — because prepared athletes tolerate more",
            "Use workload numbers to structure conversations and plan progressions, not as a traffic-light oracle",
          ],
        },
        {
          kind: "table",
          headers: ["Tool", "What it captures", "Practical use"],
          rows: [
            ["Session-RPE × duration", "Internal load (global physiological/psychological cost)", "Cheap, valid, works across training types; trend weekly totals and week-to-week change"],
            ["GPS / distance metrics", "External load (distance, high-speed running, accelerations)", "Compare rehab exposure with real match demands; guide on-pitch progression"],
            ["Wellness monitoring", "Sleep, soreness, stress, fatigue", "Contextualises load numbers; flags under-recovery early"],
            ["Simple week-to-week rule", "Change in total load", "Keep weekly increases modest (~10% is a common heuristic) and avoid doubling loads after time off"],
          ],
        },
        {
          kind: "pearls",
          items: [
            "The best predictor of tolerating next week's load is having done something like it before — chronic load is the athlete's armour.",
            "After any layoff, the riskiest week is the first one back: plan a deliberate ramp, especially for high-speed running.",
          ],
        },
      ],
    },
    {
      slug: "criteria-based",
      title: "Criteria-Based vs Time-Based Progression",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Time-based rehabilitation advances the athlete because a date has arrived; criteria-based rehabilitation advances them because they have demonstrated the capacities the next phase requires. Biology sets minimum timeframes — graft maturation, tendon remodelling and bone healing cannot be tested away — so the modern position is both: respect minimum healing times AND demand objective criteria. Time is necessary but not sufficient.",
        },
        {
          kind: "table",
          headers: ["Aspect", "Time-based", "Criteria-based"],
          rows: [
            ["Progression trigger", "Calendar (e.g. 'week 12: start running')", "Demonstrated capacity (e.g. pain-free hopping, strength threshold met)"],
            ["Individualisation", "Low — same schedule for fast and slow responders", "High — the athlete's own responses set the pace"],
            ["Risk profile", "May progress unready athletes or hold back ready ones", "Guards against both, if criteria are meaningful and measured well"],
            ["Example (ACL)", "'Return to sport at 9 months'", "'Return when ≥9 months AND quads LSI >90%, hop battery >90%, ACL-RSI acceptable, on-pitch progression complete'"],
          ],
        },
        {
          kind: "keypoints",
          title: "Building good criteria",
          items: [
            "Each phase needs entry criteria (what earns the new drill) and exit criteria (what earns the next phase)",
            "Criteria should span domains: pain/effusion response, range, strength, movement quality, conditioning, psychological readiness",
            "Measure, don't eyeball: dynamometry or loaded testing for strength, counted hop distances, validated questionnaires",
            "The 24-hour response (pain, swelling) remains the humble veto over any planned progression",
          ],
        },
        {
          kind: "pearls",
          items: [
            "In ACL rehabilitation both things are true: returning before 9 months is associated with higher reinjury rates AND criteria must still be met — later plus stronger beats either alone.",
            "Write criteria down with the athlete at the start; progression stops being a negotiation and becomes a scoreboard.",
          ],
        },
      ],
    },
    {
      slug: "strength-benchmarks",
      title: "Strength Benchmarks & Limb Symmetry",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Strength testing anchors late-stage decisions. The limb symmetry index (LSI) — injured limb value divided by uninjured limb value × 100 — is the standard yardstick, with >90% across strength and hop tests the most widely used return-to-sport benchmark (some criteria push towards 95–100% for pivoting sports).",
        },
        { kind: "image", illustration: "muscle-fiber", caption: "Strength returns through both neural drive and muscle architecture. Persistent quadriceps deficits after knee injury reflect ongoing inhibition as much as atrophy — heavy progressive loading addresses both." },
        {
          kind: "keypoints",
          title: "Common benchmark battery (knee example)",
          items: [
            "Quadriceps and hamstring strength: isokinetic or handheld/isometric dynamometry, LSI >90%",
            "Hop battery: single hop, triple hop, crossover hop for distance, 6 m timed hop — LSI >90% on each, with quality (landing control), not just distance",
            "Strength-to-bodyweight targets are increasingly used alongside symmetry (e.g. knee-extension strength relative to body mass)",
            "Add capacity tests for the sport: calf raise repetitions, single-leg press or squat capacity, deceleration competence",
          ],
        },
        {
          kind: "warning",
          title: "Limitations of the LSI — read the small print",
          items: [
            "The 'good' limb detrains during rehab, so symmetry can flatter: 90% of a weakened limb is not 90% of pre-injury",
            "Where possible, benchmark against pre-injury data, normative values or strength-to-bodyweight standards, not symmetry alone",
            "Hop distance can be achieved with poor mechanics — score landing quality, trunk control and knee alignment, not just the tape measure",
            "Symmetry in one test does not generalise: test a battery across strength, power and endurance",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Test at meaningful intensities: brief comfortable efforts miss deficits that appear under fatigue — retest key hops after conditioning work.",
            "Track strength from early rehab, not just at the end — a flat strength curve at month 4 predicts a difficult month 9 conversation.",
          ],
        },
      ],
    },
    {
      slug: "plyometric-progression",
      title: "Plyometric Progression",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Plyometrics restore the stretch-shortening cycle — the spring-like storage and return of energy that running, jumping and cutting depend on. They also progressively expose healing tissue to the impact and rate-of-loading demands of sport. The progression logic is simple and non-negotiable: bilateral before unilateral, low intensity before high, and landing quality gates every step.",
        },
        {
          kind: "steps",
          items: [
            { title: "1. Landing mechanics first", text: "Teach the shape before adding spring: soft, quiet landings, hips back, knees tracking over toes, trunk controlled. Drop-and-stick from low boxes; hold each landing." },
            { title: "2. Bilateral, low intensity", text: "Small countermovement jumps, jumps to a box (which reduce landing forces), rope skipping. Full recovery, low volume, firm predictable surfaces." },
            { title: "3. Bilateral, higher intensity + direction", text: "Higher and repeated jumps, broad jumps, lateral bounds landing on two feet; introduce continuous (reactive) jumping with short ground contacts." },
            { title: "4. Unilateral, low intensity", text: "Single-leg hop-and-stick, low lateral hops, single-leg rope skipping — quality and symmetry monitored closely." },
            { title: "5. Unilateral, high intensity & reactive", text: "Repeated single-leg hops for distance and height, bounding, depth jumps (highest intensity — reserve for late stage), then sport-specific reactive plyometrics feeding into cutting and sprinting." },
          ],
        },
        {
          kind: "keypoints",
          title: "Dosing principles",
          items: [
            "Quality over quantity: plyometrics are trained fresh, with full recoveries — they are not conditioning",
            "Count ground contacts to manage volume (commonly a few dozen quality contacts per session in rehab, building gradually)",
            "Progress one variable at a time: height OR speed OR single-leg OR reactivity — not all at once",
            "Landing quality is the gate: valgus collapse, stiff loud landings or trunk loss of control mean regress a level",
            "Respect the 24-hour rule — joint swelling or tendon pain the next morning means the dose was too high",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Jumping up (onto a box) loads take-off while sparing landing forces — a clever early step. Depth jumps do the opposite and belong late.",
            "Film landings from the front: athletes correct what they can see, and frontal-plane knee control is the money shot.",
          ],
        },
      ],
    },
    {
      slug: "cod-agility",
      title: "Change of Direction & Agility",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Change of direction (COD) is the pre-planned mechanical skill of decelerating and redirecting; agility adds a reactive, cognitive layer — responding to an unpredictable stimulus such as an opponent. Rehab must train both, in that order, because most non-contact injuries occur during rapid deceleration and cutting in reactive situations.",
        },
        {
          kind: "steps",
          items: [
            { title: "Deceleration foundations", text: "Teach stopping before turning: graded deceleration drills from jogging to striding, lowering the hips, shortening steps, absorbing over multiple contacts." },
            { title: "Pre-planned COD, shallow angles", text: "45° cuts at moderate speed with rehearsed patterns; build technique — outside-foot plant, knee over toe, trunk lean into the new direction." },
            { title: "Pre-planned COD, sharper and faster", text: "90–180° cuts, curved runs, shuttle patterns at increasing speed; add ball or implement where relevant." },
            { title: "Reactive agility", text: "Cut on visual or auditory cues, mirror drills, small-sided evasion games — cognition and fatigue reintroduced deliberately." },
            { title: "Chaotic, sport-specific agility", text: "Unanticipated, contested, fatigued: the top of the control-chaos continuum, blending into normal training." },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Angle, speed and predictability are the three progression dials — turn one at a time",
            "Sharper cuts multiply knee loading dramatically compared with shallow cuts",
            "Reactive cutting produces worse mechanics than planned cutting at the same speed — plan for that gap deliberately",
          ],
        },
      ],
    },
    {
      slug: "conditioning-demands",
      title: "Sport-Specific Conditioning & Demands",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "An athlete can be strong, symmetrical and confident — and still be unready if they lack the engine for their sport. Modern rehab benchmarks conditioning against the sport's actual demands, increasingly quantified by GPS and match analysis: total distance, high-speed running distance, sprint counts, and acceleration/deceleration density for the athlete's position and level.",
        },
        {
          kind: "cards",
          items: [
            { title: "Profile the demands", text: "What does a match cost? Use GPS/match data where available, or published positional demands: e.g. team-sport players covering ~9–12 km with repeated sprints and hundreds of accelerations.", icon: "map" },
            { title: "Rebuild the engine", text: "Aerobic base early (bike, pool, antigravity treadmill), then field-based running, then high-speed running and repeated-sprint work — the last two are the most injurious to skip.", icon: "gauge" },
            { title: "Expose before you return", text: "Match the worst-case scenario, not the average: peak 5-minute periods of matches are far denser than the match average. Train to the peaks.", icon: "bar-chart" },
            { title: "Sprinting is a rehab exercise", text: "Progressive exposure to maximal-velocity running protects hamstrings and prepares the athlete — reintroduce it deliberately, never accidentally on match day.", icon: "zap" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "The commonest conditioning error is returning athletes to matches whose peak demands they have not seen for months — reinjury loves that gap.",
            "No GPS? Use time-motion estimates, RPE and simple field tests (e.g. 30-15 IFT or Yo-Yo) to benchmark the engine against team-mates.",
          ],
        },
      ],
    },
    {
      slug: "psych-readiness",
      title: "Psychological Readiness",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Physical criteria can all be met while the athlete remains afraid — and fear changes movement (stiffer, hesitant, offloading patterns) and decisions. Psychological readiness independently predicts successful return to sport and is associated with reinjury risk, which makes it an assessment target and a treatment target, not an afterthought.",
        },
        {
          kind: "keypoints",
          title: "Assessing readiness",
          items: [
            "ACL-RSI (Return to Sport after Injury scale) — the best-known measure: emotions, confidence and risk appraisal around returning; higher scores associate with successful return. Short forms exist and sport-generic versions are available",
            "Ask directly: 'What worries you about going back?' — instrument scores start conversations, they don't replace them",
            "Watch behaviour: avoidance of the injury mechanism (e.g. never cutting off the injured leg), hesitation, protective patterns under fatigue",
            "Fear of reinjury is among the most commonly reported reasons athletes do not return to their sport",
          ],
        },
        {
          kind: "cards",
          items: [
            { title: "Graded exposure", text: "Confidence is built the same way tissue capacity is: progressive, successful exposure to feared tasks — including the injury mechanism itself, rebuilt step by step.", icon: "stairs" },
            { title: "Mastery experiences", text: "Objective wins (strength PBs, completed drills, testing data shared with the athlete) are the strongest fuel for self-efficacy.", icon: "trophy" },
            { title: "Education & expectation", text: "Explain normal setbacks, soreness rules and the plan — uncertainty breeds fear; a scoreboard breeds confidence.", icon: "book-open" },
            { title: "Refer when needed", text: "Persistent high fear, low mood or anxiety benefits from sport psychology input — normalise it as part of the performance team.", icon: "users" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "Screen psychological readiness at the same timepoints as strength testing — a 95% LSI with a low ACL-RSI score is not a green light.",
            "The drill the athlete quietly avoids is usually the exact drill the programme needs to rebuild.",
          ],
        },
      ],
    },
    {
      slug: "rtp-decision-prevention",
      title: "RTP Decision Frameworks & Reinjury Prevention",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "The return-to-play decision is a structured risk assessment, best made by a team. The StARRT framework (Strategic Assessment of Risk and Risk Tolerance) organises it in three steps: (1) tissue health — what stress can the tissue take? (2) tissue stresses — what will the sport demand of it? (3) risk tolerance modifiers — the context: time of season, athlete's goals, external pressures, consequences of reinjury. The first two estimate risk; the third asks how much risk the athlete and stakeholders will accept.",
        },
        {
          kind: "paragraph",
          text: "This makes explicit what good clinicians always did implicitly: the same knee might reasonably return this week for a retiring professional in a final, and not for a 17-year-old in pre-season. Shared decision-making — athlete, clinicians, coaches, family where appropriate — is the ethical core, with the clinician's job being honest risk communication rather than sole gatekeeping.",
        },
        { kind: "image", illustration: "ligament-grades", caption: "Ligament injury grades I–III. Graded tissue healing sets the floor for return timelines — but the RTP decision weighs tissue capacity against the specific stresses of the sport and the context around the athlete." },
        {
          kind: "keypoints",
          title: "Reinjury prevention programmes — the evidence",
          items: [
            "FIFA 11+: a structured 20-minute warm-up (running, strength, balance, jumping/landing) reduces injuries by roughly a third in football teams when performed regularly (2–3×/week) — adherence is the active ingredient",
            "Nordic hamstring programmes: eccentric hamstring strengthening reduces hamstring strain incidence substantially (around half in pooled analyses) when teams actually adhere",
            "Balance/neuromuscular training reduces ankle sprain recurrence; ACL injury-prevention programmes combining strength, plyometrics and landing training reduce ACL injury rates, especially in female athletes",
            "The universal finding: these programmes only work when done consistently — coach buy-in and habit-building are part of the prescription",
          ],
        },
        {
          kind: "warning",
          title: "Common return-to-play errors",
          items: [
            "Clearing on time alone, or on a single test — use a multi-domain battery plus staged on-field progression",
            "Skipping the return-to-participation phase and jumping straight from gym testing to full matches",
            "Ignoring psychological readiness or context (season stage, travel, fixture congestion)",
            "Stopping prevention programmes once the athlete is 'back' — the first months after return carry the highest reinjury risk",
          ],
        },
      ],
    },
    {
      slug: "exercise-blocks",
      title: "Late-Stage Exercise Examples",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "Four representative late-stage drills. Each is a template: the numbers are starting doses to be adjusted against movement quality and the 24-hour response.",
        },
        {
          kind: "exercise",
          name: "Drop landing to stick",
          purpose: "Teach and test landing mechanics — force absorption, frontal-plane knee control and trunk position — the gateway skill for all higher plyometrics.",
          position: "Standing on a low box (15–30 cm), hands free, landing area clear.",
          execution: "Step (don't jump) off the box, land on both feet simultaneously, absorbing into a quiet quarter-squat 'stick' — hips back, knees over toes, trunk controlled. Hold 2–3 seconds.",
          dosage: "3–4 sets of 5 quality landings, 2–3×/week, fully fresh.",
          progression: "Raise box height → single-leg stick from low box → add a vertical jump after landing (drop jump) → add perturbation or catch tasks.",
          precautions: "Loud, stiff or valgus landings mean lower the box and rebuild; no next-day joint swelling is the rule.",
        },
        {
          kind: "exercise",
          name: "Single-leg hop battery training",
          purpose: "Build unilateral power, reactive stiffness and confidence, converging on the hop tests used for return-to-sport benchmarking (single, triple, crossover, 6 m timed hop).",
          position: "Marked runway; start standing on the test leg, hands free or on hips per test standard.",
          execution: "Hop for distance and stick the landing with control (single hop); progress to three consecutive hops (triple), hops crossing a 15 cm line (crossover), and hopping 6 m for time. Landing must be held — a stumble is a failed rep.",
          dosage: "2–3 sets of 3–5 efforts per variant per leg, 2×/week, full recovery between efforts.",
          progression: "Distance → repeated/reactive hops → fatigued-state testing; track LSI monthly aiming >90% with quality landings.",
          precautions: "Quality gates distance: valgus collapse or trunk loss of control invalidates the rep regardless of the tape measure.",
        },
        {
          kind: "exercise",
          name: "Graded deceleration drill",
          purpose: "Train the highest-load skill in team sport — stopping — before cutting and reactive agility are layered on.",
          position: "Marked 20–30 m channel with cones defining a braking zone.",
          execution: "Build to a set speed (e.g. 60% stride), then decelerate to a stop within the zone: hips drop, steps shorten and quicken, trunk stays stacked. Walk back recovery.",
          dosage: "6–10 efforts, 2×/week, integrated into running sessions.",
          progression: "Increase approach speed (60→80→95%+) → shorten the braking zone → decelerate into a 45° then 90° cut → react to a cue to stop.",
          precautions: "Progress speed OR braking distance, not both at once; anterior knee or tendon pain next morning means reduce the dose.",
        },
        {
          kind: "exercise",
          name: "Curved high-speed running",
          purpose: "Reintroduce sport-like high-speed running with gentle rotational and frontal-plane demand — the bridge between straight-line speed and cutting.",
          position: "Large arc of cones (start with a gentle curve on a 20–30 m radius) on good ground.",
          execution: "Run the arc at a prescribed intensity, leaning into the curve, both directions equally. Build speed across sessions as mechanics stay smooth and symmetrical.",
          dosage: "4–8 arcs per direction at 70–90% effort, 1–2×/week within field sessions.",
          progression: "Tighten the arc radius → raise speed towards maximal → add ball/implement → link arcs into slalom and pattern runs.",
          precautions: "Ensure straight-line high-speed running is established first; monitor hamstrings closely as speeds approach maximal.",
        },
        {
          kind: "keypoints",
          title: "Programming the late stage",
          items: [
            "Sequence within a session: technical/speed work fresh → strength → conditioning",
            "Alternate high and low neuromuscular-load days; plyometrics and sprinting are not daily medicines",
            "Every drill should trace to a demand of the athlete's sport — if you can't name the match moment it prepares, cut it",
          ],
        },
      ],
    },
    {
      slug: "quick-revision",
      title: "Quick Revision Summary",
      estMinutes: 2,
      content: [
        {
          kind: "keypoints",
          title: "60-second summary",
          items: [
            "Continuum: return to participation → sport → performance; progress control → chaos",
            "Load: session-RPE × minutes for internal load; avoid spikes, build chronic load; ACWR is a planning concept with honest limitations, not a predictor",
            "Progression: criteria-based AND respecting biological minimum times (e.g. ACL ≥9 months + criteria)",
            "Benchmarks: LSI >90% across strength and a 4-test hop battery — but the 'good' leg detrains, so use absolute/normative standards too, and score landing quality",
            "Plyometrics: bilateral→unilateral, low→high intensity, jump-ups early, depth jumps late, landing quality gates everything",
            "COD → agility: angle, speed, predictability are the dials; deceleration first; reactive last",
            "Condition to the sport's peak demands (GPS concept); reintroduce sprinting deliberately",
            "Psychology: ACL-RSI concept, graded exposure for fear of reinjury",
            "Decision: StARRT — tissue health vs sport stresses vs risk tolerance; shared decision-making",
            "Prevention: FIFA 11+ (~one-third injury reduction), Nordic hamstring programmes (~half) — adherence is the active ingredient",
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
      text: "What are the three landmarks of the return-to-sport continuum described in consensus statements?",
      options: [
        "Diagnosis, treatment, discharge",
        "Return to participation, return to sport, return to performance",
        "Acute, subacute, chronic",
        "Clearance, competition, championship",
      ],
      correctIndex: 1,
      explanation:
        "The 2016 return-to-sport consensus describes a continuum: return to participation (training/modified sport below previous level), return to sport (back playing, perhaps below prior performance), and return to performance (at or above pre-injury level). Framing RTS as a continuum replaces the idea of a single clearance moment.",
      difficulty: "Easy",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "continuum",
    },
    {
      text: "In the control-chaos continuum, what defines progression?",
      options: [
        "Increasing weights lifted in the gym",
        "Gradually removing control and predictability until training resembles the chaos of real sport",
        "Progressively longer rest periods",
        "Moving from field work back into the clinic",
      ],
      correctIndex: 1,
      explanation:
        "The control-chaos continuum structures late-stage (especially on-pitch) rehab from high control — pre-planned, low-speed, unopposed drills — through progressive reintroduction of speed, fatigue, reactive decisions and opposition, to high chaos: unrestricted, unanticipated, sport-realistic training. Each step is earned by handling the previous level well.",
      difficulty: "Easy",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "continuum",
    },
    {
      text: "How is session-RPE training load calculated?",
      options: [
        "Heart rate × body weight",
        "Rating of perceived exertion (0–10) × session duration in minutes",
        "Distance covered ÷ session time",
        "Sets × repetitions × tempo",
      ],
      correctIndex: 1,
      explanation:
        "Session-RPE load = the athlete's global RPE for the session (0–10 scale) multiplied by its duration in minutes, yielding arbitrary units of internal load. It is cheap, validated across training modes, and allows weekly totals and week-to-week changes to be tracked with nothing more than a question and a stopwatch.",
      difficulty: "Easy",
      tags: ["assessment", "exercise-therapy"],
      sectionSlug: "load-monitoring",
    },
    {
      text: "Which statement best reflects the honest current position on the acute:chronic workload ratio (ACWR)?",
      options: [
        "An ACWR of 0.8–1.3 guarantees safety and above 1.5 guarantees injury",
        "The underlying principle — avoid load spikes and build chronic load — is sound, but ACWR has real statistical criticisms and poor individual predictive ability",
        "ACWR has been fully discredited, so load monitoring should be abandoned",
        "ACWR only applies to swimmers",
      ],
      correctIndex: 1,
      explanation:
        "Cohort studies associated workload spikes with injury, but the ACWR literature has been criticised for statistical artefacts and inconsistent, weak individual-level prediction. The defensible position keeps the durable principle — avoid rapid spikes relative to preparation, and build chronic load because fitness protects — while treating specific ratio 'sweet spots' as planning heuristics, not laws.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "exercise-therapy"],
      sectionSlug: "load-monitoring",
    },
    {
      text: "What is the key advantage of criteria-based over purely time-based rehabilitation progression?",
      options: [
        "It is always faster",
        "It advances athletes when they demonstrate the required capacities, individualising the pace and guarding against progressing the unready or holding back the ready",
        "It removes the need to consider tissue healing times",
        "It requires no measurement equipment",
      ],
      correctIndex: 1,
      explanation:
        "Criteria-based progression ties advancement to demonstrated capacity (strength thresholds, movement quality, symptom response) rather than the calendar alone, individualising rehab in both directions. Crucially it does not abolish time: biology sets minimum healing periods, so best practice combines minimum timeframes AND objective criteria — time is necessary but not sufficient.",
      difficulty: "Easy",
      tags: ["management", "clinical-reasoning"],
      sectionSlug: "criteria-based",
    },
    {
      text: "In ACL rehabilitation, why is 'at least 9 months AND criteria met' considered stronger than either condition alone?",
      options: [
        "Because insurance companies require it",
        "Because earlier return is associated with higher reinjury rates while criteria ensure capacity — graft biology and demonstrated function are separate requirements",
        "Because strength cannot be measured before 9 months",
        "Because athletes lose motivation before 9 months",
      ],
      correctIndex: 1,
      explanation:
        "Registry and cohort data associate return before ~9 months with substantially higher reinjury rates (graft maturation and neuromuscular recovery take time), yet the calendar alone cannot confirm strength, hop performance, movement quality or psychological readiness. Combining a biological minimum with a passed multi-domain test battery addresses both failure modes.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "management"],
      sectionSlug: "criteria-based",
    },
    {
      text: "How is the limb symmetry index (LSI) calculated and what is the common return-to-sport benchmark?",
      options: [
        "Uninjured ÷ injured × 100; benchmark >50%",
        "Injured ÷ uninjured × 100; benchmark >90%",
        "Injured minus uninjured; benchmark <5 kg",
        "Injured ÷ body weight; benchmark >100%",
      ],
      correctIndex: 1,
      explanation:
        "LSI = (injured limb value ÷ uninjured limb value) × 100, applied to strength and hop tests. The most widely used return-to-sport benchmark is >90% across the battery, with some criteria demanding 95–100% for pivoting sports — always alongside movement quality, not instead of it.",
      difficulty: "Easy",
      tags: ["assessment", "special-tests"],
      sectionSlug: "strength-benchmarks",
    },
    {
      text: "What is the principal limitation of relying on the limb symmetry index alone for return-to-sport decisions?",
      options: [
        "It cannot be calculated without laboratory equipment",
        "The uninjured limb also detrains during rehabilitation, so symmetry can flatter — 90% of a weakened limb may be far below pre-injury capacity",
        "Athletes always score 100% by six weeks",
        "Symmetry only matters in upper-limb sports",
      ],
      correctIndex: 1,
      explanation:
        "Because the 'good' limb loses strength and power during months of reduced activity, the denominator shrinks: an athlete can pass 90% LSI while both limbs remain well below pre-injury levels. Where possible, benchmark additionally against pre-injury data, normative values or strength-to-bodyweight standards, and test a battery rather than a single measure.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "strength-benchmarks",
    },
    {
      text: "Which sequence correctly orders a plyometric progression?",
      options: [
        "Depth jumps → box jumps → landing drills → single-leg hops",
        "Landing mechanics → bilateral low-intensity jumps → bilateral higher-intensity → unilateral low-intensity → unilateral high-intensity/reactive",
        "Single-leg bounding → bilateral hopping → landing drills",
        "Maximal sprint work → depth jumps → skipping",
      ],
      correctIndex: 1,
      explanation:
        "Plyometric progression runs from learning to land (drop-and-stick), through bilateral low- then higher-intensity jumping, to unilateral low- then high-intensity and reactive work. Depth jumps are among the highest-intensity plyometrics and belong late; jumps up to a box, which reduce landing forces, come early. Landing quality gates every transition.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "plyometric-progression",
    },
    {
      text: "Why are jumps UP onto a box appropriate earlier in rehab than depth jumps?",
      options: [
        "Box jumps train the arms more",
        "Jumping onto a box trains take-off power while the reduced drop height minimises landing forces; depth jumps maximise impact and reactive load",
        "Depth jumps require special footwear",
        "Box jumps are performed single-leg only",
      ],
      correctIndex: 1,
      explanation:
        "Landing on an elevated box shortens the fall, so the athlete produces full take-off effort while absorbing much smaller impact forces — ideal early exposure. Depth jumps reverse this: stepping off a height maximises landing and reactive demands, placing them among the most intense plyometrics, reserved for the late stage with excellent landing mechanics.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "plyometric-progression",
    },
    {
      text: "What distinguishes agility from change-of-direction ability?",
      options: [
        "Agility is performed at lower speeds",
        "Agility adds a reactive, cognitive component — responding to an unpredictable stimulus — on top of the pre-planned mechanics of change of direction",
        "They are identical terms",
        "Change of direction only occurs in racquet sports",
      ],
      correctIndex: 1,
      explanation:
        "Change of direction is the pre-planned physical skill of decelerating and redirecting; agility requires perceiving and reacting to an unpredictable cue (an opponent, a ball). The distinction matters in rehab because reactive cutting produces worse mechanics than planned cutting at the same speed — so predictability is deliberately removed as a final progression, not assumed.",
      difficulty: "Easy",
      tags: ["exercise-therapy", "assessment"],
      sectionSlug: "cod-agility",
    },
    {
      text: "Which three variables are the main 'progression dials' for cutting and agility drills?",
      options: [
        "Angle, speed and predictability",
        "Surface colour, footwear and time of day",
        "Repetitions, music tempo and group size",
        "Height, weight and age",
      ],
      correctIndex: 0,
      explanation:
        "Cutting drills progress by sharpening the angle (45° → 90° → 180°), raising approach speed, and reducing predictability (pre-planned → cued → contested). Sharper, faster, reactive cuts multiply knee loading and degrade mechanics, so the dials are turned one at a time, with deceleration competence trained first.",
      difficulty: "Medium",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "cod-agility",
    },
    {
      text: "Why should conditioning be benchmarked against the PEAK demands of match play rather than average demands?",
      options: [
        "Averages are impossible to calculate",
        "The most intense periods of matches (e.g. worst-case 5-minute blocks) far exceed match averages, and an athlete prepared only for the average is exposed when those peaks arrive",
        "Peak demands are lower than average demands",
        "GPS units only record peaks",
      ],
      correctIndex: 1,
      explanation:
        "Match analysis shows peak periods — the densest 1–5 minutes of high-speed running, sprints and accelerations — are dramatically higher than whole-match averages. Returning athletes must be progressively exposed to these worst-case scenarios in training (including maximal-velocity running) before competition, or the first match becomes their first exposure in months — a classic reinjury setup.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "clinical-reasoning"],
      sectionSlug: "conditioning-demands",
    },
    {
      text: "What does the ACL-RSI scale measure?",
      options: [
        "Knee joint laxity in millimetres",
        "The athlete's emotions, confidence and risk appraisal about returning to sport after injury",
        "Quadriceps strength relative to body weight",
        "Sprint speed over 10 metres",
      ],
      correctIndex: 1,
      explanation:
        "The ACL-RSI (Return to Sport after Injury) scale quantifies psychological readiness: emotional responses, confidence in performance, and appraisal of risk related to returning. Higher scores are associated with successful return to pre-injury sport, and low scores flag athletes needing graded exposure, mastery experiences and possibly sport psychology input — regardless of their physical test results.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "psych-readiness",
    },
    {
      text: "An athlete passes all strength and hop criteria but scores very low on psychological readiness and avoids cutting off the injured leg in training. What is the best course of action?",
      options: [
        "Clear them — physical tests are what matter",
        "Delay indefinitely with no plan",
        "Address readiness actively: graded exposure to feared tasks including the avoided movement, mastery experiences with shared testing data, and sport psychology referral if fear persists",
        "Tell them fear is irrational and to push through it in matches",
      ],
      correctIndex: 2,
      explanation:
        "Low psychological readiness with behavioural avoidance predicts poor return outcomes and altered, riskier movement. It is treated like any other deficit: graded, successful exposure to the feared task, confidence built through objective mastery evidence, education about normal symptoms, and referral for persistent fear. Neither clearing on physical tests alone nor open-ended delay addresses the actual problem.",
      difficulty: "Medium",
      tags: ["clinical-reasoning", "management"],
      sectionSlug: "psych-readiness",
    },
    {
      text: "What are the three steps of the StARRT framework for return-to-play decisions?",
      options: [
        "Strength, speed, stamina",
        "Assessment of tissue health, assessment of the tissue stresses the sport will impose, and assessment of risk tolerance modifiers (context)",
        "X-ray, MRI, ultrasound",
        "Warm-up, drill, cool-down",
      ],
      correctIndex: 1,
      explanation:
        "StARRT (Strategic Assessment of Risk and Risk Tolerance) structures the decision as: (1) tissue health — the load the healing tissue can bear; (2) tissue stresses — the loads the sport and position will impose; (3) risk tolerance modifiers — context such as season stage, athlete goals, external pressure and consequences of reinjury. Steps 1–2 estimate risk; step 3 determines how much risk stakeholders will accept, through shared decision-making.",
      difficulty: "Hard",
      tags: ["clinical-reasoning", "management"],
      sectionSlug: "rtp-decision-prevention",
    },
    {
      text: "What does the evidence show about the FIFA 11+ programme?",
      options: [
        "It has no measurable effect on injury",
        "Performed regularly (2–3×/week), it reduces injuries in football players by roughly a third — with adherence the key ingredient",
        "It doubles sprint speed in eight weeks",
        "It only works in professional players",
      ],
      correctIndex: 1,
      explanation:
        "The FIFA 11+ — a structured ~20-minute warm-up of running, strength, balance and jumping/landing components — reduced injuries by around 30–40% in randomised trials and meta-analyses of (mainly amateur and youth) football teams. Effects depend directly on compliance: teams that perform it consistently benefit most, making coach buy-in part of the intervention.",
      difficulty: "Medium",
      tags: ["management", "exercise-therapy"],
      sectionSlug: "rtp-decision-prevention",
    },
    {
      text: "Approximately what reduction in hamstring strain incidence is associated with adherent Nordic hamstring exercise programmes?",
      options: ["No change", "Around 10%", "Around half", "They increase injury rates"],
      correctIndex: 2,
      explanation:
        "Pooled analyses of Nordic hamstring programmes — progressive eccentric hamstring loading — show roughly a halving of hamstring strain incidence in adherent teams across football codes. As with FIFA 11+, the benefit tracks adherence; the programme also illustrates the broader principle that eccentric strength at long muscle lengths protects against strain injury.",
      difficulty: "Hard",
      tags: ["exercise-therapy", "management"],
      sectionSlug: "rtp-decision-prevention",
    },
    {
      text: "The morning after a plyometric session, a post-ACL-reconstruction athlete has a newly swollen knee. Applying standard progression rules, what does this indicate?",
      options: [
        "A normal adaptation to be trained through",
        "The session exceeded current tissue tolerance — reduce the plyometric dose or regress a level and reassess the response",
        "The graft has necessarily failed and needs surgery",
        "Plyometrics must be permanently removed",
      ],
      correctIndex: 1,
      explanation:
        "Joint effusion or pain persisting into the next day is the standard signal that load exceeded current tolerance — the 24-hour rule that vetoes planned progressions. The response is to regress (lower box, bilateral instead of unilateral, fewer contacts), let the reaction settle, and rebuild — not to ignore it, nor to catastrophise a single flare as graft failure. Recurrent effusions despite regression warrant medical review.",
      difficulty: "Hard",
      tags: ["precautions", "clinical-reasoning"],
      sectionSlug: "exercise-blocks",
    },
  ],
  flashcards: [
    { front: "Three landmarks of the return-to-sport continuum?", back: "Return to participation → return to sport → return to performance (2016 consensus) — a continuum, not a single clearance moment." },
    { front: "Control-chaos continuum in one line?", back: "Progress late-stage rehab from high control (pre-planned, slow, unopposed) to high chaos (fast, fatigued, reactive, contested) until training looks like the sport." },
    { front: "Session-RPE load formula?", back: "RPE (0–10) × session duration (minutes) = internal load in arbitrary units; trend weekly totals and week-to-week change." },
    { front: "Honest one-line verdict on the acute:chronic workload ratio?", back: "The principle (avoid spikes, build chronic load) is sound; the specific ratio thresholds are debated, statistically criticised and poor individual predictors — use as a planning concept." },
    { front: "Criteria-based vs time-based progression — the modern synthesis?", back: "Respect biological minimum timeframes AND require objective criteria: time is necessary but not sufficient (e.g. ACL: ≥9 months + passed test battery)." },
    { front: "LSI: formula, benchmark, and main caveat?", back: "Injured ÷ uninjured × 100; >90% across strength + hop battery. Caveat: the uninjured limb detrains, so symmetry can flatter — add absolute/normative benchmarks." },
    { front: "The standard 4-test hop battery?", back: "Single hop for distance, triple hop, crossover hop, 6 m timed hop — LSI >90% each, with controlled landings required for a rep to count." },
    { front: "Plyometric progression rules?", back: "Bilateral → unilateral; low → high intensity; jumps up early, depth jumps late; quality landings gate every step; count ground contacts; train fresh." },
    { front: "Change of direction vs agility?", back: "COD = pre-planned deceleration and redirection mechanics; agility = COD plus reaction to an unpredictable stimulus. Progression dials: angle, speed, predictability." },
    { front: "StARRT framework steps?", back: "1) Tissue health (what load can it take?) 2) Tissue stresses (what will sport demand?) 3) Risk tolerance modifiers (context) — shared decision-making on acceptable risk." },
    { front: "Evidence for FIFA 11+ and Nordic hamstring programmes?", back: "FIFA 11+: ~one-third fewer injuries in football when done 2–3×/week. Nordics: hamstring strains roughly halved in adherent teams. Adherence is the active ingredient in both." },
    { front: "What is the ACL-RSI and why does it matter?", back: "A scale of emotions, confidence and risk appraisal about returning to sport; low scores predict unsuccessful return — treat fear with graded exposure and mastery, alongside physical criteria." },
  ],
};

export default topic;
