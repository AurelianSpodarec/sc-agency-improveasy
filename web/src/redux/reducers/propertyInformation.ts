import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { IEPC, IPropertyRatingRecommendations } from '../../types/shared/Properties';

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
import {
    fetchPropertyRatingRecommendationsFailure,
    fetchPropertyRatingRecommendationsRequest,
    fetchPropertyRatingRecommendationsSuccess,
} from '@actions/propertyInformation/fetchPropertyRatingRecommendations';
import {
    toggleRecommendationFailure,
    toggleRecommendationRequest,
    toggleRecommendationSuccess,
} from '@actions/propertyInformation/toggleRecommendation';
import { convertArrToObj } from 'lib/src/utils/generic';
import {
    fetchUsersPropertyCountFailure,
    fetchUsersPropertyCountRequest,
    fetchUsersPropertyCountSuccess,
} from '@actions/propertyInformation/fetchUsersPropertyCount';

interface IPropertyState {
    isFetching: boolean;
    isPosting: boolean;
    postSuccess: boolean;
    error: string | null;
    propertyEPCRating: Record<number, IEPC | null>;
    propertyRatingRecommendations: Record<
        number,
        Record<number, IPropertyRatingRecommendations> | null
    >;
    usersPropertyCount: number | null;
}

const initialState: IPropertyState = {
    isFetching: false,
    isPosting: false,
    postSuccess: false,
    error: null,
    propertyEPCRating: {},
    propertyRatingRecommendations: {},
    usersPropertyCount: null,
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
    [fetchPropertyRatingRecommendationsRequest.type]: handleFetchRequest,
    [fetchPropertyRatingRecommendationsSuccess.type]: handleFetchRatingsSuccess,
    [fetchPropertyRatingRecommendationsFailure.type]: handleFailure,
    [toggleRecommendationRequest.type]: handlePostRequest,
    [toggleRecommendationSuccess.type]: handlePostRecommendationSuccess,
    [toggleRecommendationFailure.type]: handleFailure,
    [fetchUsersPropertyCountRequest.type]: handleFetchRequest,
    [fetchUsersPropertyCountSuccess.type]: handleFetchCountSuccess,
    [fetchUsersPropertyCountFailure.type]: handleFailure,
});

function handleFetchRequest(state: IPropertyState) {
    state.isFetching = true;
    state.error = null;
}

function handleFetchEpcSuccess(state: IPropertyState, action: PayloadAction<IEPC>) {
    state.isFetching = false;
    state.propertyEPCRating[action.payload.propertyID] = action.payload;
}

function handleFailure(state: IPropertyState, action: PayloadAction<string>) {
    state.isPosting = false;
    state.postSuccess = false;
    state.error = action.payload;
}

function handlePostRequest(state: IPropertyState) {
    state.isPosting = true;
    state.error = null;
    state.postSuccess = false;
}

function handlePostSuccess(state: IPropertyState) {
    state.isPosting = false;
    state.postSuccess = true;
    state.error = null;
}

function handleFetchRatingsSuccess(
    state: IPropertyState,
    action: PayloadAction<IPropertyRatingRecommendations[] | []>,
) {
    state.isFetching = false;

    if (action.payload.length > 0) {
        state.propertyRatingRecommendations[action.payload[0].propertyRatingID] = convertArrToObj(
            action.payload,
        );
    } else {
        state.propertyRatingRecommendations = {};
    }
}

function handlePostRecommendationSuccess(
    state: IPropertyState,
    action: PayloadAction<IPropertyRatingRecommendations>,
) {
    state.isPosting = false;
    state.postSuccess = true;
    state.error = null;
    state.propertyRatingRecommendations[action.payload.propertyRatingID] = {
        ...state.propertyRatingRecommendations[action.payload.propertyRatingID],
        [action.payload.id]: action.payload,
    };
}

function handleFetchCountSuccess(state: IPropertyState, action: PayloadAction<number>) {
    state.isFetching = false;
    state.usersPropertyCount = action.payload;
}
