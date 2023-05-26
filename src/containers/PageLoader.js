import styled from "styled-components";

export const PageLoader = styled.div`
  display: ${(p) => (p.isLoading ? "none" : "initial")};
  opacity: 0;
  transform: translateY(-50px);
  animation: fadeInFromTop 1s ease forwards;

  @keyframes fadeInFromTop {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
