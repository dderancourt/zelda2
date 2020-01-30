import React from "react";
import WeaponBar from "./WeaponBar";
import HealthBar from "./HealthBar";
import "./Style/TopBar.scss";
import RubisCounter from "./RubisCounter";

export default function TopBar() {
  return (
    <div className="gameTopBar">
      <HealthBar />

      <WeaponBar />

      <RubisCounter />
    </div>
  );
}
