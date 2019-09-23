import React from 'react';
import styled from 'styled-components';
import {Modal} from '../../Modal/Modal';
import {DictionaryInner} from '../../Modal/DictionairyInner';


const Wrapper = styled.span`
  color: #fff600;
  font-weight: 900;
  text-decoration: underline;
  cursor: pointer;
`;

export const Highlight = ({data, word}) => {
  return (
    <span>
        <Modal style={{display: 'inline-block'}} inner={<DictionaryInner data={data}/>
        }>
          <Wrapper>{word}</Wrapper>
        </Modal>
    </span>
  )
};