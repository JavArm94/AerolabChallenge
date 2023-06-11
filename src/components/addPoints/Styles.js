import styled, { keyframes } from "styled-components"
import { DefaultBtn } from "../../styles/Button"
import { ScreenMedia } from "../../styles/Variables"

const rotation = keyframes`
from{transform:rotate(0deg)}
to{transform:rotate(360deg)}`

export const BtnPoint = styled(DefaultBtn)`
  width: 100px;
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

  @media (max-width: ${ScreenMedia.lg}) {
    font-size: 0.9rem;
  }
`

export const Spinner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

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
    font-size: 1rem;
    text-align: center;
  }
`

export const SpinnerBtn = styled(Spinner)`
  div {
    height: 15px;
    width: 15px;
  }
`
