export interface BaseQuestion {
  id: number;
  question: string;
  type: "single" | "multiple" | "truefalse";
};


export interface SingleChoiceQuestion extends BaseQuestion {
  type: "single";
  options: string[];
  correct: string;
};

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: "multiple",
  options: string[];
  correct: string[];
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: "truefalse";
  correct: boolean;
}

export type QuizQuestion = SingleChoiceQuestion | MultipleChoiceQuestion | TrueFalseQuestion

export interface BaseResult {
  id: number;
  question: string;
  correct: boolean;
}

export interface SingleChoiceResult extends BaseResult {
  type: "single";
  answer: string;
}

export interface MultipleChoiceResult extends BaseResult {
  type: "multiple";
  answer: string[];
}

export interface TrueFalseResult extends BaseResult {
  type: "truefalse";
  answer: boolean;
}

export type QuestionResult = SingleChoiceResult | MultipleChoiceResult | TrueFalseResult;

