import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

import { IAccountDetails } from 'src/types/shared/Account';

export const fetchAccountDetailsRequest = createAction('fetchAccountDetailsRequest');
export const fetchAccountDetailsSuccess = createAction<IAccountDetails>(
    'fetchAccountDetailsSuccess',
);
export const fetchAccountDetailsFailure = createAction('fetchAccountDetailsFailure');

export const fetchAccountDetails =
    () =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(fetchAccountDetailsRequest());
        try {
            const { data } = await api.get<IAccountDetails>('account');
            dispatch(fetchAccountDetailsSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, fetchAccountDetailsFailure, e as APIError);
        }
    };
