const initialStateMeta = {
  is_logged: false,
  mapArray: [],
  mapLoaded: false
};

export default (state = initialStateMeta, action) => {
  const newState = state;
  switch (action) {
    case "IS_LOGGED":
      newState.is_logged = true;
      break;
    case "LOAD_MAP":
      newState.mapArray = action.value;
      break;
    case "MAP_LOADED":
      newState.mapLoaded = true;
    default:
      return initialStateMeta;
  }
};
