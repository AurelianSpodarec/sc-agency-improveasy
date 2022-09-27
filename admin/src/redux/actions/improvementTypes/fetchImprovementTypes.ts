import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';

import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';
import { ImprovementType } from 'src/types/shared/ImprovementType';

export const fetchImprovementTypesRequest = createAction('fetchImprovementTypesRequest');
export const fetchImprovementTypesSuccess = createAction<ImprovementType>(
    'fetchImprovementTypesSuccess',
);
export const fetchImprovementTypesFailure = createAction<string>('fetchImprovementTypesFailure');

export const fetchImprovementTypes =
    () =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(fetchImprovementTypesRequest());

        try {
            const { data } = await api.get<ImprovementType>('properties');

            dispatch(fetchImprovementTypesSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, fetchImprovementTypesFailure, e as APIError);
        }
    };
