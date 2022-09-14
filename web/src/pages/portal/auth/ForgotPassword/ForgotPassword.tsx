import Title from 'lib/src/components/typography/Title';
import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';

import useForgotPassword from './hooks/useForgotPassword';
import AuthCard from '../_components/authCard';

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
        <AuthCard>
            <AuthCard title="Forgot Password" />

            <Title>Forgot Password {showSuccess && 'Success'}</Title>
            {showSuccess ? (
                <p>
                    <p>Success!</p>
                    If the provided address exists in our system you will recieve an email with a
                    link to reset your password.
                </p>
            ) : (
                <Form onSubmit={handleSubmit} isPosting={isPosting} error={error}>
                    <FormRow>
                        <TextInput
                            name="email"
                            type="email"
                            value={email}
                            label="Email address"
                            onChange={handleChange}
                            required
                        />
                    </FormRow>
                </Form>
            )}
        </AuthCard>
    );
};

export default ForgotPassword;
