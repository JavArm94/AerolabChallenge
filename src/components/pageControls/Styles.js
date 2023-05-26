import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 20px 0;

  span {
    margin-right: ${(p) => !p.filterOn && "auto"};
    width: 50px;
  }
`;

export const PaginationBtn = styled.button`
  display: ${(p) => (p.show ? "initial" : "none")};

  border: none;
  padding-right: 0;
  line-height: inherit;
  color: inherit;
  cursor: pointer;
  background: transparent;
`;
