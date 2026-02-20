const Resume = require("../models/Resume");
const { generateSummary } = require("../services/aiService");

exports.createResume = async (req, res) => {
  const summary = generateSummary(req.body);

  const resume = new Resume({
    ...req.body,
    summary
  });

  await resume.save();
  res.json(resume);
};
