import React, { SyntheticEvent, useCallback } from 'react';

import useFieldValidation from '../../hooks/useFieldValidation';
import { FormInputProps } from '../../types/shared/FormInputProps';
import FormField from './FormField';

const TextInput: React.FC<TextInputProps> = ({
    name,
    number,
    value,
    onChange,
    label = '',
    placeholder = '',
    type = 'text',
    required = false,
    validationRegExp,
    minLength,
    maxLength,
    minNumber,
    maxNumber,
    disabled,
    customValidate,
    rightLabel,
    className = '',
    onFocus,
}) => {
    const memoizedValidate = useCallback(_validate, [
        minNumber,
        maxNumber,
        minLength,
        maxLength,
        validationRegExp,
        type,
    ]);
    const [error, showError] = useFieldValidation({
        name,
        required,
        value,
        customValidate,
        extendedValidate: memoizedValidate,
    });

    return (
        <FormField
            rightLabel={rightLabel}
            name={name}
            label={label}
            required={required}
            error={error}
            className={className}
        >
            <input
                type={type}
                className={`input form-input text-area ${error ? 'error' : ''}`}
                placeholder={placeholder}
                name={name}
                id={name}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={disabled}
                onFocus={onFocus}
            />
        </FormField>
    );

    function handleBlur() {
        showError();
    }

    function handleChange(e: SyntheticEvent) {
        e.preventDefault();

        if(number) {
            if(!Number((e.target as HTMLInputElement).value)) return
        }
            

        const newVal =
            type === 'number'
                ? parseInt((e.target as HTMLInputElement).value)
                : (e.target as HTMLInputElement).value;

        if (typeof newVal !== 'number') onChange(name, newVal);
    }

    function _validate(val: string | number) {
        if (!val) return;

        if (typeof val === 'string') {
            if (type === 'email' && !validateEmail(val)) {
                return 'Please provide a valid email.';
            }
            if (type !== 'number' && minLength && val.length < minLength) {
                return `Value must have at least ${minLength} characters.`;
            }
            if (type !== 'number' && maxLength && val.length > maxLength) {
                return `Value cannot have more than ${maxLength} characters.`;
            }
            if (type !== 'number' && validationRegExp && !RegExp(validationRegExp).test(val)) {
                return 'Invalid value provided.';
            }
        }

        if (type === 'number' && minNumber && val < minNumber) {
            return `Value cannot be less than ${minNumber},`;
        }
        if (type === 'number' && maxNumber && val > maxNumber) {
            return `Value cannot be greater than ${maxNumber}.`;
        }
    }
};

function validateEmail(val: string) {
    // eslint-disable-next-line
    const reg =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(val);
}

interface TextInputProps extends FormInputProps<string> {
    placeholder?: string;
    label?: string;
    validationRegExp?: string;
    minLength?: number;
    number?: boolean;
    maxLength?: number;
    type?: string;
    minNumber?: number;
    maxNumber?: number;
    rightLabel?: any;
    className?: string;
    onFocus?: () => void;
}

export default TextInput;
