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