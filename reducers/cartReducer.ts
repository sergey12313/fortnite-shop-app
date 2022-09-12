export type CartState = Record<string, { name: string; price: number; count: number }>;
export const enum CartStoreActionType {
  Add,
  Decrement,
  Increment,
  Remove,
  Reset,
}
export interface AddAction {
  type: CartStoreActionType.Add;
  payload: { name: string; id: string; price: number };
}
export interface DecrementAction {
  type: CartStoreActionType.Decrement;
  payload: string;
}
export interface IncrementAction {
  type: CartStoreActionType.Increment;
  payload: string;
}
export interface RemoveAction {
  type: CartStoreActionType.Remove;
  payload: string;
}
export interface ResetAction {
  type: CartStoreActionType.Reset;
}
export type CartActions =
  | AddAction
  | DecrementAction
  | IncrementAction
  | RemoveAction
  | ResetAction;

export const cartReducer = (state: CartState, action: CartActions): CartState => {
  switch (action.type) {
    case CartStoreActionType.Add: {
      const { id } = action.payload;
      if (id in state) {
        return { ...state, [id]: { ...state[id], count: state[id].count + 1 } };
      } else {
        return {
          ...state,
          [id]: {
            name: action.payload.name,
            count: 1,
            price: action.payload.price,
          },
        };
      }
    }
    case CartStoreActionType.Remove: {
      if (!state[action.payload]) {
        return state;
      }
      return Object.fromEntries(Object.entries(state).filter(([key]) => key !== action.payload));
    }
    case CartStoreActionType.Decrement: {
      if (!state[action.payload]) {
        return state;
      }
      const { count, price, name } = state[action.payload];
      const result = Object.entries(state).filter(([key]) => key !== action.payload);
      if (count === 1) {
        return Object.fromEntries(result);
      } else {
        return {
          ...Object.fromEntries(result),
          [action.payload]: { price, name, count: count - 1 },
        };
      }
    }
    case CartStoreActionType.Increment: {
      if (!state[action.payload]) {
        return state;
      }
      const { count, price, name } = state[action.payload];
      return {
        ...state,
        [action.payload]: {
          count: count + 1,
          price,
          name,
        },
      };
    }
    case CartStoreActionType.Reset: {
      return {};
    }
    default: {
      return state;
    }
  }
};
