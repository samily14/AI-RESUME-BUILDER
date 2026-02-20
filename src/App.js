import { useState } from "react";
import axios from "axios";
import "./App.css";
import "./layout/layout.css";

function App() {
  const [page, setPage] = useState("home");
  const [section, setSection] = useState("profile");
  const [atsScore, setAtsScore] = useState(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    objective: "",
    skills: "",
    projects: "",
    experience: "",
    education: ""
  });

  /* ---------------- HANDLERS ---------------- */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generatePDF = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/resume/pdf",
      form,
      { responseType: "blob" }
    );
    const blob = new Blob([res.data], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.pdf";
    a.click();
  };

  const checkATS = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/resume/ats",
      {
        resumeText: `${form.skills} ${form.projects} ${form.experience}`,
        jobSkills: ["Java", "React", "Node", "MongoDB"]
      }
    );
    setAtsScore(res.data.score);
  };

  const saveResume = async () => {
    await axios.post("http://localhost:5000/api/resume/save", {
      email: form.email,
      data: form
    });
    alert("Resume Saved");
  };

  const loadHistory = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/resume/history/${form.email}`
    );
    alert(`You have ${res.data.length} saved resumes`);
  };

  /* ---------------- HOME ---------------- */
  if (page === "home") {
    return (
      <div className="hero">
        <div className="hero-content">
          <h1>Build a Resume That Gets You Hired</h1>
          <p>Create ATS-friendly resumes like resume.io</p>
          <button onClick={() => setPage("login")}>
            Create My Resume
          </button>
        </div>
      </div>
    );
  }

  /* ---------------- LOGIN ---------------- */
  if (page === "login") {
    return (
      <div className="app">
        <h1>Login</h1>
        <input
          placeholder="Enter Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        <button onClick={() => setPage("builder")}>
          Continue
        </button>
      </div>
    );
  }

  /* ---------------- BUILDER ---------------- */
  return (
    <div className="layout">
      {/* SIDEBAR */}
      <div className="sidebar">
        <h3>Resume Builder</h3>
        <button onClick={() => setSection("profile")}>Profile</button>
        <button onClick={() => setSection("skills")}>Skills</button>
        <button onClick={() => setSection("projects")}>Projects</button>
        <button onClick={() => setSection("ats")}>ATS</button>
      </div>

      {/* CONTENT */}
      <div className="content">
        {/* PROFILE */}
        {section === "profile" && (
          <>
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />
            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
            />
            <textarea
              name="objective"
              placeholder="Career Objective"
              onChange={handleChange}
            />
          </>
        )}

        {/* SKILLS */}
        {section === "skills" && (
          <textarea
            name="skills"
            placeholder="Skills (comma separated)"
            onChange={handleChange}
          />
        )}

        {/* PROJECTS */}
        {section === "projects" && (
          <>
            <textarea
              name="projects"
              placeholder="Projects"
              onChange={handleChange}
            />
            <textarea
              name="experience"
              placeholder="Experience"
              onChange={handleChange}
            />
            <textarea
              name="education"
              placeholder="Education"
              onChange={handleChange}
            />
          </>
        )}

        {/* ATS */}
        {section === "ats" && (
          <>
            <button onClick={checkATS}>Check ATS</button>

            <div className="ats-card">
              <h3>ATS Score</h3>
              <div
                className="circle"
                style={{ "--score": atsScore }}
              >
                {atsScore}%
              </div>
            </div>
          </>
        )}

        {/* GLOBAL ACTIONS */}
        <div style={{ marginTop: "20px" }}>
          <button onClick={generatePDF}>Download PDF</button>
          <button onClick={saveResume}>Save Resume</button>
          <button onClick={loadHistory}>Load History</button>
        </div>
      </div>
    </div>
  );
}

export default App;
