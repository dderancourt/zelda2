//---------------------------------------------------------------- require

const { DB, jwtSecret, saltRounds, BACKPORT } = require("./conf");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const passport = require("passport");

//---------------------------------------------------------------- initialize

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());
app.use(passport.initialize());

//---------------------------------------------------------------- Routes

app.use("/auth", require("./routes/auth"));

app.get("/", (req, res) => {
  DB.query(`SELECT * FROM users`, (error, results) => {
    if (error) res.status(500).send(error);
    res.json(results);
  });
});

//---------------------------------------------------------------- Listen

app.listen(BACKPORT, err => {
  if (err) throw new Error("error");
  console.log(`Listening on port ${BACKPORT}`);
});
