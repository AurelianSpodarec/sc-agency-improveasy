const ButtonRow: React.FC<ButtonRowProps> = ({ children, alignment = 'center' }) => (
    <div className={`button-row ${alignment}`}>{children}</div>
);

interface ButtonRowProps {
    children: React.ReactNode;
    alignment?: 'left' | 'center' | 'right';
}

export default ButtonRow;
