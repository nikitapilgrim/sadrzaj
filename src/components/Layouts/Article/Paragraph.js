import React, {useEffect, useRef, useState} from 'react';
import {useMount, useWindowSize} from 'react-use';
import styled from 'styled-components';
import dictionary from '../../../Data/dictionairy/dictionairy';
import UIfx from 'uifx';
import {Modal} from '../../Modal/Modal';
import {DictionaryInner} from '../../Modal/DictionairyInner';

const MouseClick = new UIfx(require('../../../assets/sounds/fx/mouseclick.mp3'));


const Highlight = styled.span`
  color: #fff600;
  font-weight: 900;
  text-decoration: underline;
  cursor: pointer;
`;

const ParagraphInner = styled.span`
  div {
    display: inline-block;
  }
`;

export const Paragraph = ({text, count, getOffset, scrollToNext, typeText, checkWordOccurrence}) => {
  const ref = useRef(null);
  const {width, height} = useWindowSize();
  const [columnText, setColumnText] = useState();
  const [columns, setColumns] = useState(null);
  const [prepareText, setPrepareText] = useState('');

  useEffect(() => {
    if (width >= 1440) {
      setColumns(true);
      const first = text.slice(0, text.length / 2);
      const second = text.slice(text.length / 2, text.length);
      setColumnText([first, second]);
    } else {
      setColumns(false);
    }
  }, [width]);


  useMount(() => {
    const top = ref.current.offsetTop;
    getOffset(top);
    return null;
  });

  const findDictionary = (text) => {
    let foundedWords = [];
    const splitIntoWords = text.split(' ');
    const modalInfo = dictionary.find((word => splitIntoWords.includes(word.title)));
    if (modalInfo) {
      const foundIndex = splitIntoWords.findIndex(word => word === modalInfo.title);
      foundedWords = [...foundedWords, splitIntoWords[foundIndex]];

      /*if (!checkWordOccurrence(splitIntoWords[foundIndex])) {
        splitIntoWords[foundIndex] = <Highlight onClick={() => MouseClick.play()}>{splitIntoWords[foundIndex]}</Highlight>
      }*/
    }
    const check = (word) => {
      if (checkWordOccurrence[0].has(word)) {
        return true;
      } else {
        checkWordOccurrence[1]((state) => new Set(state).add(word));
        return false
      }
    };

    return (
      <>
        {splitIntoWords.map(word => {
          const found = foundedWords.find((w) => word === w);
          foundedWords = foundedWords.filter(w => w !== found);
          return (
            <>
              {found && !check(found) ? <Modal style={{display: 'inline-block'}} inner={<DictionaryInner data={modalInfo}/>
              }>
                <Highlight onClick={() => MouseClick.play()}>{found}</Highlight>
              </Modal> : <> {word} </> }
            </>
          );
        })}
      </>
    );
  };

  return (
    <div ref={ref}>
      <ParagraphInner>{text.map(item => {
        return (
          <>
            {findDictionary(item)}
            <br/>
          </>
        );
      })}</ParagraphInner>
    </div>
  );
};
