import React from "react";
import { useDataLayerValue } from "../DataLayer";
import "./CardGrid.css";
const CardGrid = () => {
  const [{ topTracks }] = useDataLayerValue();
  return (
    <section className="stripcard-container">
      <h2 className="stripcard__title">
        You just obbsessed with these, aren't you ?
      </h2>
      <div className="stripcardgrid">
        {topTracks?.items?.map((track) => (
          <div className="stripcard">
            <img
              src={track.album.images[2].url}
              alt="stripcard"
              className="stripcard__img"
            />
            <div className="stripcard__info">
              <div className="stripcard__name">{track.name}</div>
              <div className="stripcard__artist">
                {track.album.artists.map((artist) => artist.name)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardGrid;
