import { ADD_NUMBER, CLEAR_NUMBERS, SET_NUMBERS } from "../actions/ActionTypes";


interface NumberListState {
  numbers: number[];
}

const initialState: NumberListState = {
  numbers: [],
};

const numberListReducer = (state = initialState, action: any): NumberListState => {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, numbers: [...state.numbers, action.payload] };
    case SET_NUMBERS:
      return { ...state, numbers: action.payload };
    case CLEAR_NUMBERS:
      return { ...state, numbers: [] };
    default:
      return state;
  }
};

export default numberListReducer;
