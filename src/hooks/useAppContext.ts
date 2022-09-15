import { useContext } from 'react';

import { AppContext } from '../app/context/AppContext';

export const useAppContext = () => {
  return useContext(AppContext);
};
