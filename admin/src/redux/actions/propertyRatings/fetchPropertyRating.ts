import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';

import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';
import { ImprovementType } from 'src/types/shared/ImprovementType';

export const fetchPropertyRatingRequest = createAction('fetchPropertyRatingRequest');
export const fetchPropertyRatingSuccess = createAction<ImprovementType>(
    'fetchPropertyRatingSuccess',
);
export const fetchPropertyRatingFailure = createAction<string>('fetchPropertyRatingFailure');

export const fetchPropertyRating =
    (propertyID: number) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(fetchPropertyRatingRequest());

        try {
            const { data } = await api.get<ImprovementType>(`propertyRating/${propertyID}`);

            dispatch(fetchPropertyRatingSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, fetchPropertyRatingFailure, e as APIError);
        }
    };
