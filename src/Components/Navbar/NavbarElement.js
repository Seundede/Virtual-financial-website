import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: black;
  height: 80px;
  margin-top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  position: sticky;
  z-index: 10;
  font-size: 1rem;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  z-index: 1;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
  color: #01bf71;
  font-size: 1.5rem;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-self: self-start;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: white;
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkS)`
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;

  &.active {
    border-bottom: 2px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  outline: none;
  padding: 10px 22px;
  text-decoration: none;
  font-size: 16px;
  border: none;
  cursor: pointer;
  color: black;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: black;
    color: #01bf71;
  }
`;
