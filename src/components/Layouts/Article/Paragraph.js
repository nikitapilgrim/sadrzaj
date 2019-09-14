import React, {useState, Fragment} from 'react';
import {Highlight} from './Highlight';
import {createMemo} from 'react-use';
import dictionary from '../../../Data/dictionairy/dictionairy';

const prepareText = (data) => {
  let cacheFoundWords = new Set();
  const linesText = data.split(/\n/); // divide the text into lines\
  return linesText.reduce((acc, line, i) => {
    const arrayWords = line.trim().split(' '); // divide the text into words
    const dataLine = arrayWords.reduce((acc, word, i) => {
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

export const Paragraph = React.memo(({data}) => {
  const result = preparedDataText(data);

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
    <>
    {result && result.map(item => {
      return (
        <Fragment key={item.id}>
          {item.line.map(item => {
            return (
              <Fragment key={item.id}>
                {item.data ? <> <Highlight data={item.data}/> </> : <> {item.word} </>}
              </Fragment>
            )
          })}
          <br/>
        </Fragment>
      )
    })}
    </>
  );
});
