import {
    fetchAccountDetailsFailure,
    fetchAccountDetailsRequest,
    fetchAccountDetailsSuccess,
} from '@actions/account/fetchAccountDetails';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { IAccountDetails } from 'src/types/shared/Account';

interface IAccountState {
    isFetching: boolean;
    error: string | null;
    accountDetails: IAccountDetails | null;
}

const initialState: IAccountState = {
    isFetching: false,
    error: null,
    accountDetails: null,
};

export default createReducer(initialState, {
    [fetchAccountDetailsRequest.type]: handleFetchRequest,
    [fetchAccountDetailsSuccess.type]: handleFetchDetailsSuccess,
    [fetchAccountDetailsFailure.type]: handleFailure,
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
    state.error = action.payload;
}
