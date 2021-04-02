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
          src="https://mosaic.scdn.co/640/ab67616d0000b27303253a8ac4688460716f0474ab67616d0000b27350a744f0ef5c3e260d9de720ab67616d0000b2738d61a6d821636c7f855fb17eab67616d0000b273b25d5667f8f45b8b9c9ed1ef"
          alt="song-art"
          className="footer__songart"
        />
        <div className="footer__songinfo">
          <p className="footer__songname">
            {currentlyPlayingTrack?.item?.name}
          </p>
          {currentlyPlayingTrack?.item?.artists.map((artist) => {
            <p className="footer__artistname">{artist.name}</p>;
          })}
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
          <button className="button">
            <PlayCircleFilledOutlined fontSize="large" />
          </button>
          <button className="button">
            <SkipNext />
          </button>
          <button className="button">
            <Repeat />
          </button>
        </div>
        <div className="footer__progressbar">
          <p className="footer__songcurrenttime">2:42</p>
          <progress id="songprogress" max="100" value="40" />
          <p className="footer__songendtime">5:12</p>
        </div>
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
