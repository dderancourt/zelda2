import React, { useEffect } from "react";
import "./Style/Profile.scss";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Profil() {
  const dispatch = useDispatch();
  let character = useSelector(state => state.character);

  useEffect(() => {
    Axios.get(`http://localhost:5000/char/1`).then(({ data }) => {
      dispatch({ type: "SELECT_CHARACTER", value: data[0] });
    });
  }, []);

  select;

  return (
    <div className="page">
      <div className="character">
        <h3>Your character</h3>
        <button>next char</button>
        <img src="Game/link/linkFront.png" alt="" />
        <h3>Stats</h3>
        <p>HP : {character.HP}</p>
        <p>movespeed : {character.movespeed}</p>
        <p>ATK : {character.ATK}</p>
        <p>
          Weapon : <img src="Game/Item/normalSword.png" alt="" />
        </p>
        <form action="selectChar">
          <button>select Char</button>
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
