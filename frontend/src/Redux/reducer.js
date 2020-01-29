import initialState from "../Store/store";

const reducer = (state = initialState, action) => {
  const newState = state;
  switch (action) {
    case "IS_LOGGED":
      newState.is_logged = true;
    case "LOAD_MAP":
      newState.map = action.value;
  }
};

export default reducer;
