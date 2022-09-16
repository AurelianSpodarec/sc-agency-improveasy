import { Property } from './../../../types/shared/Property';
import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';

import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

export const fetchUserPropertiesRequest = createAction('fetchUserPropertiesRequest');
export const fetchUserPropertiesSuccess = createAction<Property[]>('fetchUserPropertiesSuccess');
export const fetchUserPropertiesFailure = createAction<string>('fetchUserPropertiesFailure');

export const fetchUserProperties =
    (userID: number) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(fetchUserPropertiesRequest());

        try {
            const { data } = await api.get<Property[]>(`properties/user/${userID}`);

            dispatch(fetchUserPropertiesSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, fetchUserPropertiesFailure, e as APIError);
        }
    };
