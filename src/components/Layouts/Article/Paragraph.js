import React, {useState, useEffect, useRef, Fragment} from 'react';
import {useMount} from 'react-use';
import useComponentSize from '@rehooks/component-size';
import styled from 'styled-components';
import {breakpoints} from '../../../mixins/breakpoints';
import {Highlight} from './Highlight';

const Wrapper = styled.p`
  max-height: ${props => `${props.maxHeight}px`};
  @media ${breakpoints.laptop} { 
    columns: ${props => props.type === 'essay' && '2'};
  }
`;

export const Paragraph = ({text, maxHeight, type}) => {
  const ref = useRef(null);
  /*let size = useComponentSize(ref);
  let {width, height} = size;

  useEffect(() => {
    onRenderString(height)
  }, [height]);*/

  return (
    <Wrapper type={type} ref={ref} maxHeight={maxHeight}>
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
