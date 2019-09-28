import React, {useEffect, useRef, useState} from 'react';
import {Paragraph} from './Paragraph';
import styled from 'styled-components';
import useComponentSize from '@rehooks/component-size';
import {createMemo, useWindowSize} from 'react-use';
import dictionary from '../../../Data/dictionairy/dictionairy';
import {breakpoints} from '../../../mixins/breakpoints';

const Wrapper = styled.p`
  width: 100%;
  margin: 0;
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
  if (template.indexOf('{{') !== -1) {
    const wordLeft = template.indexOf('{') + 2;
    const left = template.indexOf('(');
    const right = template.lastIndexOf(')');
    const wordRight = left;
    const word = template.slice(wordLeft, wordRight);
    const id = template.slice(left + 1, right);
    if (id === '-') {
      return [word, false];
    }
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
        if (id === false) {
          acc.push({word: parsedWord, id: i});
          return acc;
        }
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

const Lyrics = ({text, height, type}) => {
  const [paragraphsCount, setParagraphsCount] = useState();
  const [paragraphSize, setParagraphSize] = useState();
  const {width: wWidth, height: wheight} = useWindowSize();
  const [columns, setColumns] = useState(false);

  useEffect(() => {
    const paragraphSize = Math.round(wheight * 0.7);
    setParagraphSize(paragraphSize);
  }, [height]);

  useEffect(() => {
    if (paragraphSize) {
      const lines = Math.round(height / paragraphSize);
      const a = lines || 1;
      const parts = Math.round(text.length / a);
      if (parts && parts !== Infinity) {
        setParagraphsCount(chunk(text, parts));
      }
    }
    if (type === 'lyrics') {
      setColumns(text.length > 30);
    }
  }, [paragraphSize, height]);

  return (
    <>
      {paragraphsCount ? paragraphsCount.map((item, i, array) => {
        return (
          <>
            <Paragraph columns={columns} type={type} key={item.id} text={item}/>
            {i !== array.length - 1 && <Separator/>}
          </>
        );
      }) : <Paragraph columns={columns} type={type} text={[text[0]]}/>}
    </>
  );

};

const NormalText = ({text}) => {
  return (
    <>
      {text && text.map((p) => {
        return (
          <Paragraph text={[p]}/>
        );
      })}
    </>
  );
};


export const TextContainer = React.memo(({id, data, author, year, onReady, type}) => {
  let ref = useRef(null);
  let size = useComponentSize(ref);
  let {width, height} = size;
  const {width: wWidth, height: wheight} = useWindowSize();
  const text = preparedDataText(data);


  return (
    <Wrapper ref={ref}>
      {type === 'lyrics' ?
        <Lyrics type={type} height={height} text={text}/> :
        <NormalText text={text}/>
      }


      <i>{year}</i>
      <br/>
      <i>{author}</i>
    </Wrapper>
  );
});