import React, {useState} from 'react';
import styled from 'styled-components';

import downicon from '../assets/img/icons/down_icon.png';

const Wrapper = styled.div`
  font-family: Raleway;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before, &::after {
    content: '';
    height: 3px;
    flex-grow: 1;
    box-shadow: 0 3px 0 #000000;
    background-color: #ffffff;
  }
`;


const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 59px;
  height: 59px;
  background-color: #ffffff;
  border-radius: 50% 50%;
  position: absolute;
  color: #392b15;
  font-size: 38px;
  font-weight: 900;
  span {
    position: relative;
    top: -4px;
  }
`;

const DownWrapper = styled.button`
  position: absolute;
  right: -50px;
  top: -50px;
  border: none;
  cursor: pointer;
  width: 81px;
  height: 84px;
  background: url(${downicon}) no-repeat;
  background-size: contain;
`;

const Down = () => {
  return (
    <DownWrapper/>
  );
};

export const Divider = ({number, onClick}) => {
  return (
    <Wrapper onClick={onClick}>
      <Down/>
      <Circle><span>{number}</span></Circle>
    </Wrapper>
  );

};