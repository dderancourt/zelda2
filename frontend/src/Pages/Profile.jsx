import React, { useEffect } from "react";
import "./Style/Profile.scss";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export default function Profil() {
  const dispatch = useDispatch();
  let character = useSelector(state => state.character);

  useEffect(() => {
    Axios.get(`http://localhost:5000/char/1`).then(({ data }) => {
      dispatch({ type: "SELECT_CHARACTER", value: data[0] });
    });
  }, []);

  return (
    <div className="page">
      <div className="character">
        <h3>Your character</h3>
        <img src="Game/link/linkFront.png" alt="" />
        <h3>Stats</h3>
        <p>HP : {character.HP}</p>
        <p>movespeed : {character.movespeed}</p>
        <p>ATK : {character.ATK}</p>
        <p>
          Weapon : <img src="Game/Item/normalSword.png" alt="" />
        </p>
      </div>
      <div className="informations">
        <div>
          <h3>Last Save</h3>
          <p>10/01/2020</p>
          <h3>credits</h3>
          <p>the Amazing Derancourt David</p>
        </div>
      </div>
    </div>
  );
}
