import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';
import { User } from 'src/types/shared/User';

export const fetchSingleAdminUserRequest = createAction('fetchSingleAdminUserRequest');
export const fetchSingleAdminUserSuccess = createAction<User>('fetchSingleAdminUserSuccess');
export const fetchSingleAdminUserFailure = createAction('fetchSingleAdminUserFailure');

export const fetchSingleAdminUser =
    (id: number) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(fetchSingleAdminUserRequest());
        try {
            const { data }: UserResponse = await api.get(`adminUsers/${id}`);
            dispatch(fetchSingleAdminUserSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, fetchSingleAdminUserFailure, e as APIError);
        }
    };

interface UserResponse {
    data: User;
}
