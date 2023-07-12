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
import { useDataLayerValue } from "../DataLayer";

const Sidebar = () => {
  const [{ playlists }] = useDataLayerValue();
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
          <li className="nav-button">
            <Add /> Create playlist
          </li>
          <li className="nav-button">
            <Favorite /> Liked songs
          </li>
        </ul>
      </div>
      <br />

      <ul className="playlists">
        {playlists?.items?.map((playlist) => (
          <li className="sidebar__playlist" key={playlist.id}>
            {playlist.name}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
