const FormField: React.FC<FormFieldProps> = ({ children, name, label, required, error }) => (
    <div className="form-field">
        {!!label && (
            <label htmlFor={name} className="form-label">
                {label}
                {required && <span className="form-asterisk">*</span>}
            </label>
        )}

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
}

export default FormField;
