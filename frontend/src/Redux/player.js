import initialStatePlayer from "../Store/meta";

const reducer = (state = initialStatePlayer, action) => {
  const newState = state;
  switch (action) {
    case "MOOVE_PLAYER":
      switch (action.value) {
        case "RIGHT":
          newState.player.position.x += 1;
      }
  }
};

export default reducer;
