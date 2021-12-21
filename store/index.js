import { createSlice, configureStore } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    open: false,
  },

  reducers: {
    toggle: (state) => {
      state.open = !state.open;
    },
  },
});

const animationSlice = createSlice({
  name: "animation",
  initialState: {
    loaded: false,
  },

  reducers: {
    triggerLoad: (state) => {
      state.loaded = true;
    },
  },
});

export const { toggle } = menuSlice.actions;

export const { triggerLoad } = animationSlice.actions;

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    animation: animationSlice.reducer,
  },
});

export default store;
