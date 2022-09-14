import { Container } from '@components/ui';
import MainPortal from '@pages/portal/_components/MainPortal';
import AuthHeader from './authHeader';

function AuthCard({ children, image }: any) {
    return (
        <MainPortal>
            <Container>
                <div>{children}</div>
                <div>
                    <img src={image} alt="yes" />
                </div>
            </Container>
        </MainPortal>
    );
}

export default AuthCard;
