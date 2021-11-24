import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cameraImage: null
};

const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {},
});

export const {} = cameraSlice.actions;
export default cameraSlice.reducer;
