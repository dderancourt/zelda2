const initialState = {
  profile: {
    save: "",
    char: "",
    idPlayer: ""
  },
  metaData: {
    isLogged: false,
    mapArray: []
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
    asset: "",
    HP: "",
    ATK: "",
    movespeed: "",
    weapon: ""
  }
};

export default initialState;
