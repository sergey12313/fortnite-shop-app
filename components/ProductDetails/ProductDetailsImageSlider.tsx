import { FC, useRef } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';

const { width } = Dimensions.get('screen');
const DOT_SIZE = 8;
const DOT_SPACING = 8;
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING;

// noinspection JSSuspiciousNameCombination
const ITEM_HEIGHT = width;

export const ProductDetailsImageSlider: FC<{ images: string[] }> = ({ images }) => {
  const scrollY = useRef(new Animated.Value(0));

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={images}
        keyExtractor={(_, index) => index.toString()}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        onScroll={Animated.event<NativeSyntheticEvent<NativeScrollEvent>>(
          [{ nativeEvent: { contentOffset: { y: scrollY.current } } }],
          {
            useNativeDriver: true,
          }
        )}
        bounces={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Image style={styles.image} source={{ uri: item }} />
          </View>
        )}
      />
      <View style={styles.pagination}>
        {images.map((el, index) => {
          return <View style={styles.dots} key={index} />;
        })}
        <Animated.View
          style={[
            styles.dotIndicator,
            {
              transform: [
                {
                  translateY: Animated.divide(scrollY.current, ITEM_HEIGHT).interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, DOT_INDICATOR_SIZE],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT,
    overflow: 'hidden',
  },
  image: {
    width,
    height: ITEM_HEIGHT,
    resizeMode: 'cover',
  },
  pagination: {
    position: 'absolute',
    left: 10,
    top: '40%',
  },
  dots: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    marginBottom: DOT_SPACING,
    backgroundColor: 'white',
    borderRadius: DOT_SIZE,
  },
  dotIndicator: {
    width: DOT_INDICATOR_SIZE,
    height: DOT_INDICATOR_SIZE,

    borderColor: 'white',
    borderWidth: 1,
    borderRadius: DOT_INDICATOR_SIZE,
    position: 'absolute',
    left: -DOT_SIZE / 2,
    top: -DOT_SIZE / 2,
  },
});
