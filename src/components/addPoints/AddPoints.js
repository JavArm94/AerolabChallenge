import React from "react";
import { BtnPoint } from "./Styles";
import coin from "../../assets/icons/coin.svg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  transactionBegin,
  transactionSuccess,
  transactionError,
} from "../../reducers/pointsReducer";

const AddPoints = ({ amount }) => {
  const dispatch = useDispatch();
  const pointsState = useSelector((state) => state.points);

  const addPointsToUser = async (amount) => {
    dispatch(transactionBegin());
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_ENDPOINT}user/points`,
        { amount: amount },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      dispatch(transactionSuccess(response.data));
    } catch {
      dispatch(transactionError("Error transaction."));
    }
  };

  return (
    <BtnPoint
      onClick={
        pointsState.loadingTransaction ? null : () => addPointsToUser(amount)
      }
    >
      {amount}
      <img src={coin} alt="" />
    </BtnPoint>
  );
};

export default AddPoints;
