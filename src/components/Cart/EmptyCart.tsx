import { Image, StyleSheet, Text, View } from 'react-native';

import emptyCart from '../../../assets/empty.png';

export const EmptyCart = () => {
  return (
    <View style={styles.container}>
      <Image source={emptyCart} style={styles.img} resizeMode="cover" />
      <Text style={styles.message}>Корзина Пуста</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: { width: 300, height: 300 },
  message: {
    fontSize: 20,
  },
});
