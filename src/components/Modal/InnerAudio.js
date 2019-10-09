import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import useAudio from 'react-use/lib/useAudio';
import {breakpoints} from '../../mixins/breakpoints';
import {AudioSpectrum} from '../Spectrum';
import FastBack from '../../assets/svg/fast_back.svg';
import PlaySVG from '../../assets/svg/play.svg';
import PauseSVG from '../../assets/svg/pause.svg';
import FastForward from '../../assets/svg/fast_forward.svg';
import {UIFX} from '../../assets/sounds/fx/index';

const Wrapper = styled.div`
  position: relative;
  max-width: 620px;
`;

const CanvasWrapper = styled.div`
   canvas {
    width: 100%;
   }
`

const Audio = styled.div`
  display: none;
`;

const AudioContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const ControlPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  transform: scale(0.7);
  svg {
    filter:drop-shadow(2px 3px 5px black)
  }
   @media ${breakpoints.tablet} {
      transform: scale(1);
  }
`;

const PlayButton = styled.button`
  cursor: pointer;
  border: none;
  width: 91px;
  height: 91px;
  margin: 0 30px;
  background: none;
  outline: none;
`;

const Rewind = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  width: 59px;
  height: 41px;
  outline: none;
`;

const RewindBack = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  width: 59px;
  height: 41px;
  outline: none;
`;

export const InnerAudio = ({data, close}) => {
  const [audio, state, controls, ref] = useAudio({
    src: data,
    autoPlay: true,
    controls: true,
    id: 'audio-modal',
  });

  const [options, setOptions] = useState(null);


  const  [play, setPlay] = useState(false);

  const handlerPlayVideo = () => {
    UIFX.mouseClick();
    if (play) {
      controls.play();
      setPlay(!play);
      return false
    }
    if (!play) {
      controls.pause();
      setPlay(!play);
      return false
    }
  };

  useEffect(() => {
    if (ref.current) {
      setOptions({
        id: 'audio-canvas',
        height: 200,
        width: 300,
        audioId: 'audio-modal',
        audioEle: ref.current,
        capColor: 'transparent',
        capHeight: 2,
        meterWidth: 2,
        meterCount: 512,
        gap: 4,
        meterColor: [
          {stop: 0, color: '#FFF'},
          {stop: 0.5, color: '#FFF'},
          {stop: 1, color: '#FFF'},
        ],
      })
    }
  }, [ref]);


  return (
    <Wrapper>
      <AudioContainer>
        <Audio>
          {audio}
        </Audio>
      </AudioContainer>
      <CanvasWrapper>
        {ref.current && <AudioSpectrum {...options}/>}
      </CanvasWrapper>
      <ControlPanel>
        <RewindBack onClick={() => {
          UIFX.mouseClick();
          controls.seek(state.time - 5)
        }}>
          <FastBack/>
        </RewindBack>
        <PlayButton onClick={handlerPlayVideo}>
          {play ? <PlaySVG/> : <PauseSVG/>}
        </PlayButton>
        <Rewind onClick={() => {
          UIFX.mouseClick();
          controls.seek(state.time + 5);
        }}>
          <FastForward/>
        </Rewind>
      </ControlPanel>
    </Wrapper>
  );
};