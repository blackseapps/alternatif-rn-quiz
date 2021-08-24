import {useTheme} from '@react-navigation/native';

export function selectBackgroundColor(headerColor, Colors) {
  switch (headerColor) {
    case Colors.primary:
      return Colors.tertiary;
    case Colors.secondary:
      return Colors.white30;
    case Colors.tertiary:
      return Colors.primary;
    case Colors.lightGray:
      return Colors.white;
    case Colors.background:
      return Colors.lightGray;
    default:
      return Colors.tertiary;
  }
}

export function selectIconColor(headerColor, Colors) {
  switch (headerColor) {
    case Colors.white:
      return Colors.white;
    case Colors.secondary:
      return Colors.white;
    case Colors.lightGray:
      return Colors.white;
     
    default:
      return Colors.white;
  }
}
