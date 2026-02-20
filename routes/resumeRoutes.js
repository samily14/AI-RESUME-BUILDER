const express = require("express");
const puppeteer = require("puppeteer");
const Resume = require("../models/Resume");

const router = express.Router();

/* ---------- PDF GENERATION ---------- */
router.post("/pdf", async (req, res) => {
  const data = req.body;

  const html = `
  <html>
  <head>
    <style>
      body { font-family: Arial; padding: 40px; }
      h1 { color: #4b0082; }
      h3 { border-bottom: 1px solid #ccc; }
    </style>
  </head>
  <body>
    <h1>${data.name}</h1>
    <p>${data.email} | ${data.phone}</p>

    <h3>Objective</h3>
    <p>${data.objective}</p>

    <h3>Skills</h3>
    <p>${data.skills}</p>

    <h3>Projects</h3>
    <p>${data.projects}</p>

    <h3>Experience</h3>
    <p>${data.experience}</p>

    <h3>Education</h3>
    <p>${data.education}</p>
  </body>
  </html>
  `;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);
  const pdf = await page.pdf({ format: "A4" });
  await browser.close();

  res.set({
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment; filename=resume.pdf",
  });

  res.send(pdf);
});

/* ---------- ATS CHECK ---------- */
router.post("/ats", (req, res) => {
  const { resumeText, jobSkills } = req.body;
  let score = 0;

  jobSkills.forEach(skill => {
    if (resumeText.toLowerCase().includes(skill.toLowerCase())) {
      score += 10;
    }
  });

  res.json({ score: Math.min(score, 100) });
});

/* ---------- SAVE RESUME ---------- */
router.post("/save", async (req, res) => {
  const resume = new Resume(req.body);
  await resume.save();
  res.json({ message: "Resume saved" });
});

/* ---------- RESUME HISTORY ---------- */
router.get("/history/:email", async (req, res) => {
  const resumes = await Resume.find({ email: req.params.email });
  res.json(resumes);
});

module.exports = router;