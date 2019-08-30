import React from 'react';
import {ArticleLayout} from './Article.js';

export const MultipleArticles = ({data}) => {
  console.log(data);

  return (
    <>
      {data.map((article => <ArticleLayout data={article}/>))}
    </>
  );
};