import { useQuery } from '@tanstack/react-query';

import { productAPI } from '../shared';

export const useProductInfoQuery = (id: string) => {
  return useQuery(['product', id], () => productAPI.getProductById(id));
};
