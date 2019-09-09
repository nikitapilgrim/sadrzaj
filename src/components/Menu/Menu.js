import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {useMount} from 'react-use';
import {breakpoints} from '../../mixins/breakpoints';
import {Hamburger} from './Hamburger';
import {useClickAway} from 'react-use';
import UIfx from 'uifx'

const MouseClick = new UIfx(require('../../assets/sounds/fx/mouseclick.mp3'));

import ArticleData from '../../Data/Articles';

const Wrapper = styled.div`
  position: fixed;
  right: 2vw;
  top: 3vh;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Raleway", sans-serif;
  box-shadow: 0 1px 1px 1px #000000;
  border-radius: 5px;
  border: 1px solid #a3622f;
  background-color: #6e3c15;
  padding: 7px 15px 7px 14px;
  width: ${props => props.hidden ? 'auto' : '95%'};
  @media ${breakpoints.tablet} {
    width: auto;
  }
`;

const Logo = styled.div`
  text-shadow: 0 3px 0 #000000;
  color: #ffffff;
  font-size: 48px;
  font-weight: 900;
  text-transform: uppercase;
`;

const HamburgerWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const MenuHidden = styled.ul`
  display: ${props => props.hidden ? 'none' : 'block'};
  padding: 0;
`;

const Title = styled.span`
  position: relative;
  display: block;
  text-shadow: 0 2px 0 #000000;
  color: #ffffff;
  font-size: 22px;
  @media ${breakpoints.desktop} {
    font-size: 48px;
  }
  font-weight: 900;
  line-height: 60px;
  
  &:before, &:after {
    display: block;
    content: '';
    width: 100% ;
    height: 1px;
  }
  &:before {
    position: absolute;
    bottom: 0;
    background-color: #fdfdfd;

  }
  &:after {
    position: relative;
    bottom: -2px;
    background-color: #000000;
  }
`;

const Subtitle = styled.span`
  text-shadow: 0 2px 0 #000000;
  color: #ffffff;
  font-weight: 500;
  font-size: 36px;
  @media ${breakpoints.tablet} {
     font-size: 16px;
  }
`;

const Li = styled.li`
  list-style: none; 
  padding-bottom: 5px;
  padding-top: 0px;
  padding-left: 20px;
  cursor: pointer;
  @media ${breakpoints.desktop} {
    padding-bottom: 10px;
    padding-top: 40px;
    padding-left: 40px;
  }
`;

const SubmenuWrapper = styled.ol`
  max-height: ${props => props.hiddenSubmenu ? '0' : '500px'};
  transition: max-height 0.2s ease-out;
  overflow: hidden;
  margin: 0;
  padding: 0;
  list-style: none; 
  padding-top: 20px;
  @media ${breakpoints.desktop} {
    padding-top: 40px;
  }
`;

const MenuItem = ({title, submenu, scrollToArticle}) => {
  const [submenuState, setSubmenuState] = useState(true);

  const handlerScroll = (id) => () => {
    scrollToArticle(id);
    MouseClick.play();
  };

  const handlerClick = () => {
    setSubmenuState(!submenuState);
    MouseClick.play();
  };

  return (
    <Li>
      <Title className={'menu__main'} onClick={handlerClick}>{title}</Title>
      <SubmenuWrapper hiddenSubmenu={submenuState}>{submenu.map((item) => {
          return (
              <Li key={item.id}>
                <Subtitle onClick={handlerScroll(item.id)}>{item.title}</Subtitle>
              </Li>
          );
        },
      )}
      </SubmenuWrapper>
    </Li>
  );
};


const convertTitles = (title) => {
  const titleConverter = [
    {
      title: 'Umjetnička književnost - Roman',
      convert: 'Roman',
    },
  ];
  const result = titleConverter.find((t) => t.title === title);
  return result && result.convert || title;
};

export const Menu = ({scrollToArticle}) => {
  const ref = useRef(null);
  const [menuHidden, setMenuHidden] = useState(true);
  const [menuItems, setMenuItems] = useState(null);

  useClickAway(ref, (e) => {
    setMenuHidden(true)
  });

  const handlerClickMenu = (e) => {
    if (!e.target.classList.contains('menu__main')) {
      setMenuHidden(!menuHidden);
    }
    MouseClick.play();
  };

  useMount(() => {
    const items = ArticleData.reduce((acc, article) => {
      const title = article.title;
      const convertedTitle = convertTitles(title);
      const check = acc.findIndex(item => item.title === title);
      if (check > -1) {
        if (acc[check].hasOwnProperty('submenu')) {
          acc[check].submenu.push({
            title: article.subtitle,
            id: article.id,
          });
        } else {
          acc[check] = {...acc[check], ...{submenu: []}};
        }
      }
      if (check === -1) {
        const submenu = [{
          title: article.subtitle,
          id: article.id,
        }];
        acc.push({title, submenu});
      }
      return acc;
    }, []);
    setMenuItems(items);
  });

  return (
    <Wrapper ref={ref} hidden={menuHidden} onClick={handlerClickMenu}>
      <HamburgerWrapper>
        <Logo>SADRŽAJ</Logo>
        <Hamburger/>
      </HamburgerWrapper>
      <MenuHidden hidden={menuHidden}>
        {menuItems && menuItems.map((item, index) => <MenuItem scrollToArticle={scrollToArticle} key={index}
                                                               title={item.title} submenu={item.submenu}/>)}
      </MenuHidden>
    </Wrapper>
  );
};
