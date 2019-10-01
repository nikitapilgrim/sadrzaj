import UIfx from 'uifx';
const mouseClick = new UIfx(require('./mouseclick.mp3'));
const correctAnswer = new UIfx(require('./correct-answer.aac'));
const wrongAnswer = new UIfx(require('./wrong-answer.aac'));

export const FX = {
  mouseClick,
  correctAnswer,
  wrongAnswer,
};