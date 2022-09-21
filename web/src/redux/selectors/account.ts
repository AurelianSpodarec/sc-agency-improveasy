import { RootState } from '@reducers/index';

export const selectAccountIsFetching = (state: RootState) => state.accountReducer.isFetching;
export const selectAccountDetails = (state: RootState) => state.accountReducer.accountDetails;
