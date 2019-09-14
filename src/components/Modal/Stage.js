import React from 'react';
import styled from 'styled-components';
import UIfx from 'uifx'
import {breakpoints} from '../../mixins/breakpoints';

const correct = new UIfx(require('../../assets/sounds/fx/correct-answer.aac'));
const worng = new UIfx(require('../../assets/sounds/fx/wrong-answer.aac'));

const Title = styled.div`
  text-shadow: 0 1px 0 #000000;
  color: #ffffff;
  font-size: 32px;
  font-weight: 900;
`;

const AnswersContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  button:not(:first-child) {
    margin-top: 20px;
  }
`;

const AnswerButton = styled.button`
  color: ${props => props.right ? '#ffffff' : 'black'};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  box-shadow: 0 3px 0 #000000;
  border-radius: 5px;
  border: 1px solid #fcfbc4;
  background-color: #c79e1f;
`;


export const Stage = ({stage, data, onRight, nextStage}) => {
  const {title, answers, question} = data;

  const stageHandler = (right) => () => {
    if (right) {
      onRight();
      correct.play();
      nextStage();
    }
    if (!right) {
      worng.play();
      nextStage();
    }
  };

  return (
    <>
      <Title>{question}</Title>
      <AnswersContainer>
        {answers.map((answer, index) => {
          return (
            <AnswerButton key={index} right={answer.right} onClick={stageHandler(answer.right)}>
              {answer.title}
            </AnswerButton>
          );
        })}
      </AnswersContainer>
    </>
  );
};