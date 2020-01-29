import React, { useState } from "react";
import "./Style/LoginSignup.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const history = useHistory("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function signup(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/auth/signup`, {
        mail: email,
        password: password,
        Pseudo: pseudo
      })
      .then(() => {
        history.push("/game");
      });
  }

  return (
    <div>
      <form
        onSubmit={e => {
          signup(e);
        }}
      >
        <label className="button">
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="email"
            onChange={evt => setEmail(evt.target.value)}
          ></input>
        </label>
        <label className="button">
          <input
            id="pseudo"
            name="pseudo"
            type="pseudo"
            value={pseudo}
            placeholder="pseudo"
            onChange={evt => setPseudo(evt.target.value)}
          ></input>
        </label>
        <label className="button">
          <input
            id="password"
            name="password"
            placeholder="mot de passe"
            type="password"
            value={password}
            onChange={evt => setPassword(evt.target.value)}
          ></input>
        </label>

        <label className="button">
          <input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="mot de passe"
            type="password"
            value={confirmPassword}
            onChange={evt => setConfirmPassword(evt.target.value)}
          ></input>
        </label>
        <input className="button" type="submit" value="Soummettre"></input>
      </form>
    </div>
  );
}
