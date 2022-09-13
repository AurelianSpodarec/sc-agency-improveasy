import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

export const postResetPasswordRequest = createAction('postResetPasswordRequest');
export const postResetPasswordSuccess = createAction('postResetPasswordSuccess');
export const postResetPasswordFailure = createAction('postResetPasswordFailure');

export const postResetPassword =
    (token: string, newPassword: string) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(postResetPasswordRequest());

        try {
            const payload = { token, newPassword };
            await api.post('Auth/Confirm-Email', payload);

            dispatch(postResetPasswordSuccess());
        } catch (e) {
            console.log({ e });
            handleApiErrors(dispatch, postResetPasswordFailure, e as APIError);
        }
    };
