import { QuestionResult } from "../types";

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