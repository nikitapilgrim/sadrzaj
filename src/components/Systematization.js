import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import data from '../Data/systematization'
import {breakpoints} from '../mixins/breakpoints';
import {TestButton} from './Buttons/TestButton';
import {AudioButton} from './Buttons/AudioButton';
import {Medal} from './Medal';
import {useAction} from '../libs/tutorial/index'

const Wrapper = styled.div`
   padding: 50px 0px;
  @media ${breakpoints.laptop} {
    padding: 100px 50px;
  }
  font-family: Raleway, sans-serif; 
  
`;

const Title = styled.h1`
  text-align: center;
  color: white;

`;

const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`

const Item = styled.div`
  background-color: rgba(255,255,255, 0.2);
  &:nth-child(2) {
    margin: 0 20px;
  }


`;

const ItemTitle = styled.h2`
  color: white;
  text-align: center;

`;

const MedalContainer = styled.div`
  position: relative;
`;

const ItemSubtitle = styled.h3`

`


export const Systematization = () => {
  const [medal, setMedal] = useState(null);
  const ref = useRef(null);
  const [action] = useAction(ref, () => console.log('hi'), 1, 'first', {title: 'some', text: 'text'});

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
      <Title>
        Systematization
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
              {item.questions && <TestButton onFinishTest={handlerFinishTest}
                                             layout={'system'}
                                             questions={item.questions}/>}
              {item.audio && <AudioButton data={item.audio}/>}
              <MedalContainer>
                {medal && <Medal type={medal.type} percent={medal.percent}/>}
              </MedalContainer>

            </Item>
          )
        })}
      </Items>

    </Wrapper>
  )
};