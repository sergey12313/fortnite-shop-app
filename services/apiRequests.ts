import axios from 'axios';

import { ProductResponse } from '../model/productResponse';
import { ShopResponse } from '../model/shopResponse';

const API_KEY = 'f59b0b65-9146d5d5-61747120-6810b068';
const API_BASE_URL = 'https://fortniteapi.io/v2';

const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: API_KEY,
  },
  params: {
    lang: 'ru',
  },
});

export const getAllProducts = async () => {
  const { data } = await instance.get<ShopResponse>('/shop/');
  return data.shop;
};

export const getProductById = async (id: string) => {
  const { data } = await instance.get<ProductResponse>('/items/get/', { params: { id } });
  return data.item;
};
