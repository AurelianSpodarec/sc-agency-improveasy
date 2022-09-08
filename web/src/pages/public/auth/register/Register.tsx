import { Container, Section } from '@components/ui';
import MainPublic from '@pages/public/_components/MainPublic';
import Title from 'lib/src/components/typography/Title';
import RegisterFormContainer from './RegisterFormContainer';

const Register: React.FC = (): JSX.Element => (
    <MainPublic>

        <Section>
        <Container>

            <Title>Register</Title>
            <RegisterFormContainer />

        </Container>
        </Section>
        
    </MainPublic>
);

export default Register;
