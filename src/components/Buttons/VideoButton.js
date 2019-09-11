import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Modal} from '../Modal/Modal';
import {VideoInner} from '../Modal/VideoInner.js';
import {breakpoints} from '../../mixins/breakpoints';

const Wrapper = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  box-shadow: 0 3px 0 #000000;
  border-radius: 5px;
  border: 1px solid #fcfbc4;
  background-color: #c79e1f;
  svg {
      width: 30px;
      height: 30px;
  }
  span {
    text-shadow: 0 1px 0 #000000;
    color: #ffffff;
    font-size: 22px;
    font-weight: 900;
    margin-left: 10px;
  }
  @media ${breakpoints.laptop} {
    padding: 5px 20px;
    svg {
      width: 47px;
      height: 40px;
    }
    span {
      font-size: 44px;
    }
  }
`;

export const VideoButton = ({src}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Modal
      inner={<VideoInner src={src}/>}>
      <Wrapper>
          <span>Video</span>
      </Wrapper>
    </Modal>
  );
};