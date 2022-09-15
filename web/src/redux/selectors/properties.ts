import { RootState } from '@reducers/index';

export const selectPropertiesIsPosting = (state: RootState) => state.propertiesReducer.isPosting;
export const selectPropertiesPostSuccess = (state: RootState) =>
    state.propertiesReducer.postSuccess;
export const selectPropertiesError = (state: RootState) => state.propertiesReducer.error;

export const selectProperties = (state: RootState) => state.propertiesReducer.properties;
