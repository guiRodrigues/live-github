import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Live sobre git" });
});

app.listen(3333);
