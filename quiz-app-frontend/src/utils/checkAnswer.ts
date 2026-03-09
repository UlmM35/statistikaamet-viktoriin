import { QuizQuestion, AnswerType } from "../types";

export const checkAnswer = (answer: AnswerType, current: QuizQuestion): boolean => {
    let isCorrect: boolean = false;
    if (current.type === "single") {
      isCorrect = answer === current.correct;
    } else if (current.type === "multiple") {
      const a = Array.isArray(answer) ? [...answer].sort() : [];
      const b = [...current.correct].sort();
      isCorrect = a.length === b.length && a.every((v, i) => v === b[i]);
    } else if (current.type === "truefalse") {
      isCorrect = answer === current.correct;
    }

    return isCorrect;
  };