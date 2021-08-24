import {DefaultTheme} from '@react-navigation/native';

const DarkTheme = {
  ...DefaultTheme,
  Colors: {
    ...DefaultTheme.colors,

    // Project First Color
    primary: '#FFFFFF',
    secondary: '#F5953C',
    tertiary: '#E4DECE',

    //Project White Colors
    white: '#FFFFFF',

    //Project Black Colors
    black: '#000000',
  },
  Images: {},
};

export default DarkTheme;
