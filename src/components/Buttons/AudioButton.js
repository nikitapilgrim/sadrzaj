import React, {useState} from 'react';
import styled from 'styled-components';
import PlayIcon from '../../assets/svg/play-icon.svg';
import {InnerAudio} from '../Modal/InnerAudio';
import {Modal} from '../Modal/Modal';

const Wrapper = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  box-shadow: 0 3px 0 #000000;
  border-radius: 5px;
  border: 1px solid #fcfbc4;
  background-color: #c79e1f;
  span {
    text-shadow: 0 1px 0 #000000;
    color: #ffffff;
    font-size: 44px;
    font-weight: 900;
    margin-left: 10px;
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