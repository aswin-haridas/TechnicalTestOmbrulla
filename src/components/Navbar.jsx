import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const NavItem = styled.div`
  font-size: 14px;
  color: rgb(138, 138, 138);
  padding: 10px;
`;

const NavItemSelected = styled(NavItem)`
  border-bottom: 2px solid rgb(121, 172, 255);
  color: rgb(121, 172, 255);
`;

const Navbar = () => (
  <NavContainer>
    <NavItem>Operation</NavItem>
    <NavItemSelected>Sustainabilty</NavItemSelected>
    <NavItem>AI Insights</NavItem>
    <NavItem>My Custom Dashboard</NavItem>
  </NavContainer>
);

export default Navbar;