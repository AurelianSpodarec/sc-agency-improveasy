import { Container, Section } from '@components/ui';
import MainPublic from '@pages/public/_components/MainPublic';
import Title from 'lib/src/components/typography/Title';
import LoginFormContainer from './LoginFormContainer';

const Login: React.FC = () => (
    <MainPublic>
        <Section>
            <Container>
                <Title>Login</Title>
                <LoginFormContainer />
            </Container>
        </Section>
    </MainPublic>
);

export default Login;
