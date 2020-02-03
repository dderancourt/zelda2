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
    case "SELECT_CHARACTER":
      console.log(action.value);
      newState.character = action.value;
      return newState;
    case "LOGGED":
      newState.metaData.isLogged = true;
      newState.character.id = action.value.user.userSChar;
      return newState;

    case "FETCH_PLAYER":
      newState.proflie = action.value;
      return newState;

    default:
      return initialState;
  }
};

export default reducer;
