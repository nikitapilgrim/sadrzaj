import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import useStoreon from 'storeon/react';
import ReactModal from 'react-responsive-modal';
import CloseIcon from '../../assets/img/icons/close_icon.png';
import {useClickAway} from 'react-use';
import {breakpoints} from '../../mixins/breakpoints';
import {UIFX} from '../../assets/sounds/fx/index';
import {useAction} from '../../libs/tutorial';
import {Help} from '../Help';


export const Wrapper = styled.div`
  min-height: inherit;
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

const CloseModalEcs = styled.p`
  position: relative;
  left: -85px;
  font-size: 36px;
  font-weight: bold;
  color: white;
  margin: 0;
`;

export const TuttorialInner = styled.div`
  min-height: inherit;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media ${breakpoints.laptop} { 
      width: 80%;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 50vw;
  min-height: 50vh;
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


export const Modal = React.memo(({children, inner, type, finish}) => {
  const [open, setOpen] = useState(false);
  const {dispatch, modal} = useStoreon('modal');
  const ref = useRef(null);
  useClickAway(ref, () => {
    //console.log(ref.current)
    //dispatch('modal/close');
    //console.log('awai')
    ///setOpen(false);
  });

  const handlerClose = () => {
    dispatch('modal/close');
    //console.log('handlerclose')

    setOpen(false);
  };

  useEffect(() => {
    if (finish) {
      dispatch('modal/close');
      //console.log('finish')
      setOpen(false);
    }
  }, [finish]);


  useEffect(() => {
    const root = document.querySelector('#root');
    if (modal.open) {
      root.style.filter = 'blur(10px)';
      //root.style.transform = 'scale(1.05)'
    } else {
      root.style.filter = 'none';
      root.style.transform = 'none';
    }
  }, [modal]);


  const style = {
    overlay: {
      background: 'none',
      padding: '0px !important',
      backgroundColor: 'rgba(70,54,29, 0.7)',
    },
    modal: {
      background: 'none',
      boxShadow: 'none',
      padding: '0px !important',
    },
  };

  return (
    <>
      <ReactModal onEscKeyDown={handlerClose} onClose={handlerClose} open={open} onOverlayClick={handlerClose}
                  showCloseIcon={false} center={true} styles={style}>
        <Wrapper>
          {type === 'test' && <Help/>}

          <Inner ref={ref}>
            {inner}
            <CloseModal onClick={() => {
              setOpen(false);
              dispatch('modal/close');
              //console.log('closebutti')
              UIFX.mouseClick();
            }}><CloseModalEcs>ESC</CloseModalEcs></CloseModal>
          </Inner>
        </Wrapper>
      </ReactModal>
      <div onClick={() => {
        setOpen(true);
        dispatch('modal/open');
        //console.log('open')
        UIFX.mouseClick();
      }}>
        {children}
      </div>
    </>
  );
});