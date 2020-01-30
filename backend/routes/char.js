const express = require("express");
const router = express.Router();
require("../passport-strategies");
const { DB } = require("../conf");

router.get("/:id", (req, res) => {
  const charId = req.params.id;
  DB.query(
    `SELECT * FROM characters 
    WHERE id=?`,
    charId,
    (err, results) => {
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        res.status(500).send("Error in user" + err);
      } else {
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.json(results);
      }
    }
  );
});

module.exports = router;
