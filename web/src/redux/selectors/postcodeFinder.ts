import { RootState } from '@reducers/index';
import { PostcodeAddress, PostcodeSuggestion } from '../../types/shared/PostcodeFinder';

export const getPostcodeFinderSuggestions = (state: RootState): PostcodeSuggestion[] =>
    state.postcodeFinderReducer.suggestions;
export const getPostcodeFinderAddresses = (state: RootState): PostcodeAddress[] =>
    state.postcodeFinderReducer.addresses;
export const getPostcodeFinderIsFetching = (state: RootState) =>
    state.postcodeFinderReducer.isPosting;
export const getPostcodeFinderError = (state: RootState) => state.postcodeFinderReducer.error;
