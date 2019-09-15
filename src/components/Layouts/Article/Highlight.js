import React from 'react';
import styled from 'styled-components';
import UIfx from 'uifx';
import {Modal} from '../../Modal/Modal';
import {DictionaryInner} from '../../Modal/DictionairyInner';
const MouseClick = new UIfx(require('../../../assets/sounds/fx/mouseclick.mp3'));

const Wrapper = styled.span`
  color: #fff600;
  font-weight: 900;
  text-decoration: underline;
  cursor: pointer;
`;

export const Highlight = ({data, word}) => {
  return (
    <>
        <Modal style={{display: 'inline-block'}} inner={<DictionaryInner data={data}/>
        }>
          <Wrapper onClick={() => MouseClick.play()}>{word}</Wrapper>
        </Modal>
    </>
  )
};