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
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { IAccountDetails } from 'src/types/shared/Account';

interface IAccountState {
    isFetching: boolean;
    isPosting: boolean;
    postSuccess: boolean;
    error: string | null;
    accountDetails: IAccountDetails | null;
}

const initialState: IAccountState = {
    isFetching: false,
    isPosting: false,
    postSuccess: false,
    error: null,
    accountDetails: null,
};

export default createReducer(initialState, {
    [fetchAccountDetailsRequest.type]: handleFetchRequest,
    [fetchAccountDetailsSuccess.type]: handleFetchDetailsSuccess,
    [fetchAccountDetailsFailure.type]: handleFailure,
    [updateAccountDetailsRequest.type]: handlePostRequest,
    [updateAccountDetailsSuccess.type]: handleUpdateSuccess,
    [updateAccountDetailsFailure.type]: handleFailure,
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
