const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  name: String,
  education: String,
  skills: String,
  projects: String,
  experience: Number,
  summary: String
});

module.exports = mongoose.model("Resume", ResumeSchema);
