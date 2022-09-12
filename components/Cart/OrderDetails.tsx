import { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';

import { useAppContext } from '../../hooks/useAppContext';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { CartStoreActionType } from '../../reducers/cartReducer';

export const OrderDetails: FC<{ totalPrice: number }> = ({ totalPrice }) => {
  const toast = useToast();
  const navigation = useAppNavigation();
  const { dispatch } = useAppContext();
  const onPay = () => {
    toast.show(`Спасибо за покупку`, {
      type: 'success',
    });
    dispatch({ type: CartStoreActionType.Reset });
    navigation.navigate('Home', { screen: 'Catalog' });
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Сумма Заказа</Text>
        <Text style={styles.text}>{totalPrice}₽</Text>
      </View>
      <View style={styles.button}>
        <Button title="Оплатить" onPress={onPay} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  text: { fontSize: 20 },
  button: {
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
  },
});
