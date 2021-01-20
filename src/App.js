import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Row from "./Components/Row";
import Login from "./screens/Login";
import { getAccessTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getAccessTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify
        .getMe()
        .then((user) => console.log(user))
        .catch((error) => console.log(error));
    }
  }, []);
  console.log(token);
  return (
    <div className="app">
      {token ? (
        <>
          <Header />
          <Row />
          <Row />
          <Row />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
