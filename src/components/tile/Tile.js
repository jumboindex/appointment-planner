import React from "react";

export const Tile = (props) => {
  const dataObj = props.object;
  const dataArr = Object.values(dataObj);
  return (
    <div className="tile-container">
      {dataArr.map((element, index) => <p key={index}>{element}</p>)}
    </div>
  );
};
