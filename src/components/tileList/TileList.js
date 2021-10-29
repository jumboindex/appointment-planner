import React from "react";
import { Tile } from '../../components/tile/Tile'

export const TileList = (props) => {
  const arr = props.contacts

  return (
    <div>
      
        { arr.map((object, index) => <Tile key={index} contact={object} />)}
      
    </div>
  );
};
