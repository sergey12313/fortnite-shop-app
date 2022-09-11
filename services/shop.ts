import axios from 'axios';
import { ShopResponse } from '~/model/shopResponse';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const getShopData = async () => {
  const { data } = await axios.get<ShopResponse>(API_BASE_URL, {
    params: {
      lang: 'ru',
    },
    headers: {
      Authorization: API_KEY,
    },
  });
  return data;
};
