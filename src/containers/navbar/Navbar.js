import React from "react"
import PanelPoints from "../../components/panelPoints"
import logo from "../../assets/images/aerolab-logo.svg"
import { StyledLink, Wrapper } from "./Styles"
import UserInfo from "../../components/userInfo/UserInfo"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import homeIcon from "../../assets/icons/home.png"
import historyIcon from "../../assets/icons/history.png"

const Navbar = ({ isLoading }) => {
  const [swapLink, setSwapLink] = useState("")
  const location = useLocation()

  useEffect(() => {
    setSwapLink(location.pathname === "/" ? false : true)
  }, [])

  return (
    <Wrapper isLoading={isLoading}>
      <img src={logo} alt="" />

      <StyledLink
        to={swapLink ? "/" : "/history"}
        onClick={() => {
          setSwapLink(!swapLink)
        }}
      >
        <span> {swapLink ? "Home" : "Redeem history"}</span>

        <img src={swapLink ? homeIcon : historyIcon} alt="" />
      </StyledLink>
      <PanelPoints isMobile={false}></PanelPoints>
      <UserInfo></UserInfo>
    </Wrapper>
  )
}

export default Navbar
