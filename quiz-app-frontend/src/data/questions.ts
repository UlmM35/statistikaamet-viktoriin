import { MultipleChoiceQuestion, QuizQuestion, SingleChoiceQuestion, TrueFalseQuestion } from "../types";

const singleChoiceQuestions: SingleChoiceQuestion[] = [
  {
    id: 1,
    question: "Mis on Eesti pealinn?",
    options: ["Tallinn", "Tartu", "Narva"],
    correct: "Tallinn",
    type: "single"
  },
  {
    id: 2,
    question: "Mis värvi on taevas tavaliselt päikeselisel päeval?",
    options: ["Sinine", "Roheline", "Punane"],
    correct: "Sinine",
    type: "single"
  },
  {
    id: 3,
    question: "2 + 2 = ?",
    options: ["3", "4", "5"],
    correct: "4",
    type: "single"
  },
  {
    id: 4,
    question: "Mis loom teeb 'Muu'?",
    options: ["Lehm", "Koer", "Kass"],
    correct: "Lehm",
    type: "single"
  },
  {
    id: 5,
    question: "Mis on Eesti suuruselt teine linn?",
    options: ["Tartu", "Pärnu", "Narva"],
    correct: "Tartu",
    type: "single"
  },
  {
    id: 6,
    question: "Mis planeedil me elame?",
    options: ["Mars", "Maa", "Veenus"],
    correct: "Maa",
    type: "single"
  },
  {
    id: 7,
    question: "Mis kuu on jõulu kuu?",
    options: ["November", "Detsember", "Jaanuar"],
    correct: "Detsember",
    type: "single"
  },
  {
    id: 8,
    question: "Kui palju jalgu on ämblikul?",
    options: ["6", "8", "10"],
    correct: "8",
    type: "single"
  },
  {
    id: 9,
    question: "Mis on vee keemiline valem?",
    options: ["CO2", "H2O", "O2"],
    correct: "H2O",
    type: "single"
  },
  {
    id: 10,
    question: "Mis on Eesti rahvuslind?",
    options: ["Pääsuke", "Kotkas", "Luik"],
    correct: "Pääsuke",
    type: "single"
  },
];

const multipleChoiceQuestions: MultipleChoiceQuestion[] = [
  {
    id: 11,
    type: "multiple",
    question: "Millised neist on JavaScripti raamistikud või teegid?",
    options: ["React", "Vue", "Django", "Angular"],
    correct: ["React", "Vue", "Angular"],
  },
  {
    id: 12,
    type: "multiple",
    question: "Millised on programmeerimiskeeled?",
    options: ["Python", "HTML", "C#", "Java"],
    correct: ["Python", "C#", "Java"],
  },
  {
    id: 13,
    type: "multiple",
    question: "Millised neist on Balti riigid?",
    options: ["Eesti", "Läti", "Leedu", "Soome"],
    correct: ["Eesti", "Läti", "Leedu"],
  },
  {
    id: 14,
    type: "multiple",
    question: "Millised neist on veebibrauserid?",
    options: ["Chrome", "Firefox", "Node.js", "Safari"],
    correct: ["Chrome", "Firefox", "Safari"],
  },
  {
    id: 15,
    type: "multiple",
    question: "Millised neist on CSS raamistikud?",
    options: ["Tailwind", "Bootstrap", "React", "Bulma"],
    correct: ["Tailwind", "Bootstrap", "Bulma"],
  },
  {
    id: 16,
    type: "multiple",
    question: "Millised neist on andmebaasid?",
    options: ["PostgreSQL", "MongoDB", "Express", "MySQL"],
    correct: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    id: 17,
    type: "multiple",
    question: "Millised neist on operatsioonisüsteemid?",
    options: ["Linux", "Windows", "Ubuntu", "Git"],
    correct: ["Linux", "Windows", "Ubuntu"],
  },
  {
    id: 18,
    type: "multiple",
    question: "Millised neist on JavaScripti andmetüübid?",
    options: ["string", "boolean", "integer", "number"],
    correct: ["string", "boolean", "number"],
  },
  {
    id: 19,
    type: "multiple",
    question: "Millised neist on front-end tehnoloogiad?",
    options: ["HTML", "CSS", "React", "PostgreSQL"],
    correct: ["HTML", "CSS", "React"],
  },
  {
    id: 20,
    type: "multiple",
    question: "Millised neist on versioonihaldussüsteemid?",
    options: ["Git", "SVN", "Docker", "Mercurial"],
    correct: ["Git", "SVN", "Mercurial"],
  },
];

const trueFalseQuestions: TrueFalseQuestion[] = [
  {
    id: 21,
    type: "truefalse",
    question: "TypeScript aitab avastada tüübi vigu enne koodi käivitamist.",
    correct: true,
  },
  {
    id: 22,
    type: "truefalse",
    question: "React kasutab DOM-i otse ilma vahekihita.",
    correct: false,
  },
  {
    id: 23,
    type: "truefalse",
    question: "Node.js võimaldab JavaScripti käivitada serveris.",
    correct: true,
  },
  {
    id: 24,
    type: "truefalse",
    question: "CSS kasutatakse andmebaasi päringute tegemiseks.",
    correct: false,
  },
  {
    id: 25,
    type: "truefalse",
    question: "GitHub on Git'i põhine koodihoidla platvorm.",
    correct: true,
  },
  {
    id: 26,
    type: "truefalse",
    question: "HTML on programmeerimiskeel.",
    correct: false,
  },
  {
    id: 27,
    type: "truefalse",
    question: "JSON kasutatakse andmete vahetamiseks rakenduste vahel.",
    correct: true,
  },
  {
    id: 28,
    type: "truefalse",
    question: "React komponendid võivad hoida oma state'i.",
    correct: true,
  },
  {
    id: 29,
    type: "truefalse",
    question: "SQL kasutatakse veebilehe stiilimiseks.",
    correct: false,
  },
  {
    id: 30,
    type: "truefalse",
    question: "API tähendab Application Programming Interface.",
    correct: true,
  },
];

export const questions: QuizQuestion[] = [
  ...singleChoiceQuestions,
  ...multipleChoiceQuestions,
  ...trueFalseQuestions
]