import express, { static } from "express";
import { port } from "./config.js";

const app = express();

app.use(static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index", { answer: 42 });
});

app.listen(port, function () {
  console.info(`Running on... ${port}`);
});
