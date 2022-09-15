import { createSlice } from '@reduxjs/toolkit';

import { ShopItem } from '../../../shared';

const initialState: { data: ShopItem[] } = {
  data: [],
};

export const shopItemsModel = createSlice({
  name: 'shopItems',
  initialState,
  reducers: {},
});
