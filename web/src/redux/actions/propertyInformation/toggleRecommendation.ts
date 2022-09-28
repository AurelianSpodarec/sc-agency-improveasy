import { createAction } from '@reduxjs/toolkit';
import { IPropertyRatingRecommendations } from '../../../types/shared/Properties';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

export const toggleRecommendationRequest = createAction('toggleRecommendationRequest');
export const toggleRecommendationSuccess = createAction<IPropertyRatingRecommendations>(
    'toggleRecommendationSuccess',
);
export const toggleRecommendationFailure = createAction('toggleRecommendationFailure');

export const toggleRecommendation =
    (recommendationID: number) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(toggleRecommendationRequest());
        try {
            const { data }: IResponse = await api.patch(
                `propertyRatingRecommendations/${recommendationID}`,
                {},
            );
            dispatch(toggleRecommendationSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, toggleRecommendationFailure, e as APIError);
        }
    };

interface IResponse {
    data: IPropertyRatingRecommendations;
}
