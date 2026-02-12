import React, { useState } from "react";
import axios from "axios";

function ResumeForm() {
  const [formData, setFormData] = useState({
    name: "",
    education: "",
    skills: "",
    projects: "",
    experience: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateResume = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/resume/generate",
        formData
      );
      alert("Resume Generated!\n\n" + response.data.summary);
    } catch (error) {
      alert("Backend not responding. Please start server.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>AI Resume Builder</h2>

      <input name="name" placeholder="Name" onChange={handleChange} /><br /><br />
      <input name="education" placeholder="Education" onChange={handleChange} /><br /><br />
      <input name="skills" placeholder="Skills" onChange={handleChange} /><br /><br />
      <input name="projects" placeholder="Projects" onChange={handleChange} /><br /><br />
      <input name="experience" type="number" placeholder="Experience (years)" onChange={handleChange} /><br /><br />

      <button onClick={generateResume}>Generate Resume</button>
    </div>
  );
}

export default ResumeForm;