import React from "react"; 
import { Nav } from "./styles";
import { HeaderWrapper, Logo, NavLink } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>Weather App</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/history">History</NavLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
