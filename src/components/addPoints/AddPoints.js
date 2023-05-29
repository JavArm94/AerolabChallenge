import React from "react";
import { BtnPoint, SpinnerBtn } from "./Styles";
import axios from "axios";
import coin from "../../assets/icons/coin.svg";
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
    dispatch(transactionBegin(amount));
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
      {pointsState.loadingTransaction &&
      pointsState.statusTransaction === amount ? (
        <SpinnerBtn>
          <div></div>
        </SpinnerBtn>
      ) : (
        <>
          {amount}
          <img src={coin} alt="" />
        </>
      )}
    </BtnPoint>
  );
};

export default AddPoints;
