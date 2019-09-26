import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  max-width: 620px;
  //transform: scale(0.75);
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-shadow: 0 1px 0 #000000;
  color: #ffffff;
  font-size: 54px;
  font-weight: 900;
  margin: 0;
`;

const ImgWrapper = styled.div`
  margin-top: 30px;
  max-width: 450px;
  text-align: center;
  
  img {
    display: inline-block;
    max-width: 100%;
  }
`;

const Text = styled.p`
  text-shadow: 0 1px 0 #000000;
  color: #ffffff;
  font-size: 28px;
  font-weight: 400;
   margin: 0;
   margin-top: 20px;
`;

export const DictionaryInner = ({data}) => {
  return (
    <Wrapper>
      <Inner>
        <Title>{data.title}</Title>
        <ImgWrapper>
          <img src={data.img} alt=""/>
        </ImgWrapper>
        <Text>{data.text}</Text>
      </Inner>
    </Wrapper>
  )
};