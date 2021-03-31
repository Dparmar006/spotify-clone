import {
  Add,
  Favorite,
  HomeOutlined,
  LibraryBooksOutlined,
  SearchOutlined,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import "./Header.css";

const Sidebar = () => {
  return (
    <div className="sidebar" id="sidebar">
      <div className="top">
        <div className="logo">
          {/* <img
            src="./assets/images/Spotify_Logo_RGB_White.png"
            alt="logo-spotify"
          /> */}
        </div>
        <ul className="nav-links">
          <li className="nav-link">
            <HomeOutlined /> Home
          </li>
          <li className="nav-link">
            <SearchOutlined /> Search
          </li>
          <li className="nav-link">
            <LibraryBooksOutlined /> Library
          </li>
        </ul>
        <div className="nav-buttons">
          <button className="nav-button">
            <Add /> Create playlist
          </button>
          <button className="nav-button">
            <Favorite /> Liked songs
          </button>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
