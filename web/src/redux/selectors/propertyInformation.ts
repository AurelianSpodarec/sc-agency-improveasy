import { RootState } from '@reducers/index';

export const selectPropertyInformationIsFetching = (state: RootState) =>
    state.propertyInformationReducer.isFetching;
export const selectPropertyInformationIsPosting = (state: RootState) =>
    state.propertyInformationReducer.isPosting;
export const selectPropertyInformationPostSuccess = (state: RootState) =>
    state.propertyInformationReducer.postSuccess;
export const selectPropertyInformationError = (state: RootState) =>
    state.propertyInformationReducer.error;

export const selectPropertyEPCRating = (state: RootState) =>
    state.propertyInformationReducer.propertyEPCRating;
export const selectPropertyRatingRecommendations = (state: RootState) =>
    state.propertyInformationReducer.propertyRatingRecommendations;
