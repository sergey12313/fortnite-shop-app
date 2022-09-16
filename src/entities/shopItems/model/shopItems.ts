import { createSlice } from '@reduxjs/toolkit';

import { ShopItemsState } from './types';

const initialState: ShopItemsState = {
  data: [],
  isLoading: false,
  error: null,
};

export const shopItemsModel = createSlice({
  name: 'shopItems',
  initialState,
  reducers: {},
});

export const shopItemsReducer = shopItemsModel.reducer;
