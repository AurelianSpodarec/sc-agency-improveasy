import { createAction, Dispatch } from '@reduxjs/toolkit';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { userRoles } from 'lib/src/shared/enums/dropdownEnums';
import { User } from 'src/types/shared/User';
import { APIError } from 'lib/src/types/APIError';

export const createUserRequest = createAction('createUserRequest');
export const createUserSuccess = createAction<User>('createUserSuccess');
export const createUserFailure = createAction('createUserFailure');

export const createUser =
    (postbody: CreateUserRequestModel) =>
    async (dispatch: Dispatch): Promise<void> => {
        dispatch(createUserRequest());
        try {
            const { data }: { data: User } = await api.post(`users`, postbody);

            dispatch(createUserSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, createUserFailure, e as APIError);
        }
    };

interface CreateUserRequestModel {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    roles: userRoles[];
}
