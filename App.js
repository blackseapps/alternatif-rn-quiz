import React from 'react';
import Route from './src/Route';
import 'react-native-gesture-handler';
import configOSAndroidIOS from './src/utils/master/ConfigOSAndroidIOS';

configOSAndroidIOS();

const App = () => {
  return <Route></Route>;
};

export default App;
