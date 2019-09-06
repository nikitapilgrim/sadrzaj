import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import useStoreon from 'storeon/react';
import {useMount, useWindowSize} from 'react-use';

import {breakpoints} from '../../mixins/breakpoints';
import {TestButton} from '../Buttons/TestButton.js';
import {AudioButton} from '../Buttons/AudioButton.js';
import {Divider} from '../Divider';

import bg from '../../assets/img/backgrounds/halka07.jpg';


const Wrapper = styled.div`
  padding: 100px 50px;
  @media ${breakpoints.laptop} {
    padding: 250px 50px;
  }
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
  max-width: 620px;
  text-shadow: 0 3px 0 #000000;
  color: #ffffff;
  font-size: 42px;
  @media ${breakpoints.laptop} {
      font-size: 66px;
  }
  font-weight: 900;
  line-height: 60px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media ${breakpoints.laptopL} {
    flex-direction: row;
  }
`;

const TextContainer = styled.p`
  margin: 0;
  margin-top: 30px;
  text-shadow: 0 3px 0 #000000;
  color: #ffffff;
  font-size: 38px;
  font-weight: 500;
  @media ${breakpoints.laptopL} { 
    margin: 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  button:last-child {
    margin-left: 10px;
  }
  @media ${breakpoints.laptopL} {
    position: absolute;
    left: -250px;
    flex-direction: column;
    align-items: flex-end;
    button:last-child {
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
    position: relative;
`;

const MedalWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: auto;
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

const Columns = styled.div`
  display: flex;
`;

const Column = styled.div`

`;

const Paragraph = ({text, divider, getOffset, scrollToNext}) => {
  const [active, count] = divider;
  const ref = useRef(null);
  const {width, height} = useWindowSize();
  const [columnText, setColumnText] = useState();
  const [columns, setColumns] = useState(null);

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

  return (
    <div ref={ref}>
      {columns ?
        <Columns>
          <Column>
            {columnText[0]}
          </Column>
          <Column>
            {columnText[1]}
          </Column>
        </Columns> : <span>{text}</span>
      }
      {active && <Divider onClick={() => scrollToNext()} number={count}/>}
    </div>
  );
};

const TextWithDividers = ({text, offsetParent}) => {
  const prepare = text.match(/[\s\S]{1,600}/g);
  const [offsets, setOffsets] = useState([]);

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
      {prepare.map((part, i) => {
        const count = i + 1;
        return (
          <Paragraph scrollToNext={scroll(count + 1)}
                     getOffset={getOffsets(count)}
                     text={part}
                     divider={[prepare.length > 1 && prepare.length !== count, count]}/>
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