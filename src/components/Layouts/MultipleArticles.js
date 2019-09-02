import React, {useState, useEffect} from 'react';
import {DVL} from 'react-dynamic-virtual-list';
import {ArticleLayout} from './Article.js';

export const MultipleArticles = ({data}) => {
  const renderArticle = (item) => {

    return <ArticleLayout key={item.id} data={item}/>;
  };

  return (
    <DVL
      onRender={renderArticle}
      items={data}
      windowContainer={true}
      buffer={0}/>
  );
};