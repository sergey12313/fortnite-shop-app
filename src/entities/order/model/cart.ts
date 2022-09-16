import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppSelector } from '@shared/lib';
import { useSelector } from 'react-redux';

import { AddPayload, CartItem, CartState } from './types';

const initialState: CartState = {
  items: {},
};

export const cartModel = createSlice({
  name: 'cartState',
  initialState,
  reducers: {
    addToCart({ items }, { payload: { id, ...other } }: PayloadAction<AddPayload>) {
      if (id in items) {
        items[id].count += 1;
      } else {
        items[id] = { count: 1, ...other };
      }
    },
    incrementCount({ items }, { payload: id }: PayloadAction<string>) {
      if (items[id]) {
        items[id].count += 1;
      }
    },
    decrementCount({ items }, { payload: id }: PayloadAction<string>) {
      if (items[id]) {
        if (items[id].count === 1) {
          delete items[id];
        } else {
          items[id].count -= 1;
        }
      }
    },
    remove({ items }, { payload: id }: PayloadAction<string>) {
      delete items[id];
    },
  },
});

export const cartReducer = cartModel.reducer;
export const cartActions = cartModel.actions;

export const useCartIsEmpty = () =>
  useAppSelector(
    createSelector(
      (state: RootState) => state.cartReducer.items,
      (items) => Object.keys(items).length === 0
    )
  );
