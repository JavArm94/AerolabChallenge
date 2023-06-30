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
  background-color: ${Vars.backgroundCard};
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
    color: ${Vars.fontLightGray};
  }

  h1 {
    font-size: 1rem;
    font-weight: normal;
    color: ${Vars.fontLightGray};
  }

  h1,
  p {
    padding: 0;
    margin: 0;
  }

  p {
    color: ${Vars.fontDarkGray};
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

export const ProductHoverAlt = styled(ProductHover)`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.2rem;
  background-color: ${Vars.btnBgActiveAlt + "CC"};
  font-weight: bold;
  user-select: none;

  :hover {
    opacity: 1;
  }

  p {
    padding: 0px 20px;
  }
`;

export const RedeemBtn = styled(DefaultBtn)`
  grid-row: 2;
  grid-column-start: 1;
  grid-column-end: 3;
  margin-bottom: auto;
  padding: 0 40px;
  font-weight: bold;
  border: solid 2px white;
  background-color: white;

  :hover {
    color: ${Vars.btnBgActive};
  }
`;
