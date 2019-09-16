import React, {useState, useRef, useEffect, useCallback} from 'react';
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

const Separator = styled.div`
  margin-top: 30px;
  width: 100%;
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
          acc.push({word, data: modalInfo, id: i});
        } else {
          acc.push({word, id: i});
        }
      }
      return acc;
    }, []);
    acc.push({
      line: dataLine,
      id: i,
    });
    return acc;
  }, []);
};

const chunk = (arr, size) =>
  Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
    arr.slice(i * size, i * size + size),
  );

const preparedDataText = createMemo(prepareText);

export const TextContainer = React.memo(({id, data, author}) => {
  let ref = useRef(null);
  let size = useComponentSize(ref);
  let {width, height} = size;
  const {width: wWidth, height: wheight} = useWindowSize();
  const text = preparedDataText(data);
  const [paragraphsCount, setParagraphsCount] = useState();
  const [paragraphSize, setParagraphSize] = useState();

  useEffect(() => {
    const paragraphSize = Math.round(wheight * 0.8);
    setParagraphSize(paragraphSize);
  }, [height]);

  useEffect(() => {
    if (paragraphSize) {
      const lines = Math.round(height/ paragraphSize);
      const a = lines || 1;
      const parts = Math.round(text.length / a);
      if (parts && parts !== Infinity) {
        setParagraphsCount(chunk(text, parts));
      }
    }
  }, [paragraphSize, height]);

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
      {paragraphsCount ? paragraphsCount.map((item, i, array) => {
        return (
          <>
            <Paragraph key={item.id} text={item}/>
            {i !== array.length - 1 && <Separator/>}
          </>
        );
      }) : <Paragraph text={[text[0]]}/>}

      <br/>
      <i>{author}</i>
    </Wrapper>
  );
});