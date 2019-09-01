import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import {ModalInner} from './Inner.js';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #6c5738;
`;

export const Modal = ({children, questions, onFinishTest}) => {
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
    <>
      <ReactModal isOpen={isOpen}>
        <Wrapper>
          <ModalInner nextStage={handlerNextStage}
                      stage={[stage, questionsCount]}
                      close={() => setIsOpen(false)}
                      data={questions[stage]}
                      onRight={handlerRightAnswer}/>
        </Wrapper>
      </ReactModal>
      <div onClick={() => setIsOpen(!isOpen)}>
        {children}
      </div>
    </>
  );
};