import React, {useState} from 'react';
import useMount from 'react-use/lib/useMount';

const getRandomId = (len) => {
  let str = '1234567890-qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  let strLen = str.length;
  let res = '';
  for (let i = 0; i < len; i++) {
    let randomIndex = Math.floor((Math.random() * strLen));
    res += str[randomIndex];
  }
  return res;
};

export const AudioWave = (props) => {
  const [animationId, setAnimationId] = useState(null);
  const [audioContext, setAudioContext] = useState(null);
  const [audioEle, setAudioEle] = useState(null);
  const [audioCanvas, setAudioCanvas] = useState(null);
  const [playStatus, setPlayStatus] = useState(null);
  const [canvasId, setCanvasId] = useState(getRandomId(50));
  const [mediaEleSource, setMediaEleSource] = useState(null);
  const [analyser, setAnalyser] = useState(null);


  useMount(() => {
      prepareElements();
      initAudioEvents();
  });

  const initAudioEvents = () => {
    if (audioEle) {
      audioEle.onpause = (e) => {
        setPlayStatus('PAUSED')
      };
      audioEle.onplay = (e) => {
        setPlayStatus('PLAYING')
        prepareAPIs();
        let analyser = setupAudioNode(audioEle);
        drawSpectrum(analyser);
      };
    }
  };

  const drawSpectrum = (analyser) => {
    let cwidth = audioCanvas.width;
    let cheight = audioCanvas.height - props.capHeight;
    let capYPositionArray = [];
    let ctx = audioCanvas.getContext('2d');
    let gradient = ctx.createLinearGradient(0, 0, 0, 300);

    if (props.meterColor.constructor === Array) {
      let stops = props.meterColor;
      let len = stops.length;
      for (let i = 0; i < len; i++) {
        gradient.addColorStop(stops[i]['stop'], stops[i]['color']);
      }
    } else if (typeof props.meterColor === 'string') {
      gradient = props.meterColor;
    }

    let drawMeter = () => {
      let array = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(array);
      if (playStatus === 'PAUSED') {
        for (let i = array.length - 1; i >= 0; i--) {
          array[i] = 0;
        }
        let allCapsReachBottom = !capYPositionArray.some(cap => cap > 0);
        if (allCapsReachBottom) {
          ctx.clearRect(0, 0, cwidth, cheight + props.capHeight);
          cancelAnimationFrame(animationId);
          return;
        }
      }
      let step = Math.round(array.length / props.meterCount); // sample limited data from the total array
      ctx.clearRect(0, 0, cwidth, cheight + props.capHeight);
      for (let i = 0; i < props.meterCount; i++) {
        let value = array[i * step];
        if (capYPositionArray.length < Math.round(props.meterCount)) {
          capYPositionArray.push(value);
        }

        ctx.fillStyle = props.capColor;
        // draw the cap, with transition effect
        if (value < capYPositionArray[i]) {
          // let y = cheight - (--capYPositionArray[i])
          let preValue = --capYPositionArray[i];
          let y = (270 - preValue) * cheight / 270;
          ctx.fillRect(i * (props.meterWidth + props.gap), y, props.meterWidth, props.capHeight);
        } else {
          // let y = cheight - value
          let y = (270 - value) * cheight / 270;
          ctx.fillRect(i * (props.meterWidth + props.gap), y, props.meterWidth, props.capHeight);
          capYPositionArray[i] = value;
        }

        ctx.fillStyle = gradient; // set the filllStyle to gradient for a better look

        // let y = cheight - value + this.props.capHeight
        let y = (270 - value) * (cheight) / 270 + props.capHeight;
        ctx.fillRect(i * (props.meterWidth + props.gap), y, props.meterWidth, cheight); // the meter
      }
      setAnimationId(requestAnimationFrame(drawMeter))
    };
    setAnimationId(requestAnimationFrame(drawMeter))
  };

  const setupAudioNode = (audioEle) => {
    if (!analyser) {
      setAnalyser(audioContext.createAnalyser());
      analyser.smoothingTimeConstant = 0.8;
      analyser.fftSize = 2048;
    }

    if (!mediaEleSource) {
      setMediaEleSource(audioContext.createMediaElementSource(audioEle));
      mediaEleSource.connect(analyser);
      mediaEleSource.connect(audioContext.destination);
    }

    return analyser;
  };
  const prepareElements = () => {
    let {audioId, audioEle} = props;
    if (!audioId && !audioEle) {
      console.log('target audio not found!');
      return;
    } else if (audioId) {
      setAudioEle(document.getElementById(audioId))
    } else {
      setAudioEle(audioEle);
    }

    setAudioCanvas(document.getElementById(canvasId));
  };

  const prepareAPIs = () => {
    // fix browser vender for AudioContext and requestAnimationFrame
    window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
    window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
    window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame;
    try {
      setAudioContext(new window.AudioContext()); // 1.set audioContext
    } catch (e) {
      // console.error('!Your browser does not support AudioContext')
      console.log(e);
    }
  };


  return (
    <canvas id={canvasId} width={props.width} height={props.height}/>
  );
};