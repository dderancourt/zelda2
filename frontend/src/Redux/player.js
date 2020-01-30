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
        case "RIGHT":
          newState.player.position.x += 1;
      }
    default:
      return initialStatePlayer;
  }
};
