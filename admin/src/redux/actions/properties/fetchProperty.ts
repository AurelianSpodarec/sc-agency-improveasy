import { Property } from '../../../types/shared/Property';
import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';

import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

export const fetchPropertyRequest = createAction('fetchPropertyRequest');
export const fetchPropertySuccess = createAction<Property>('fetchPropertySuccess');
export const fetchPropertyFailure = createAction<string>('fetchPropertyFailure');

export const fetchProperty =
    (id: number) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(fetchPropertyRequest());

        try {
            const { data } = await api.get<Property>(`properties/${id}`);
            dispatch(fetchPropertySuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, fetchPropertyFailure, e as APIError);
        }
    };
