// bring createContext and the useReducer Hook
import React, { createContext, useReducer } from 'react';

// create a default/initial state
const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ]
};

// create the reducer that will handle the state
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [...state, action.payload];
    default:
      return state;
  }
};

// create and export the store then use the initial state as argument
export const Store = createContext(initialState);

// create provider so components have access to the store
// it uses the useReducer hook with our reducer and state and returns the HOC which wraps the App
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider
      value={{
        transactions: state.transactions
      }}
    >
      {children}
    </Store.Provider>
  );
};
