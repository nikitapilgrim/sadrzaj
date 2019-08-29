import React, {useState} from 'react';
import styled from 'styled-components';

import {Hamburger} from './Hamburger';

const Wrapper = styled.div`
  position: relative;
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
`;

const data = [
  {
    title: 'Narodna književnost',
    submenu: [
      {
        title: 'Majka Fatu kroz tri gore viče',
      },
      {
        title: 'Ljubavni rastanak',
      },
      {
        title: 'Smrt Omera i Majrime',
      },
    ],
  },
  {
    title: 'Roman',
    submenu: [
      {title: 'Turtuza i Šeh Meco'},
      {title: 'Legenda o Ali-Paši'},
      {title: 'Zlatna ptica'},
      {title: 'Starac i more'},
      {title: 'Lovac u žitu'},
      {title: '2001: Odiseja u svemiru'},
      {title: 'Otok plavih dupina'},
    ],
  },
  {
    title: 'Putopis',
    submenu: [
      {title: 'Pisma iz Norveške'},
      {title: 'Nekrolog jednoj čaršiji'},
      {title: 'Održa se kao na Drini ćuprija'},
    ],
  },
  {
    title: 'Lirske pjesme',
    submenu: [
      {title: 'Zavidim jedino pužu'},
      {title: 'Kiša u Sarajevu'},
      {title: 'Tarih o gradnji mosta u Mostaru'},
      {title: 'Gazel o Mostaru'},
    ],
  },
  {
    title: 'Pripovijetka',
    submenu: [
      {title: 'Knjiga'},
      {title: 'Bašta sljezove boje'},
      {title: 'Moj djed'},
      {title: 'Špijun'},
      {title: 'Ujka Filip'},
      {title: 'Breza'},
      {title: 'Suze kojih se stidim'},
      {title: 'Sećanje na šarenu pticu'},
      {title: 'Šala'},
    ],
  },
  {
    title: 'Drama',
    submenu: [
      {title: 'Hasanagica'},
      {title: 'Jazavac pred sudom'},
    ],
  },
  {
    title: 'Medijska kultura',
    submenu: [],
  },
];

const Title = styled.span`
  position: relative;
  display: block;
  text-shadow: 0 2px 0 #000000;
  color: #ffffff;
  font-size: 48px;
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
  font-size: 36px;
  font-weight: 500;
`;

const Li = styled.li`
  list-style: none; 
  li {
    padding-top: 40px;
    padding-left: 40px;
  }
`;

const SubmenuWrapper = styled.ol`
  display: ${props => props.hidden ? 'none' : 'block'}
`;

const MenuItem = ({title, submenu}) => {
  const [submenuState, setSubmenuState] = useState(true);

  return (
    <Li>
      <Title onClick={() => setSubmenuState(!submenuState)}>{title}</Title>
      <SubmenuWrapper hidden={submenuState}>{submenu.map(item =>
        <Li><Subtitle>{item.title}</Subtitle></Li>)}
      </SubmenuWrapper>
    </Li>
  );
};

export const Menu = () => {
  const [menuHidden, setMenuHidden] = useState(true);

  return (
    <Wrapper>
      <HamburgerWrapper>
        <Logo>SADRŽAJ</Logo>
        <Hamburger onClick={() => setMenuHidden(!menuHidden)}/>
      </HamburgerWrapper>
      <MenuHidden hidden={menuHidden}>
        {data.map(item => <MenuItem title={item.title} submenu={item.submenu}/>)}
      </MenuHidden>
    </Wrapper>
  );
};