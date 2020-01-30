import React from "react";
import arrows from "../../img/arrows.svg";
import "./Style/BoardCard.scss";
import { Link } from "react-router-dom";

function BoardCard() {
  return (
    <div className="ControlsTab">
      <div className="ControlsBg">
        <Link to="/profile">
          <button className="">Profile</button>
        </Link>
        <form action="">
          <button>save</button>
        </form>
        <img src={arrows} alt="" />
        <p className="ControlsTabTitle">MOOVES</p>
      </div>
    </div>
  );
}

export default BoardCard;
