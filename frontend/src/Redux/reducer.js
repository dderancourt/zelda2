import initialState from "./store";

const reducer = (state = initialState, action) => {
  const newState = state;
  switch (action.type) {
    case "MOOVE_PLAYER":
      switch (action.value) {
        case "LEFT":
          newState.player.position.x -= 1;
        case "UP":
          newState.player.position.y -= 1;
        case "RIGHT":
          newState.player.position.x += 1;
        case "DOWN":
          newState.player.position.y += 1;

        default:
          return initialState;
      }
    case "IS_LOGGED":
      newState.metaData.is_logged = true;

    case "LOAD_MAP":
      newState.metaData.mapArray = action.value;

    default:
      return initialState;
  }
};

export default reducer;
