import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { PostcodeAddress, PostcodeSuggestion } from '../../types/shared/PostcodeFinder';
import {
    postcodeAddressFailure,
    postcodeAddressRequest,
    postcodeAddressSuccess,
    postcodeFindFailure,
    postcodeFindRequest,
    postcodeFindSuccess,
    postcodeRetrieveRequest,
    postcodeRetrieveSuccess,
    resetPostcodeFinder,
} from '../actions/postcodeFinder';

interface PostcodeFinderState {
    isPosting: boolean;
    error: string | null;
    suggestions: PostcodeSuggestion[];
    addresses: PostcodeAddress[];
}

const initialState: PostcodeFinderState = {
    isPosting: false,
    error: null,
    suggestions: [],
    addresses: [],
};

export default createReducer(initialState, {
    [postcodeFindRequest.type]: handlePostRequest,
    [postcodeFindSuccess.type]: handleSuggestionsSuccess,
    [postcodeFindFailure.type]: handlePostError,
    [postcodeAddressRequest.type]: handlePostRequest,
    [postcodeAddressSuccess.type]: handleSuggestionsSuccess,
    [postcodeAddressFailure.type]: handlePostError,
    [postcodeRetrieveRequest.type]: handlePostRequest,
    [postcodeRetrieveSuccess.type]: handleAddressesSuccess,
    [postcodeRetrieveRequest.type]: handlePostRequest,
    [resetPostcodeFinder.type]: () => initialState,
});

function handlePostRequest(state: PostcodeFinderState) {
    state.isPosting = true;
    state.error = null;
    state.suggestions = [];
    state.addresses = [];
}

function handlePostError(state: PostcodeFinderState, action: PayloadAction<string>) {
    state.isPosting = false;
    state.error = action.payload;
}

function handleSuggestionsSuccess(
    state: PostcodeFinderState,
    action: PayloadAction<PostcodeSuggestion[]>,
) {
    state.isPosting = false;
    state.suggestions = action.payload;
}

function handleAddressesSuccess(
    state: PostcodeFinderState,
    action: PayloadAction<PostcodeAddress[]>,
) {
    state.isPosting = false;
    state.addresses = action.payload;
}
