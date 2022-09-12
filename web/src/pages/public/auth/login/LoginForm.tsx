import ActionButton from 'lib/src/components/button/ActionButton';
import ButtonRow from 'lib/src/components/button/ButtonRow';
import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
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
            <ButtonRow alignment="right">
                <ActionButton icon="sign-in" isPosting={isPosting}>
                    Login
                </ActionButton>
            </ButtonRow>

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
