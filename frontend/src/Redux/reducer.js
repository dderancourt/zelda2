import initialState from "./store";

const reducer = (state = initialState, action) => {
  const newState = state;
  switch (action.type) {
    case "MOOVE_PLAYER":
      switch (action.value) {
        case "LEFT":
          newState.player.position.x -= 1;
          break;
        case "UP":
          newState.player.position.y -= 1;
          break;
        case "RIGHT":
          newState.player.position.x += 1;
          break;
        case "DOWN":
          newState.player.position.y += 1;
          break;

        default:
          return initialState;
      }
    case "IS_LOGGED":
      newState.metaData.is_logged = true;
      break;

    case "LOAD_MAP":
      newState.metaData.mapArray = action.value;
      break;

    default:
      return initialState;
  }
};

export default reducer;
