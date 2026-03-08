const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const wonders = require("./data/wonders.json");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));

app.get("/api/wonders", (req, res) => {
  res.json(wonders);
});

app.get("/", (req, res) => {
  res.send("Welcome to the Seven Wonders of the World API");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
