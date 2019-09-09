import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import useStoreon from 'storeon/react';
import {useMount, useWindowSize} from 'react-use';
import reactStringReplace from 'react-string-replace';

import {Modal} from '../Modal/Modal'
import {breakpoints} from '../../mixins/breakpoints';
import {TestButton} from '../Buttons/TestButton.js';
import {AudioButton} from '../Buttons/AudioButton.js';
import {Divider} from '../Divider';
import dictionary from '../../Data/dictionairy/dictionairy';

import bg from '../../assets/img/backgrounds/halka07.jpg';
import {DictionaryInner} from '../Modal/DictionairyInner';


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
  max-width: 960px;
  transform: scale(0.8);
  margin: 0 auto;
`;

const Title = styled.h1`
  margin: 0;
  text-shadow: 2px 2px 0 #000000;
  color: #ffffff;
  font-size: 39px;
  font-weight: 700;
`;

const Subtitle = styled.h2`
  margin: 29px 0;
  max-width: 620px;
  text-shadow: 2px 2px 0 #000000;
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
  text-shadow: 1px 1px 0 #000000;
  color: #ffffff;
  font-size: 24px;
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

const Columns = styled.div`
  display: flex;
`;

const Column = styled.div`

`;
const Span = styled.span`
  display: flex;
  flex-wrap: wrap;
`;

const Highlight =  styled.span`
  color: #fff600;
  font-weight: 900;
  text-decoration: underline;
  cursor: pointer;
`;


const Paragraph = ({text, count, getOffset, scrollToNext, typeText}) => {
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

  const findDictionary = (text) => {
    const modalInfo = dictionary.find((word => text.includes(word.title)));
    return (
        <Span>
          {modalInfo && reactStringReplace(text, modalInfo.title, (match, i) => (
            <Modal inner={<DictionaryInner data={modalInfo} />
            }>
              <Highlight>{match}</Highlight>
            </Modal>
          )) || text}
        </Span>
    )
  };

  return (
    <div ref={ref}>
       <span>{text.map(item => {
         return (
           <>
             {findDictionary(item)}
             <br/>
           </>
         );
       })}</span>


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

const TextWithDividers = ({text, typeText, offsetParent}) => {
  //const prepare = text.match(/[\s\S]{1,600}/g); old way
  const [offsets, setOffsets] = useState([]);
  const [prepareText, setPrepareText] = useState([]);
  useMount(() => {
    const splitedText = text.split(/\n/);
    let textCacheIndex = 0;
    const prepare = splitedText.reduce((acc, item) => {
      if (!acc.length) {
        acc.push([[item]]);
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
    <>
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
              <TextWithDividers offsetParent={offset} typeText={data.type} text={data.text}/>
            </TextContainer>
          </MainContainer>
        </Inner>
      </Wrapper>
      <hr className='separator'/>
    </>
  );
};