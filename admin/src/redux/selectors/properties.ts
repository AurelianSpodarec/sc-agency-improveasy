import { RootState } from '@reducers/index';

export const getPropertiesIsPosting = (state: RootState) => state.propertiesReducer.isPosting;
export const getPropertiesPostSuccess = (state: RootState) => state.authReducer.postSuccess;
export const getPropertiesPostError = (state: RootState) => state.propertiesReducer.postError;

export const getPropertiesIsFetching = (state: RootState) => state.propertiesReducer.isFetching;
export const getPropertiesFetchError = (state: RootState) => state.propertiesReducer.fetchError;
export const getProperties = (state: RootState) =>
    Object.values(state.propertiesReducer.properties);
