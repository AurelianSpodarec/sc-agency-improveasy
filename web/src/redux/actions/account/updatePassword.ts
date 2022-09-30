import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

import { IUpdatePasswordPostBody } from 'src/types/shared/Account';

export const updatePasswordRequest = createAction('updatePasswordRequest');
export const updatePasswordSuccess = createAction('updatePasswordSuccess');
export const updatePasswordFailure = createAction('updatePasswordFailure');

export const updatePassword =
    (postBody: IUpdatePasswordPostBody) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(updatePasswordRequest());
        try {
            await api.patch('account/password', postBody);

            dispatch(updatePasswordSuccess());
        } catch (e) {
            handleApiErrors(dispatch, updatePasswordFailure, e as APIError);
        }
    };
