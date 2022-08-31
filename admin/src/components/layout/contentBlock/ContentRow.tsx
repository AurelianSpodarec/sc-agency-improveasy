const ContentRow: React.FC<ContentRowProps> = ({ children }) => (
    <div className="content-row">{children}</div>
);

interface ContentRowProps {
    children: React.ReactNode;
}

export default ContentRow;
