import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

// ConfirmEmail
export const postConfirmEmailRequest = createAction('postConfirmEmailRequest');
export const postConfirmEmailSuccess = createAction('postConfirmEmailSuccess');
export const postConfirmEmailFailure = createAction('postConfirmEmailFailure');

export const postConfirmEmail =
    (token: string) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(postConfirmEmailRequest());

        try {
            const payload = { token };

            const { data } = await api.post<typeof payload, ConfirmEmailResponse>(
                'Auth/Confirm-Email',
                payload,
            );

            localStorage.setItem('jwt', data.token);
            localStorage.setItem('refreshToken', data.refreshToken);

            dispatch(postConfirmEmailSuccess());
        } catch (e) {
            console.log({ e });
            handleApiErrors(dispatch, postConfirmEmailFailure, e as APIError);
        }
    };

export interface ConfirmEmailResponse {
    token: string;
    refreshToken: string;
}
