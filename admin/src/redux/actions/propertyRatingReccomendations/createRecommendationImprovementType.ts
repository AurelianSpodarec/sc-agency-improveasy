import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';

import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';
import { PropertyRatingRecomendation } from 'src/types/shared/PropertyRatingRecomendation';

export const createRecommendationImprovementTypeRequest = createAction(
    'createRecommendationImprovementTypeRequest',
);
export const createRecommendationImprovementTypeSuccess = createAction<PropertyRatingRecomendation>(
    'createRecommendationImprovementTypeSuccess',
);
export const createRecommendationImprovementTypeFailure = createAction<string>(
    'createRecommendationImprovementTypeFailure',
);

export const createRecommendationImprovementType =
    (ratingID: number, improvementType: string) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(createRecommendationImprovementTypeRequest());

        try {
            const { data } = await api.post<unknown, PropertyRatingRecomendation>(
                `PropertyRatingRecommendations/${ratingID}/attach/new`,
                { improvementType },
            );
            dispatch(createRecommendationImprovementTypeSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, createRecommendationImprovementTypeFailure, e as APIError);
        }
    };
