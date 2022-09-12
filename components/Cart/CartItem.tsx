import { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { useAppContext } from '../../hooks/useAppContext';
import { CartStoreActionType } from '../../reducers/cartReducer';

interface CartItemProps {
  name: string;
  price: number;
  count: number;
  id: string;
}

export const CartItem: FC<CartItemProps> = ({ name, price, count, id }) => {
  const { dispatch } = useAppContext();
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name.slice(0, 15)}</Text>
      <View style={styles.quantityBlock}>
        <Button
          title="-"
          onPress={() => {
            dispatch({ type: CartStoreActionType.Decrement, payload: id });
          }}
        />
        <Text style={styles.quantityValue}>{count}</Text>
        <Button
          title="+"
          onPress={() => {
            dispatch({ type: CartStoreActionType.Increment, payload: id });
          }}
        />
      </View>
      <Text style={styles.quantityValue}>{price * count}₽</Text>
      <Button
        title="X"
        onPress={() => {
          dispatch({ type: CartStoreActionType.Remove, payload: id });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderColor: 'gray',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  name: { fontSize: 20, overflow: 'hidden', fontWeight: '500' },
  quantityBlock: {
    flexDirection: 'row',
    marginRight: 5,
    marginLeft: 'auto',
    alignItems: 'center',
  },
  quantityValue: {
    fontSize: 20,
    paddingHorizontal: 5,
  },
});
