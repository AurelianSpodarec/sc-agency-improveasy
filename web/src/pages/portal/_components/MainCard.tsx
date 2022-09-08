import { PageHeading } from '@components/ui';

function MainCard({ title, children }: any) {
    return (
        <div className="main-card">
            <div className="main-card__heading">
                <PageHeading size="md" title={title} />
            </div>

            <div className="main-card__content">{children}</div>
        </div>
    );
}

export default MainCard;
