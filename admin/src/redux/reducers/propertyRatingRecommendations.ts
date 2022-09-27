import {
    fetchPropertyRatingRecommendationsFailure,
    fetchPropertyRatingRecommendationsRequest,
    fetchPropertyRatingRecommendationsSuccess,
    createPropertyRatingRecommendationRequest,
    createPropertyRatingRecommendationSuccess,
    createPropertyRatingRecommendationFailure,
} from './../actions/propertyRatingReccomendations';

import { convertArrToObj } from 'lib/src/utils/generic';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { PropertyRatingRecomendation } from 'src/types/shared/PropertyRatingRecomendation';

interface AuthState {
    isFetching: boolean;
    fetchError: string | null;
    isPosting: boolean;
    postError: string | null;
    postSuccess: boolean;
    recommendations: Record<number, PropertyRatingRecomendation>;
}

const initialState: AuthState = {
    isFetching: false,
    fetchError: null,
    isPosting: false,
    postSuccess: false,
    postError: null,
    recommendations: {},
};

export default createReducer(initialState, {
    [fetchPropertyRatingRecommendationsRequest.type]: handleFetchRequest,
    [fetchPropertyRatingRecommendationsSuccess.type]: handleFetchSuccess,
    [fetchPropertyRatingRecommendationsFailure.type]: handleFetchFailure,
    [createPropertyRatingRecommendationRequest.type]: handlePostRequest,
    [createPropertyRatingRecommendationSuccess.type]: handlePostSuccess,
    [createPropertyRatingRecommendationFailure.type]: handlePostFailure,
});

function handleFetchRequest(state: AuthState) {
    state.isFetching = true;
    state.fetchError = null;
    state.recommendations = {};
}

function handleFetchSuccess(
    state: AuthState,
    action: PayloadAction<PropertyRatingRecomendation[]>,
) {
    state.isFetching = false;
    state.recommendations = convertArrToObj(action.payload);
}

function handleFetchFailure(state: AuthState, action: PayloadAction<string>) {
    state.isFetching = false;
    state.fetchError = action.payload;
}

function handlePostRequest(state: AuthState) {
    state.isPosting = true;
    state.postSuccess = false;
    state.postError = null;
}

function handlePostSuccess(state: AuthState, action: PayloadAction<PropertyRatingRecomendation>) {
    state.isPosting = false;
    state.postSuccess = true;
    state.recommendations[action.payload.id] = action.payload;
}

function handlePostFailure(state: AuthState, action: PayloadAction<string>) {
    state.isPosting = false;
    state.postError = action.payload;
}
