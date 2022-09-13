import { ReactNode } from 'react';
import Header from './Header';

function MainPortal({ children }: MainPortalProps) {
    return (
        <div className="main-portal">
            <Header />
            <main>{children}</main>
        </div>
    );
}

export default MainPortal;

interface MainPortalProps {
    children: ReactNode;
}
