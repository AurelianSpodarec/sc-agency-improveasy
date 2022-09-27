import { RootState } from '@reducers/index';

export const getPropertyRatingRecommendations = (state: RootState) =>
    Object.values(state.propertyRatingRecommendationsReducer.recommendations);
export const getPropertyRatingRecommendation = (state: RootState, id: number) =>
    state.propertyRatingRecommendationsReducer.recommendations[id];

export const getPropertyRatingRecommendationsIsFetching = (state: RootState) =>
    state.propertyRatingRecommendationsReducer.isFetching;
export const getPropertyRatingRecommendationsFetchError = (state: RootState) =>
    state.propertyRatingRecommendationsReducer.fetchError;

export const getPropertyRatingRecommendationsIsPosting = (state: RootState) =>
    state.propertyRatingRecommendationsReducer.isPosting;
export const getPropertyRatingRecommendationsPostSuccess = (state: RootState) =>
    state.propertyRatingRecommendationsReducer.postSuccess;
export const getPropertyRatingRecommendationsPostError = (state: RootState) =>
    state.propertyRatingRecommendationsReducer.postError;
