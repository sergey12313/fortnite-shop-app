import { memo } from 'react';
import { View } from 'react-native';

import { ProductsList } from '../components/ProductList/ProductsList';

const _HomeScreen = () => {
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
