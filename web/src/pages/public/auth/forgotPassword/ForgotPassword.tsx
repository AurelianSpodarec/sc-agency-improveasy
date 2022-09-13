import { Container, Section } from '@components/ui';
import MainPublic from '@pages/public/_components/MainPublic';
import Title from 'lib/src/components/typography/Title';
import useForgotPassword from './hooks/useForgotPassword';
import ForgotPasswordForm from './ForgotPasswordForm';

const ForgotPassword: React.FC = () => {
    const {
        formState: { email },
        handleChange,
        handleSubmit,
        isPosting,
        error,
        showSuccess,
    } = useForgotPassword();

    return (
        <MainPublic>
            <Section>
                <Container>
                    <Title>Forgot Password</Title>
                    {showSuccess ? (
                        <p>Success</p>
                    ) : (
                        <ForgotPasswordForm
                            email={email}
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                            isPosting={isPosting}
                            error={error}
                        />
                    )}
                </Container>
            </Section>
        </MainPublic>
    );
};

export default ForgotPassword;
