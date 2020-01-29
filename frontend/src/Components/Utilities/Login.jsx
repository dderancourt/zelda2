import React, { useState } from "react";
import "./Style/LoginSignup.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sublogin = e => {
    console.log(e);
  };

  return (
    <div>
      <h3>Welcome On Zelda 2</h3>
      <p>already an account ?</p>
      <div className="form">
        <form
          onSubmit={e => {
            sublogin(e);
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
          </label>
          <input className="button" type="submit" value="Soummettre"></input>
        </form>
      </div>
    </div>
  );
}
