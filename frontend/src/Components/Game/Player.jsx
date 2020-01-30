import React from "react";
import "./Style/Player.scss";
import { useSelector, useDispatch } from "react-redux";

export default function Player() {
  const assetHeight = 32;
  const assetWidth = 32;
  let x = useSelector(state => state.player.postition.x);
  let y = useSelector(state => state.player.postition.y);
  let transition = useSelector(state => state.player.asset);

  return (
    <div
      className={attackClass}
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
