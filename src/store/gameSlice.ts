import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface GameState {
  imageInBase64?: string;
}

const initialState: GameState = {

};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setImage(state, { payload: { imageInBase64 } }: PayloadAction<{ imageInBase64: string }>) {
      state.imageInBase64 = imageInBase64;
    }
  },
})

export const { setImage } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
