import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import ActionButton from 'lib/src/components/button/ActionButton';

import useLogin from './hooks/useLogin';
import { Link } from 'react-router-dom';

import { AuthCard, AuthSection, AuthHeader } from '../_components';

const Login: React.FC = () => {
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
        <AuthCard>
            <AuthHeader title="Login" />

            <AuthSection>
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
                            rightLabel={<Link to="/auth/forgot-password">Forgot password?</Link>}
                        />
                    </FormRow>
                    {/* TODO: If not email verified, show message */}
                </Form>
            </AuthSection>

            <footer className="d-flex justify-between">
                <div>Remember Me</div>
                <div>
                    Not a member? <Link to="/auth/register">Sign up now</Link>
                </div>
            </footer>

            <ActionButton className="winged">Login</ActionButton>
        </AuthCard>
    );
};

export default Login;
