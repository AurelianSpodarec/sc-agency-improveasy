import { Container, Section } from '@components/ui';
import MainPublic from '@pages/public/_components/MainPublic';
import Title from 'lib/src/components/typography/Title';
import { Link } from 'react-router-dom';
import RegisterFormContainer from './RegisterFormContainer';

const Register: React.FC = (): JSX.Element => (
    <MainPublic>
        <Section>
            <Container>
                <Title>Register</Title>
                <RegisterFormContainer />
            </Container>
            <p>
                Already have an account? <Link to="/auth/login">Log in</Link>
            </p>
        </Section>
    </MainPublic>
);

export default Register;
