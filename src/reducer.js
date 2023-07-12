export const initialState = {
  user: null,
  token: null,
  playlists: [],
  isPlaying: false,
  item: null,
  currentlyPlayingTrack: null,
  reccomedation: [],
  topArtists: null,
  topArtistsAlbums : null,
};

const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "FETCH_CURRENT_TRACK":
      return {
        ...state,
        currentlyPlayingTrack: action.currentlyPlayingTrack,
      };
    case "SET_TOP_TRACKS":
      return {
        ...state,
        topTracks: action.topTracks,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        topArtists: action.topArtists,
      };
    case "SET_TOP_ARTISTS_ALBUMS":
      return {
        ...state,
        topArtistsAlbums: action.topArtistsAlbums,
      };
    default:
      return state;
  }
};

export default reducer;
