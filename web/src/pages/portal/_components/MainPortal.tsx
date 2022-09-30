import { ReactNode } from 'react';
import Header from './Header';

import { Loading } from '@components/ui';

function MainPortal({ isFetching = false, children, dataExists = true }: MainPortalProps) {
    return (
        <div className="main-portal">
            <Header />
            {isFetching && !dataExists ? <Loading /> : <main>{children}</main>}
        </div>
    );
}

export default MainPortal;

interface MainPortalProps {
    children: ReactNode;
    isFetching?: boolean;
    dataExists?: boolean;
}
