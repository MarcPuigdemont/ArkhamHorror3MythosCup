import { ADD_CUP, REMOVE_CUP } from '.';

export function addCup(cup) {
  return {
    type: ADD_CUP,
    cup
  };
}

export function removeCup(cup) {
  return {
    type: REMOVE_CUP,
    cup
  };
}
