import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';

import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';
import { PropertyRatingRecomendation } from 'src/types/shared/PropertyRatingRecomendation';

export const fetchPropertyRatingRecommendationsRequest = createAction(
    'fetchPropertyRatingRecommendationsRequest',
);
export const fetchPropertyRatingRecommendationsSuccess = createAction<PropertyRatingRecomendation>(
    'fetchPropertyRatingRecommendationsSuccess',
);
export const fetchPropertyRatingRecommendationsFailure = createAction<string>(
    'fetchPropertyRatingRecommendationsFailure',
);

export const fetchPropertyRatingRecommendations =
    (propertyID: number) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(fetchPropertyRatingRecommendationsRequest());

        try {
            const { data } = await api.get<PropertyRatingRecomendation>(
                `propertyRating/${propertyID}`,
            );
            dispatch(fetchPropertyRatingRecommendationsSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, fetchPropertyRatingRecommendationsFailure, e as APIError);
        }
    };
