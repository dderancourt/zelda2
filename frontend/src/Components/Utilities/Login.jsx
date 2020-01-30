import React, { useState } from "react";
import "./Style/LoginSignup.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Login() {
  let history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sublogin = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/auth/login`, {
        mail: email,
        password: password
      })
      .then(() => {
        dispatch({ type: "IS_LOGGED", value: true });
        history.push("/gamepage");
      });
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
