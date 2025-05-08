import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

// Create Action
export const increment = createAction("INCREMENT");
export const decrement = createAction("DECREMENT");
export const reset = createAction("RESET");

// Custom CreateAction
export const incrementBy = createAction("INCREMENTBY", (amount) => {
  return {
    payload: {
      amount,
    },
  };
});

// Create Reducer
const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state) => {
    state.counter += 1;
  });
  builder.addCase(decrement, (state) => {
    state.counter -= 1;
  });
  builder.addCase(reset, (state) => {
    state.counter = 0;
  });
  builder.addCase(incrementBy, (state, action) => {
    state.counter += action.payload.amount;
  });
});

export default counterReducer;
