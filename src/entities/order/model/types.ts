export type CartItem = { name: string; price: number; count: number };

export type AddPayload = {
  name: string;
  price: number;
  id: string;
};

export interface CartState {
  items: Record<string, CartItem>;
}
