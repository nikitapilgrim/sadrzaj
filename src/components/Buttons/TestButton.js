import React from 'react';
import styled from 'styled-components';
import TestIcon from '../../assets/svg/test_icon.svg';
import {Modal} from '../Modal/Modal';

const Wrapper = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  box-shadow: 0 3px 0 #000000;
  border-radius: 5px;
  border: 1px solid #fcfbc4;
  background-color: #c79e1f;
  span {
    text-shadow: 0 1px 0 #000000;
    color: #ffffff;
    font-size: 44px;
    font-weight: 900;
    margin-left: 10px;
  }
`;

export const TestButton = ({questions}) => {
  const {title, question, answers} = questions;

  return (
    <Modal questions={questions}>
      <Wrapper>
        <TestIcon/>
        <span>Test</span>
      </Wrapper>
    </Modal>
  );
};