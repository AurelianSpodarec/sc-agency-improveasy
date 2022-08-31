const ActionButton: React.FC<ActionButtonProps> = ({
    children,
    type = 'submit',
    source = 'primary',
    icon,
    isPosting = false,
    disabled = false,
    onClick = () => {},
}) => (
    <button
        className={`button ${source}`}
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
    icon?: string;
    isPosting?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
}

export default ActionButton;
