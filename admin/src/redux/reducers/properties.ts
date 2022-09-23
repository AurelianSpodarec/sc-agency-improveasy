import { convertArrToObj } from 'lib/src/utils/generic';
import { Property } from './../../types/shared/Property';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import {
    fetchUserPropertiesRequest,
    fetchUserPropertiesSuccess,
    fetchUserPropertiesFailure,
    fetchPropertiesRequest,
    fetchPropertiesSuccess,
    fetchPropertiesFailure,
    fetchPropertyRequest,
    fetchPropertySuccess,
    fetchPropertyFailure,
    PropertiesResponse,
} from '@actions/properties';

interface PropertiesState {
    isPosting: boolean;
    postSuccess: boolean;
    postError: string | null;
    isFetching: boolean;
    fetchError: string | null;
    properties: Record<number, Property>;
    itemCount: number;
}

const initialState: PropertiesState = {
    isPosting: false,
    postSuccess: false,
    postError: null,
    isFetching: false,
    fetchError: null,
    properties: {},
    itemCount: 0,
};

export default createReducer(initialState, {
    [fetchUserPropertiesRequest.type]: handleFetchRequest,
    [fetchUserPropertiesSuccess.type]: handleFetchSuccess,
    [fetchUserPropertiesFailure.type]: handleFetchFailure,
    [fetchPropertiesRequest.type]: handleFetchRequest,
    [fetchPropertiesSuccess.type]: handleFetchAllSuccess,
    [fetchPropertiesFailure.type]: handleFetchFailure,
    [fetchPropertyRequest.type]: handleFetchRequest,
    [fetchPropertySuccess.type]: handleFetchSingleSuccess,
    [fetchPropertyFailure.type]: handleFetchFailure,
});

function handlePostRequest(state: PropertiesState) {
    state.isPosting = true;
    state.postSuccess = false;
    state.postError = null;
}

function handlePostSuccess(state: PropertiesState, action: PayloadAction<Property>) {
    state.isPosting = false;
    state.postSuccess = true;
    state.properties[action.payload.id] = action.payload;
}

function handlePostFailure(state: PropertiesState, action: PayloadAction<string>) {
    state.isPosting = false;
    state.postError = action.payload;
}

function handleFetchRequest(state: PropertiesState) {
    state.isFetching = true;
    state.fetchError = null;
}

function handleFetchSuccess(state: PropertiesState, action: PayloadAction<Property[]>) {
    state.isFetching = false;
    state.properties = convertArrToObj(action.payload);
}

function handleFetchAllSuccess(state: PropertiesState, action: PayloadAction<PropertiesResponse>) {
    state.isFetching = false;
    state.properties = convertArrToObj(action.payload.items);
    state.itemCount = action.payload.itemCount;
}

function handleFetchSingleSuccess(state: PropertiesState, action: PayloadAction<Property>) {
    state.isFetching = false;
    state.properties[action.payload.id] = action.payload;
}

function handleFetchFailure(state: PropertiesState, action: PayloadAction<string>) {
    state.isFetching = false;
    state.fetchError = action.payload;
    state.itemCount = 0;
}
