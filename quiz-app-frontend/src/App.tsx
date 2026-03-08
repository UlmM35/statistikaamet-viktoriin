import "./App.css";
import { useState } from "react";
import { singleChoiceQuestions as questions } from "./data/questions";
import { SingleChoiceQuestion, SingleChoiceResult } from "./types";
import Layout from "./components/Layout/Layout";
import Question from "./components/Question/Question";
import ResultTable from "./components/ResultTable/ResultTable";


const App = () => {
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [results, setResults] = useState<SingleChoiceResult[]>([]);
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const total = questions.length;

  const handleAnswer = (option: string) => {
    setSelected(option);
    const current: SingleChoiceQuestion = questions[index];
    const correct = option === current.correct;
    setFeedback(correct);

    if (correct) {
      setScore((s) => s + 1);
    }

    setResults((prev) => [
      ...prev,
      {
        id: current.id,
        type: "single",
        question: current.question, 
        answer: option, 
        correct},
    ]);

    window.setTimeout(() => {
      setFeedback(null);
      setSelected(null);
      setIndex((i) => i + 1);
    }, 900);
  };

  const restartQuiz = () => {
    setIndex(0);
    setScore(0);
    setResults([]);
    setFeedback(null);
    setSelected(null);
  };

  return (
    <Layout>
      {index >= total ? (
        <ResultTable results={results} score={score} total={total} restart={restartQuiz} />
      ) : (
        <>
          <Question q={questions[index]} selected={selected} feedback={feedback} onAnswer={handleAnswer} />
          <div className="progress">Küsimus {index + 1} / {total}</div>
        </>
      )}
    </Layout>
  );
  
}
export default App;