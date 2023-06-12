import styled from "styled-components"
import { ScreenMedia } from "../../styles/Variables"

export const Panel = styled.div`
  display: ${(p) => (p.mobile ? "none" : "flex")};
  justify-content: center;
  flex-direction: row;
  flex-grow: 1;
  text-align: center;
  gap: 10px;

  @media (max-width: ${ScreenMedia.sm}) {
    display: ${(p) => (p.mobile ? "flex" : "none")};
    position: ${(p) => (p.mobile ? "fixed" : "none")};
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: #0ad4fa;
  }
`
