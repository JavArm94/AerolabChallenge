import React, { useEffect, useState } from "react";
import { FilterBtn, Wrapper } from "./Styles";
import { textBtn } from "../../styles/Variables";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../reducers/productReducer";
const Filter = () => {
  const [filter, setFilter] = useState("Most recent");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterProducts(filter));
  }, [filter]);

  return (
    <Wrapper>
      {textBtn.map((text) => {
        return (
          <FilterBtn
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
