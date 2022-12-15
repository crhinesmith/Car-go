import { useReducer } from 'react';
import {
  QUERY_ALL_USERS,
  QUERY_USER,
  CREATE_ORDER,
  QUERY_CARS,
  QUERY_CAR
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {

    case QUERY_ALL_USERS:
      return {
        ...state,
        users: [...action.users],
      };

    case QUERY_USER:
      return {
        ...state,
        user: [ ...action.users],
      };

    case CREATE_ORDER:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };
    case QUERY_CARS:
      return {
        ...state,
        cars: [...action.cars]
      };
    case QUERY_CAR:
        return {
          ...state,
          car: [...action.car]
        };
    default:
      return state;
  }
};

export function useCarReducer(initialState) {
  return useReducer(reducer, initialState);
}
