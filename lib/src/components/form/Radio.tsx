import useFieldValidation from '../../hooks/useFieldValidation';
import { useCallback, useEffect } from 'react';
import FormField from './FormField';
import { DropdownOption } from '../../types/shared/DropdownOption';
import { FormInputProps } from '../../types/shared/FormInputProps';

const Radio: React.FC<RadioProps> = ({
    name,
    disabled = false,
    value = null,
    options = [],
    onChange,
    label = '',
    customValidate,
}) => {
    const [error, showError] = useFieldValidation({
        name,
        customValidate,
        value,
    });

    const handleChange = useCallback(
        (newVal: number) => {
            onChange(name, newVal);
        },
        [name, onChange],
    );

    useEffect(() => {
        if (!value) {
            handleChange(options[0]?.value);
        }
    }, [value, handleChange, options]);

    return (
        <FormField name={name} label={label} required error={error}>
            <div className="form-radio-list">{options.map(renderOption)}</div>
        </FormField>
    );

    function renderOption(opt: DropdownOption<number>) {
        const id = `radio_${name}_${opt.value}`;
        return (
            <div className="form-radio" key={id}>
                <input
                    type="radio"
                    value={opt.value}
                    id={id}
                    name={name}
                    onChange={() => handleChange(opt.value)}
                    disabled={disabled}
                />
                <label
                    className={`content ${disabled ? 'disabled' : ''}`}
                    htmlFor={id}
                    onClick={showError}
                >
                    <div className="outer-box">
                        <div className={`inner-box ${value === opt.value ? 'active' : ''}`}></div>
                    </div>
                    <p>{opt.label}</p>
                </label>
            </div>
        );
    }
};

interface RadioProps extends FormInputProps<number | null> {
    options: DropdownOption<number>[];
    label?: string;
}

export default Radio;
