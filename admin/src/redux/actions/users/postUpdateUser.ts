import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';
import { User, UserPost } from 'src/types/shared/User';

export const updateUserRequest = createAction('updateUserRequest');
export const updateUserSuccess = createAction<UserPost>('updateUserSuccess');
export const updateUserFailure = createAction('updateUserFailure');

export const updateUser =
    (id: number, postbody: UserPost) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(updateUserRequest());

        try {
            const { data }: UpdateUserResponse = await api.put(`users/${id}`, postbody);

            dispatch(updateUserSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, updateUserFailure, e as APIError);
        }
    };

interface UpdateUserResponse {
    data: User;
}
