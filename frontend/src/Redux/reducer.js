import initialState from "./store";

const reducer = (state = initialState, action) => {
  const newState = state;
  switch (action.type) {
    case "MOOVE_PLAYER":
      switch (action.value) {
        case "LEFT":
          newState.player.position.x -= 1;
          return newState;
        case "UP":
          newState.player.position.y -= 1;
          return newState;
        case "RIGHT":
          newState.player.position.x += 1;
          return newState;
        case "DOWN":
          newState.player.position.y += 1;
          return newState;

        default:
          return initialState;
      }
    case "IS_LOGGED":
      newState.metaData.is_logged = true;
      return newState;

    case "LOAD_MAP":
      newState.metaData.mapArray = action.value;
      return newState;

    default:
      return initialState;
  }
};

export default reducer;
