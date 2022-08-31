const ContentBlock: React.FC<ContentBlockProps> = ({ children }) => (
    <div className="content-block">{children}</div>
);

interface ContentBlockProps {
    children: React.ReactNode;
}

export default ContentBlock;
