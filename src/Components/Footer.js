import { Slider } from "@material-ui/core";
import {
  Devices,
  Favorite,
  Mic,
  PauseCircleFilledOutlined,
  PlayCircleFilledOutlined,
  QueueMusic,
  RemoveFromQueue,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeDown,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import "./Footer.css";
const spotifyApi = new SpotifyWebApi();
const Footer = () => {
  const [currentlyPlayingSong, setCurrentlyPlayingSong] = useState();

  useEffect(() => {
    spotifyApi.getMyCurrentPlayingTrack().then((track) => {
      setCurrentlyPlayingSong(track);
      // console.log(track);
    });
  });

  return (
    <footer className="footer">
      <div className="footer__left">
        <img
          src={
            currentlyPlayingSong?.item?.album?.images[0]?.url ||
            "./assets/images/tomato-face.png"
          }
          alt="song-art"
          className="footer__songart"
        />
        <div className="footer__songinfo">
          <p className="footer__songname">
            {currentlyPlayingSong?.item?.name || "Play a song"}
          </p>
          {currentlyPlayingSong?.item?.artists.map((artist) => (
            <p className="footer__artistname">{artist.name}</p>
          )) || "in your phone"}
        </div>
        <div className="footer__left__buttons">
          <button className="button">
            <Favorite />
          </button>
          <button className="button">
            <RemoveFromQueue />
          </button>
        </div>
      </div>
      <div className="footer__center">
        <div className="footer__music-controls">
          <button className="button">
            <Shuffle />
          </button>

          <button className="button">
            <SkipPrevious />
          </button>
          <button className="button" id="play-button">
            {currentlyPlayingSong?.is_playing ? (
              <PauseCircleFilledOutlined />
            ) : (
              <PlayCircleFilledOutlined fontSize="large" />
            )}
          </button>
          <button className="button">
            <SkipNext />
          </button>
          <button className="button">
            <Repeat />
          </button>
        </div>
        {/* <div className="footer__progressbar">
          <p className="footer__songcurrenttime">2:42</p>
          <progress
            id="songprogress"
            max={1000000}
            value={
              (currentlyPlayingSong?.progress_ms *
                currentlyPlayingSong?.timestamp) /
              100
            }
          />
          <p className="footer__songendtime">
            {Math.floor((currentlyPlayingSong?.timestamp / 1000) % 60)}
            {Math.floor((currentlyPlayingSong?.timestamp / 1000 / 60) % 60)}
          </p>
        </div> */}

        {/* <LinearProgress
          variant="determinate"
          value={currentlyPlayingSong?.progress_ms / 1000}
          
        /> */}
      </div>
      <div className="footer__right">
        <button className="button">
          <Mic />
        </button>
        <button className="button">
          <QueueMusic />
        </button>
        <button className="button">
          <Devices />
        </button>
        <button className="button">
          <VolumeDown />
        </button>
        <Slider />
      </div>
    </footer>
  );
};

export default Footer;
