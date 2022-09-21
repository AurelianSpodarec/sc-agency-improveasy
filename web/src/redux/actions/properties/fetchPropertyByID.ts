import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

import { IProperty } from '../../../types/shared/Properties';

export const fetchPropertyByIDRequest = createAction('fetchPropertyByIDRequest');
export const fetchPropertyByIDSuccess = createAction<IProperty>('fetchPropertyByIDSuccess');
export const fetchPropertyByIDFailure = createAction('fetchPropertyByIDFailure');

export const fetchPropertyByID =
    (id: number) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(fetchPropertyByIDRequest());
        try {
            const { data } = await api.get<IProperty>(`properties/${id}`);
            dispatch(fetchPropertyByIDSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, fetchPropertyByIDFailure, e as APIError);
        }
    };
