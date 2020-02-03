import React, { useEffect } from "react";
import ImageLeft from "../Components/Utilities/ImageLeft";
import Title from "../Components/Utilities/Title";
import BoardCard from "../Components/Utilities/BoardCard";
import Game from "../Components/Game/Game";
import "./Style/GamePage.scss";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export default function GamePage() {
  const dispatch = useDispatch();
  const idPlayer = useSelector(state => state.profile.idPlayer);

  useEffect(() => {
    Axios.get(`http://localhost:5000/partie/${idPlayer}`).then(({ data }) => {
      dispatch({ type: "FETCH_PLAYER", value: data[0] });
    });
  });

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
