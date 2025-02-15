import styled from "@emotion/styled";
import { NavLink as RouterNavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 85px;
  background: linear-gradient(0deg, rgba(18, 45, 77, 0.5), rgba(18, 45, 77, 0.5)),
              linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
  border-bottom: 1px solid #D2D2D2;
  backdrop-filter: blur(17.8px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const Logo = styled.h1`
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: white;
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled(RouterNavLink)`
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: white;
  text-decoration: none;
  padding: 5px 10px;

  &.active {
    font-weight: 700;
    border-bottom: 2px solid white;
  }

  &:hover {
    opacity: 0.8;
  }
`;
