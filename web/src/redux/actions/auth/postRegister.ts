import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

// Register
export const postRegisterRequest = createAction('postRegisterRequest');
export const postRegisterSuccess = createAction('postRegisterSuccess');
export const postRegisterFailure = createAction('postRegisterFailure');

export const postRegister =
    (postBody: RegisterRequestModel) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(postRegisterRequest());
        try {
            const { data } = await api.post<RegisterRequestModel, RegisterResponse>(
                'auth/register',
                postBody,
            );

            localStorage.setItem('jwt', data.token);
            localStorage.setItem('refreshToken', data.refreshToken);

            dispatch(postRegisterSuccess());
        } catch (e) {
            handleApiErrors(dispatch, postRegisterFailure, e as APIError);
        }
    };

interface RegisterRequestModel {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface RegisterResponse {
    token: string;
    refreshToken: string;
}
