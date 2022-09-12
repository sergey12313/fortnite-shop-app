import { FC } from 'react';
import { FlatList, Text, ViewProps } from 'react-native';

import { useShopItemsQuery } from '../hooks/useShopItemsQuery';
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
    <FlatList
      data={data}
      renderItem={({ item }) => <ProductCard shopItem={item} />}
      keyExtractor={(item) => item.mainId}
      initialNumToRender={20}
      numColumns={2}
    />
  );
};
