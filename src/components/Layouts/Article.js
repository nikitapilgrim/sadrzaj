import React from 'react';
import styled from 'styled-components';
import {TestButton} from '../Buttons/TestButton.js';
import {AudioButton} from '../Buttons/AudioButton.js';

const Wrapper = styled.div`
  font-family: Raleway, sans-serif; 
`;

const Title = styled.h1`
  text-shadow: 0 3px 0 #000000;
  color: #ffffff;
  font-size: 39px;
  font-weight: 700;
`;

const Subtitle = styled.h2`
  text-shadow: 0 3px 0 #000000;
  color: #ffffff;
  font-size: 66px;
  font-weight: 400;
  line-height: 60px;
`;

const MainContainer = styled.div`
  display: flex;
`;

const TextContainer = styled.p`
  margin: 0;
  margin-left: 40px;
  text-shadow: 0 3px 0 #000000;
  color: #ffffff;
  font-size: 38px;
  font-weight: 500;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button:last-child {
    margin-top: 10px;
  }
`;


export const ArticleLayout = ({data}) => {
  return (
    <Wrapper>
      <Title>{data.title}</Title>
      <Subtitle>{data.subtitle}</Subtitle>
      <MainContainer>
        <Buttons>
          <TestButton questions={data.questions}/>
          <AudioButton/>
        </Buttons>
        <TextContainer>
          {data.text}
        </TextContainer>
      </MainContainer>
    </Wrapper>
  );
};