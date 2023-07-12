import { PlayArrowRounded } from "@material-ui/icons";
import React from "react";
import "./InfoScreen.css";
import Header from "../Components/Header";
import theme from "../theme";
import { useParams } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "../DataLayer";
const spotifyApi = new SpotifyWebApi();
const InfoScreen = () => {
  const { id } = useParams();
  const { token } = useDataLayerValue();
  spotifyApi.setAccessToken(token);
  console.log(token);
  spotifyApi
    .getPlaylist(id)
    .then((playlist) => console.log(playlist, "INFO SCREEN"))
    .catch((err) => console.log(err));
  return (
    <section className="infoscreenpage">
      <Header />
      <div className="infoscreen">
        <div
          className="infoscreen__top"
          style={{ backgroundImage: "url('assets/images/blood-girl.jpg')" }}
        >
          <h1 className="infoscreen__title">Similarities 100 ♥</h1>
          <p className="infoscreen__description">
            Ullamco velit Lorem anim eiusmod dolore velit officia...
          </p>
        </div>

        <div className="infoscreen__playbutton">
          <button
            className="playbutton icon-button"
            style={{ backgroundColor: `${theme.spotifyGreen}` }}
          >
            <PlayArrowRounded />
          </button>
        </div>

        <div className="infoscreen__songlist">
          <table className="songlist__table">
            <tr className="songlist__tile">
              <th>#</th>
              <th>Title</th>
              <th>Aritst name</th>
              <th>Duration</th>
              {/* <th>Added</th> */}
            </tr>
            <tr>
              <td>1.</td>
              <td>The night we met</td>
              <td>Lord huron</td>
              <td>4:30</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>The night we met</td>
              <td>Lord huron</td>
              <td>4:30</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>The night we met</td>
              <td>Lord huron</td>
              <td>4:30</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>The night we met</td>
              <td>Lord huron</td>
              <td>4:30</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>The night we met</td>
              <td>Lord huron</td>
              <td>4:30</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>The night we met</td>
              <td>Lord huron</td>
              <td>4:30</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>The night we met</td>
              <td>Lord huron</td>
              <td>4:30</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default InfoScreen;
