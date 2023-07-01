import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 30px;
  row-gap: 30px;
`;
