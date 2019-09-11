import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useVideo, useFullscreen, useToggle} from 'react-use';

const icons = {
  play: require('../../assets/img/icons/play.png'),
  fullscreen: require('../../assets/img/icons/fullscreen.png'),
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
  margin-top: 30px;
`;

const PlayButton = styled.button`
  background: url(${icons.play});
  cursor: pointer;
  border: none;
  width: 91px;
  height: 91px;
  margin: 0 30px;
`;

const FullScreen = styled.button`
  background: url(${icons.fullscreen});
  cursor: pointer;
  border: none;
  width: 85px;
  height: 69px;
  margin-left: auto;
`;

const Rewind = styled.button`
  background: url(${icons.rewind});
  cursor: pointer;
  border: none;
  width: 59px;
  height: 41px;
`;

const RewindBack = styled.button`
  background: url(${icons.rewindBack});
  cursor: pointer;
  border: none;
  width: 59px;
  height: 41px;
`;

export const VideoInner = ({src = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'}) => {
  const [video, state, controls, ref] = useVideo(
    <video controls src={'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'}/>
  );
  const [show, toggle] = useToggle(false);
  const  [play, setPlay] = useState(false);
  const isFullscreen = useFullscreen(ref, show, {onClose: () => toggle(false)});

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
        <RewindBack onClick={() => controls.seek(state.time - 5)}/>
        <PlayButton state={play} onClick={handlerPlayVideo}/>
        <Rewind onClick={() => controls.seek(state.time + 5)}/>
        <FullScreen onClick={() => toggle()}/>
      </ControlPanel>
    </Wrapper>
  )
};

