import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import BottomNavigator from './BottomNavigator';
import SplashSScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

const HomeStack = createStackNavigator();
const WalletStack = createStackNavigator();
const TakeStack = createStackNavigator();
const OrdersStack = createStackNavigator();
const ProfileStack = createStackNavigator();

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

export function StackHome() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

export function StackWallet() {
  return (
    <WalletStack.Navigator>
    
    </WalletStack.Navigator>
  );
}

export function StackStudio() {
  return (
    <TakeStack.Navigator>
      
    </TakeStack.Navigator>
  );
}

export function StackOrders() {
  return (
    <OrdersStack.Navigator>
     
    </OrdersStack.Navigator>
  );
}

export function StackProfile() {
  return (
    <ProfileStack.Navigator mode='modal' initialRouteName="ProfileScreen">
    

    </ProfileStack.Navigator>
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
