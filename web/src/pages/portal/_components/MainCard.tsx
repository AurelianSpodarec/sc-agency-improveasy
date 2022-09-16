import { PageHeading } from '@components/ui';
import { ReactNode } from 'react';

function MainCard({ title, children, className = '' }: MainCardProps) {
    return (
        <div className={`main-card ${className}`}>
            <div className={`main-card__heading`}>
                <PageHeading size="md" title={title} />
            </div>

            <div className="main-card__content">{children}</div>
        </div>
    );
}

export default MainCard;

interface MainCardProps {
    title: string;
    children: ReactNode;
    className?: string;
}
