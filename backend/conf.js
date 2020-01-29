require("dotenv").config();
const mysql = require("mysql");

const DB = mysql.createPool({
  host: process.env.HOST || "totost", // adresse du serveur
  user: process.env.DBUSER || "toto", // le nom d'utilisateur
  password: process.env.PASSWORD || "t0t0", // le mot de passe
  database: process.env.DATABASE || "toto-DB" // le nom de la base de données
});

const BACKPORT = process.env.BACKPORT;

const jwtSecret = process.env.JWT_SECRET || "jwt_please_change";
const saltRounds = parseInt(process.env.SALT_ROUNDS) || "20"; // nombre de hachage du mot de passe

module.exports = { DB, jwtSecret, saltRounds, BACKPORT };
