import { createStore, applyMiddleware, Action } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducer, { RootState } from './reducers';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'react';

const middleWare = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleWare)));

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): Dispatch<Action<any>> => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
