import React, { useState } from "react";
import "./Style/LoginSignup.scss";
import axios from "axios";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const check = () => {};

  function signup(e) {}

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
            id="password"
            name="password"
            placeholder="mot de passe"
            type="password"
            value={password}
            onChange={evt => setPassword(evt.target.value)}
          ></input>
          <p className={check() ? "wrong" : "valid"}>
            {password.length < 8 ? "8 caractères minimum" : ""}
          </p>
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
          <p className={check() ? "wrong" : "valid"}>
            {check() ? "" : "les 2 mots de passe doivent être identiques."}
          </p>
        </label>
        <input
          className="button"
          type="submit"
          value="Soummettre"
          onClick={() => {
            check();
          }}
        ></input>
      </form>
    </div>
  );
}
