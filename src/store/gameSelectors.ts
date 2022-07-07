import type { RootState } from './store'

export const makeSelectImage = (state: RootState) => state.game.imageInBase64;
