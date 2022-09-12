import { Container, Section } from '@components/ui';
import MainPublic from '@pages/public/_components/MainPublic';
import Title from 'lib/src/components/typography/Title';
import LoginForm from './LoginForm';

const Login: React.FC = () => (
    <MainPublic>
        <Section>
            <Container>
                <Title>Login</Title>
                <LoginForm />
            </Container>
        </Section>
    </MainPublic>
);

export default Login;
