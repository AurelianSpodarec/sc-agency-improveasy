import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';
import { IPropertyRatingRecommendations } from 'src/types/shared/Properties';

export const fetchPropertyRatingRecommendationsRequest = createAction(
    'fetchPropertyRatingRecommendationsRequest',
);
export const fetchPropertyRatingRecommendationsSuccess =
    createAction<IPropertyRatingRecommendations>('fetchPropertyRatingRecommendationsSuccess');
export const fetchPropertyRatingRecommendationsFailure = createAction(
    'fetchPropertyRatingRecommendationsFailure',
);

export const fetchPropertyRatingRecommendations =
    (id: number) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(fetchPropertyRatingRecommendationsRequest());
        try {
            const { data } = await api.get<IPropertyRatingRecommendations>(
                `propertyRatingRecommendations/${id}`,
            );
            dispatch(fetchPropertyRatingRecommendationsSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, fetchPropertyRatingRecommendationsFailure, e as APIError);
        }
    };
