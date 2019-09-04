import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import useStoreon from 'storeon/react';
import useComponentSize from '@rehooks/component-size';
import {useMount, useWindowSize} from 'react-use';


import {TestButton} from '../Buttons/TestButton.js';
import {AudioButton} from '../Buttons/AudioButton.js';
import {Divider} from '../Divider';

import bg from '../../assets/img/backgrounds/halka07.jpg';


const Wrapper = styled.div`
  padding: 250px 0;
  font-family: Raleway, sans-serif; 
  background: url(${bg});
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
  position: relative;
`;

const TextContainer = styled.p`
  margin: 0;
  text-shadow: 0 3px 0 #000000;
  color: #ffffff;
  font-size: 38px;
  font-weight: 500;
`;

const Buttons = styled.div`
  position: absolute;
  left: -250px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  button:last-child {
    margin-top: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const MedalContainer = styled.div`

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
    <p ref={ref}>
      {text}
      {active && <Divider onClick={() => scrollToNext(count)} number={count}/>}
    </p>
  );
};

const TextWithDividers = ({text, offsetParent}) => {
  const prepare = text.match(/[\s\S]{1,600}/g);
  const [offsets, setOffsets] = useState([]);

  const getOffsets = (offset, id) => {
    setOffsets(prev => ({...prev, [id]: offset}));
  };

  const scroll = (id) => () => {
    window.scrollTo({
      top: offsetParent + offsets[id],
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {prepare.map((part, i) => {
        const count = i + 1;
        return (
          <Paragraph scrollToNext={scroll(count)}
                     getOffset={getOffsets}
                     text={part}
                     divider={[prepare.length > 1, count]}/>
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
          <MedalContainer>
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
        <MainContainer>
          <Buttons>
            <TestButton onFinishTest={handlerFinishTest} questions={data.questions}/>
            <AudioButton data={data.audio}/>
          </Buttons>
          <TextContainer>
            <TextWithDividers offsetParent={offset} text={data.text}/>
          </TextContainer>
        </MainContainer>
      </Inner>
    </Wrapper>
  );
};