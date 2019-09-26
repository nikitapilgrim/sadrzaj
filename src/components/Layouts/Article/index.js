import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import useStoreon from 'storeon/react';
import {useMount, useWindowSize, createMemo, useLocalStorage} from 'react-use';
import useComponentSize from '@rehooks/component-size';

import {breakpoints} from '../../../mixins/breakpoints';
import {TestButton} from '../../Buttons/TestButton.js';
import {AudioButton} from '../../Buttons/AudioButton.js';
import {VideoButton} from '../../Buttons/VideoButton';
import {TextContainer} from './TextContainer';

import bg from '../../../assets/img/backgrounds/halka07.jpg';

import MedalOne from '../../../assets/svg/medal_1.svg';
import MedalTwo from '../../../assets/svg/medal_2.svg';
import MedalThree from '../../../assets/svg/medal_3.svg';


const Wrapper = styled.div`
  padding: 50px 0px;
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
  padding-bottom: 70px;
  position: relative;
`;

const Content = styled.div`
  position: relative;
`;

const Title = styled.h1`
  margin: 0;
  text-shadow: 2px 2px 0 #000000;
  color: #ffffff;
  font-size: 22px;
  font-weight: 500;
  @media ${breakpoints.laptop} {
    font-size: 31px;
    font-weight: 700;
  }
`;

const Subtitle = styled.h2`
  margin: 23px 0;
  max-width: 620px;
  text-shadow: 2px 2px 0 #000000;
  color: #ffffff;
  font-size: 33px;
  line-height: 1;
  @media ${breakpoints.laptop} {
      font-size: 52px;  
      line-height: 48px;
  }
  font-weight: 900;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 16px;
  @media ${breakpoints.laptop} {
    flex-direction: row;
  }
  border-bottom: 1px solid #fff;
`;

const Buttons = styled.div`
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  left: -64px;
  transform: scale(0.7);
  
  & > div:not(:first-child) {
      margin-left: 10px;
    }
  
  @media ${breakpoints.laptop} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    transform: scale(0.5);
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
    right: -57px;
    top: 0;
    @media ${breakpoints.laptop} {
          right: -109px;

    }
`;

const MedalWrapper = styled.div`
  position: relative;
`;

const Medal = styled.div`
  position: relative;
  transform: rotate(-10deg) scale(0.6);
  svg {
    filter:drop-shadow(2px 3px 5px black)
  }
   @media ${breakpoints.laptop} {
        transform: rotate(-10deg);
       svg {
          filter:drop-shadow(2px 3px 5px black)
        }
    }
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
  color: #fff;
  position: absolute;
  bottom: -50px;
  right: 0;
  font-size: 30px;
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

export const ArticleLayout = React.memo(({data, id, getOffset, text}) => {
  const {dispatch, articles} = useStoreon('articles');
  const ref = useRef(null);
  const textRef = useRef(null);
  const [offset, setOffset] = useState();
  const [textReady, setTextReady] = useState(false);
  let size = useComponentSize(ref);
  let {width, height} = size;

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

  useEffect(() => {
    const top = ref.current.offsetTop;
    setOffset(top);
    getOffset(data.id, top);
    return null;
  }, [height]);

  return (
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
                {data.audio && <AudioButton data={data.audio}/>}
                {data.video && <VideoButton src={data.video}/>}
              </Buttons>
              <TextContainer type={data.type} onReady={textReady} author={data.author} id={data.id} data={data.text}/>
            </MainContainer>
            <PageNumber>{data.id}</PageNumber>
          </Content>
        </Inner>
      </Wrapper>
  );
});