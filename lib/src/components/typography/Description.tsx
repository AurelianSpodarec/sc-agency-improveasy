// alignmen options are: left, center, right
const Description: React.FC<DescriptionProps> = ({
    children,
    alignment = '',
    className = '',
    ...props
}) => {
    return (
        <p className={`page-description ${alignment} ${className}`} {...props}>
            {children}
        </p>
    );
};

interface DescriptionProps {
    children: React.ReactNode;
    tag?: string;
    alignment?: string;
    className?: string;
}

export default Description;
