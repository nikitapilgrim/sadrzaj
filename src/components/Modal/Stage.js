import React, {useRef, useEffect, useState} from 'react';
import useComponentSize from '@rehooks/component-size';
import styled from 'styled-components';
import {breakpoints} from '../../mixins/breakpoints';
import {FX} from '../../assets/sounds/fx/index';
import reactStringReplace from 'react-string-replace';

const Title = styled.div`
  text-shadow: 0 1px 0 #000000;
  color: #ffffff;
  font-size: 22px;
  font-weight: 900;
   @media ${breakpoints.tablet} {
     font-size: 32px;
  }
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
  font-size: 22px;
  outline: none;
`;

const Input = styled.input`
  padding-left: 10px;
  height: 50px;
  width: 100%;
  color: #e0dedf;
  background-color: #675740;
  border: 2px solid #ec3225;
  font-family: Raleway, sans-serif;
  font-size: 22px;
  outline: none;
`;

const AnswerInput = ({onInput}) => {

  return (
    <Input onKeyUp={(e) => {
      onInput(e.target.value);
    }}/>
  );
};

const MainLayout = ({question, answers, inputHandler, stageHandler}) => {
  return (
    <>
      <Title>{question}</Title>
      <AnswersContainer>
        {answers.length > 1 ? answers.map((answer, index) => {
            return (
              <AnswerButton key={index} right={answer.right} onClick={stageHandler(answer.right)}>
                {answer.title}
              </AnswerButton>
            );
          }) :
          <AnswerInput onInput={inputHandler(answers[0].title)}/>
        }
      </AnswersContainer>
    </>
  );
};

const InlineInput = styled.input`
  display: inline;
  position: relative;
  left: 0;
  top: 0;
  width: ${props => `${props.width}px`};
`;
const AnswerHidden = styled.span`
  opacity: 0;
  position: absolute;
`;

const Span = styled.span`
  position: relative;
`;

const SystemLayout = ({question, answers, inputHandler, nextStage}) => {
  const [value, setValue] = useState(null);
  const [manyValues, setManyValues] = useState([]);
  let ref = useRef(null);
  let size = useComponentSize(ref);
  let {width} = size;

  const handler = right => e => {
    setValue(e.target.value);
    inputHandler(right)(e.target.value);
  };

  const nonLinearHandler = i => e => {
    const obj = {[i]: e.target.value};
    setManyValues({...manyValues, ...obj});
  };


  useEffect(() => {
    if (answers ) {
      if (!Array.isArray(answers)) {
        const checkAllAnswers = Object.entries(manyValues).every(pair => {
          const [key, value] = pair;
          return answers.includes(value);
        });
        checkAllAnswers && nextStage();
      } else {
        answers[0].some(answer => answer === manyValues[0]) && nextStage();
      }
    }
  }, [manyValues]);

  useEffect(() => {
    setValue('');
  }, [question]);

  useEffect(() => {
    if (answers && !Array.isArray(answers)) {
      setManyValues(answers.reduce((acc, elem, i) => {
        const obj = {[i]: ''};
        return {...acc, ...obj};
      }, []));
    }
  }, [answers]);

  return (
    <>
      {!answers && reactStringReplace(question, /{{([^}]+)}}/g, (match, i) => {
        return (
          <Span>
            <InlineInput value={value} onKeyUp={handler(match)} width={width}/>
            <AnswerHidden ref={ref}>{match}</AnswerHidden>
          </Span>
        );
      })}
      {answers && (
        <>
          {question}{answers.map((answer, i) => {
          return (
            <Span>
              <InlineInput value={manyValues[i]} onKeyUp={nonLinearHandler(i)} width={width}/>
              <AnswerHidden ref={ref}>{answer}</AnswerHidden>
            </Span>
          );
        })}
        </>
      )}
    </>
  );

};


export const Stage = React.memo(({data, onRight, nextStage, layout}) => {
  const {title, answers, question} = data;

  const stageHandler = (right) => () => {
    if (right) {
      onRight();
      FX.correctAnswer.play();
      nextStage();
    }
    if (!right) {
      FX.wrongAnswer.play();
      nextStage();
    }
  };

  const inputHandler = (right) => (value) => {
    if (right === value) {
      FX.correctAnswer.play();
      nextStage();
    }
  };

  return (
    <React.Fragment>
      {layout === 'system' && <SystemLayout nextStage={nextStage} answers={answers} question={question} inputHandler={inputHandler}/>}
      {layout !== 'system' &&
      <MainLayout question={question} answers={answers} inputHandler={inputHandler} stageHandler={stageHandler}/>}
    </React.Fragment>
  );
});