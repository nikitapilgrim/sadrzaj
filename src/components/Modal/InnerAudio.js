import React, {useEffect} from 'react';
import styled from 'styled-components';
import AudioSpectrum from 'react-audio-spectrum';
import useAudio from 'react-use/lib/useAudio';

const Wrapper = styled.div`
  position: relative;
  max-width: 620px;
`;

const AudioContainer = styled.div`
  position: relative;
  z-index: 2;
`;

export const InnerAudio = ({data, close}) => {
  const [audio, state, controls, ref] = useAudio({
    src: data,
    autoPlay: true,
    controls: true,
    id: 'audio-modal',
  });

  const options = {
    id: 'audio-canv',
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
        {audio}
      </AudioContainer>
      <AudioSpectrum {...options}/>
      <AudioSpectrum {...options}/>
    </Wrapper>
  );
};