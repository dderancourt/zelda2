import initialState from "./store";

const reducer = (state = initialState, action) => {
  const newState = state;
  switch (action.type) {
    case "MOVE":
      switch (action.value) {
        case "LEFT":
          newState.player.position.x -= 1;
          newState.player.asset = "Game/link/linkLeft.png";
          return newState;
        case "UP":
          newState.player.position.y -= 1;
          newState.player.asset = "Game/link/linkBack.png";
          return newState;
        case "RIGHT":
          newState.player.position.x += 1;
          newState.player.asset = "Game/link/linkRight.png";
          return newState;
        case "DOWN":
          newState.player.position.y += 1;
          newState.player.asset = "Game/link/linkFront.png";
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
