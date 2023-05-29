import React, { useEffect } from "react";
import Card from "../card";
import { Wrapper } from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsBegin,
  fetchProductsSuccess,
  fetchProductsError,
} from "../../reducers/productReducer";
import axios from "axios";

const Products = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.products);
  const paginationState = useSelector((state) => state.pagination);

  useEffect(() => {
    const fetchProductsData = async () => {
      if (
        productsState.loadingProducts ||
        !productsState.sortedProducts.length > 0
      ) {
        dispatch(fetchProductsBegin());
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_ENDPOINT}products`,
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
              },
            }
          );
          dispatch(fetchProductsSuccess(response.data));
        } catch {
          dispatch(fetchProductsError());
        }
      }
    };
    fetchProductsData();
  }, [dispatch, productsState]);

  if (
    productsState.loadingProducts ||
    !productsState.sortedProducts.length > 0
  ) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      {productsState.sortedProducts[paginationState.actualPage - 1].items.map(
        (item) => {
          return <Card key={item._id} {...item}></Card>;
        }
      )}
    </Wrapper>
  );
};

export default Products;
