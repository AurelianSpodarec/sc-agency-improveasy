import * as React from 'react';

const CreateHeader: React.FC<ContentHeaderProps> = ({ children }) => (
    <div className="create-header">{children}</div>
);

interface ContentHeaderProps {
    children: React.ReactNode;
}

export default CreateHeader;
