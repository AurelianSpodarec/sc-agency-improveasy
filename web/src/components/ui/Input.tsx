function Input({ className, name, placeholder, position = 'right', icon }: InputProps) {
    return (
        <div className="h-full relative">
            <input
                className={`input ${className ? className : ''}`}
                placeholder={placeholder}
                name={name}
            />
            {icon && <div className={`input__icon input__icon--${position}`}>{icon}</div>}
        </div>
    );
}

export default Input;

interface InputProps {
    className?: string;
    name: string;
    placeholder?: string;
    position?: 'right' | 'left';
    icon?: any;
}
