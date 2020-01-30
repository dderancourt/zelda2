import React from "react";
import zeldaLogo from "../../img/zeldaLogo.svg";
import "./Style/Title.scss";

function Title() {
  return <img className="titleImg" alt="logo" src={zeldaLogo} />;
}

export default Title;
