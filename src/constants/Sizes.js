import {Platform} from 'react-native';
import {wp, hp} from './Dimensions';

export function FontSize(size) {
  return Platform.OS === 'ios' ? wp(size) : hp(size);
}
