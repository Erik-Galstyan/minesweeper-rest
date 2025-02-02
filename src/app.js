import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static(join(__dirname, "../public")));

app.get("/", (req, res, next) => {
  res.sendFile(join(__dirname, "view", "index.html"));
});

app.get("/easy", (req, res, next) => {
  res.sendFile(join(__dirname, "view", "gameComplexity", "easy.html"));
});

app.get("/normal", (req, res, next) => {
  res.sendFile(join(__dirname, "view", "gameComplexity", "normal.html"));
});

app.get("/hard", (req, res, next) => {
  res.sendFile(join(__dirname, "view", "gameComplexity", "hard.html"));
});

app.listen(3000);
