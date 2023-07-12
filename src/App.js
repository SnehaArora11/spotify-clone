import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Row from "./Components/Row";
import Login from "./screens/Login";
import { getAccessTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Sidebar from "./Components/Sidebar";
import { useDataLayerValue } from "./DataLayer";
import Footer from "./Components/Footer";
import CardGrid from "./Components/CardGrid";

const spotifyApi = new SpotifyWebApi();

function App() {
  const [
    { user, playlists, topArtists, topArtistsAlbums },
    dispatch,
  ] = useDataLayerValue();
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
      .catch((error) => console.log("error in getting user"));
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

    spotifyApi.getMyTopTracks({ limit: 6 }).then((topTracks) => {
      dispatch({
        type: "SET_TOP_TRACKS",
        topTracks: topTracks,
      });
    });

    spotifyApi.getMyTopArtists().then((topArtists) => {
      dispatch({
        type: "SET_TOP_ARTISTS",
        topArtists: topArtists,
      });
    });

    // spotifyApi
    //   .getArtistAlbums(topArtists?.items[Math.floor(Math.random() * 20)]?.id)
    //   .then((topArtistsAlbums) => {
    //     console.log(topArtistsAlbums);
    //     dispatch({
    //       type: "SET_TOP_ARTISTS_ALBUMS",
    //       topArtistsAlbums: topArtistsAlbums,
    //     });
    //   });

    spotifyApi.getArtistAlbums(
      spotifyApi
        .getMyTopArtists()
        .then((topArtists) => {
          return topArtists.items.map((artist) => {
            return artist.id;
          });
        })
        .then((topArtistsAlbums) => {
          dispatch({
            type: "SET_TOP_ARTISTS_ALBUMS",
            topArtistsAlbums: topArtistsAlbums,
          });
        })
    );
  }, []);

  return (
    <div className="app">
      {user ? (
        <>
          <Header />
          <Sidebar />
          <CardGrid />
          <Row
            array={playlists}
            rowTitle="Nice playlists yar, Can you share ?"
          />
          <Row array={topArtists} rowTitle="You like them all" />
          <Footer />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
