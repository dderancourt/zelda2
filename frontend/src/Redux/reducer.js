import initialState from "./store";

const reducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "MOVE":
      switch (action.value) {
        case "LEFT":
          newState.player.position.x -= 1;
          newState.character.asset = "Game/link/linkLeft.png";
          return newState;
        case "UP":
          newState.player.position.y -= 1;
          newState.character.asset = "Game/link/linkBack.png";
          return newState;
        case "RIGHT":
          newState.player.position.x += 1;
          newState.character.asset = "Game/link/linkRight.png";
          return newState;
        case "DOWN":
          newState.player.position.y += 1;
          newState.character.asset = "Game/link/linkFront.png";
          return newState;

        default:
          return initialState;
      }

    case "LOAD_MAP":
      newState.metaData.mapArray = action.value;
      return newState;
    case "FETCH_CHARACTER":
      newState.character = action.value;
      return newState;
    case "NEXT_CHARACTER":
      if (
        newState.character.id === newState.metaData.numberOfChar ||
        !newState.metaData.isLogged
      ) {
        newState.character.id = 1;
        return newState;
      }
      return {
        ...newState,
        ...newState.character,
        id: (newState.character.id += 1)
      };
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
