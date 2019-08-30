import React from 'react';
import styled from 'styled-components';
import {MultipleArticles} from '../components/Layouts/MultipleArticles.js';
import ArticlesData from '../Data/Articles.js';
import bg from '../assets/img/backgrounds/halka07.jpg';

const Wrapper = styled.div`
  background: url(${bg});
  background-size: cover;
`;

export const Articles = () => {
  return (
    <Wrapper>
      <MultipleArticles data={ArticlesData}/>
    </Wrapper>
  );
};