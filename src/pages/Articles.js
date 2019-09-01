import React from 'react';
import styled from 'styled-components';
import {MultipleArticles} from '../components/Layouts/MultipleArticles.js';
import ArticlesData from '../Data/Articles.js';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Articles = () => {
  return (
    <Wrapper>
      <MultipleArticles data={ArticlesData}/>
    </Wrapper>
  );
};