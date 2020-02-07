const express = require("express");
const router = express.Router();
require("../passport-strategies");
const { DB } = require("../conf");

router.post("/", (req, res) => {
  const { id_user } = req.body;
  DB.query(
    `UPDATE parties SET ? WHERE id_user = ?`,
    [req.body, id_user],
    (err, results) => {
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        res.status(500).send("Error in user" + err);
      } else {
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.sendStatus(200);
      }
    }
  );
});

module.exports = router;
