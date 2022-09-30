import { RootState } from '@reducers/index';

export const selectPropertiesIsFetching = (state: RootState) => state.propertiesReducer.isFetching;
export const selectPropertiesIsPosting = (state: RootState) => state.propertiesReducer.isPosting;
export const selectPropertiesPostSuccess = (state: RootState) =>
    state.propertiesReducer.postSuccess;
export const selectPropertiesError = (state: RootState) => state.propertiesReducer.error;

export const selectProperties = (state: RootState) => state.propertiesReducer.properties;
export const selectSingleProperty = (state: RootState, id: number) =>
    state.propertiesReducer.properties[id];
export const selectLastCreatedPropertyId = (state: RootState) =>
    state.propertiesReducer.lastCreatedID;

export const selectPropertiesIsPostingAccessDetails = (state: RootState) =>
    state.propertiesReducer.isPostingAccessDetails;
export const selectPropertyAccessDetailsPostSuccess = (state: RootState) =>
    state.propertiesReducer.postAccessDetailsSuccess;
