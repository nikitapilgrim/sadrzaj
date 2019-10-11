import React, {useRef, useEffect, useState} from 'react';
import useComponentSize from '@rehooks/component-size';
import styled from 'styled-components';
import {breakpoints} from '../../mixins/breakpoints';
import {UIFX} from '../../assets/sounds/fx/index';
import reactStringReplace from 'react-string-replace';
import useStoreon from 'storeon/react';

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

const Text = styled.div`
  text-shadow: 0 1px 0 #000000;
  color: #ffffff;
  font-size: 22px;
  font-weight: normal;
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
  color: #ffffff;
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
  transition: ${props => {
  if (props.help) {
    return props.help && 'filter 0.5s;'
  }
  if (props.right !== null) {
    return 'filter 0.2s;'
  }
  return 'filter 0.5s;'
  }};
  filter: ${props => {
  if (props.help) {
    return props.help ? 'drop-shadow(2px 3px 20px #fff);' : 'drop-shadow(0px 0px 0px #fff);';
  }
  if (props.right !== null) {
    return props.right ? 'drop-shadow(2px 3px 20px #00ff00);' : 'drop-shadow(2px 3px 20px #f00);';
  }
}}
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

const AnswerButtonWithState = ({help, rightAnswer, title, handler}) => {
  const [right, setRight] = useState(null);

  const answerHandler = (answer) => () => {
    if (answer) {
      setRight(true);
    } else {
      setRight(false);
    }
    setTimeout(() => {
      setRight(null);
      setTimeout(() => {
        handler(answer);
      }, 100);
    }, 200);
  };
  return (
    <AnswerButton help={rightAnswer && help} right={right} onClick={answerHandler(rightAnswer)}>
      {title}
    </AnswerButton>
  );
};

const MainLayout = ({question, answers, inputHandler, stageHandler}) => {
  const {dispatch, help} = useStoreon('help');

  return (
    <>
      <Title>{question}</Title>
      <AnswersContainer>
        {answers.length > 1 ? answers.map((answer, index) => {
            return (
              <AnswerButtonWithState title={answer.title}
                                     help={answer.right && help}
                                     key={index}
                                     rightAnswer={answer.right}
                                     handler={stageHandler(answer.right)}/>
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
  return (
    <React.Fragment key={index}>
      <InlineInput width={width} value={state.hasOwnProperty(index) ? state[index].value : ''} onKeyUp={handler}/>
      <AnswerHidden ref={ref}>{match}</AnswerHidden>
    </React.Fragment>
  );
};

const SystemLayout = ({question, answers, inputHandler, nextStage}) => {
  const [value, setValue] = useState([]);
  const [manyValues, setManyValues] = useState([]);

  const handler = (right, id) => e => {
    const obj = {
      [id]: {
        right: right,
        value: e.target.value,
      },
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
        return value.right === value.value;
      });
      checkAllAnswers && nextStage(true)(true);
    }
  }, [value]);

  useEffect(() => {
    if (answers) {
      console.log(manyValues, 'many');
      if (!Array.isArray(answers[0])) {
        const checkAllAnswers = Object.entries(manyValues).every(pair => {
          const [key, value] = pair;
          return answers.includes(value);
        });
        checkAllAnswers && !hasDuplicates(Object.values(manyValues)) && nextStage(true)(true);
      } else {
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
      {!answers && <Text>
        {reactStringReplace(question, /{{([^}]+)}}/g, (match, i) => {
          return (
            <Span key={i}>
              <HiddenWord state={value} index={i} match={match} handler={handler(match, i)}/>
            </Span>
          );
        })
        }
      </Text>
      }
      {answers && (
        <Text>
          {question}{answers.map((answer, i) => {
          return (
            <>
              <Span key={i}>
                <HiddenWord state={manyValues} index={i} match={answer} handler={nonLinearHandler(i)}/>
              </Span>
            </>
          );
        })}
        </Text>
      )}
    </>
  );

};


export const Stage = React.memo(({data, onRight, nextStage, layout}) => {
  const {title, answers, question} = data;
  const {dispatch, help} = useStoreon('help');

  const stageHandler = (right) => () => {
    if (right) {
      onRight();
      dispatch('help/close');
      UIFX.correctAnswer();
      nextStage();
    }
    if (!right) {
      UIFX.wrongAnswer();
      nextStage();
    }
  };

  const inputHandler = (right) => (value) => {
    if (right === value) {
      UIFX.correctAnswer();
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