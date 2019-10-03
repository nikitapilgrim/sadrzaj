import React from 'react';
import MedalOne from '../assets/svg/medal_1.svg';
import MedalTwo from '../assets/svg/medal_2.svg';
import MedalThree from '../assets/svg/medal_3.svg';
import styled from 'styled-components';
import {breakpoints} from '../mixins/breakpoints';


const MedalWrapper = styled.div`
  position: relative;
`;

const Medals = styled.div`
  position: relative;
  transform: rotate(-10deg) scale(0.8);
  svg {
    filter:drop-shadow(2px 3px 5px black)
  }
   @media ${breakpoints.laptop} {
        transform: rotate(-10deg);
       svg {
          filter:drop-shadow(2px 3px 5px black)
        }
    }
`;

const MedalPercent = styled.div`
  position: absolute;
  bottom: 55%;
  left: 20%;
  text-shadow: 1px 1px 1px #000;
  color: #ffffff;
  font-size: 43px;
  font-weight: 900;
`;


export const Medal = ({type, percent}) => {
  return (
    <MedalWrapper>
      <Medals>
        {type === 'bronze' && <MedalOne/>}
        {type === 'iron' && <MedalTwo/>}
        {type === 'gold' && <MedalThree/>}
        <MedalPercent>
          {percent}%
        </MedalPercent>
      </Medals>
    </MedalWrapper>
  );
};