import { RootState } from '@reducers/index';

export const getPropertiesIsPosting = (state: RootState): boolean =>
    state.propertiesReducer.isPosting;
export const getPropertiesPostSuccess = (state: RootState): boolean =>
    state.authReducer.postSuccess;
export const getPropertiesPostError = (state: RootState): string | null =>
    state.propertiesReducer.postError;

export const getPropertiesIsFetching = (state: RootState): boolean =>
    state.propertiesReducer.isFetching;
export const getPropertiesFetchError = (state: RootState): string | null =>
    state.propertiesReducer.fetchError;
