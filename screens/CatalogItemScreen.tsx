import type { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { FC } from 'react';
import { View } from 'react-native';

import { StackNavigatorList } from '../Layout/AppLayout';
import { ProductDetails } from '../components/ProductDetails';

type CatalogItemScreenProps = RouteProp<StackNavigatorList, 'CatalogItem'>;

export const CatalogItemScreen: FC<CatalogItemScreenProps> = () => {
  const {
    params: { id },
  } = useRoute<CatalogItemScreenProps>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ProductDetails id={id} />
    </View>
  );
};
