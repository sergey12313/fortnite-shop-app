import { Feather } from '@expo/vector-icons';
import {
  NavigationProp,
  NavigatorScreenParams,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import { FC, memo } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import Toast from 'react-native-toast-message';

import { useAppContext } from '../context/AppContext';
import { ShopItem } from '../model/shopResponse';
import { CartStoreActionType } from '../reducers/cartReducer';
import { BottomTabNavigatorList } from './AppLayout';

interface ProductCardProps extends ViewProps {
  shopItem: ShopItem;
}

const width = (Dimensions.get('window').width - 4 * 5) / 2;

const _ProductCard: FC<ProductCardProps> = ({ shopItem, style, ...otherProps }) => {
  const navigation = useNavigation<NavigationProp<BottomTabNavigatorList>>();
  const { dispatch } = useAppContext();
  const onAddToCartClick = (id: string, name: string, price: number) => {
    Toast.show({
      topOffset: 100,
      type: 'success',
      text1: `${name} добавлен в корзину 🛒`,
    });
    dispatch({
      type: CartStoreActionType.Add,
      payload: {
        id,
        name,
        price,
      },
    });
  };

  const { cardStyle, shadowProp, imgStyle } = styles;
  const title =
    shopItem.displayName.length >= 27
      ? `${shopItem.displayName.slice(0, 27)}...`
      : shopItem.displayName;
  return (
    <TouchableOpacity
      style={[cardStyle, style]}
      {...otherProps}
      onPress={() => {
        navigation.navigate('Home', {
          screen: 'CatalogItem',
          params: { title: shopItem.displayName, id: shopItem.mainId },
        });
      }}>
      <Image source={{ uri: shopItem.displayAssets[0].url }} style={[imgStyle, shadowProp]} />
      <Text style={{ marginTop: 3, fontWeight: '300', flex: 1 }} numberOfLines={2}>
        {shopItem.displayName}{' '}
      </Text>
      <View
        style={{
          flexDirection: 'row',

          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 5,
        }}>
        <View style={{ flex: 1 }}>
          {shopItem.price.finalPrice < shopItem.price.regularPrice && (
            <Text style={{ fontWeight: '400', fontSize: 10, textDecorationLine: 'line-through' }}>
              {shopItem.price.regularPrice} ₽
            </Text>
          )}
          <Text style={{ fontWeight: '400', fontSize: 16 }}>{shopItem.price.finalPrice} ₽</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          delayPressOut={0.01}
          onPress={() =>
            onAddToCartClick(shopItem.mainId, shopItem.displayName, shopItem.price.finalPrice)
          }>
          <View
            style={{
              borderRadius: 300,
              borderStyle: 'solid',
              borderColor: 'gray',
              borderWidth: 1,
              padding: 5,
            }}>
            <Feather name="shopping-bag" size={18} color="gray" />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: 'transparent',
    borderRadius: 4,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width,
    margin: 5,
    marginBottom: 15,
  },
  imgStyle: {
    width,
    height: width,
    borderRadius: 4,
  },
  shadowProp: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
});

export const ProductCard = memo(_ProductCard);
