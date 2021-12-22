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
    headerHeight: 120,
  },

  reducers: {
    triggerLoad: (state) => {
      state.loaded = true;
    },
    setHeaderHeight: (state, { payload }) => {
      state.headerHeight = payload;
    },
  },
});

export const { toggle } = menuSlice.actions;

export const { triggerLoad, setHeaderHeight } = animationSlice.actions;

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    animation: animationSlice.reducer,
  },
});

export default store;
