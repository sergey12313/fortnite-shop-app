import { FC } from 'react';
import { Button, Dimensions, Image, ScrollView, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { useAppContext } from '../hooks/useAppContext';
import { useProductInfoQuery } from '../hooks/useProductInfoQuery';
import { CartStoreActionType } from '../reducers/cartReducer';
interface ProductDetailsProps {
  id: string;
}

const renderItem = ({ item }) => {
  return (
    <Image
      style={{ width: width - 50, height: width - 50, borderRadius: 10 }}
      source={{ uri: item }}
      resizeMode="cover"
    />
  );
};

const { width } = Dimensions.get('window');

export const ProductDetails: FC<ProductDetailsProps> = ({ id }) => {
  const { data, isLoading, isError } = useProductInfoQuery(id);
  const { dispatch } = useAppContext();
  const onAddToCartClick = () => {
    if (!data) {
      return;
    }
    dispatch({
      type: CartStoreActionType.Add,
      payload: {
        id: data.id,
        name: data.name,
        price: data.price,
      },
    });
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>Error...</Text>;
  }

  let images = data.displayAssets.map(({ full_background }) => full_background);
  if (images.length === 1) {
    images = Array.from<string>({ length: 4 }).fill(images[0]);
  }

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        width,
        paddingTop: 10,

        justifyContent: 'center',
      }}>
      <Carousel
        data={images}
        renderItem={renderItem}
        layout="default"
        loop
        sliderWidth={width}
        layoutCardOffset={10}
        itemWidth={width - 50}
      />
      <Text style={{ paddingHorizontal: 15, textAlign: 'center', marginTop: 10, fontSize: 20 }}>
        {data.name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          width: '100%',

          paddingHorizontal: 40,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 20, fontWeight: '600' }}>{data.price} ₽</Text>
        <Button title="Купить" onPress={onAddToCartClick} />
      </View>
      <Text style={{ marginVertical: 10, fontSize: 20 }}>Описание</Text>
      <Text
        style={{
          paddingHorizontal: 40,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, aperiam architecto ex
        quia rem sequi temporibus! Dolore doloremque ducimus inventore ipsum, laudantium libero
        magnam officiis possimus suscipit temporibus voluptatum. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. A adipisci, aperiam architecto ex quia rem sequi temporibus!
        Dolore doloremque ducimus inventore ipsum, laudantium libero magnam officiis possimus
        suscipit temporibus voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
        adipisci, aperiam architecto ex quia rem sequi temporibus! Dolore doloremque ducimus
        inventore ipsum, laudantium libero magnam officiis possimus suscipit temporibus voluptatum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, aperiam architecto ex
        quia rem sequi temporibus! Dolore doloremque ducimus inventore ipsum, laudantium libero
        magnam officiis possimus suscipit temporibus voluptatum.
      </Text>
    </ScrollView>
  );
};
