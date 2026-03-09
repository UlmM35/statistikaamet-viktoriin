import { QuizQuestion } from "../types";

export const getRandomQuestions = (questions: QuizQuestion[] , count: number): QuizQuestion[] => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};