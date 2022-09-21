import { PageHeading } from '@components/ui';
import { ReactNode } from 'react';

function MainCard({ title, children, contentClass, className = '' }: MainCardProps) {
    return (
        <div className={`main-card ${className}`}>
            <div className={`main-card__heading `} style={{ backgroundColor: '#E4E4E4' }}>
                <PageHeading size="md" space="none" title={title} />
            </div>

            <div className={`main-card__content ${contentClass}`}>{children}</div>
        </div>
    );
}

export default MainCard;

interface MainCardProps {
    title: string;
    children: ReactNode;
    className?: string;
    contentClass?: string;
}
