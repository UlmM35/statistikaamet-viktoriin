import { QuizQuestion, QuestionResult, AnswerType } from "../types";

export const getRandomQuestions = (questions: QuizQuestion[] , count: number): QuizQuestion[] => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const getMessage = (s: number, total: number): string => {
    if (s === total) {
        return "Suurepärane — kõik vastused õiged!";
    }
    if (s >= Math.ceil(total * 0.6)) {
        return "Tubli töö, aga arenemisruumi on!";
    } 
    return "Kordamine on tarkuse ema, harjuta veel!";
};

export const formatAnswer = (r: QuestionResult) => {
    switch (r.type) {
      case "single":
        return r.answer;
      case "multiple":
        return r.answer.length > 0 ? (r.answer as string[]).join(", ") : "Pole vastanud";
      case "truefalse":
        return r.answer ? "Tõene" : "Väär";
    }
};

export const checkAnswer = (answer: AnswerType, current: QuizQuestion): boolean => {
    switch (current.type) {
        case "single":
            return answer === current.correct;
        case "multiple": {
            const a = Array.isArray(answer) ? [...answer].sort() : [];
            const b = [...current.correct].sort();
            return a.length === b.length && a.every((v, i) => v === b[i]);
        }
        case "truefalse":
            return answer === current.correct;
            
    }
};