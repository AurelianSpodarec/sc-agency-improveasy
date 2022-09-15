import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { IProperty } from '../../types/shared/Properties';
import {
    postUserPropertiesFiltersFailure,
    postUserPropertiesFiltersRequest,
    postUserPropertiesFiltersSuccess,
} from '@actions/properties/postUserPropertiesFilters';
import { convertArrToObj } from 'lib/src/utils/generic';

interface IPropertyState {
    isPosting: boolean;
    postSuccess: boolean;
    error: string | null;
    properties: Record<number, IProperty>;
}

const initialState: IPropertyState = {
    isPosting: false,
    postSuccess: false,
    error: null,
    properties: {},
};

export default createReducer(initialState, {
    [postUserPropertiesFiltersRequest.type]: handlePostRequest,
    [postUserPropertiesFiltersSuccess.type]: handlePostFiltersSuccess,
    [postUserPropertiesFiltersFailure.type]: handleFailure,
});

function handlePostRequest(state: IPropertyState) {
    state.isPosting = true;
    state.postSuccess = false;
    state.error = null;
}

function handlePostFiltersSuccess(state: IPropertyState, action: PayloadAction<IProperty[]>) {
    state.isPosting = false;
    state.postSuccess = true;
    state.error = null;
    state.properties = convertArrToObj(action.payload);
}

function handleFailure(state: IPropertyState, action: PayloadAction<string>) {
    state.isPosting = false;
    state.postSuccess = false;
    state.error = action.payload;
}
