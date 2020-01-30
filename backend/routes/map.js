const express = require("express");
const router = express.Router();
require("../passport-strategies");
const { DB } = require("../conf");

router.get("/:id", (req, res) => {
  const mapNum = req.params.id;
  DB.query(
    `SELECT map
      FROM maps 
      WHERE id=?`,
    mapNum,
    (err, results) => {
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        res.status(500).send("Error in user");
      } else {
        let rows = results[0].map.split("|");
        rows = rows.map(row => {
          return row.split(" ");
        });
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.json(rows);
      }
    }
  );
});

module.exports = router;
