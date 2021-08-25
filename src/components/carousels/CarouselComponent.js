import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import {useTheme} from '@react-navigation/native';
import {hp, wp} from '../../constants/Dimensions';

const CarouselComponent = props => {
  const {
    data,
    renderItem,
    onSnapToItem,
    index,
    idName,
    sliderWidth,
    itemWidth,
    onSnapToStart,
    onSnapToEnd,
  } = props;

  const {Colors} = useTheme();
  const styles = Styles(Colors);

  useEffect(() => {
    if (onSnapToItem && index < data.length)
      onSnapToItem(data[index][idName], index);
  }, []);

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        sliderWidth={wp(sliderWidth)}
        itemWidth={wp(itemWidth)}
        inactiveSlideOpacity={0.1}
        inactiveSlideScale={0.9}
        removeClippedSubviews={false}
        renderItem={renderItem}
        firstItem={index}
        layout={'default'}
        containerCustomStyle={{
          alignSelf: 'center',
        }}
        onSnapToItem={index =>
          onSnapToItem && onSnapToItem(data[index][idName], index)
        }
        onScrollEndDrag={event => {
          const currentOffset = event.nativeEvent.contentOffset.x;
          if (data && Array.isArray(data) && data.length > 0) {
            if (currentOffset === 0) {
              onSnapToStart();
            }
            if (currentOffset >= itemWidth * (data.length - 1) - 5) {
              onSnapToEnd();
            }
          }
        }}
      />
    </View>
  );
};

CarouselComponent.defaultProps = {
  sliderWidth: 375,
  itemWidth: 200,
  inactiveSlideOpacity: 0.5,
  inactiveSlideScale: 1,
  onSnapToStart: () => {},
  onSnapToEnd: () => {},
  onSnapToItem: () => {},
};

CarouselComponent.propTypes = {
  data: PropTypes.array,
  sliderWidth: PropTypes.number,
  itemWidth: PropTypes.number,
  inactiveSlideOpacity: PropTypes.number,
  inactiveSlideScale: PropTypes.number,
  onSnapToItem: PropTypes.func,
  onSnapToStart: PropTypes.func,
  onSnapToEnd: PropTypes.func,
};

export default CarouselComponent;

const Styles = Colors =>
  StyleSheet.create({
    slide: {
      justifyContent: 'center',
      alignItems: 'center',
      height: hp(350),
    },
    container: {
      height: hp(168),
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });
