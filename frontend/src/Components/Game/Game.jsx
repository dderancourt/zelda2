import React from "react";
import Map from "../Components/Game/Map";
import Player from "../Components/Game/Player";
import "./Style/Game.scss";

export default function Game() {
  return (
    <div className="gameScreen">
      <Map />
      <Player />
    </div>
  );
}
