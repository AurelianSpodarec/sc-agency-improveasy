import {
    fetchAccountDetailsFailure,
    fetchAccountDetailsRequest,
    fetchAccountDetailsSuccess,
} from '@actions/account/fetchAccountDetails';
import {
    updateAccountDetailsFailure,
    updateAccountDetailsRequest,
    updateAccountDetailsSuccess,
} from '@actions/account/updateAccountDetails';
import {
    updatePasswordFailure,
    updatePasswordRequest,
    updatePasswordSuccess,
} from '@actions/account/updatePassword';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { IAccountDetails } from 'src/types/shared/Account';

interface IAccountState {
    isFetching: boolean;
    isPosting: boolean;
    postSuccess: boolean;
    error: string | null;
    accountDetails: IAccountDetails | null;
    isPatchingPassword: boolean;
    patchPasswordSuccess: boolean;
    patchPasswordError: string | null;
}

const initialState: IAccountState = {
    isFetching: false,
    isPosting: false,
    isPatchingPassword: false,
    postSuccess: false,
    patchPasswordSuccess: false,
    error: null,
    accountDetails: null,
    patchPasswordError: null,
};

export default createReducer(initialState, {
    [fetchAccountDetailsRequest.type]: handleFetchRequest,
    [fetchAccountDetailsSuccess.type]: handleFetchDetailsSuccess,
    [fetchAccountDetailsFailure.type]: handleFailure,
    [updateAccountDetailsRequest.type]: handlePostRequest,
    [updateAccountDetailsSuccess.type]: handleUpdateSuccess,
    [updateAccountDetailsFailure.type]: handleFailure,
    [updatePasswordRequest.type]: handlePatchPasswordRequest,
    [updatePasswordSuccess.type]: handlePatchPasswordSuccess,
    [updatePasswordFailure.type]: handlePatchPasswordError,
});

function handleFetchRequest(state: IAccountState) {
    state.isFetching = true;
    state.error = null;
}

function handleFetchDetailsSuccess(state: IAccountState, action: PayloadAction<IAccountDetails>) {
    state.isFetching = false;
    state.accountDetails = action.payload;
}

function handleFailure(state: IAccountState, action: PayloadAction<string>) {
    state.isFetching = false;
    state.isPosting = false;
    state.error = action.payload;
}

function handlePostRequest(state: IAccountState) {
    state.isPosting = true;
    state.error = null;
    state.postSuccess = false;
}

function handleUpdateSuccess(state: IAccountState, action: PayloadAction<IAccountDetails>) {
    state.isPosting = false;
    state.postSuccess = true;
    state.accountDetails = action.payload;
}

function handlePatchPasswordRequest(state: IAccountState) {
    state.isPatchingPassword = true;
    state.patchPasswordSuccess = false;
    state.error = null;
}

function handlePatchPasswordSuccess(state: IAccountState) {
    state.isPatchingPassword = false;
    state.patchPasswordSuccess = true;
}

function handlePatchPasswordError(state: IAccountState, action: PayloadAction<string>) {
    state.isPatchingPassword = false;
    state.patchPasswordSuccess = false;
    state.patchPasswordError = action.payload;
}
