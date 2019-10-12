import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SoundOn from '../../assets/svg/musicOn.svg';
import SoundOff from '../../assets/svg/musicOff.svg';
import music from '../../assets/sounds/background_music.aac';
import ReactHowler from 'react-howler';

const Wrapper = styled.div`
  height: 50px;
  width: 50px;
  svg {
    filter:drop-shadow(2px 3px 5px black)
  }
  .musicOn_svg__color {
     fill: white;
  }
  .musicOff_svg__color {
     fill: white;
  }
`;

export const Sound = React.memo(() => {
  const [play, setPlay] = useState(false);

  const handlerClickPage = () => {

  };

  useEffect(() => {
    window.addEventListener('click', handlerClickPage);
    return () => {
      window.removeEventListener('click', handlerClickPage);
    };
  }, []);

  return (
    <Wrapper onClick={() => {
      if (play) {
        setPlay(false);
      } else {
        setPlay(true);
      }
    }}>
      {!play ? <SoundOff/> : <SoundOn/>}
      {<ReactHowler
        src={music}
        playing={play}
        loop={true}
      />}
    </Wrapper>
  );
});