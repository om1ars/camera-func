import { combineReducers } from "redux";
import appSlice from "./slices/appSlice";
import cameraSlice from "./slices/cameraSlice";
import userSlice from "./slices/userSlice";

export default combineReducers({
  user: userSlice,
  app: appSlice,
  cameraImage: cameraSlice
});
