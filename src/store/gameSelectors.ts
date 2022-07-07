import type { RootState } from './store'

export const makeSelectImage = (state: RootState) => state.game.imageInBase64;

export const makeSelectSettings = (state: RootState) => state.game.settings;
