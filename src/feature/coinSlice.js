import { createSlice } from "@reduxjs/toolkit";

const coinSlice = createSlice({
  name: "coins",
  initialState: {
    coins: [],
  },
  reducers: {
    addCoins: (state, action) => {
      state.coins = action.payload;
    },
  },
});

export const { addCoins } = coinSlice.actions;
export const getCoins = (state) => state.coins.coins;
export default coinSlice.reducer;
