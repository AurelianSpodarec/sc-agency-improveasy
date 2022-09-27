import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';

import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

export const deletePropertyRatingRecommendationRequest = createAction(
    'deletePropertyRatingRecommendationRequest',
);
export const deletePropertyRatingRecommendationSuccess = createAction<number>(
    'deletePropertyRatingRecommendationSuccess',
);
export const deletePropertyRatingRecommendationFailure = createAction<string>(
    'deletePropertyRatingRecommendationFailure',
);

export const deletePropertyRatingRecommendation =
    (id: number) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(deletePropertyRatingRecommendationRequest());

        try {
            await api.delete(`propertyRatingRecommendations/${id}`);
            dispatch(deletePropertyRatingRecommendationSuccess(id));
        } catch (e) {
            handleApiErrors(dispatch, deletePropertyRatingRecommendationFailure, e as APIError);
        }
    };
