import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import WalletScreen from '../screens/wallet/WalletScreen';
import MyCardsScreen from '../screens/mycard/MyCardsScreen';
import BalanceScreen from '../screens/balance/BalanceScreen';
import HistoryScreen from '../screens/history/HistoryScreen';
import BottomNavigator from './BottomNavigator';
import SplashSScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

const MyCardsStack = createStackNavigator();
const WalletsStack = createStackNavigator();
const BalanceStack = createStackNavigator();
const HistoryStack = createStackNavigator();

function StackNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{
        headerShown: false,
        cardOverlayEnabled: true,
        cardStyle: {backgroundColor: 'transparent'},
      }}>
      <RootStack.Screen name="SplashScreen" component={SplashSScreen} />
      <RootStack.Screen name="AuthStack" component={StackAuth} />
      <RootStack.Screen name="BottomNavigation" component={BottomNavigator} />
    </RootStack.Navigator>
  );
}

export function StackAuth() {
  return (
    <>
      {_transparentStatusBar}
      <AuthStack.Navigator initialRouteName="LoginScreen">
        <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      </AuthStack.Navigator>
    </>
  );
}

export function StackWallets() {
  return (
    <WalletsStack.Navigator>
      <WalletsStack.Screen name="WalletsScreen" component={WalletScreen} />
    </WalletsStack.Navigator>
  );
}

export function StackMyCards() {
  return (
    <MyCardsStack.Navigator>
      <MyCardsStack.Screen name="MyCardsScreen" component={MyCardsScreen} />
    </MyCardsStack.Navigator>
  );
}

export function StackBalance() {
  return (
    <BalanceStack.Navigator>
      <BalanceStack.Screen name="BalanceScreen" component={BalanceScreen} />
    </BalanceStack.Navigator>
  );
}

export function StackHistory() {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen name="HistoryScreen" component={HistoryScreen} />
    </HistoryStack.Navigator>
  );
}

export default StackNavigator;

const _transparentStatusBar = () => {
  return (
    <StatusBar
      barStyle="light-content"
      translucent
      backgroundColor="transparent"
    />
  );
};
