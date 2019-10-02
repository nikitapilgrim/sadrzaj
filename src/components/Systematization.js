import React from 'react';
import styled from 'styled-components';
import data from '../Data/systematization'
import {breakpoints} from '../mixins/breakpoints';
import {TestButton} from './Buttons/TestButton';
import {AudioButton} from './Buttons/AudioButton';

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

const ItemSubtitle = styled.h3`

`


export const Systematization = () => {

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
  };

  const handlerFinishTest = (result) => {
    const [right, count] = result;
    getMedal(Math.round(right * 100 / count) || 0);
  };

  return (
    <Wrapper>
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
              {item.questions && <TestButton onFinishTest={handlerFinishTest}
                                             layout={'system'}
                                             questions={item.questions}/>}
              {item.audio && <AudioButton data={item.audio}/>}
            </Item>
          )
        })}
      </Items>

    </Wrapper>
  )
};