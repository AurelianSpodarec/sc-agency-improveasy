import { RootState } from '@reducers/index';

export const getAuthIsPosting = (state: RootState): boolean => state.authReducer.isPosting;
export const getAuthPostSuccess = (state: RootState): boolean => state.authReducer.postSuccess;
export const getAuthIsConfirmed = (state: RootState): boolean => state.authReducer.isConfirmed;
export const getAuthError = (state: RootState): string | null => state.authReducer.error;
