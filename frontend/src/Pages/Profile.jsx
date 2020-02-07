import React, { useEffect } from "react";
import { toast } from "react-toastify";
import "./Style/Profile.scss";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Style/ModalConfirmation.scss";

export default function Profil() {
  const dispatch = useDispatch();
  let idCharacter = useSelector(state => state.character.id);
  let id_player = useSelector(state => state.player.id);
  let character = useSelector(state => state.character);

  useEffect(() => {
    if (!idCharacter) return;
    Axios.get(`http://localhost:5000/char/${idCharacter}`).then(({ data }) => {
      dispatch({ type: "FETCH_CHARACTER", value: data[0] });
    });
  }, [idCharacter]);

  function selectNextChar() {
    dispatch({ type: "NEXT_CHARACTER" });
  }

  const saveChar = e => {
    e.preventDefault();
    Axios.post(`http://localhost:5000/char/save`, {
      id_character: idCharacter,
      id: id_player
    })
      .then(() => {
        toast.success("Votre personnage a bien été sélectionné !", {
          className: "customStyleToastContainer"
        });
      })
      .catch(() => {
        toast.error(
          "Une erreur s'est produite lors de la mise à jour de votre personnage, veuillez réessayer",
          {
            className: "customStyleToastContainer"
          }
        );
      });
  };

  return (
    <div className="page">
      <div className="character">
        <h3>Your character</h3>
        <button onClick={() => selectNextChar()}>next char</button>
        <img src="Game/link/linkFront.png" alt="" />
        <h3>Stats</h3>
        <p>character : {character.name}</p>
        <p>HP : {character.HP}</p>
        <p>movespeed : {character.moovespeed}</p>
        <p>ATK : {character.ATK}</p>
        <div className="weapon">
          Weapon : <img src="Game/Item/normalSword.png" alt="" />
        </div>
        <form
          onSubmit={e => {
            saveChar(e);
          }}
        >
          <input
            className="button"
            type="submit"
            value="select Character"
          ></input>
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
