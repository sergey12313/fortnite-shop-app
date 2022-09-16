import { useAppSelector } from '@shared/lib';
import { memo } from 'react';
import { View } from 'react-native';

import { ProductsList } from '../components/ProductList/ProductsList';

const _HomeScreen = () => {
  const { data } = useAppSelector((state) => state.shopItemsReducer);
  console.log(12313, data);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ProductsList />
    </View>
  );
};

export const CatalogScreen = memo(_HomeScreen);
