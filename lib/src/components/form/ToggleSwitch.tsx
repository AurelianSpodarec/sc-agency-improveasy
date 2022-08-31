import React from 'react';
import useFieldValidation from '../../hooks/useFieldValidation';
import { FormInputProps } from '../../types/shared/FormInputProps';

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
    name,
    onChange,
    value,
    disabled,
    hideDisabled,
    label = '',
    customValidate,
    textColour = 'black',
}) => {
    const [error, _] = useFieldValidation({
        name,
        customValidate,
        value,
    });

    return (
        <div
            className={`checkbox ${disabled ? 'left grey-out' : ''} ${
                hideDisabled && disabled ? 'hide' : ''
            } `}
        >
            <input
                id={name}
                onChange={handleChange}
                type="checkbox"
                checked={value}
                name={name}
                disabled={disabled}
            />
            <label htmlFor={name}>
                {label.length && <span className={`text ${textColour}`}>{label}</span>}
                <span className="outer">
                    <span className="inner" />
                </span>
            </label>
            {!!(error && error.length) && <p className="error red-text text-accent-4">{error}</p>}
        </div>
    );

    function handleChange() {
        const newVal = !value;
        onChange(name, newVal);
    }
};

interface ToggleSwitchProps extends FormInputProps<boolean> {
    hideDisabled?: boolean;
    label?: string;
    textColour?: string;
}

export default ToggleSwitch;
