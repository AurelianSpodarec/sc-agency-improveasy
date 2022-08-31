import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';
import { AdminUser, AdminUserPost } from 'src/types/shared/AdminUser';

export const updateAdminUserRequest = createAction('updateAdminUserRequest');
export const updateAdminUserSuccess = createAction<AdminUserPost>('updateAdminUserSuccess');
export const updateAdminUserFailure = createAction('updateAdminUserFailure');

export const updateAdminUser =
    (id: number, postbody: AdminUserPost) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(updateAdminUserRequest());
        try {
            const { data }: UpdateAdminResponse = await api.patch(`adminUsers/${id}`, postbody);

            dispatch(updateAdminUserSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, updateAdminUserFailure, e as APIError);
        }
    };

interface UpdateAdminResponse {
    data: AdminUser;
}
