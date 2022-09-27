import {
    fetchPropertyRatingRequest,
    fetchPropertyRatingSuccess,
    fetchPropertyRatingFailure,
    updatePropertyRatingRequest,
    updatePropertyRatingSuccess,
    updatePropertyRatingFailure,
} from './../actions/propertyRatings';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { PropertyRating } from 'src/types/shared/PropertyRating';

interface AuthState {
    isFetching: boolean;
    fetchError: string | null;
    isPosting: boolean;
    postSuccess: boolean;
    postError: string | null;
    propertyRatings: Record<number, PropertyRating>;
}

const initialState: AuthState = {
    isFetching: false,
    fetchError: null,
    isPosting: false,
    postSuccess: false,
    postError: null,
    propertyRatings: {},
};

export default createReducer(initialState, {
    [fetchPropertyRatingRequest.type]: handleFetchRequest,
    [fetchPropertyRatingSuccess.type]: handleFetchSuccess,
    [fetchPropertyRatingFailure.type]: handleFetchFailure,
    [updatePropertyRatingRequest.type]: handlePostRequest,
    [updatePropertyRatingSuccess.type]: handlePostSuccess,
    [updatePropertyRatingFailure.type]: handlePostFailure,
});

function handleFetchRequest(state: AuthState) {
    state.isFetching = true;
    state.fetchError = null;
}

function handleFetchSuccess(state: AuthState, action: PayloadAction<PropertyRating>) {
    state.isFetching = false;
    state.propertyRatings[action.payload.propertyID] = action.payload;
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

function handlePostSuccess(state: AuthState, action: PayloadAction<PropertyRating>) {
    state.isPosting = false;
    state.postSuccess = true;
    state.propertyRatings[action.payload.propertyID] = action.payload;
}

function handlePostFailure(state: AuthState, action: PayloadAction<string>) {
    state.isPosting = false;
    state.postError = action.payload;
}
