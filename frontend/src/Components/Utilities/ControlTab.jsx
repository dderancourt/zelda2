import React from "react";
import arrows from "../../img/arrows.svg";
import "./Style/ControlTab.scss";

function ControlsTab() {
  return (
    <div className="ControlsTab">
      <div className="ControlsBg">
        <img src={arrows} alt="" />
        <p className="ControlsTabTitle">MOOVES</p>
      </div>
    </div>
  );
}

export default ControlsTab;
