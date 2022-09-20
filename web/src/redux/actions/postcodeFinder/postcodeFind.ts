import { createAction } from '@reduxjs/toolkit';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { APIError } from 'lib/src/types/APIError';
import { AppDispatch } from '../../store';
import { PostcodeFindRequest, PostcodeSuggestion } from '../../../types/shared/PostcodeFinder';

// postcode find (step 1)
export const postcodeFindRequest = createAction('postcodeFindRequest');
export const postcodeFindSuccess = createAction<PostcodeSuggestion[]>('postcodeFindSuccess');
export const postcodeFindFailure = createAction('postcodeFindFailure');

export const postcodeFind = (postBody: PostcodeFindRequest) => async (dispatch: AppDispatch) => {
    dispatch(postcodeFindRequest());

    try {
        const { data } = await api.post<PostcodeFindRequest, PostcodeSuggestion[]>(
            'loqate/postcode',
            postBody,
        );

        return dispatch(postcodeFindSuccess(data));
    } catch (e) {
        handleApiErrors(dispatch, postcodeFindFailure, e as APIError);
    }
};
