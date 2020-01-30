const initialStateMeta = {
  is_logged: false,
  map: [[]]
};

export default (state = initialStateMeta, action) => {
  const newState = state;
  switch (action) {
    case "IS_LOGGED":
      newState.is_logged = true;
      break;
    case "LOAD_MAP":
      newState.map = action.value;
      break;
    default:
      return initialStateMeta;
  }
};
