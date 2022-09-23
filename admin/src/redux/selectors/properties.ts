import { RootState } from '@reducers/index';

export const getPropertiesIsPosting = (state: RootState) => state.propertiesReducer.isPosting;
export const getPropertiesPostSuccess = (state: RootState) => state.authReducer.postSuccess;
export const getPropertiesPostError = (state: RootState) => state.propertiesReducer.postError;

export const getPropertiesIsFetching = (state: RootState) => state.propertiesReducer.isFetching;
export const getPropertiesItemCount = (state: RootState) => state.propertiesReducer.itemCount;
export const getPropertiesFetchError = (state: RootState) => state.propertiesReducer.fetchError;
export const getProperties = (state: RootState) =>
    Object.values(state.propertiesReducer.properties);

export const getPropertiesByUserID = (state: RootState, userID: number) =>
    Object.values(state.propertiesReducer.properties).filter(p => p.userID === userID);
export const getProperty = (state: RootState, id: number) => state.propertiesReducer.properties[id];
