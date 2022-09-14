import { ReactNode } from 'react';

function AuthCard({
    children,
    image = 'https://images.unsplash.com/photo-1613754537171-88192258d85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2871&q=80',
}: AuthCardProps) {
    return (
        // <MainPortal>
        // <Container>

        <div className="d-flex space-x-10">
            <div className="w-full lg:w-1/2">
                <img className="w-full" src={image} alt="yes" />
            </div>
            <div className="w-full lg:w-1/2">
                <div>{children}</div>
            </div>
        </div>

        // </Container>
        // </MainPortal>
    );
}

export default AuthCard;

interface AuthCardProps {
    children: ReactNode;
    image?: string;
}
