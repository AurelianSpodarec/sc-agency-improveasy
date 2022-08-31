const ContentItem: React.FC<ContentItemProps> = ({ children, label }) => (
    <div className="content-item">
        <label>{label}</label>
        {children}
    </div>
);

interface ContentItemProps {
    children: React.ReactNode;
    label: string;
}

export default ContentItem;
