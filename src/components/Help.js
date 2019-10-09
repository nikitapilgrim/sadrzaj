import React from 'react';
import Lifebelt from '../assets/svg/lifebelt.svg'
import styled from 'styled-components';
import useStoreon from 'storeon/react';
import {UIFX} from '../assets/sounds/fx/index'

const Wrapper = styled.div`
  position: fixed;
  top: 5vh;
  left: 5vw;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SvgWrapper = styled.div`
  width: 72px;
  height: 75px;
`;

const Text = styled.p`
  margin-left: 10px;
  color: white;
  font-weight: bold;
  font-size: 36px;
`;

export const Help = () => {
  const {dispatch, help} = useStoreon('help');

  return (
    <Wrapper onClick={() => {
      UIFX.hintbell();
      if (help) {
        dispatch('help/close')
      } else {
        dispatch('help/open')
      }
    }}>
      <SvgWrapper>
        <Lifebelt/>
      </SvgWrapper>
      <Text>Pomoc</Text>
    </Wrapper>
  )
};