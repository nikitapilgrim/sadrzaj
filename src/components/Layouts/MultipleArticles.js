import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useMount} from 'react-use';
import {ArticleLayout} from './Article/index';
import {breakpoints} from '../../mixins/breakpoints';

const Headline = styled.div`
    text-shadow: 1px 1px 0px #000;
    color: #fff;
    font-size: 36px;
    font-weight: 800;
    text-align: center;
    @media ${breakpoints.laptop} {
      font-size: 70px;
   }
`;

const headlines = ['Narodna književnost', 'Roman', 'Putopis', 'Lirske pjesme', 'Pripovijetka', 'Drama', 'Medijska kultura'];
export const MultipleArticles = ({data, getOffset}) => {
  const [withHeadLine, setWithHeadLine] = useState(null);

  useMount(() => {{
    setWithHeadLine(data.reduce((acc, item, i) => {
      const prevIndex = i - 1;
      const convertTitle = headlines.filter((h => item.title.indexOf(h) !== -1));
      if (i !== 0) {
        const prevTitle = acc[prevIndex].title;
        if (prevTitle === item.title) {
          acc.push({...item, headline: false})
        } else {
          acc.push({...item, headline: convertTitle})
        }
      } else {
        acc.push({...item, headline: convertTitle})
      }
      return acc;
    }, []))
  }});

  const renderArticle = (item) => {
    return (
      <React.Fragment key={item.id}>
        <Headline>{item.headline}</Headline>
        <ArticleLayout getOffset={getOffset} id={`article-${item.id}`} text={item.text} data={item}/>
      </React.Fragment>
      );
  };

  return (
    <>
      {withHeadLine && withHeadLine.map(renderArticle)}
    </>
    /*<DVL
      onRender={renderArticle}
      items={data}
      windowContainer={true}
      buffer={1}
    />*/
  );
};