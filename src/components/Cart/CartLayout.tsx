import { Dimensions, ScrollView, StyleSheet } from 'react-native';

import { useAppContext } from '../../hooks/useAppContext';
import { useHeaderAndTopBarHeight } from '../../hooks/useHeaderAndTopBarHeight';
import { CartItem } from './CartItem';
import { EmptyCart } from './EmptyCart';
import { OrderDetails } from './OrderDetails';

const { width, height } = Dimensions.get('window');
export const CartLayout = () => {
  const { cartListCount, cartState } = useAppContext();

  const headerAndTopBarHeight = useHeaderAndTopBarHeight();
  const totalPrice = Object.values(cartState).reduce((a, c) => a + c.price * c.count, 0);

  if (cartListCount === 0) {
    return <EmptyCart />;
  }
  const sortedCartState = [...Object.entries(cartState)].sort((a, b) =>
    a[1].name.localeCompare(b[1].name)
  );

  return (
    <ScrollView
      style={[
        styles.layout,
        {
          height: height - headerAndTopBarHeight,
        },
      ]}>
      {sortedCartState.map(([id, value]) => (
        <CartItem name={value.name} price={value.price} count={value.count} id={id} key={id} />
      ))}
      <OrderDetails totalPrice={totalPrice} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  layout: {
    width,
    paddingBottom: 20,
  },
});
