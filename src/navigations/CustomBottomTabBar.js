import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Svg, {Path} from 'react-native-svg';
import {hp, wp} from '../constants/Dimensions';
import {useNavigation, useTheme} from '@react-navigation/native';
import {FontSize} from '../constants/Sizes';
import {bottomBar} from '../constants/Images';

export default function CustomBottomTabBar(props) {
  const {state} = props;
  const navigation = useNavigation();
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  const redirectScreen = name => {
    navigation.navigate(name);
  };

  const RenderTab = ({title, onPress, IconFamily, iconName, index}) => {
    return (
      <View style={styles.tab}>
        <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
          {state.index == index ? (
            <View style={styles.button}>
              <IconFamily name={iconName} size={20} color={Colors.secondary} />
              <Text style={styles.activeTabTitle}>{title}</Text>
            </View>
          ) : (
            <View style={styles.button}>
              <IconFamily
                name={iconName}
                size={20}
                color={Colors.TextColorPrimary}
              />
              <Text style={styles.passiveTabTitle}>{title}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ImageBackground
      style={{width: wp(375), height: hp(110)}}
      source={bottomBar}>
      <View style={styles.TabBarMainContainer}>
        <RenderTab
          onPress={() => redirectScreen('Home')}
          IconFamily={Feather}
          iconName={'home'}
          index={0}
          title={'Home'}
        />

        <RenderTab
          onPress={() => redirectScreen('Wallet')}
          IconFamily={AntDesign}
          iconName={'wallet'}
          index={1}
          title={'Wallet'}
        />

        <View>
          <TabBarAdvancedButton
            bgColor={Colors.white}
            {...props}
            Colors={Colors}
          />
        </View>

        <RenderTab
          onPress={() => redirectScreen('Orders')}
          IconFamily={Ionicons}
          iconName={'basket-outline'}
          index={2}
          title={'Orders'}
        />

        <RenderTab
          onPress={() => redirectScreen('Profile')}
          IconFamily={FontAwesome}
          iconName={'user-o'}
          index={3}
          title={'Profile'}
        />
      </View>
    </ImageBackground>
  );
}

export const TabBg = ({color, styles, ...props}) => {
  return (
    <Svg width={75} height={90} viewBox="0 0 75 90" {...props}>
      <Path
        d="M75.2 0v90H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
        fill={color}
      />
    </Svg>
  );
};

export const TabBarAdvancedButton = ({Colors, bgColor, ...props}) => {
  const styles = Styles(Colors);
  return (
    <View style={styles.container} pointerEvents="box-none">
      
      <TouchableOpacity
        onPress={() => props.navigation.navigate('StudioTakePhotoScreen')}
        activeOpacity={0.9}
        style={styles.camerabtn}>
        <SimpleLineIcons name="camera" size={20} color={Colors.white80} />
      </TouchableOpacity>
    </View>
  );
};

const Styles = Colors =>
  StyleSheet.create({
    container: {
      position: 'relative',
      width: 75,
      alignItems: 'center',
    },
    background: {
      position: 'absolute',
      top: 0,
    },
    camerabtn: {
      top: hp(-22),
      justifyContent: 'center',
      alignItems: 'center',
      width: wp(55),
      backgroundColor: '#F5953C',
      height: wp(55),
      borderRadius: wp(27.5),
      left: wp(2),
    },
    TabBarMainContainer: {
      justifyContent: 'space-around',
      height: hp(80),
      flexDirection: 'row',
      width: '100%',
      marginTop: hp(25),
    },
    tab: {
      height: 80,
      paddingBottom: hp(5),
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    activeTabTitle: {
      fontSize: FontSize(13),
      color: Colors.secondary,
    },
    passiveTabTitle: {
      fontSize: FontSize(13),
      color: Colors.TextColorPrimary,
    },
  });
