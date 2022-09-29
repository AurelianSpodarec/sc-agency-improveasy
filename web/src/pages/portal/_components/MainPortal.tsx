import { ReactNode } from 'react';
import Header from './Header';

import { DataCheck } from '@components/ui';
import useFetchEssentialData from './_hooks/useFetchEssentialData';

function MainPortal({ children }: MainPortalProps) {
    const { propertyCount, isFetching, error } = useFetchEssentialData();

    return (
        <div className="main-portal">
            <Header />
            <DataCheck dataExists={propertyCount !== null} isFetching={isFetching} error={error}>
                <main>{children}</main>
            </DataCheck>
        </div>
    );
}

export default MainPortal;

interface MainPortalProps {
    children: ReactNode;
}
