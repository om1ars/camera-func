import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cameraImage: null,
};

const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    setCameraImage(state, action) {
      state.cameraImage = action.payload;
    },
    resetCameraImage(state, action) {
      state.cameraImage = null;
    },
  },
});

export const { setCameraImage, resetCameraImage } = cameraSlice.actions;
export const selectedCameraImage = (state) => state.cameraImage;
export default cameraSlice.reducer;
