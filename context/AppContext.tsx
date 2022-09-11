import { NavigationContainer } from '@react-navigation/native';
import { createContext, Dispatch, FC, PropsWithChildren, useContext, useReducer } from 'react';
import { Text } from 'react-native';

import { ShopItem } from '../model/shopResponse';
import { CartActions, cartReducer, CartState } from '../reducers/cartReducer';
import { shop } from '../testData';

interface IAppContext {
  cartState: CartState;
  dispatch: Dispatch<CartActions>;
  cartListCount: number;
  shopData: ShopItem[];
}
export const AppContext = createContext({} as IAppContext);

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, {});
  const cartListCount = Object.keys(cartState).length;
  const shopData = shop;
  return (
    <AppContext.Provider value={{ cartState, dispatch, cartListCount, shopData }}>
      {children}
    </AppContext.Provider>
  );
};
