import { instance } from './base';
import { Product, ProductResponse } from './model/productResponse';

const BASE_URL = '/items/get/';

export const getProductById = async (id: string): Promise<Product> => {
  const { data } = await instance.get<ProductResponse>(BASE_URL, { params: { id } });
  return data.item;
};
