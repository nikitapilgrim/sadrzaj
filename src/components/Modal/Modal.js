import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import CloseIcon from '../../assets/img/icons/close_icon.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #6c5738;
`;


const CloseModal = styled.button`
  position: absolute;
  z-index: 2;
  top: 0px;
  right: 0px;
  width: 72px;
  height: 72px;
  background: url("${CloseIcon}") no-repeat;
  background-size: cover;
  border: none;
  cursor: pointer;
`;

export const Modal = ({children, inner, isOpen, close}) => {
  useEffect(() => {
    ReactModal.setAppElement('#root');
    }, []);

  return (
    <>
      <ReactModal isOpen={isOpen}>
        <Wrapper>
          {inner}
          <CloseModal onClick={() => close()}/>
        </Wrapper>
      </ReactModal>
      {children}
    </>
  );
};