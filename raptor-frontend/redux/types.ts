// src/store/types.ts

// Define the shape of your state
export interface CounterState {
    value: number;
  }
  
  // Define action types as constants
  export const INCREMENT = 'INCREMENT';
  export const DECREMENT = 'DECREMENT';
  
  // Define action interfaces
  interface IncrementAction {
    type: typeof INCREMENT;
  }
  
  interface DecrementAction {
    type: typeof DECREMENT;
  }
  
  // Combine the action types using a union type
  export type CounterActionTypes = IncrementAction | DecrementAction;
  