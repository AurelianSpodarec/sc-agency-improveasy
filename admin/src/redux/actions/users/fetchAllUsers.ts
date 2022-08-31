import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';
import { User } from 'src/types/shared/User';

export const fetchAllUsersRequest = createAction('fetchAllUsersRequest');
export const fetchAllUsersSuccess = createAction<User[]>('fetchAllUsersSuccess');
export const fetchAllUsersFailure = createAction('fetchAllUsersFailure');

export const fetchAllUsers =
    () =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(fetchAllUsersRequest());
        try {
            const { data } = await api.get<User[]>('users');

            dispatch(fetchAllUsersSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, fetchAllUsersFailure, e as APIError);
        }
    };
