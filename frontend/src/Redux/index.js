import { combineReducers } from "redux";

import metaData from "./metaData";
import player from "./player";

export default combineReducers({
  metaData,
  player
});
