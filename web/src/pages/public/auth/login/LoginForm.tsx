import ActionButton from 'lib/src/components/button/ActionButton';
import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import { Link } from 'react-router-dom';
import useLogin from './hooks/useLogin';

const LoginForm: React.FC = () => {
    const {
        formState: { email, password },
        handleChange,
        handleSubmit,
        isPosting,
        customValidate,
        error,
        showConfirmEmail,
        resendEmail,
    } = useLogin();

    return (
        <Form onSubmit={handleSubmit} isPosting={isPosting} error={error} omitButtons>
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
            <FormRow>
                <TextInput
                    name="password"
                    value={password}
                    label="Password"
                    onChange={handleChange}
                    type="password"
                    required
                    customValidate={customValidate}
                />
            </FormRow>
            <div className="d-flex justify-between">
                <p>
                    Don't have an account? <Link to="/auth/register">Register</Link>
                </p>
                <ActionButton icon="sign-in" isPosting={isPosting}>
                    Login
                </ActionButton>
            </div>

            {showConfirmEmail && (
                <>
                    <p>Your account is not comfirmed, please click the link in your email.</p>
                    <p>
                        <button type="button" onClick={resendEmail}>
                            Resend confimation.
                        </button>
                    </p>
                </>
            )}
        </Form>
    );
};

export default LoginForm;
