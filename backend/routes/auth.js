const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("../passport-strategies");
const { jwtSecret, saltRounds, DB } = require("../conf");
const bcrypt = require("bcrypt");

router.post("/signup", (req, res) => {
  const formData = req.body;
  const hash = bcrypt.hashSync(formData.password, saltRounds);
  formData.password = hash;
  DB.query(
    `SELECT mail FROM users WHERE mail = ?`,
    [formData.mail],
    (err, results) => {
      if (err) return res.status(500).send("error" + err);
      if (results.length) return res.status(409).send("email already used");
      DB.query(`INSERT INTO users SET ?`, formData, (err, results) => {
        if (err) {
          // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
          return res.status(500).send("Invalid User creation request" + err);
        } else {
          // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
          return res.sendStatus(201);
        }
      });
    }
  );
});

router.post("/login", (req, res) => {
  passport.authenticate(
    "local",
    { session: false },
    (errAuth, user, infoAuth) => {
      if (errAuth)
        return res.status(500).json({
          tldr: "Tech error!",
          details: errAuth,
          message: infoAuth
        });

      if (!user)
        return res.status(401).json({
          tldr: "Form error!",
          details: "Either mail or password is incorrect",
          message: infoAuth
        });

      const token = jwt.sign(user, jwtSecret);
      return res.status(200).json({ user, token });
    }
  )(req, res);
});

module.exports = router;
