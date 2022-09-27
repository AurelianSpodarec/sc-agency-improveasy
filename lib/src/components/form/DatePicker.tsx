import { forwardRef, useEffect, useRef, MouseEventHandler, SyntheticEvent, LegacyRef } from 'react';
import ReactDatePicker from 'react-datepicker';

import useFieldValidation from '../../hooks/useFieldValidation';
import FormField from './FormField';

import 'react-datepicker/dist/react-datepicker.css';
import { FormInputProps } from '../../types/shared/FormInputProps';

const eightyYearsBeforeNow = new Date(new Date().setFullYear(new Date().getFullYear() - 80));
const tenYearsFromNow = new Date(new Date().setFullYear(new Date().getFullYear() + 10));

const DatePicker: React.FC<DatePickerProps> = ({
    name,
    value,
    onChange,
    label = '',
    placeholder = '',
    required = false,
    minDate = eightyYearsBeforeNow,
    maxDate = tenYearsFromNow,
    disabled,
    customValidate,
    className = '',
}) => {
    const [error, showError] = useFieldValidation({
        name,
        required,
        customValidate,
        value,
    });

    const hasMounted = useRef(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        if (hasMounted.current) showError();
        else hasMounted.current = true;
    }, [value, showError]);

    const CustomInput = forwardRef<HTMLInputElement, ForwardRefProps>(({ value, onClick }, ref) => (
        <div className={`form-datepicker ${disabled ? 'disabled' : ''}`} ref={ref}>
            <input
                className={`form-input text-area ${error ? 'error' : ''}`}
                placeholder={placeholder}
                name={name}
                value={value}
                onClick={onClick}
                onChange={() => {}}
                ref={inputRef}
                disabled={disabled}
            />
            {!!value && !disabled && (
                <button className="remove" onClick={handleClearDate}>
                    <i className="fal fa-times" />
                </button>
            )}

            <button className="calendar" onClick={handleInputFocus}>
                <i className="far fa-calendar-alt"></i>
            </button>
        </div>
    ));

    return (
        <FormField
            name={name}
            label={label}
            required={required}
            error={error}
            className={className}
        >
            <ReactDatePicker
                selected={value}
                onChange={_handleChange}
                customInput={<CustomInput />}
                dateFormat="dd/MM/yyyy"
                disabled={disabled}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                minDate={minDate}
                maxDate={maxDate}
            />
        </FormField>
    );

    function _handleChange(newVal: Date | null) {
        const c = typeof undefined;
        onChange(name, newVal);
    }

    function handleClearDate(e: SyntheticEvent) {
        e.preventDefault();
        e.stopPropagation();
        _handleChange(null);
    }

    function handleInputFocus(e: SyntheticEvent) {
        e.preventDefault();
        e.stopPropagation();

        inputRef?.current?.click();
    }
};

interface DatePickerProps extends FormInputProps<Date | null> {
    label?: string;
    placeholder?: string;
    minDate?: Date;
    maxDate?: Date;
    className?: string;
}

interface ForwardRefProps {
    value?: string;
    onClick?: MouseEventHandler;
}

export default DatePicker;
