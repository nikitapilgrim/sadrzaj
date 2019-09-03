import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import {useMount, useWindowSize} from 'react-use';

import {Menu} from '../components/Menu/Menu';
import {breakpoints} from '../mixins/breakpoints';

import bgImage from '../assets/img/backgrounds/startsreen.jpg';
import bgImageDesctop from '../assets/img/backgrounds/startscreen-desctop.jpg';
import ArticlesData from '../Data/Articles';
import {MultipleArticles} from '../components/Layouts/MultipleArticles';

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
  font-family: Raleway,serif;
`;

const Header = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-size: 56px;
  font-weight: 900;
  @media ${breakpoints.tablet} {
    font-size: 108px;
  }
`;

const Subtitle = styled.div`
  text-shadow: 0 4px 0 #000000;
  color: #ffffff;
  font-size: 26px;
  font-weight: 700
  @media ${breakpoints.tablet} {
    font-size: 44px;
  }
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
  font-weight: 900;
  @media ${breakpoints.mobileL} {
    width: 200px;
    height: 100px;
    font-size: 36px; 
  }
  span {
    color: black;
    background: url(${bgImage}) no-repeat;
    background-position: 50% 50%;
    @media ${breakpoints.tablet} {
      background: url(${bgImageDesctop}) no-repeat;
      background-position: 50% 25%;
      -webkit-background-clip: text;
    }
    background-size: ${props => `${props.size[0]}px ${props.size[1]}px`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const MenuWrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 2vh;
  right: 3vw;
`;

export const Start = () => {
  let a = []
  const {width, height} = useWindowSize();
  const [offsetArticles, setOffsetArticles] = useState([]);
  const getOffset = (id, offset) => {
    a.push({id, offset})
    console.log(a)
  };
  const scrollTo = (id) => {
    //window.scrollBy(0, window.innerHeight);
  };
  useMount(() => {
    console.log('mount start')
  });
  useEffect(() => {
    console.log(offsetArticles);
  }, [offsetArticles]);

  return (
    <Wrapper>
      <Header>
        <Menu scrollTo={scrollTo}/>
        <Inner>
          <Title>Citanka 8-9</Title>
          <Subtitle>Ljiljana Mitic-Roric</Subtitle>
          <Subtitle>Alija H. Dubocanin</Subtitle>
          <Button size={[width, height]}><span>Start</span></Button>
        </Inner>
        <BgContainer>
          <Bg/>
        </BgContainer>
      </Header>
      <main>
        <MultipleArticles getOffset={getOffset} data={ArticlesData}/>
      </main>
    </Wrapper>
  );
};