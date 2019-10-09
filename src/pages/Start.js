import React, {useEffect, useState} from 'react';
import styled, {css} from 'styled-components';
import {useMount, useWindowSize} from 'react-use';
import * as Scroll from 'react-scroll';
import Fade from 'react-reveal/Fade';

import {Menu} from '../components/Menu/Menu';
import {breakpoints} from '../mixins/breakpoints';

import ArticlesData from '../Data/Articles';
import {MultipleArticles} from '../components/Layouts/MultipleArticles';
import {Systematization} from '../components/Systematization';

import bgHeader from '../assets/img/backgrounds/header.jpg';
import firstscreen from '../assets/img/backgrounds/start-screen.jpg';
import {useAction} from '../libs/tutorial';
import ReactModal from 'react-responsive-modal';
import {Wrapper as ModalWrapper, TuttorialInner as ModalInner} from '../components/Modal/Modal';
import {Zdravo} from '../components/Modal/TutotialModal';
import useStoreon from 'storeon/react';

let scroll = Scroll.animateScroll;

const AllSpace = css`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Wrapper = styled.div`
  font-family: Raleway,serif;
  width: 100%;
`;

const Main = styled.main`
  padding-top: 50px;
  @media ${breakpoints.laptop} {
    padding-top: 100px;
   }
`;

const Header = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BgContainer = styled.div`
    ${AllSpace};
    z-index: 0;
`;

const Bg = styled.div`
  position: absolute;
  z-index: 0;
  top: -20%;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background: url(${firstscreen}) 50% 50%;
  background-size: cover;
`;

const Title = styled.div`
  text-shadow: 0 4px 0 #000000;
  color: #ffffff;
  font-size: 46px;
  font-weight: 900;
  @media ${breakpoints.tablet} {
    font-size: 108px;
  }
`;

const Subtitle = styled.div`
  text-shadow: 0 4px 0 #000000;
  color: #ffffff;
  font-size: 26px;
  font-weight: 700;
  @media ${breakpoints.tablet} {
    font-size: 44px;
  }
`;

const Button = styled.button`
  cursor: pointer;
  position: relative;
  margin-top: 60px;
  background: #FFF;
  width: 200px;
  height: 100px;
  font-size: 36px; 
  border-radius: 6px;
  border: none;
  outline: none;
  color: #8f7d69;
  font-weight: 900;
  margin-bottom: 10%;
  @media ${breakpoints.laptop} {
    width: 334px;
    height: 153px;
    font-size: 60px; 
  }
  span {
    //color: black;
    //background: url(${bgHeader}) no-repeat;
    //background-position: 50% 50%;
    @media ${breakpoints.tablet} {
      //background: url(${bgHeader}) no-repeat;
      //background-position: 50% 25%;
      //-webkit-background-clip: text;
    }
    //background-size: ${props => `${props.size[0]}px ${props.size[1]}px`};
    //-webkit-background-clip: text;
    //-webkit-text-fill-color: transparent;
  }
`;

const ModalNextButton = styled.button`
  margin-top: auto;
  border: none;
  background: none;
  border-radius: 3px;
  background-color: #FFF;
  color: red;
  padding: 10px 30px;
  cursor:pointer;
  font-weight: bold;
`;

const FirstScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: #8f7d69;
`;

let clonesNode = [];

export const Start = () => {
  const [firstScreenShow, setFirstScreenShow] = useState(true);
  const {width, height} = useWindowSize();
  const [offsetArticles, setOffsetArticles] = useState({});
  const [store, methods] = useAction(null, () => console.log('hi'), 1, 'start', <Zdravo/>);
  const {dispatch, tutorial} = useStoreon('tutorial');

  const [modalOpen, setModalOpen] = useState(false);
  const [tutorId, setTutorId] = useState(1);

  useEffect(() => {
    if (!tutorial) {
      dispatch('articles/addMedal', [1, 'gold', 100]);
    }
  }, [tutorial]);

  useEffect(() => {
    const root = document.querySelector('#root');
    if (modalOpen) {
      root.style.filter = 'blur(10px)';
      //root.style.transform = 'scale(1.05)'
    } else {
      root.style.filter = 'none';
      root.style.transform = 'none';
    }
  }, [modalOpen]);
  console.log(store)


  const handlerNextTutorial = () => {
    if (!store.hasOwnProperty(tutorId + 1)) {
      setTutorId(null);
      setModalOpen(false);
      dispatch('articles/addMedal', [1, null, null]);
      dispatch('tutorial/finish');
      return false
    }
    if (store.hasOwnProperty(tutorId + 1)) {
      setTutorId(tutorId + 1);
    }
    //methods.goTo(tutorId);
  };

  useEffect(() => {
    function getCoords(elem) {
      if (elem) {
        let box = elem.getBoundingClientRect();

        return {
          top: box.top, //+ window.pageYOffset,
          left: box.left //+ window.pageXOffset,
        };
      }
    }

    function addStyles(element, styles) {
      for (let id in styles) {
        element.style[id] = styles[id];
      }
    }

    if (clonesNode) {
      clonesNode.forEach(node => {
        node.clone.remove();
      });
      clonesNode = [];
    }

    if (tutorId !== 1 && store[tutorId]) {
      store[tutorId].refs.forEach(ref => {
        const node = ref.current;
        if (node) {
          const clone = ref.current.cloneNode(true);
          clone.classList.add('highlight-elem');
          clonesNode.push({clone, cord: {
              top: `${getCoords(node).top}px`,
              left: `${getCoords(node).left}px`}});
        }
      });
      clonesNode.forEach((node) => {
        if (node.clone) {
          addStyles(node.clone, {
            position: 'fixed',
            top: node.cord.top,
            left: node.cord.left
          });
          document.body.appendChild(node.clone);
        }
      });
    }


  }, [tutorId]);

  const getOffset = (id, offset) => {
    setOffsetArticles(prev => ({...prev, [id]: offset}));
  };
  const scrollToArticle = (id) => {
    scroll.scrollTo(offsetArticles[id]);
    /*window.scrollTo({
      top: offsetArticles[id],
      behavior: 'smooth',
    });*/
  };

  const handlerStart = (cb) => {
    setFirstScreenShow(false);
    if (!tutorial) {
      setTimeout(() => {
        setModalOpen(true);
      }, 500);
    }
    //cb()
  };

  useMount(() => {
    const preload = document.querySelector('#preload');
    const percentDIV = document.querySelector('#percent');
    const five = document.querySelector('#five');
    const twentyfive = document.querySelector('#twentyfive');
    const fifty = document.querySelector('#fifty');
    const seventyfive = document.querySelector('#seventyfive');
    const onehundred = document.querySelector('#onehundred');

    const setChecked = (elem, percent) => () => {
      elem.checked = true;
      percentDIV.innerHTML = `${percent}%`;
    };

    setTimeout(() => {
      setTimeout(setChecked(five, 5), 100);
      setTimeout(setChecked(twentyfive, 25), 500);
      setTimeout(setChecked(fifty, 50), 900);
      setTimeout(setChecked(seventyfive, 75), 1300);
      setTimeout(setChecked(onehundred, 100), 1500);
      setTimeout(() => {
        preload.style.display = 'none';
      }, 2000);
    });
  });

  const style = {
    overlay: {
      background: 'none',
      padding: '0px !important',

    },
    modal: {
      background: 'red',
      boxShadow: '0 0 5px #000000',
      borderRadius: '5px',
      padding: '0px !important',
    },
  };


  return (
    <Wrapper>
      <Header>
        <Menu scrollToArticle={scrollToArticle}/>
        {/*<Inner>
          <Title>Citanka 8-9</Title>
          <Subtitle>Ljiljana Mitic-Roric</Subtitle>
          <Subtitle>Alija H. Dubocanin</Subtitle>
          <Button onClick={() => scrollToArticle(1)} size={[width, height]}><span>Start</span></Button>
        </Inner>
        */}
        <Fade when={firstScreenShow}>
          <FirstScreen>
            <Bg/>
            <Button onClick={handlerStart} size={[width, height]}><span>Start</span></Button>
          </FirstScreen>
        </Fade>
        {/*<BgContainer>
          <Bg/>
        </BgContainer>
        */}
      </Header>
      <Fade when={!firstScreenShow}>
        <Main>
          <MultipleArticles getOffset={getOffset} data={ArticlesData}/>
          <Systematization/>
        </Main>
      </Fade>
      <>
        <ReactModal onClose={() => setModalOpen(false)} open={modalOpen} center={true} showCloseIcon={false}
                    styles={style}>
          <ModalWrapper>
            <ModalInner>
              {store[tutorId] && <>{store[tutorId].content()}</>}
              <ModalNextButton onClick={handlerNextTutorial}>Dalje</ModalNextButton>
            </ModalInner>
          </ModalWrapper>
        </ReactModal>
      </>
    </Wrapper>
  );
};