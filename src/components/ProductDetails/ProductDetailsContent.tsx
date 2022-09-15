import { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';

import { useAppContext } from '../../hooks/useAppContext';
import { CartStoreActionType } from '../../reducers/cartReducer';
import { Product } from '../../shared/api/model/productResponse';

export const ProductDetailsContent: FC<{ data: Product }> = ({ data }) => {
  const { dispatch } = useAppContext();
  const toast = useToast();
  const onAddToCartClick = () => {
    if (!data) {
      return;
    }
    toast.show(`${data.name} добавлен в корзину 🛒`, {});
    dispatch({
      type: CartStoreActionType.Add,
      payload: {
        id: data.id,
        name: data.name,
        price: data.price,
      },
    });
  };
  return (
    <>
      <Text style={styles.title}>{data.name}</Text>
      <View style={styles.actionsBlock}>
        <Text style={styles.price}>{data.price} ₽</Text>
        <Button title="Купить" onPress={onAddToCartClick} />
      </View>
      <Text style={styles.descriptionTitle}>Описание</Text>
      <Text style={styles.description}>
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
        magnam officiis possimus suscipit temporibus voluptatum. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. A adipisci, aperiam architecto ex quia rem sequi temporibus!
        Dolore doloremque ducimus inventore ipsum, laudantium libero magnam officiis possimus
        suscipit temporibus voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
        adipisci, aperiam architecto ex quia rem sequi temporibus! Dolore doloremque ducimus
        inventore ipsum, laudantium libero magnam officiis possimus suscipit temporibus voluptatum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, aperiam architecto ex
        quia rem sequi temporibus! Dolore doloremque ducimus inventore ipsum, laudantium libero
        magnam officiis possimus suscipit temporibus voluptatum. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. A adipisci, aperiam architecto ex quia rem sequi temporibus!
        Dolore doloremque ducimus inventore ipsum, laudantium libero magnam officiis possimus
        suscipit temporibus voluptatum.
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 15,
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '500',
  },
  actionsBlock: {
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  price: { fontSize: 20, fontWeight: '600' },
  descriptionTitle: { marginVertical: 10, fontSize: 20, textAlign: 'center' },
  description: { paddingHorizontal: 40 },
});
