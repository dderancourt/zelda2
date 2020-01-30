import React, { useEffect, useState } from "react";
import "./Style/Map.scss";
import Axios from "axios";
import { tileNames } from "../../tileNames";
import { useDispatch } from "react-redux";

export default function Map() {
  const [mapArray, setMap] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    Axios.get(`http://localhost:5000/map/1`).then(({ data }) => {
      setMap(data);
    });
  }, []);

  function randomGrass() {
    const highGrassPercentage = 9;
    const flowersPercentage = 3;
    let randomNum = Math.floor(Math.random() * 100);
    if (randomNum <= highGrassPercentage && randomNum > flowersPercentage) {
      return "highGrass";
    }
    if (randomNum <= flowersPercentage) {
      return "flowers";
    } else {
      return "grass";
    }
  }

  return (
    <div className="map">
      {mapArray ? (
        (dispatch({ type: "MAP_LOADED" }),
        mapArray.map((row, rowIndex) =>
          row.map((tile, tileIndex) => {
            return (
              <div
                key={[rowIndex, tileIndex]}
                style={{
                  background: `url(Game/tiles/${
                    tile === "v001" ? randomGrass() : tileNames[tile]
                  }.png)`
                }}
              ></div>
            );
          })
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
