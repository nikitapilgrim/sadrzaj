import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import data from '../Data/systematization';
import {breakpoints} from '../mixins/breakpoints';
import {TestButton} from './Buttons/TestButton';
import {AudioButton} from './Buttons/AudioButton';
import {Medal} from './Medal';
import {useAction} from '../libs/tutorial/index';

const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   padding: 50px 0px;
  @media ${breakpoints.laptop} {
    padding: 100px 50px;
  }
  font-family: Raleway, sans-serif; 
  
`;

const Inner = styled.div`
     max-width: 768px;
`;

const Title = styled.h1`
  text-align: center;
  color: white;

`;

const Items = styled.div`
  display: flex;
  justify-content: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.3333%;
  padding: 20px;
  background-color: rgba(255,255,255, 0.2);
  &:nth-child(2) {
    margin: 0 20px;
  }


`;

const ItemTitle = styled.h2`
  color: white;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin: 0;

`;

const MedalContainer = styled.div`
  position: relative;
`;

const ItemSubtitle = styled.h3`
  font-size: 16px;
  color: #fff;
  text-align: center;
  font-weight: normal;
`;

const Buttons = styled.div`
  margin-top:  auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  & > div {
    display: inline-block;
  }
`


export const Systematization = () => {
  const [medal, setMedal] = useState(null);
  const ref = useRef(null);

  const getMedal = (result) => {
    let medal = null;
    if (result <= 50) {
      medal = 'iron';
    }
    if (result === 100) {
      medal = 'gold';
    }
    if (!medal) {
      medal = 'bronze';
    }
    setMedal({type: medal, percent: result});
  };

  const handlerFinishTest = (result) => {
    const [right, count] = result;
    getMedal(Math.round(right * 100 / count) || 0);
  };

  return (
    <Wrapper ref={ref}>
      <Inner>
        <Title>
          Systematizacija
        </Title>

        <Items>
          {data.map(item => {
            return (
              <Item>
                <ItemTitle>
                  {item.title}
                </ItemTitle>
                <ItemSubtitle>
                  {item.subtitle}
                </ItemSubtitle>
                <Buttons>
                  {item.questions && <TestButton onFinishTest={handlerFinishTest}
                                                 layout={'system'}
                                                 questions={item.questions}/>}
                  {item.audio && <AudioButton data={item.audio}/>}
                </Buttons>
                <MedalContainer>
                  {medal && <Medal type={medal.type} percent={medal.percent}/>}
                </MedalContainer>

              </Item>
            );
          })}
        </Items>
      </Inner>
    </Wrapper>
  );
};