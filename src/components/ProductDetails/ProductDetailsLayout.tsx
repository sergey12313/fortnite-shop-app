import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { FC, useMemo } from 'react';
import { Dimensions, Text, View } from 'react-native';

import { useHeaderAndTopBarHeight } from '../../hooks/useHeaderAndTopBarHeight';
import { useProductInfoQuery } from '../../hooks/useProductInfoQuery';
import { ProductDetailsContent } from './ProductDetailsContent';
import { ProductDetailsImageSlider } from './ProductDetailsImageSlider';
interface ProductDetailsProps {
  id: string;
}

const { width, height } = Dimensions.get('screen');

export const ProductDetailsLayout: FC<ProductDetailsProps> = ({ id }) => {
  const { data, isLoading, isError } = useProductInfoQuery(id);
  const offset = useHeaderAndTopBarHeight();
  const snapPoints = useMemo(() => [height - width - offset, '100%'], []);

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
    <View style={{ flex: 1 }}>
      <ProductDetailsImageSlider images={images} />

      <BottomSheet snapPoints={snapPoints} index={0}>
        <BottomSheetScrollView>
          <ProductDetailsContent data={data} />
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};
