import React, { useEffect } from "react";
import coin from "../../assets/icons/coin.svg";
import { UserStyle } from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserBegin,
  fetchUserSuccess,
  fetchUserError,
} from "../../reducers/userReducer";
import axios from "axios";

const UserInfo = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const redeemState = useSelector((state) => state.redeem);
  const pointsState = useSelector((state) => state.points);

  useEffect(() => {
    const fetchUserData = async () => {
      dispatch(fetchUserBegin());
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_ENDPOINT}user/me`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
          }
        );
        dispatch(fetchUserSuccess(response.data));
      } catch {
        dispatch(fetchUserError());
      }
    };

    fetchUserData();
  }, [dispatch, redeemState.redeemStatus, pointsState.statusTransaction]);

  return (
    <UserStyle>
      <span>{userState.dataUser.name || 0}</span>
      {userState.dataUser.points || "Nick"}
      <img src={coin} alt="" />
    </UserStyle>
  );
};

export default UserInfo;
