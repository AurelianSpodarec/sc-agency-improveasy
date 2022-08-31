import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';
import { UpdatePasswordPost } from 'src/types/shared/AdminUser';

export const updateAdminUserPasswordRequest = createAction('updateAdminUserPasswordRequest');
export const updateAdminUserPasswordSuccess = createAction('updateAdminUserPasswordSuccess');
export const updateAdminUserPasswordFailure = createAction('updateAdminUserPasswordFailure');

export const updateAdminUserPassword =
    (id: number, postbody: UpdatePasswordPost) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(updateAdminUserPasswordRequest());
        try {
            await api.patch(`adminUsers/${id}/updatePassword`, postbody);

            dispatch(updateAdminUserPasswordSuccess());
        } catch (e) {
            handleApiErrors(dispatch, updateAdminUserPasswordFailure, e as APIError);
        }
    };
