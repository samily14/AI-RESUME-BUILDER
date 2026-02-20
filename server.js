const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/resumeDB");

app.use("/api/resume", require("./routes/resumeRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});