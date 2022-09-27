import { RootState } from '@reducers/index';

export const getPropertyRatingsIsFetching = (state: RootState) =>
    state.propertyRatingsReducer.isFetching;
export const getPropertyRatingsFetchError = (state: RootState) =>
    state.propertyRatingsReducer.fetchError;
export const getPropertyRatingsIsPosting = (state: RootState) =>
    state.propertyRatingsReducer.isPosting;
export const getPropertyRatingsPostError = (state: RootState) =>
    state.propertyRatingsReducer.postError;
export const getPropertyRatingsPostSuccess = (state: RootState) =>
    state.propertyRatingsReducer.postSuccess;

export const getPropertyRatings = (state: RootState) =>
    state.propertyRatingsReducer.propertyRatings;
export const getPropertyRating = (state: RootState, propertyID: number) =>
    state.propertyRatingsReducer.propertyRatings[propertyID];
