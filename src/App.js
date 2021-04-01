import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Row from "./Components/Row";
import Login from "./screens/Login";
import { getAccessTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Sidebar from "./Components/Sidebar";
import { useDataLayerValue } from "./DataLayer";
import Footer from "./Components/Footer";

const spotifyApi = new SpotifyWebApi();

function App() {
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getAccessTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      spotifyApi.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
    }
    spotifyApi
      .getMe()
      .then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      })
      .catch((error) => console.log(error));

    spotifyApi
      .getUserPlaylists()
      .then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      })
      .catch((error) => {
        console.log("error in fetching playlists");
      });
  }, []);

  // console.log("token :", token, user);
  console.log(playlists);
  return (
    <div className="app">
      {user ? (
        <>
          <Header />
          <Sidebar />
          <Row />
          <Row />
          <Row />
          <Footer />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
