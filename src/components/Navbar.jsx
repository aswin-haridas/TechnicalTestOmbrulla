import React, { useState } from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const NavItem = styled.div`
  font-size: 14px;
  color: rgb(138, 138, 138);
  padding: 10px;
  cursor: pointer;
`;

const NavItemSelected = styled(NavItem)`
  border-bottom: 2px solid rgb(121, 172, 255);
  color: rgb(121, 172, 255);
`;

const navItems = [
  { id: 1, text: "Operation" },
  { id: 2, text: "Sustainabilty" },
  { id: 3, text: "AI Insights" },
  { id: 4, text: "My Custom Dashboard" },
];

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState("Sustainabilty");

  return (
    <NavContainer>
      {navItems.map((item) =>
        item.text === selectedItem ? (
          <NavItemSelected
            key={item.id}
            onClick={() => setSelectedItem(item.text)}
          >
            {item.text}
          </NavItemSelected>
        ) : (
          <NavItem key={item.id} onClick={() => setSelectedItem(item.text)}>
            {item.text}
          </NavItem>
        )
      )}
    </NavContainer>
  );
};

export default Navbar;
