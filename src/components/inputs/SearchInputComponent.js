import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {FontSize} from '../../constants/Sizes';
import {wp, hp} from '../../constants/Dimensions';
import {useTheme} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const SearchInputComponent = props => {
  const {value, placeHolder, containerStyle, onChangeText, textStyle} = props;

  const {Colors} = useTheme();
  const styles = Styles(Colors);

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.content}>
        <Feather name={'search'} size={hp(16)} color={Colors.secondary} />

        <TextInput
          {...props}
          placeholder={placeHolder}
          placeholderTextColor={Colors.placeHolder}
          style={[styles.textInput, textStyle]}
          maxLength={50}
          returnKeyType={'next'}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    </View>
  );
};

SearchInputComponent.defaultProps = {
  maxLength: 15,
};

export default SearchInputComponent;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      width: wp(225),
      height: hp(40),
      justifyContent: 'center',
    },
    content: {
      flexDirection: 'row',
    },
    textInput: {
      width: '85%',
      fontSize: FontSize(11),
      marginLeft: wp(5),
      color: Colors.secondary,
    },
  });
