import React, {useState} from 'react';
import styled from 'styled-components';
import useAudio from 'react-use/lib/useAudio';

import {TestButton} from '../Buttons/TestButton.js';
import {AudioButton} from '../Buttons/AudioButton.js';

import bg from '../../assets/img/backgrounds/halka07.jpg';


const Wrapper = styled.div`
  font-family: Raleway, sans-serif; 
  background: url(${bg});
  background-size: cover;
`;

const Title = styled.h1`
  margin: 0;
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

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MedalContainer = styled.div`

`;

const MedalWrapper = styled.div`
  position: relative;
`;

const Medal = styled.div`
  position: relative;
  
`;

const MedalPercent = styled.div`
  position: absolute;
  bottom: 18%;
  left: 20%;
  z-index: 1;
  text-shadow: 1px 1px 0 #000000;
  color: #ffffff;
  font-size: 37px;
  font-weight: 900;
`;

const Medals = {
  bronze: require('../../assets/img/medals/medal-bronze.png'),
  iron: require('../../assets/img/medals/medal-iron.png'),
  gold: require('../../assets/img/medals/medal-gold.png'),
};

export const ArticleLayout = ({data}) => {
  const [medal, setMedal] = useState(null);
  const [percent, setPercent] = useState(null);

  const getMedal = (result) => {
    setPercent(result + '%');
    if (result <= 50) {
      setMedal(Medals.iron);
      return false;
    }
    if (result === 100) {
      setMedal(Medals.gold);
      return false;
    }
    setMedal(Medals.bronze);
  };

  const handlerFinishTest = (result) => {
    const [right, count] = result;
    console.log(right, count);
    getMedal(Math.round(right * 100 / count) || 0);
  };

  return (
    <Wrapper>
      <Title>{data.title}</Title>
      <Row>
        <Subtitle>{data.subtitle}</Subtitle>
        <MedalContainer>
          {medal &&
          <MedalWrapper>
            <Medal>
              <img src={medal} alt="medal"/>
              <MedalPercent>
                {percent}
              </MedalPercent>
            </Medal>
          </MedalWrapper>
          }
        </MedalContainer>
      </Row>
      <MainContainer>
        <Buttons>
          <TestButton onFinishTest={handlerFinishTest} questions={data.questions}/>
          <AudioButton/>
        </Buttons>
        <TextContainer>
          {data.text}
        </TextContainer>
      </MainContainer>
    </Wrapper>
  );
};