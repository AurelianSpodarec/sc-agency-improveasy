import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

import { FetchPropertiesRequest, IProperty } from '../../../types/shared/Properties';

export const fetchUserPropertiesRequest = createAction('fetchUserPropertiesRequest');
export const fetchUserPropertiesSuccess = createAction<IProperty[]>('fetchUserPropertiesSuccess');
export const fetchUserPropertiesFailure = createAction('fetchUserPropertiesFailure');

export const fetchUserProperties =
    (params: FetchPropertiesRequest) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(fetchUserPropertiesRequest());
        try {
            const { data } = await api.get<IProperty[]>('properties/filter', params);
            dispatch(fetchUserPropertiesSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, fetchUserPropertiesFailure, e as APIError);
        }
    };
