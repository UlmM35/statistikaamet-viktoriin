import "./ResultScreen.css"
import { getMessage } from "../../utils/getMessage";
import { formatAnswer } from "../../utils/formatAnswer";
import { QuestionResult } from "../../types";

interface Props {
  results: QuestionResult[];
  score: number;
  total: number;
  restart: () => void;
};

const ResultScreen = ({ results, score, total, restart }: Props) => {

  return (
    <div className="card result-card">
      <h2>Lõpptulemus</h2>
      <p className="score">
        Skoor: {score} / {total}
      </p>

      <table className="results-table" role="table">
        <thead>
          <tr>
            <th>Küsimus:</th>
            <th>Sinu vastus:</th>
            <th>Tulemus:</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, index) => (
            <tr key={index}>
              <td>{r.question}</td>
              <td>{formatAnswer(r)}</td>
              <td style={{ color: r.correct ? "green": "red"}}>{r.correct ? "Õige" : "Vale"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="personal-msg">{getMessage(score, total)}</p>
      <button onClick={restart}>Proovi uuesti</button>
    </div>
  );
};

export default ResultScreen;