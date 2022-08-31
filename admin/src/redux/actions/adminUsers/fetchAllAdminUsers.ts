import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';
import { AdminUser } from 'src/types/shared/AdminUser';

export const fetchAllAdminUsersRequest = createAction('fetchAllAdminUsersRequest');
export const fetchAllAdminUsersSuccess = createAction<AdminUser[]>('fetchAllAdminUsersSuccess');
export const fetchAllAdminUsersFailure = createAction('fetchAllAdminUsersFailure');

export const fetchAllAdminUsers =
    () =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(fetchAllAdminUsersRequest());
        try {
            const { data }: Response = await api.get('adminUsers');

            dispatch(fetchAllAdminUsersSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, fetchAllAdminUsersFailure, e as APIError);
        }
    };

interface Response {
    data: AdminUser[];
}
