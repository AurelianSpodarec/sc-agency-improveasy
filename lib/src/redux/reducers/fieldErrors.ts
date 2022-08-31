import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { FieldError, FieldErrorsObj } from '../../types/shared/fieldErrors';

import {
    addFieldError,
    removeFieldError,
    clearFieldErrors,
    setErrorsVisible,
    setFieldErrors,
    addFormError,
    clearFormError,
} from '../actions/fieldErrors';

interface FieldErrorState {
    fieldErrors: FieldErrorsObj;
    formError: null | string;
    errorsVisible: boolean;
}

const initialState: FieldErrorState = {
    fieldErrors: {},
    formError: null,
    errorsVisible: false,
};

export default createReducer(initialState, {
    [addFieldError.type]: handleAddError,
    [addFormError.type]: handleAddFormError,
    [clearFormError.type]: handleClearFormError,
    [removeFieldError.type]: handleRemoveError,
    [clearFieldErrors.type]: handleClearErrors,
    [setFieldErrors.type]: handleSetErrors,
    [setErrorsVisible.type]: handleSetErrorsVisible,
});

function handleAddError(state: FieldErrorState, action: PayloadAction<FieldError>) {
    state.fieldErrors[action.payload.name] = action.payload.value;
}

function handleAddFormError(state: FieldErrorState, action: PayloadAction<string | null>) {
    state.formError = action.payload;
}

function handleClearFormError(state: FieldErrorState) {
    state.formError = null;
}

function handleRemoveError(state: FieldErrorState, action: PayloadAction<string>) {
    delete state.fieldErrors[action.payload];
}

function handleSetErrors(state: FieldErrorState, action: PayloadAction<FieldErrorsObj>) {
    state.errorsVisible = true;
    state.fieldErrors = action.payload;
    state.formError = null;
}

function handleClearErrors(state: FieldErrorState) {
    state.fieldErrors = {};
    state.formError = null;
}

function handleSetErrorsVisible(state: FieldErrorState, action: PayloadAction<boolean>) {
    state.errorsVisible = action.payload;
}
