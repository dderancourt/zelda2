import React from "react";
import WeaponBar from "./WeaponBar";
import HealthBar from "./HealthBar";
import "./GameTopBar.css";
import RubisCounter from "./RubisCounter";

export default function GameTopBar() {
  return (
    <div className="gameTopBar">
      <HealthBar HP={this.props.HP} />

      <WeaponBar haveSword={this.props.haveSword} />

      <RubisCounter rubyCounter={this.props.rubyCounter} />
    </div>
  );
}

export default GameTopBar;
