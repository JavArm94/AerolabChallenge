import React, { useState } from "react";
import {
  ProductDescription,
  ProductHover,
  Wrapper,
  RedeemBtn,
  ProductHoverAlt,
} from "./Styles";
import coin from "../../assets/icons/coin.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  redeemBegin,
  redeemError,
  redeemSuccess,
} from "../../reducers/redeemReducer";
import axios from "axios";
import { Spinner } from "../addPoints/Styles";

const Card = ({ cost, img, name, category, _id: id }) => {
  const dispatch = useDispatch();
  const redeemState = useSelector((state) => state.redeem);
  const userState = useSelector((state) => state.user);
  const [imageLoaded, setImageLoaded] = useState(false);

  const redeemProduct = async (id) => {
    dispatch(redeemBegin(id));
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_ENDPOINT}redeem`,
        { productId: id },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      dispatch(redeemSuccess(response.data));
    } catch {
      dispatch(redeemError());
    }
  };

  const imgUrl = img.url;

  if (redeemState.loadingRedeem && redeemState.redeemStatus === id) {
    return (
      <Wrapper>
        <Spinner>
          <div></div>
          <h1>Redeeming product...</h1>
        </Spinner>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {userState.dataUser.points >= cost ? (
        <ProductHover>
          <span>{cost}</span>
          <img src={coin} alt="" />
          <RedeemBtn
            onClick={redeemState.loadingRedeem ? null : () => redeemProduct(id)}
          >
            Redeem now
          </RedeemBtn>
        </ProductHover>
      ) : (
        <ProductHoverAlt>
          <p>
            You need {cost - userState.dataUser.points} points more to redeem
            this product.
          </p>
        </ProductHoverAlt>
      )}

      <ProductDescription imgLoad={imageLoaded}>
        <img src={imgUrl} alt="img" onLoad={() => setImageLoaded(true)} />
        {!imageLoaded && (
          <Spinner>
            <div></div>
          </Spinner>
        )}
        <hr />
        <h1>{category}</h1>
        <p>{name}</p>
      </ProductDescription>
    </Wrapper>
  );
};

export default Card;
