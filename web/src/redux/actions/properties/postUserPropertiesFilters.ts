import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

import { IProperty, IPropertyFilterRequest } from '../../../types/shared/Properties';

export const postUserPropertiesFiltersRequest = createAction('postUserPropertiesFiltersRequest');
export const postUserPropertiesFiltersSuccess = createAction<IProperty[]>(
    'postUserPropertiesFiltersSuccess',
);
export const postUserPropertiesFiltersFailure = createAction('postUserPropertiesFiltersFailure');

export const postUserPropertiesFilters =
    (postBody: IPropertyFilterRequest) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(postUserPropertiesFiltersRequest());
        try {
            const { data } = await api.post<IPropertyFilterRequest, IProperty[]>(
                'properties/filter',
                postBody,
            );
            dispatch(postUserPropertiesFiltersSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, postUserPropertiesFiltersFailure, e as APIError);
        }
    };
