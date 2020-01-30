import React from "react";
import Map from "./Map";
import Player from "./Player";
import "./Style/Game.scss";

export default function Game() {
  return (
    <div className="gameScreen">
      <Map />
      <Player />
    </div>
  );
}
