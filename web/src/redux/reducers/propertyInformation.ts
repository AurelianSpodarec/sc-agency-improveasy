import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { IEPC } from '../../types/shared/Properties';

import {
    fetchPropertyEPCRatingFailure,
    fetchPropertyEPCRatingRequest,
    fetchPropertyEPCRatingSuccess,
} from '@actions/propertyInformation/fetchPropertyEPCRating';
import {
    patchRequestNewEPCFailure,
    patchRequestNewEPCRequest,
    patchRequestNewEPCSuccess,
} from '@actions/propertyInformation/patchRequestNewEPC';
import {
    patchRequestSurveyFailure,
    patchRequestSurveyRequest,
    patchRequestSurveySuccess,
} from '@actions/propertyInformation/patchRequestSurvey';

interface IPropertyState {
    isFetching: boolean;
    isPosting: boolean;
    postSuccess: boolean;
    error: string | null;
    propertyEPCRating: IEPC | null;
}

const initialState: IPropertyState = {
    isFetching: false,
    isPosting: false,
    postSuccess: false,
    error: null,
    propertyEPCRating: null,
};

export default createReducer(initialState, {
    [fetchPropertyEPCRatingRequest.type]: handleFetchRequest,
    [fetchPropertyEPCRatingSuccess.type]: handleFetchEpcSuccess,
    [fetchPropertyEPCRatingFailure.type]: handleFailure,
    [patchRequestNewEPCRequest.type]: handlePostRequest,
    [patchRequestNewEPCSuccess.type]: handlePostSuccess,
    [patchRequestNewEPCFailure.type]: handleFailure,
    [patchRequestSurveyRequest.type]: handlePostRequest,
    [patchRequestSurveySuccess.type]: handlePostSuccess,
    [patchRequestSurveyFailure.type]: handleFailure,
});

function handleFetchRequest(state: IPropertyState) {
    state.isFetching = true;
    state.error = null;
}

function handleFetchEpcSuccess(state: IPropertyState, action: PayloadAction<IEPC>) {
    state.isFetching = false;
    state.propertyEPCRating = action.payload;
}

function handleFailure(state: IPropertyState, action: PayloadAction<string>) {
    state.isPosting = false;
    state.postSuccess = false;
    state.error = action.payload;
}

function handlePostRequest(state: IPropertyState) {
    state.isPosting = true;
    state.error = null;
}

function handlePostSuccess(state: IPropertyState) {
    state.isPosting = false;
    state.postSuccess = true;
    state.error = null;
}
