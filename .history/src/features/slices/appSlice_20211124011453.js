import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
  name: sliceName,
  initialState: {
      value: 0
  },
  reducers: {},
});

export const {} = appSlice.actions;
export const selectApp = state => state.app.value
export default appSlice.reducer;
