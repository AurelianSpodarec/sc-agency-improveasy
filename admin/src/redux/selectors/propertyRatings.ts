import { RootState } from '@reducers/index';

export const getPropertyRatingsIsFetching = (state: RootState) =>
    state.propertyRatingsReducer.isFetching;
export const getPropertyRatingsError = (state: RootState) => state.propertyRatingsReducer.error;
export const getPropertyRatings = (state: RootState) =>
    state.propertyRatingsReducer.propertyRatings;
export const getPropertyRating = (state: RootState, propertyID: number) =>
    state.propertyRatingsReducer.propertyRatings[propertyID];
