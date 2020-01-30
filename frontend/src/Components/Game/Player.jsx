import React, { useEffect } from "react";
import "./Style/Player.scss";
import { useSelector, useDispatch } from "react-redux";
import canMove from "./player_actions";

export default function Player() {
  const assetHeight = 32;
  const assetWidth = 32;
  let x = useSelector(state => state.player.position.x);
  let y = useSelector(state => state.player.position.y);
  let asset = useSelector(state => state.player.asset);
  let mapArray = useSelector(state => state.metaData.mapArray);
  let transition = useSelector(state => state.player.transition);
  const dispatch = useDispatch();

  function makeMove(event) {
    let newKey = event.key;
    switch (newKey) {
      case "ArrowLeft":
        x -= 1;
        canMove(x, y, mapArray);
        return "LEFT";
      case "ArrowUp":
        y -= 1;
        canMove(x, y, mapArray);
        return "UP";
      case "ArrowRight":
        x += 1;
        canMove(x, y, mapArray);
        return "RIGHT";
      case "ArrowDown":
        y += 1;
        canMove(x, y, mapArray);
        return "DOWN";
      default:
        return "none";
    }
  }

  useEffect(
    (window.onkeydown = event => {
      if (!mapArray.length) return;
      dispatch({ type: "MOVE", value: makeMove(event) });
    }),
    []
  );

  return (
    <div
      className="player"
      style={{
        top: `${y * assetHeight}px`,
        left: `${x * assetWidth}px`,
        transition: `${transition}s`
      }}
    >
      <img src={asset} alt={"Player"} />
    </div>
  );
}
