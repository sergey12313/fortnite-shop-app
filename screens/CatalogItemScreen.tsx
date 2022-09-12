import type { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { FC } from 'react';

import { StackNavigatorList } from '../Layout/AppLayout';
import { ProductDetailsLayout } from '../components/ProductDetails/ProductDetailsLayout';

type CatalogItemScreenProps = RouteProp<StackNavigatorList, 'CatalogItem'>;

export const CatalogItemScreen: FC<CatalogItemScreenProps> = () => {
  const {
    params: { id },
  } = useRoute<CatalogItemScreenProps>();

  return <ProductDetailsLayout id={id} />;
};
