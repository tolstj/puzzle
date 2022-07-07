import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const PUZZLES_QUANTITY_MIN = 9;

const defaultSettings = {
  puzzlesQuantity: PUZZLES_QUANTITY_MIN,
};

export interface GameState {
  imageInBase64?: string;
  settings: {
    puzzlesQuantity: number;
  };
}

const initialState: GameState = {
  settings: defaultSettings,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setImage(state, { payload: { imageInBase64 } }: PayloadAction<{ imageInBase64: string }>) {
      state.imageInBase64 = imageInBase64;
    },
    decreasePuzzlesQuantity(state) {
      if (state.settings.puzzlesQuantity > 9) {
        const quantityInLine = Math.sqrt(state.settings.puzzlesQuantity);
        const newQuantityInLine = quantityInLine - 1;
        state.settings.puzzlesQuantity = newQuantityInLine * newQuantityInLine;
      }
    },
    increasePuzzlesQuantity(state) {
      const quantityInLine = Math.sqrt(state.settings.puzzlesQuantity);
      const newQuantityInLine = quantityInLine + 1;
      state.settings.puzzlesQuantity = newQuantityInLine * newQuantityInLine;
    },
  },
})

export const { setImage, decreasePuzzlesQuantity, increasePuzzlesQuantity } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
