const express = require("express");
const router = express.Router();
const { createResume } = require("../controllers/resumeController");

router.post("/generate", createResume);

module.exports = router;