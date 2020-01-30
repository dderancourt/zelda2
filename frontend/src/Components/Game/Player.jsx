import React, { useEffect } from "react";
import "./Style/Player.scss";
import { useSelector, useDispatch } from "react-redux";
import { canMove, makeMove } from "./player_actions";

export default function Player() {
  const assetHeight = 32;
  const assetWidth = 32;
  let x = useSelector(state => state.player.position.x);
  let y = useSelector(state => state.player.position.y);
  let asset = useSelector(state => state.player.asset);
  let mapArray = useSelector(state => state.metaData.mapArray);
  let transition = useSelector(state => state.player.transition);
  const dispatch = useDispatch();

  useEffect(
    (window.onkeydown = event => {
      if (!mapArray.length) return;
      if (!canMove(x, y, mapArray)) return;

      console.log(makeMove(event));
      dispatch({ type: makeMove(event) });
    }),
    []
  );

  return (
    <div
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
