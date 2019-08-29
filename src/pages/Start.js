import React from 'react';
import styled, {css} from 'styled-components';
import {Menu} from '../components/Menu/Menu';
import {breakpoints} from '../mixins/breakpoints';

import bgImage from '../assets/img/backgrounds/startsreen.jpg';
import bgImageDesctop from '../assets/img/backgrounds/startscreen-desctop.jpg';

const AllSpace = css`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Raleway,serif;
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BgContainer = styled.div`
    ${AllSpace};
    z-index: 0;
`;

const Bg = styled.div`
  background: url(${bgImage});
   @media ${breakpoints.tablet} {
    background: url(${bgImageDesctop}) 50% 0%;
  }
  background-size: cover;
  ${AllSpace};
  z-index: 1;
  &:before {
    content: '';
    ${AllSpace};
    z-index: 2;
    background-color: #422400;
    opacity: 0.59;
    }
 
`;

const Title = styled.div`
  text-shadow: 0 4px 0 #000000;
  color: #ffffff;
  font-size: 108px;
  font-weight: 900;
`;

const Subtitle = styled.div`
  text-shadow: 0 4px 0 #000000;
  color: #ffffff;
  font-size: 44px;
  font-weight: 700;
`;

const Button = styled.button`
  position: relative;
  margin-top: 60px;
  background: #FFF;
  width: 334px;
  height: 153px;
  border-radius: 6px;
  border: none;
  outline: none;
  color: black;
  font-size: 60px;
  span {
    display:block;
  }
`;

const MenuWrapper = styled.div`
  position: absolute;
  top: 2vh;
  right: 3vw;
  z-index: 3;
`;

export const Start = () => {

  return (
    <Wrapper>
      <MenuWrapper>
        <Menu/>
      </MenuWrapper>
      <Inner>
        <Title>Citanka 8-9</Title>
        <Subtitle>Ljiljana Mitic-Roric</Subtitle>
        <Subtitle>Alija H. Dubocanin</Subtitle>
        <Button><span>Start</span></Button>
      </Inner>
      <BgContainer>
        <Bg/>
      </BgContainer>
    </Wrapper>
  );
};