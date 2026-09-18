import type { TopicSeed } from "./types";

const topic: TopicSeed = {
  slug: "shoulder-anatomy",
  title: "Shoulder Complex Anatomy",
  category: "Anatomy",
  description:
    "Master the four joints of the shoulder complex, the rotator cuff, force couples, scapulohumeral rhythm and the neurovascular structures every physiotherapist must know.",
  difficulty: "Beginner",
  estMinutes: 31,
  icon: "circle-dot",
  keyTakeaways: [
    "The shoulder complex is four joints working together: glenohumeral, acromioclavicular, sternoclavicular and the scapulothoracic articulation.",
    "The glenohumeral joint trades stability for mobility — it is the most mobile and the most commonly dislocated joint in the body.",
    "Static stabilisers (labrum, capsule, ligaments, negative pressure) and dynamic stabilisers (rotator cuff, scapular muscles) share the job of keeping the humeral head centred.",
    "The rotator cuff — supraspinatus, infraspinatus, teres minor, subscapularis — compresses the humeral head into the glenoid during every arm movement.",
    "The deltoid and rotator cuff form a force couple: without cuff depression, the deltoid alone would shear the humeral head upward.",
    "Scapulohumeral rhythm averages 2:1 — roughly 120° glenohumeral and 60° scapulothoracic motion in full elevation.",
    "Serratus anterior paralysis (long thoracic nerve) causes medial scapular winging; trapezius palsy (accessory nerve) causes lateral winging.",
    "The axillary nerve wraps around the surgical neck of the humerus and is the most commonly injured nerve in anterior dislocation.",
  ],
  sections: [
    {
      slug: "four-joints",
      title: "The Four Joints of the Shoulder Complex",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "The \"shoulder\" is not one joint but a complex of four articulations that must move in a coordinated way to place the hand anywhere in space. Restriction or dysfunction at any one of them changes the mechanics of the others — which is why a thorough shoulder assessment always looks beyond the glenohumeral joint.",
        },
        {
          kind: "cards",
          items: [
            { title: "Glenohumeral (GH) joint", text: "Ball-and-socket synovial joint between the humeral head and the glenoid fossa of the scapula. The most mobile joint in the body and the main contributor to arm elevation.", icon: "circle-dot" },
            { title: "Acromioclavicular (AC) joint", text: "Plane synovial joint between the lateral clavicle and the acromion. Allows the scapula to rotate and tilt on the clavicle; stabilised by the AC and coracoclavicular ligaments.", icon: "link" },
            { title: "Sternoclavicular (SC) joint", text: "Saddle-shaped synovial joint with an intra-articular disc — the only true bony connection between the upper limb and the axial skeleton.", icon: "anchor" },
            { title: "Scapulothoracic articulation", text: "Not a true synovial joint but a physiological gliding surface between the scapula and the rib cage. Provides roughly a third of arm elevation and a stable base for the cuff.", icon: "move" },
          ],
        },
        {
          kind: "paragraph",
          text: "Because the SC joint is the only skeletal link to the trunk, all other \"attachment\" of the shoulder girdle is muscular. This muscular suspension is what gives the shoulder its enormous range — and what makes it so dependent on muscle control.",
        },
        {
          kind: "keypoints",
          items: [
            "Four articulations: GH, AC, SC plus the scapulothoracic gliding surface",
            "The SC joint is the only bony connection between the upper limb and the axial skeleton",
            "The scapulothoracic articulation is a functional, not a true synovial, joint",
            "Full arm elevation requires coordinated motion at all four",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Stiff thoracic extension limits scapular posterior tilt — always screen the thoracic spine in patients who cannot reach overhead.",
            "AC joint pain classically localises well (the patient points with one finger to the top of the shoulder); GH pain is more diffuse in the deltoid region.",
          ],
        },
      ],
    },
    {
      slug: "glenohumeral-joint",
      title: "Glenohumeral Joint Structure",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "The glenohumeral joint is the classic example of the mobility–stability trade-off. The large humeral head articulates with a shallow glenoid fossa that covers only about a quarter to a third of it at any position — often likened to a golf ball sitting on a tee.",
        },
        { kind: "image", illustration: "shoulder-joint", caption: "The glenohumeral joint: humeral head, shallow glenoid with labrum, capsule and the surrounding rotator cuff." },
        {
          kind: "cards",
          items: [
            { title: "Glenoid labrum", text: "A fibrocartilaginous rim that deepens the socket by up to 50% and increases contact area. The long head of biceps attaches to its superior aspect — the basis of SLAP lesions.", icon: "disc" },
            { title: "Joint capsule", text: "Loose and lax, with a redundant inferior axillary fold that allows full elevation. Capsular volume is roughly twice the size of the humeral head — laxity is normal, instability is not.", icon: "layers" },
            { title: "Glenohumeral ligaments", text: "Superior, middle and inferior GH ligaments are capsular thickenings. The inferior GH ligament complex is the key restraint to anterior translation in abduction–external rotation.", icon: "link" },
            { title: "Negative intra-articular pressure", text: "A slight vacuum inside the sealed capsule 'suctions' the head to the glenoid at rest. Venting the capsule (or a large effusion) measurably increases translation.", icon: "wind" },
          ],
        },
        {
          kind: "paragraph",
          text: "The joint permits flexion, extension, abduction, adduction, internal and external rotation, and circumduction. This freedom comes at a price: the glenohumeral joint accounts for roughly half of all major joint dislocations, with over 90% of them anterior.",
        },
        {
          kind: "keypoints",
          title: "Mobility vs stability",
          items: [
            "Shallow glenoid + lax capsule = maximal mobility, minimal bony stability",
            "The labrum deepens the socket and is a key static stabiliser",
            "The inferior glenohumeral ligament restrains anterior translation in the throwing (abduction–ER) position",
            "Most dislocations are anterior — the anteroinferior capsulolabral complex is the usual site of injury (Bankart lesion)",
          ],
        },
      ],
    },
    {
      slug: "static-dynamic-stabilisers",
      title: "Static vs Dynamic Stabilisers",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "Because bony congruence is minimal, glenohumeral stability is shared between passive (static) structures and active (dynamic) muscle control. Understanding this division is the foundation of rehabilitation for instability and rotator cuff conditions: physiotherapy cannot change the static restraints, but it can substantially improve the dynamic ones.",
        },
        {
          kind: "table",
          headers: ["Static stabilisers", "Dynamic stabilisers"],
          rows: [
            ["Glenoid labrum (deepens socket ~50%)", "Rotator cuff — compresses the head into the glenoid"],
            ["Capsule and glenohumeral ligaments", "Long head of biceps — contributes anterior stability"],
            ["Negative intra-articular pressure", "Deltoid — mover that relies on the cuff to stay centred"],
            ["Glenoid version and bony geometry", "Scapular muscles — orient the glenoid under the head"],
            ["Adhesion–cohesion of synovial fluid", "Proprioceptive reflex control of all the above"],
          ],
        },
        {
          kind: "paragraph",
          text: "Static restraints work mainly at end range, where the capsule and ligaments come under tension; in mid-range the joint depends almost entirely on the concavity–compression effect of the rotator cuff pressing the head into the labrum-deepened socket. This is why cuff-strengthening improves stability even when the capsule is lax.",
        },
        {
          kind: "pearls",
          items: [
            "Mid-range instability with generalised hypermobility responds well to progressive cuff and scapular motor-control training — surgery addresses structural lesions, not motor control.",
            "A well-positioned scapula keeps the glenoid under the humeral head like a hand balancing a tray — scapular dyskinesis undermines every other stabiliser.",
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Static: labrum, capsule, GH ligaments, negative pressure, bony geometry",
            "Dynamic: rotator cuff, biceps long head, deltoid, scapular muscles",
            "Mid-range stability is dominated by cuff concavity–compression",
            "End-range stability is dominated by capsuloligamentous tension",
          ],
        },
      ],
    },
    {
      slug: "rotator-cuff",
      title: "The Rotator Cuff",
      estMinutes: 4,
      content: [
        {
          kind: "paragraph",
          text: "The rotator cuff is four muscles whose tendons blend with the glenohumeral capsule to form a nearly continuous cuff around the humeral head. Their shared, defining role is compression: pulling the head into the glenoid so larger muscles can move the arm on a stable pivot. Each also has its own rotational action.",
        },
        { kind: "image", illustration: "rotator-cuff", caption: "The four cuff muscles wrapping the humeral head — supraspinatus superiorly, infraspinatus and teres minor posteriorly, subscapularis anteriorly — share a near-continuous insertion line along the tuberosities." },
        {
          kind: "table",
          headers: ["Muscle", "Origin", "Insertion", "Main actions", "Nerve"],
          rows: [
            ["Supraspinatus", "Supraspinous fossa of scapula", "Superior facet of greater tubercle", "Initiates abduction; compresses head", "Suprascapular (C5–6)"],
            ["Infraspinatus", "Infraspinous fossa", "Middle facet of greater tubercle", "External rotation; head depression", "Suprascapular (C5–6)"],
            ["Teres minor", "Lateral border of scapula", "Inferior facet of greater tubercle", "External rotation; head depression", "Axillary (C5–6)"],
            ["Subscapularis", "Subscapular fossa (anterior scapula)", "Lesser tubercle", "Internal rotation; anterior stability", "Upper & lower subscapular (C5–7)"],
          ],
        },
        {
          kind: "paragraph",
          text: "A useful mnemonic is SITS (supraspinatus, infraspinatus, teres minor, subscapularis) — three insert on the greater tubercle from superior to inferior, and only subscapularis inserts on the lesser tubercle anteriorly, making it the sole internal rotator of the cuff.",
        },
        {
          kind: "cards",
          items: [
            { title: "Supraspinatus", text: "Passes under the acromion through the subacromial space. Its tendon has a relatively hypovascular zone near the insertion and is the most commonly torn cuff tendon.", icon: "alert-triangle" },
            { title: "Infraspinatus", text: "The main external rotator (~60% of ER force). Tested with the arm at the side in neutral; weakness here is common in larger cuff tears.", icon: "rotate-ccw" },
            { title: "Teres minor", text: "Becomes the dominant external rotator in elevated positions. Isolated testing uses ER at 90° abduction (the Hornblower position).", icon: "rotate-ccw" },
            { title: "Subscapularis", text: "The largest and strongest cuff muscle. Tested with lift-off or belly-press tests; tears allow increased passive external rotation.", icon: "hand" },
          ],
        },
        {
          kind: "warning",
          title: "Common learning errors",
          items: [
            "Supraspinatus is an abduction initiator, not the sole 0–15° abductor — deltoid is active from the start; the cuff's key role throughout range is compression.",
            "Do not equate \"rotator cuff\" with supraspinatus alone — subscapularis is the largest of the four and anterior cuff tears are frequently missed.",
            "Teres MAJOR is not part of the cuff — it is an internal rotator innervated by the lower subscapular nerve.",
          ],
        },
      ],
    },
    {
      slug: "deltoid-force-couples",
      title: "Deltoid & Force Couples",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "The deltoid has three parts — anterior (flexion, internal rotation), middle (abduction) and posterior (extension, external rotation) — all innervated by the axillary nerve. It is the prime mover of elevation, but its line of pull creates a problem: with the arm at the side, the middle deltoid pulls almost vertically, tending to slide the humeral head upward rather than rotate the arm.",
        },
        { kind: "image", illustration: "muscle-fiber", caption: "Muscle architecture from whole muscle to fibre: fibre direction sets a muscle's line of pull, which is why the near-vertically pulling deltoid needs the obliquely oriented cuff to complete the force couple." },
        {
          kind: "steps",
          items: [
            { title: "The problem: superior shear", text: "In early abduction the deltoid's force vector is mostly directed upward along the humeral shaft, driving the head towards the acromion." },
            { title: "The solution: cuff counterforce", text: "Infraspinatus, teres minor and subscapularis pull inward and downward, compressing and depressing the humeral head so the deltoid's pull is converted into pure rotation." },
            { title: "The result: a force couple", text: "Two force sets acting in different directions produce controlled rotation about a stable centre — the deltoid–rotator cuff force couple." },
            { title: "When it fails", text: "In large cuff tears the unopposed deltoid causes superior migration of the head, a shrug-type movement pattern, and in long-standing cases cuff-tear arthropathy." },
          ],
        },
        {
          kind: "paragraph",
          text: "A second essential force couple acts on the scapula: upper trapezius, lower trapezius and serratus anterior work together to produce upward rotation of the scapula during elevation, each pulling on a different part of the scapula around its rotational axis.",
        },
        {
          kind: "keypoints",
          title: "Force couples to remember",
          items: [
            "Deltoid + rotator cuff → stable glenohumeral elevation",
            "Upper trapezius + lower trapezius + serratus anterior → scapular upward rotation",
            "Loss of either couple produces abnormal movement long before loss of range",
          ],
        },
        {
          kind: "pearls",
          items: [
            "A patient who \"shrugs\" into abduction is showing you a failing deltoid–cuff force couple — retrain head depression before loading elevation.",
            "Deltoid function is what makes reverse total shoulder replacement work when the cuff is irreparable — the prosthesis medialises the centre of rotation so the deltoid can elevate the arm alone.",
          ],
        },
      ],
    },
    {
      slug: "scapulohumeral-rhythm",
      title: "Scapulohumeral Rhythm",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "Full elevation of the arm (~180°) is shared between the glenohumeral joint and the scapulothoracic articulation in an overall ratio of roughly 2:1 — about 120° of glenohumeral motion and 60° of scapular upward rotation. The ratio varies through range and between individuals, but 2:1 is the accepted average.",
        },
        {
          kind: "steps",
          items: [
            { title: "Setting phase (0–30°)", text: "Motion is mostly glenohumeral while the scapula 'sets' — small, variable movements as it stabilises against the thorax." },
            { title: "Mid-range (30–90°)", text: "The scapula contributes increasingly through upward rotation, driven by the trapezius–serratus force couple; the clavicle elevates at the SC joint." },
            { title: "End-range (90–180°)", text: "Continued scapular upward rotation with posterior tilt and external rotation; the clavicle rotates posteriorly about its long axis, and full elevation requires GH external rotation so the greater tubercle clears the acromion." },
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Overall rhythm ≈ 2:1 (120° GH : 60° scapulothoracic) across full elevation",
            "Scapular motion in elevation = upward rotation + posterior tilt + external rotation",
            "GH external rotation is needed to clear the greater tubercle in abduction",
            "Altered rhythm (early or excessive scapular movement) often reflects GH stiffness, cuff weakness or pain — it is a finding, not a diagnosis",
          ],
        },
        {
          kind: "pearls",
          items: [
            "In frozen shoulder the scapula moves early and excessively to compensate for the stiff GH joint — reverse scapulohumeral rhythm is a classic observation.",
            "Watch the rhythm from behind during slow lowering: eccentric control problems (dyskinesis, winging) often appear on the way down.",
          ],
        },
      ],
    },
    {
      slug: "axioscapular-muscles",
      title: "Axioscapular Muscles & Scapular Control",
      estMinutes: 3,
      content: [
        {
          kind: "paragraph",
          text: "The axioscapular muscles anchor the scapula to the trunk and control its position and movement. Because the shoulder girdle hangs on muscle rather than bone, these muscles are the platform on which all glenohumeral function is built.",
        },
        {
          kind: "cards",
          items: [
            { title: "Trapezius", text: "Upper fibres elevate and upwardly rotate; middle fibres retract; lower fibres depress and upwardly rotate the scapula. Innervated by the spinal accessory nerve (CN XI).", icon: "triangle" },
            { title: "Serratus anterior", text: "From ribs 1–9 to the medial scapular border (costal surface). Protracts and upwardly rotates the scapula and holds it flush to the rib cage. Long thoracic nerve (C5–7).", icon: "layers" },
            { title: "Rhomboids & levator scapulae", text: "Retract and downwardly rotate the scapula (dorsal scapular nerve). Levator scapulae also elevates the superior angle.", icon: "chevrons-up" },
            { title: "Pectoralis minor", text: "From ribs 3–5 to the coracoid process. Anteriorly tilts and depresses the scapula; adaptive shortening is associated with reduced posterior tilt in elevation.", icon: "corner-down-left" },
          ],
        },
        {
          kind: "table",
          headers: ["Scapular winging", "Nerve involved", "Muscle", "Classic sign"],
          rows: [
            ["Medial winging (medial border lifts off)", "Long thoracic nerve", "Serratus anterior", "Accentuated by a wall push-up; medial border and inferior angle protrude"],
            ["Lateral winging", "Spinal accessory nerve (CN XI)", "Trapezius", "Shoulder droop, difficulty shrugging and abducting; often after neck surgery"],
          ],
        },
        {
          kind: "warning",
          title: "Do not confuse",
          items: [
            "Serratus anterior weakness → MEDIAL winging, classically tested with a wall push-up.",
            "Trapezius palsy → lateral winging with shoulder droop — think of accessory nerve injury after lymph node biopsy or neck dissection.",
            "Subtle dyskinesis without nerve injury is common and non-specific; true neurological winging is dramatic and persistent.",
          ],
        },
      ],
    },
    {
      slug: "bursae-subacromial-space",
      title: "Bursae & the Subacromial Space",
      estMinutes: 2,
      content: [
        {
          kind: "paragraph",
          text: "The subacromial (subacromial–subdeltoid) bursa lies between the coracoacromial arch above and the supraspinatus tendon below, allowing the cuff to glide under the arch. It is the largest bursa in the body and is richly innervated — a genuine potential pain source.",
        },
        {
          kind: "paragraph",
          text: "The subacromial space is bounded above by the acromion, coracoacromial ligament and coracoid (the coracoacromial arch) and below by the humeral head. Its contents — supraspinatus tendon, subacromial bursa, the long head of biceps tendon and the superior capsule — share a space of only about 1 cm, which narrows further during elevation.",
        },
        {
          kind: "cards",
          items: [
            { title: "Contents of the space", text: "Supraspinatus tendon, subacromial–subdeltoid bursa, long head of biceps tendon, superior joint capsule.", icon: "package" },
            { title: "Clinical relevance", text: "Pain from these structures presents as 'subacromial shoulder pain' (formerly impingement) — a painful arc around 60–120° of abduction is the classic pattern.", icon: "activity" },
            { title: "Modern view", text: "Symptoms relate more to cuff load-capacity failure and bursal sensitisation than to mechanical 'pinching' by acromial shape — which is why progressive loading, not rest, is first-line care.", icon: "refresh-ccw" },
          ],
        },
        {
          kind: "pearls",
          items: [
            "The normally thin bursa can account for much of the pain in cuff-related shoulder pain — bursal tissue is far more richly innervated than tendon.",
            "A painful arc (~60–120°) implicates subacromial structures; pain at end-range elevation more often implicates the AC joint.",
          ],
        },
      ],
    },
    {
      slug: "neurovascular",
      title: "Neurovascular Structures",
      estMinutes: 3,
      difficulty: "Intermediate",
      content: [
        {
          kind: "paragraph",
          text: "The brachial plexus (roots C5–T1) passes between the clavicle and first rib and through the axilla, giving off the nerves of the shoulder girdle along the way. A working overview — roots, trunks, divisions, cords, branches — lets you reason about which movements and sensations are lost with each injury.",
        },
        {
          kind: "table",
          headers: ["Nerve", "Root values", "Key muscles", "Clinical note"],
          rows: [
            ["Axillary", "C5–6", "Deltoid, teres minor", "Winds around the surgical neck of the humerus; most commonly injured in anterior dislocation — test regimental badge sensation"],
            ["Suprascapular", "C5–6", "Supraspinatus, infraspinatus", "Runs through the suprascapular notch; entrapment causes painless ER weakness and wasting"],
            ["Long thoracic", "C5–7", "Serratus anterior", "Superficial on the chest wall; injury → medial scapular winging"],
            ["Spinal accessory (CN XI)", "Cranial XI", "Trapezius", "Vulnerable in the posterior triangle of the neck; injury → lateral winging and shoulder droop"],
            ["Musculocutaneous", "C5–7", "Biceps, brachialis, coracobrachialis", "Pierces coracobrachialis; injury weakens elbow flexion/supination"],
          ],
        },
        {
          kind: "paragraph",
          text: "The axillary artery, a continuation of the subclavian, travels with the plexus cords through the axilla and gives the anterior and posterior circumflex humeral arteries around the surgical neck. The posterior circumflex humeral artery accompanies the axillary nerve through the quadrangular space.",
        },
        {
          kind: "redflags",
          items: [
            "Loss of regimental badge area sensation or deltoid contraction after shoulder dislocation — axillary nerve injury; document before and after any relocation",
            "Progressive painless wasting of the infraspinous fossa — consider suprascapular nerve entrapment or a paralabral cyst",
            "Vascular signs (pallor, coolness, absent pulses) after trauma — urgent medical assessment",
          ],
        },
        {
          kind: "keypoints",
          items: [
            "Brachial plexus = C5–T1: roots → trunks → divisions → cords → branches",
            "Axillary nerve: surgical neck of humerus, deltoid + teres minor, regimental badge sensation",
            "Suprascapular nerve: through the suprascapular notch to supraspinatus and infraspinatus",
            "Always screen neurovascular status after dislocation or trauma",
          ],
        },
      ],
    },
    {
      slug: "surface-anatomy",
      title: "Surface Anatomy & Palpation",
      estMinutes: 3,
      difficulty: "Beginner",
      content: [
        {
          kind: "paragraph",
          text: "Reliable palpation turns anatomical knowledge into assessment skill. Work systematically from the midline outward, comparing sides, and name each landmark as you find it.",
        },
        {
          kind: "steps",
          items: [
            { title: "Sternoclavicular joint", text: "Start at the sternal notch; the SC joint is immediately lateral. Ask the patient to shrug to feel clavicular movement." },
            { title: "Clavicle & AC joint", text: "Trace the clavicle laterally along its S-shape to the slight step of the AC joint just medial to the acromial edge. Localised tenderness here suggests AC pathology." },
            { title: "Acromion & greater tubercle", text: "The flat lateral acromion is the shoulder's highest bony point. The greater tubercle lies a fingerbreadth below its lateral edge; internal rotation brings the bicipital groove anteriorly under your finger." },
            { title: "Coracoid process", text: "Palpate 2–3 cm inferomedial to the clavicle's concavity in the deltopectoral triangle. Attachment site for pectoralis minor, short head of biceps and coracobrachialis. Deep and normally slightly tender — compare sides." },
            { title: "Scapular landmarks", text: "The spine of the scapula lies at the level of the T3 spinous process; the inferior angle at about T7 — useful references for assessing resting scapular position and elevation." },
            { title: "Soft tissues", text: "Palpate supraspinatus in the supraspinous fossa, infraspinatus below the spine, the upper trapezius bulk, and the biceps tendon in the groove between the tubercles." },
          ],
        },
        {
          kind: "keypoints",
          title: "Vertebral levels to remember",
          items: [
            "Spine of scapula → T3 spinous process",
            "Inferior angle of scapula → T7 spinous process",
            "Palpate the bicipital groove with the arm in slight internal rotation, between greater and lesser tubercles",
          ],
        },
        {
          kind: "pearls",
          items: [
            "Palpation tenderness alone is a weak diagnostic sign around the shoulder — many structures are normally tender (especially the coracoid). Always compare with the other side.",
            "A visible step deformity at the AC joint after a fall suggests AC separation; at the SC joint, posterior displacement is an emergency because of the structures behind it.",
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
            "Four joints: GH, AC, SC + scapulothoracic; SC is the only bony link to the trunk",
            "GH joint: shallow glenoid + labrum + lax capsule = maximal mobility, muscular stability",
            "Static stabilisers: labrum, capsule, GH ligaments, negative pressure; dynamic: cuff, biceps, scapular muscles",
            "Cuff (SITS): supraspinatus abducts/compresses; infraspinatus & teres minor externally rotate; subscapularis internally rotates",
            "Force couples: deltoid–cuff at the GH joint; trapezius–serratus for scapular upward rotation",
            "Scapulohumeral rhythm ≈ 2:1 (120° GH : 60° scapula)",
            "Winging: medial = serratus anterior (long thoracic n.); lateral = trapezius (accessory n.)",
            "Axillary nerve at the surgical neck — check regimental badge sensation after dislocation",
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
      text: "Which articulation provides the only true bony connection between the upper limb and the axial skeleton?",
      options: ["Glenohumeral joint", "Acromioclavicular joint", "Sternoclavicular joint", "Scapulothoracic articulation"],
      correctIndex: 2,
      explanation:
        "The sternoclavicular joint connects the clavicle to the sternum and is the only skeletal link between the upper limb and the trunk. Everything else in the shoulder girdle is suspended by muscle, which is what allows — and demands — such extensive muscular control.",
      difficulty: "Easy",
      tags: ["anatomy"],
      sectionSlug: "four-joints",
    },
    {
      text: "The scapulothoracic 'joint' is best described as which of the following?",
      options: [
        "A plane synovial joint with a fibrous capsule",
        "A physiological gliding surface between the scapula and the rib cage, not a true joint",
        "A saddle joint containing an intra-articular disc",
        "A syndesmosis bound by an interosseous membrane",
      ],
      correctIndex: 1,
      explanation:
        "The scapulothoracic articulation has no capsule, synovium or articular cartilage — it is a functional gliding interface between the scapula (with serratus anterior and subscapularis) and the thoracic wall. It nevertheless contributes about a third of arm elevation.",
      difficulty: "Easy",
      tags: ["anatomy"],
      sectionSlug: "four-joints",
    },
    {
      text: "Which feature of the glenohumeral joint best explains why it is the most commonly dislocated major joint?",
      options: [
        "The glenoid covers most of the humeral head, concentrating forces",
        "A shallow glenoid and lax capsule provide great mobility but little passive stability",
        "The rotator cuff pulls the humeral head out of the socket during movement",
        "The labrum increases translation of the humeral head",
      ],
      correctIndex: 1,
      explanation:
        "The glenoid contacts only about a quarter to a third of the humeral head, and the capsule is deliberately lax to permit range. This mobility–stability trade-off leaves the joint dependent on the labrum, ligaments and muscles — and when these fail, dislocation (over 90% anterior) results. The cuff and labrum are stabilisers, not destabilisers.",
      difficulty: "Easy",
      tags: ["anatomy", "clinical-reasoning"],
      sectionSlug: "glenohumeral-joint",
    },
    {
      text: "What is the main mechanical contribution of the glenoid labrum?",
      options: [
        "It secretes synovial fluid to lubricate the joint",
        "It deepens the glenoid socket by up to 50% and increases contact area",
        "It prevents the biceps tendon from entering the joint",
        "It anchors the deltoid to the scapula",
      ],
      correctIndex: 1,
      explanation:
        "The fibrocartilaginous labrum deepens the shallow glenoid by up to half and enlarges the contact surface, improving the suction and concavity–compression mechanisms. The long head of biceps anchors to the superior labrum (relevant to SLAP lesions), but the labrum's core job is deepening the socket.",
      difficulty: "Easy",
      tags: ["anatomy"],
      sectionSlug: "glenohumeral-joint",
    },
    {
      text: "In mid-range positions, glenohumeral stability depends mostly on which mechanism?",
      options: [
        "Tension in the inferior glenohumeral ligament",
        "Bony impingement of the greater tubercle on the acromion",
        "Concavity–compression from rotator cuff contraction",
        "The coracoacromial ligament suspending the humeral head",
      ],
      correctIndex: 2,
      explanation:
        "The capsule and glenohumeral ligaments are lax in mid-range and only tighten near end-range. Through mid-range, stability comes from the rotator cuff compressing the convex head into the labrum-deepened concavity. This is why cuff strengthening is central to rehabilitation of atraumatic instability.",
      difficulty: "Medium",
      tags: ["anatomy", "clinical-reasoning"],
      sectionSlug: "static-dynamic-stabilisers",
    },
    {
      text: "Which structure is the primary static restraint to anterior translation of the humeral head in the abducted, externally rotated (throwing) position?",
      options: [
        "Superior glenohumeral ligament",
        "Inferior glenohumeral ligament complex",
        "Coracohumeral ligament",
        "Transverse humeral ligament",
      ],
      correctIndex: 1,
      explanation:
        "The anterior band of the inferior glenohumeral ligament complex tightens in abduction–external rotation and is the key passive restraint to anterior translation in that position — precisely why the anteroinferior capsulolabral complex (Bankart lesion) is injured in anterior dislocation.",
      difficulty: "Hard",
      tags: ["anatomy", "pathology"],
      sectionSlug: "static-dynamic-stabilisers",
    },
    {
      text: "Which rotator cuff muscle inserts on the lesser tubercle of the humerus?",
      options: ["Supraspinatus", "Infraspinatus", "Teres minor", "Subscapularis"],
      correctIndex: 3,
      explanation:
        "Subscapularis arises from the anterior (costal) surface of the scapula and inserts on the lesser tubercle — the only cuff muscle to do so and the cuff's only internal rotator. The other three insert on the superior, middle and inferior facets of the greater tubercle respectively.",
      difficulty: "Easy",
      tags: ["anatomy"],
      sectionSlug: "rotator-cuff",
    },
    {
      text: "What is the shared, defining function of all four rotator cuff muscles during arm movement?",
      options: [
        "Producing maximal abduction torque",
        "Compressing the humeral head into the glenoid to provide a stable pivot",
        "Elevating the scapula on the thorax",
        "Tensioning the biceps tendon",
      ],
      correctIndex: 1,
      explanation:
        "Although each cuff muscle has its own rotational action, their collective and defining role is concavity–compression — pulling the humeral head into the socket so prime movers like the deltoid act on a stable fulcrum. Cuff rehabilitation is therefore stability training as much as strength training.",
      difficulty: "Medium",
      tags: ["anatomy", "exercise-therapy"],
      sectionSlug: "rotator-cuff",
    },
    {
      text: "A patient with a suprascapular nerve lesion at the suprascapular notch would show weakness of which movements?",
      options: [
        "Internal rotation and adduction",
        "Abduction initiation and external rotation",
        "Scapular protraction",
        "Elbow flexion and supination",
      ],
      correctIndex: 1,
      explanation:
        "The suprascapular nerve (C5–6) supplies supraspinatus (abduction initiation, compression) and infraspinatus (the main external rotator). A lesion at the notch weakens both; a lesion further distally at the spinoglenoid notch spares supraspinatus and affects only infraspinatus.",
      difficulty: "Medium",
      tags: ["anatomy", "assessment"],
      sectionSlug: "neurovascular",
    },
    {
      text: "Why does an unopposed deltoid contraction (as in a massive rotator cuff tear) fail to produce normal abduction?",
      options: [
        "The deltoid becomes denervated when the cuff tears",
        "Without cuff compression and depression, the deltoid's vertical pull shears the humeral head superiorly instead of rotating the arm",
        "The deltoid can only extend the shoulder",
        "The scapula fuses to the thorax without cuff activity",
      ],
      correctIndex: 1,
      explanation:
        "With the arm at the side the middle deltoid pulls largely upward along the humeral shaft. Normally the infraspinatus, teres minor and subscapularis depress and compress the head so this pull becomes rotation — the deltoid–cuff force couple. When the couple fails, the head migrates superiorly and the patient hitches or shrugs into elevation.",
      difficulty: "Medium",
      tags: ["anatomy", "pathology", "clinical-reasoning"],
      sectionSlug: "deltoid-force-couples",
    },
    {
      text: "Which three muscles form the force couple that upwardly rotates the scapula during arm elevation?",
      options: [
        "Rhomboids, levator scapulae, pectoralis minor",
        "Upper trapezius, lower trapezius, serratus anterior",
        "Deltoid, supraspinatus, biceps",
        "Latissimus dorsi, teres major, subscapularis",
      ],
      correctIndex: 1,
      explanation:
        "Upper trapezius, lower trapezius and serratus anterior pull on different points of the scapula around its axis of rotation, together producing smooth upward rotation. The rhomboids, levator scapulae and pectoralis minor are downward rotators/anterior tilters — the opposing group.",
      difficulty: "Medium",
      tags: ["anatomy"],
      sectionSlug: "deltoid-force-couples",
    },
    {
      text: "In full arm elevation of about 180°, the approximate contributions of glenohumeral and scapulothoracic motion are:",
      options: [
        "90° glenohumeral : 90° scapulothoracic",
        "60° glenohumeral : 120° scapulothoracic",
        "120° glenohumeral : 60° scapulothoracic",
        "150° glenohumeral : 30° scapulothoracic",
      ],
      correctIndex: 2,
      explanation:
        "Scapulohumeral rhythm averages 2:1 — roughly 120° of glenohumeral motion and 60° of scapular upward rotation across full elevation. The ratio varies through range (the scapula contributes little in the early setting phase), but 2:1 is the accepted overall figure.",
      difficulty: "Easy",
      tags: ["anatomy", "assessment"],
      sectionSlug: "scapulohumeral-rhythm",
    },
    {
      text: "During observation, a patient's scapula begins rotating early and excessively from the very start of abduction. What does this most likely indicate?",
      options: [
        "Normal scapulohumeral rhythm",
        "Compensation for restricted glenohumeral motion, such as in frozen shoulder",
        "Isolated serratus anterior paralysis",
        "A tight inferior glenohumeral ligament increasing GH mobility",
      ],
      correctIndex: 1,
      explanation:
        "In the normal setting phase, early abduction is mostly glenohumeral. When the GH joint is stiff — classically in adhesive capsulitis — the scapula compensates by moving early and excessively (reversed scapulohumeral rhythm). Serratus paralysis reduces, rather than exaggerates, scapular upward rotation.",
      difficulty: "Medium",
      tags: ["assessment", "clinical-reasoning"],
      sectionSlug: "scapulohumeral-rhythm",
    },
    {
      text: "A patient shows winging of the medial scapular border, accentuated during a wall push-up. Which nerve and muscle are involved?",
      options: [
        "Spinal accessory nerve — trapezius",
        "Long thoracic nerve — serratus anterior",
        "Dorsal scapular nerve — rhomboids",
        "Axillary nerve — deltoid",
      ],
      correctIndex: 1,
      explanation:
        "Serratus anterior holds the medial border of the scapula against the rib cage; when it fails (long thoracic nerve injury), the medial border and inferior angle lift away — medial winging — classically provoked by a wall push-up. Trapezius palsy causes lateral winging with shoulder droop.",
      difficulty: "Medium",
      tags: ["anatomy", "assessment"],
      sectionSlug: "axioscapular-muscles",
    },
    {
      text: "After a neck lymph node biopsy, a patient has shoulder droop, difficulty shrugging and lateral scapular winging. Which nerve was most likely injured?",
      options: ["Long thoracic nerve", "Suprascapular nerve", "Spinal accessory nerve (CN XI)", "Axillary nerve"],
      correctIndex: 2,
      explanation:
        "The spinal accessory nerve runs superficially through the posterior triangle of the neck, where it is vulnerable during lymph node biopsy or neck dissection. It supplies trapezius; palsy produces shoulder droop, weak shrug and abduction, and lateral winging — distinct from the medial winging of serratus anterior palsy.",
      difficulty: "Hard",
      tags: ["anatomy", "clinical-reasoning"],
      sectionSlug: "axioscapular-muscles",
    },
    {
      text: "Which set of structures occupies the subacromial space?",
      options: [
        "Subscapularis tendon, axillary nerve, anterior circumflex artery",
        "Supraspinatus tendon, subacromial bursa, long head of biceps tendon, superior capsule",
        "Infraspinatus tendon, suprascapular nerve, labrum",
        "Deltoid insertion, teres major tendon, cephalic vein",
      ],
      correctIndex: 1,
      explanation:
        "Beneath the coracoacromial arch lie the supraspinatus tendon, the subacromial–subdeltoid bursa, the long head of biceps tendon and the superior joint capsule, sharing roughly 1 cm of space. Pain from these structures produces the classic painful arc around 60–120° of abduction.",
      difficulty: "Medium",
      tags: ["anatomy", "pathology"],
      sectionSlug: "bursae-subacromial-space",
    },
    {
      text: "Following an anterior shoulder dislocation, which examination finding specifically suggests axillary nerve injury?",
      options: [
        "Weak elbow flexion with absent biceps reflex",
        "Loss of sensation over the 'regimental badge' area and weak deltoid contraction",
        "Winging of the medial scapular border",
        "Numbness of the little finger",
      ],
      correctIndex: 1,
      explanation:
        "The axillary nerve winds around the surgical neck of the humerus and is the most commonly injured nerve in anterior dislocation. It supplies deltoid and teres minor and the skin over the lateral deltoid (regimental badge area) — test both before and after any relocation. Little finger numbness points to ulnar/C8 territory, and biceps weakness to the musculocutaneous nerve.",
      difficulty: "Easy",
      tags: ["anatomy", "precautions"],
      sectionSlug: "neurovascular",
    },
    {
      text: "Which vertebral level corresponds to the inferior angle of the scapula in normal standing posture?",
      options: ["T2", "T4", "T7", "T10"],
      correctIndex: 2,
      explanation:
        "In normal resting posture the spine of the scapula lies level with the T3 spinous process and the inferior angle with about T7 — practical references for judging resting scapular position, elevation or depression during postural assessment.",
      difficulty: "Medium",
      tags: ["anatomy", "assessment"],
      sectionSlug: "surface-anatomy",
    },
    {
      text: "Why does full glenohumeral abduction require external rotation of the humerus?",
      options: [
        "External rotation tightens the supraspinatus and pulls the arm up",
        "External rotation allows the greater tubercle to clear the acromion",
        "External rotation relaxes the deltoid so the cuff can work",
        "External rotation locks the AC joint in position",
      ],
      correctIndex: 1,
      explanation:
        "With the arm in internal rotation, the greater tubercle approaches the coracoacromial arch and blocks elevation. External rotation swings the tubercle posteriorly so it clears the acromion, allowing full abduction — a detail that also explains why testing abduction in different rotations changes symptom response.",
      difficulty: "Hard",
      tags: ["anatomy", "clinical-reasoning"],
      sectionSlug: "scapulohumeral-rhythm",
    },
    {
      text: "A patient has weak external rotation tested at 90° of abduction (Hornblower position) but reasonable external rotation strength with the arm at the side. Which muscle is most specifically implicated?",
      options: ["Infraspinatus", "Teres minor", "Supraspinatus", "Subscapularis"],
      correctIndex: 1,
      explanation:
        "Infraspinatus is the dominant external rotator with the arm at the side, while teres minor becomes increasingly dominant in elevated positions. Weak external rotation isolated to 90° abduction (a positive Hornblower-type finding) therefore points to teres minor.",
      difficulty: "Hard",
      tags: ["anatomy", "assessment"],
      sectionSlug: "rotator-cuff",
    },
  ],
  flashcards: [
    { front: "Name the four articulations of the shoulder complex.", back: "Glenohumeral, acromioclavicular, sternoclavicular joints plus the scapulothoracic (functional) articulation." },
    { front: "What is the mobility–stability trade-off at the GH joint?", back: "A shallow glenoid and lax capsule allow the body's greatest range of motion but provide minimal passive stability — muscles must do the stabilising." },
    { front: "List the static stabilisers of the glenohumeral joint.", back: "Glenoid labrum, capsule, glenohumeral ligaments (especially the inferior GH ligament complex), negative intra-articular pressure and bony geometry." },
    { front: "Rotator cuff muscles and their insertions?", back: "Supraspinatus (superior facet), infraspinatus (middle facet) and teres minor (inferior facet) on the greater tubercle; subscapularis on the lesser tubercle." },
    { front: "What is the deltoid–rotator cuff force couple?", back: "The cuff compresses and depresses the humeral head, converting the deltoid's superiorly directed pull into rotation — losing it causes superior head migration." },
    { front: "State the average scapulohumeral rhythm.", back: "About 2:1 — roughly 120° glenohumeral and 60° scapulothoracic motion in 180° of elevation." },
    { front: "Which muscles produce scapular upward rotation?", back: "The force couple of upper trapezius, lower trapezius and serratus anterior." },
    { front: "Medial vs lateral scapular winging — which nerve for each?", back: "Medial winging: long thoracic nerve (serratus anterior). Lateral winging: spinal accessory nerve (trapezius)." },
    { front: "What lies within the subacromial space?", back: "Supraspinatus tendon, subacromial–subdeltoid bursa, long head of biceps tendon and superior capsule beneath the coracoacromial arch." },
    { front: "Which nerve is most often injured in anterior shoulder dislocation, and how do you test it?", back: "The axillary nerve — test regimental badge area sensation and deltoid contraction before and after relocation." },
    { front: "Surface anatomy: vertebral levels of the scapular spine and inferior angle?", back: "Spine of scapula ≈ T3 spinous process; inferior angle ≈ T7." },
    { front: "Why does full abduction need humeral external rotation?", back: "External rotation swings the greater tubercle posteriorly so it clears the acromion and the coracoacromial arch." },
  ],
};

export default topic;
