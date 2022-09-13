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
    resendConfirmEmailRequest,
    resendConfirmEmailSuccess,
    resendConfirmEmailFailure,
    postSendForgotPasswordRequest,
    postSendForgotPasswordSuccess,
    postSendForgotPasswordFailure,
} from '@actions/auth';
import { LoginResponse } from 'lib/src/utils/api';

interface AuthState {
    isPosting: boolean;
    postSuccess: boolean;
    error: string | null;
    isConfirmed: boolean;
    confrimEmailError: string | null;
}

const initialState: AuthState = {
    isPosting: false,
    postSuccess: false,
    error: null,
    isConfirmed: false,
    confrimEmailError: null,
};

export default createReducer(initialState, {
    [postLoginRequest.type]: handlePostRequest,
    [postLoginSuccess.type]: handlePostLoginSuccess,
    [postLoginFailure.type]: handlePostFailure,
    [postRegisterRequest.type]: handlePostRequest,
    [postRegisterSuccess.type]: handlePostSuccess,
    [postRegisterFailure.type]: handlePostFailure,
    [postRegisterRequest.type]: handlePostRequest,
    [postRegisterSuccess.type]: handlePostSuccess,
    [postRegisterFailure.type]: handlePostFailure,
    [postConfirmEmailRequest.type]: handlePostRequest,
    [postConfirmEmailSuccess.type]: handlePostSuccess,
    [postConfirmEmailFailure.type]: handleConfirmEmailFailure,
    [postConfirmEmailRequest.type]: handlePostRequest,
    [postConfirmEmailSuccess.type]: handlePostSuccess,
    [postConfirmEmailFailure.type]: handleConfirmEmailFailure,
    [postConfirmEmailRequest.type]: handlePostRequest,
    [postConfirmEmailSuccess.type]: handlePostSuccess,
    [postConfirmEmailFailure.type]: handleConfirmEmailFailure,
    [resendConfirmEmailRequest.type]: handlePostRequest,
    [resendConfirmEmailSuccess.type]: handlePostSuccess,
    [resendConfirmEmailFailure.type]: handlePostFailure,
    [postSendForgotPasswordRequest.type]: handlePostRequest,
    [postSendForgotPasswordSuccess.type]: handlePostSuccess,
    [postSendForgotPasswordFailure.type]: handlePostFailure,
});

function handlePostRequest(state: AuthState) {
    state.isPosting = true;
    state.postSuccess = false;
    state.error = null;
    state.confrimEmailError = null;
}

function handleConfirmEmailFailure(state: AuthState, action: PayloadAction<string>) {
    state.isPosting = false;
    state.confrimEmailError = action.payload;
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

function handlePostFailure(state: AuthState, action: PayloadAction<string>) {
    state.isPosting = false;
    state.error = action.payload;
}
