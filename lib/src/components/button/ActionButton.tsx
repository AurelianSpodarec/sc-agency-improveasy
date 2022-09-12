const ActionButton: React.FC<ActionButtonProps> = ({
    children,
    type = 'button',
    source = 'primary',
    className = '',
    icon,
    isPosting = false,
    disabled = false,
    onClick = () => {},
}) => (
    <button
        className={`button ${source} ${className}`}
        type={type}
        disabled={isPosting || disabled}
        onClick={onClick}
    >
        {icon && !isPosting && <i className={`icon far fa-fw fa-${icon}`}></i>}
        {isPosting && <i className="icon far fa-fw fa-spinner fa-spin"></i>}
        <span className="text">{children}</span>
    </button>
);

interface ActionButtonProps {
    children: React.ReactNode;
    type?: 'submit' | 'button' | 'reset';
    source?: 'primary' | 'secondary' | 'positive' | 'negative';
    className?: string;
    icon?: string;
    isPosting?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
}

export default ActionButton;
