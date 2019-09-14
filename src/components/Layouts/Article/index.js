import React, {useState, useEffect, useRef} from 'react';
import dictionary from '../../../Data/dictionairy/dictionairy';
import styled from 'styled-components';
import useStoreon from 'storeon/react';
import {useMount, useWindowSize, createMemo} from 'react-use';

import {TextWithDividers} from './TextWithDividers';
import {breakpoints} from '../../../mixins/breakpoints';
import {TestButton} from '../../Buttons/TestButton.js';
import {AudioButton} from '../../Buttons/AudioButton.js';
import {VideoButton} from '../../Buttons/VideoButton';
import {Highlight} from './Highlight';
import {Divider} from '../../Divider';

import bg from '../../../assets/img/backgrounds/halka07.jpg';

import MedalOne from '../../../assets/svg/medal_1.svg';
import MedalTwo from '../../../assets/svg/medal_2.svg';
import MedalThree from '../../../assets/svg/medal_3.svg';


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
  div {
    display: inline-block;
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

export const ArticleLayout = ({data, id, getOffset, text}) => {
  const [medal, setMedal] = useState(null);
  const [percent, setPercent] = useState(null);
  const {dispatch, articles} = useStoreon('articles');
  const ref = useRef(null);
  const [offset, setOffset] = useState();
  const [preparedDataText, setPreparedDataText] = useState();
  const [occurrenceWord, setOccurrenceWord] = useState(new Set());

  useEffect(() => {
    let cacheFoundWords = new Set();
    const linesText = text.split(/\n/); // divide the text into lines\
    const data = linesText.reduce((acc, line, i) => {
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
    setPreparedDataText(data);
  }, [text]);

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
                <p>{preparedDataText && preparedDataText.map(item => {
                  return (
                   <>
                     {item.line.map(item => {
                        return (
                          <>
                            {item.data ? <> <Highlight data={item.data}/> </> : <> {item.word} </>}
                          </>
                        )
                     })}
                     <br/>
                   </>
                  )
                })}</p>
              </TextContainer>
            </MainContainer>
            <PageNumber>{data.id}</PageNumber>
          </Content>
        </Inner>
      </Wrapper>
    </>
  );
};