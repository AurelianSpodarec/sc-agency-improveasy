import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

export const deleteAdminUserRequest = createAction('deleteAdminUserRequest');
export const deleteAdminUserSuccess = createAction('deleteAdminUserSuccess');
export const deleteAdminUserFailure = createAction('deleteAdminUserFailure');

export const deleteAdminUser =
    (id: number) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(deleteAdminUserRequest());

        try {
            await api.delete(`adminUsers/${id}`);

            dispatch(deleteAdminUserSuccess());
        } catch (e) {
            handleApiErrors(dispatch, deleteAdminUserFailure, e as APIError);
        }
    };
