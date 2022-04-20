import { combineReducers } from "redux";

// reducur
import style from "./style";

// dashboard
import dashboardProducts from "./dashboard/product/product";
import dashboardCategory from "./dashboard/category/category";
import dashboardFeedback from "./dashboard/feedback/feedback";
import auth from "../reducer/dashboard/auth/auth";

const reducers = combineReducers({
  auth,
  style,
  dashboardProducts,
  dashboardCategory,
  dashboardFeedback,
});
export default reducers;
