const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },

  data: {
    name: String,
    title: String,
    phone: String,
    linkedin: String,
    github: String,

    objective: String,
    skills: String,
    projects: String,
    experience: String,
    education: String,
    certifications: String,
    languages: String
  },

  atsScore: {
    type: Number,
    default: 0
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Resume", resumeSchema);