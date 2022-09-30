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
import { Link } from 'react-router-dom';
import ActionButton from 'lib/src/components/button/ActionButton';
import ButtonRow from 'lib/src/components/button/ButtonRow';

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
            <AuthHeader title="Forgot Password">
                <p>
                    Already have an account? <Link to="/auth/login">Log In</Link>
                </p>
            </AuthHeader>

            <AuthSection>
                <Form
                    onSubmit={() => dispatch(postSendForgotPassword(formState.email))}
                    isPosting={isPosting}
                    error={error}
                    omitButtons
                >
                    <FormRow>
                        <TextInput
                            name="email"
                            type="email"
                            value={formState.email}
                            placeholder="Email address"
                            onChange={handleChange}
                            required
                        />
                    </FormRow>

                    {showSuccess && (
                        <div className="flex-row justify-end">
                            <p className="success">Password reset sent</p>
                        </div>
                    )}

                    <div className="flex-row justify-end">
                        <ActionButton type="submit" className="winged" success={postSuccess}>
                            Submit
                        </ActionButton>
                    </div>
                </Form>
            </AuthSection>
        </AuthCard>
    );
};

export default ForgotPassword;
