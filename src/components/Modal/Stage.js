import React, {useRef, useEffect, useState} from 'react';
import useComponentSize from '@rehooks/component-size';
import styled from 'styled-components';
import {breakpoints} from '../../mixins/breakpoints';
import {FX} from '../../assets/sounds/fx/index';
import reactStringReplace from 'react-string-replace';

function hasDuplicates(array) {
  return (new Set(array)).size !== array.length;
}

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

const HiddenWord = ({state, match, index, handler}) => {
  const ref = useRef(null);
  let size = useComponentSize(ref);
  let {width} = size;
  console.log(state);
  return (
    <React.Fragment key={index}>
      <InlineInput width={width} value={state.hasOwnProperty(index) ? state[index].value : ''} onKeyUp={handler}/>
      <AnswerHidden ref={ref}>{match}</AnswerHidden>
    </React.Fragment>
  )
};

const SystemLayout = ({question, answers, inputHandler, nextStage}) => {
  const [value, setValue] = useState([]);
  const [manyValues, setManyValues] = useState([]);

  const handler = (right, id) => e => {
    console.log(id, right)
    const obj = {
      [id]: {
        right: right,
        value: e.target.value
      }
    };
    setValue({...value, ...obj});
  };

  const nonLinearHandler = i => e => {
    const obj = {[i]: e.target.value};
    setManyValues({...manyValues, ...obj});
  };

  useEffect(() => {
    if (value.length !== 0) {
      const checkAllAnswers = Object.entries(value).every(pair => {
        const [key, value] = pair;
        return value.right === value.value
      });
      checkAllAnswers && nextStage(true)(true);
    }
  }, [value]);

  useEffect(() => {
    if (answers) {
      console.log(manyValues, 'many')
      if (!Array.isArray(answers[0])) {
        const checkAllAnswers = Object.entries(manyValues).every(pair => {
          const [key, value] = pair;
          return answers.includes(value);
        });
        console.log(checkAllAnswers, 'caw')
        checkAllAnswers && !hasDuplicates(Object.values(manyValues)) && nextStage(true)(true);
      } else {
        console.log('chek')
        answers[0].some(answer => answer === manyValues[0]) && nextStage(true)(true);
      }
    }
  }, [manyValues]);

  useEffect(() => {
    setValue('');
  }, [question]);

  useEffect(() => {
    if (answers && !Array.isArray(answers[0])) {
      setManyValues(answers.reduce((acc, elem, i) => {
        const obj = {[i]: ''};
        return {...acc, ...obj};
      }, []));
    }
  }, [answers]);

  return (
    <>
      {!answers && <Title>
        {reactStringReplace(question, /{{([^}]+)}}/g, (match, i) => {
          return (
            <Span key={i}>
              <HiddenWord state={value} index={i} match={match} handler={handler(match, i)}/>
            </Span>
          );
        })
        }
      </Title>
      }
      {answers && (
        <Title>
          {question}{answers.map((answer, i) => {
          return (
            <>
              <Span key={i}>
                <HiddenWord state={manyValues} index={i} match={answer} handler={nonLinearHandler(i)}/>
              </Span>
            </>
          );
        })}
        </Title>
      )}
    </>
  );

};


export const Stage = React.memo(({data, onRight, nextStage, layout}) => {
  const {title, answers, question} = data;

  const stageHandler = (right) => () => {
    console.log(right);
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
      onRight();
      nextStage();
    }
  };

  return (
    <div>
      {layout === 'system' &&
      <SystemLayout nextStage={stageHandler} answers={answers} question={question} inputHandler={inputHandler}/>}
      {layout !== 'system' &&
      <MainLayout question={question} answers={answers} inputHandler={inputHandler} stageHandler={stageHandler}/>}
    </div>
  );
});