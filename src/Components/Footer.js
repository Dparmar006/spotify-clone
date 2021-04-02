import { Slider } from "@material-ui/core";
import {
  Devices,
  Favorite,
  Mic,
  PlayArrowRounded,
  PlayCircleFilledOutlined,
  QueueMusic,
  RemoveFromQueue,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeDown,
} from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDataLayerValue } from "../DataLayer";
import "./Footer.css";
const Footer = () => {
  const [{ currentlyPlayingTrack }] = useDataLayerValue();
  return (
    <footer className="footer">
      <div className="footer__left">
        <img
          src={
            currentlyPlayingTrack?.item?.album?.images[0]?.url ||
            "./assets/images/tomato-face.png"
          }
          alt="song-art"
          className="footer__songart"
        />
        <div className="footer__songinfo">
          <p className="footer__songname">
            {currentlyPlayingTrack?.item?.name || "Dixit's Life"}
          </p>
          {currentlyPlayingTrack?.item?.artists.map((artist) => (
            <p className="footer__artistname">{artist.name}</p>
          )) || "@pistanthrobian"}
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
            <PlayCircleFilledOutlined fontSize="large" />
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
          <progress id="songprogress" max="100" value="40" />
          <p className="footer__songendtime">5:12</p>
        </div> */}
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
