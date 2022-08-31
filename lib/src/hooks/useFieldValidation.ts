import { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFieldErrors, getFieldErrorsVisible } from '../redux/selectors/fieldErrors';
import { addFieldError, removeFieldError } from '../redux/actions/fieldErrors';
import { isEmpty } from '../utils/generic';
import usePrevious from './usePrevious';
import { CustomValidateFunction, ExtendedValidateFunction } from '../types/shared/formValidation';

function useFieldValidation<TValue>({
    name,
    customValidate,
    required = false,
    value,
    extendedValidate,
}: UseFieldValidationConfig<TValue>): UseFieldValidationErr {
    const dispatch = useDispatch();
    const error = useSelector(getFieldErrors)[name];

    const [errorVisible, setErrorVisible] = useState(false);
    const allErrorsVisible = useSelector(getFieldErrorsVisible);
    const prevAllErrorsVisible = usePrevious(allErrorsVisible);

    const showError = useCallback(() => {
        setErrorVisible(true);
    }, []);

    const addError = useCallback(
        (err: string) => {
            dispatch(addFieldError({ name, value: err }));
        },
        [name, dispatch],
    );

    const removeError = useCallback(() => {
        dispatch(removeFieldError(name));
    }, [name, dispatch]);

    useEffect(() => {
        if (!prevAllErrorsVisible && allErrorsVisible) showError();
    }, [showError, allErrorsVisible, prevAllErrorsVisible]);

    useEffect(() => {
        return () => removeError();
    }, [removeError]);

    const validate = useCallback(() => {
        const extendedError = extendedValidate ? extendedValidate(value) : null;
        const customError = customValidate ? customValidate(value) : null;

        if (required && isEmpty(value)) {
            addError('This is a required field.');
        } else if (extendedError) {
            addError(extendedError);
        } else if (customError) {
            addError(customError);
        } else if (error) {
            removeError();
        }
        // eslint-disable-next-line
    }, [value, required, extendedValidate, customValidate, addError, removeError]);

    useEffect(() => {
        validate();
    }, [value, validate]);

    const visibleError = errorVisible ? error : null;
    return [visibleError, showError];
}

interface UseFieldValidationConfig<TValue> {
    name: string;
    value: TValue;
    required?: boolean;
    customValidate?: CustomValidateFunction<TValue>;
    extendedValidate?: ExtendedValidateFunction<TValue>;
}

type UseFieldValidationErr = [visibleError: string | null, showError: () => void];
export default useFieldValidation;
