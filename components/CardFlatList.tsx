import { FC } from 'react';
import { Image, Text, View, ViewProps } from 'react-native';

import { ShopItem } from '../model/shopResponse';

interface ProductFlatListProps extends ViewProps {}

const ProductFlatList: FC<ProductFlatListProps> = ({ shopItems, style, ...otherProps }) => {
  const { cardStyle, shadowProp } = styles;
  return <View style={[cardStyle, shadowProp, style]} {...otherProps} />;
};
