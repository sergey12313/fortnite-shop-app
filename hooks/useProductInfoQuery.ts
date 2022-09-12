import { useQuery } from '@tanstack/react-query';

import { getProductById } from '../services/apiRequests';

export const useProductInfoQuery = (id: string) => {
  return useQuery(['product', id], () => getProductById(id));
};
