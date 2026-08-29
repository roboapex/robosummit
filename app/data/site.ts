export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Challenges", href: "#challenges" },
  { label: "Rulebook", href: "#rulebook" },
  { label: "Leaderboard", href: "#leaderboard" },
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
};

export const CHALLENGES: Challenge[] = [
  {
    code: "CH-01",
    name: "Feeding Frenzy",
    tagline: "Autonomous resupply run",
    description:
      "Program your rover to cross the Regolith Field, collect nutrient cores and deliver them to the outpost hopper — no driver input once the run begins.",
    zone: "ZONE A // REGOLITH FIELD",
    teamSize: "4 PILOTS",
    points: "120 PTS MAX",
    difficulty: "CORE",
    placeholder: "[Placeholder: Mars Rover-style Robot]",
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
  },
  {
    code: "CH-03",
    name: "Archery",
    tagline: "Precision targeting grid",
    description:
      "Launch projectiles at the orbital target grid from escalating distances. Inner rings score double — trajectory calibration is everything.",
    zone: "ZONE C // FIRING RANGE",
    teamSize: "2 PILOTS",
    points: "90 PTS MAX",
    difficulty: "ADVANCED",
    placeholder: "[Placeholder: Robot launcher aimed at target grid]",
  },
  {
    code: "CH-04",
    name: "Asteroid Mining",
    tagline: "Resource sort & extract",
    description:
      "Extract ore cubes from the asteroid cluster and sort them by color into refinery bins. Mixed loads are rejected by the inspectors.",
    zone: "ZONE E // BELT STATION",
    teamSize: "4 PILOTS",
    points: "140 PTS MAX",
    difficulty: "ELITE",
    placeholder: "[Placeholder: Robot arm sorting ore cubes]",
  }
];

export const RULES = [
  {
    code: "R-01",
    title: "Machine Specification",
    body: "Robots must fit a 50 x 50 x 50 cm starting volume and run on a maximum 12V battery supply. All mechanisms must fit inside the chassis at inspection.",
  },
  {
    code: "R-02",
    title: "Autonomy & Control",
    body: "Events are split into driver-controlled and autonomous windows. In autonomous windows, no radio input is permitted — sensors and preloaded code only.",
  },
  {
    code: "R-03",
    title: "Safety & Inspection",
    body: "Every machine passes technical inspection before pit day. Exposed wiring, unshielded blades or unsafe projectiles result in a no-start until cleared.",
  },
  {
    code: "R-04",
    title: "Scoring & Conduct",
    body: "Points are logged live by field referees and mirrored to the leaderboard. Deliberate interference with opposing machines is grounds for disqualification.",
  },
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
    body: "Submit your crew list through the Google Form  before the deadline.",
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
  { label: "REGISTRATION CLOSES", value: "UNKNOWN" },
  { label: "COMPETITION DAY", value: "20 NOV 2026" },
];
