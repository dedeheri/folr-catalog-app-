import { combineReducers } from "redux";

// reducur
import auth from "./auth";
import style from "./style";
import dashboard from "./dashboard";

const reducers = combineReducers({
  auth,
  style,
  dashboard,
});
export default reducers;
