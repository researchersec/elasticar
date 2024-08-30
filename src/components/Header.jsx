import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <h1>Electric Car Finder</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/compare">Compare</Link>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
