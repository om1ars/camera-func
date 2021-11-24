import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    user: null,
    selected
  },
  reducers: {},
});

export const {} = appSlice.actions;
export const selectApp = (state) => state.app.value;
export default appSlice.reducer;
