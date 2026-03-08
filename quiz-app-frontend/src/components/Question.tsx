import { SingleChoiceQuestion } from "../types";

interface Props {
  q: SingleChoiceQuestion;
  selected: string | null;
  feedback: boolean | null;
  onAnswer: (option: string) => void;
};

const Question = ({ q, selected, feedback, onAnswer }: Props) => {
  return (
    <div className="card question-card" aria-live="polite">
      <h2 className="question-text">{q.question}</h2>

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

      {feedback !== null && (
        <div className={`feedback ${feedback ? "correct" : "wrong"}`}>
          {feedback ? "Õige!" : "Vale — proovi järgmist"}
        </div>
      )}
    </div>
  );
};

export default Question;