import React from 'react';
import {Stage} from './Stage.js'
import styled from 'styled-components';
import CloseIcon from '../../assets/img/icons/close_icon.png';


const Wrapper = styled.div`
  position: relative;
  max-width: 620px;
`;

const StageContainer = styled.div`
  
`;


const CloseModal = styled.button`
  position: absolute;
  top: -50px;
  right: -75px;
  width: 72px;
  height: 72px;
  background: url("${CloseIcon}") no-repeat;
  background-size: cover;
  border: none;
  cursor: pointer;
`;

const OrderStage = styled.div`
  text-align: center;
  margin-top: 200px;
  font-size: 38px;
  font-weight: 700;
  color: #fff;
`;


export const ModalInner = ({onRight, stage, data, close, nextStage}) => {
  return (
    <Wrapper open={open}>
      <StageContainer>
        <Stage stage={stage} onRight={onRight} data={data} nextStage={nextStage}/>
      </StageContainer>
      <OrderStage>
        Pitange {stage[0]} /{stage[1]}
      </OrderStage>
      <CloseModal onClick={close}/>
    </Wrapper>
  );
};