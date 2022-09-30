import { useDispatch, useSelector } from 'react-redux';
import { postRegister } from '@actions/auth/postRegister';
import { getAuthIsPosting, getAuthPostSuccess } from '@selectors/auth';

import ActionButton from 'lib/src/components/button/ActionButton';
import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import useForm from 'lib/src/hooks/useForm';

import { AuthCard, AuthSection, AuthHeader, AuthSubHeader } from '../_components';
import { useCallback, useState } from 'react';

const Register = () => {
    const dispatch = useDispatch();
    const isPosting = useSelector(getAuthIsPosting);
    const postSuccess = useSelector(getAuthPostSuccess);

    const [formState, handleChange] = useForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
    });

    const [confirmPassword, setConfirmPassword] = useState('');

    const validatePassword = useCallback(() => {
        if (formState.password !== confirmPassword) {
            return 'Passwords do not match';
        }
    }, [formState.password, confirmPassword]);

    return (
        <AuthCard>
            <AuthHeader title="Register">
                <AuthSubHeader subtitle="Already have an account?" to="/auth/login" cta="Sign in" />
            </AuthHeader>

            <AuthSection>
                <Form
                    onSubmit={() => dispatch(postRegister(formState))}
                    isPosting={isPosting}
                    omitButtons
                >
                    <div>
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

                        <TextInput
                            name="firstName"
                            value={formState.firstName}
                            placeholder="First name"
                            onChange={handleChange}
                            required
                        />
                        <TextInput
                            name="lastName"
                            value={formState.lastName}
                            placeholder="Last name"
                            onChange={handleChange}
                            required
                        />

                        <FormRow>
                            <TextInput
                                name="phone"
                                value={formState.phone || ''}
                                type="text"
                                placeholder="Phone"
                                onChange={handleChange}
                            />
                        </FormRow>
                        <FormRow>
                            <TextInput
                                name="password"
                                value={formState.password}
                                placeholder="Password"
                                onChange={handleChange}
                                type="password"
                                required
                            />
                        </FormRow>
                        <FormRow>
                            <TextInput
                                name="confirmPassword"
                                value={confirmPassword}
                                placeholder="Confirm Password"
                                onChange={(_, val) => setConfirmPassword(val)}
                                type="password"
                                required
                                customValidate={validatePassword}
                            />
                        </FormRow>
                    </div>

                    <div className="d-flex justify-between">
                        <div></div>
                        <ActionButton type="submit" className="winged" isPosting={isPosting}>
                            Register
                        </ActionButton>
                    </div>
                </Form>

                {postSuccess && <div>Please check your email and confirm it</div>}
            </AuthSection>
        </AuthCard>
    );
};

export default Register;
