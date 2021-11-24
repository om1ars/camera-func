import reducers from "./reducers";

const { configureStore } = require("@reduxjs/toolkit");



export const store = configureStore({
    reducer: reducers
})