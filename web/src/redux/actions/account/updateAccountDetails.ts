import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

import { IAccountDetails, IUpdateAccountPostBody } from 'src/types/shared/Account';

export const updateAccountDetailsRequest = createAction('updateAccountDetailsRequest');
export const updateAccountDetailsSuccess = createAction<IAccountDetails>(
    'updateAccountDetailsSuccess',
);
export const updateAccountDetailsFailure = createAction('updateAccountDetailsFailure');

export const updateAccountDetails =
    (postBody: IUpdateAccountPostBody) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(updateAccountDetailsRequest());
        try {
            const { data } = await api.put<IUpdateAccountPostBody, IAccountDetails>(
                'account',
                postBody,
            );
            dispatch(updateAccountDetailsSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, updateAccountDetailsFailure, e as APIError);
        }
    };
