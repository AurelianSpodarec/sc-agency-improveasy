import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import useResetPassword from './hooks/useResetPassword';

import { AuthCard, AuthHeader } from '../_components';
import LinkButton from 'lib/src/components/button/LinkButton';
import ButtonRow from 'lib/src/components/button/ButtonRow';

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
        <AuthCard>
            <AuthHeader title="Reset password" />
            {showSuccess ? (
                <div>
                    <p>Your password has been reset.</p>
                    <ButtonRow alignment="right">
                        <LinkButton href="/auth/login" className="winged">
                            Login
                        </LinkButton>
                    </ButtonRow>
                </div>
            ) : (
                <Form
                    onSubmit={handleSubmit}
                    isPosting={isPosting}
                    error={error}
                    buttonClassName="winged"
                >
                    <FormRow>
                        <TextInput
                            name="newPassword"
                            value={newPassword}
                            placeholder="New Password"
                            onChange={handleChange}
                            type="password"
                            required
                        />
                    </FormRow>
                </Form>
            )}
        </AuthCard>
    );
};

export default ResetPassword;
