import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import TestIcon from '../../assets/svg/test_icon.svg';
import {Modal} from '../Modal/Modal';
import {InnerTest} from '../Modal/InnerTest.js';
import {SystemInnerTest} from '../Modal/InnerTest.js';
import {breakpoints} from '../../mixins/breakpoints';
import {useAction} from '../../libs/tutorial';
import {Znanje} from '../Modal/TutotialModal';

const Wrapper = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  box-shadow: 0 3px 0 #000000;
  border-radius: 4px;
  border: 1px solid #fcfbc4;
  background-color: #c79e1f;
  svg {
    width: 22px;
    height: 22px;
  }
  span {
    text-shadow: 0 1px 0 #000000;
    color: #ffffff;
    font-size: 16px;
    font-weight: 900;
    margin-left: 8px;
  }
  @media ${breakpoints.laptop} {
    padding: 2.5px 10px;
    svg {
      width: 25px;
      height: 20px;
    }
    span {
      font-size: 22px;
    }
  }
`;

export const TestButton = ({questions, onFinishTest, layout}) => {
  const [stage, setStage] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [questionsCount, setQuestionsCount] = useState(null);
  const [rightAnswersCount, setRightAnswersCount] = useState(0);
  const [finish, setFinish] = useState(false);
  const ref = useRef(null);
  const [store, methods] = useAction(ref, () => console.log('hi'), 3, 'test', <Znanje/>);

  useEffect(() => {
    setQuestionsCount(questions.length);
  }, [questions]);


  const close = () => {

  };

  const handlerRightAnswer = () => {
    setRightAnswersCount(rightAnswersCount + 1);
  };

  const handlerNextStage = () => {
    console.log(rightAnswersCount)
    if (questions.length - 1 === stage) {
      setModalOpen(false);
      onFinishTest([rightAnswersCount, questions.length - 1]);
      setRightAnswersCount(0);
      setFinish(true);
      setStage(0);
      return false;
    }
    setStage(stage + 1);
  };


  return (
    <Modal
      close={() => setModalOpen(false)}
      isOpen={modalOpen}
      finish={finish}
      inner={layout === 'system'? <SystemInnerTest nextStage={handlerNextStage}
                                                   stage={[stage, questionsCount]}
                                                   close={() => setModalOpen(false)}
                                                   data={questions[stage]}
                                                   onRight={() => {
                                                     handlerRightAnswer();
                                                   }}/>
                                                   :
        <InnerTest nextStage={handlerNextStage}
                        stage={[stage, questionsCount]}
                        close={() => setModalOpen(false)}
                        data={questions[stage]}
                        onRight={() => {
                          handlerRightAnswer();
                        }}/>}>
      <Wrapper ref={ref} onClick={() => {
        setFinish(false);
        setModalOpen(true);
      }}>
        <TestIcon/>
        <span>Provjera</span>
      </Wrapper>
    </Modal>
  );
};