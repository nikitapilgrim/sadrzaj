import React from 'react';
import {Stage} from './Stage.js'
import styled from 'styled-components';
import {breakpoints} from '../../mixins/breakpoints';

const Wrapper = styled.div`
  position: relative;
  max-width: 620px;
`;

const StageContainer = styled.div`
  
`;

const OrderStage = styled.div`
  text-align: center;
  margin-top: 100px;
  font-size: 38px;
  font-weight: 700;
  color: #fff;
  text-shadow: 2px 2px 0 #000000;
   @media ${breakpoints.tablet} {
      margin-top: 200px;
  }

`;


export const InnerTest = React.memo(({onRight, stage, data, close, nextStage}) => {
  return (
    <Wrapper>
      <StageContainer>
        <Stage stage={stage} onRight={onRight} data={data} nextStage={nextStage}/>
      </StageContainer>
      <OrderStage>
        Pitanje {stage[0]+1} / {stage[1]}
      </OrderStage>
    </Wrapper>
  );
});