import { createSlice } from "@reduxjs/toolkit";
import { paginateProducts } from "../utils/pagination";

const initialState = {
  loadingProducts: true,
  errorProducts: false,
  dataProducts: [],
  sortedProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsBegin: (state) => {
      state.loadingProducts = true;
      state.errorProducts = false;
    },
    fetchProductsSuccess: (state, action) => {
      state.dataProducts = action.payload;
      state.sortedProducts = paginateProducts(state.dataProducts);
      state.loadingProducts = false;
      state.errorProducts = false;
    },
    fetchProductsError: (state) => {
      state.loadingProducts = false;
      state.errorProducts = true;
    },
    filterProducts: (state, action) => {
      state.sortedProducts = [...state.dataProducts];
      if (action.payload === "Most recent") {
        state.sortedProducts = paginateProducts(state.sortedProducts);
      }

      if (action.payload === "Highest price") {
        state.sortedProducts.sort(function (a, b) {
          return b.cost - a.cost;
        });
        state.sortedProducts = paginateProducts(state.sortedProducts);
      }

      if (action.payload === "Lowest price") {
        state.sortedProducts.sort(function (a, b) {
          return a.cost - b.cost;
        });

        state.sortedProducts = paginateProducts(state.sortedProducts);
      }
    },
  },
});

export default productsSlice.reducer;
export const {
  fetchProductsBegin,
  fetchProductsError,
  fetchProductsSuccess,
  filterProducts,
} = productsSlice.actions;
