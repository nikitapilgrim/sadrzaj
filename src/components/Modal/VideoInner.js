import React, {useState} from 'react';
import styled from 'styled-components';
import {breakpoints} from '../../mixins/breakpoints';
import {useVideo} from 'react-use';
import PauseSVG from '../../assets/svg/pause.svg';
import PlaySVG from '../../assets/svg/play.svg';
import FastBack from '../../assets/svg/fast_back.svg';
import FastForward from '../../assets/svg/fast_forward.svg';
import {FX} from '../../assets/sounds/fx/index';

const Wrapper = styled.div`
  
`;

const VideoWrapper = styled.div`
   position: relative;
   
   video {
    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    max-width: 100%;
   }
  &:before, &:after{
    height: 99%;
    content:"";
    position:absolute;
    z-index:-1;
    box-shadow:0 0 20px rgba(0,0,0,0.8);
    top:0;
    bottom:0;
    left:10px;
    right:10px;
    border-radius:100px / 10px;
    }
`;

const ControlPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  transform: scale(0.7);
  @media ${breakpoints.tablet} {
    width: auto;
      transform: scale(1);
  }
  
  svg {
    filter:drop-shadow(2px 3px 5px black)
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

export const VideoInner = ({src}) => {
  const [video, state, controls, ref] = useVideo(
    <video controls src={src}/>
  );
  const  [play, setPlay] = useState(true);

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

  return (
    <Wrapper>
      <VideoWrapper>
        {video}
      </VideoWrapper>
      <ControlPanel>
        <RewindBack onClick={() => {
          FX.mouseClick.play();
          controls.seek(state.time - 5)
        }}>
          <FastBack/>
        </RewindBack>
        <PlayButton onClick={handlerPlayVideo}>
          {play ? <PlaySVG/> : <PauseSVG/>}
        </PlayButton>
        <Rewind onClick={() => {
          FX.mouseClick.play();
          controls.seek(state.time + 5);
        }}>
          <FastForward/>
        </Rewind>
      </ControlPanel>
    </Wrapper>
  );
};

