import {DefaultTheme} from '@react-navigation/native';

const DarkTheme = {
  ...DefaultTheme,
  Colors: {
    ...DefaultTheme.colors,

    // Project First Color
    primary: '#2C2C58',
    secondary: '#FFFFFF',
    tertiary: '#8C8C91',

    //Project White Colors
    white: '#FFFFFF',

    //Project Black Colors
    black: '#000000',
  },
  Images: {},
};

export default DarkTheme;
