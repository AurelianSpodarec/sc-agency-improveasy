import React, { SyntheticEvent, useCallback } from 'react';

import useFieldValidation from '../../hooks/useFieldValidation';
import { FormInputProps } from '../../types/shared/FormInputProps';
import FormField from './FormField';

const NumberInput: React.FC<NumberInputProps> = ({
    name,
    value,
    onChange,
    label = '',
    placeholder = '',
    required = false,
    min,
    max,
    disabled,
    customValidate,
    onBlur = () => {},
    className = '',
}) => {
    const memoizedValidate = useCallback(_validate, [min, max]);
    const [error, showError] = useFieldValidation({
        name,
        required,
        value,
        customValidate,
        extendedValidate: memoizedValidate,
    });

    return (
        <FormField
            name={name}
            label={label}
            required={required}
            error={error}
            className={className}
        >
            <input
                type="number"
                className={`form-input text-area ${error ? 'error' : ''}`}
                placeholder={placeholder}
                name={name}
                id={name}
                value={value === null ? '' : value}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={disabled}
                min={min}
                max={max}
            />
        </FormField>
    );

    function handleBlur() {
        showError();
        onBlur();
    }

    function handleChange(e: SyntheticEvent) {
        e.preventDefault();

        const stringVal = (e.target as HTMLInputElement).value;
        onChange(name, stringVal ? parseInt(stringVal) : null);
    }

    function _validate(val: null | number) {
        if (val === null) return;

        if (min && val < min) {
            return `Value cannot be less than ${min},`;
        }
        if (max && val > max) {
            return `Value cannot be greater than ${max}.`;
        }
    }
};

interface NumberInputProps extends FormInputProps<number | null> {
    placeholder?: string;
    label?: string;
    min?: number;
    max?: number;
    onBlur?: () => void;
    className?: string;
}

export default NumberInput;
