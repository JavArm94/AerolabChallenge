import { Link } from "react-router-dom"
import styled from "styled-components"
import { Vars, ScreenMedia } from "../../styles/Variables"
import { LoadedAnimation } from "../../styles/LoadedAnimation"

export const Wrapper = styled(LoadedAnimation)`
  display: ${(p) => (p.isLoading ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 20px 0;

  @media (max-width: ${ScreenMedia.lg}) {
    font-size: 0.9rem;
  }
`

export const StyledLink = styled(Link)`
  font-size: 1.2rem;
  margin-left: 10px;
  background-color: ${Vars.btnBgActive};
  color: white;
  text-decoration: none;
  padding: 15px;
  border-radius: 30px;
  max-width: 150px;
  text-align: center;
  font-weight: bold;

  img {
    height: 20px;
    display: none;
  }

  @media (max-width: ${ScreenMedia.lg}) {
    font-size: 0.8rem;
    margin-left: 8px;
    max-width: 100px;
  }

  @media (max-width: ${ScreenMedia.md}) {
    align-items: center;
    justify-content: center;
    align-content: center;
    padding: 10px;
    margin-right: auto;

    span {
      display: none;
    }
    img {
      display: initial;
      margin-right: 2px;
      filter: brightness(0) invert(1);
    }
  }
`
