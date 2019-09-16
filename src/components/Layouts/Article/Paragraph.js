import React, {useState, useEffect, useRef, Fragment} from 'react';
import {useMount} from 'react-use';
import useComponentSize from '@rehooks/component-size';
import styled from 'styled-components';
import {Highlight} from './Highlight';

const Wrapper = styled.p`
  max-height: ${props => `${props.maxHeight}px`};
`;

export const Paragraph = ({text, maxHeight}) => {
  const ref = useRef(null);
  /*let size = useComponentSize(ref);
  let {width, height} = size;

  useEffect(() => {
    onRenderString(height)
  }, [height]);*/

  return (
    <Wrapper ref={ref} maxHeight={maxHeight}>
      {text && text.map(item => {
        return (
          <Fragment key={item.id}>
            {item.line.map(item => {
              return (
                <Fragment key={item.id}>
                  {item.data ? <> <Highlight word={item.word} data={item.data}/> </> : <> {item.word} </>}
                </Fragment>
              );
            })}
            <br/>
          </Fragment>
        );
      })}
    </Wrapper>
  );
};
