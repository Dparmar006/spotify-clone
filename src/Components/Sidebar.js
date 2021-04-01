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
    <div className="sidebar sidebar-closed" id="sidebar">
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
        <ul className="nav-buttons">
          <li className="nav-link">
            <Add /> Create playlist
          </li>
          <li className="nav-link">
            <Favorite /> Liked songs
          </li>
        </ul>
      </div>
      <br />
      <p className="sidebar__title">PLAYLISTS</p>
      <hr />
      <ul className="playlists"></ul>
    </div>
  );
};
export default Sidebar;
