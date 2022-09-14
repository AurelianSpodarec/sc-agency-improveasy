import AuthHeader from '../_components/authHeader';

import { Container, Section } from '@components/ui';
import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';

import useLogin from './hooks/useLogin';
import { Link } from 'react-router-dom';
import MainPortal from '@pages/portal/_components/MainPortal';

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
        <MainPortal>
            <Container>
                <AuthHeader title="Login" />

                <section>
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
                                rightLabel={
                                    <Link to="/auth/forgot-password">Forgot password?</Link>
                                }
                            />
                        </FormRow>
                        {/*  
                    <div className="d-flex justify-between">
                        <p>
                            Don't have an account? <Link to="/auth/register">Register</Link>
                        </p>
                        <ActionButton icon="sign-in" isPosting={isPosting}>
                            Login
                        </ActionButton>
                    </div> */}

                        {/* {showConfirmEmail && (
                        <>
                            <p>
                                Your account is not comfirmed, please click the link in your email.
                            </p>
                            <p>
                                <button type="button" onClick={resendEmail}>
                                    Resend confimation.
                                </button>
                            </p>
                        </>
                    )} */}
                    </Form>
                </section>

                <footer className="d-flex justify-between">
                    <div>Remember Me</div>
                    <div>Not a member? Sign up now</div>
                </footer>
            </Container>
        </MainPortal>
    );
};

export default Login;
