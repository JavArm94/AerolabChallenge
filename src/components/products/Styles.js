import styled from "styled-components"
import { ScreenMedia } from "../../styles/Variables"

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  column-gap: 30px;
  row-gap: 30px;

  @media (max-width: ${ScreenMedia.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${ScreenMedia.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${ScreenMedia.xs}) {
    grid-template-columns: 1fr;
  }
`
