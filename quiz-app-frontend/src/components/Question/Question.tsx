import "./Question.css"
import { useState } from "react";
import { QuizQuestion, AnswerType } from "../../types";

interface Props {
  q: QuizQuestion;
  selected: AnswerType | null;
  feedback: boolean | null;
  onAnswer: (option: AnswerType) => void;
};

const Question = ({ q, selected, feedback, onAnswer }: Props) => {
  const [multiSelected, setMultiSelected] = useState<string[]>([]);

  const toggleMulti = (opt: string) => {
    setMultiSelected((prev) =>
      prev.includes(opt) ? prev.filter((p) => p !== opt) : [...prev, opt]
    );
  };

  const submitMulti = () => {
    onAnswer(multiSelected);
    setMultiSelected([]);
  };

  return (
    <div className="card question-card">
      <h2 className="question-text">{q.question}</h2>

      {q.type === "single" && (
        <div className="options" role="list">
          {q.options.map((opt) => (
            <button
              key={opt}
              className={`option-btn ${selected === opt ? "selected" : ""}`}
              onClick={() => onAnswer(opt)}
              disabled={feedback !== null}
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {q.type === "multiple" && (
        <div className="options" role="list">
          {q.options.map((opt) => (
            <label key={opt} className="multi-option">
              <input
                type="checkbox"
                checked={multiSelected.includes(opt)}
                onChange={() => toggleMulti(opt)}
                disabled={feedback !== null}
              />
              <span>{opt}</span>
            </label>
          ))}
          <div style={{ marginTop: 12 }}>
            <button
              className="submit-btn"
              onClick={submitMulti}
              disabled={feedback !== null || multiSelected.length === 0}
            >
              Vasta
            </button>
          </div>
        </div>
      )}

      {q.type === "truefalse" && (
        <div className="options" role="list">
          <button
            className={`option-btn ${selected === true ? "selected" : ""}`}
            onClick={() => onAnswer(true)}
            disabled={feedback !== null}
          >
            Tõene
          </button>
          <button
            className={`option-btn ${selected === false ? "selected" : ""}`}
            onClick={() => onAnswer(false)}
            disabled={feedback !== null}
          >
            Vale
          </button>
        </div>
      )}

      {feedback !== null && (
        <div className={`feedback ${feedback ? "correct" : "wrong"}`}>
          {feedback ? "Õige!" : "Vale — proovi järgmist"}
        </div>
      )}
    </div>
  );
};

export default Question;