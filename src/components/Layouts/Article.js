import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import useStoreon from 'storeon/react';
import {useMount, useWindowSize} from 'react-use';
import reactStringReplace from 'react-string-replace';
import UIfx from 'uifx';

import {Modal} from '../Modal/Modal';
import {breakpoints} from '../../mixins/breakpoints';
import {TestButton} from '../Buttons/TestButton.js';
import {AudioButton} from '../Buttons/AudioButton.js';
import {VideoButton} from '../Buttons/VideoButton';
import {Divider} from '../Divider';
import dictionary from '../../Data/dictionairy/dictionairy';

import bg from '../../assets/img/backgrounds/halka07.jpg';
import {DictionaryInner} from '../Modal/DictionairyInner';

import MedalOne from '../../assets/svg/medal_1.svg';
import MedalTwo from '../../assets/svg/medal_2.svg';
import MedalThree from '../../assets/svg/medal_3.svg';

const MouseClick = new UIfx(require('../../assets/sounds/fx/mouseclick.mp3'));

const Wrapper = styled.div`
  padding: 100px 50px;
  @media ${breakpoints.laptop} {
    padding: 100px 50px;
  }
  font-family: Raleway, sans-serif; 
/*
  background: url(${bg});
*/
  background-size: cover;
  background-color: #6c5738;
`;

const Inner = styled.div`
  max-width: 768px;
  margin: 0 auto;
  background-color: rgba(255,255,255, 0.2);
  padding: 40px;
  position: relative;
`;

const Content = styled.div`
  position: relative;
`;

const Title = styled.h1`
  margin: 0;
  text-shadow: 2px 2px 0 #000000;
  color: #ffffff;
  font-size: 31px;
  font-weight: 700;
`;

const Subtitle = styled.h2`
  margin: 23px 0;
  max-width: 620px;
  text-shadow: 2px 2px 0 #000000;
  color: #ffffff;
  font-size: 33px;
  @media ${breakpoints.laptop} {
      font-size: 52px;
  }
  font-weight: 900;
  line-height: 48px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 16px;
  @media ${breakpoints.laptop} {
    flex-direction: row;
  }
  border-bottom: 1px solid red;
`;

const TextContainer = styled.p`
  margin: 0;
  margin-top: 24px;
  text-shadow: 1px 1px 0 #000000;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  @media ${breakpoints.laptop} { 
    margin: 0;
  }
`;

const Buttons = styled.div`
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  left: -60px;
  transform: scale(0.5);
  
  & > div:not(:first-child) {
      margin-left: 10px;
    }
  
  @media ${breakpoints.laptop} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    position: absolute;
    top: -46px;
    left: -221px;
    & > div:not(:first-child) {
      margin-top: 10px;
    }
  }
  
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.between ? 'space-between' : 'flex-start'};
  width: 100%;
`;

const MedalContainer = styled.div`
    position: absolute;
    right: -109px;
    top: 0;
    @media ${breakpoints.laptop} {
      
    }
`;

const MedalWrapper = styled.div`
  position: relative;
`;

const Medal = styled.div`
  position: relative;
  transform: rotate(-5deg);
`;

const MedalPercent = styled.div`
  position: absolute;
  bottom: 55%;
  left: 20%;
  text-shadow: 1px 1px 1px #000;
  color: #ffffff;
  font-size: 43px;
  font-weight: 900;
`;

const PageNumber = styled.div`
  color: #bf9e3d;
  position: absolute;
  bottom: -25px;
  right: 0;
`;

const Columns = styled.div`
  display: flex;
`;

const Column = styled.div`

`;
const Span = styled.span`
  display: inline-block;
  flex-wrap: wrap;
`;

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


const Paragraph = ({text, count, getOffset, scrollToNext, typeText, checkWordOccurrence}) => {
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
      console.log( word, checkWordOccurrence[0]);
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
  //
  // {modalInfo && reactStringReplace(text, modalInfo.title, (match, i) => (
  //   <Modal style={{display: 'inline-block'}} inner={<DictionaryInner data={modalInfo}/>
  //   }>
  //     <Highlight onClick={() => MouseClick.play()}>{match}</Highlight>
  //   </Modal>
  // )) || text}

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

/*{columns && typeText === 'essay' ?
        <Columns>
          <Column>
            {columnText[0].map((item, index) => {
              return (
                <>
                  {item}
                  <br/>
                </>
              );
            })}
          </Column>
          <Column>
            {columnText[1].map(item => {
              return (
                <>
                  {item}
                  <br/>
                </>
              );
            })}
          </Column>
        </Columns> :
        <span>{text.map(item => {
          return (
            <>
              {item}
              <br/>
            </>
          );
        })}</span>
      }*/
/*{<Divider onClick={() => scrollToNext()} number={count}/>}*/

const TextWithDividers = ({text, typeText, offsetParent, checkWordOccurrence}) => {
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

export const ArticleLayout = ({data, id, getOffset}) => {
  const [medal, setMedal] = useState(null);
  const [percent, setPercent] = useState(null);
  const {dispatch, articles} = useStoreon('articles');
  const ref = useRef(null);
  const [offset, setOffset] = useState();
  const [occurrenceWord, setOccurrenceWord] = useState(new Set());

  const checkWordOccurrence = (word) => {
    if (occurrenceWord.includes(word)) {
      return true;
    } else {
      setOccurrenceWord((state) => [...state, word]);
      return false
    }
  };

  const getMedal = (result) => {
    let medal = null;
    if (result <= 50) {
      medal = 'iron';
    }
    if (result === 100) {
      medal = 'gold';
    }
    if (!medal) {
      medal = 'bronze';
    }
    dispatch('articles/addMedal', [data.id, medal, result]);
  };

  const handlerFinishTest = (result) => {
    const [right, count] = result;
    getMedal(Math.round(right * 100 / count) || 0);
  };

  useMount(() => {
    const top = ref.current.offsetTop;
    setOffset(top);
    getOffset(data.id, top);
    return null;
  });

  return (
    <>
      <Wrapper ref={ref} id={id}>
        <Inner>
          <Content>
            <Title>{data.title}</Title>
            <Row>
              <Subtitle>{data.subtitle}</Subtitle>
              <MedalContainer desctop={true}>
                {articles[data.id] &&
                <MedalWrapper>
                  <Medal>
                    {articles[data.id].medal === 'bronze' && <MedalOne/>}
                    {articles[data.id].medal === 'iron' && <MedalTwo/>}
                    {articles[data.id].medal === 'gold' && <MedalThree/>}
                    <MedalPercent>
                      {articles[data.id].percent}%
                    </MedalPercent>
                  </Medal>
                </MedalWrapper>
                }
              </MedalContainer>
            </Row>
            <MainContainer className='main'>
              <Buttons>
                <TestButton onFinishTest={handlerFinishTest}
                            questions={data.questions}/>
                <AudioButton data={data.audio}/>
                <VideoButton src={data.video}/>
              </Buttons>
              <TextContainer>
                <TextWithDividers checkWordOccurrence={[occurrenceWord, setOccurrenceWord]}
                                  offsetParent={offset}
                                  typeText={data.type}
                                  text={data.text}/>
              </TextContainer>
            </MainContainer>
            <PageNumber>{data.id}</PageNumber>
          </Content>
        </Inner>
      </Wrapper>
    </>
  );
};