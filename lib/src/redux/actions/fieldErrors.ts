import { createAction } from '@reduxjs/toolkit';

import { Dispatch } from 'redux';
import { FieldError, FieldErrorsObj } from '../../types/shared/fieldErrors';

export const addFieldError = createAction<FieldError>('addFieldError');
export const addFormError = createAction<string>('addFormError');
export const clearFormError = createAction('clearFormError');
export const removeFieldError = createAction<string>('removeFieldError');
export const clearFieldErrors = createAction('clearFieldErrors');
export const setFieldErrors = createAction<FieldErrorsObj>('setFieldErrors');
export const setErrorsVisible = createAction<boolean>('setErrorsVisible');

// todo TDispatch for AppDispatch?
export const showFieldErrors = () => (dispatch: Dispatch) => {
    dispatch(setErrorsVisible(true));

    setTimeout(() => {
        dispatch(setErrorsVisible(false));
    }, 1000);
};
