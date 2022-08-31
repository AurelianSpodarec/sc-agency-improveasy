// alignment options are: left, center, right
const Title: React.FC<TitleProps> = ({ children, alignment = '', className = '', ...props }) => {
    return (
        <h1 className={`page-title ${alignment} ${className}`} {...props}>
            {children}
        </h1>
    );
};

interface TitleProps {
    children: React.ReactNode;
    alignment?: string;
    className?: string;
}

export default Title;
