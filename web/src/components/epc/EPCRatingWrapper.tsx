const EPCRatingWrapper = ({ children }: IProps) => {
    return <div className="ratings">{children}</div>;
};

interface IProps {
    children: React.ReactNode;
}

export default EPCRatingWrapper;
