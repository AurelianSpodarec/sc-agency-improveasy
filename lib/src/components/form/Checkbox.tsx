import FormField from './FormField';
import useFieldValidation from '../../hooks/useFieldValidation';
import { FormInputProps } from '../../types/shared/FormInputProps';

const Checkbox: React.FC<CheckboxProps> = ({
    name,
    value,
    onChange,
    label = '',
    placeholder = '',
    required = false,
    disabled = false,
    customValidate,
    className = '',
    leftPlaceholder,
}) => {
    const [error, showError] = useFieldValidation({
        name,
        required,
        value,
        customValidate,
    });

    return (
        <FormField name={name} label={label} required={required} error={error}>
            <div className="form-checkbox">
                <input
                    type="checkbox"
                    name={name}
                    id={name}
                    checked={!!value}
                    onChange={handleChange}
                    disabled={disabled}
                />
                <label
                    className={`content ${disabled ? 'disabled' : ''} ${className}`}
                    htmlFor={name}
                >
                    {!!leftPlaceholder && <p>{leftPlaceholder}</p>}
                    <div className="outer-box">
                        <i className={`inner-box fa fa-check ${value ? 'active' : ''}`}></i>
                    </div>
                    {!!placeholder && <p>{placeholder}</p>}
                </label>
            </div>
        </FormField>
    );

    function handleChange() {
        const newVal = !value;
        console.log({newVal})
        onChange(name, newVal);
        showError();
    }
};

interface CheckboxProps extends FormInputProps<boolean> {
    label?: string;
    placeholder?: string;
    className?: string;
    leftPlaceholder?: string;
}

export default Checkbox;
