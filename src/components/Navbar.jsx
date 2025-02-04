import React, { useState } from "react";
import styled from "styled-components";


const Navbar = () => {
  return (
    <NavContainer>
      <NavItem>Operation</NavItem>
      <NavItemSelected>Sustainabilty</NavItemSelected>
      <NavItem>AI Insights</NavItem>
      <NavItem>My Custom Dashboard</NavItem>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const NavItem = styled.div`
  font-size: 14px;
  color: rgb(138, 138, 138);
  padding: 10px;
`;
const NavItemSelected = styled.div`
  font-size: 14px;
  border-bottom: 2px solid rgb(121, 172, 255);
  color: rgb(121, 172, 255);
  padding: 10px;
`;
