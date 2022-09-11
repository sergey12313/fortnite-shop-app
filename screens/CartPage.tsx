import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import { FC } from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, View, Image, Button } from 'react-native';

import emptyCart from '../assets/empty.png';
import { useAppContext } from '../context/AppContext';

const { width, height } = Dimensions.get('window');

export const CartScreen: FC = () => {
  const { cartListCount, cartState } = useAppContext();
  const headerHeight = useHeaderHeight();
  const bottomTabBarHeight = useBottomTabBarHeight();
  console.log(headerHeight, bottomTabBarHeight);

  if (cartListCount === 0) {
    return (
      <View
        style={{
          flex: 1,

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={emptyCart} style={{ width: 300, height: 300 }} resizeMode="cover" />
        <Text style={{ fontSize: 20 }}>Корзина Пуста</Text>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          height: height - headerHeight - bottomTabBarHeight,
          width,
        }}>
        {Object.entries(cartState).map(([key, value]) => (
          <View
            key={key}
            style={{
              padding: 10,
              borderColor: 'gray',
              marginBottom: 5,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 1,
            }}>
            <Text style={{ fontSize: 20 }}>{value.name.slice(0, 20)}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Button title="-" />
              <Text>{value.count}</Text>
              <Button title="+" />
            </View>
            <Text style={{ fontSize: 20, marginLeft: 'auto' }}>{value.price * value.count}₽</Text>
            <Button title="X" />
          </View>
        ))}
        <View>
          <Text style={{ fontSize: 20 }}>Сумма Заказа</Text>
          <Text>{}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
