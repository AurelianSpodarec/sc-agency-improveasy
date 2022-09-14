import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useForm from 'lib/src/hooks/useForm';
import usePrevious from 'lib/src/hooks/usePrevious';
import { getAuthError, getAuthIsPosting, getAuthPostSuccess } from '@selectors/auth';
import { postSendForgotPassword } from '@actions/auth';

import { AuthCard, AuthHeader, AuthSection } from '../_components';

const ForgotPassword: React.FC = () => {
    const dispatch = useDispatch();
    const isPosting = useSelector(getAuthIsPosting);
    const postSuccess = useSelector(getAuthPostSuccess);
    const error = useSelector(getAuthError);

    const [showSuccess, setShowSuccess] = useState(false);
    const [formState, handleChange] = useForm({
        email: '',
    });

    const prevPostSuccess = usePrevious(postSuccess);
    useEffect(() => {
        if (!prevPostSuccess && postSuccess) {
            setShowSuccess(true);
        }
    }, [postSuccess, prevPostSuccess]);

    return (
        <AuthCard>
            <AuthHeader title="Forgot Password" />

            <AuthSection>
                <Form
                    onSubmit={() => dispatch(postSendForgotPassword(formState.email))}
                    isPosting={isPosting}
                    error={error}
                >
                    <FormRow>
                        <TextInput
                            name="email"
                            type="email"
                            value={formState.email}
                            label="Email address"
                            onChange={handleChange}
                            required
                        />
                    </FormRow>
                </Form>
            </AuthSection>

            {/* TODO: Success message */}
        </AuthCard>
    );
};

export default ForgotPassword;
