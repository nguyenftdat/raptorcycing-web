import { createReducer } from '@reduxjs/toolkit';
import { CounterState } from './types';
import { increment, decrement } from './actions';

const initialState: CounterState = {
  value: 0,
};

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.value += 1;
    })
    .addCase(decrement, (state) => {
      state.value -= 1;
    });
});

export default counterReducer;
