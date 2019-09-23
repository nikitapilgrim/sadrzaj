import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ReactModal from 'react-responsive-modal';
import CloseIcon from '../../assets/img/icons/close_icon.png';
import UIfx from 'uifx';
const MouseClick = new UIfx(require('../../assets/sounds/fx/mouseclick.mp3'));

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
`;

const Inner = styled.span`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
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
  background-color: #6c5738;
  opacity: 0.5;
`;

export const Modal = ({children, inner, close, finish}) => {
  const [open, setOpen] = useState(false);

  const handlerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (finish) {
      setOpen(false)
    }
  }, [finish]);


  useEffect(() => {
    const root = document.querySelector('#root');
    if (open) {
      root.style.filter = 'blur(5px)';
      root.style.transform = 'scale(1.05)'
    } else {
      root.style.filter = 'none';
      root.style.transform = 'none'
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

    },
    modal: {
      background: 'none',
      boxShadow: 'none'
    }
  }

  return (
    <>
      <ReactModal onClose={handlerClose} open={open} showCloseIcon={false} center={true} styles={style}>
        <Wrapper>
          <Bg/>
          <Inner>
            {inner}
            <CloseModal onClick={() => {
              setOpen(false);
              MouseClick.play()
            }}/>
          </Inner>
        </Wrapper>
      </ReactModal>
      <div onClick={() => {
        setOpen(true);
        MouseClick.play()
      }}>
        {children}
      </div>
    </>
  );
};