import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import ActionButton from 'lib/src/components/button/ActionButton';

import useLogin from './hooks/useLogin';
import { Link } from 'react-router-dom';

import { AuthCard, AuthSection, AuthHeader, AuthSubHeader } from '../_components';

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
            <AuthHeader title="Login">
                <AuthSubHeader
                    subtitle="Dont have an account?"
                    to="/auth/register"
                    cta="Sign up now"
                />
            </AuthHeader>

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

                    {/* TODO: Please confrm your email */}

                    <div className="d-flex">
                        <input type="checkbox" />
                        <div>Remember Me</div>
                    </div>

                    <div className="d-flex justify-between">
                        <div></div>
                        <ActionButton
                            type="submit"
                            icon="sign-in"
                            className="winged"
                            isPosting={isPosting}
                        >
                            Login
                        </ActionButton>
                    </div>

                    <div style={{ marginTop: '30px' }}>
                        {showConfirmEmail && (
                            <>
                                <p>
                                    Your account is not comfirmed, please click the link in your
                                    email.
                                </p>
                                <p>
                                    <ActionButton className="winged" onClick={resendEmail}>
                                        Resend confimation.
                                    </ActionButton>
                                </p>
                            </>
                        )}
                    </div>
                </Form>
            </AuthSection>
        </AuthCard>
    );
};

export default Login;
