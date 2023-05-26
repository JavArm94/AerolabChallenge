import { configureStore } from "@reduxjs/toolkit";
import historyReducer from "./reducers/historyReducer";
import userReducer from "./reducers/userReducer";
import redeemReducer from "./reducers/redeemReducer";
import productReducer from "./reducers/productReducer";
import paginationReducer from "./reducers/paginationReducer";
import pointsReducer from "./reducers/pointsReducer";

const store = configureStore({
  reducer: {
    history: historyReducer,
    user: userReducer,
    redeem: redeemReducer,
    products: productReducer,
    pagination: paginationReducer,
    points: pointsReducer,
  },
});

export default store;
