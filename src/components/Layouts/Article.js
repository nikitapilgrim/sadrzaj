import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import useStoreon from 'storeon/react';
import useComponentSize from '@rehooks/component-size';
import {useMount, useWindowSize} from 'react-use';

import {breakpoints} from '../../mixins/breakpoints';
import {TestButton} from '../Buttons/TestButton.js';
import {AudioButton} from '../Buttons/AudioButton.js';
import {Divider} from '../Divider';

import bg from '../../assets/img/backgrounds/halka07.jpg';


const Wrapper = styled.div`
  padding: 100px 50px;
  @media ${breakpoints.desktop} {
    padding: 250px 0;
  }
  font-family: Raleway, sans-serif; 
/*
  background: url(${bg});
*/
  background-size: cover;
  background-color: #6c5738;
`;

const Inner = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin: 0;
  text-shadow: 0 3px 0 #000000;
  color: #ffffff;
  font-size: 39px;
  font-weight: 700;
`;

const Subtitle = styled.h2`
  max-width: 425px;
  text-shadow: 0 3px 0 #000000;
  color: #ffffff;
  font-size: 66px;
  font-weight: 400;
  line-height: 60px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media ${breakpoints.desktop} {
    flex-direction: row;
  }
`;

const TextContainer = styled.p`
  margin: 0;
  text-shadow: 0 3px 0 #000000;
  color: #ffffff;
  font-size: 38px;
  font-weight: 500;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  button:last-child {
    margin-left: 10px;
  }
  @media ${breakpoints.desktop} {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    left: -250px;
    align-items: flex-end;
    button:last-child {
       margin-top: 10px;
    }
  }
  
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const MedalContainer = styled.div`
    position: relative;
  display: ${props => props.desctop ? 'none' : 'block'};
  @media ${breakpoints.desktop} {
    display: ${props => props.desctop ? 'block' : 'none'};
  }
`;

const MedalWrapper = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: 60px;
`;

const Medal = styled.div`
  position: relative;
  
`;

const MedalPercent = styled.div`
  position: absolute;
  bottom: 18%;
  left: 20%;
  text-shadow: 1px 1px 0 #000000;
  color: #ffffff;
  font-size: 37px;
  font-weight: 900;
`;

const Medals = {
  bronze: require('../../assets/img/medals/medal-bronze.png'),
  iron: require('../../assets/img/medals/medal-iron.png'),
  gold: require('../../assets/img/medals/medal-gold.png'),
};
/*
const TextWithDividers = ({text}) => {
  const {width, height} = useWindowSize();
  const ref = useRef();
  const size = useComponentSize(ref);
  const [countTextForScreen, setCountTextForScreen] = useState(0);
  const [countScreen, setCountScreen] = useState(0);
  const [heightElement, setHeightElement] = useState(0);

  useEffect(() => {
    const heightElem = size.height;
    const numberScreens = heightElem / height;
    setHeightElement(heightElem);
    setCountScreen(Math.round(numberScreens));
    setCountTextForScreen(Math.round(text.length / numberScreens));
    //console.log('sreen', height, 'element', heightElem, 'text', text.length);
    //console.log(text.length / numberScreens);
  }, [text]);

  useEffect(() => {
    const heightElem = size.height;
    setHeightElement(heightElem);
  }, []);

  return (
    <div style={{minHeight: `${heightElement}px`}} ref={ref}>
      {[...Array(countScreen || 1)].map((_, i) => {
        //console.log(i, 'i', countScreen, text);
        console.log(countScreen, countTextForScreen, text.length)
        const next = i + 1;
        const sliceText = text.slice(i * countTextForScreen || 0, next * countTextForScreen);
        return (
          <p>
            {sliceText}
          </p>
        );
      })}
    </div>
  );
};*/

const Paragraph = ({text, divider, getOffset, scrollToNext}) => {
  const [active, count] = divider;
  const ref = useRef(null);


  useMount(() => {
    const top = ref.current.offsetTop;
    getOffset(top, count);
    return null;
  });

  return (
    <div ref={ref}>
      <span>{text.map(item => {
        return (
          <>
            {item}
            <br/>
          </>
        )
      })}</span>
      {active && <Divider onClick={() => scrollToNext()} number={count}/>}
    </div>
  );
};

const TextWithDividers = ({text, offsetParent}) => {
  //const prepare = text.match(/[\s\S]{1,600}/g); old way
  const [offsets, setOffsets] = useState([]);
  const [prepareText, setPrepareText] = useState([]);
  useMount(() => {
    const splitedText = text.split(/\n/);
    let textCacheIndex = 0;
    const prepare = splitedText.reduce((acc, item,) => {
      if (!acc.length) {
        acc.push([[item]])
      }
      const string = acc[textCacheIndex].reduce((acc, elem) => acc.concat(elem));
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

  const getOffsets = (offset, id) => {
    setOffsets(prev => ({...prev, [id]: offset}));
  };

  const scroll = (id) => () => {
    if (offsets[id]) {
      window.scrollTo({
        top: offsetParent + offsets[id],
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      {prepareText.map((part, i) => {
        const count = i + 1;
        return (
          <Paragraph scrollToNext={scroll(count + 2)}
                     getOffset={getOffsets}
                     text={part}
                     divider={[prepareText.length > 1, count]}/>
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


  useEffect(() => {
    if (articles.hasOwnProperty(data.id)) {
      const articleStorage = articles[data.id];
      if (articleStorage.hasOwnProperty('medal')) {
        setMedal(Medals[articleStorage.medal]);
        setPercent(articleStorage.percent);
      }
    }
  }, [data]);

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
    <Wrapper ref={ref} id={id}>
      <Inner>
        <Title>{data.title}</Title>
        <Row>
          <Subtitle>{data.subtitle}</Subtitle>
          <MedalContainer desctop={true}>
            {medal &&
            <MedalWrapper>
              <Medal>
                <img src={medal} alt="medal"/>
                <MedalPercent>
                  {percent}%
                </MedalPercent>
              </Medal>
            </MedalWrapper>
            }
          </MedalContainer>
        </Row>
        <MainContainer className='main'>
          <Row>
            <Buttons>
              <TestButton onFinishTest={handlerFinishTest} questions={data.questions}/>
              <AudioButton data={data.audio}/>
            </Buttons>

            <MedalContainer desctop={false}>
              {medal &&
              <MedalWrapper>
                <Medal>
                  <img src={medal} alt="medal"/>
                  <MedalPercent>
                    {percent}%
                  </MedalPercent>
                </Medal>
              </MedalWrapper>
              }
            </MedalContainer>
          </Row>
          <TextContainer>
            <TextWithDividers offsetParent={offset} text={data.text}/>
          </TextContainer>
        </MainContainer>
      </Inner>
    </Wrapper>
  );
};