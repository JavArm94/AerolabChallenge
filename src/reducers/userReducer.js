import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingUser: true,
  errorUser: false,
  dataUser: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserBegin: (state) => {
      state.loadingUser = true;
      state.errorUser = false;
    },
    fetchUserSuccess: (state, action) => {
      state.dataUser = action.payload;
      state.loadingUser = false;
      state.errorUser = false;
    },
    fetchUserError: (state) => {
      state.loadingUser = false;
      state.errorUser = true;
    },
  },
});

export default userSlice.reducer;
export const { fetchUserBegin, fetchUserError, fetchUserSuccess } =
  userSlice.actions;
