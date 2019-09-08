import React, {useState, useEffect} from 'react';
import {DVL} from 'react-dynamic-virtual-list';
import {ArticleLayout} from './Article.js';

export const MultipleArticles = ({data, getOffset}) => {

  const renderArticle = (item) => {
    return <ArticleLayout getOffset={getOffset} id={`article-${item.id}`} key={item.id} data={item}/>;
  };

  return (
    <>
      {data.map(renderArticle)}

    </>
    /*<DVL
      onRender={renderArticle}
      items={data}
      windowContainer={true}
      buffer={1}
    />*/
  );
};