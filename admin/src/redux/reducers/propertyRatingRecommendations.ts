import { convertArrToObj } from 'lib/src/utils/generic';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { postLoginRequest, postLoginSuccess, postLoginFailure } from '@actions/auth';
import { PropertyRating } from 'src/types/shared/PropertyRating';

interface AuthState {
    isFetching: boolean;
    error: string | null;
    recommendations: Record<number, PropertyRating>;
}

const initialState: AuthState = {
    isFetching: false,
    error: null,
    recommendations: {},
};

export default createReducer(initialState, {
    [postLoginRequest.type]: handleFetchRequest,
    [postLoginSuccess.type]: handleFetchSuccess,
    [postLoginFailure.type]: handleFetchFailure,
});

function handleFetchRequest(state: AuthState) {
    state.isFetching = true;
    state.error = null;
}

function handleFetchSuccess(state: AuthState, action: PayloadAction<PropertyRating[]>) {
    state.isFetching = false;
    state.recommendations = convertArrToObj(action.payload);
}

function handleFetchFailure(state: AuthState, action: PayloadAction<string>) {
    state.isFetching = false;
    state.error = action.payload;
}
