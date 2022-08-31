import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';
import { AdminUser, AdminUserPost } from 'src/types/shared/AdminUser';

export const createAdminUserRequest = createAction('createAdminUserRequest');
export const createAdminUserSuccess = createAction<AdminUserPost>('createAdminUserSuccess');
export const createAdminUserFailure = createAction('createAdminUserFailure');

export const createAdminUser =
    (postbody: AdminUserPost) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(createAdminUserRequest());
        try {
            const { data }: CreateUserResponse = await api.post(`adminUsers`, postbody);

            dispatch(createAdminUserSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, createAdminUserFailure, e as APIError);
        }
    };

interface CreateUserResponse {
    data: AdminUser;
}
