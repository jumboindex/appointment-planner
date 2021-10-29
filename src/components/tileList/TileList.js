import React from "react";
import { Tile } from '../../components/tile/Tile'

export const TileList = (props) => {
  const arr = props.data

  return (
    <div>
      
        { arr.map((object, index) => <Tile key={index} object={object} />)}
      
    </div>
  );
};
