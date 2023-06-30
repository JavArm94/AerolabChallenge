import React, { useEffect, useState } from "react";
import { FilterBtn, Wrapper } from "./Styles";
import { textBtnFilter } from "../../styles/Variables";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../reducers/productReducer";

const Filter = () => {
  const [filter, setFilter] = useState("Most recent");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterProducts(filter));
  }, [dispatch, filter]);

  return (
    <Wrapper>
      {textBtnFilter.map((text) => {
        return (
          <FilterBtn
            key={text}
            active={text.includes(filter)}
            onClick={() => setFilter(filter && text)}
          >
            {text}
          </FilterBtn>
        );
      })}
    </Wrapper>
  );
};

export default Filter;
