import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import useAudio from 'react-use/lib/useAudio';
import {AudioSpectrum} from '../Spectrum'
import FastBack from '../../assets/svg/fast_back.svg';
import PlaySVG from '../../assets/svg/play.svg';
import PauseSVG from '../../assets/svg/pause.svg';
import FastForward from '../../assets/svg/fast_forward.svg';

import UIfx from 'uifx'
const mouseClick = new UIfx(require('../../assets/sounds/fx/mouseclick.mp3'));

const Wrapper = styled.div`
  position: relative;
  max-width: 620px;
`;

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
`;

const PlayButton = styled.button`
  cursor: pointer;
  border: none;
  width: 91px;
  height: 91px;
  margin: 0 30px;
  background: none;
`;

const Rewind = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  width: 59px;
  height: 41px;
`;

const RewindBack = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  width: 59px;
  height: 41px;
`;

export const InnerAudio = ({data, close}) => {
  const [audio, state, controls, ref] = useAudio({
    src: data,
    autoPlay: true,
    controls: true,
    id: 'audio-modal',
  });

  const  [play, setPlay] = useState(false);

  const handlerPlayVideo = () => {
    mouseClick.play();
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

  const options = {
    id: 'audio-canvas',
    height: 200,
    width: 300,
    audioId: 'audio-modal',
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
  };

  return (
    <Wrapper>
      <AudioContainer>
        <Audio>
          {audio}
        </Audio>
      </AudioContainer>
      <AudioSpectrum {...options}/>
      <ControlPanel>
        <RewindBack onClick={() => {
          mouseClick.play();
          controls.seek(state.time - 5)
        }}>
          <FastBack/>
        </RewindBack>
        <PlayButton onClick={handlerPlayVideo}>
          {play ? <PlaySVG/> : <PauseSVG/>}
        </PlayButton>
        <Rewind onClick={() => {
          mouseClick.play();
          controls.seek(state.time + 5);
        }}>
          <FastForward/>
        </Rewind>
      </ControlPanel>
    </Wrapper>
  );
};