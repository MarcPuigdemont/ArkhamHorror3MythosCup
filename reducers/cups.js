import { ADD_CUP, REMOVE_CUP } from '../actions';

export default function(state = [], action) {
  const { type, cup } = action;

  switch (type) {
    case ADD_CUP:
      return [
        ...state,
        {
          id: Math.random()
            .toString(36)
            .substring(2),
          ...cup
        }
      ];
    case REMOVE_CUP:
      return state.filter(i => i.id !== cup.id);
    default:
      return state;
  }
}
