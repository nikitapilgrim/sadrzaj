import React from 'react';
import styled from 'styled-components';
import data from '../Data/systematization'

const Wrapper = styled.div`
  
`;

const Title = styled.h1`

`;

const Items = styled.div`

`

const Item = styled.div`

`;

const ItemTitle = styled.h2`

`;

const ItemSubtitle = styled.h3`

`


export const Systematization = () => {

  return (
    <Wrapper>
      <Title>
        Systematization
      </Title>

      <Items>
        {data.map(item => {

        })}
      </Items>

    </Wrapper>
  )
};