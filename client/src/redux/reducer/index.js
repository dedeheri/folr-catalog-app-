import { combineReducers } from "redux";

// reducur
import style from "./style";

// dashboard
import dashboardProducts from "./dashboard/product/product";
import dashboardCategory from "./dashboard/category/category";
import dashboardFeedback from "./dashboard/feedback/feedback";
import dashboardGallery from "./dashboard/gallery/gallery";
import dashboardBanner from "./dashboard/banner/banner";
import auth from "../reducer/dashboard/auth/auth";

// main
import banner from "./main/banner/banner";
import category from "./main/category/category";
import product from "./main/product/product";

const reducers = combineReducers({
  auth,
  style,
  dashboardProducts,
  dashboardCategory,
  dashboardGallery,
  dashboardFeedback,
  dashboardBanner,
  banner,
  category,
  product,
});
export default reducers;
