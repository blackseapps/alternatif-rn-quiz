import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, TextInput} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import Fonts from '../../constants/Fonts';
import {FontSize} from '../../constants/Sizes';
import SeperatorHComponent from '../seperators/SeperatorHComponent';
import {wp, hp} from '../../constants/Dimensions';
import {useTheme} from '@react-navigation/native';

const TextInputBaseComponent = props => {
  const {
    value,
    placeHolder,
    type,
    disabled,
    containerStyle,
    onChangeText,
    secureTextEntry,
    maxLength,
    options,
    icon,
    errorText,
  } = props;

  const {Colors} = useTheme();
  const styles = Styles(Colors);

  const [focused, setFocused] = useState(false);

  const onFocus = () => {
    setFocused(!focused);
    props.onFocus;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.content}>
        {icon && <Image style={styles.icon} source={icon} />}

        <View>
          {type === 'cel-phone' ? (
            <TextInputMask
              {...props}
              editable={!disabled}
              placeholderTextColor={Colors.title_active}
              style={[disabled ? styles.disabledTextInput : styles.textInput]}
              autoCorrect={false}
              onFocus={onFocus}
              onBlur={onFocus}
              returnKeyType={'next'}
              onChangeText={onChangeText}
              value={value}
              type={type}
              placeholder={placeHolder}
              maxLength={13}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '999 999 99 99',
              }}
            />
          ) : (
            <TextInput
              {...props}
              editable={!disabled}
              placeholder={placeHolder}
              secureTextEntry={secureTextEntry}
              placeholderTextColor={
                disabled ? Colors.PlaceHolder : Colors.title_active
              }
              style={[disabled ? styles.disabledTextInput : styles.textInput]}
              maxLength={50}
              onFocus={onFocus}
              onBlur={onFocus}
              returnKeyType={'next'}
              onChangeText={onChangeText}
              value={value}
            />
          )}
        </View>

        <SeperatorHComponent
          style={{
            backgroundColor: props.disabled
              ? Colors.PlaceHolder
              : focused
              ? Colors.Error
              : Colors.title_active,
          }}
        />
      </View>
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

TextInputBaseComponent.defaultProps = {
  maxLength: 15,
};

export default TextInputBaseComponent;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      width: wp(315),
      height: hp(40),
      justifyContent: 'center',
    },
    content: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: Colors.borderColor,
      paddingBottom: hp(10),
    },
    icon: {
      width: wp(14),
      height: hp(16),
      marginRight: wp(11),
      resizeMode: 'contain',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    textInput: {
      width: wp(280),
      fontSize: FontSize(16),
      color: Colors.secondary,
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
    disabledTextInput: {
      width: wp(280),
      fontSize: FontSize(16),
      color: Colors.secondary,
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
    errorText: {
      marginTop: hp(4),
      fontSize: FontSize(12),
      color: Colors.red,
      fontFamily: Fonts.bold,
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
  });
