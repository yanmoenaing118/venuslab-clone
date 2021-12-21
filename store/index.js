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

export const { toggle } = menuSlice.actions;

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
  },
});

export default store;
