import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper, PaginationBtn } from "./Styles";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import Filter from "../filter";
import { changePage, initPagination } from "../../reducers/paginationReducer";

const PageControls = ({ filterOn }) => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.products);
  const itemsPerPage = 16;
  const numberOfPages = Math.ceil(
    productsState.dataProducts.length / itemsPerPage
  );

  const paginationReducer = useSelector((state) => state.pagination);

  useEffect(() => {
    dispatch(initPagination(numberOfPages));
  }, []);

  if (filterOn) {
    return (
      <Wrapper filterOn={filterOn}>
        <span>
          {paginationReducer.actualPage * itemsPerPage - (itemsPerPage - 1)}-
          {paginationReducer.actualPage * itemsPerPage}
        </span>
        <Filter></Filter>
        <PaginationBtn
          show={paginationReducer.prevPage}
          onClick={() => dispatch(changePage("-"))}
        >
          <img src={arrowLeft} alt="" />
        </PaginationBtn>
        <PaginationBtn
          show={paginationReducer.nextPage}
          onClick={() => dispatch(changePage("+"))}
        >
          <img src={arrowRight} alt="" />
        </PaginationBtn>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper filterOn={filterOn}>
        <span>
          {paginationReducer.actualPage * itemsPerPage - 15}-
          {paginationReducer.actualPage * itemsPerPage}
        </span>
        <PaginationBtn
          show={paginationReducer.prevPage}
          onClick={() => dispatch(changePage("-"))}
        >
          <img src={arrowLeft} alt="" />
        </PaginationBtn>
        <PaginationBtn
          show={paginationReducer.nextPage}
          onClick={() => dispatch(changePage("+"))}
        >
          <img src={arrowRight} alt="" />
        </PaginationBtn>
      </Wrapper>
    );
  }
};

export default PageControls;
