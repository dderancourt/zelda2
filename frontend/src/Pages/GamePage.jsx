import React from "react";
import ImageLeft from "../Components/Utilities/ImageLeft";
import Title from "../Components/Utilities/Title";
import BoardCard from "../Components/Utilities/BoardCard";
import Game from "../Components/Game/Game";
import "./Style/GamePage.scss";

export default function GamePage() {
  return (
    <div className="GamePage">
      <Title />
      <div className="Container">
        <ImageLeft />
        <Game />
        <BoardCard />
      </div>
    </div>
  );
}
