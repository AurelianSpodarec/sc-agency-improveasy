export const getFieldErrors = state => state.fieldErrorsReducer.fieldErrors;
export const getFieldError = (state, name) => state.fieldErrorsReducer.fieldErrors[name];
export const getFormError = state => state.fieldErrorsReducer.formError;
export const getFieldErrorsVisible = state => state.fieldErrorsReducer.errorsVisible;
