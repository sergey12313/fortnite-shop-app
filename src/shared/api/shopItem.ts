import { instance } from './base';
import { ShopItem, ShopResponse } from './model/shopResponse';

const BASE_URL = '/shop/';

export const getAllShopItems = async (): Promise<ShopItem[]> => {
  const { data } = await instance.get<ShopResponse>(BASE_URL);
  return data.shop;
};
