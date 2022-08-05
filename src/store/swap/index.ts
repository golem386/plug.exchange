import { createSlice } from '@reduxjs/toolkit';
//import type { PayloadAction } from '@reduxjs/toolkit';

interface SwapState {
  /** to token (buy side) */
  toToken: string | null;
  /** swap input value  */
  swapInputValue: number;
}

const initialSwapState: SwapState = {
  toToken: null,
  swapInputValue: 0,
};

const swapSlice = createSlice({
  name: 'swap',
  initialState: initialSwapState,
  reducers: {},
});

//export const { increment, decrement, incrementByAmount } = swapSlice.actions;
export default swapSlice.reducer;
