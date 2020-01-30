import React from "react";
import "./Style/GamePage.scss";

export default function Game() {
  return (
    <div className="GamePage">
      <Title />
      <div className="Container">
        <LeftDiv />
        <Game />
        <ControlsTab />
      </div>
    </div>
  );
}
