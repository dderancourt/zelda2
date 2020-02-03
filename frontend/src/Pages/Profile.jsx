import React, { useEffect } from "react";
import "./Style/Profile.scss";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Profil() {
  const dispatch = useDispatch();
  let idCharacter = useSelector(state => state.character.id);
  let logged = useSelector(state => state.metaData.isLogged);
  let character = useSelector(state => state.character);
  const max = 2;

  function selectNextChar(idCharacter) {
    if (!logged) idCharacter = 1;
    else {
      if (idCharacter > max) idCharacter = 1;
      else idCharacter += 1;
    }
    Axios.get(`http://localhost:5000/char/${idCharacter}`).then(({ data }) => {
      dispatch({ type: "SELECT_CHARACTER", value: data[0] });
    });
  }

  function saveChar() {
    Axios.post(``);
  }

  return (
    <div className="page">
      <div className="character">
        <h3>Your character</h3>
        <button onClick={() => selectNextChar(idCharacter)}>next char</button>
        <img src="Game/link/linkFront.png" alt="" />
        <h3>Stats</h3>
        <p>HP : {character.HP}</p>
        <p>movespeed : {character.moovespeed}</p>
        <p>ATK : {character.ATK}</p>
        <div className="weapon">
          Weapon : <img src="Game/Item/normalSword.png" alt="" />
        </div>
        <form action="selectChar">
          <button onClick={() => saveChar()}>select Char</button>
        </form>
        <Link to="/gamepage">
          <button>play de game</button>
        </Link>
      </div>
      <div className="informations">
        <h3>Last Save</h3>
        <p>10/01/2020</p>
        <h3>credits</h3>
        <p>the Amazing Derancourt David</p>
      </div>
    </div>
  );
}
