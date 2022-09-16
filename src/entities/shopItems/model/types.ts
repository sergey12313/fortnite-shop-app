import { ShopItem } from '@shared/index';

export interface ShopItemsState {
  data: ShopItem[];
  isLoading: boolean;
  error: string | null;
}
