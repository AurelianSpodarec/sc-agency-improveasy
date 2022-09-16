import { Property } from '../../../types/shared/Property';
import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';

import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

export const fetchPropertiesRequest = createAction('fetchPropertiesRequest');
export const fetchPropertiesSuccess = createAction<Property[]>('fetchPropertiesSuccess');
export const fetchPropertiesFailure = createAction<string>('fetchPropertiesFailure');

export const fetchProperties =
    () =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(fetchPropertiesRequest());

        try {
            const { data } = await api.get<Property[]>('properties');

            dispatch(fetchPropertiesSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, fetchPropertiesFailure, e as APIError);
        }
    };
