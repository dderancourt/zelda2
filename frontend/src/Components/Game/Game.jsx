import React from "react";
import Map from "./Map";
import Player from "./Player";
import TopBar from "./TopBar";
import "./Style/Game.scss";

export default function Game() {
  return (
    <div className="game">
      <TopBar />
      <div className="gameScreen">
        <Map />
        <Player />
      </div>
    </div>
  );
}
