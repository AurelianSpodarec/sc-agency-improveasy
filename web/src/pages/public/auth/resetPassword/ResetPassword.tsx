import Title from 'lib/src/components/typography/Title';
import useResetPassword from './hooks/useResetPassword';
import MainPublic from '@pages/public/_components/MainPublic';
import { Container, Section } from '@components/ui';
import ResetPasswordForm from './ResetPasswordForm';

const ResetPassword: React.FC = () => {
    const {
        isPosting,
        error,
        formState: { newPassword },
        handleChange,
        showSuccess,
        handleSubmit,
    } = useResetPassword();

    return (
        <MainPublic>
            <Section>
                <Container>
                    <Title>Reset Password</Title>

                    {showSuccess ? (
                        <p>
                            <p>Success!</p>
                            Your password has been reset.
                            {/* <Link to="/auth/login">Login</Link> */}
                        </p>
                    ) : (
                        <ResetPasswordForm
                            newPassword={newPassword}
                            isPosting={isPosting}
                            error={error}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />
                    )}
                </Container>
            </Section>
        </MainPublic>
    );
};

export default ResetPassword;
