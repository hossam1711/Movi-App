// src/form/redux/languageSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = { language: "en" };

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    toggleLanguage: state => {
      state.language = state.language === "en" ? "ar" : "en";
    }
  }
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
