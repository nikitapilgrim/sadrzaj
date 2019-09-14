import React, {useState, useEffect} from 'react';
import {DVL} from 'react-dynamic-virtual-list';
import {ArticleLayout} from './Article/index';

export const MultipleArticles = ({data, getOffset}) => {

  const renderArticle = (item) => {
    return <ArticleLayout getOffset={getOffset} id={`article-${item.id}`} key={item.id} text={item.text} data={item}/>;
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