import styled from "styled-components";
import { DefaultBtn } from "../../styles/Button";
import { Vars } from "../../styles/Variables";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  gap: 20px;
`;

export const FilterBtn = styled(DefaultBtn)`
  padding: 0 20px;
  color: ${(p) => (p.active ? "white" : Vars.bgColorUser)};
  background-color: ${(p) => p.active && Vars.btnBgActive};
`;
