import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';
import { User } from 'src/types/shared/User';

export const fetchSingleUserRequest = createAction('fetchSingleUserRequest');
export const fetchSingleUserSuccess = createAction<User>('fetchSingleUserSuccess');
export const fetchSingleUserFailure = createAction('fetchSingleUserFailure');

export const fetchSingleUser =
    (id: number) =>
    async (
        dispatch: AppDispatch,
        // todo really?
    ): Promise<void> => {
        dispatch(fetchSingleUserRequest());
        try {
            const { data } = await api.get<User>(`users/${id}`);

            dispatch(fetchSingleUserSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, fetchSingleUserFailure, e as APIError);
        }
    };
