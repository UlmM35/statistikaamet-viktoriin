import "./ResultScreen.css"
import { QuestionResult } from "../../types";

interface Props {
  results: QuestionResult[];
  score: number;
  total: number;
  restart: () => void;
};

const ResultScreen = ({ results, score, total, restart }: Props) => {
  const getMessage = (s: number): string => {
    if (s === total) {
        return "Suurepärane — kõik vastused õiged!";
    }
    if (s >= Math.ceil(total * 0.6)) {
        return "Tubli töö!";
    } 
    return "Harjuta veel!";
  };

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
              <td>{r.answer}</td>
              <td style={{ color: r.correct ? "green": "red"}}>{r.correct ? "Õige" : "Vale"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="personal-msg">{getMessage(score)}</p>
      <button onClick={restart}>Proovi uuesti</button>
    </div>
  );
};

export default ResultScreen;