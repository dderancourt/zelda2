const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");
const bcrypt = require("bcrypt");
const { DB, jwtSecret } = require("./conf");

passport.use(
  new LocalStrategy(
    {
      usernameField: "mail",
      passwordField: "password"
    },
    (mail, password, done) => {
      DB.query(
        `SELECT id, mail, password 
        FROM users
        WHERE mail=?
        LIMIT 1`,
        mail,
        (err, rows) => {
          if (err) return done(err, false, "Error while fetching user!");
          if (!rows[0]) return done(null, false, "User not found!");
          const { id, mail } = rows[0];
          const user = { id, mail };

          const isPasswordOK = bcrypt.compareSync(password, rows[0].password);
          if (!isPasswordOK) return done(null, false, "Wrong password!");
          return done(null, user);
        }
      );
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      // find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
      return done(null, user);
    }
  )
);
