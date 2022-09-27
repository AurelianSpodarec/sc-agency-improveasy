import {
    fetchImprovementTypesRequest,
    fetchImprovementTypesSuccess,
    fetchImprovementTypesFailure,
} from './../actions/improvementTypes/fetchImprovementTypes';
import { convertArrToObj } from 'lib/src/utils/generic';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { ImprovementType } from 'src/types/shared/ImprovementType';

interface AuthState {
    isFetching: boolean;
    error: string | null;
    improvementTypes: Record<number, ImprovementType>;
}

const initialState: AuthState = {
    isFetching: false,
    error: null,
    improvementTypes: {},
};

export default createReducer(initialState, {
    [fetchImprovementTypesRequest.type]: handleFetchRequest,
    [fetchImprovementTypesSuccess.type]: handleFetchSuccess,
    [fetchImprovementTypesFailure.type]: handleFetchFailure,
});

function handleFetchRequest(state: AuthState) {
    state.isFetching = true;
    state.error = null;
}

function handleFetchSuccess(state: AuthState, action: PayloadAction<ImprovementType[]>) {
    state.isFetching = false;
    state.improvementTypes = convertArrToObj(action.payload);
}

function handleFetchFailure(state: AuthState, action: PayloadAction<string>) {
    state.isFetching = false;
    state.error = action.payload;
}
