import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';
import { UpdatePasswordPost } from 'src/types/shared/AdminUser';

export const updateUserPasswordRequest = createAction('updateUserPasswordRequest');
export const updateUserPasswordSuccess = createAction('updateUserPasswordSuccess');
export const updateUserPasswordFailure = createAction('updateUserPasswordFailure');

export const updateUserPassword =
    (id: number, postbody: UpdatePasswordPost) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(updateUserPasswordRequest());

        try {
            await api.patch(`Users/${id}/updatePassword`, postbody);

            dispatch(updateUserPasswordSuccess());
        } catch (e) {
            handleApiErrors(dispatch, updateUserPasswordFailure, e as APIError);
        }
    };
