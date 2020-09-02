import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import location from "./location";
import profile from "./profile";
import reviews from "./reviews"

export default combineReducers({
  alert,
  auth,
  location,
  profile,
  reviews
});
