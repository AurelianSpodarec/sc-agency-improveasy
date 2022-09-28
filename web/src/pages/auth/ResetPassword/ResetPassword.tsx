import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import useResetPassword from './hooks/useResetPassword';

import { AuthCard, AuthHeader } from '../_components';

const ResetPassword: React.FC = () => {
    const {
        isPosting,
        error,
        formState: { newPassword },
        handleChange,
        // showSuccess,
        handleSubmit,
    } = useResetPassword();

    return (
        <AuthCard>
            <AuthHeader title="Reset password" />
            {/* TODO: Show success message */}

            <Form onSubmit={handleSubmit} isPosting={isPosting} error={error}>
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
        </AuthCard>
    );
};

export default ResetPassword;
