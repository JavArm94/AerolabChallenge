import React from "react";
import PanelPoints from "../../components/panelPoints";
import logo from "../../assets/images/aerolab-logo.svg";
import { StyledLink, Wrapper } from "./Styles";
import UserInfo from "../../components/userInfo/UserInfo";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Navbar = ({ isLoading }) => {
  const [swapLink, setSwapLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    setSwapLink(location.pathname === "/" ? false : true);
  }, []);

  return (
    <Wrapper isLoading={isLoading}>
      <img src={logo} alt="" />
      <StyledLink
        to={swapLink ? "/" : "/history"}
        onClick={() => {
          setSwapLink(!swapLink);
        }}
      >
        {swapLink ? "Home" : "Redeem history"}
      </StyledLink>
      <PanelPoints></PanelPoints>
      <UserInfo></UserInfo>
    </Wrapper>
  );
};

export default Navbar;
