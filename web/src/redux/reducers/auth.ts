import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import {
    postLoginRequest,
    postLoginSuccess,
    postLoginFailure,
    postRegisterRequest,
    postRegisterSuccess,
    postRegisterFailure,
    postConfirmEmailRequest,
    postConfirmEmailSuccess,
    postConfirmEmailFailure,
} from '@actions/auth';
import { LoginResponse } from 'lib/src/utils/api';

interface AuthState {
    isPosting: boolean;
    postSuccess: boolean;
    error: string | null;
    isConfirmed: boolean;
}

const initialState: AuthState = {
    isPosting: false,
    postSuccess: false,
    error: null,
    isConfirmed: false,
};

export default createReducer(initialState, {
    [postLoginRequest.type]: handlePostRequest,
    [postLoginSuccess.type]: handlePostLoginSuccess,
    [postLoginFailure.type]: handleFailure,
    [postRegisterRequest.type]: handlePostRequest,
    [postRegisterSuccess.type]: handlePostSuccess,
    [postRegisterFailure.type]: handleFailure,
    [postRegisterRequest.type]: handlePostRequest,
    [postRegisterSuccess.type]: handlePostSuccess,
    [postRegisterFailure.type]: handleFailure,
    [postConfirmEmailRequest.type]: handlePostRequest,
    [postConfirmEmailSuccess.type]: handlePostSuccess,
    [postConfirmEmailFailure.type]: handleFailure,
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

function handlePostLoginSuccess(state: AuthState, action: PayloadAction<LoginResponse>) {
    state.isPosting = false;
    state.postSuccess = true;
    state.isConfirmed = action.payload.isConfirmed;
}

function handleFailure(state: AuthState, action: PayloadAction<string>) {
    state.isPosting = false;
    state.error = action.payload;
}
