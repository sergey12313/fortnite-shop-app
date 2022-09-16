import { cartReducer } from '@entities/order';
import { shopItemsReducer } from '@entities/shopItems';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { shopItemsReducer, cartReducer },
});
