import React, {useState, useRef, useEffect} from 'react';
import {Paragraph} from './Paragraph';
import styled from 'styled-components';
import useComponentSize from '@rehooks/component-size';
import {useWindowSize} from 'react-use';
import {createMemo} from 'react-use';
import dictionary from '../../../Data/dictionairy/dictionairy';
import {breakpoints} from '../../../mixins/breakpoints';

const Wrapper = styled.p`
  margin: 0;
  margin-top: 24px;
  text-shadow: 1px 1px 0 #000000;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  @media ${breakpoints.laptop} { 
    margin: 0;
  }
  div {
    display: inline-block;
  }
`;

const parseTemplate = (template) => {
  if (template[1] === '{' && template[0] === '{') {
    const word = template.slice(2, -6);
    const left = template.indexOf('(');
    const right = template.lastIndexOf(')');
    const id = template.slice(left + 1, right);
    return [word, +id];
  }
};

const prepareText = (data) => {
  let cacheFoundWords = new Set();
  const linesText = data.split(/\n/); // divide the text into lines\
  return linesText.reduce((acc, line, i) => {
    const arrayWords = line.trim().split(' '); // divide the text into words
    const dataLine = arrayWords.reduce((acc, word, i) => {
      const parsed = parseTemplate(word);
      if (parsed) {
        const [parsedWord, id] = parsed;
        const modalInfo = dictionary.find((w => w.id === id));
        acc.push({word: parsedWord, data: modalInfo, id: i});
        return acc;
      }

      if (!cacheFoundWords.has(word)) {
        const modalInfo = dictionary.find((w => w.title === word));
        if (modalInfo) {
          cacheFoundWords.add(modalInfo.title);
          acc.push({word, data: modalInfo, id: i})
        } else {
          acc.push({word, id: i})
        }
      }
      return acc
    }, []);
    acc.push({
      line: dataLine,
      id: i
    });
    return acc;
  }, []);
};

const preparedDataText = createMemo(prepareText);

export const TextContainer = React.memo(({id, data}) => {
  let ref = useRef(null);
  let size = useComponentSize(ref);
  const [paragraphSize, setParagraphSize] = useState(null);
  let {width, height} = size;
  const {width: wWidth, height: wheight} = useWindowSize();
  const text = preparedDataText(data);
  const [validCountLines, setValidCountLines] = useState(1);

  const onRenderString = (height) => {
    const lines = Math.round(paragraphSize / height);
    //console.log(lines)
    setValidCountLines(lines);
  };

  useEffect(() => {
    console.log(validCountLines, text.length, id)
  }, [validCountLines])

  //console.log(text[0])
 //console.log(height, wheight)
  useEffect(() => {
    setParagraphSize(Math.round(wheight * 0.50))
    //console.log(text)
  }, [wheight]);

  /* useEffect(() => {
    if (width >= 1440) {
      setColumns(true);
      const first = text.slice(0, text.length / 2);
      const second = text.slice(text.length / 2, text.length);
      setColumnText([first, second]);
    } else {
      setColumns(false);
    }
  }, [width]);*/


  return (
    <Wrapper ref={ref}>
      <Paragraph onRenderString={onRenderString} text={text}/>
      <br/>
      <i>{data.author}</i>
    </Wrapper>
  );
});