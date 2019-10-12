import React, {Fragment, useRef} from 'react';
import styled from 'styled-components';
import {breakpoints} from '../../../mixins/breakpoints';
import {Highlight} from './Highlight';

const Wrapper = styled.p`
  width: 100%;
  margin: 0;
  margin-bottom: ${props => !props.mobile && '8px'};
  max-height: ${props => `${props.maxHeight}px`};
  @media ${breakpoints.laptop} { 
    columns: ${props => props.columns && '2'};
  }
  
  ${props => props.mobile && `
    &:nth-child(10n) {
      margin-top: 30px;
    }
  `}
`;

export const Paragraph = ({text, maxHeight, columns, type, mobile}) => {
  const ref = useRef(null);

  return (
    <Wrapper mobile={mobile} columns={columns} type={type} ref={ref} maxHeight={maxHeight}>
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
