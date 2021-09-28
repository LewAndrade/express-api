const express = require("express");
const logger = require("morgan");

const port = process.env.PORT || 8000;

const app = express();

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("*", (req, res) => res.status(200).send({ message: "app working" }));

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

module.exports = app;
