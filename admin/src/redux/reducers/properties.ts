import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import {
    fetchUserPropertiesRequest,
    fetchUserPropertiesSuccess,
    fetchUserPropertiesFailure,
} from '@actions/properties';

interface PropertiesState {
    isPosting: boolean;
    postSuccess: boolean;
    postError: string | null;
    isFetching: boolean;
    fetchError: string | null;
}

const initialState: PropertiesState = {
    isPosting: false,
    postSuccess: false,
    postError: null,
    isFetching: false,
    fetchError: null,
};

export default createReducer(initialState, {
    [fetchUserPropertiesRequest.type]: handleFetchRequest,
    [fetchUserPropertiesSuccess.type]: handleFetchSuccess,
    [fetchUserPropertiesFailure.type]: handleFetchFailure,
});

function handlePostRequest(state: PropertiesState) {
    state.isPosting = true;
    state.postSuccess = false;
    state.postError = null;
}

function handlePostSuccess(state: PropertiesState) {
    state.isPosting = false;
    state.postSuccess = true;
}

function handlePostFailure(state: PropertiesState, action: PayloadAction<string>) {
    state.isPosting = false;
    state.postError = action.payload;
}

function handleFetchRequest(state: PropertiesState) {
    state.isPosting = true;
    state.postSuccess = false;
    state.postError = null;
}

function handleFetchSuccess(state: PropertiesState) {
    state.isPosting = false;
    state.postSuccess = true;
}

function handleFetchFailure(state: PropertiesState, action: PayloadAction<string>) {
    state.isPosting = false;
    state.postError = action.payload;
}
