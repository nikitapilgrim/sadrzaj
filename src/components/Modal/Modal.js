import React, {useState} from 'react';
import styled from 'styled-components';
import {useModal} from 'react-modal-hook';

import CloseIcon from '../../assets/svg/close.svg';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #6c5738;
  opacity: 0.9;
`;

const Title = styled.div`
  width: 616px;
  text-shadow: 0 1px 0 #000000;
  color: #ffffff;
  font-size: 41px;
  font-weight: 900;
`;

const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AnswerButton = styled.button`
  width: 580px;
  height: 81px;
  box-shadow: 0 3px 0 #000000;
  border-radius: 5px;
  background-color: #af8655;
`;

const StageContainer = styled.div`
  
`;

const CloseModal = styled.button`
  
`;


const Stage = ({data, callback}) => {
  const {title, answers, question} = data;
  console.log(data, 'data');

  const stageHandler = (right) => () => {
    if (right) {
      callback();
    }
  };

  return (
    <>
      <Title>{question}</Title>
      <AnswersContainer>
        {answers.map(answer => {
          return (
            <AnswerButton onClick={stageHandler(answer.right)}>
              {answer.title}
            </AnswerButton>
          );
        })}
      </AnswersContainer>
    </>
  );
};

const ModalInner = ({open, close, onRight, data}) => {
  return (
    <Wrapper open={open}>
      <StageContainer>
        <Stage callback={onRight} data={data}/>
      </StageContainer>
      <div>
        <CloseModal>
          <button onClick={close}><CloseIcon/></button>
        </CloseModal>
      </div>
    </Wrapper>
  );
};

export const Modal = ({children, questions}) => {
  const [stage, setStage] = useState(0);

  const handlerRightAnswer = () => {
    setStage(stage + 1);
  };
  const [showModal, hideModal] = useModal(({in: open}) => (
    <ModalInner close={hideModal} data={questions[stage]} onRight={handlerRightAnswer} open={open}/>
  ));

  return (
    <div onClick={showModal}>
      {children}
    </div>
  );
};