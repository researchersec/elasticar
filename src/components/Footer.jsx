import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 20px;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2024 Electric Car Finder. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;
