import { useSelector as useSelectorRedux, useDispatch as useDispatchRedux } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store'

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRedux;
export const useDispatch: () => AppDispatch = useDispatchRedux;
