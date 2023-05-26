import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingRedeem: false,
  errorRedeem: false,
  redeemStatus: "",
};

const redeemSlice = createSlice({
  name: "redeem",
  initialState,
  reducers: {
    redeemBegin: (state, action) => {
      state.loadingRedeem = true;
      state.errorRedeem = false;
      state.redeemStatus = action.payload;
    },
    redeemSuccess: (state, action) => {
      state.loadingRedeem = false;
      state.errorRedeem = false;
      state.redeemStatus = action.payload;
    },
    redeemError: (state) => {
      state.loadingRedeem = false;
      state.errorRedeem = true;
      state.redeemStatus = "error";
    },
  },
});

export default redeemSlice.reducer;
export const { redeemBegin, redeemError, redeemSuccess } = redeemSlice.actions;
