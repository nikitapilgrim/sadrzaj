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
  top: -50px;
  right: -75px;
  width: 72px;
  height: 72px;
  background: url("${CloseIcon}") no-repeat;
  background-size: cover;
  border: none;
  cursor: pointer;
`;

export const Modal = ({children, inner, isOpen}) => {

  return (
    <>
      <ReactModal isOpen={isOpen}>
        <Wrapper>
          {inner}
        </Wrapper>
      </ReactModal>
      {children}
      <CloseModal onClick={close}/>
    </>
  );
};