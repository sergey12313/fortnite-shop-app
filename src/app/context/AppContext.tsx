import { createContext, Dispatch, FC, PropsWithChildren, useReducer } from 'react';

import { CartActions, cartReducer, CartState } from '../../reducers/cartReducer';

interface IAppContext {
  cartState: CartState;
  dispatch: Dispatch<CartActions>;
  cartListCount: number;
}
export const AppContext = createContext({} as IAppContext);

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, {});
  const cartListCount = Object.keys(cartState).length;

  return (
    <AppContext.Provider value={{ cartState, dispatch, cartListCount }}>
      {children}
    </AppContext.Provider>
  );
};
