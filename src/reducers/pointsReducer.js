import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingTransaction: false,
  errorTransaction: false,
  statusTransaction: "",
};

const pointsReducer = createSlice({
  name: "points",
  initialState,
  reducers: {
    transactionBegin: (state, action) => {
      state.loadingTransaction = true;
      state.errorTransaction = false;
      state.statusTransaction = action.payload;
    },
    transactionSuccess: (state, action) => {
      state.loadingTransaction = false;
      state.errorTransaction = false;
      state.statusTransaction = action.payload;
    },
    transactionError: (state, action) => {
      state.loadingTransaction = false;
      state.errorTransaction = true;
      state.statusTransaction = action.payload;
    },
  },
});

export default pointsReducer.reducer;

export const { transactionBegin, transactionSuccess, transactionError } =
  pointsReducer.actions;
