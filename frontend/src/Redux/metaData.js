import initialStateMeta from "../Store/meta";

const reducer = (state = initialStateMeta, action) => {
  const newState = state;
  switch (action) {
    case "IS_LOGGED":
      newState.is_logged = true;
    case "LOAD_MAP":
      newState.map = action.value;
  }
};

export default reducer;
