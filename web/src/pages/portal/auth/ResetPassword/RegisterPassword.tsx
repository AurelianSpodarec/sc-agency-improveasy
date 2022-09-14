import Title from 'lib/src/components/typography/Title';
import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';

import MainPublic from '@pages/public/_components/MainPublic';
import useResetPassword from './hooks/useResetPassword';
import { Container, Section } from '@components/ui';
import AuthCard from '../_components/authCard';
import AuthHeader from '../_components/authHeader';

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
            {/* {showSuccess ? (
                <p>
                    <p>Success!</p>
                    Your password has been reset.
                    {/* <Link to="/auth/login">Login</Link> */}
            {/* </p> */}
            {/* // ) : ( */}

            <Form onSubmit={handleSubmit} isPosting={isPosting} error={error}>
                <FormRow>
                    <TextInput
                        name="newPassword"
                        value={newPassword}
                        label="New Password"
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
