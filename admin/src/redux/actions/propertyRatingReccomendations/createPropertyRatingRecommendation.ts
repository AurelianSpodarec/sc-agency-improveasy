import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';

import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';
import { PropertyRatingRecomendation } from 'src/types/shared/PropertyRatingRecomendation';

export const createPropertyRatingRecommendationRequest = createAction(
    'createPropertyRatingRecommendationRequest',
);
export const createPropertyRatingRecommendationSuccess = createAction<PropertyRatingRecomendation>(
    'createPropertyRatingRecommendationSuccess',
);
export const createPropertyRatingRecommendationFailure = createAction<string>(
    'createPropertyRatingRecommendationFailure',
);

export const createPropertyRatingRecommendation =
    (propertyID: number, improvementTypeID: number) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(createPropertyRatingRecommendationRequest());

        try {
            const { data } = await api.post<unknown, PropertyRatingRecomendation>(
                `propertyRating/${propertyID}/attach/${improvementTypeID}`,
                {},
            );
            dispatch(createPropertyRatingRecommendationSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, createPropertyRatingRecommendationFailure, e as APIError);
        }
    };
