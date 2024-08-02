// src/store/actions.ts
import { createAction } from '@reduxjs/toolkit';
import { INCREMENT, DECREMENT } from './types';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
