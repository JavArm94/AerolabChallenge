import styled from "styled-components"
import { Vars } from "../../styles/Variables"
import { ScreenMedia } from "../../styles/Variables"

export const UserStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: ${Vars.btnBgColor};
  font-weight: bold;
  gap: 10px;
  padding-right: 10px;
  border-radius: 30px;

  span {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 20px;
    border-radius: 30px;
    background-color: ${Vars.bgColorUser};
  }

  img {
    margin-top: 4px;
  }

  @media (max-width: ${ScreenMedia.md}) {
  }
`
