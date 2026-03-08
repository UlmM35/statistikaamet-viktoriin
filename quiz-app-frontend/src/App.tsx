import { useState } from "react";
import { singleChoiceQuestions as questions } from "./data/questions";
import { SingleChoiceQuestion, SingleChoiceResult } from "./types";
import Question from "./components/Question";
import ResultTable from "./components/ResultTable";
import "./App.css";

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

  if (index >= total) {
    return (
      <div className="app-container">
        <header className="app-header">
          <div className="brand">Eesti Statistikaamet — Viktoriin</div>
        </header>

        <main>
          <ResultTable results={results} score={score} total={total} restart={restartQuiz}/>
        </main>

      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="brand">Eesti Statistikaamet — Viktoriin</div>
      </header>

      <main>
        <Question
          q={questions[index]}
          selected={selected}
          feedback={feedback}
          onAnswer={handleAnswer}
        />
        <div className="progress">
          Küsimus {index + 1} / {total}
        </div>
      </main>

    </div>
  );
};

export default App;