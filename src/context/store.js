// bring createContext and the useReducer Hook
import React, { createContext, useReducer } from 'react';

//bring the reducers as needed
import { reducer } from './reducers';

// create a default/initial state
const initialState = {
  transactions: []
};

// create and export the store then use the initial state as argument
export const Store = createContext(initialState);

// create provider so components have access to the store
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // write actions here
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(data) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: data
    });
  }

  // send the state and actions through the provider with a value prop
  return (
    <Store.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </Store.Provider>
  );
};
