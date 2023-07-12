import React from "react";

import "./Row.css";
import RowCard from "./RowCard";
const shortenDescription = (str) => {
  return str.length < 20 ? str : str.substr(0, 60) + " ...";
};
const Row = ({ rowTitle = "Your Playlists", array = null }) => {
  return (
    <div className="row">
      <h2 className="row__title">{rowTitle}</h2>
      <div className="row__container">
        {array?.items?.map((array) => (
          <RowCard
            key={array?.id}
            rowCardId={array?.uri}
            rowCardTitle={array?.name}
            rowCardImgUrl={array?.images[0]?.url}
            rowCardDescription={shortenDescription(array?.description || "")}
          />
        ))}
        {console.log(array)}
      </div>
    </div>
  );
};

export default Row;
