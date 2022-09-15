import { useQuery } from '@tanstack/react-query';

import { shopAPI } from '../shared';

export const useShopItemsQuery = () => {
  return useQuery(['allProducts'], shopAPI.getAllShopItems);
};
