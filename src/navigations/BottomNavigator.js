import React from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {
  StackHome,
  StackProfile,
  StackOrders,
  StackWallet,
} from './StackNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomTabBar from './CustomBottomTabBar';

const TabBottom = createBottomTabNavigator();

export default function BottomNavigator() {
  const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );

  return (
    <>
      <MyStatusBar backgroundColor="#F5953C" barStyle="light-content" />

      <TabBottom.Navigator
        initialRouteName={'Home'}
        tabBar={props => (
          <View style={styles.navigatorContainer}>
            <CustomBottomTabBar {...props} />
          </View>
        )}>
          
        <TabBottom.Screen name="Wallets" component={StackHome} />

        <TabBottom.Screen name="MyCards" component={StackWallet} />

        <TabBottom.Screen name="Balance" component={StackOrders} />

        <TabBottom.Screen name="History" component={StackProfile} />
      </TabBottom.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    height: 0,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: 0,
  },
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
