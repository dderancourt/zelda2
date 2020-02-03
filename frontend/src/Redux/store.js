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
    asset: `Game/link/linkFront.png`,
    transition: ""
  },
  character: {
    id: "",
    name: "",
    asset: "",
    HP: "",
    ATK: "",
    movespeed: "",
    weapon: ""
  }
};

export default initialState;
