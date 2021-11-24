import { combineReducers } from "redux";
import appSlice from "./slices/appSlice";
import userSlice from "./slices/userSlice";

export default combineReducers({
  user: userSlice,
  app: appSlice
});
