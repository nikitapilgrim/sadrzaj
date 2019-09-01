import React, {useState, useEffect} from 'react';
import {DVL} from 'react-dynamic-virtual-list';
import {ArticleLayout} from './Article.js';

export const MultipleArticles = ({data}) => {
  return (
    <DVL
      onRender={(item, index) => {
        return <ArticleLayout key={index} data={item}/>;
      }}
      items={data}
      windowContainer={true}
      buffer={0}/>
  );
};