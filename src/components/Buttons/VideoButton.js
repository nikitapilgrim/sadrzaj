import React, {useState} from 'react';
import styled from 'styled-components';
import {Modal} from '../Modal/Modal';
import {VideoInner} from '../Modal/VideoInner.js';
import {breakpoints} from '../../mixins/breakpoints';

const Wrapper = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  box-shadow: 0 3px 0 #000000;
  border-radius: 4px;
  border: 1px solid #fcfbc4;
  background-color: #c79e1f;
  svg {
    width: 22px;
    height: 22px;
  }
  span {
    text-shadow: 0 1px 0 #000000;
    color: #ffffff;
    font-size: 16px;
    font-weight: 900;
    margin-left: 8px;
  }
  @media ${breakpoints.laptop} {
    padding: 2.5px 10px;
    svg {
      width: 25px;
      height: 20px;
    }
    span {
      font-size: 22px;
    }
  }
`;

export const VideoButton = ({src}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Modal
      inner={<VideoInner src={src}/>}>
      <Wrapper>
          <span>Pogledaj</span>
      </Wrapper>
    </Modal>
  );
};