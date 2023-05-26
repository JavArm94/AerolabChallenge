import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingHistory: false,
  errorHistory: false,
  dataHistory: {},
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    fetchHistoryBegin: (state) => {
      return {
        ...state,
        loadingHistory: true,
        errorHistory: false,
      };
    },
    fetchHistorySuccess: (state, action) => {
      return {
        ...state,
        loadingHistory: false,
        errorHistory: false,
        dataHistory: action.payload,
      };
    },
    fetchHistoryError: (state) => {
      return {
        ...state,
        loadingHistory: false,
        errorHistory: true,
      };
    },
  },
});

export default historySlice.reducer;
export const { fetchHistoryBegin, fetchHistoryError, fetchHistorySuccess } =
  historySlice.actions;
