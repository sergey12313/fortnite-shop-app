import { memo } from 'react';
import { FlatList, View } from 'react-native';

import { ProductCard } from '../components/CardProduct';
import { useAppContext } from '../context/AppContext';

const _HomeScreen = () => {
  const { shopData } = useAppContext();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FlatList
        data={shopData}
        renderItem={({ item }) => <ProductCard shopItem={item} />}
        keyExtractor={(item) => item.mainId}
        initialNumToRender={20}
        numColumns={2}
      />
    </View>
  );
};

export const CatalogScreen = memo(_HomeScreen);
