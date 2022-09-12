import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

// Login
export const resendConfirmEmailRequest = createAction('resendConfirmEmailRequest');
export const resendConfirmEmailSuccess = createAction('resendConfirmEmailSuccess');
export const resendConfirmEmailFailure = createAction('resendConfirmEmailFailure');

export const resendConfirmEmail =
    (email: string) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(resendConfirmEmailRequest());
        try {
            await api.post('auth/resend-verification-token', { email });

            dispatch(resendConfirmEmailSuccess());
        } catch (e) {
            console.log({ e });
            handleApiErrors(dispatch, resendConfirmEmailFailure, e as APIError);
        }
    };
