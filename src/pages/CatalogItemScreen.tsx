import type { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { FC } from 'react';

import { ProductDetailsLayout } from '../components/ProductDetails/ProductDetailsLayout';
import { useAppSelector } from '../shared';
import { StackNavigatorList } from './index';

type CatalogItemScreenProps = RouteProp<StackNavigatorList, 'CatalogItem'>;

export const CatalogItemScreen: FC<CatalogItemScreenProps> = () => {
  const {
    params: { id },
  } = useRoute<CatalogItemScreenProps>();

  return <ProductDetailsLayout id={id} />;
};
