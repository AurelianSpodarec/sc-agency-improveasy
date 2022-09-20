const EPCRatingWrapper = ({ children, className = '' }: IProps) => {
    return <div className={`ratings ${className}`}>{children}</div>;
};

interface IProps {
    children: React.ReactNode;
    className?: string;
}

export default EPCRatingWrapper;
