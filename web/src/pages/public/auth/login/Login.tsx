import { Container, Section } from '@components/ui';
import MainPublic from '@pages/public/_components/MainPublic';
import Title from 'lib/src/components/typography/Title';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const Login: React.FC = () => (
    <MainPublic>
        <Section>
            <Container>
                <Title>Login</Title>
                <LoginForm />
            </Container>
            <p>
                Don't have an account? <Link to="/auth/register">Register</Link>
            </p>
        </Section>
    </MainPublic>
);

export default Login;
