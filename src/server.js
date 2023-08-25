import express from "express";

import { StatusCodes } from "http-status-codes";
const app = express();
const port = 8000;

app.get("/smart", (req, res) => {
  res.status(StatusCodes.CREATED);
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
