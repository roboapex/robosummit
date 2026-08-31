export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Challenges", href: "#challenges" },
  { label: "Rulebook", href: "#rulebook" },
  { label: "Registration", href: "#registration" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
] as const;

export const EVENT_DATE = "2026-11-20T08:30:00";

export type Challenge = {
  code: string;
  name: string;
  tagline: string;
  description: string;
  zone: string;
  teamSize: string;
  points: string;
  difficulty: "CORE" | "ADVANCED" | "ELITE";
  placeholder: string;
  image: string;
};

export const CHALLENGES: Challenge[] = [
  {
    code: "CH-01 (Main Mission)",
    name: "Moonbase Madness",
    tagline: "Retrieve fuel and launch the rocket",
    description:
      "Program your rover to cross the Regolith Field, collect fuel cores and deliver them to the outpost hopper for a rocket launch. No driver input once the run begins.",
    zone: "REGOLITH FIELD",
    teamSize: "4 PILOTS",
    points: "TBA (Largest share of total points)",
    difficulty: "CORE",
    placeholder: "[Placeholder: Mars Rover-style Robot]",
    image: ""
  },
  {
    code: "CH-02",
    name: "Crater Catacombs",
    tagline: "Autonomous maze navigation",
    description:
      "With no sky above and no driver below, the rover must map dead ends, thread narrow passages, and reach the end point before the clock runs out.",
    zone: "ZONE B // SUBSURFACE LABYRINTH",
    teamSize: "3 PILOTS",
    points: "100 PTS MAX",
    difficulty: "CORE",
    placeholder: "[Placeholder: Rover navigating dark cave maze]",
    image: "/maze.svg"
  },
  {
    code: "CH-03",
    name: "Archery",
    tagline: "Precision targeting grid",
    description:
      "Launch projectiles at the orbital target grid from escalating distances. Inner rings score double; trajectory calibration is everything.",
    zone: "ZONE C // FIRING RANGE",
    teamSize: "2 PILOTS",
    points: "90 PTS MAX",
    difficulty: "ADVANCED",
    placeholder: "[Placeholder: Robot launcher aimed at target grid]",
    image: "/archery.png"
  },
  {
    code: "CH-04",
    name: "Asteroid Mining",
    tagline: "Resource sort & extract",
    description:
      "Extract damaged ore cubes from the asteroid cluster",
    zone: "ZONE E // BELT STATION",
    teamSize: "4 PILOTS",
    points: "140 PTS MAX",
    difficulty: "ELITE",
    placeholder: "[Placeholder: Robot arm sorting ore cubes]",
    image: "/bricks.png"
  }
];

export const RULES = [
  {
    code: "R-01",
    title: "Team & Build Specifications",
    body: "Crews consist of 2–3 students and 1 coach (guidance only). Robots must fit within 250x250x250mm, weigh under 1.5kg, and use safe materials that won't damage the arena.",
  },
  {
    code: "R-02",
    title: "Strict Autonomy",
    body: "Robots must complete missions entirely on their own. Once the start button is pressed, no remote controls, Bluetooth, or physical intervention by the crew is permitted.",
  },
  {
    code: "R-03",
    title: "Official Runs",
    body: "Each official run has a strict 2-minute time limit. Teams can halt their robot for safety by calling 'STOP', but any interference or boundary violations will end the run immediately.",
  },
  {
    code: "R-04",
    title: "Conduct & Adjudication",
    body: "Fair play is mandatory. No outside help is allowed during runs. Intentional damage to the field or other robots will result in severe penalties or disqualification. Judges' decisions are final.",
  }
];

export const LEADERBOARD = [
  {
    rank: "01",
    team: "ORION SYNDICATE",
    division: "SENIOR DIV.",
    wins: 9,
    points: 845,
    trend: "+2",
  },
  {
    rank: "02",
    team: "TITANIUM FALCONS",
    division: "SENIOR DIV.",
    wins: 8,
    points: 812,
    trend: "+0",
  },
  {
    rank: "03",
    team: "LUNAR CARTOGRAPHY CLUB",
    division: "JUNIOR DIV.",
    wins: 8,
    points: 796,
    trend: "+1",
  },
  {
    rank: "04",
    team: "HELIOS MECHANICS",
    division: "SENIOR DIV.",
    wins: 7,
    points: 731,
    trend: "-2",
  },
  {
    rank: "05",
    team: "ASTROBOROS",
    division: "JUNIOR DIV.",
    wins: 6,
    points: 688,
    trend: "+0",
  },
  {
    rank: "06",
    team: "VECTOR CREW",
    division: "SENIOR DIV.",
    wins: 6,
    points: 654,
    trend: "+3",
  },
];

export const REGISTRATION_STEPS = [
  {
    code: "01",
    title: "Form your crew",
    body: "Assemble 2–4 students and a faculty mentor. Crews may be single-division or cross-year.",
  },
  {
    code: "02",
    title: "Submit the crew",
    body: "Submit your crew list through the Google Form before the deadline.",
  },
  {
    code: "03",
    title: "Pass tech inspection",
    body: "Bring your machine to inspection during competition day, battery and safety sign-off by the marshals.",
  },
  {
    code: "04",
    title: "Launch",
    body: "Receive your mission schedule and compete for the summit.",
  },
];

export const KEY_DATES = [
  { label: "REGISTRATION OPENS", value: "01 SEP 2026" },
  { label: "REGISTRATION CLOSES", value: "TBA" },
  { label: "COMPETITION DAY", value: "20 NOV 2026" },
];

export const FAQS = [
  {
    question: "What is a crew? Is it the same as a team?",
    answer:
      "Yes — crew is just our mission-speak for a team. One crew is one team of 2–4 students plus a faculty mentor, registering one robot for the season.",
  },
  {
    question: "Who can compete?",
    answer:
      "Any P3-P6 student from the same school. Crews may be all from a year or cross-year, and each crew must have one faculty mentor acting as coach (guidance only — no build help during runs).",
  },
  {
    question: "What's the difference between the side mission and the main mission",
    answer:
    "The side missions are tasks adapted from the main mission so that you can use the same robot. However, the side missions will have a twist!"
  },
  {
    question: "Are the robots autonomous?",
    answer:
      "Completely. Once the start button is pressed there are no remote controls, Bluetooth, or any physical intervention. The only way a run stops is a safety 'STOP' call or a boundary violation.",
  },
  {
    question: "Are there size or weight limits for the robot?",
    answer:
      "Robots must fit within 250x250x250mm, weigh under 1.5kg, and use safe materials that will not damage the arena. All machines are checked at tech inspection on competition day.",
  },
  {
    question: "How do we register?",
    answer:
      "Four stages: form your crew, submit the crew list through the Google Form before the deadline, pass tech inspection on competition day, then receive your mission schedule and launch. Capacity is capped at 48 crews, so register early.",
  },
  {
    question: "What if we need a rule clarification?",
    answer:
      "Clarifications are issued through the team captain briefing and are binding for the rest of the season. Judges' decisions on the field are final.",
  },
];
