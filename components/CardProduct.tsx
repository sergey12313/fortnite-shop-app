import { Feather } from '@expo/vector-icons';
import { FC, memo } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import Toast from 'react-native-toast-message';

import { useAppContext } from '../hooks/useAppContext';
import { useAppNavigation } from '../hooks/useAppNavigation';
import { ShopItem } from '../model/shopResponse';
import { CartStoreActionType } from '../reducers/cartReducer';

interface ProductCardProps extends ViewProps {
  shopItem: ShopItem;
}

const cardSize = (Dimensions.get('window').width - 4 * 5) / 2;

const _ProductCard: FC<ProductCardProps> = ({
  shopItem: {
    displayName,
    mainId,
    displayAssets,
    price: { finalPrice, regularPrice },
  },
}) => {
  const navigation = useAppNavigation();
  const { dispatch } = useAppContext();
  const onAddToCartClick = () => {
    Toast.show({
      topOffset: 100,
      type: 'success',
      visibilityTime: 800,
      text1: `${displayName} добавлен в корзину 🛒`,
    });
    dispatch({
      type: CartStoreActionType.Add,
      payload: {
        id: mainId,
        name: displayName,
        price: finalPrice,
      },
    });
  };

  const navigateToProduct = () => {
    navigation.navigate('Home', {
      screen: 'CatalogItem',
      params: { title: displayName, id: mainId },
    });
  };
  const showOldPrice = finalPrice < regularPrice;

  const { cardStyle, imageStyle, titleStyle, buttonStyle, regularPriceStyle, finalPriceStyle } =
    styles;

  return (
    <TouchableOpacity style={cardStyle} onPress={navigateToProduct}>
      <Image source={{ uri: displayAssets[0].full_background }} style={imageStyle} />
      <Text style={titleStyle} numberOfLines={2}>
        {displayName}
      </Text>
      <View
        style={{
          flexDirection: 'row',

          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 5,
        }}>
        <View style={{ flex: 1 }}>
          {showOldPrice && <Text style={regularPriceStyle}>{regularPrice} ₽</Text>}
          <Text style={finalPriceStyle}>{finalPrice} ₽</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          delayPressOut={0.01}
          onPress={onAddToCartClick}
          style={buttonStyle}>
          <Feather name="shopping-bag" size={18} color="gray" />
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
    width: cardSize,
    margin: 5,
    marginBottom: 15,
  },
  imageStyle: {
    width: cardSize,
    height: cardSize,
    borderRadius: 4,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  titleStyle: { marginTop: 3, fontWeight: '400', flex: 1 },
  buttonStyle: {
    borderRadius: 300,
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
  },
  finalPriceStyle: { fontWeight: '400', fontSize: 16 },
  regularPriceStyle: {
    fontWeight: '400',
    fontSize: 10,
    textDecorationLine: 'line-through',
  },
});

export const ProductCard = memo(_ProductCard);
