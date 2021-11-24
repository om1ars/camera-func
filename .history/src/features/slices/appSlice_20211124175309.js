import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    user: null,
    selectedImage: null
  },
  reducers: {
    login:(state, action) {
      state.user = action.payload
    }, 
    logout(state, action) {
      state.user = action.payload
    }, 
    selectImage(state, action) {
      state.selectedImage = action.payload
    }
  },
});

export const {login, logout, selected} = appSlice.actions;
export const selectApp = (state) => state.app.value;
export default appSlice.reducer;
