import { MultipleChoiceQuestion, QuizQuestion, SingleChoiceQuestion, TrueFalseQuestion } from "../types";

const singleChoiceQuestions: SingleChoiceQuestion[] = [
  {
    id: 1,
    type: "single",
    question: "Mis oli Eesti rahvaarv 1. jaanuaril 2025?",
    options: ["1 156 000", "1 369 285", "1 521 000"],
    correct: "1 369 285",
  },
  {
    id: 2,
    type: "single",
    question: "Mis oli Eesti keskmine brutokuupalk 2024. aastal?",
    options: ["1 628 €", "1 981 €", "2 214 €"],
    correct: "1 981 €",
  },
  {
    id: 3,
    type: "single",
    question: "Mis oli Eesti töötuse määr 2024. aastal?",
    options: ["5,2%", "7,6%", "10,1%"],
    correct: "7,6%",
  },
  {
    id: 4,
    type: "single",
    question: "Kui suur osa Eesti maismaast on metsaga kaetud?",
    options: ["ca 35%", "ca 52%", "ca 67%"],
    correct: "ca 52%",
  },
  {
    id: 5,
    type: "single",
    question: "Mis valdkonnas oli 2024. aastal Eestis kõrgeim keskmine palk?",
    options: ["Tervishoid", "Finants ja kindlustus", "Info ja kommunikatsioon"],
    correct: "Info ja kommunikatsioon",
  },
  {
    id: 6,
    type: "single",
    question: "Mis oli Eesti mediaanpalk 2024. aastal?",
    options: ["1 628 €", "1 981 €", "1 420 €"],
    correct: "1 628 €",
  },
  {
    id: 7,
    type: "single",
    question: "Mis oli Eesti oodatav eluiga 2024. aastal?",
    options: ["74,2 aastat", "79,5 aastat", "83,1 aastat"],
    correct: "79,5 aastat",
  },
  {
    id: 8,
    type: "single",
    question: "Mis on Eesti suurim linn rahvaarvu järgi?",
    options: ["Tartu", "Tallinn", "Narva"],
    correct: "Tallinn",
  },
  {
    id: 9,
    type: "single",
    question: "Mis on Statistikaameti peamine ülesanne?",
    options: ["Maksude kogumine", "Riikliku statistika koostamine", "Seaduste väljatöötamine"],
    correct: "Riikliku statistika koostamine",
  },
  {
    id: 10,
    type: "single",
    question: "Mis on Eesti suuruselt teine linn rahvaarvu järgi?",
    options: ["Narva", "Pärnu", "Tartu"],
    correct: "Tartu",
  },
];

const multipleChoiceQuestions: MultipleChoiceQuestion[] = [
  {
    id: 11,
    type: "multiple",
    question: "Millised neist on Statistikaameti avaldatavad statistikavaldkonnad?",
    options: ["Rahvastik", "Majandus", "Keskkond", "Reklaam"],
    correct: ["Rahvastik", "Majandus", "Keskkond"],
  },
  {
    id: 12,
    type: "multiple",
    question: "Millised neist on Balti riigid?",
    options: ["Eesti", "Läti", "Leedu", "Soome"],
    correct: ["Eesti", "Läti", "Leedu"],
  },
  {
    id: 13,
    type: "multiple",
    question: "Millised neist kuuluvad Eesti naabrite hulka?",
    options: ["Läti", "Soome", "Rootsi", "Venemaa"],
    correct: ["Läti", "Soome", "Venemaa"],
  },
  {
    id: 14,
    type: "multiple",
    question: "Millised neist on Eesti suuremad linnad?",
    options: ["Tallinn", "Tartu", "Pärnu", "Jõhvi"],
    correct: ["Tallinn", "Tartu", "Pärnu"],
  },
  {
    id: 15,
    type: "multiple",
    question: "Millised neist on Eesti looduslikud maastikutüübid?",
    options: ["Mets", "Raba", "Kõrb", "Rannik"],
    correct: ["Mets", "Raba", "Rannik"],
  },
  {
    id: 16,
    type: "multiple",
    question: "Millised neist on Eesti ametlikud rahvuspühad?",
    options: ["Iseseisvuspäev", "Võidupüha", "Jõulud", "Valentinipäev"],
    correct: ["Iseseisvuspäev", "Võidupüha", "Jõulud"],
  },
  {
    id: 17,
    type: "multiple",
    question: "Millised neist kuuluvad Eesti põhiseaduslike institutsioonide hulka?",
    options: ["Riigikogu", "Vabariigi President", "Riigikohus", "Tallinna linnavolikogu"],
    correct: ["Riigikogu", "Vabariigi President", "Riigikohus"],
  },
  {
    id: 18,
    type: "multiple",
    question: "Millised neist on Eesti ekspordikaubad?",
    options: ["Puit ja puittooted", "Masinad ja seadmed", "Elektroonika", "Tsitrusviljad"],
    correct: ["Puit ja puittooted", "Masinad ja seadmed", "Elektroonika"],
  },
  {
    id: 19,
    type: "multiple",
    question: "Millised neist on Eesti suuremad saared?",
    options: ["Saaremaa", "Hiiumaa", "Muhumaa", "Ruhnu"],
    correct: ["Saaremaa", "Hiiumaa", "Muhumaa"],
  },
  {
    id: 20,
    type: "multiple",
    question: "Millised neist on Eesti maakondade nimed?",
    options: ["Harjumaa", "Tartumaa", "Võrumaa", "Jõgevamaa"],
    correct: ["Harjumaa", "Tartumaa", "Võrumaa"],
  },
];

const trueFalseQuestions: TrueFalseQuestion[] = [
  {
    id: 21,
    type: "truefalse",
    question: "Eesti rahvaarv on üle 1,5 miljoni (2025).",
    correct: false,
  },
  {
    id: 22,
    type: "truefalse",
    question: "Üle poole Eesti maismaast on kaetud metsaga.",
    correct: true,
  },
  {
    id: 23,
    type: "truefalse",
    question: "Eesti oodatav eluiga on üle 80 aasta (2024).",
    correct: false,
  },
  {
    id: 24,
    type: "truefalse",
    question: "Eesti on Euroopa Liidu liige.",
    correct: true,
  },
  {
    id: 25,
    type: "truefalse",
    question: "Tallinn on Eesti suurim linn.",
    correct: true,
  },
  {
    id: 26,
    type: "truefalse",
    question: "Eesti töötuse määr oli 2024. aastal alla 5%.",
    correct: false,
  },
  {
    id: 27,
    type: "truefalse",
    question: "Eesti kuulub NATO-sse.",
    correct: true,
  },
  {
    id: 28,
    type: "truefalse",
    question: "Eesti keskmine brutopalk ületas 2024. aastal 2000 euro piiri.",
    correct: false,
  },
  {
    id: 29,
    type: "truefalse",
    question: "Statistikaamet kogub ja avaldab Eesti riiklikku statistikat.",
    correct: true,
  },
  {
    id: 30,
    type: "truefalse",
    question: "Eesti on suurem kui Läti.",
    correct: false,
  },
];

export const questions: QuizQuestion[] = [
  ...singleChoiceQuestions,
  ...multipleChoiceQuestions,
  ...trueFalseQuestions
]