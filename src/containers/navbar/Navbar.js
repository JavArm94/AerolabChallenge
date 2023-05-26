import React from "react";
import PanelPoints from "../../components/panelPoints";
import logo from "../../assets/images/aerolab-logo.svg";
import { Wrapper } from "./Styles";
import UserInfo from "../../components/userInfo/UserInfo";

const Navbar = () => {
  return (
    <Wrapper>
      <img src={logo} alt="" />
      <PanelPoints></PanelPoints>
      <UserInfo></UserInfo>
    </Wrapper>
  );
};

export default Navbar;
