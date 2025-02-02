import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static(join(__dirname, '../public')));

app.get("/", (req, res, next) => {
  res.sendFile(join(__dirname, "view", "index.html"));
});

app.listen(3000);
