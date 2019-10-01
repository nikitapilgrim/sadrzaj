import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import useLifecycles from 'react-use/lib/useLifecycles';
import ReactModal from 'react-responsive-modal';
import CloseIcon from '../../assets/img/icons/close_icon.png';
import {useClickAway} from 'react-use';
import {breakpoints} from '../../mixins/breakpoints';
import {FX} from '../../assets/sounds/fx/index';


const Wrapper = styled.span`
  display: flex;
  z-index: 999;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;


const CloseModal = styled.button`
  position: fixed;
  z-index: 2;
  top: 5vh;
  right: 5vw;
  width: 72px;
  height: 75px;
  background: url("${CloseIcon}") no-repeat;
  background-size: cover;
  border: none;
  cursor: pointer;
  outline: none;
`;

const Inner = styled.span`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media ${breakpoints.laptop} { 
      width: 80%;
  }
`;

const Bg = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: #46361d;
  opacity: 0.7;
`;

export const Modal = React.memo(({children, inner, close, finish}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setOpen(false);
  });

  const handlerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (finish) {
      setOpen(false);
    }
  }, [finish]);

  //useLifecycles(() => console.log('MOUNTED'), () => console.log('UNMOUNTED'));


  useEffect(() => {
    const root = document.querySelector('#root');
    if (open) {
      root.style.filter = 'blur(5px)';
      //root.style.transform = 'scale(1.05)'
    } else {
      root.style.filter = 'none';
      root.style.transform = 'none';
    }
  }, [open]);

  useEffect(() => {
    window.addEventListener('keydown', function(e) {
      if ((e.key === 'Escape' || e.key === 'Esc' || e.code === 'Escape')) {
        e.preventDefault();
        handlerClose();
        return false;
      }
    }, true);
  });

  const style = {
    overlay: {
      background: 'none',
      padding: '0px !important',

    },
    modal: {
      background: 'none',
      boxShadow: 'none',
      padding: '0px !important',
    }
  }

  return (
    <>
      <ReactModal onClose={handlerClose} open={open} showCloseIcon={false} center={true} styles={style}>
        <Wrapper>
          <Bg/>
          <Inner ref={ref}>
            {inner}
            <CloseModal onClick={() => {
              setOpen(false);
              FX.mouseClick.play()
            }}/>
          </Inner>
        </Wrapper>
      </ReactModal>
      <div onClick={() => {
        setOpen(true);
        FX.mouseClick.play()
      }}>
        {children}
      </div>
    </>
  );
});