import { RootState } from '@reducers/index';

export const getImprovementTypesIsFetching = (state: RootState) =>
    state.improvementTypesReducer.isFetching;
export const getImprovementTypesError = (state: RootState) => state.improvementTypesReducer.error;
export const getImprovementTypes = (state: RootState) =>
    state.improvementTypesReducer.improvementTypes;
