import { useQuery } from '@tanstack/react-query';

import { getAllProducts } from '../services/apiRequests';

export const useShopItemsQuery = () => {
  return useQuery(['allProducts'], getAllProducts);
};
