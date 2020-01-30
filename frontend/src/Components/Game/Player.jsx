import React, { useEffect, useState } from "react";
import "./Style/Player.scss";
import { useSelector, useDispatch } from "react-redux";
import canMove from "./player_actions";

export default function Player() {
  const [clockCanMove, setClockCanMove] = useState(true);
  const assetHeight = 32;
  const assetWidth = 32;
  let moveSpeed = useSelector(state => state.character.moovespeed);
  let x = useSelector(state => state.player.position.x);
  let y = useSelector(state => state.player.position.y);
  let asset = useSelector(state => state.player.asset);
  let mapArray = useSelector(state => state.metaData.mapArray);
  let transition = useSelector(state => state.player.transition);
  const dispatch = useDispatch();

  function move(event) {
    let newKey = event.key;
    switch (newKey) {
      case "ArrowLeft":
        if (canMove(x - 1, y, mapArray))
          dispatch({ type: "MOVE", value: "LEFT" });
        break;
      case "ArrowUp":
        if (canMove(x, y - 1, mapArray))
          dispatch({ type: "MOVE", value: "UP" });
        break;
      case "ArrowRight":
        if (canMove(x + 1, y, mapArray))
          dispatch({ type: "MOVE", value: "RIGHT" });
        break;
      case "ArrowDown":
        if (canMove(x, y + 1, mapArray))
          dispatch({ type: "MOVE", value: "DOWN" });
        break;
      default:
        return "none";
    }
  }

  useEffect(
    (window.onkeydown = event => {
      if (!mapArray.length) return;
      if (clockCanMove) {
        setClockCanMove(false);
        setTimeout(() => {
          setClockCanMove(true);
        }, moveSpeed);
        move(event);
      }
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
