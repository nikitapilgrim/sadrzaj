import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import useAudio from 'react-use/lib/useAudio';
import SoundOn from '../../assets/svg/musicOn.svg'
import SoundOff from '../../assets/svg/musicOff.svg'
import music from '../../assets/sounds/background_music.aac'

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
  const [init, setInit] = useState(false);
  const [audio, stateAudio, controls, ref] = useAudio({
    src: music,
    autoPlay: true,
    preload: 'auto',
    loop: true
  });

  const handlerClickPage = () => {
    if (stateAudio.paused && init) {
      controls.play();
      setInit(true);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handlerClickPage);
    return () => {
      window.removeEventListener('click', handlerClickPage);
    };
  }, []);

  return (
    <Wrapper onClick={() => {
      if (stateAudio.paused) {
        controls.play();
      } else {
        controls.pause();
      }
    }}>
      {stateAudio.paused ? <SoundOff/> : <SoundOn/>}
      {audio}
    </Wrapper>
  );
});