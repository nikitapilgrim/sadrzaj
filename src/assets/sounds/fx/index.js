import lowLag from '../../../libs/lowlag';
import 'soundmanager2';

lowLag.init();
lowLag.load([require('./mouseclick.mp3')],"mouseclick");
lowLag.load([require('./correct-answer.aac')],"correctAnswer");
lowLag.load([require('./wrong-answer.aac')],"wrongAnswer");
lowLag.load([require('./hint_bell.aac')],"hintbell");

export const UIFX = {
    mouseClick: () => lowLag.play('mouseclick'),
    correctAnswer: () => lowLag.play('correctAnswer'),
    wrongAnswer: () => lowLag.play('wrongAnswer'),
    hintbell: () => lowLag.play('hintbell'),
};