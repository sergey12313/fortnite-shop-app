import { FC, PropsWithChildren, useReducer } from 'react';

import { cartReducer } from '../../reducers/cartReducer';
import { AppContext } from '../context/AppContext';

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, {});
  const cartListCount = Object.keys(cartState).length;

  return (
    <AppContext.Provider value={{ cartState, dispatch, cartListCount }}>
      {children}
    </AppContext.Provider>
  );
};
