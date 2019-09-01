import React, {useEffect, useState} from 'react';
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

export const TestButton = ({questions, onFinishTest}) => {
  const [stage, setStage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [questionsCount, setQuestionsCount] = useState(null);
  const [rightAnswersCount, setRightAnswersCount] = useState(0);

  useEffect(() => {
    setQuestionsCount(questions.length - 1);
  }, [questions]);

  const handlerRightAnswer = () => {
    setRightAnswersCount(rightAnswersCount + 1);
  };

  const handlerNextStage = () => {
    if (questions.length - 1 === stage) {
      setIsOpen(false);
      onFinishTest([rightAnswersCount, questions.length - 1]);
      setStage(0);
      return false;
    }
    setStage(stage + 1);
  };


  return (
    <Modal onFinishTest={onFinishTest} questions={questions} inner={''}>
      <Wrapper>
        <TestIcon/>
        <span>Test</span>
      </Wrapper>
    </Modal>
  );
};