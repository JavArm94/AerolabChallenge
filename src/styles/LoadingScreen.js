import styled from "styled-components";

export const LoadingScreen = styled.div`
  display: ${(p) => (p.isLoading ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100vh;
`;
