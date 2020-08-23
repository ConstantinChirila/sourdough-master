import express from "express";
import dotenv from "dotenv";
dotenv.config();

const { port } = require("./config");

const app = express();

app.get("/", (req, res) => {
  res.send("Hellso World");
});
console.log(port);
const PORT = port || 3000;

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
