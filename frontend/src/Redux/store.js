const initialState = {
  profile: {
    save: "",
    char: "",
    idPlayer: ""
  },
  metaData: {
    isLogged: false,
    mapArray: [],
    numberOfChar: 2
  },
  player: {
    position: {
      x: 3,
      y: 4
    },
    HP: 6
  },
  character: {
    id: "",
    name: "",
    asset: "Game/link/linkFront.png",
    HP: "",
    ATK: "",
    movespeed: 100,
    weapon: ""
  }
};

export default initialState;
