import { ADD_NUMBER, CLEAR_NUMBERS, SET_NUMBERS } from "./ActionTypes";


export const addNumber = (number: number) => ({
  type: ADD_NUMBER,
  payload: number,
});

export const setNumbers = (numbers: number[]) => ({
  type: SET_NUMBERS,
  payload: numbers,
});

export const clearNumbers = () => ({
  type: CLEAR_NUMBERS,
});
