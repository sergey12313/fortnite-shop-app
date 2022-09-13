import { FlashList } from '@shopify/flash-list';
import { FC } from 'react';
import { Text, ViewProps } from 'react-native';

import { useShopItemsQuery } from '../../hooks/useShopItemsQuery';
import { ProductCard } from './CardProduct';

interface ProductFlatListProps extends ViewProps {}
export const ProductsList: FC<ProductFlatListProps> = () => {
  const { data, isLoading, isError } = useShopItemsQuery();
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>Error</Text>;
  }

  return (
    <FlashList
      data={data}
      renderItem={({ item }) => <ProductCard shopItem={item} />}
      keyExtractor={(item) => item.mainId}
      estimatedItemSize={250}
      numColumns={2}
    />
  );
};
