import React from 'react';
import styled from 'styled-components';


const Title = styled.div`
  width: 616px;
  text-shadow: 0 1px 0 #000000;
  color: #ffffff;
  font-size: 41px;
  font-weight: 900;
`;

const AnswersContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  button:not(:first-child) {
    margin-top: 20px;
  }
`;

const AnswerButton = styled.button`
  padding: 25px;
  box-shadow: 0 3px 0 #000000;
  border-radius: 5px;
  background-color: #af8655;
  color: ${props => props.right ? '#ffffff' : 'black'};
  font-size: 41px;
  font-weight: 900;
  cursor: pointer;
  
`;


export const Stage = ({stage, data, onRight, nextStage}) => {
  const {title, answers, question} = data;

  const stageHandler = (right) => () => {
    if (right) {
      onRight();
      nextStage();
    }
    if (!right) {
      nextStage();
    }
  };

  return (
    <>
      <Title>{question}</Title>
      <AnswersContainer>
        {answers.map(answer => {
          return (
            <AnswerButton right={answer.right} onClick={stageHandler(answer.right)}>
              {answer.title}
            </AnswerButton>
          );
        })}
      </AnswersContainer>
    </>
  );
};