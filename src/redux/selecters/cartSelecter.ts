//cartSelector.ts

import { RootState } from "../reducers/rootReducer";

export const getCartItemCount = (state:RootState):number => state.cart.cart.length;
