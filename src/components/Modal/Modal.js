import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import useStoreon from 'storeon/react';
import ReactModal from 'react-responsive-modal';
import CloseIcon from '../../assets/img/icons/close_icon.png';
import {useClickAway} from 'react-use';
import {breakpoints} from '../../mixins/breakpoints';
import {FX} from '../../assets/sounds/fx/index';
import {useAction} from '../../libs/tutorial';


export const Wrapper = styled.span`
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

export const Inner = styled.span`
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

export const Modal = React.memo(({children, inner, close, finish}) => {
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

    setOpen(false)
  };

  useEffect(() => {
    if (finish) {
      dispatch('modal/close');
      //console.log('finish')
      setOpen(false)
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
    },
  };

  return (
    <>
      <ReactModal onClose={handlerClose} open={open} showCloseIcon={false} center={true} styles={style}>
        <Wrapper>
          <Bg/>
          <Inner ref={ref}>
            {inner}
            <CloseModal onClick={() => {
              setOpen(false);
              dispatch('modal/close');
              //console.log('closebutti')
              FX.mouseClick.play()
            }}/>
          </Inner>
        </Wrapper>
      </ReactModal>
      <div onClick={() => {
        setOpen(true);
        dispatch('modal/open');
        //console.log('open')
        FX.mouseClick.play()
      }}>
        {children}
      </div>
    </>
  );
});