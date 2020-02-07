import React from "react";
import arrows from "../../img/arrows.svg";
import "./Style/BoardCard.scss";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useSelector } from "react-redux";

function BoardCard() {
  let player = useSelector(state => state.player);
  let idPlayer = useSelector(state => state.profile.idPlayer);

  const save = e => {
    e.preventDefault();
    Axios.post(`http://localhost:5000/save`, {
      x: player.position.x,
      y: player.position.y,
      HP: player.HP,
      id_player: idPlayer
    })
      .then(() => {
        alert("partie save");
      })
      .catch(() => {
        alert("partie didn't save");
      });
  };

  return (
    <div className="ControlsTab">
      <div className="ControlsBg">
        <Link to="/profile">
          <button className="">Profile</button>
        </Link>
        <form
          onSubmit={e => {
            save(e);
          }}
        >
          <input className="button" type="submit" value="Save"></input>
        </form>
        <img src={arrows} alt="" />
        <p className="ControlsTabTitle">MOOVES</p>
      </div>
    </div>
  );
}

export default BoardCard;
