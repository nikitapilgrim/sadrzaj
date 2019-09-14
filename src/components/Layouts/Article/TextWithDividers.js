import React, {useState} from 'react';
import {useMount} from 'react-use';
import {Paragraph} from './Paragraph';

export const TextWithDividers = ({text, typeText, offsetParent, checkWordOccurrence}) => {
  //const prepare = text.match(/[\s\S]{1,600}/g); old way
  const [offsets, setOffsets] = useState([]);
  const [prepareText, setPrepareText] = useState([]);
  useMount(() => {
    const splitedText = text.split(/\n/);
    let textCacheIndex = 0;
    const prepare = splitedText.reduce((acc, item) => {
      if (!acc.length) {
        acc.push([item]);
        return acc;
      }
      //const string = acc[textCacheIndex].reduce((acc, elem) => acc.join(elem));
      const string = acc[textCacheIndex].join(/\n/);
      if (string.length >= 600) {
        textCacheIndex = ++textCacheIndex;
        acc[textCacheIndex] = [];
        acc[textCacheIndex].push(item);
      } else {
        acc[textCacheIndex].push(item);
      }
      return acc;
    }, []);
    setPrepareText(prepare);
  });


  const getOffsets = (id) => (offset) => {
    setOffsets(prev => ({...prev, [id]: offset}));
  };

  const scroll = (id) => () => {
    if (offsets[id]) {
      window.scrollTo({
        top: offsetParent + offsets[id] + 400,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      {prepareText.map((part, i) => {
        const count = i + 1;
        return (
          <Paragraph
            checkWordOccurrence={checkWordOccurrence}
            key={count}
            scrollToNext={scroll(count + 1)}
            getOffset={getOffsets(count)}
            text={part}
            typeText={typeText}
            count={count}/>
        );
      })}
    </div>
  );
};