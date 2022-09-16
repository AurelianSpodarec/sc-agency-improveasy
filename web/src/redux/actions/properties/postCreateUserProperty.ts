import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';
import { ICreatePropertyForm, IProperty } from 'src/types/shared/Properties';

export const postCreateUserPropertyRequest = createAction('postCreateUserPropertyRequest');
export const postCreateUserPropertySuccess = createAction<IProperty[]>(
    'postCreateUserPropertySuccess',
);
export const postCreateUserPropertyFailure = createAction('postCreateUserPropertyFailure');

export const postCreateUserProperty =
    (postBody: ICreatePropertyForm) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(postCreateUserPropertyRequest());
        try {
            const { data } = await api.post<ICreatePropertyForm, IProperty[]>(
                'properties',
                postBody,
            );
            dispatch(postCreateUserPropertySuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, postCreateUserPropertyFailure, e as APIError);
        }
    };
