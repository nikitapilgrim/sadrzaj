import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  max-width: 620px;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-shadow: 0 1px 0 #000000;
  color: #ffffff;
  font-size: 72px;
  font-weight: 900;
`;

const ImgWrapper = styled.div`
  max-width: 600px;
  img {
    max-width: 100%;
  }
`;

const Text = styled.p`
  text-shadow: 0 1px 0 #000000;
  color: #ffffff;
  font-size: 38px;
  font-weight: 400;
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