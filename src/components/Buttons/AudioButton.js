import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import PlayIcon from '../../assets/svg/play-icon.svg';
import {InnerAudio} from '../Modal/InnerAudio';
import {Modal} from '../Modal/Modal';
import {breakpoints} from '../../mixins/breakpoints';

import {useModal} from 'react-modal-hook';
import MicroModal from 'react-micro-modal';


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


export const AudioButton = ({data}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Modal
      close={() => setModalOpen(false)}
      isOpen={modalOpen}
           inner={<InnerAudio data={data} close={() => setModalOpen(false)}/>}>
      <Wrapper onClick={() => setModalOpen(true)}>
        <PlayIcon/>
        <span>Audio</span>
      </Wrapper>
    </Modal>
  );
};