import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

// ConfirmEmail
export const postSendForgotPasswordRequest = createAction('postSendForgotPasswordRequest');
export const postSendForgotPasswordSuccess = createAction('postSendForgotPasswordSuccess');
export const postSendForgotPasswordFailure = createAction('postSendForgotPasswordFailure');

export const postSendForgotPassword =
    (email: string) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(postSendForgotPasswordRequest());

        try {
            await api.post('Auth/Forgot-Password', { email });
            dispatch(postSendForgotPasswordSuccess());
        } catch (e) {
            console.log({ err: e });
            handleApiErrors(dispatch, postSendForgotPasswordFailure, e as APIError);
        }
    };
