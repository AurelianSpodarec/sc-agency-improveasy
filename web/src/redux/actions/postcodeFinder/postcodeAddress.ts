import { createAction } from '@reduxjs/toolkit';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { APIError } from 'lib/src/types/APIError';
import { AppDispatch } from '../../store';
import { PostcodeAddressRequest, PostcodeSuggestion } from '../../../types/shared/PostcodeFinder';

// postcode address (step 2)
export const postcodeAddressRequest = createAction('postcodeAddressRequest');
export const postcodeAddressSuccess = createAction<PostcodeSuggestion[]>('postcodeAddressSuccess');
export const postcodeAddressFailure = createAction('postcodeAddressFailure');

export const postcodeAddress =
    (postBody: PostcodeAddressRequest) => async (dispatch: AppDispatch) => {
        dispatch(postcodeAddressRequest());

        try {
            const { data } = await api.post<PostcodeAddressRequest, PostcodeSuggestion[]>(
                'loqate/address/find',
                postBody,
            );

            return dispatch(postcodeAddressSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, postcodeAddressFailure, e as APIError);
        }
    };
