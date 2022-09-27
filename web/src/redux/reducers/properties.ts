import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { IProperty } from '../../types/shared/Properties';
import {
    postUserPropertiesFiltersFailure,
    postUserPropertiesFiltersRequest,
    postUserPropertiesFiltersSuccess,
} from '@actions/properties/postUserPropertiesFilters';
import { convertArrToObj } from 'lib/src/utils/generic';
import {
    fetchUserPropertiesFailure,
    fetchUserPropertiesRequest,
    fetchUserPropertiesSuccess,
} from '@actions/properties/fetchUserProperties';
import {
    postCreateUserPropertyFailure,
    postCreateUserPropertyRequest,
    postCreateUserPropertySuccess,
} from '@actions/properties/postCreateUserProperty';
import {
    fetchPropertyByIDFailure,
    fetchPropertyByIDRequest,
    fetchPropertyByIDSuccess,
} from '@actions/properties/fetchPropertyByID';
import {
    updatePropertyAddressFailure,
    updatePropertyAddressRequest,
    updatePropertyAddressSuccess,
} from '@actions/properties/updatePropertyAddress';
import {
    updatePropertyAccessDetailsFailure,
    updatePropertyAccessDetailsRequest,
    updatePropertyAccessDetailsSuccess,
} from '@actions/properties/updatePropertyAccessDetails';

interface IPropertyState {
    isFetching: boolean;
    isPosting: boolean;
    postSuccess: boolean;
    error: string | null;
    properties: Record<number, IProperty>;
    lastCreatedID: number | null;
}

const initialState: IPropertyState = {
    isFetching: false,
    isPosting: false,
    postSuccess: false,
    error: null,
    properties: {},
    lastCreatedID: null,
};

export default createReducer(initialState, {
    [fetchUserPropertiesRequest.type]: handleFetchRequest,
    [fetchUserPropertiesSuccess.type]: handleFetchSuccess,
    [fetchUserPropertiesFailure.type]: handleFailure,
    [postUserPropertiesFiltersRequest.type]: handlePostRequest,
    [postUserPropertiesFiltersSuccess.type]: handlePostFiltersSuccess,
    [postUserPropertiesFiltersFailure.type]: handleFailure,
    [postCreateUserPropertyRequest.type]: handlePostRequest,
    [postCreateUserPropertySuccess.type]: handlePostPropertySuccess,
    [postCreateUserPropertyFailure.type]: handleFailure,
    [fetchPropertyByIDRequest.type]: handleFetchRequest,
    [fetchPropertyByIDSuccess.type]: handleFetchSingleProperty,
    [fetchPropertyByIDFailure.type]: handleFailure,
    [updatePropertyAddressRequest.type]: handlePostRequest,
    [updatePropertyAddressSuccess.type]: handlePostPropertySuccess,
    [updatePropertyAddressFailure.type]: handleFailure,
    [updatePropertyAccessDetailsRequest.type]: handlePostRequest,
    [updatePropertyAccessDetailsSuccess.type]: handlePostPropertySuccess,
    [updatePropertyAccessDetailsFailure.type]: handleFailure,
});

function handleFetchRequest(state: IPropertyState) {
    state.isFetching = true;
    state.error = null;
}

function handleFetchSuccess(state: IPropertyState, action: PayloadAction<IProperty[]>) {
    state.isFetching = false;
    state.error = null;
    state.properties = convertArrToObj(action.payload);
}

function handlePostRequest(state: IPropertyState) {
    state.isPosting = true;
    state.postSuccess = false;
    state.error = null;
    state.lastCreatedID = null;
}

function handlePostFiltersSuccess(state: IPropertyState, action: PayloadAction<IProperty[]>) {
    state.isPosting = false;
    state.postSuccess = true;
    state.error = null;
    state.properties = convertArrToObj(action.payload);
}

function handlePostPropertySuccess(state: IPropertyState, action: PayloadAction<IProperty>) {
    state.isPosting = false;
    state.postSuccess = true;
    state.error = null;
    state.properties[action.payload.id] = action.payload;
    state.lastCreatedID = action.payload.id;
}

function handleFetchSingleProperty(state: IPropertyState, action: PayloadAction<IProperty>) {
    state.isFetching = false;
    state.error = null;
    state.properties[action.payload.id] = action.payload;
}

function handleFailure(state: IPropertyState, action: PayloadAction<string>) {
    state.isPosting = false;
    state.postSuccess = false;
    state.error = action.payload;
}
