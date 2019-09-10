import React, {useRef, useEffect, useState} from 'react';
import useMount from 'react-use/lib/useMount'
import styled from 'styled-components';
import WaveSurfer from 'wavesurfer.js';
import sample from '../assets/sounds/pronunciation/testvoice.aac'

const Wrapper = styled.div`
  
`;

export const Wave = () => {
  const ref = useRef(null);
  const [waveSurfer, setWaveSurfer] = useState(null);
  const [analyser, setAnalyser] = useState(null);
  const [frequency, setFrequency] = useState(null);

  const handlerAudioProcess = fq => (e) => {
    console.log(fq)
  };

  useMount(() => {
    setWaveSurfer(WaveSurfer.create({
      container: ref.current
    }));
  });

  useEffect(() => {
    if (waveSurfer) {
      waveSurfer.load(sample);
      const analyser = waveSurfer.backend.analyser;
      const frequencyData = new Uint8Array(analyser.frequencyBinCount);
      setAnalyser(analyser);
      setFrequency(frequencyData);
      //waveSurfer.on('audioprocess', handlerAudioProcess(frequencyData))
      //array to store the frequency data
      //@see https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteFrequencyData
    }
  }, [waveSurfer]);

  useEffect(() => {
    if (analyser) {
      const analyser = waveSurfer.backend.analyser;
      const frequencyData = new Uint8Array(analyser.frequencyBinCount);
      waveSurfer.on('audioprocess', handlerAudioProcess(frequencyData))
    }
  }, [analyser]);

  return (
    <Wrapper ref={ref}>
      <button onClick={() => waveSurfer.playPause()}>start</button>

    </Wrapper>
  )
};
