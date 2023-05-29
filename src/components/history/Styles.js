import styled from "styled-components";
import { Vars } from "../../styles/Variables";

export const HistorySection = styled.div`
  display: grid;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  background-color: #ffffff;
  margin: 10px 0px;
  border-radius: 20px;
  column-gap: 30px;
  color: #616161;

  img {
    max-height: 60px;
  }

  p {
    margin: 0;
  }
  span {
    color: ${Vars.btnColor};
  }
`;
