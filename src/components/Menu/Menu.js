import React from 'react';
import styled from 'styled-components';

import {Hamburger} from './Hamburger';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: "Raleway", sans-serif;
  box-shadow: 0 1px 1px 1px #000000;
  border-radius: 5px;
  border: 1px solid #a3622f;
  background-color: #6e3c15;
  padding: 7px 15px 7px 14px;
`;

const Logo = styled.div`
  text-shadow: 0 3px 0 #000000;
  color: #ffffff;
  font-size: 48px;
  font-weight: 900;
  text-transform: uppercase;
`;

const HamburgerWrapper = styled.div`
  margin-left: 15px;
`;

const MenuHidden = styled.div`

`

export const Menu = () => {
  return (
    <Wrapper>
      <Logo>SADRŽAJ</Logo>
      <HamburgerWrapper>
        <Hamburger/>
      </HamburgerWrapper>
      <MenuHidden>

      </MenuHidden>
    </Wrapper>
  );
};