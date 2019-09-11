import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useVideo} from 'react-use';
import PauseSVG from '../../assets/svg/pause.svg'
import PlaySVG from '../../assets/svg/play.svg'
import FastBack from '../../assets/svg/fast_back.svg';
import FastForward from '../../assets/svg/fast_forward.svg';

const icons = {
  play: require('../../assets/img/icons/play.png'),
  rewind: require('../../assets/img/icons/rewind.png'),
  rewindBack: require('../../assets/img/icons/rewind_back.png'),
};

const Wrapper = styled.div`
  
`;

const VideoWrapper = styled.div`
  
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

export const VideoInner = ({src = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'}) => {
  const [video, state, controls, ref] = useVideo(
    <video controls src={'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'}/>
  );
  const  [play, setPlay] = useState(false);

  const handlerPlayVideo = () => {
    setPlay(state => {
      const action = {
        true: controls.play,
        false: controls.pause
      };
      action[!state]();
    });
    setPlay(!play)
  };

  return (
    <Wrapper>
      <VideoWrapper>
        {video}
      </VideoWrapper>
      <ControlPanel>
        <RewindBack onClick={() => controls.seek(state.time - 5)}>
          <FastBack/>
        </RewindBack>
        <PlayButton state={play} onClick={handlerPlayVideo}>
          {play ? <PlaySVG/> : <PauseSVG/>}
        </PlayButton>
        <Rewind onClick={() => controls.seek(state.time + 5)}>
          <FastForward/>
        </Rewind>
      </ControlPanel>
    </Wrapper>
  );
};

