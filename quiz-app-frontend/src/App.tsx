import "./App.css";
import { TIMEOUT_IN_MILLIS } from "./constants/constants";
import { useState } from "react";
import { questions } from "./data/questions";
import { QuizQuestion, QuestionResult, AnswerType } from "./types";
import { getRandomQuestions, checkAnswer } from "./utils/utils";
import Layout from "./components/Layout/Layout";
import Question from "./components/Question/Question";
import ResultScreen from "./components/ResultTable/ResultScreen";

const App = () => {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>(() => getRandomQuestions(questions, 10))
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const [selected, setSelected] = useState<AnswerType | null>(null);

  const total = quizQuestions.length;

  const handleAnswer = (answer: AnswerType) => {
    setSelected(answer);

    const current: QuizQuestion = quizQuestions[index];
    const correct: boolean = checkAnswer(answer, current);

    setFeedback(correct);

    if (correct) {
      setScore((s) => s + 1);
    }

    setResults((prev) => [
      ...prev,
      {
        id: current.id,
        question: current.question,
        correct,
        type: current.type,
        answer,
      } as QuestionResult,
    ]);

    window.setTimeout(() => {
      setFeedback(null);
      setSelected(null);
      setIndex((i) => i + 1);
    }, TIMEOUT_IN_MILLIS);
  };

  const restartQuiz = () => {
    setIndex(0);
    setScore(0);
    setResults([]);
    setFeedback(null);
    setSelected(null);
    setQuizQuestions(getRandomQuestions(questions, 10));
  };

  return (
    <Layout>
      {index >= total ? (
        <ResultScreen results={results} score={score} total={total} restart={restartQuiz} />
      ) : (
        <>
          <Question q={quizQuestions[index]} selected={selected} feedback={feedback} onAnswer={handleAnswer} score={score} />
          <div className="progress">Küsimus {index + 1} / {total}</div>
          <button onClick={restartQuiz}>Alusta uuesti</button>
        </>
      )}
    </Layout>
  );
  
}
export default App;