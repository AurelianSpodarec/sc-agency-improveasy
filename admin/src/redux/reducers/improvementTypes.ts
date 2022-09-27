import { convertArrToObj } from 'lib/src/utils/generic';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { postLoginRequest, postLoginSuccess, postLoginFailure } from '@actions/auth';
import { ImprovementType } from 'src/types/shared/ImprovementType';

interface AuthState {
    isFetching: boolean;
    error: string | null;
    improvementTypes: Record<number, ImprovementType>;
}

const initialState: AuthState = {
    isFetching: false,
    error: null,
    improvementTypes: {},
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

function handleFetchSuccess(state: AuthState, action: PayloadAction<ImprovementType[]>) {
    state.isFetching = false;
    state.improvementTypes = convertArrToObj(action.payload);
}

function handleFetchFailure(state: AuthState, action: PayloadAction<string>) {
    state.isFetching = false;
    state.error = action.payload;
}
