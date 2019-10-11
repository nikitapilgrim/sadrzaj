import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  cursor: pointer;
  margin-left: 15px;
`;

const Plank = styled.div`
  width: 40px;
  height: 8px;
  text-shadow: 0 3px 0 #000000;
  background-color: #FFF;
  box-shadow: 0 1px 1px 1px #000000;
  &:nth-child(2) {
    margin: 6px 0px;
  }
`;

export const Hamburger = ({onClick}) => {
  return (
    <Wrapper onClick={onClick}>
      <Plank/>
      <Plank/>
      <Plank/>
    </Wrapper>
  )
};