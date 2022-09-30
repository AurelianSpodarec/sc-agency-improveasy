import { RootState } from '@reducers/index';

export const selectAccountIsFetching = (state: RootState) => state.accountReducer.isFetching;
export const selectAccountDetails = (state: RootState) => state.accountReducer.accountDetails;
export const selectAccountIsPosting = (state: RootState) => state.accountReducer.isPosting;
export const selectAccountPostSucccess = (state: RootState) => state.accountReducer.postSuccess;
export const selectAccountError = (state: RootState) => state.accountReducer.error;
export const selectPatchPasswordIsPatching = (state: RootState) =>
    state.accountReducer.isPatchingPassword;
export const selectPatchPasswordSuccess = (state: RootState) =>
    state.accountReducer.patchPasswordSuccess;
export const selectPatchPasswordError = (state: RootState) =>
    state.accountReducer.patchPasswordError;
