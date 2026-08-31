export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Challenges", href: "#challenges" },
  { label: "Rulebook", href: "#rulebook" },
  { label: "Registration", href: "#registration" },
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
    name: "Moonbase Madnessw",
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
    name: "Weightlifting",
    tagline: "Payload deadlift trials",
    description:
      "A gantry-style machine must hoist standardised water bottles to staged heights. Every locked elevation earns points; structural failure ends the lift.",
    zone: "ZONE B // GANTRY DECK",
    teamSize: "3 PILOTS",
    points: "100 PTS MAX",
    difficulty: "CORE",
    placeholder: "[Placeholder: Gantry robot lifting cargo block]",
    image: "/weight.png"
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
