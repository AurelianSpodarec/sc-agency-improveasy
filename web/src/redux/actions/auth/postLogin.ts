import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors, LoginResponse } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

// Login
export const postLoginRequest = createAction('postLoginRequest');
export const postLoginSuccess = createAction('postLoginSuccess');
export const postLoginFailure = createAction('postLoginFailure');

export const postLogin =
    (postBody: LoginRequestModel) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(postLoginRequest());
        try {
            const { data } = await api.post<LoginRequestModel, LoginResponse>(
                'auth/login',
                postBody,
            );

            localStorage.setItem('jwt', data.token);
            localStorage.setItem('refreshToken', data.refreshToken);

            dispatch(postLoginSuccess());
        } catch (e) {
            console.log({ e });
            handleApiErrors(dispatch, postLoginFailure, e as APIError);
        }
    };

interface LoginRequestModel {
    email: string;
    password: string;
}
