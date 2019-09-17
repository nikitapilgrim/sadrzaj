import React, {Component} from 'react';
import styled from 'styled-components';

const NotCanvas = styled.div`

`

const Elem = styled.div`

`

export class AudioSpectrum extends Component {
  constructor(props) {
    super(props);
    this.animationId = null;
    this.audioContext = null;
    this.audioEle = null;
    this.audioCanvas = null;
    this.playStatus = null;
    this.canvasId = this.props.id || this.getRandomId(50);
    this.mediaEleSource = null;
    this.analyser = null;
  }

  getRandomId(len) {
    let str = '1234567890-qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let strLen = str.length;
    let res = '';
    for (let i = 0; i < len; i++) {
      let randomIndex = Math.floor((Math.random() * strLen));
      res += str[randomIndex];
    }
    return res;
  }

  componentDidMount() {
    this.prepareElements();
    this.initAudioEvents();
  }

  initAudioEvents = () => {
    let audioEle = this.audioEle;
    if (audioEle) {
      audioEle.onpause = (e) => {
        this.playStatus = 'PAUSED';
      };
      audioEle.onplay = (e) => {
        this.playStatus = 'PLAYING';
        this.prepareAPIs();
        let analyser = this.setupAudioNode(this.audioEle);
        this.drawSpectrum(analyser);
      };
    }
  };
  drawSpectrum = (analyser) => {
    let cwidth = this.audioCanvas.width;
    let cheight = this.audioCanvas.height - this.props.capHeight;
    let capYPositionArray = []; // store the vertical position of hte caps for the preivous frame
    let ctx = this.audioCanvas.getContext('2d');
    ctx.lineCap = 'round';
    let gradient = ctx.createLinearGradient(0, 0, 0, 300);

    if (this.props.meterColor.constructor === Array) {
      let stops = this.props.meterColor;
      let len = stops.length;
      for (let i = 0; i < len; i++) {
        gradient.addColorStop(stops[i]['stop'], stops[i]['color']);
      }
    } else if (typeof this.props.meterColor === 'string') {
      gradient = this.props.meterColor;
    }

    let drawMeter = () => {
      let array = new Uint8Array(analyser.frequencyBinCount); // item value of array: 0 - 255
      analyser.getByteFrequencyData(array);
      if (this.playStatus === 'PAUSED') {
        for (let i = array.length - 1; i >= 0; i--) {
          array[i] = 0;
        }
        let allCapsReachBottom = !capYPositionArray.some(cap => cap > 0);
        if (allCapsReachBottom) {
          ctx.clearRect(0, 0, cwidth, cheight + this.props.capHeight);
          cancelAnimationFrame(this.animationId); // since the sound is top and animation finished, stop the requestAnimation to prevent potential memory leak,THIS IS VERY IMPORTANT!
          return;
        }
      }
      let step = Math.round(array.length / this.props.meterCount); // sample limited data from the total array
      ctx.clearRect(0, 0, cwidth, cheight + this.props.capHeight);
      for (let i = 0; i < this.props.meterCount; i++) {
        let value = array[i * step];
        if (capYPositionArray.length < Math.round(this.props.meterCount)) {
          capYPositionArray.push(value);
        }
        ctx.fillStyle = this.props.capColor;
        // draw the cap, with transition effect
        if (value < capYPositionArray[i]) {
          // let y = cheight - (--capYPositionArray[i])
          //let preValue = --capYPositionArray[i];
          //let y = (270 - preValue) * cheight / 270;
          //ctx.fillRect(i * (this.props.meterWidth + this.props.gap), y, this.props.meterWidth, this.props.capHeight);
        } else {
          // let y = cheight - value
          let y = (270 - value) * cheight / 270;
          //ctx.fillRect(i * (this.props.meterWidth + this.props.gap), y, this.props.meterWidth, this.props.capHeight);
          //capYPositionArray[i] = value;
        }


        const height = 50;
        // let y = cheight - value + this.props.capHeight
        let y = (270 - value) * (cheight) / 270 + this.props.capHeight;
        let g = (270 - value) * (cheight) / 100 + this.props.capHeight;
        y = (cheight / 2 - value / 2);
        g = (cheight / 2 + value / 3) + height;
        ctx.fillStyle = 'black';
        ctx.fillRect(i * (this.props.meterWidth + this.props.gap), y, 2, value + 2 || 4); // the meter
        ctx.fillStyle = gradient; // set the filllStyle to gradient for a better look
        ctx.fillRect(i * (this.props.meterWidth + this.props.gap), y, 2, value || 2); // the meter


        //ctx.fillRect(i * (this.props.meterWidth + this.props.gap), g, this.props.meterWidth, height); // the meter
        //ctx.fillRect(i * -(this.props.meterWidth - this.props.gap), y, this.props.meterWidth, cheight); // the meter
      }
      this.animationId = requestAnimationFrame(drawMeter);
    };
    this.animationId = requestAnimationFrame(drawMeter);
  };
  setupAudioNode = (audioEle) => {
    if (!this.analyser) {
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.smoothingTimeConstant = 0.8;
      this.analyser.fftSize = 2048;
    }

    if (!this.mediaEleSource) {
      this.mediaEleSource = this.audioContext.createMediaElementSource(audioEle);
      this.mediaEleSource.connect(this.analyser);
      this.mediaEleSource.connect(this.audioContext.destination);
    }

    return this.analyser;
  };
  prepareElements = () => {
    let {audioId, audioEle} = this.props;
    if (!audioId && !audioEle) {
      console.log('target audio not found!');
      return;
    } else if (audioId) {
      this.audioEle = document.getElementById(audioId);
    } else {
      this.audioEle = audioEle;
    }

    this.audioCanvas = document.getElementById(this.canvasId);
  };
  prepareAPIs = () => {
    // fix browser vender for AudioContext and requestAnimationFrame
    window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
    window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
    window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame;
    try {
      this.audioContext = new window.AudioContext(); // 1.set audioContext
    } catch (e) {
      // console.error('!Your browser does not support AudioContext')
      console.log(e);
    }
  };

  render() {
    return (
      <>
        <canvas id={this.canvasId} width={this.props.width} height={this.props.height}></canvas>
      </>
    );
  }
}

AudioSpectrum.defaultProps = {
  width: 300,
  height: 200,
  capColor: '#FFF',
  capHeight: 2,
  meterWidth: 2,
  meterCount: 40 * (2 + 2),
  meterColor: [
    {stop: 0, color: '#f00'},
    {stop: 0.5, color: '#0CD7FD'},
    {stop: 1, color: 'red'},
  ],
  gap: 10, // gap between meters
};

