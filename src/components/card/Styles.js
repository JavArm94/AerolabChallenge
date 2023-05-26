import styled from "styled-components";
import { Vars } from "../../styles/Variables";
import { DefaultBtn } from "../../styles/Button";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease;

  :hover {
    transform: translateY(-10px);
  }
`;

export const ProductDescription = styled.div`
  text-align: left;
  padding: 20px;

  img {
    display: ${(p) => (p.imgLoad ? "initial" : "none")};
    width: 100%;
  }

  hr {
    width: 100%;
    color: ${Vars.btnColor};
  }

  h1 {
    font-size: 1rem;
    font-weight: normal;
    color: ${Vars.btnColor};
  }

  h1,
  p {
    padding: 0;
    margin: 0;
  }

  p {
    color: #616161;
  }
`;

export const ProductHover = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: auto;
  column-gap: 4px;
  row-gap: 4px;
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${Vars.btnBgActive}90;
  opacity: 0;
  transition: opacity 0.3s ease; /* Transición suave */
  font-size: 1.7rem;
  color: white;

  :hover {
    opacity: 1;
  }

  img,
  span {
    margin-top: auto;
    grid-row: 1;
  }

  img {
    margin-bottom: -2px;
  }

  span {
    margin-left: auto;
  }
`;

export const RedeemBtn = styled(DefaultBtn)`
  grid-row: 2;
  grid-column-start: 1;
  grid-column-end: 3;
  margin-bottom: auto;
  padding: 0 40px;
`;
