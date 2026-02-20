import "../styles/home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero">
        <h1>
          This resume builder gets you <span>an interview</span>
        </h1>
        <p>Only 2% of resumes win. Yours will be one of them.</p>

        <div className="hero-buttons">
          <button onClick={() => navigate("/login")} className="primary">
            Create my resume
          </button>
          <button className="secondary">Upload my resume</button>
        </div>
      </div>
    </div>
  );
}