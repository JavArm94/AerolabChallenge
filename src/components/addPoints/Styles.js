import styled, { keyframes } from "styled-components";
import { DefaultBtn } from "../../styles/Button";
const rotation = keyframes`
from{transform:rotate(0deg)}
to{transform:rotate(360deg)}`;

export const BtnPoint = styled(DefaultBtn)`
  font-weight: bolder;

  img {
    padding-top: 2px;
    transition: transform 0.2s ease;
  }

  &:hover {
    img {
      transform: translateY(-2px);
    }
  }
`;

export const Spinner = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    width: 150px;
    border: 1px solid ${(p) => p.theme.primaryColor};
    border-radius: 50%;
    border-top: none;
    border-right: none;
    animation: ${rotation} 1s linear infinite;
    position: relative;
  }

  h1 {
    font-size: 0.8rem;
    text-align: center;
  }
`;