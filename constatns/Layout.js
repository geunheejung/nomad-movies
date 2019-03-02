// 레이아웃 관련 상수 값 모음
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen'); // screen의 가로 세로값

console.log(width, height);

export default {
  width,
  height,
}