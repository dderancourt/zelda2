const initialStatePlayer = {
  position: {
    x: "3",
    y: "4"
  },
  asset: {
    right: ""
  },
  transition: ""
};

export default (state = initialStatePlayer, action) => {
  const newState = state;
  switch (action) {
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

          break;
        default:
          return initialStatePlayer;
      }
    default:
      return initialStatePlayer;
  }
};
