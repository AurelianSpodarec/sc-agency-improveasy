import { onChangeFunction } from 'lib/src/types/shared/FormInputProps';
import { SyntheticEvent } from 'react';

function Input({
    className,
    name,
    value,
    onChange,
    placeholder,
    position = 'right',
    icon,
}: InputProps) {
    return (
        <div className="h-full relative">
            <input
                className={`input ${className ? className : ''}`}
                placeholder={placeholder}
                name={name}
                onChange={handleChange}
                value={value}
            />
            {icon && <div className={`input__icon input__icon--${position}`}>{icon}</div>}
        </div>
    );

    function handleChange(e: SyntheticEvent) {
        e.preventDefault();
        const newVal = (e.target as HTMLInputElement).value;

        if (typeof newVal !== 'number') onChange(name, newVal);
    }
}

export default Input;

interface InputProps {
    className?: string;
    name: string;
    placeholder?: string;
    position?: 'right' | 'left';
    icon?: any;
    value: string;
    onChange: onChangeFunction<string>;
}
