import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  actualPage: 1,
  nextPage: 1,
  prevPage: 0,
  totalPages: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    initPagination: (state, action) => {
      state.totalPages = action.payload;
    },
    changePage: (state, action) => {
      if ("-" === action.payload) {
        state.prevPage = state.prevPage - 1;
        state.nextPage = state.nextPage + 1;
        state.actualPage = state.actualPage - 1;
      }
      if ("+" === action.payload) {
        state.nextPage = state.nextPage - 1;
        state.prevPage = state.prevPage + 1;
        state.actualPage = state.actualPage + 1;
      }
    },
  },
});

export default paginationSlice.reducer;
export const { initPagination, changePage } = paginationSlice.actions;
