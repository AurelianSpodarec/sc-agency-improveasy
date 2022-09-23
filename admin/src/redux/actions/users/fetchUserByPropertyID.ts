import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';
import { User } from 'src/types/shared/User';

export const fetchUserByPropertyIdRequest = createAction('fetchUserByPropertyIDRequest');
export const fetchUserByPropertyIdSuccess = createAction<User>('fetchUserByPropertyIDSuccess');
export const fetchUserByPropertyIdFailure = createAction('fetchUserByPropertyIDFailure');

export const fetchUserByPropertyID =
    (id: number) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(fetchUserByPropertyIdRequest());
        try {
            const { data } = await api.get<User>(`properties/${id}/user`);
            dispatch(fetchUserByPropertyIdSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, fetchUserByPropertyIdFailure, e as APIError);
        }
    };
