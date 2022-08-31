import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

export const deleteUserRequest = createAction('deleteUserRequest');
export const deleteUserSuccess = createAction('deleteUserSuccess');
export const deleteUserFailure = createAction('deleteUserFailure');

export const deleteUser =
    (id: number) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(deleteUserRequest());

        try {
            await api.delete(`users/${id}`);

            dispatch(deleteUserSuccess());
        } catch (e) {
            handleApiErrors(dispatch, deleteUserFailure, e as APIError);
        }
    };
