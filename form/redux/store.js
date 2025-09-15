// src/form/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import languageReducer from "./languageSlice";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    language: languageReducer,
  },
});

export default store;
