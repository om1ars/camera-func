import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cameraImage: null
};

const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
      setCameraImage(state, action) { 
          state.cameraImage = action.payload
      }
  },
});

export const {} = cameraSlice.actions;
export default cameraSlice.reducer;
