import { RootState } from '@reducers/index';

export const getPropertyRatingRecommendationsIsFetching = (state: RootState) =>
    state.propertyRatingRecommendationsReducer.isFetching;
export const getPropertyRatingRecommendationsError = (state: RootState) =>
    state.propertyRatingRecommendationsReducer.error;
export const getPropertyRatingRecommendations = (state: RootState) =>
    state.propertyRatingRecommendationsReducer.recommendations;
