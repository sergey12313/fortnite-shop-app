import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import { FC } from 'react';
import { Button, Dimensions, Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

import emptyCart from '../assets/empty.png';
import { useAppContext } from '../hooks/useAppContext';
import { CartStoreActionType } from '../reducers/cartReducer';

const { width, height } = Dimensions.get('window');

export const CartScreen: FC = () => {
  const { cartListCount, cartState, dispatch } = useAppContext();

  const headerHeight = useHeaderHeight();
  const bottomTabBarHeight = useBottomTabBarHeight();
  const totalPrice = Object.values(cartState).reduce((a, c) => a + c.price * c.count, 0);

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
  const sortedCartState = [...Object.entries(cartState)].sort((a, b) =>
    a[1].name.localeCompare(b[1].name)
  );

  return (
    <SafeAreaView>
      <ScrollView
        style={{
          height: height - headerHeight - bottomTabBarHeight,
          width,
        }}>
        {sortedCartState.map(([id, value]) => (
          <View
            key={id}
            style={{
              padding: 10,
              borderColor: 'gray',
              marginBottom: 5,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 1,
            }}>
            <Text style={{ fontSize: 20, overflow: 'hidden' }}>{value.name.slice(0, 15)}</Text>
            <View
              style={{
                flexDirection: 'row',
                // justifyContent: 'flex-end',
                marginRight: 5,
                marginLeft: 'auto',
                alignItems: 'center',
              }}>
              <Button
                title="-"
                onPress={() => {
                  dispatch({ type: CartStoreActionType.Decrement, payload: id });
                }}
              />
              <Text style={{ fontSize: 20, paddingHorizontal: 5 }}>{value.count}</Text>
              <Button
                title="+"
                onPress={() => {
                  dispatch({ type: CartStoreActionType.Increment, payload: id });
                }}
              />
            </View>
            <Text style={{ fontSize: 20, paddingHorizontal: 5 }}>{value.price * value.count}₽</Text>
            <Button
              title="X"
              onPress={() => {
                dispatch({ type: CartStoreActionType.Remove, payload: id });
              }}
            />
          </View>
        ))}
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 10,
          }}>
          <Text style={{ fontSize: 20 }}>Сумма Заказа</Text>
          <Text style={{ fontSize: 20 }}>{totalPrice}₽</Text>
        </View>
        <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
          <Button title="Оплатить" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
