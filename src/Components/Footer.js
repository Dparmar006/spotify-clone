import { Slider } from "@material-ui/core";
import {
  Devices,
  Favorite,
  Mic,
  PlayArrowRounded,
  QueueMusic,
  RemoveFromQueue,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
  Speaker,
} from "@material-ui/icons";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <img
          src="https://mosaic.scdn.co/640/ab67616d0000b27303253a8ac4688460716f0474ab67616d0000b27350a744f0ef5c3e260d9de720ab67616d0000b2738d61a6d821636c7f855fb17eab67616d0000b273b25d5667f8f45b8b9c9ed1ef"
          alt="song-art"
          className="footer__songart"
        />
        <div className="footer__songinfo">
          <p className="footer__songname">Saudebazi</p>
          <p className="footer__artistname">Javed Ali</p>
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
            <PlayArrowRounded />
          </button>
          <button className="button">
            <SkipNext />
          </button>
          <button className="button">
            <Repeat />
          </button>
        </div>
        <div className="footer__progressbar">
          <div className="footer__songcurrenttime">2:42</div>
          <progress id="songprogress" max="100" value="40" />
          <div className="footer__songendtime">5:12</div>
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
          <Speaker />
        </button>
        <Slider />
      </div>
    </footer>
  );
};

export default Footer;
