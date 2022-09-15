const FormField: React.FC<FormFieldProps> = ({
    rightLabel,
    children,
    name,
    label,
    required,
    error,
    className = '',
}) => (
    <div className={`form-field ${className} ${required ? 'required' : ''}`}>
        <div className="d-flex justify-between">
            {!!label && (
                <label htmlFor={name} className="form-label">
                    {label}
                    {required && <span className="form-asterisk">*</span>}
                </label>
            )}
            {rightLabel && rightLabel}
        </div>

        {children}

        {!!error && <p className="form-error">{error}</p>}
    </div>
);

interface FormFieldProps {
    children: React.ReactNode;
    name: string;
    label?: string;
    required?: boolean;
    error?: string | null;
    rightLabel?: any;
    className?: string;
}

export default FormField;
