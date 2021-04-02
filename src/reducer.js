export const initialState = {
  // user:
  //   "BQDb_5kXgNXdGOeXEEKmOVwHEW428s6x89vBuVDxSsc3rSroGn06aA-xl387HfYiqCN10EeqqCIWKen6HMwuCLMGWRUYKmbJmsrfPHipS6XDa6oLp9xx68SrjdLNl4uNU8tTJyCt1aKQnICyMPIWBiVfxjqHguv1aX-nvMSUZCe9NWbOshpg",
  user: null,
  // TODO: remove it

  token: null,
  playlists: [],
  isPlaying: false,
  item: null,
  currentlyPlayingTrack: null,
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
    default:
      return state;
  }
};

export default reducer;
