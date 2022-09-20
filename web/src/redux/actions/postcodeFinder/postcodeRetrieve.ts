import { createAction } from '@reduxjs/toolkit';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { APIError } from 'lib/src/types/APIError';
import { AppDispatch } from '../../store';
import { PostcodeAddress, PostcodeRetrieveRequest } from '../../../types/shared/PostcodeFinder';

// postcode retrieve (step 3)
export const postcodeRetrieveRequest = createAction('postcodeRetrieveRequest');
export const postcodeRetrieveSuccess = createAction<PostcodeAddress[]>('postcodeRetrieveSuccess');
export const postcodeRetrieveFailure = createAction('postcodeRetrieveFailure');

export const postcodeRetrieve =
    (postBody: PostcodeRetrieveRequest) => async (dispatch: AppDispatch) => {
        dispatch(postcodeRetrieveRequest());

        try {
            const { data } = await api.post<PostcodeRetrieveRequest, PostcodeAddress[]>(
                'loqate/address/retrieve',
                postBody,
            );

            return dispatch(postcodeRetrieveSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, postcodeRetrieveFailure, e as APIError);
        }
    };
