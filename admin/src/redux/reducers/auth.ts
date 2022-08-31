import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { postLoginRequest, postLoginSuccess, postLoginFailure } from '@actions/auth';

interface AuthState {
    isPosting: boolean;
    postSuccess: boolean;
    error: string | null;
}

const initialState: AuthState = {
    isPosting: false,
    postSuccess: false,
    error: null,
};

export default createReducer(initialState, {
    [postLoginRequest.type]: handlePostRequest,
    [postLoginSuccess.type]: handlePostSuccess,
    [postLoginFailure.type]: handleFailure,
});

function handlePostRequest(state: AuthState) {
    state.isPosting = true;
    state.postSuccess = false;
    state.error = null;
}

function handlePostSuccess(state: AuthState) {
    state.isPosting = false;
    state.postSuccess = true;
}

function handleFailure(state: AuthState, action: PayloadAction<string>) {
    state.isPosting = false;
    state.error = action.payload;
}
